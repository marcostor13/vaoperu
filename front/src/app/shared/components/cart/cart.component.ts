import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICart, ICartForm } from '@shared/interfaces/cart.interfaces';
import { CartService } from '@shared/services/cart/cart.service';
import { MessageService } from 'primeng/api';
import { delay } from 'rxjs/operators';
import { IResponseApi } from 'src/app/models/responses';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CProduct } from 'src/app/modules/provider/modules/product/models/product';
import { SubSink } from 'subsink';
import { cloneDeep } from 'lodash-es';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import * as moment from 'moment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() products: CProduct[]
  @Output() events = new EventEmitter<string>();

  profileProvider: CProfileProvider
  private subs = new SubSink()
  cart: ICart
  step: number = 1
  form: ICartForm = {
    name: '',
    phone: '',
    address: '',
    address2: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    typePaymment: 'Efectivo',
    cash: null,
    details: ''
  }
  currentDirection: string
  response: string = ''

  constructor(
    private store: Store<any>,
    private cartService: CartService,
    private messageService: MessageService,
    private authService: AuthService,
    private profileProviderService: ProfileProviderService
  ) { }

  ngOnInit(): void {
    if (this.products){
      this.subscriptionCart()
    }
  }

  subscriptionCart() {
    this.subs.add(
      this.store.select((state) => state.Reducer.cart)
        .pipe(delay(0))
        .subscribe((cart: ICart) => {
          this.cart = cart
        })
    )
  }

  setActual(){
    this.form.date = moment(new Date()).format('YYYY-MM-DD')
  }

  getCurrentDirection(){
    if (this.profileProvider.lat && this.profileProvider.lng){
      const geocoder = new google.maps.Geocoder();
      const latlng = { lat: this.profileProvider.lat, lng: this.profileProvider.lng }
      geocoder
        .geocode({ location: latlng }, (res)=>{
          if(res){
            this.form.address = res[0].formatted_address
            this.currentDirection = res[0].formatted_address
          }
        })
    }
  }

  getProductById(productId:string){
    return this.products.find(p=>p._id === productId)
  }

  changeProduct(i: number, type: string, product: CProduct) {
    switch (type) {
      case 'increase':
        const itemCart = {
          productId: product._id,
          quantity: this.cart.items[i].quantity+1,
          productData: {
            name: product.name,
            price: product.price,
            promotionalPrice: product.promotionalPrice
          }
        }
        this.cartService.addToCart(itemCart, this.cart.profileProviderId)
        break;
      case 'subtract':
        if (this.cart.items[i].quantity > 1) {
          this.cartService.substractToCart(product._id, this.cart.profileProviderId)
        } else {
          this.cartService.removeToCart(product._id, this.cart.profileProviderId)
        }
        break;
    }
  }

  getTotal(){
    let total = 0
    this.cart?.items?.map(item=>{
      let price = this.getProductById(item.productId).promotionalPrice ? this.getProductById(item.productId).promotionalPrice : this.getProductById(item.productId).price
      total = total + price * item.quantity
    })
    return total
  }

  continue(){
    this.getProfileProvider()
    this.response = ''
  }

  return(){
    this.step = 1
    this.response = ''
  }

  getProfileProvider(){
    this.profileProviderService.getById(this.cart.profileProviderId).subscribe((response2: IResponseApi) => {
      this.profileProvider = response2.data
      this.getCurrentDirection()
      this.step = 2
    }, _ => this.messageService.add({ severity: 'Error', detail: 'Error al obtener el perfil', summary: 'Error' }))
  }

  validateForm(){
    this.response = ''
    if(
      !this.form.name ||
      !this.form.phone ||
      !this.form.address ||
      (this.form.address === 'custom '&& !this.form.address2) ||
      !this.form.date ||
      !this.form.typePaymment ||
      (this.form.typePaymment === 'Efectivo' && !this.form.cash)
    ){
      this.response = 'Debe completar todos los campos'
      return false
    }else{
      return true
    }
  }

  finishedShop(){
    if(this.validateForm()){
      if (this.authService.getRole()?.indexOf('user')>-1){
        let cart = cloneDeep(this.cart)
        cart.orderData = this.form
        cart.userId = this.authService.getUserID()
        this.cartService.saveOrder(cart).subscribe((response:IResponseApi)=>{
          this.messageService.add({ severity: 'Success', detail: 'Orden Guardada', summary: 'Éxito' })
          this.cartService.resetCart()
          this.events.emit('close-modal')
          if (this.profileProvider.whatsapp){
            const whatsapp = this.profileProvider.whatsapp.length === 11 ? this.profileProvider.whatsapp : `51${this.profileProvider.whatsapp.replace('+', '')}`
            const url = `https://wa.me/${whatsapp}?text=Hola!%20tengo%20un%20pedido%20:%20${response.data._id}`
            window.open(url, "_blank");
          }else{
            this.messageService.add({ severity: 'Error', detail: 'El negocio no tiene whastapp configurado', summary: 'Error' })
          }
        }, _ => this.messageService.add({severity:'Error', detail: 'Error al guardar el pedido', summary: 'Error'}))
      }else{
        this.events.emit('open-login')
      }
    }
  }



}
