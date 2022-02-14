import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { CarouselModule } from 'primeng/carousel';
import { PromotionListComponent } from './promotion-list.component';
import { DialogModule } from 'primeng/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhastappModule } from '../../pipes/whastapp/whastapp.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    PromotionListComponent    
  ],
  imports: [  
    CommonModule,
    DataViewModule,
    CarouselModule, 
    DialogModule,
    FontAwesomeModule,
    WhastappModule, 
    ConfirmDialogModule,
    FontAwesomeModule
  ],
  exports: [PromotionListComponent],
})
export class PromotionListModule { }
