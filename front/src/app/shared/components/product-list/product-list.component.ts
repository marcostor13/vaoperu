import { Component, Input, OnInit, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { SelectItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CartService } from './../../services/cart/cart.service';
import { CProduct } from 'src/app/modules/provider/modules/product/models/product';
import { SubSink } from 'subsink';
import { ICart } from '@shared/interfaces/cart.interfaces';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs/operators';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IFormatProduct } from './../../interfaces/product.interface';
import { COffer } from 'src/app/modules/provider/modules/offer/models/offer';

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

  private subs = new SubSink()

  constructor(
    private general: GeneralService,
    private authService: AuthService,
    private cartService: CartService,
    private store: Store<any>,
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1412px',
        numVisible: 2,
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

  ngOnChanges(){
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


  ngOnInit(): void {
    this.role = this.authService.getRole()
    this.initializeItems()
    this.getCategoriesProducts()
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

  getCategoriesProducts(){
    let res:IFormatProduct[] = []
    this.items.map(i=>{
      const category = i.category || 'otros'
      if(res.length > 0){
        let issetCategory = false
        res = [...res.map((r)=>{
          if(r.category === category){
            r.products = [...r.products, i]
            issetCategory = true
          }
          return r
        })]
        if(!issetCategory){
          res = [...res, {
            category: category,
            products: [i]
          }]
        }
      }else{
        res = [...res, {
          category: category,
          products: [i]
        }]
      }
    })
    this.productsFormat = [...res.filter(r=>r.category !== 'otros')]
    this.productsFormatOthers = [...res.filter(r=>r.category === 'otros')]

    console.log('products T', res)
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
    this.general.c('SORT BY', event)
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
    this.currentIndex = i
    this.currentItem = item
    this.displayModal = true
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
    if(description.length > 60){
      return `${description.substring(0, 60)}...`
    }else{
      return description
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }



}
