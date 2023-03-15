import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { CartService } from '@shared/services/cart/cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CProduct, ICategoryProduct } from 'src/app/modules/provider/modules/product/models/product';
import { IFormatProduct } from '@shared/interfaces/product.interface';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnChanges {

  @Input() products: CProduct[]
  @Input() profileProviderId: string
  @Input() productFormat: IFormatProduct
  @Output() events: EventEmitter<any>= new EventEmitter()

  displayCart: boolean = false
  isProviderPath: boolean
  faShoppingCart = faShoppingCart
  productsTmp: CProduct[]
  currentProduct: CProduct

  constructor(
    private cartService: CartService,
  ) {
    this.isProviderPath = window.location.pathname.indexOf('provider')>-1 ? true: false
  }

  ngOnChanges(): void {
    this.productsTmp = [...this.products]
    this.toggleButton()
  }

  ngOnInit(): void {
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

  changeProductService(product: CProduct){
    this.currentProduct = product
    this.displayCart = !this.displayCart
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
  getDescription(description){
    if(description.length > 26){
      return `${description.substring(0, 30)}...`
    }else{
      return description
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
