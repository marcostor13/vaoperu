import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CCategory } from './../../../admin/modules/category/models/category';
import { MessageService } from 'primeng/api';
import { SubSink } from 'subsink';
import { CategoryService } from './../../../admin/modules/category/services/category.service';
import { IResponseApi } from 'src/app/models/responses';
import { CSubcategory } from './../../../admin/modules/subcategory/models/subcategory';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { CPromotion } from './../../../admin/modules/promotions/interfaces/promotion.interface';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  eventHeader: any
  faArrowLeft = faArrowLeft
  categories: CCategory[]
  subs = new SubSink()
  subcategories: CSubcategory[]
  currentProfileProviders: CProfileProvider[]
  profileProviders: CProfileProvider[]
  currentPromotions: CPromotion[]
  isMobile: boolean = (window.innerWidth > 768) ? false : true
  promotions: CPromotion[]
  items: MenuItem[] = []

  constructor(
      private messageService: MessageService,
      private categoryService: CategoryService,
    private router: Router
  ) { }

  ngAfterViewInit(){
    this.getCategories()
  }

  ngOnInit(): void {
  }

  getCategories(){
    this.subs.add(
      this.categoryService.get().subscribe((response: IResponseApi) => {
        this.categories = response.data
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
              }
            }
          }
        }
      ]
    })
  }

  allproduct(){
    this.router.navigate([ '/' ])
  }

}
