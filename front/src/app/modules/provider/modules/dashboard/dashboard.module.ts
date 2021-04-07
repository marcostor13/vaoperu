import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuProviderModule } from '../../components/menu-provider/menu-provider.module';
import { HeaderProviderModule } from '../../components/header-provider/header-provider.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenuProviderModule,
    HeaderProviderModule
  ]
})
export class DashboardModule { }
