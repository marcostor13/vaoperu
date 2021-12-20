import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappPipe } from './whatsapp.pipe';



@NgModule({
  declarations: [
    WhatsappPipe
  ],
  imports: [
  CommonModule
  ],
  exports: [
    WhatsappPipe
  ]
})
export class WhastappModule { }
