import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuModule } from '../menu/menu.module';
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { AuthloginModule } from './../authlogin/authlogin.module';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { CartComponent } from './../cart/cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent
  ],
  imports: [
  CommonModule,    
    MenuModule,
    MenubarModule,
    SharedModule,
    FontAwesomeModule,
    PanelMenuModule,
    MegaMenuModule,
    AuthloginModule,
    DialogModule,    
    SidebarModule,
    BadgeModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
