import { Component, Input, OnInit, Output, EventEmitter, HostListener, OnChanges, OnDestroy } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { CartService } from './../../services/cart/cart.service';
import { CProduct, ICategoryProduct } from 'src/app/modules/provider/modules/product/models/product';
import { SubSink } from 'subsink';
import { ICart } from '@shared/interfaces/cart.interfaces';
import { Store } from '@ngrx/store';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IFormatProduct } from '@shared/interfaces/product.interface';
import { ProductService } from 'src/app/modules/provider/modules/product/services/product.service';
import { IResponseApi } from 'src/app/models/responses';
import * as _ from 'lodash';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { IUrl } from './../../../../../../back/src/models/url';
import { delay, takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() items: any
  @Input() rows: number
  @Input() type: string
  @Input() url?: IUrl
  @Input() profileProviderId: string
  @Input() productListFormat: IFormatProduct
  @Output() productsEvent: EventEmitter<any> =  new EventEmitter()

  companyUrl: string
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
  profileProvider: CProfileProvider
  displayAllProducts: boolean = false
  currentProducts: IFormatProduct
  sectionButton = []
  platform: string
  product: ICategoryProduct[];
  categoryName: string
  categoryType: any
  private subs = new SubSink()
  private unsubscriber : Subject<void> = new Subject<void>();
  displayCart: boolean = false
  currentProduct: CProduct
  typeSection: number

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private productService: ProductService,
    private profileProviderService: ProfileProviderService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>

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

    this.subscriptionPlatform()
    this.isProviderPath = window.location.pathname.indexOf('provider')>-1 ? true: false
    this.companyUrl = this.route.snapshot.paramMap.get('id')
    this.detectEventRoute()
    this.subscriptionCart()

    Carousel.prototype.onTouchMove = () => { };
  }

  getSectionButton() {
    this.sectionButton = this.productsFormat.map(p => {
      return 2
    })
  }

  subscriptionPlatform(){
    this.subs.add(
      this.store.select((state) => state.Reducer.platform)
      .subscribe((platform: string) => {
        this.platform = platform;
      })
    )
  }

  detectEventRoute() {
    history.pushState(null, '');
    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      if(this.displayModal){
        this.displayModal = false
        this.router.navigate([`/${this.url.url}`])
      }else{
        if(!this.url.isIndividual){
          this.router.navigate([`/`])
        }
      }
    });
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
        })
    )
  }

  ngOnInit(): void {
    this.role = this.authService.getRole()
    this.getCategories()
    this.initializeItems()
    if(this.companyUrl){
      this.getUrlData()
    }
  }

  ngOnChanges(){
    this.getCategories()
    this.initializeItems()
    this.initializeQuantities()
  }

  resetCart(){
    this.cartService.setDataCart({
      profileProviderId: this.profileProviderId,
      userId: '',
      items: []
    })
  }

  initializeItems(){
    this.items = [...this.items]
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
      this.categoryType = this.categories.find((c: IFormatProduct) => c.name === k)?.type || 0;
      return {
        products: data[k],
        name: k,
        profileProviderId: '',
        type: this.categoryType
      }
    }).sort((a:any,b:any)=>{
      return a.category - b.category
    })
    this.getSectionButton()
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

  openModal(item: any, typeSection: any = null){
    if(this.role?.indexOf('provider')>-1){
      item.categoryId = !item.categoryId || item.categoryId === 'otros'? '': this.getCategoriesByName(item.categoryId)? this.getCategoriesByName(item.categoryId)._id: item.categoryId
      this.productsEvent.emit({
        function: 'edit',
        data:item
      })
    }else{
      this.currentItem = item
      this.typeSection = typeSection
      this.displayModal = true
    }
  }

  changeProductService(product: CProduct){
    this.currentProduct = product
    this.displayCart = !this.displayCart
  }

  changeProduct(i:number, type:string, product: CProduct){
    let quantity:number
    switch (type) {
      case 'increase':
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
        break;
      case 'subtract':
        if (quantity>0){
          this.cartService.substractToCart(product._id, this.profileProviderId)
        }else{
          this.cartService.removeToCart(product._id, this.profileProviderId)
        }
        break;
    }
  }

  getDescription(description: string){
    if(description.length > 30){
      return `${description.substring(0, 30)}...`
    }else{
      return description
    }
  }

  getDescriptionModal(description: string){
    const rep = '<br />'
    if(description){
      return `${description.replace(/<br\s*\/?>/gi, '\r\n')}`
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
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  getUrlData(){
    this.profileProviderService.getUrlByUrl(this.companyUrl).subscribe((response:IResponseApi)=>{
      this.getProfileProvider(response?.data[0]?.profileProviderId)
    })
  }

  getProfileProvider(profileProviderId:string){
    this.profileProviderService.getById(profileProviderId).subscribe((response: IResponseApi) => {
      this.profileProvider = response.data
    })
  }

  allproduct(productFormat: IFormatProduct){
    this.currentProducts = productFormat
    this.displayAllProducts = true
    // this.router.navigate([ this.companyUrl + `/productos/0/des/1`])
  }

  toggleButton(j){
    this.sectionButton[j] = this.sectionButton[j] === 2 ? this.productsFormat[j].products.length : 2
  }

  productRowEvents(event){
    switch (event.type) {
      case 'edit':
        this.edit(event.product)
        break;
      case 'openModal':
        this.openModal(
          event.product,
          event.typeSection
        )
        break;

      default:
        break;
    }
  }

}
