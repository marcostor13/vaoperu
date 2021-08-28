import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryViewRoutingModule } from './category-view-routing.module';
import { CategoryViewComponent } from './category-view.component';


@NgModule({
  declarations: [
    CategoryViewComponent
  ],
  imports: [
    CommonModule,
    CategoryViewRoutingModule
  ]
})
export class CategoryViewModule { }
