import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuProviderComponent } from './menu-provider.component';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [MenuProviderComponent],
  imports: [
    CommonModule,
    PanelMenuModule
  ],
  exports: [MenuProviderComponent],
})
export class MenuProviderModule { }
