import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCompanyComponent } from './view-company.component';
import { RoleUserGuard } from './../../../auth/guards/role-user.guard';

const routes: Routes = [
  {
    path: '',
    component: ViewCompanyComponent,
    canActivate: [RoleUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ViewCompanyRoutingModule { }
