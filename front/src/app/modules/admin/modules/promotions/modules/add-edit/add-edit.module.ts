import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditRoutingModule } from './add-edit-routing.module';
import { AddEditComponent } from './add-edit.component';
import { DialogModule } from 'primeng/dialog';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';


@NgModule({
  declarations: [
    AddEditComponent
  ],
  imports: [
    CommonModule,
    AddEditRoutingModule,
    DialogModule,
    FileUploadModule,
    ImageCropperModule,
    AngularCropperjsModule,
    FormsModule,
    ConfirmPopupModule
  ]
})
export class AddEditModule { }
