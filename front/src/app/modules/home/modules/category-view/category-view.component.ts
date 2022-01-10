import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '@services/general.service';
import { MessageService } from 'primeng/api';
import { IResponseApi } from 'src/app/models/responses';
import { CCategory } from 'src/app/modules/admin/modules/category/models/category';
import { CategoryService } from 'src/app/modules/admin/modules/category/services/category.service';
import { CSubcategory } from 'src/app/modules/admin/modules/subcategory/models/subcategory';
import { SubcategoryService } from 'src/app/modules/admin/modules/subcategory/services/subcategory.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  catOrSubcategory: string
  categories: CCategory[]
  subcategories: CSubcategory[]

  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private general: GeneralService,
    private messageService: MessageService
  ) {
    this.catOrSubcategory = this.route.snapshot.paramMap.get('id')
    this.generalService.c('catOrSubcategory', this.catOrSubcategory)
   }

  ngOnInit(): void {
    this.getCategories()
    this.getSubcategories()
  }

  getCategories() {   
    this.categoryService.get().subscribe((response: IResponseApi) => {
      this.general.c('Get Categories', response)
      this.categories = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
    
  }

  getSubcategories() {   
    this.subcategoryService.get().subscribe((response: IResponseApi) => {
      this.general.c('Get subcategories', response)
      this.subcategories = response.data
      this.searchData()
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })  
  }

  searchData(){
    let categorySubcategory = [...this.categories.filter(category => category.name.toLowerCase().replace(/\s/g, '-') === this.catOrSubcategory)]
    if (categorySubcategory.length===0){
      categorySubcategory = [...this.subcategories.filter(subcategory => subcategory.name.toLowerCase().replace(/\s/g, '-') === this.catOrSubcategory)]
    }
    this.general.c('searchData', categorySubcategory)
    this.getCategorySubcategoriesProfiles(categorySubcategory[0])

  }

  getCategorySubcategoriesProfiles(categorySubcategory){
    let type = 'subcategory'
    if(categorySubcategory.categoryId){
      
    }
  }

}
