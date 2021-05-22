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
import { CProfileProvider } from '../provider/modules/profile-provider/models/profile-provider';

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
  companies: CProfileProvider[]

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


  constructor(
    private general: GeneralService,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private messageService: MessageService,
    private profileProviderService: ProfileProviderService
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
    this.getSubcategories() 
    this.getCompanies()
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

  getCompanies() {
    this.subs.add(
      this.profileProviderService.getAllCompanies().subscribe((response: IResponseApi) => {
        this.general.c('Get Compmanies', response)
        this.companies = response.data
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
          items: subItems.length > 0? subItems: null
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
        this.general.c('Get Categories', response)
        this.categories = response.data
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )
  }

  getSubcategories(){
    this.subs.add(
      this.subcategoryService.get().subscribe((response: IResponseApi) => {
        this.general.c('Get subcategories', response)
        this.subcategories = response.data
        this.getMenu()
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    )

  }

  companyListEvent($event:any) {
    this.general.c('companyListEvent', $event)
    switch ($event.event) {
      case 'open-login':
        this.eventHeader = $event
        break;

      default:
        break;
    }
  }
  

  redirect(url){
    
  }

  

}
