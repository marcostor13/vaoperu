import { Component, OnInit } from '@angular/core';
import { GeneralService } from '@services/general.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IResponseApi } from 'src/app/models/responses';
import { UrlService } from './services/url.service';
import { CUrl, CUrlInvalid } from './models/url';
import { UserService } from '../user/services/user.service';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {

  items: CUrl[]
  displayModal: boolean = false
  invalid: CUrlInvalid = new CUrlInvalid
  currentItem: CUrl = new CUrl
  profileProviders: CProfileProvider[]

  constructor(
    private general: GeneralService,
    private urlService: UrlService,
    private profileProviderService: ProfileProviderService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {
   }

  ngOnInit(): void {
    this.get()
    this.getProfileProviders()
  }


  get() {
    this.urlService.get().subscribe((response: IResponseApi) => {
      this.items = response.data
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

  validate(item: CUrl) {
    this.invalid = new CUrlInvalid
    let invalid = false
    if (!this.currentItem.url) {
      invalid = true
      this.invalid.url = true
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los campos requeridos' });
    }
    if (!this.currentItem.profileProviderId) {
      invalid = true
      this.invalid.profileProviderId = true
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe completar todos los campos requeridos' });
    } 
    return invalid
  }

  reset() {
    this.currentItem = new CUrl
  }

  addEdit(item: CUrl = null) {
    if (item) {
      this.currentItem = item
    } else {
      this.reset()
    }
    this.displayModal = true
  }

  confirm(event: Event, item: CUrl) {
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
      this.urlService.save(this.currentItem).subscribe((response: IResponseApi) => {
        this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message ? response.message: 'Usuario registrado' });
        if(!this.currentItem._id){
          this.currentItem = new CUrl
        }
        this.get()
      }, error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      })
      
    }
  }

  delete(item: CUrl) {
    
    this.urlService.delete(item._id).subscribe((response: IResponseApi) => {
      this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
      this.currentItem = new CUrl
      this.get()
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })    
  }

  getElementByID(id: string) {
    return this.items.filter((item: CUrl) => item._id === id)
  }

  updateAll() {
    this.urlService.updateAll(this.items).subscribe((response: IResponseApi) => {
      this.messageService.add({ severity: 'success', summary: 'Mensaje', detail: response.message });
      this.currentItem = new CUrl
      this.get()
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
    })
  }

}
