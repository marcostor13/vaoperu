import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { MenuProviderModule } from '../../components/menu-provider/menu-provider.module';
import { HeaderProviderModule } from '../../components/header-provider/header-provider.module';
import { ConfirmationService } from 'primeng/api';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { FileUploadModule } from 'primeng/fileupload';
import { ProductListModule } from './../../../../shared/components/product-list/product-list.module';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { CropImageModule } from '@shared/components/crop-image/crop-image.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [

  CommonModule,
    ProductRoutingModule,
    MenuProviderModule,
    HeaderProviderModule,
    OrderListModule,
    DialogModule,
    FormsModule,
    ToastModule,
    ConfirmPopupModule,
    FileUploadModule,
    ProductListModule,
    InputSwitchModule,
    AngularCropperjsModule,
    CropImageModule
  ],
  providers: [ConfirmationService]
})
export class ProductModule { }
