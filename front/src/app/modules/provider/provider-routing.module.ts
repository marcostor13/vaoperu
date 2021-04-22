import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleProviderGuard } from '../auth/guards/role-provider.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [RoleProviderGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile-provider/profile-provider.module').then(m => m.ProfileProviderModule),
    canActivate: [RoleProviderGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
    canActivate: [RoleProviderGuard]
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
export class ProviderRoutingModule { }
