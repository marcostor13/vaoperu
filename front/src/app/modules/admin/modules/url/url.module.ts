import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlRoutingModule } from './url-routing.module';
import { UrlComponent } from './url.component';
import { MenuAdminModule } from '../../components/menu/menu.module';
import { HeaderAdminModule } from '../../components/header/header.module';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    UrlComponent,
  ],
  imports: [
    CommonModule,
    UrlRoutingModule,
    MenuAdminModule,
    HeaderAdminModule,
    ConfirmPopupModule,
    OrderListModule,
    DialogModule,
    FormsModule,
    ListboxModule
  ],
  providers: [ConfirmationService]
})
export class UrlModule { }
