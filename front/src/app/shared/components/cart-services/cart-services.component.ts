import { Component, Input, OnInit } from '@angular/core';
import { ICartServiceForm } from '@shared/interfaces/cartService.interfaces';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';
import { IResponseApi } from 'src/app/models/responses';
import { CProduct } from 'src/app/modules/provider/modules/product/models/product';
import { CProfileProvider } from 'src/app/modules/provider/modules/profile-provider/models/profile-provider';
import { ProfileProviderService } from 'src/app/modules/provider/modules/profile-provider/services/profile-provider.service';

@Component({
  selector: 'app-cart-services',
  templateUrl: './cart-services.component.html',
  styleUrls: ['./cart-services.component.scss']
})
export class CartServicesComponent implements OnInit {

  @Input() product: CProduct

  displayCart: boolean
  response: string = ''
  form: ICartServiceForm = {
    name: '',
    phone: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    details: ''
  }
  profileProvider: CProfileProvider

  constructor(
    private messageService: MessageService,
    private profileProviderService: ProfileProviderService
  ) {

  }

  ngOnInit(): void {
    this.getProfileProvider()
  }

  getProfileProvider(){
    this.profileProviderService.getById(this.product.profileProviderId).subscribe((response: IResponseApi) => {
      this.profileProvider = response.data
    }, _ => this.messageService.add({ severity: 'Error', detail: 'Error al obtener el perfil', summary: 'Error' }))
  }

  setActual(){
    this.form.date = moment(new Date()).format('YYYY-MM-DD')
  }

  closeModalCart() {
    this.displayCart = !this.displayCart
  }


  validateForm(){
    this.response = ''
    if(
      !this.form.name ||
      !this.form.phone ||
      !this.form.date
    ){
      this.response = 'Debe completar todos los campos'
      return false
    }else{
      return true
    }
  }

  createMessage(id: string){
    const dateAndTime = this.form.date.split("T");
    const date = dateAndTime[0];
    const time = dateAndTime[1];

  return `👋 Hola, vengo de ${this.profileProvider.comercialName}

  ID: ${this.product.categoryId}
  🗓️ ${date} ⏰ ${time}

  Nombre: ${this.form.name}
  Teléfono: ${this.form.phone}

  📝 Servicio
  ${this.product.name}
  Observaciones: ${this.form.details}

  👆 Envía este mensaje. Te atenderemos enseguida.`
}

  finishedShop(){
    if(this.validateForm()){
      if (this.profileProvider.whatsapp){
        const whatsapp = this.profileProvider.whatsapp.length === 11 ? this.profileProvider.whatsapp : `51${this.profileProvider.whatsapp.replace('+', '')}`
        const url = `https://api.whatsapp.com/send/?phone=${whatsapp}&text=${encodeURI(this.createMessage(this.profileProvider._id))}&type=phone_number&app_absent=0`
        window.open(url, "_blank");
      }else{
        this.messageService.add({ severity: 'Error', detail: 'El negocio no tiene whastapp configurado', summary: 'Error' })
      }
    }
    this.response = ''
  }

}
