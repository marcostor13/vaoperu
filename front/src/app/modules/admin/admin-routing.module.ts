import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'subcategories',
        loadChildren: () => import('./modules/subcategory/subcategory.module').then(m => m.SubcategoryModule)
      },
      {
        path: 'districts',
        loadChildren: () => import('./modules/district/district.module').then(m => m.DistrictModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'urls',
        loadChildren: () => import('./modules/url/url.module').then(m => m.UrlModule)
      },
      {
        path: 'category-subcategory-profile',
        loadChildren: () => import('./modules/category-subcategory-profile/category-subcategory-profile.module').then(m => m.CategorySubcategoryProfileModule),
      },
      {
        path: 'promotions',
        loadChildren: () => import('./modules/promotions/promotions.module').then(m => m.PromotionsModule)
      },
    ]
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
