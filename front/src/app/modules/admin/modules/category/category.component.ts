import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { ConfirmationService } from 'primeng/api';
import { IResponseApi } from 'src/app/models/responses';
import { SubSink } from 'SubSink';
import { CCategory, CCategoryInvalid } from './models/category'
import { CategoryService } from './services/category.service';
import { MessageService } from 'primeng/api';
import { CImages } from 'src/app/models/images';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {

  public subs = new SubSink()
  displayModal: boolean = false
  items: CCategory[]
  currentItem: CCategory = new CCategory
  invalid: CCategoryInvalid = new CCategoryInvalid
  //IMAGES

  currentImage: CImages
  images: File[] = []
  uploadPercent: number
  deleteImage: CImages

  constructor(
    private categoryService: CategoryService,
    private general: GeneralService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.subs.add(
      this.categoryService.get().subscribe((response: IResponseApi) => {
        this.items = response.data                
      }, error => {        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });       
      })
    )
  }

  validate() {
    this.invalid = new CCategoryInvalid
    let invalid = false
    if (!this.currentItem.name) {
      invalid = true
      this.invalid.name = true      
    }
    if (!this.currentImage) {
      invalid = true
      this.invalid.image = true
    }
    if(invalid){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
    }
    return invalid
  }

  reset() {    
    this.currentItem = new CCategory    
    this.currentImage = null
    this.uploadPercent = 0
  }

  addEdit(item: CCategory = null) {
    if (item) {
      this.currentItem = item  
      if (item.image){
        this.currentImage = { file: null, blob: null, url: item.image  }
      }
    } else {
      this.reset()
    }
    this.displayModal = true
  }

  confirm(event: Event, item: CCategory) {
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
    this.subs.add(
      this.categoryService.save(this.currentItem).subscribe((response: IResponseApi) => {
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
        this.currentItem = new CCategory
        this.get()
        this.reset()
      }, error => {        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });   
      })
    )    
  }

  updateAll(){
    this.subs.add(
      this.categoryService.updateAll(this.items).subscribe((response: IResponseApi) => {
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
        this.currentItem = new CCategory
        this.get()
      }, error => {
        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });   
      })
    )
  }

  delete(item: CCategory) {
    if (item.image) {
      this.general.deleteImage(item.image).then(() => {
        this.currentImage = null
        this.subs.add(
          this.categoryService.delete(item._id).subscribe((response: IResponseApi) => {
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            this.currentItem = new CCategory
            this.get()
          }, error => {
            
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
          })
        )
      }).catch(_ => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la imagen' });
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
    event.currentFiles.map((file: any) => {
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.currentImage = { file: file, blob: reader.result, url: null }
      };
    })
    this.images = []
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
      if (this.currentImage?.file) {
        this.general.uploadImage(this.currentImage.file, 'categories/').subscribe((res: any) => {
          if (typeof res === 'number') {
            this.uploadPercent = res
          } else {
            this.currentImage = { file: null, blob: null, url: res }
            this.currentItem.image = res
            this.add()
          }
        })
      } else {
        this.add()
      }
    }
  }

  getBlobOrImage(image: CImages) {
    return image.blob || image.url
  }

}
