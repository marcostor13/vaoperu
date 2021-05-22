import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { CarouselModule } from 'primeng/carousel';
import { CompanyListComponent } from './company-list.component';
import { DialogModule } from 'primeng/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhatsappPipe } from '../../../shared/pipes/whatsapp.pipe';

@NgModule({
  declarations: [
    CompanyListComponent, 
    WhatsappPipe
  ],
  imports: [  
    CommonModule,
    DataViewModule,
    CarouselModule, 
    DialogModule,
    FontAwesomeModule,
  ],
  exports: [CompanyListComponent],
})
export class CompanyListModule { }
