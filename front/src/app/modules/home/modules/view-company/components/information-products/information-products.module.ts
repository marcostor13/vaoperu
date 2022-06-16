import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationProductsRoutingModule } from './information-products-routing.module';
import { InformationProductsComponent } from './information-products.component';
import { HeaderModule } from './../../../../../../shared/components/header/header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductListModule } from '@shared/components/product-list/product-list.module';
import { InformationComponent } from './../../components/information/information.component';


@NgModule({
  declarations: [
    InformationProductsComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    InformationProductsRoutingModule,
    HeaderModule,
    FontAwesomeModule,
    ProductListModule,
  ]
})
export class InformationProductsModule { }
