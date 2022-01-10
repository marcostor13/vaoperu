import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { IResponseApi } from 'src/app/models/responses';
import { CategorySubcategoryProfileService } from './services/category-subcategory-profile.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CCategorySubcategoryProfileInvalid, ICategorySubcategoryProfile } from './interfaces/category-subcategory-profile.interfaces';

@Component({
  selector: 'app-category-subcategory-profile',
  templateUrl: './category-subcategory-profile.component.html',
  styleUrls: ['./category-subcategory-profile.component.scss']
})
export class CategorySubcategoryProfileComponent implements OnInit {

  list: ICategorySubcategoryProfile[]
  currentItem: ICategorySubcategoryProfile = {
    name: '',
    categorySubcategoryId: '',
    type: '',
    profileProviderId: ''
  }
  displayModal: boolean = false
  invalid: CCategorySubcategoryProfileInvalid = new CCategorySubcategoryProfileInvalid

  constructor(
    private categorySubcategoryProfileService: CategorySubcategoryProfileService,
    private general: GeneralService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getList()
  }

  getList() {
    this.categorySubcategoryProfileService.get().subscribe((response: IResponseApi) => {
      this.general.c('Get', response)
      this.list = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message });
    })
  }

  reset() {
    this.currentItem = {
      name: '',
      categorySubcategoryId: '',
      type: '',
      profileProviderId: ''      
    }
  }

  addEdit(item: ICategorySubcategoryProfile = null) {
    this.general.c('ITem', item)
    if (item) {
      this.currentItem = item     
    } else {
      this.reset()
    }
    this.displayModal = true
  }

  add(){
    
  }

  confirm(event: Event, item) {
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

  delete(item){

  }
  

}
