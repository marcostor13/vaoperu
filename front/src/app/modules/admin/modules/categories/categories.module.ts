import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { MenuAdminModule } from '../../components/menu/menu.module';
import { HeaderAdminModule } from '../../components/header/header.module';


@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MenuAdminModule,
    HeaderAdminModule
  ]
})
export class CategoriesModule { }
