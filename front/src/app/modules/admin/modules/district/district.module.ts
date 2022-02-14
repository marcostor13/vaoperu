import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictRoutingModule } from './district-routing.module';
import { DistrictComponent } from './district.component';
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
    ConfirmPopupModule,
    OrderListModule,
    DialogModule,
    FormsModule,
  ],
  providers: [ConfirmationService]
})
export class DistrictModule { }
