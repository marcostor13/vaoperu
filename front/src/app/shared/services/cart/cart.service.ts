import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { ICart, IItemCart } from '@shared/interfaces/cart.interfaces'
import { GeneralService } from '@services/general.service';
import * as action from '@actions/setdata.actions'
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { cloneDeep } from 'lodash-es';
import { ApiService } from '@services/api.service';
import { IDataApi } from 'src/app/models/dataapi';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: ICart

  private subs = new SubSink()

  constructor(
    private store: Store<any>,
    private authService: AuthService,
    private api: ApiService
  ) {
    this.subscriptionCart()
  }

  subscriptionCart() {
    this.subs.add(
      this.store.select((state) => state.Reducer.cart)
        .pipe(delay(0))
        .subscribe((cart: ICart) => {
          if(!cart){
            this.setDataCart({
              profileProviderId: '',
              userId: '',
              items: []
            })
          }
          this.cart = cart;
        })
    )
  }

  resetCart(){
    this.setDataCart({
      profileProviderId: '',
      userId: '',
      items: []
    })
  }

  addToCart(itemCart: IItemCart, profileProviderId:string) {
    let cart: ICart = cloneDeep(this.cart)
    if(cart.items.length>0){
      const find = cart.items.find(item=>item.productId === itemCart.productId)
      if(find){
        cart.items = cart.items.map((item: IItemCart) => {
          if (item.productId === itemCart.productId){
            item.quantity++
          }
          return item
        })
      }else{
        cart.items = [...cart.items, itemCart]
      }
    }else{
      cart.items = [...cart.items, itemCart]
    }
    cart.profileProviderId = profileProviderId
    cart.userId = this.authService.getUserID()
    this.setDataCart(cart)
  }

  substractToCart(productId: string, profileProviderId: string){
    let cart = cloneDeep(this.cart)
    if(cart.items.length>0){
      cart.items.map((item)=>{
        if(item.productId === productId){
          if(item.quantity > 1){
            item.quantity--
            return item
          }else{
            return null
          }
        }else{
          return item
        }
      })
    }
    cart.profileProviderId = profileProviderId
    cart.userId = this.authService.getUserID()
    this.setDataCart(cart)
  }

  removeToCart(productId: string, profileProviderId: string){
    let cart = cloneDeep(this.cart)
    cart.items = cart.items.filter(item => item.productId !== productId)
    cart.profileProviderId = profileProviderId
    cart.userId = this.authService.getUserID()
    this.setDataCart(cart)
  }

  setDataCart(cart: ICart){
    this.store.dispatch(action.setCart({ cart }))
  }

  getDataCart(){
    this.subscriptionCart()
    return this.cart
  }


  saveOrder(element: any) {
    const data: IDataApi = {
      service: element._id ? `update-order` : `save-order`,
      type: element._id ? 'patch' : 'post',
      data: element
    }
    return this.api.api(data)
  }

  getAllOrders() {
    const data: IDataApi = {
      service: `get-orders`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  getByProfileProviderId(profileProviderId: string) {
    const data: IDataApi = {
      service: `get-order-by-profile-provider-id/${profileProviderId}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  getByUserId(profileProviderId: string) {
    const data: IDataApi = {
      service: `get-order-by-user-id/${profileProviderId}`,
      type: 'get',
      data: null
    }
    return this.api.api(data)
  }

  delete(id: string) {
    const data: IDataApi = {
      service: `delete-order/${id}`,
      type: 'delete',
      data: null
    }
    return this.api.api(data)
  }




}
