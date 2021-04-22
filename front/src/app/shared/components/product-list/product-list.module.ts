import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { CarouselModule } from 'primeng/carousel';
import { ProductListComponent } from './product-list.component';

@NgModule({
  declarations: [ProductListComponent],
  imports: [  
    CommonModule,
    DataViewModule,
    CarouselModule
  ],
  exports: [ProductListComponent],
})
export class ProductListModule { }
