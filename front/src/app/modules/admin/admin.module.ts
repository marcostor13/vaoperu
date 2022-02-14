import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './layouts/main/main.component';
import { HeaderAdminModule } from './components/header/header.module';
import { MenuAdminModule } from './components/menu/menu.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderAdminModule,
    MenuAdminModule
  ]
})
export class AdminModule { }
