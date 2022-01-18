import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { IResponseApi } from 'src/app/models/responses';
import { CategorySubcategoryProfileService } from './services/category-subcategory-profile.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CCategorySubcategoryProfileInvalid, ICategorySubcategoryProfile } from './interfaces/category-subcategory-profile.interfaces';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { CategoryService } from '../category/services/category.service';
import { SubcategoryService } from '../subcategory/services/subcategory.service';
import { CCategory } from '../category/models/category';
import { CSubcategory } from '../subcategory/models/subcategory';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-subcategory-profile',
  templateUrl: './category-subcategory-profile.component.html',
  styleUrls: ['./category-subcategory-profile.component.scss']
})
export class CategorySubcategoryProfileComponent implements OnInit {

  currentList: ICategorySubcategoryProfile[] = []
  currentItem: ICategorySubcategoryProfile = {
    name: '',
    categorySubcategoryId: '',
    type: '',
    profileProviderId: ''
  }
  displayModal: boolean = false
  invalid: CCategorySubcategoryProfileInvalid = new CCategorySubcategoryProfileInvalid
  profileProviders: CProfileProvider[]
  categories: CCategory[]
  subcategories: CSubcategory[]
  currentProfileProvider: CProfileProvider
  currentCategory: string = ''
  currentSubcategory: string = ''
  currentSubcategories: CSubcategory[]
  faTrash = faTrash

  constructor(
    private categorySubcategoryProfileService: CategorySubcategoryProfileService,
    private general: GeneralService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private profileProviderService: ProfileProviderService,
    private categoryService:CategoryService,
    private subcategoryService: SubcategoryService
  ) { }

  ngOnInit(): void {
    this.getProfiles()
    this.getCategories()
    this.getSubcategories()
  }

  getProfiles(){
    this.profileProviderService.getAllCompanies().subscribe((response: IResponseApi)=>{
      this.general.c('getProfiles', response)
      this.profileProviders = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    })
  }

  getCategories(){
    this.categoryService.get().subscribe((response: IResponseApi) => {
      this.general.c('getCategories', response)
      this.categories = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    })  
  }

  getSubcategories() {
    this.subcategoryService.get().subscribe((response: IResponseApi) => {
      this.general.c('getSubcategories', response)
      this.subcategories = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    })
  }

  getCategoriesAndSubcategoriesByProfileProfiderId(profileProviderId: string) {
    this.categorySubcategoryProfileService.getByProfileProviderId(profileProviderId).subscribe((response: IResponseApi) => {
      this.general.c('getCategoriesAndSubcategoriesByProfileProfiderId', response.data)
      this.currentList = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    })
  }

  reset() {
    this.currentList = null
  }

  addEdit(item: CProfileProvider = null) {
    this.general.c('ITem', item)
    if (item) {
      this.currentProfileProvider = item
      this.getCategoriesAndSubcategoriesByProfileProfiderId(item._id)     
    } else {
      this.reset()
    }
    this.displayModal = true
  }

  toogleSubcategories() {
    this.currentSubcategories = null
    if (this.currentCategory){      
      this.currentSubcategories = this.subcategories.filter(subcategory => subcategory.categoryId === this.currentCategory)
    }
  }

  add(){
    if ((this.currentCategory && this.currentSubcategories.length === 0) || (this.currentCategory&&this.currentSubcategory) ){
      const payload: ICategorySubcategoryProfile = {
        profileProviderId: this.currentProfileProvider._id,
        categorySubcategoryId: this.currentSubcategory ? this.currentSubcategory: this.currentCategory,
        type: this.currentSubcategory?'subcategory':'category',
        name: this.currentSubcategory? 
          this.subcategories.filter(subcategory=>subcategory._id === this.currentSubcategory)[0].name :
          this.categories.filter(category=>category._id === this.currentCategory)[0].name
      }
      this.categorySubcategoryProfileService.save(payload).subscribe((response: IResponseApi) => {
        this.general.c('add', response.data)
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
        this.getCategoriesAndSubcategoriesByProfileProfiderId(this.currentProfileProvider._id)
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
      })

    }else{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los campos' });
    }
  }

  confirm(event: Event, item:ICategorySubcategoryProfile) {
    this.confirmationService.confirm({
      target: event.target,
      message: "¿Segúro que desea eliminar?",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sí",
      rejectLabel: "No",
      accept: () => {
        this.delete(item);
      },
      reject: () => {
        // Nothing
      }
    });
  }

  delete(item:ICategorySubcategoryProfile){
    this.categorySubcategoryProfileService.delete(item._id).subscribe((response: IResponseApi) => {   
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
      this.getCategoriesAndSubcategoriesByProfileProfiderId(item.profileProviderId)
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    })
  }
  

}
