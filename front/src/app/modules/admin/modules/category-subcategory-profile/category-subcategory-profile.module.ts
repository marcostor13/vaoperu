import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorySubcategoryProfileRoutingModule } from './category-subcategory-profile-routing.module';
import { CategorySubcategoryProfileComponent } from './category-subcategory-profile.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { OrderListModule } from 'primeng/orderlist';
import { HeaderAdminModule } from '../../components/header/header.module';
import { MenuAdminModule } from '../../components/menu/menu.module';
import { ConfirmationService } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    CategorySubcategoryProfileComponent
  ],
  imports: [
    CommonModule,
    CategorySubcategoryProfileRoutingModule,
    DialogModule,
    FormsModule,
    ConfirmDialogModule,
    OrderListModule,
    MenuAdminModule,
    HeaderAdminModule,
    FontAwesomeModule,
  ],
  providers: [
    ConfirmationService
  ]
})
export class CategorySubcategoryProfileModule { }
