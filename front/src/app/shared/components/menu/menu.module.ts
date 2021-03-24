import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ConfirmationService, MessageService } from "primeng/api";
import { MenubarModule } from 'primeng/menubar';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ConfirmPopupModule,
    MenubarModule,
    SharedModule,
  ],
  exports:[
    MenuComponent
  ],
  providers: [
    ConfirmationService, 
    MessageService
  ]
})
export class MenuModule { }
