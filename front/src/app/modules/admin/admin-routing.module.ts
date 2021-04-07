import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleAdminGuard } from '../auth/guards/role-admin.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [RoleAdminGuard]
  },
  {
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule),
    canActivate: [RoleAdminGuard]
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
