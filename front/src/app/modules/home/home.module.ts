import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from './../../shared/components/header/header.module';
import { CarouselModule } from 'primeng/carousel';
import { FooterModule } from './../../shared/components/footer/footer.module';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [HomeComponent, ProductsComponent],
  imports: [    
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    CarouselModule,
    FooterModule
  ]
})
export class HomeModule { }
