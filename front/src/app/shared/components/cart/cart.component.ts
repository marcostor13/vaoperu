import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICart } from '@shared/interfaces/cart.interfaces';
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

  finishedShop(){
    if (this.authService.getRole()?.indexOf('user')>-1){
      let cart = cloneDeep(this.cart)
      cart.userId = this.authService.getUserID()
      this.cartService.saveOrder(cart).subscribe((response:IResponseApi)=>{    
        this.messageService.add({ severity: 'Success', detail: 'Orden Guardada', summary: 'Éxito' })
        this.profileProviderService.getById(this.cart.profileProviderId).subscribe((response2: IResponseApi)=>{
          this.cartService.resetCart()  
          this.events.emit('close-modal') 
          console.log(' finishedShop profileProviderService', response2)
          console.log('finishedShop', response)
          this.profileProvider = response2.data
          if (this.profileProvider.whatsapp){
            const whatsapp = this.profileProvider.whatsapp.length === 11 ? this.profileProvider.whatsapp : `51${this.profileProvider.whatsapp.replace('+', '')}`
            const url = `https://wa.me/${whatsapp}?text=Hola!%20tengo%20un%20pedido%20:%20${response.data._id}`
            console.log('URL', url)
            window.open(url, "_blank");
          }else{
            this.messageService.add({ severity: 'Error', detail: 'El negocio no tiene whastapp configurado', summary: 'Error' })
          }
        }, _ => this.messageService.add({ severity: 'Error', detail: 'Error al guardar obtener el perfil', summary: 'Error' }))
      }, _ => this.messageService.add({severity:'Error', detail: 'Error al guardar el pedido', summary: 'Error'}))
    }else{      
      this.events.emit('open-login')
    }
  }

  

}
