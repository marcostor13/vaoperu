import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { ConfirmationService } from 'primeng/api';
import { IResponseApi } from 'src/app/models/responses';
import { SubSink } from 'SubSink';
import { CSubcategory, CSubcategoryInvalid } from './models/subcategory'
import { SubcategoryService } from './services/subcategory.service';
import { MessageService } from 'primeng/api';
import { CImages } from 'src/app/models/images';
import { CategoryService } from '../category/services/category.service';
import { CCategory } from '../category/models/category';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})

export class SubcategoryComponent implements OnInit {

  public subs = new SubSink()
  displayModal: boolean = false
  items: CSubcategory[]
  currentItem: CSubcategory = new CSubcategory
  invalid: CSubcategoryInvalid = new CSubcategoryInvalid
  categories: CCategory[]
  //IMAGES

  currentImage: CImages
  images: File[] = []
  uploadPercent: number
  deleteImage: CImages

  constructor(
    private subcategoryService: SubcategoryService,
    private categoryService: CategoryService,
    private general: GeneralService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.get()
    this.getCategories()
  }

  get() {
    this.subs.add(
      this.subcategoryService.get().subscribe((response: IResponseApi) => {
        this.general.c('Get', response)
        this.items = response.data
                
      }, error => {        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });       
      })
    )
  }

  getCategories(){
    this.subs.add(
      this.categoryService.get().subscribe((response: IResponseApi)=>{
        this.categories = response.data
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  validate() {
    this.invalid = new CSubcategoryInvalid
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
    this.currentItem = new CSubcategory    
    this.currentImage = null
    this.uploadPercent = 0
  }

  addEdit(item: CSubcategory = null) {
    this.general.c('ITem', item)
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

  confirm(event: Event, item: CSubcategory) {
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
      this.subcategoryService.save(this.currentItem).subscribe((response: IResponseApi) => {        
        this.general.c('Add', response)
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
        this.currentItem = new CSubcategory
        if(!this.currentItem._id){
          this.reset()
        }
        this.get()
      }, error => {
        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });   
      })
    )    
  }

  updateAll(){
    this.general.c('reorder', this.items)
    this.subs.add(
      this.subcategoryService.updateAll(this.items).subscribe((response: IResponseApi) => {
        
        this.general.c('updateAll', response)
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
        this.currentItem = new CSubcategory
        this.get()
      }, error => {
        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });   
      })
    )
  }

  delete(item: CSubcategory) {
    if (item.image) {
      this.general.deleteImage(item.image).then(() => {
        this.currentImage = null
        this.subs.add(
          this.subcategoryService.delete(item._id).subscribe((response: IResponseApi) => {
            
            this.general.c('Delete', response)
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            this.currentItem = new CSubcategory
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
    this.general.c('RemoveImage', image)
    if (image.url) {
      this.deleteImage = image
      this.currentItem.image = ''
    }
    this.currentImage = null
  }

  onUpload(event: any) {
    this.general.c('onUpload', event)
    event.currentFiles.map((file: any) => {
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.currentImage = { file: file, blob: reader.result, url: null }
        this.general.c('Onupload', this.currentImage)
      };
    })
    this.images = []
  }

  presave() {
    if (!this.validate()) {
      this.general.isLoad(true)
      this.general.c('save image', this.deleteImage)
      if (this.deleteImage) {
        this.general.deleteImage(this.deleteImage.url).then(() => {
          this.currentImage = null
        }).catch(_ => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la imagen' });
        })
      }  
      if (this.currentImage?.file) {
        this.general.uploadImage(this.currentImage.file, 'subcategories/').subscribe((res: any) => {
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
