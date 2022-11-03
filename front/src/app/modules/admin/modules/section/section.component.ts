import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { ConfirmationService } from 'primeng/api';
import { IResponseApi } from 'src/app/models/responses';
import { SubSink } from 'SubSink';
import { SectionService } from './services/section.service';
import { MessageService } from 'primeng/api';
import { CImages } from 'src/app/models/images';
import { CItem, CItemInvalid, CSection, CSectionInvalid, CSubitem, CSubitemInvalid, IItemsData, ISectionsData } from './models/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent implements OnInit {

  public subs = new SubSink()
  displayModal: boolean = false
  sectionsList: CSection[] = []
  itemsList: CItem[] = []
  currentSection: CSection = new CSection
  currentItem: CItem = new CItem
  currentSubitem: CSubitem = new CSubitem
  invalidSection: CSectionInvalid = new CSectionInvalid
  invalidItem: CItemInvalid = new CItemInvalid
  invalidSubitem: CSubitemInvalid = new CSubitemInvalid
  currentImage: CImages
  images: File[] = []
  uploadPercent: number
  deleteImage: CImages
  currentType: string = ''
  items: ISectionsData[]
  buttonDisabled = false
  listItems: CItem[]
  listSubitems: CSubitem[]
  listItemsData: IItemsData[]

  constructor(
    private sectionService: SectionService,
    private general: GeneralService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getSectionsAndItems()
  }

  getSectionsAndItems() {
    this.subs.add(
      this.sectionService.getAllSectionsAndItems().subscribe((response: IResponseApi) => {
        this.items = [...response.data]
        this.sectionsList = [...this.items.map(i=>{return i.section})]
        this.items.map(i=>{
          this.itemsList = [...this.itemsList, ...i.items.map(i=>{return i.item})]
        })
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  getNameSection(id: string){
    return this.sectionsList.find(s=>s._id === id).name
  }

  resetInvalid(){
    switch (this.currentType) {
      case 'section':
        this.invalidSection = {
          name: false
        }
        break;
      case 'item':
        this.invalidItem = {
          name: false,
          image: false,
          sectionId: false
        }
        break;
      case 'subitem':
        this.invalidSubitem = {
          name: false,
          image: false,
          itemId: false
        }
        break;

      default:
        break;
    }
  }

  reset(){
    this.currentImage = null
    this.uploadPercent = 0
    this.listItems = undefined
    this.listSubitems = undefined
    switch (this.currentType) {
      case 'section':
        this.currentSection = {
          name: ''
        }
        break;
      case 'item':
        this.currentItem = {
          name: '',
          image: '',
          sectionId: ''
        }
        break;
      case 'subitem':
        this.currentSubitem = {
          name: '',
          image: '',
          itemId: ''
        }
        break;
      default:
        break;
    }
  }


  validateSection() {
    this.resetInvalid()
    let invalid = false
    if (!this.currentSection.name) {
      invalid = true
      this.invalidSection.name = true
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
    }
    return invalid
  }

  validateItem(){
    this.resetInvalid()
    let invalid = false
    if (!this.currentItem.name) {
      invalid = true
      this.invalidItem.name = true
    }
    if (!this.currentImage) {
      invalid = true
      this.invalidItem.image = true
    }
    if (!this.currentItem.sectionId) {
      invalid = true
      this.invalidItem.sectionId = true
    }
    if(invalid){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
    }
    return invalid
  }

  validateSubitem(){
    this.resetInvalid()
    let invalid = false
    if (!this.currentSubitem.name) {
      invalid = true
      this.invalidSubitem.name = true
    }
    if (!this.currentImage) {
      invalid = true
      this.invalidSubitem.image = true
    }
    if (!this.currentSubitem.itemId) {
      invalid = true
      this.invalidSubitem.itemId = true
    }
    if(invalid){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
    }
    return invalid
  }

  initAdd(type:string){
    this.addEdit(null, type)
  }

  addEdit(item, type:string) {
    this.currentType = type
    if (item) {
      switch (this.currentType) {
        case 'section':
          this.currentSection = item
          break;
        case 'item':
          this.currentItem = item
          break;
        case 'subitem':
          this.currentSubitem= item
          break;
        default:
          break;
      }
      if (item.image){
        this.currentImage = { file: null, blob: null, url: item.image }
      }
    } else {
      this.reset()
    }
    this.displayModal = true
  }

  confirm(event: Event, item) {
    this.confirmationService.confirm({
      target: event.target,
      message: "¿Segúro que desea eliminar?",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sí",
      rejectLabel: "No",
      accept: () => {
        this.delete(item);
      },
      reject: () => {
        // Nothing
      }
    });
  }

  add() {
    let payload
    let type
    switch (this.currentType) {
        case 'section':
          payload = this.currentSection
          type = 'section'
          break;
        case 'item':
          payload = this.currentItem
          type = 'item-section'
          break;
        case 'subitem':
          payload = this.currentSubitem
          type = 'subitem-section'
          break;
        default:
          break;
    }

    this.sectionService.save(payload, type).subscribe((response: IResponseApi) => {
      this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
      this.reset()
      this.getSectionsAndItems()
      this.displayModal = false
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  updateAll(type:string){
    let payload
    switch (type) {
        case 'section':
          payload = this.sectionsList
          type = 'section'
          break;
        case 'item':
          payload = this.listItems
          type = 'item-section'
          break;
        case 'subitem':
          payload = this.listSubitems
          type = 'subitem-section'
          break;
        default:
          break;
    }
    this.sectionService.updateAll(payload, type).subscribe((response: IResponseApi) => {
      this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
      this.reset()
      this.getSectionsAndItems()
      this.displayModal = false
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })

  }

  selectionChangeItem($event){
    this.listItemsData = undefined
    this.listItems = undefined
    const itemsData: IItemsData[] = this.items.find(i=>i.section._id === $event.value[0]._id).items
    this.listItemsData = itemsData
    this.listItems = itemsData.map(i=>{return i.item})
  }

  selectionChangeSubitem($event){
    this.listSubitems = undefined
    const itemId = $event.value[0]._id
    this.listSubitems = this.listItemsData.find(i=>i.item._id === itemId).subitems
  }

  delete(item) {
    let type
    switch (this.currentType) {
      case 'section':
        type = 'section'
        break;
      case 'item':
        type = 'item-section'
        break;
      case 'subitem':
        type = 'subitem-section'
        break;
      default:
        break;
    }
    if (item.image) {
      this.general.deleteImage(item.image).then(() => {
        this.currentImage = null
        this.sectionService.delete(item._id, type).subscribe((response: IResponseApi) => {
          this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
          this.reset()
          this.getSectionsAndItems()
        }, error => {

          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        })
      }).catch(_ => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la imagen' });
      })
    }else{
      this.sectionService.delete(item._id, type).subscribe((response: IResponseApi) => {
          this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
          this.reset()
          this.getSectionsAndItems()
        }, error => {

          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        })
    }
  }

  //IMAGE

  removeImage(image: CImages) {
    if (image.url) {
      this.deleteImage = image
      this.currentItem.image = ''
    }
    this.currentImage = null
  }

  onUpload(event: any) {
    this.buttonDisabled = true
    event.currentFiles.map((file: any) => {
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.currentImage = { file: file, blob: reader.result, url: null }
        this.buttonDisabled = false
      };
    })
    this.images = []
  }

  validate(){
    switch (this.currentType) {
        case 'section':
          return this.validateSection()
        case 'item':
          return this.validateItem()
        case 'subitem':
          return this.validateSubitem()
      }
  }

  presave() {
    if (!this.validate()) {
      if (this.deleteImage) {
        this.general.deleteImage(this.deleteImage.url).then(() => {
          this.currentImage = null
        }).catch(_ => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la imagen' });
        })
      }
      if(this.currentType !== 'section'){
        if (this.currentImage?.file) {
          this.general.uploadImage(this.currentImage.file, `${this.currentType}/`).subscribe((res: any) => {
            if (typeof res === 'number') {
              this.uploadPercent = res
            } else {
              this.currentImage = { file: null, blob: null, url: res }
              if(this.currentType === 'item'){
                this.currentItem.image = res
              }else if(this.currentType === 'subitem'){
                this.currentSubitem.image = res
              }
              this.add()
            }
          })
        } else {
          this.add()
        }
      }else{
        this.add()
      }
    }
  }

  getBlobOrImage(image: CImages) {
    return image.blob || image.url
  }

}
