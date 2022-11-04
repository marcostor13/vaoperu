import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { RolePipe } from './pipes/role.pipe';

@NgModule({
  declarations: [
    UserComponent,
    RolePipe,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ConfirmPopupModule,
    OrderListModule,
    DialogModule,
    FormsModule,
    ListboxModule
  ],
  providers: [ConfirmationService]
})
export class UserModule { }
