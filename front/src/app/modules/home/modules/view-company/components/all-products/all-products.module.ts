import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';
import { HeaderModule } from './../../../../../../shared/components/header/header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductListModule } from '@shared/components/product-list/product-list.module';


@NgModule({
  declarations: [
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    HeaderModule,
    FontAwesomeModule,
    ProductListModule
  ]
})
export class AllProductsModule { }
