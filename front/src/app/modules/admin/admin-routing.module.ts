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
    loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule),
    canActivate: [RoleAdminGuard]
  },
  {
    path: 'subcategories',
    loadChildren: () => import('./modules/subcategory/subcategory.module').then(m => m.SubcategoryModule),
    canActivate: [RoleAdminGuard]
  },
  {
    path: 'districts',
    loadChildren: () => import('./modules/district/district.module').then(m => m.DistrictModule),
    canActivate: [RoleAdminGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
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
