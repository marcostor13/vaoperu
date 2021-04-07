import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderProviderComponent } from './header-provider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuProviderModule } from '../menu-provider/menu-provider.module';


@NgModule({
  declarations: [HeaderProviderComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MenuProviderModule
  ],
  exports: [HeaderProviderComponent],
})
export class HeaderProviderModule { }
