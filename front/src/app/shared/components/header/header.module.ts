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

@NgModule({
  declarations: [
    HeaderComponent,
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
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
