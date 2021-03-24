import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuAdminModule } from './../../components/menu/menu.module';
import { HeaderAdminModule } from './../../components/header/header.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenuAdminModule,
    HeaderAdminModule
  ]
})
export class DashboardModule { }
