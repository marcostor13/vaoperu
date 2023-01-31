import { Component, OnInit } from '@angular/core';
import { ICart } from '@shared/interfaces/cart.interfaces';
import { CartService } from '@shared/services/cart/cart.service';
import { MessageService } from 'primeng/api';
import { IResponseApi } from 'src/app/models/responses';
import { CUser } from 'src/app/models/user';
import { UserService } from 'src/app/modules/admin/modules/user/services/user.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CProfileProvider } from '../profile-provider/models/profile-provider';
import { ProfileProviderService } from '../profile-provider/services/profile-provider.service';
import * as moment from 'moment';
import { ProductService } from '../product/services/product.service';
import { CProduct } from '../product/models/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  displayModal:boolean = false
  profileProvider: CProfileProvider
  orders: ICart[]
  users: CUser[]
  products: CProduct[]
  currentOrder: ICart


  constructor(
    private cartService: CartService,
    private profileProviderService: ProfileProviderService,
    private authService: AuthService,
    private messageService: MessageService,
    private userService: UserService,
    private productService: ProductService
  ) {

    moment().locale('es')
   }

  ngOnInit(): void {
    this.getProfileProvider()
  }

  getProfileProvider(){
    this.profileProviderService.getByUserId(this.authService.getUserID()).subscribe((response: IResponseApi)=>{
      this.profileProvider = response.data
      this.getOrdersByProfileProviderId()
    },_=>{
      this.errors('perfil')
    })
  }

  getOrdersByProfileProviderId(){
    this.cartService.getByProfileProviderId(this.profileProvider._id).subscribe((response: IResponseApi) => {
      this.orders = response.data
      this.getUserByIds()
      this.getProductsByIds()
    }, _ => {
      this.errors('ordenes')
    })
  }

  getProductsByIds(){
    let productIds = []
    this.orders.map(o=>{
       o.items.map(i=>{
      productIds = [...productIds, i.productId]
    })})
    this.productService.getProducstAndOffersByIds(productIds).subscribe((response: IResponseApi) => {
      this.products = response.data
    }, _ => {
      this.errors('productos')
    })
  }

  getUserByIds(){
    let ids = this.orders.map(o => { if(o.userId) return o.userId }).filter(o=>o)
    if(ids?.length > 0){
      this.userService.getByIds(ids).subscribe((response: IResponseApi) => {
        this.users = response.data
      }, _ => {
        this.errors('usuarios')
      })
    }
  }

  getById(array: any[], id:string){
    return array.find(a=>a._id === id)
  }

  formatDate(date: Date){
    return moment(date).format('lll')
  }

  errors(model: string){
    this.messageService.add({ detail: `Error al obtener ${model}`, summary: 'Error', severity: 'error' })
  }

  openOrder(order: ICart){
    this.currentOrder = order
    this.displayModal = true
  }

  getTotal(order) {
    let total = 0
    order?.items?.map(item => {
      let prods = this.getById(this.products, item.productId)
      let price = prods?.promotionalPrice ? prods?.promotionalPrice : prods?.price
      total = total + price * item.quantity
    })
    return total
  }

}
