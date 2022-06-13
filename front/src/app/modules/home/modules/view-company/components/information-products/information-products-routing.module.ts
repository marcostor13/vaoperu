import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationProductsComponent } from './information-products.component';

const routes: Routes = [
  {
    path: '',
    component: InformationProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationProductsRoutingModule { }
