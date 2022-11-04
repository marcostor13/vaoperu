import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCompanyComponent } from './view-company.component';

const routes: Routes = [
  {
    path: 'productos/0/des/1',
    loadChildren: () => import('./../../modules/view-company/components/all-products/all-products.module').then(m => m.AllProductsModule),
  },
  {
    path: 'informacion/0/des/1',
    loadChildren: () => import('./../../modules/view-company/components/information-products/information-products.module').then(m => m.InformationProductsModule),
  },
  {
    path: '',
    component: ViewCompanyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ViewCompanyRoutingModule { }
