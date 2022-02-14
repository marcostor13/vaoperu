import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { ConfirmationService } from 'primeng/api';
import { OrderListModule } from 'primeng/orderlist';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ConfirmPopupModule,
    OrderListModule,
    DialogModule,
    FormsModule,
    ToastModule, 
    FileUploadModule
  ],
  providers: [ConfirmationService]
})
export class CategoryModule { }
