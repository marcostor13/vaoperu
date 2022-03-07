import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CImages } from 'src/app/models/images';
import { IResponseApi } from 'src/app/models/responses';
import { SubSink } from 'subsink';
import { COffer, COfferInvalid } from './models/offer'
import { OfferService } from './services/offer.service';
import { ProfileProviderService } from '../profile-provider/services/profile-provider.service';
import { CProfileProvider } from '../profile-provider/models/profile-provider';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  public subs = new SubSink()
  displayModal: boolean = false
  items: COffer[]
  currentItem: COffer = new COffer
  invalid: COfferInvalid = new COfferInvalid
  profileProvider: CProfileProvider

  //IMAGES
  currentImages: CImages[]
  images: File[] = []
  uploadPercent: number
  deleteImages: CImages[]

  constructor(
    private offerService: OfferService,
    private general: GeneralService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private profileProviderService: ProfileProviderService
  ) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.subs.add(
      this.offerService.get().subscribe((response: IResponseApi) => {
        this.items = response.data
        if(response.data?.length === 0){
          this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'No hay ofertas disponibles' });
        }        
      }, error => {
        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  validate() {
    this.invalid = new COfferInvalid
    let invalid = false
    if (!this.currentItem.name) {
      invalid = true
      this.invalid.name = true
    }
    if (this.currentImages?.length === 0) {
      invalid = true
      this.invalid.images = true
    }
    if (invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Revise los campos' });
    }
    return invalid
  }

  reset() {
    this.currentItem = new COffer
    this.currentImages = []
    this.uploadPercent = 0
  }

  addEdit(item: COffer = null) {
    this.currentImages = []
    if (item) {
      this.currentItem = item
      if (item.images) {
        item.images.map((image:string)=>{
          this.currentImages = [...this.currentImages, { file: null, blob: null, url: image }]
        })
      }
    } else {
      this.reset()
    }
    this.displayModal = true
  }

  confirm(event: Event, item: COffer) {
    this.confirmationService.confirm({
      target: event.target,
      message: "¿Segúro que desea eliminar?",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sí",
      rejectLabel: "No",
      accept: () => {
        this.preDelete(item);
      },
      reject: () => {
        // Nothing
      }
    });
  }

  add() {

    this.subs.add(
      this.profileProviderService.get().subscribe((response:IResponseApi)=>{
        this.profileProvider = response.data
        this.currentItem.profileProviderId = this.profileProvider._id
        this.subs.add(
          this.offerService.save(this.currentItem).subscribe((response: IResponseApi) => {            
            this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
            if(!this.currentItem?._id){
              this.reset()
            }
            this.get()
          }, error => {            
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
          })
        )        
      }, error=>{
        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )

  }

  delete(item:COffer){
    this.currentImages = []
    this.subs.add(
      this.offerService.delete(item._id).subscribe((response: IResponseApi) => {
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
        this.currentItem = new COffer
        this.get()
      }, error => {        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  async preDelete(item: COffer) {
    if (item.images) {
      await this.general.deleteImages(item.images)
      this.delete(item)
    } else {
      this.delete(item)
    }
  }

  //IMAGE

  removeImage(image: CImages) {
    if (image.url) {
      this.deleteImages = [...this.deleteImages, image]    
      this.currentItem.images = [...this.currentItem.images.filter((ima: string) => ima !== image.url)]
    }
    this.currentImages = [...this.currentImages.filter((ima: CImages) => ima.url !== image.url)]
  }


  onUpload(event: any) {
    event.currentFiles.map((file: any) => {
      const reader: any = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.currentImages = [...this.currentImages, { file: file, blob: reader.result, url: null }]       
      };
    })
    this.images = []
  }
 
  async presave() {
    if (!this.validate()) {
      this.general.isLoad(true)
      if (this.deleteImages?.length > 0) {
        const images = []
        this.deleteImages.map((image: CImages)=>{
          if (image.url) {
            images.push(image.url)
          }
        })
        const deleteImages = await this.general.deleteImages(images)
        this.uploadImages()
      }else{
        this.uploadImages()
      }
    }
  }

  uploadImages(){    
    if (this.currentImages?.length > 0) {     
        let count = 1
        this.currentImages.map(async (images:CImages)=>{
          if (images.file) {
            const url: any = await this.general.uploadImage(images.file, 'offers/')?.toPromise()
            if (url) {
              this.currentItem.images = [...this.currentItem.images, url]
            }
          }
          this.uploadPercent = count*100/this.currentImages.length
          count++         
          if(count === this.currentImages.length+1){
            this.add()
          }
        }) 
    } else {
      this.add()
    }
  }

  getBlobOrImage(image: CImages) {
    return image.blob || image.url
  }

  //PRODUCT LIST COMPONENT
  offerListEvent($event){
    switch ($event.function) {
      case 'edit':
        this.addEdit($event.data)
        break;
    
      default:
        break;
    }
  }



}
