import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { MenuProviderModule } from '../../components/menu-provider/menu-provider.module';
import { HeaderProviderModule } from '../../components/header-provider/header-provider.module';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MenuProviderModule,
    HeaderProviderModule,
    DialogModule,
    ConfirmPopupModule,
    TableModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class OrderModule { }
