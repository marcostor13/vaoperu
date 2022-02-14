import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionsComponent } from './promotions.component';

const routes: Routes = [
  {
    path: '',
    component: PromotionsComponent
  },
  {
    path: 'add-edit/:id',
    loadChildren: () => import('./modules/add-edit/add-edit.module').then(m => m.AddEditModule)  
  },
  {
    path: 'add-edit',
    loadChildren: () => import('./modules/add-edit/add-edit.module').then(m => m.AddEditModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionsRoutingModule { }
