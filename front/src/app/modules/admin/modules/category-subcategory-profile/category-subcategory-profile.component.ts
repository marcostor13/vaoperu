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
import { SectionService } from '../section/services/section.service';
import { IItemsData, ISectionsData } from './../section/models/section';
import { ISubitemSection } from './../../../../../../../back/src/models/subitem-section';

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
  currentItemSectionId: string = ''
  currentSubitemId: string = ''
  currentSubitems: ISubitemSection[]
  faTrash = faTrash
  step: number = 1
  type: string
  sections: ISectionsData[]
  items: IItemsData[]

  constructor(
    private categorySubcategoryProfileService: CategorySubcategoryProfileService,
    private general: GeneralService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private profileProviderService: ProfileProviderService,
    private categoryService:CategoryService,
    private subcategoryService: SubcategoryService,
    private sectionService: SectionService
  ) { }

  ngOnInit(): void {
    this.getProfiles()
    this.getCategories()
    this.getSubcategories()
    this.getSections()
  }

  getProfiles(){
    this.profileProviderService.getAllCompanies().subscribe((response: IResponseApi)=>{
      this.profileProviders = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    })
  }

  getCategories(){
    this.categoryService.get().subscribe((response: IResponseApi) => {
      this.categories = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    })
  }

  getSubcategories() {
    this.subcategoryService.get().subscribe((response: IResponseApi) => {
      this.subcategories = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    })
  }

  getCategoriesAndSubcategoriesByProfileProfiderId(profileProviderId: string) {
    this.categorySubcategoryProfileService.getByProfileProviderId(profileProviderId).subscribe((response: IResponseApi) => {
      this.currentList = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    })
  }

  reset() {
    this.currentList = null
  }

  addEdit(item: CProfileProvider = null) {
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
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
        this.getCategoriesAndSubcategoriesByProfileProfiderId(this.currentProfileProvider._id)
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
      })

    }else{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los campos' });
    }
  }

  add2(){
    if ((this.currentItemSectionId && this.currentSubitems?.length === 0) || (this.currentItemSectionId && this.currentSubitemId) ){
      const payload: ICategorySubcategoryProfile = {
        profileProviderId: this.currentProfileProvider._id,
        categorySubcategoryId: this.currentSubitemId ? this.currentSubitemId: this.currentItemSectionId,
        type: this.currentSubitemId?'subitem':'item',
        name: this.currentSubitemId?
          this.currentSubitems.find(s=>s._id === this.currentSubitemId).name :
          this.items.find(i=>i.item._id === this.currentItemSectionId).item.name
      }
      this.categorySubcategoryProfileService.save(payload).subscribe((response: IResponseApi) => {
        this.messageService.add({ severity: 'success', summary: 'Éxito', detail: response.message });
        this.getCategoriesAndSubcategoriesByProfileProfiderId(this.currentProfileProvider._id)
        this.reset2()
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
      })

    }else{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los campos' });
    }
  }

  reset2(){
    this.currentCategory = ''
    this.currentItemSectionId = ''
    this.currentSubitemId = ''
    this.currentSubcategory = ''
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

  getSections(){
    this.sectionService.get().subscribe((response: IResponseApi)=>{
      this.sections = response.data
      this.items = [].concat.apply([], this.sections.map(s=>s.items));
    })
  }

  nextStep(type: string){
    this.type = type
    this.step = 2
  }

  backStep(){
    this.step = 1
  }

  toogleItems($event){
    this.currentSubitems = null
    const val = $event.target.value
    this.currentSubitems = [].concat.apply([], this.items.map(i=>{
      if(i.item._id === val){
        return i.subitems
      }
    })).filter(c=>c);
  }


}
