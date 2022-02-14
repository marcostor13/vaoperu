import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from '@services/general.service';
import { CropperComponent } from 'angular-cropperjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CImages } from 'src/app/models/images';
import { IResponseApi } from 'src/app/models/responses';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { CPromotion, CPromotionInvalid } from '../../interfaces/promotion.interface';
import { PromotionService } from '../../services/promotion.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  
  @ViewChild('angularCropper') public angularCropper: CropperComponent;
  promotionId: string
  displayModal: boolean = false
  invalid: CPromotionInvalid = new CPromotionInvalid
  imageUrl: string
  dataImage: string
  currentItem: CPromotion = new CPromotion
  currentImages: CImages[] = []
  images: File[] = [] 
  uploadPercent: number
  config = {
    aspectRatio: 16/16,
    dragMode: 'none',
    autoCropArea: 100
  }
  currentFile: File
  deleteImages: CImages[] = []
  fileUpload: any
  profileProviders: CProfileProvider[]

  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService,
    private messageService: MessageService,
    private promotionsService: PromotionService,
    private router: Router,
    private profileProviderService: ProfileProviderService,
    private confirmationService: ConfirmationService
  ) {
    this.promotionId = this.route.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {    
    this.getCompanies()
    this.getPromotion()
  }

  getPromotion(){
    if(this.promotionId){
      this.promotionsService.getById(this.promotionId).subscribe((response: IResponseApi) => {
        this.currentItem = response.data
        if (this.currentItem){
          this.replaceCurrentImagesByUrls()
        }else{
          this.router.navigate(['/admin/promotions'])
        }
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    }
  }

  getCompanies(){
    this.profileProviderService.getAllCompanies().subscribe((response:IResponseApi)=>{
      this.profileProviders = response.data
    },error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  onUpload(event: any, fileUpload:any) {
    event.currentFiles.map((file: File) => {
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.currentFile = file
        this.openModalCrroper(reader.result)
        this.fileUpload = fileUpload
      };
    })
  }  

  moveCropper() {
    this.dataImage = this.angularCropper.cropper.crop().getCroppedCanvas({
      width: 400,
      height: 400
    }).toDataURL();
  }

  openModalCrroper(image: string) {
    this.imageUrl = image
    this.dataImage = image
    this.displayModal = true
  }

  cropper() {
    this.currentImages = [...this.currentImages, { file: this.currentFile, blob: this.dataImage, url: null }]
    this.displayModal = false
    this.fileUpload.clear()
  }

  uploadImages() {
    this.generalService.isLoad(true)
    this.generalService.uploadImageMultipleByBlob(this.currentImages, 'promotions/').subscribe((res: any) => {
      this.generalService.isLoad(false)
      if (typeof res === 'number') {
        this.uploadPercent = res
      } else {
        this.currentItem.images = [...this.currentItem.images, res]        
        this.add()
      }
    })
  }

  presave() {
    if (!this.validate()) {
      if (this.deleteImages?.length > 0) {
        this.generalService.deleteImages(this.deleteImages.map(d => { return d.url })).then(() => {
          this.uploadImages()          
        }).catch(_ => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la imagenes' });
        })
      } else {
        this.uploadImages()
      }
    }
  }

  resetForm(){
    this.currentItem = new CPromotion
    this.currentImages = []
  }

  add() {
    if (!this.currentItem._id) {
      delete this.currentItem._id
    }
    this.promotionsService.save(this.currentItem).subscribe((response: IResponseApi) => {
      this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
      this.replaceCurrentImagesByUrls()
      if(!this.promotionId){
        this.resetForm()
      }
      
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }   

  replaceCurrentImagesByUrls(){
    this.currentImages = [...this.currentItem.images.map(img => {
      return { file: null, blob: null, url: img }
    })]
  }

  removeImage(image: CImages) {
    if (image.url) {
      this.deleteImages.push(image)
      this.currentItem.images = this.currentItem.images.filter(img => img !== image.url)
      this.replaceCurrentImagesByUrls()
    }else{
      this.currentImages = this.currentImages.filter(img=>img!==image)
    }
  }

  validate() {
    this.invalid = new CPromotionInvalid
    let invalid = false
    if (!this.currentItem.name) {
      invalid = true
      this.invalid.name = true
    }    
    if (!this.currentItem.profileProviderId) {
      invalid = true
      this.invalid.profileProviderId = true
    }
    if (!this.currentItem.description) {
      invalid = true
      this.invalid.description = true
    }
    if (!this.currentImages || this.currentImages.length === 0) {
      invalid = true
      this.invalid.images = true
    }
    if (invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
    }
    return invalid
  }  

  resetUploadButton(){
    this.fileUpload.clear()
  }

  getBlobOrImage(image: CImages) {
    return image.blob || image.url
  }  

  confirm(event: Event, item: CPromotion) {
    this.confirmationService.confirm({
      target: event.target,
      message: "¿Segúro que desea eliminar?",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sí",
      rejectLabel: "No",
      accept: () => {
        this.delete(item);
      }     
    });
  }

  preDelete(item: CPromotion) {
    if (item.images?.length>0) {
      this.generalService.deleteImages(item.images).then(() => {
        this.currentImages = []
        this.delete(item)
      }).catch(_ => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la imagen' });
        this.delete(item)
      })
    }else{
      this.delete(item)
    }
  }

  delete(item: CPromotion){
    this.promotionsService.delete(item._id).subscribe((response: IResponseApi) => {
      this.generalService.c('Delete', response)
      this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
      this.router.navigate(['admin/promotions'])
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  back(){
    this.router.navigate(['/admin/promotions'])
  }

}
