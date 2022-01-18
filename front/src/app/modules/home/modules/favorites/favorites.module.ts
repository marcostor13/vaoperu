import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { HeaderModule } from '@shared/components/header/header.module';
import { FooterModule } from '@shared/components/footer/footer.module';
import { CompanyListModule } from '@shared/components/company-list/company-list.module';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
CommonModule,
    FavoritesRoutingModule,
    HeaderModule,
    FooterModule,
    CompanyListModule
  ]
})
export class FavoritesModule { }
