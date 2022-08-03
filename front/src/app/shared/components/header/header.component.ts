import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../modules/auth/services/auth.service';
import { faSearch, faChevronDown, faSignOutAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CUser } from './../../../models/user';
import { GeneralService } from '@services/general.service';
import { ICart } from '@shared/interfaces/cart.interfaces';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { ProductService } from 'src/app/modules/provider/modules/product/services/product.service';
import { IResponseApi } from './../../../models/responses';
import { MessageService } from 'primeng/api';
import { CProduct } from 'src/app/modules/provider/modules/product/models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {

  faSearch = faSearch
  faChevronDown = faChevronDown
  faSignOutAlt = faSignOutAlt
  faShoppingCart = faShoppingCart
  key:string

  menuHeader: boolean = false
  isShowInputSearch: boolean = false
  isCrossMenu: boolean = false
  displayModal: boolean = false
  user: CUser
  display: boolean = false
  role: string[]
  cart: ICart
  displayCart: boolean = false
  products: CProduct[]
  public latitude;
  public longitude;
  public address;

  private subs = new SubSink()
  @Input() eventHeader: any

  constructor(
    public router: Router,
    private authService: AuthService,
    private general: GeneralService,
    private store: Store<any>,
    private productsService: ProductService,
    private messageService: MessageService,
    ) {
    this.subscriptionCart()
  }

  ngOnInit(): void {
    this.validateSession();
    this.getLocation();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.eventHeader?.event === 'open-login') {
      this.openLogin()
    }
    this.role = this.authService.getRole()
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  subscriptionCart() {
    this.subs.add(
      this.store.select((state) => state.Reducer.cart)
        .pipe(delay(0))
        .subscribe((cart: ICart) => {
          this.cart = cart;
          if (!this.products || !this.cart || this.products[0].profileProviderId !== this.cart.profileProviderId){
            this.getProducts()
          }
        })
    )
  }

  getProducts(){
    if (this.cart?.profileProviderId){
      this.productsService.getByProfileProviderId(this.cart.profileProviderId).subscribe((response: IResponseApi)=>{
        this.products = response.data
      }, _=>{
        this.messageService.add({ detail: 'Error al obtener productos', severity: 'error', summary: 'Error'})
      })
    }
  }

  validateSession(){
    this.user = this.authService.isLoginUser()
  }

  showInputSearch(){
    this.isShowInputSearch = this.isShowInputSearch ? false : true
  }


  toogleMenu(){
    this.display = this.display ? false: true
  }

  openLogin(){
    this.displayModal = true
  }

  logout(){
    this.authService.logout()
  }

  output($event){
    this.role = this.authService.getRole()
    switch ($event.type) {
      case 'user':
        this.user = {...$event.data}
        break;
      case 'close':
        this.displayModal = false
        break;
      default:
        break;
    }
  }

  redirect(role: string[]) {
    this.router.navigate([`/${role[0]}`])
  }

  redirectPlatform(route: string){
    this.router.navigate([route])
  }

  isAdminOrProvider(){
    let res = false
    this.user.role.map((role:string)=>{
      if(role === 'admin' || role === 'provider'){
        res = true
      }
    })

    return res
  }

  redirectFavorites(){
    if (this.role){
      this.router.navigate(['/favoritos'])
    }else{
      this.displayModal = true
    }
  }

  openModalCart(){
    this.displayCart = true
  }

  closeModalCart() {
    this.displayCart = false
  }

  eventsCart($event){
    if($event === 'open-login'){
      this.openLogin()
    }
    this.closeModalCart()
  }

  search(){
    console.log('Search', this.key)
    if (this.key){
      this.router.navigate([`/resultados/${this.key}`]).then(() => {
        window.location.reload();
      });
    }
  }



  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resp => {
                resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
            },
            err => {
                reject(err);
          });
    });
  }
  getLocation() {
    this.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
      var latlng = new google.maps.LatLng(this.latitude, this.longitude);
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'location': latlng },  (results, status) =>{
        if (status !== google.maps.GeocoderStatus.OK) {
            alert(status);
        }
        if (status == google.maps.GeocoderStatus.OK) {
            this.address = (results[0].formatted_address);
        }
      });
    });
  }
  getAddress(address: string){
    if(address?.length > 30) {
      return `${address.substring(0, 30)}...`
    } else {
      return address
    }
  }
}
