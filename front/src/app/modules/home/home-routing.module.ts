import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./modules/view-company/view-company.module').then(m => m.ViewCompanyModule),
  },  
  {
    path: 'resultados',
    loadChildren: () => import('./modules/category-view/category-view.module').then(m => m.CategoryViewModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
