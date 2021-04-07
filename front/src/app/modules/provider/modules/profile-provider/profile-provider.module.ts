import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileProviderRoutingModule } from './profile-provider-routing.module';
import { ProfileProviderComponent } from './profile-provider.component';
import { HeaderProviderModule } from '../../components/header-provider/header-provider.module';
import { MenuProviderModule } from '../../components/menu-provider/menu-provider.module';


@NgModule({
  declarations: [ProfileProviderComponent],
  imports: [
    CommonModule,
    ProfileProviderRoutingModule,
    HeaderProviderModule,
    MenuProviderModule
  ]
})
export class ProfileProviderModule { }
