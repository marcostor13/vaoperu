import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlRoutingModule } from './url-routing.module';
import { UrlComponent } from './url.component';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    UrlComponent,
  ],
  imports: [
    CommonModule,
    UrlRoutingModule,
    ConfirmPopupModule,
    OrderListModule,
    DialogModule,
    FormsModule,
    ListboxModule,
    InputSwitchModule
  ],
  providers: [ConfirmationService]
})
export class UrlModule { }
