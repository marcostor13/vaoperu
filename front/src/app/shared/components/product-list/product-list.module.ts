import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { CarouselModule } from 'primeng/carousel';
import { ProductListComponent } from './product-list.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from './../../../shared/components/header/header.module';
import { ProductRowComponent } from './../product-row/product-row.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductRowComponent
  ],
  imports: [
  CommonModule,
    DataViewModule,
    CarouselModule,
    DialogModule,
    FormsModule,
    FontAwesomeModule,
    HeaderModule
  ],
  exports: [ProductListComponent],
})
export class ProductListModule { }
