import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileProviderRoutingModule } from './profile-provider-routing.module';
import { ProfileProviderComponent } from './profile-provider.component';
import { HeaderProviderModule } from '../../components/header-provider/header-provider.module';
import { MenuProviderModule } from '../../components/menu-provider/menu-provider.module';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ConfirmationService } from "primeng/api";
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [ProfileProviderComponent],
  imports: [
    CommonModule,
    ProfileProviderRoutingModule,
    HeaderProviderModule,
    MenuProviderModule,
    FormsModule,
    ConfirmPopupModule,
    FileUploadModule,
    InputSwitchModule,
  ],
  providers: [ConfirmationService]
})
export class ProfileProviderModule { }
