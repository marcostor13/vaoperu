import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from './../../shared/components/header/header.module';
import { CarouselModule } from 'primeng/carousel';
import { FooterModule } from './../../shared/components/footer/footer.module';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CompanyListModule } from './../../shared/components/company-list/company-list.module';
import { DialogModule } from 'primeng/dialog';
import { PromotionListModule } from './../../shared/components/promotion-list/promotion-list.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SliderModule } from './../../shared/components/slider/slider.module';
import { IconsComponent } from './components/icons/icons.component';
import { DirectoryComponent } from './components/directory/directory.component';

@NgModule({
  declarations: [HomeComponent, IconsComponent, DirectoryComponent],
  imports: [
CommonModule,
    HomeRoutingModule,
    HeaderModule,
    CarouselModule,
    FooterModule,
    PanelMenuModule,
    CompanyListModule,
    DialogModule,
    PromotionListModule,
    FontAwesomeModule,
    FormsModule,
    SliderModule
  ]
})
export class HomeModule { }
