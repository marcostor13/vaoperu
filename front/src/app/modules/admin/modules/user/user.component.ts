import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IResponseApi } from 'src/app/models/responses';
import { CUser, CUserInvalid } from 'src/app/models/user';
import { UserService } from './services/user.service';
import { IRole } from './interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  items: CUser[]
  displayModal: boolean = false
  invalid: CUserInvalid = new CUserInvalid
  currentItem: CUser = new CUser
  roles: IRole[]

  constructor(
    private general: GeneralService,
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {
    this.roles = [
      { name: 'Administrador', key: 'admin' },
      { name: 'Proveedor', key: 'provider' },
      { name: 'Gallería', key: 'gallery' },
      { name: 'Usuario', key: 'user' }
    ]
   }

  ngOnInit(): void {
    this.get()
  }


  get() {
    this.userService.get().subscribe((response: IResponseApi) => {
      this.general.c('Get', response)
      this.items = response.data
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
    
  }

  validate(item: CUser) {
    this.invalid = new CUserInvalid
    let invalid = false
    if (!this.currentItem.name) {
      invalid = true
      this.invalid.name = true
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los campos requeridos' });
    }
    if (!this.currentItem.email) {
      invalid = true
      this.invalid.email = true
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los campos requeridos' });
    }
    if (!item._id){
      if (!this.currentItem.password) {
        invalid = true
        this.invalid.password = true
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los campos requeridos' });
      }
    }
    if (!this.currentItem.role || this.currentItem.role?.length === 0) {
      invalid = true
      this.invalid.role = true
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar el rol' });
    }
    return invalid
  }

  reset() {
    this.currentItem = new CUser
  }

  addEdit(item: CUser = null) {
    if (item) {
      item.password = ''
      this.currentItem = item
    } else {
      this.reset()
    }
    this.displayModal = true
  }

  confirm(event: Event, item: CUser) {
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

  add(){    
    if (!this.validate(this.currentItem)) {
      this.userService.save(this.currentItem).subscribe((response: IResponseApi) => {
        this.general.c('Add', response)
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message ? response.message: 'Usuario registrado' });
        this.currentItem = new CUser
        this.get()
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
      
    }
  }

  delete(item: CUser) {
    
    this.userService.delete(item._id).subscribe((response: IResponseApi) => {
      this.general.c('Delete', response)
      this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
      this.currentItem = new CUser
      this.get()
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })    
  }

  getElementByID(id: string) {
    return this.items.filter((item: CUser) => item._id === id)
  }

}
