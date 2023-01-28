import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faStar, faShare } from '@fortawesome/free-solid-svg-icons';
import { GeneralService } from '@services/general.service';
import { IResponseApi } from 'src/app/models/responses';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { COffer } from 'src/app/modules/provider/modules/offer/models/offer';
import { OfferService } from 'src/app/modules/provider/modules/offer/services/offer.service';
import { CProduct } from 'src/app/modules/provider/modules/product/models/product';
import { ProductService } from 'src/app/modules/provider/modules/product/services/product.service';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { ITabList } from './interfaces/view-company.interface';
import { FavoriteService } from './../../../../shared/services/favorite/favorite.service';
import { IFavorite } from '@shared/interfaces/favorites.interface';
import { ConfirmationService, MessageService } from 'primeng/api';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { IUrl } from './../../../../../../../back/src/models/url';
import { fromEvent, Subject } from 'rxjs';
import { delay, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.scss']
})
export class ViewCompanyComponent implements OnInit, OnDestroy {

  companyUrl: string
  profileProvider: CProfileProvider
  eventHeader: any
  faWhatsapp = faWhatsapp
  faPhone = faPhone
  products: CProduct[]
  productsTmp: CProduct[]
  offers: COffer[]
  tabs: ITabList[] = []
  role: string[]
  favorites: IFavorite[]
  faShare = faShare
  faStar = faStar
  faArrowLeft = faArrowLeft
  url: IUrl
  private unsubscriber : Subject<void> = new Subject<void>();
  urlBack: string
  private subs = new SubSink()

  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService,
    private profileProviderService: ProfileProviderService,
    private authService: AuthService,
    private productService: ProductService,
    private offersService: OfferService,
    private favoriteService: FavoriteService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private store: Store<any>
  ) {
    this.companyUrl = this.route.snapshot.paramMap.get('id')
    this.subscriptionUrlBack()
  }

  ngOnInit(): void {
    this.getUrlData()
    this.getFavorites()
    // this.setHistory()

  }

  setHistory(){
    history.pushState(null, '');
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      if(this.url.isIndividual){
        history.pushState(null, '');
      }else{
         if(this.urlBack){
           this.router.navigate([this.urlBack])
        }
      }
    });
  }

  subscriptionUrlBack(){
      this.subs.add(
        this.store.select((state) => state.Reducer.urlBack)
        .pipe(delay(0))
        .subscribe((urlBack: string) => {
          this.urlBack = urlBack;
        })
      )
  }

  ngOnDestroy(): void {
    this.unsubscriber.next()
    this.unsubscriber.complete()
    this.subs.unsubscribe()
  }


  getUrlData(){
    this.profileProviderService.getUrlByUrl(this.companyUrl).subscribe((response:IResponseApi)=>{
      this.url = response.data[0]
      if(response?.data[0]?.profileProviderId){
        this.getProfileProvider(response?.data[0]?.profileProviderId)
      }else{
        this.router.navigate(['/404'])
      }
    })
  }

  getProfileProvider(profileProviderId:string){
    this.profileProviderService.getAllById(profileProviderId).subscribe((response: IResponseApi) => {
      this.profileProvider = response.data.profileProvider
      this.products = response.data.products
      this.productsTmp = response.data.products
      this.offers = response.data.offers
      this.formatTabs()
      this.getCurrentPosition()
    })
  }

  formatTabs(){
    this.tabs = []
    let prods = [...this.products.filter(product => product.isFeatured)]
    if (this.products.length > 0){
      this.tabs = [...this.tabs, {
        title: 'Productos',
        data: this.products
      }]
    }

    if (prods.length > 0){
      this.tabs = [...this.tabs, {
        title: 'Destacados',
        data: prods
      }]
    }


    if (this.offers.length > 0) {
      this.tabs = [...this.tabs, {
        title: 'Ofertas',
        data: this.offers
      }]
    }

  }

  addfavorites() {
    if (this.authService.getRole()) {
      //add Favorites
    } else {
      this.eventHeader = {
        event: 'open-login'
      }
    }
  }

  getFavorites() {
    this.role = this.authService.getRole()
    if (this.role) {
      this.favoriteService.getByClientId(this.authService.getUserID()).subscribe((response: IResponseApi) => {
        this.favorites = response.data
      })
    }
  }

  isFavorite(profileProviderId: string) {
    if (this.favorites) {
      let res = false
      this.favorites.map(favorite => {
        if (favorite.profileProviderId === profileProviderId) res = true
      })
      return res
    }
  }

  deleteFavorites(profileProviderId: string) {
    let idFavorite: string
    this.favorites.map(favorite => {
      if (favorite.profileProviderId === profileProviderId) idFavorite = favorite._id
    })

    if (idFavorite) {
      this.favoriteService.delete(idFavorite).subscribe((response: IResponseApi) => {
        this.messageService.add({ detail: response.message, summary: 'Éxito', severity: 'success' })
        this.getFavorites()
      }, error => {
        this.messageService.add({ detail: error.error, summary: 'Error', severity: 'error' })
      })
    }
  }

  confirmDeleteFavorites(profileProviderId: string) {
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

  allproduct(){
      this.router.navigate([ this.url.url + `/productos/0/des/1`])
  }
  information(){
    this.router.navigate([ this.url.url + `/informacion/0/des/1`])
  }

  aperture(start:string, end:string) {
    let today = moment().format('YYYY-MM-DD');
    let betweenStart = today + ' ' + start;
    let betweenEnd = today + ' ' + end;
    let time = moment().isBetween(betweenStart, betweenEnd)
    return time
  }

  shared(url: string, name: string){
    const urlShare = `https://vaoperu.com/${this.url.url}`.replace(' ', '-')
    window.navigator.share({ url: urlShare, title: `${name}`, text: `${name}`})
  }

  rad(x) {
    return x * Math.PI / 180;
  }

  eventSearch(key:string){
    if(key){
      this.products = [...this.productsTmp.filter(p=>p.name.toLowerCase().indexOf(key.toLowerCase())>-1)]
    }else{
      this.products = [...this.productsTmp]
    }
    this.formatTabs()
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

    const currentPosition = await this.generalService.getPosition()
    if (currentPosition) {

        if (this.profileProvider.lat && this.profileProvider.lng) {
          this.profileProvider.distance = parseFloat(this.getKilometros(this.profileProvider.lat, this.profileProvider.lng, currentPosition.lat, currentPosition.lng))
        } else {
          this.profileProvider.distance = 1000000
        }
    }
  }

  back(){
    if(this.router.url.indexOf('0/des/1')>-1){
      this.router.navigate([ this.url.url ])
    }else{
      if(this.urlBack){
        this.router.navigate([this.urlBack])
      }else{
        window.history.back()
      }
    }
  }
}
