import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponseApi } from 'src/app/models/responses';
import { CCategory } from 'src/app/modules/admin/modules/category/models/category';
import { CategoryService } from 'src/app/modules/admin/modules/category/services/category.service';
import { CSubcategory } from 'src/app/modules/admin/modules/subcategory/models/subcategory';
import { SubcategoryService } from 'src/app/modules/admin/modules/subcategory/services/subcategory.service';
import { CProfileProvider } from './../../../provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { DistrictService } from 'src/app/modules/admin/modules/district/services/district.service';
import { CDistrict } from 'src/app/modules/admin/modules/district/models/district';
import { CPromotion } from 'src/app/modules/admin/modules/promotions/interfaces/promotion.interface';
import { PromotionService } from 'src/app/modules/admin/modules/promotions/services/promotion.service';
import { MessageService } from 'primeng/api';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SectionService } from './../../../admin/modules/section/services/section.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  category: string
  subcategory: string
  itemsCarousel
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
  faArrowLeft = faArrowLeft
  section: string
  item: string
  subitem: string
  id: string
  classCarrousel: boolean
  keyword: string

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private messageService: MessageService,
    private profileProviderService: ProfileProviderService,
    private districtService: DistrictService,
    private promotionsService: PromotionService,
    private router: Router,
    private sectionService: SectionService
  ) {
    this.category = this.route.snapshot.paramMap.get('category')
    this.subcategory = this.route.snapshot.paramMap.get('subcategory')
    this.section = this.route.snapshot.paramMap.get('section')
    this.item = this.route.snapshot.paramMap.get('item')
    this.subitem = this.route.snapshot.paramMap.get('subitem')
    this.id = this.route.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.getCarrousel()
    this.getDistricts()
    this.getPromotions()
    this.search()
  }

  getCarrousel(){
    if(this.category){
      this.getByNameCategories()
    }else if(this.subcategory){
      this.getAllCategories()
      this.classCarrousel = true
    }else if(this.subitem){
      this.getItemsBySubitemName()
    }else if(this.item){
      this.getSectionsAndItems()
    }
  }

  getByNameCategories() {
    this.categoryService.getByNameCategories(this.category).subscribe((response: IResponseApi) => {
      this.itemsCarousel = response.data
      if(this.itemsCarousel[0]?.categoryId){
        this.classCarrousel = false
      }else{
        this.classCarrousel = true
      }
    })
  }

  getAllCategories() {
    this.categoryService.get().subscribe((response: IResponseApi) => {
      this.itemsCarousel = response.data
    })
  }

  getDistricts() {
    this.districtService.get().subscribe((response: IResponseApi) => {
      this.districts = response.data
    })
  }

  getItemsBySubitemName(){
    this.sectionService.getItemsBySubitemName(this.subitem).subscribe((response: IResponseApi) => {
      this.itemsCarousel = response.data
      if(this.itemsCarousel[0]?.itemId){
        this.classCarrousel = false
      }else{
        this.classCarrousel = true
      }
    })
  }

  getSectionsAndItems(){
    this.sectionService.getSectionsAndItems(this.item).subscribe((response: IResponseApi) => {
      this.itemsCarousel = response.data
      if(this.itemsCarousel[0]?.itemId){
        this.classCarrousel = false
      }else{
        this.classCarrousel = true
      }
    })
  }

  getTitle(title: string){
    return title.replace(/-/g, ' ')
  }

  search(){
    let type = ''
    this.keyword = this.id
    if(this.category){
      type = 'category'
      this.keyword = this.category
    }else if(this.subcategory){
      type = 'subcategory'
      this.keyword = this.subcategory
    }else if(this.subitem){
      type = 'subitem'
      this.keyword = this.subitem
    }else if(this.item){
      type = 'item'
      this.keyword = this.item
    }
    this.getProfileProviders(this.keyword, type)
  }

  resetIds(){
    this.category = ''
    this.subcategory = ''
    this.subitem = ''
    this.item = ''
  }

  getProfileProviders(keyword: string, type: string) {
    this.profileProviderService.search({keyword, type}).subscribe((response: IResponseApi) => {
      this.profileProviders = response.data
      this.currentProfileProviders = this.profileProviders
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
      }
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

  redirectCarousel(item){
    this.resetIds()
    let newName = item.name.toLowerCase().replace(/\s/g, '-')
    if(item.itemId){
      this.subitem = newName
    }else if(item.categoryId){
      this.subcategory = newName
    }else if(item.sectionId){
      this.item = newName
    }else{
      this.category = newName
    }
    this.getCarrousel()
    this.search()
  }

  returnCaterogies(){
    this.router.navigate([`/`])
    // this.currentProfileProviders = this.profileProviders
    // this.currentProfileProvidersTmp = this.profileProviders
    // this.currentPromotions = this.currentPromotions
    // this.currentPromotionsTmp = this.currentPromotions
  }

  // async filter(){
  //   let providers: CProfileProvider[] = []
  //   let promotions: CPromotion[] = []
  //   this.currentProfileProviders = [...this.currentProfileProvidersTmp]
  //   this.currentPromotions = [...this.currentPromotionsTmp]

  //   if (this.selectedDistricts?.length > 0){
  //     providers = [...providers, ...this.currentProfileProvidersTmp.filter(profile => this.selectedDistricts.includes(profile.districtId))]
  //     promotions = [...promotions, ...this.currentPromotionsTmp.filter(promotion => this.selectedDistricts.includes(this.profileProviders.find(profile => profile._id === promotion.profileProviderId).districtId))]
  //   }

  //   if (this.selectedCategories?.length > 0){
  //     this.subcategoriesFilter = [...this.subcategoriesTmp.filter(subcategory => subcategory.categoryId === this.selectedCategories[0])]
  //     let categoryIds:string[]
  //     if (this.subcategories.length > 0) {
  //       categoryIds = this.subcategoriesFilter.map(s => { return s._id })
  //     } else {
  //       categoryIds = this.selectedCategories
  //     }
  //     const catSubProRes: any = await this.categorySubcategoryProfileService.getByCategorySubcategoryIds(categoryIds).toPromise()
  //     const catSubPro: ICategorySubcategoryProfile[] = catSubProRes.data

  //     providers = [...providers, ...this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))]
  //     promotions = [...promotions, ...this.currentPromotions = this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))]
  //   }

  //   if (this.selectedSubcategories?.length > 0) {
  //     const catSubProRes: any = await this.categorySubcategoryProfileService.getByCategorySubcategoryIds(this.selectedSubcategories).toPromise()
  //     const catSubPro: ICategorySubcategoryProfile[] = catSubProRes.data
  //     providers = [...providers, ...this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))]
  //     promotions = [...promotions, ...this.currentPromotions = this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))]
  //   }

  //   this.currentProfileProviders = [...new Set(providers)]
  //   this.currentPromotions = [...new Set(promotions)]
  // }



}
