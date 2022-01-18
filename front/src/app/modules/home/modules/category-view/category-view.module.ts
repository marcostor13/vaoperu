import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryViewRoutingModule } from './category-view-routing.module';
import { CategoryViewComponent } from './category-view.component';
import { HeaderModule } from '@shared/components/header/header.module';
import { FooterModule } from '@shared/components/footer/footer.module';
import { CompanyListModule } from '@shared/components/company-list/company-list.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoryViewComponent
  ],
  imports: [
    CommonModule,
    CategoryViewRoutingModule,
    HeaderModule,
    FooterModule,
    CompanyListModule,
    MultiSelectModule,
    FormsModule
  ]
})
export class CategoryViewModule { }
