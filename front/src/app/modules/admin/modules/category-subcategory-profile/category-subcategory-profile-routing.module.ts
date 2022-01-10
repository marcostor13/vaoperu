import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorySubcategoryProfileComponent } from './category-subcategory-profile.component';

const routes: Routes = [
  {
    path: '',
    component: CategorySubcategoryProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorySubcategoryProfileRoutingModule { }
