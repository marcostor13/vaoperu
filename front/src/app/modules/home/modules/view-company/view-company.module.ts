import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewCompanyRoutingModule } from './view-company-routing.module';
import { ViewCompanyComponent } from './view-company.component';


@NgModule({
  declarations: [
    ViewCompanyComponent
  ],
  imports: [
    CommonModule,
    ViewCompanyRoutingModule
  ]
})
export class ViewCompanyModule { }
