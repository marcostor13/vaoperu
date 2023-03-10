import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { MenuProviderModule } from '../../components/menu-provider/menu-provider.module';
import { HeaderProviderModule } from '../../components/header-provider/header-provider.module';
import { ConfirmationService } from 'primeng/api';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { FileUploadModule } from 'primeng/fileupload';
import { ProductListModule } from '../../../../shared/components/product-list/product-list.module';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { CropImageModule } from "../../../../shared/components/crop-image/crop-image.module";

@NgModule({
    declarations: [
        OfferComponent
    ],
    providers: [ConfirmationService],
    imports: [
        CommonModule,
        OfferRoutingModule,
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
    ]
})
export class OfferModule { }
