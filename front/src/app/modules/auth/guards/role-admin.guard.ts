import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { GeneralService } from '@services/general.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<{ data: any }>,
    private generalGeneral: GeneralService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = this.authService.getRole()
    if (!role || role.indexOf('admin')===-1) {
      this.router.navigate(['/'])
      return false
    }else {
      return true
    }
  }
  
}
