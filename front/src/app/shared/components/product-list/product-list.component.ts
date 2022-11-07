import { Component, Input, OnInit, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { SelectItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CartService } from './../../services/cart/cart.service';
import { CProduct, ICategoryProduct } from 'src/app/modules/provider/modules/product/models/product';
import { SubSink } from 'subsink';
import { ICart } from '@shared/interfaces/cart.interfaces';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IFormatProduct } from './../../interfaces/product.interface';
import { COffer } from 'src/app/modules/provider/modules/offer/models/offer';
import { ProductService } from 'src/app/modules/provider/modules/product/services/product.service';
import { IResponseApi } from 'src/app/models/responses';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {

  @Input() items: Array<CProduct> | Array<COffer>
  @Input() rows: number
  @Input() type: string
  @Input() profileProviderId: string
  @Output() productsEvent: EventEmitter<any> =  new EventEmitter()

  responsiveOptions: Array<any>
  sortOptions: SelectItem[]
  sortOrder: number
  sortField: string
  role: string
  itemsTmp: any[]
  effect:string = 'scrollx'
  isMobile:boolean = false
  displayModal: boolean = false
  currentItem: any
  quantity: number[] = []
  cart: ICart
  isProviderPath: boolean
  currentIndex: number
  faShoppingCart = faShoppingCart
  eventHeader: any
  faArrowLeft = faArrowLeft
  productsFormat: IFormatProduct[]
  productsFormatOthers: IFormatProduct[]
  categories: ICategoryProduct[]

  private subs = new SubSink()

  constructor(
    private general: GeneralService,
    private authService: AuthService,
    private cartService: CartService,
    private store: Store<any>,
    private productService: ProductService
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

    this.isProviderPath = window.location.pathname.indexOf('provider')>-1 ? true: false

  }

  ngOnInit(): void {
    this.role = this.authService.getRole()
    this.getCategories()
    this.initializeItems()
  }

  ngOnChanges(){
    this.getCategories()
    this.initializeItems()
    this.initializeQuantities()
    if (!this.isProviderPath){
      this.subscriptionCart()
    }
  }

  subscriptionCart() {
    this.subs.add(
      this.store.select((state) => state.Reducer.cart)
        .pipe(delay(0))
        .subscribe((cart: ICart) => {
          if (!cart) {
            this.resetCart()
          }else{
            if(cart.profileProviderId !== this.profileProviderId){
              this.resetCart()
            }else{
              this.cart = cart;
            }
          }
          this.setQuantities()
        })
    )
  }

  resetCart(){
    this.cartService.setDataCart({
      profileProviderId: this.profileProviderId,
      userId: '',
      items: []
    })
  }

  setQuantities() {
    this.items?.map((prod, index) => {
      this.quantity[index] = 0
    })
    if (this.cart?.items?.length>0){
      this.cart.items.map((item, i) => {
        this.items?.map((prod, index) => {
          if (prod._id === item.productId) {
            this.quantity[index] = item.quantity
          }
        })
      })
    }else{
      this.items?.map((prod, index) => {
        this.quantity[index] = 0
      })
    }
  }

  initializeItems(){
    if (this.items) {
      this.itemsTmp = [...this.items]
    }
  }

  getCategories(){
    this.productService.getCategoryByProfileProviderId(this.profileProviderId).subscribe((response: IResponseApi) => {
      this.categories = response.data
      this.getCategoriesProducts()
    })
  }

  getCategoriesById(id: string){
    return this.categories?.find(c=>c._id===id)
  }

  getCategoriesByName(name: string){
    return this.categories?.find(c=>c.name===name)
  }

  getCategoriesProducts(){
    let data = _.chain(this.items).map((i:CProduct)=>{
      i.categoryName = i.categoryId ? this.getCategoriesById(i.categoryId)?.name: 'otros'
      return i
    }).groupBy('categoryName').value()
    this.productsFormat = Object.keys(data).map(k=>{
      return {
        category: k,
        products: data[k]
      }
    }).sort((a:any,b:any)=>{
      return a.category - b.category
    })
  }

  initializeQuantities(){
    if (this.items){
      if(this.type === 'Productos' || this.type === 'Destacados'){
        this.items.map((_, i)=>{
          this.quantity[i] = 0
        })
      }
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
    this.productsEvent.emit({
      function: 'edit',
      data: item
    })
  }

  search(event:any){
    const srt = event.target.value
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

  openModal(item: any, i: number){
    if(this.role?.indexOf('provider')>-1){
      item.categoryId = !item.categoryId || item.categoryId === 'otros'? '': this.getCategoriesByName(item.categoryId)? this.getCategoriesByName(item.categoryId)._id: item.categoryId
      this.productsEvent.emit({
        function: 'edit',
        data:item
      })
    }else{
      this.currentIndex = i
      this.currentItem = item
      this.displayModal = true
    }


  }

  changeProduct(i:number, type:string, product: CProduct){
    let quantity:number
    switch (type) {
      case 'increase':
        quantity = this.quantity[i]+1
        const itemCart = {
          productId: product._id,
          quantity,
          productData: {
            name: product.name,
            price: product.price,
            promotionalPrice: product.promotionalPrice
          }
        }
        this.cartService.addToCart(itemCart, this.profileProviderId)
        break;
      case 'subtract':
        quantity = this.quantity[i]-1
        if (quantity>0){
          this.cartService.substractToCart(product._id, this.profileProviderId)
        }else{
          this.cartService.removeToCart(product._id, this.profileProviderId)
        }
        break;
    }
    this.setQuantities()
  }

  getDescription(description: string){
    if(description.length > 30){
      return `${description.substring(0, 30)}...`
    }else{
      return description
    }
  }

  getTextProduct(name: string){
    if(name.length > 26){
      return `${name.substring(0, 26)}...`
    }else{
      return name
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }



}
