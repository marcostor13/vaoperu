import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthloginComponent } from './authlogin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AuthloginComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [
    AuthloginComponent
  ],
})
export class AuthloginModule { }
