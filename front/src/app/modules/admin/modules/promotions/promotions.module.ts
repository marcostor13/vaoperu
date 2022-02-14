import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsComponent } from './promotions.component';
import { OrderListModule } from 'primeng/orderlist';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AngularCropperjsModule } from 'angular-cropperjs';

@NgModule({
  declarations: [
    PromotionsComponent
  ],
  imports: [
    CommonModule,
    PromotionsRoutingModule,
    OrderListModule,
    ConfirmPopupModule,
    FormsModule    
  ],
  providers: [ConfirmationService]
})
export class PromotionsModule { }
