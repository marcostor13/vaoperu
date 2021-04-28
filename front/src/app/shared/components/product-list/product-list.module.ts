import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { CarouselModule } from 'primeng/carousel';
import { ProductListComponent } from './product-list.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [ProductListComponent],
  imports: [  
    CommonModule,
    DataViewModule,
    CarouselModule, 
    DialogModule,
  ],
  exports: [ProductListComponent],
})
export class ProductListModule { }
