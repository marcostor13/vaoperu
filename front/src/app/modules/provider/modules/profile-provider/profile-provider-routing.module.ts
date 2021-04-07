import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileProviderComponent } from './profile-provider.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileProviderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileProviderRoutingModule { }
