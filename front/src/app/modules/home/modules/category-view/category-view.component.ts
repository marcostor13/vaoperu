import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '@services/general.service';
import { MessageService } from 'primeng/api';
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

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  catOrSubcategory: string
  categories: CCategory[]
  subcategories: CSubcategory[]
  profileProviders: CProfileProvider[]
  eventHeader: any
  currentProfileProviders: CProfileProvider[]
  currentProfileProvidersTmp: CProfileProvider[]
  districts: CDistrict[]
  selectedDistricts: string[]
  promotions: CPromotion[]
  currentPromotions: CPromotion[]
  currentPromotionsTmp: CPromotion[]
  switch: string = 'companies'

  constructor(
    private route: ActivatedRoute,
    private generalService: GeneralService,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private general: GeneralService,
    private messageService: MessageService,
    private categorySubcategoryProfileService: CategorySubcategoryProfileService,
    private profileProviderService: ProfileProviderService,
    private districtService: DistrictService,
    private promotionsService: PromotionService
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
      this.searchData()
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })  
  }

  getProfileProviders() {
    this.profileProviderService.getAllCompanies().subscribe((response: IResponseApi) => {
      this.profileProviders = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  searchData(){
    let categorySubcategory = [...this.categories.filter(category => category.name.toLowerCase().replace(/\s/g, '-') === this.catOrSubcategory.toLowerCase())]
    if (categorySubcategory.length===0){
      categorySubcategory = [...this.subcategories.filter(subcategory => subcategory.name.toLowerCase().replace(/\s/g, '-') === this.catOrSubcategory.toLowerCase())]
    }
    this.getCategorySubcategoriesProfiles(categorySubcategory[0])

  }

  getPromotions() {
    this.promotionsService.get().subscribe((response: IResponseApi) => {
      this.promotions = response.data
      if (response.data?.length === 0) {
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: 'No hay productos disponibles' });
      } else {
        this.getProfileProviders()
      }
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

  getCategorySubcategoriesProfiles(categorySubcategory: any){    
    if(categorySubcategory){
      this.categorySubcategoryProfileService.getByCategorySubcategoryId(categorySubcategory._id).subscribe((response: IResponseApi) => {
        const catSubPro: ICategorySubcategoryProfile[] = response.data
        this.currentProfileProviders = this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))
        this.currentProfileProvidersTmp = [...this.profileProviders.filter(profileProvider => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(profileProvider._id))]
        this.currentPromotions = this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))
        this.currentPromotionsTmp = [...this.promotions.filter(promotion => catSubPro.map(catSub => { return catSub.profileProviderId }).includes(promotion.profileProviderId))]
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
    }
  }  

  filterByDistrict(){
    if (this.selectedDistricts?.length > 0){
      this.currentProfileProviders = this.currentProfileProvidersTmp.filter(profile=>this.selectedDistricts.includes(profile.districtId))
      this.currentPromotions = this.currentPromotionsTmp.filter(promotion => this.selectedDistricts.includes(this.profileProviders.find(profile => profile._id === promotion.profileProviderId).districtId))
    }else{
      this.currentProfileProviders = this.currentProfileProvidersTmp
      this.currentPromotions = this.currentPromotionsTmp
    }
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

}
