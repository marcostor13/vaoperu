import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponseApi } from 'src/app/models/responses';
import { CCategory } from 'src/app/modules/admin/modules/category/models/category';
import { CategoryService } from 'src/app/modules/admin/modules/category/services/category.service';
import { CSubcategory } from 'src/app/modules/admin/modules/subcategory/models/subcategory';
import { SubcategoryService } from 'src/app/modules/admin/modules/subcategory/services/subcategory.service';
import { CategorySubcategoryProfileService } from './../../../admin/modules/category-subcategory-profile/services/category-subcategory-profile.service';
import { CProfileProvider } from './../../../provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { ICategorySubcategoryProfile } from './../../../../../../../back/src/models/category-subcategory-profile';
import { DistrictService } from 'src/app/modules/admin/modules/district/services/district.service';
import { CDistrict } from 'src/app/modules/admin/modules/district/models/district';
import { CPromotion } from 'src/app/modules/admin/modules/promotions/interfaces/promotion.interface';
import { PromotionService } from 'src/app/modules/admin/modules/promotions/services/promotion.service';
import { MessageService } from 'primeng/api';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  catOrSubcategory: string
  categories: CCategory[]
  subcategories: CSubcategory[]
  subcategoriesTmp: CSubcategory[]
  subcategoriesFilter: CSubcategory[] = []
  profileProviders: CProfileProvider[]
  eventHeader: any
  currentProfileProviders: CProfileProvider[]
  currentProfileProvidersTmp: CProfileProvider[]
  districts: CDistrict[]
  selectedDistricts: string[]
  selectedCategories: string[]
  selectedSubcategories: string[]
  promotions: CPromotion[]
  currentPromotions: CPromotion[]
  currentPromotionsTmp: CPromotion[]
  switch: string = 'companies'
  title: string
  type: string = 'categories'
  faArrowLeft = faArrowLeft

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private messageService: MessageService,
    private categorySubcategoryProfileService: CategorySubcategoryProfileService,
    private profileProviderService: ProfileProviderService,
    private districtService: DistrictService,
    private promotionsService: PromotionService,
    private router: Router
  ) {
    this.catOrSubcategory = this.route.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.getCategories()
    this.getProfileProviders()
    this.getDistricts()
    this.getPromotions()
  }

  getCategories() {   
    this.categoryService.get().subscribe((response: IResponseApi) => {
      this.categories = response.data
      this.getSubcategories()
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
    
  }

  getDistricts() {
    this.districtService.get().subscribe((response: IResponseApi) => {
      this.districts = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })

  }

  getSubcategories() {   
    this.subcategoryService.get().subscribe((response: IResponseApi) => {
      this.subcategories = response.data
      this.subcategoriesTmp = response.data
      if (this.catOrSubcategory){
        this.searchData()
      }
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })  
  }

  getProfileProviders() {
    this.profileProviderService.getAllCompanies().subscribe((response: IResponseApi) => {
      this.profileProviders = response.data
      this.currentProfileProviders = this.profileProviders
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  searchData(){ 
    
    if (!this.searchInCategoriesAndSubcategories()){
      //KEY SEARCH
      this.title = this.catOrSubcategory
      this.totalSearch()
      console.log('SearchData KEY SEARCH', this.catOrSubcategory)
    }else{
      //CATEGORIES OR SUBCATEGORIES
      this.title = this.searchInCategoriesAndSubcategories()?.name
      if (this.searchInCategoriesAndSubcategories()?.categoryId){
        this.type = 'subcategory'
        this.getCategorySubcategoriesProfiles(this.searchInCategoriesAndSubcategories()._id)
      }else{      
        this.subcategories = [...this.subcategoriesTmp.filter(subcategory => subcategory.categoryId === this.searchInCategoriesAndSubcategories()?._id)]
        if(this.subcategories.length>0){
          this.type = 'subcategory'
          this.getProfilesIfSubcategories(this.subcategories.map(s => { return s._id }))
        }else{
          this.getCategorySubcategoriesProfiles(this.searchInCategoriesAndSubcategories()._id)
        }
      }        
    } 
  }


  searchInCategoriesAndSubcategories(){
    let categorySubcategory: any = [...this.categories.filter(category => category.name.toLowerCase().replace(/\s/g, '-') === this.catOrSubcategory.toLowerCase())]
    if (categorySubcategory.length === 0) {
      categorySubcategory = [...this.subcategories.filter(subcategory => subcategory.name.toLowerCase().replace(/\s/g, '-') === this.catOrSubcategory.toLowerCase())]
    }
    return categorySubcategory[0]
  }

  getProfilesIfSubcategories(ids:string[]){
    this.categorySubcategoryProfileService.getByCategorySubcategoryIds(ids).subscribe((response: IResponseApi) => {
      const catSubPro: ICategorySubcategoryProfile[] = response.data
      this.currentProfileProviders = this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))
      this.currentProfileProvidersTmp = [...this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))]
      this.currentPromotions = this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))
      this.currentPromotionsTmp = [...this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))]
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  totalSearch(){
    let profiles: CProfileProvider[] = []
    let promotions: CPromotion[] = []
    let key = this.catOrSubcategory.toLowerCase()
    //BY PROFILE PROVIDER COMERCIAL NAME
    profiles = [...profiles, ...this.profileProviders.filter(p => p.comercialName.toLowerCase().indexOf(key)>-1)]
    //BY PROMOTION NAME
    promotions = [...promotions, ...this.promotions.filter(p=>p.name.toLowerCase().indexOf(key)>-1)]
    //BY CATEGORIES 
    const categories = [...this.categories.filter(c => c.name.toLowerCase().indexOf(key) > -1)].map(item=>{return item._id})
    //BY SUBCATEGORIES
    const subcategories = [...this.subcategories.filter(c => c.name.toLowerCase().indexOf(key) > -1)].map(item=>{return item._id})
    console.log('totalSearch subcategories', subcategories)
    this.categorySubcategoryProfileService.getByCategorySubcategoryIds([...categories, ...subcategories]).subscribe((response: IResponseApi) => {
      const catSubPro: ICategorySubcategoryProfile[] = response.data
      const currentProfileProviders = this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))
      const currentPromotions = this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))
      const newProfiles = [...currentProfileProviders, ...profiles]
      this.currentProfileProviders = [...new Set(newProfiles)]
      this.currentProfileProvidersTmp = [...new Set(newProfiles)]
      const newPromotions = [...currentPromotions, ...promotions]
      this.currentPromotions = [...new Set(newPromotions)]
      this.currentPromotionsTmp = [...new Set(newPromotions)]
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
    

  }

  getPromotions() {
    this.promotionsService.get().subscribe((response: IResponseApi) => {
      this.promotions = response.data
      if (response.data?.length === 0) {
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'No hay productos disponibles' });
      } else {
        this.currentPromotions = response.data
        this.getProfileProviders()
      }
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  getCategorySubcategoriesProfiles(categorySubcategoryId: string){    
    this.categorySubcategoryProfileService.getByCategorySubcategoryId(categorySubcategoryId).subscribe((response: IResponseApi) => {
      const catSubPro: ICategorySubcategoryProfile[] = response.data
      this.currentProfileProviders = this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))
      this.currentProfileProvidersTmp = [...this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))]
      this.currentPromotions = this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))
      this.currentPromotionsTmp = [...this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))]
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }   

  companyListEvent($event: any) {
    switch ($event.event) {
      case 'open-login':
        this.eventHeader = $event
        break;

      default:
        break;
    }
  }

  toogleSwitch(type: string) {
    this.switch = type
  }
  
  redirectCarousel(name:string){
    let newName = name.toLowerCase().replace(/\s/g, '-')
    this.router.navigate([`/resultados/${newName}`])
    this.catOrSubcategory = newName
    this.searchData()
  }

  returnCaterogies(){
    this.catOrSubcategory = ''
    this.router.navigate([`/resultados`])
    this.currentProfileProviders = this.profileProviders    
    this.currentProfileProvidersTmp = this.profileProviders
    this.currentPromotions = this.currentPromotions    
    this.currentPromotionsTmp = this.currentPromotions
  }

  async filter(){

    console.log('FILERT', this.currentProfileProvidersTmp)

    let providers: CProfileProvider[] = []
    let promotions: CPromotion[] = []
    this.currentProfileProviders = [...this.currentProfileProvidersTmp]
    this.currentPromotions = [...this.currentPromotionsTmp]

    if (this.selectedDistricts?.length > 0){
      console.log('entra 1')
      providers = [...providers, ...this.currentProfileProvidersTmp.filter(profile => this.selectedDistricts.includes(profile.districtId))]
      promotions = [...promotions, ...this.currentPromotionsTmp.filter(promotion => this.selectedDistricts.includes(this.profileProviders.find(profile => profile._id === promotion.profileProviderId).districtId))]
    }

    if (this.selectedCategories?.length > 0){
      console.log('entra 2')
      this.subcategoriesFilter = [...this.subcategoriesTmp.filter(subcategory => subcategory.categoryId === this.selectedCategories[0])]
      let categoryIds:string[]
      if (this.subcategories.length > 0) {
        categoryIds = this.subcategoriesFilter.map(s => { return s._id })
      } else {
        categoryIds = this.selectedCategories      
      }
      const catSubProRes: any = await this.categorySubcategoryProfileService.getByCategorySubcategoryIds(categoryIds).toPromise()
      const catSubPro: ICategorySubcategoryProfile[] = catSubProRes.data
      console.log('catSubPro1', catSubPro)      

      providers = [...providers, ...this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))]
      promotions = [...promotions, ...this.currentPromotions = this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))]        
    }

    if (this.selectedSubcategories?.length > 0) {
      console.log('entra 3')
      const catSubProRes: any = await this.categorySubcategoryProfileService.getByCategorySubcategoryIds(this.selectedSubcategories).toPromise()
      const catSubPro: ICategorySubcategoryProfile[] = catSubProRes.data
      providers = [...providers, ...this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))]
      promotions = [...promotions, ...this.currentPromotions = this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))]
      console.log('catSubPro2', catSubPro)
    }
    
    this.currentProfileProviders = [...new Set(providers)]
    this.currentPromotions = [...new Set(promotions)]
  }

  
  
}
