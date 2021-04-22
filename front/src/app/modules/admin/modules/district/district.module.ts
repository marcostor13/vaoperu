import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictRoutingModule } from './district-routing.module';
import { DistrictComponent } from './district.component';
import { MenuAdminModule } from '../../components/menu/menu.module';
import { HeaderAdminModule } from '../../components/header/header.module';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ConfirmationService } from 'primeng/api';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DistrictComponent],
  imports: [
    CommonModule,
    DistrictRoutingModule,
    MenuAdminModule,
    HeaderAdminModule,
    ConfirmPopupModule,
    OrderListModule,
    DialogModule,
    FormsModule,
  ],
  providers: [ConfirmationService]
})
export class DistrictModule { }
