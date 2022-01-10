import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorySubcategoryProfileRoutingModule } from './category-subcategory-profile-routing.module';
import { CategorySubcategoryProfileComponent } from './category-subcategory-profile.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { OrderListModule } from 'primeng/orderlist';
import { HeaderAdminModule } from '../../components/header/header.module';
import { MenuAdminModule } from '../../components/menu/menu.module';


@NgModule({
  declarations: [
    CategorySubcategoryProfileComponent
  ],
  imports: [
    CommonModule,
    CategorySubcategoryProfileRoutingModule,
    DialogModule,
    FormsModule,
    ConfirmPopupModule,
    OrderListModule,
    MenuAdminModule,
    HeaderAdminModule
  ]
})
export class CategorySubcategoryProfileModule { }
