import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { RoleAdminGuard } from './modules/auth/guards/role-admin.guard';
import { RoleProviderGuard } from './modules/auth/guards/role-provider.guard';

const routes: Routes = [  
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),    
  }, 
  {    
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }, 
  {    
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [RoleAdminGuard]
  },
  {
    path: 'provider',
    loadChildren: () => import('./modules/provider/provider.module').then(m => m.ProviderModule),
    canActivate: [RoleProviderGuard]
  },
  
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],      
  exports: [RouterModule]
})
export class AppRoutingModule { }
