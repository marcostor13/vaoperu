import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { IResponseApi } from 'src/app/models/responses';
import { SubSink } from 'subsink';
import { ProfileProviderService } from './services/profile-provider.service';
import { CProfileProvider } from './models/profile-provider';
import { CImages } from 'src/app/models/images';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { DistrictService } from 'src/app/modules/admin/modules/district/services/district.service';
// import { googlemaps } from '@types/googlemaps';

/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-profile-provider',
  templateUrl: './profile-provider.component.html',
  styleUrls: ['./profile-provider.component.scss']
})
export class ProfileProviderComponent implements OnInit, OnDestroy {

  @ViewChild('map') el: ElementRef;
  
  subs = new SubSink()
  profileProvider: CProfileProvider = new CProfileProvider

  //IMAGES

  currentImage: CImages
  images: File[] = []
  uploadPercent: number
  deleteImage: CImages 
  districts: any
  

  constructor(
    private profileProvideService: ProfileProviderService,
    private general: GeneralService,
    private messageService: MessageService,
    private authService: AuthService,
    private districtService: DistrictService
  ) { }

  ngOnInit(): void {
    this.getProfileProvider()
    this.getDistricts()
  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }

  getRole():string[]{
    return this.authService.getRole()
  }

  getProfileProvider(){
    this.subs.add(
      this.profileProvideService.get().subscribe((response: IResponseApi)=>{
        if (response.data){
          this.profileProvider = response.data
          if(this.profileProvider.image){
            this.currentImage = { file: null, blob: null, url: this.profileProvider.image }
          }
        }        
      }, error =>{        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message })
      })
    )
  }

  getDistricts(){
    this.subs.add(
      this.districtService.get().subscribe((response: IResponseApi)=>{
        this.districts = response.data
      },error=>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message })
      })
    )
  }

  removeImage(image: CImages) {
    if (image.url) {
      this.deleteImage = image
      this.profileProvider.image = ''
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
    
    this.profileProvider.userid = this.authService.getUserID()

    if(this.deleteImage){
      this.general.deleteImage(this.deleteImage.url).then(() => {
        this.currentImage = null
      }).catch(_ => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la imagen' });
      })
    }

    if (this.currentImage?.file){
      this.general.uploadImage(this.currentImage.file, 'profile/').subscribe((res:any)=>{
        if (typeof res === 'number') {
          this.uploadPercent = res
        }else{          
          this.profileProvider.image = res
          this.save()
        }
      })
    }else{
      this.save()
    } 
  }

  save(){
    this.general.c('SAVE PRE', this.profileProvider)
    this.profileProvider.distrinctName = this.general.getItemByID(this.districts, this.profileProvider.districtId).name    
    this.subs.add(
      this.profileProvideService.save(this.profileProvider).subscribe((response: IResponseApi) => {
        this.general.c('Save Profile Provider', response)        
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
        this.getProfileProvider()
        this.uploadPercent = 0
      }, error => {
        
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  getBlobOrImage(image:CImages){
    return image.blob || image.url
  }




  setUbication() {    

    if(this.profileProvider.addressMaps){
      const service = new google.maps.places.PlacesService(
        new google.maps.Map(this.el.nativeElement, {
          center: new google.maps.LatLng(-12.0202343, -77.0502994),
          zoom: 15,
        })
      )
      const request = {
        query: this.profileProvider.addressMaps,
        fields: ["geometry"],
      }

      service.findPlaceFromQuery(request, (results: google.maps.places.PlaceResult[], status: google.maps.places.PlacesServiceStatus) => {
        if (results && results[0]) {
          this.profileProvider.lat = results[0].geometry.location.lat()
          this.profileProvider.lng = results[0].geometry.location.lng()
          this.presave()
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo obtener la ubicación revise la dirección' })
        }
      })
    }else{
      this.presave()
    }   

  }


}
