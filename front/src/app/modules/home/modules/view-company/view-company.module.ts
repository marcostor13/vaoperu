import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCompanyRoutingModule } from './view-company-routing.module';
import { ViewCompanyComponent } from './view-company.component';
import { HeaderModule } from './../../../../shared/components/header/header.module';
import { WhastappModule } from '@shared/pipes/whastapp/whastapp.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabViewModule } from 'primeng/tabview';
import { ProductListModule } from '@shared/components/product-list/product-list.module';
import { InformationComponent } from './components/information/information.component';


@NgModule({
  declarations: [
    ViewCompanyComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    ViewCompanyRoutingModule,
    HeaderModule,
    WhastappModule,
    FontAwesomeModule,
    TabViewModule,
    ProductListModule
  ]
})
export class ViewCompanyModule { }
