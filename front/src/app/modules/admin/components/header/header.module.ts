import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuAdminModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MenuAdminModule,
    RouterModule
  ],
  exports: [HeaderComponent],
})
export class HeaderAdminModule { }
