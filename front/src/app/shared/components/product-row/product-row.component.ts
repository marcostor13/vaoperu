import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { CartService } from '@shared/services/cart/cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CProduct } from 'src/app/modules/provider/modules/product/models/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnChanges {

  @Input() products: CProduct[]
  @Input() profileProviderId: string
  @Output() events: EventEmitter<any>= new EventEmitter()

  isProviderPath: boolean
  faShoppingCart = faShoppingCart
  productsTmp: CProduct[]

  constructor(
    private cartService: CartService
  ) {
    this.isProviderPath = window.location.pathname.indexOf('provider')>-1 ? true: false
   }

  ngOnChanges(): void {
    this.productsTmp = [...this.products]
    this.toggleButton()
  }

  changeProduct(product: CProduct){
    const itemCart = {
      productId: product._id,
      quantity: 1,
      productData: {
        name: product.name,
        price: product.price,
        promotionalPrice: product.promotionalPrice
      }
    }
    this.cartService.addToCart(itemCart, this.profileProviderId)
  }

  openModal(product: CProduct){
    this.events.emit({
      type: 'openModal',
      product
    })
  }

  edit(product: CProduct){
    this.events.emit({
      type: 'edit',
      product
    })
  }

  getTextProduct(name: string){
    if(name.length > 26){
      return `${name.substring(0, 26)}...`
    }else{
      return name
    }
  }

  getPrice(price: any){
    if(typeof price === 'number'){
      return `S/${price}`
    }else{
      return price
    }
  }

  toggleButton(){
    this.products = this.products.length === 2 ?  [...this.productsTmp] : [this.productsTmp[0], this.productsTmp[1]]
  }

}
