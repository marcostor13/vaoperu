import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { CarouselModule } from 'primeng/carousel';
import { CompanyListComponent } from './company-list.component';
import { DialogModule } from 'primeng/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WhastappModule } from './../../pipes/whastapp/whastapp.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    DataViewModule,
    CarouselModule,
    DialogModule,
    FontAwesomeModule,
    WhastappModule,
    ConfirmDialogModule
  ],
  exports: [CompanyListComponent],
})
export class CompanyListModule { }
