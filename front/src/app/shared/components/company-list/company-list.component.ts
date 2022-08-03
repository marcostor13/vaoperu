import { Component, Input, OnInit, Output, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { GeneralService } from '@services/general.service';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faStar, faStore, faMotorcycle, faShare } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { IResponseApi } from 'src/app/models/responses';
import { FavoriteService } from './../../services/favorite/favorite.service';
import { IFavorite } from './../../interfaces/favorites.interface';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnChanges {

  @Input() items: Array<CProfileProvider>
  @Output() emitEvent: EventEmitter<any> =  new EventEmitter();

  responsiveOptions: Array<any>
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
  faStore = faStore
  faMotorcycle = faMotorcycle
  faShare = faShare
  favorites: IFavorite[]

  constructor(
    private general: GeneralService,
    private authService: AuthService,
    private router: Router,
    private profileProviderService: ProfileProviderService,
    private messageService: MessageService,
    private favoriteService:FavoriteService,
    private confirmationService: ConfirmationService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1412px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '1200px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }


  ngOnInit(): void {
    this.initializeItems()
    this.role = this.authService.getRole()
    this.getFavorites()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCurrentPosition()
  }

  initializeItems(){
    if (this.items) {
      this.itemsTmp = [...this.items]
    }
  }

  getFavorites(){
    this.role = this.authService.getRole()
    if (this.role) {
      this.favoriteService.getByClientId(this.authService.getUserID()).subscribe((response:IResponseApi)=>{
        this.favorites = response.data
      })
    }
  }

  isFavorite(profileProviderId:string){
    if (this.favorites){
      let res = false
      this.favorites.map(favorite=>{
        if(favorite.profileProviderId === profileProviderId) res=true
      })
      return res
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
  }

  edit(item: any){
    this.emitEvent.emit({
      function: 'edit',
      data: item
    })
  }

  search(srt:string){
    if(srt === ''){
      this.items = [...this.itemsTmp]
    }else{
      this.items = [...this.itemsTmp.filter((item:any)=>
          item.name.indexOf(srt) > -1 ||
          item.description.indexOf(srt) > -1
        )]
    }
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

  aperture(start:string, end:string) {
    let today = moment().format('YYYY-MM-DD');
    let betweenStart = today + ' ' + start;
    let betweenEnd = today + ' ' + end;
    let time = moment().isBetween(betweenStart, betweenEnd)
    return time
  }

  addfavorites(profileProviderId:string){
    this.role = this.authService.getRole()
    if(this.role){
      this.favoriteService.save({
        clientId: this.authService.getUserID(),
        profileProviderId: profileProviderId
      }).subscribe((response:IResponseApi)=>{
        this.messageService.add({ detail: response.message, summary: 'Éxito', severity: 'success' })
        this.getFavorites()
      }, error=>{
        this.messageService.add({ detail: error.error, summary: 'Error', severity: 'error' })
      })
    }else{
      this.emitEvent.emit({
        event: 'open-login'
      })
    }
  }

  deleteFavorites(profileProviderId: string){
    let idFavorite: string
    this.favorites.map(favorite=>{
      if(favorite.profileProviderId === profileProviderId) idFavorite=favorite._id
    })

    if (idFavorite){
      this.favoriteService.delete(idFavorite).subscribe((response: IResponseApi) => {
        this.messageService.add({ detail: response.message, summary: 'Éxito', severity: 'success' })
        this.getFavorites()
      }, error => {
        this.messageService.add({ detail: error.error, summary: 'Error', severity: 'error' })
      })
    }

  }

 confirmDeleteFavorites(profileProviderId:string){
    this.confirmationService.confirm({
      message: '¿Seguro que desea eliminar de favoritos?',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      header: 'Confirmación',
      accept: () => {
        this.deleteFavorites(profileProviderId)
      }
    });
  }

  gotToViewCompany(item: CProfileProvider){
    this.profileProviderService.getUrlByProfileProviderId(item._id).subscribe((response:IResponseApi)=>{
      if (response?.data[0]){
        this.router.navigate([`/${response.data[0].url.trim()}`])
      }else{
        this.messageService.add({detail: 'Url no configurada, contactate con el administrador', summary: 'Error', severity:'error'})
      }
    })
  }

  shared(url: string, name: string){
    const urlShare = `https://vaoperu.com/${url}`
    window.navigator.share({ url: urlShare, title: `Vao Perú - ${name}`})
  }

  rad(x) {
    return x * Math.PI / 180;
  }

  getKilometros(lat1, lon1, lat2, lon2) {
    var R = 6378.137; //Radio de la tierra en km
    var dLat = this.rad(lat2 - lat1);
    var dLong = this.rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.rad(lat1)) * Math.cos(this.rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(1); //Retorna un decimales
  }

  async getCurrentPosition() {

    const currentPosition = await this.general.getPosition()
    if (currentPosition) {
      this.items = [...this.items.map(i=>{
        if (i.lat && i.lng) {
          i.distance = parseFloat(this.getKilometros(i.lat, i.lng, currentPosition.lat, currentPosition.lng))
        } else {
          i.distance = 1000000
        }
        return i
      })]
    }
    this.items = [...this.items.sort(function (a, b) {
      if (a['distance'] > b['distance']) {
        return 1;
      }
      if (a['distance'] < b['distance']) {
        return -1;
      }
      return 0;
    })]

  }



}
