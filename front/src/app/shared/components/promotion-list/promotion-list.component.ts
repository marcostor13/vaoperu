import { Component, Input, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { GeneralService } from '@services/general.service';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { IResponseApi } from 'src/app/models/responses';
import { IFavorite } from '../../interfaces/favorites.interface';
import { CPromotion } from 'src/app/modules/admin/modules/promotions/interfaces/promotion.interface';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {

  @Input() items: Array<CPromotion>
  @Input() profileProviders: CProfileProvider[]
  @Output() emitEvent: EventEmitter<any> =  new EventEmitter();
  sortOptions: SelectItem[]
  sortOrder: number
  sortField: string
  role: string[]
  itemsTmp: any[]
  effect:string = 'scrollx'
  isMobile:boolean = false
  displayModal: boolean = false
  currentItem: any
  faWhatsapp = faWhatsapp
  faPhone = faPhone
  faStar = faStar
  favorites: IFavorite[]

  constructor(
    private general: GeneralService,
    private authService: AuthService,
    private router: Router,
    private profileProviderService: ProfileProviderService,
    private messageService: MessageService,
  ) {
   
  }
  
  
  ngOnInit(): void {
    this.initializeItems()    
    this.role = this.authService.getRole() 
  }

  initializeItems(){
    if (this.items) {
      this.itemsTmp = [...this.items]
    }
  }  

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth<768){
      this.isMobile = true
    }else{
      this.isMobile = false
    }
  }
  
  onSortChange(event) {
    this.general.c('SORT BY', event)
  }

  getPrice(price: any){
    if(typeof price === 'number'){
      return `S/${price}`
    }else{
      return price
    }
  }

  openModal(item: any){
    this.currentItem = item
    this.displayModal = true
  }
 
  getDataProvider(profileProviderId:string, key:string){
    return this.profileProviders.filter(p => p._id === profileProviderId)[0][key]
  }

  goToStore(profileProviderId: string) {
    this.profileProviderService.getUrlByProfileProviderId(profileProviderId).subscribe((response: IResponseApi) => {
      if (response?.data[0]) {
        this.router.navigate([`/${response.data[0].url.trim()}`])
      } else {
        this.messageService.add({ detail: 'Url no configurada, contactate con el administrador', summary: 'Error', severity: 'error' })
      }
    })
  }

}
