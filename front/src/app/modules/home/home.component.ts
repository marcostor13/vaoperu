import { Component, HostListener, OnDestroy, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit, OnChanges } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { MenuItem } from 'primeng/api';
import { IResponseApi } from 'src/app/models/responses';
import { SubSink } from 'subsink';
import { CategoryService } from '../admin/modules/category/services/category.service';
import { SubcategoryService } from '../admin/modules/subcategory/services/subcategory.service';
import { MessageService } from 'primeng/api';
import { CSubcategory } from '../admin/modules/subcategory/models/subcategory';
import { CCategory } from '../admin/modules/category/models/category';
import { ProfileProviderService } from './../provider/modules/profile-provider/services/profile-provider.service';
import { Router } from '@angular/router';
import { PromotionService } from './../admin/modules/promotions/services/promotion.service';
import { CPromotion } from '../admin/modules/promotions/interfaces/promotion.interface';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { CategorySubcategoryProfileService } from '../admin/modules/category-subcategory-profile/services/category-subcategory-profile.service';
import { ICategorySubcategoryProfile } from '../admin/modules/category-subcategory-profile/interfaces/category-subcategory-profile.interfaces';
import { faSearch, faChevronDown, faSignOutAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('test') test: ElementRef

  subs = new SubSink()
  isMobile: boolean = (window.innerWidth > 768) ? false : true
    categories: CCategory[]
    subcategories: CSubcategory[]
    currentSubcategories: CSubcategory[]
    switch: string = 'companies'

    itemsCarousel = [
      {
        imageDesktop: 'assets/img/photos/photo1-d.jpg',
        imageMobile: 'assets/img/photos/photo1.jpg'
      },
      {
        imageDesktop: 'assets/img/photos/photo2-d.jpg',
        imageMobile: 'assets/img/photos/photo2.jpg'
      },
      {
        imageDesktop: 'assets/img/photos/photo3-d.jpg',
        imageMobile: 'assets/img/photos/photo2.jpg'
      }
    ]

    items: MenuItem[] = []
    responsiveOptions: any
    eventHeader: any
    displaySubcategories: boolean = false
    promotions: CPromotion[]
    profileProviders: CProfileProvider[]
    currentProfileProviders: CProfileProvider[]
    currentPromotions: CPromotion[]
    faSearch = faSearch
    key:string

    constructor(
      private general: GeneralService,
      private categoryService: CategoryService,
      private subcategoryService: SubcategoryService,
      private messageService: MessageService,
      private profileProviderService: ProfileProviderService,
    private router: Router,
    private promotionsService: PromotionService,
    private categorySubcategoryProfileService: CategorySubcategoryProfileService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
   }

  ngAfterViewInit(){
    this.getCategories()
    this.getPromotions()
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.isMobile = (event.target.innerWidth > 768) ? false: true
  }

  getProfileProviders() {
    this.profileProviderService.getAllCompanies().subscribe((response: IResponseApi) => {
      this.profileProviders = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  getCategorySubcategoriesProfiles(categorySubcategoryId: string) {
    this.categorySubcategoryProfileService.getByCategorySubcategoryId(categorySubcategoryId).subscribe((response: IResponseApi) => {
      const catSubPro: ICategorySubcategoryProfile[] = response.data
      this.currentProfileProviders = this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))
      this.currentPromotions = this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  getPromotions() {
    this.subs.add(
      this.promotionsService.get().subscribe((response: IResponseApi) => {
        this.promotions = response.data
        this.getProfileProviders()
        if (response.data?.length === 0) {
          this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'No hay productos disponibles' });
        }
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }


  getMenu(){
    this.categories?.map((cat: CCategory) => {
      let subItems = []
      this.subcategories.map((subcat: CSubcategory) => {
        if (subcat.categoryId === cat._id){
          subItems = [...subItems,
            {
              label: `
                  <div class="row justify-content-between align-items-center p-0 m-0 pl-2 pr-2 mt-2">
                    <label>${subcat.name}</label>
                    <img width="26" height="auto" src="${subcat.image}">
                  </div>
                  `,
              styleClass: 'item-subcategory',
              escape: false,
              command: _ =>{
                if(this.isMobile){
                  this.router.navigate([`/resultados/`+subcat.name])
                }else{
                  this.getCategorySubcategoriesProfiles(subcat._id)
                }
              }
            }
          ]
        }
      })
      this.items = [...this.items,
        {
          label: `
                <div class="row justify-content-between align-items-center p-0 m-0 pl-2 pr-2 mt-2">
                  <label>${cat.name}</label>
                  <img width="30" height="auto" src="${cat.image}">
                </div>
                `,
          escape: false,
          styleClass: 'item-category',
          items: subItems.length > 0? subItems: null,
          command: _ => {
            if (subItems.length === 0){
              if (this.isMobile) {
                this.router.navigate([`/resultados/` + cat.name])
              } else {
                this.getCategorySubcategoriesProfiles(cat._id)
              }
            }
          }
        }
      ]
    })
  }


  getImageType(item){
    return this.isMobile? item.imageMobile: item.imageDesktop
  }

  getCategories(){
    this.subs.add(
      this.categoryService.get().subscribe((response: IResponseApi) => {
        this.categories = response.data
        this.getSubcategories()
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  getSubcategories(){
    this.subs.add(
      this.subcategoryService.get().subscribe((response: IResponseApi) => {
        this.subcategories = response.data
        this.getMenu()
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  companyListEvent($event:any) {
    switch ($event.event) {
      case 'open-login':
        this.eventHeader = $event
        break;

      default:
        break;
    }
  }

  eventsPanelMenu($event: any){
    switch ($event.event) {
      case 'click':
        this.getCategorySubcategoriesProfiles($event.data)
        break;

      default:
        break;
    }
  }

  openSubcategoriesModal(subcategories: CSubcategory[]){
    this.currentSubcategories = subcategories
    this.displaySubcategories = true
  }

  openSubcat(category: CCategory){
    let subcategories: CSubcategory[] = []

    subcategories = [...this.subcategories.filter(subcategory=>subcategory.categoryId === category._id)]
    if(subcategories.length>0){
      this.openSubcategoriesModal(subcategories)
    }else{
      const redirect = category.name.toLowerCase().replace(/\s/g, '-')
      this.router.navigate([`/resultados/${redirect}`])
    }
  }

  redirectSubcategory(subcategory: CSubcategory){
    const redirect = subcategory.name.toLowerCase().replace(/\s/g, '-')
    this.router.navigate([`/resultados/${redirect}`])
  }

  redirectCategory(category: CCategory){
    const redirect = category.name.toLowerCase().replace(/\s/g, '-')
    this.router.navigate([`/resultados/${redirect}`])
  }

  toogleSwitch(type: string){
    this.switch = type
  }
  search(){
    if (this.key){
      this.router.navigate([`/resultados/${this.key}`]).then(() => {
        window.location.reload();
      });
    }
  }
  urlCategories(){
    this.router.navigate([ '/categorias' ])
  }


}
