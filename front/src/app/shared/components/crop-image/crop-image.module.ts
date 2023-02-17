import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropImageComponent } from './crop-image.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    CropImageComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule,
    DialogModule,
    FileUploadModule,
    MessagesModule,
    MessageModule
  ],
  exports: [CropImageComponent],

})
export class CropImageModule { }
