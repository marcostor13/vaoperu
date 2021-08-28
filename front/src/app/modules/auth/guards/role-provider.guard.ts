import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { GeneralService } from '@services/general.service';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleProviderGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    private generalService: GeneralService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = this.authService.getRole()
    if (!role || role.indexOf('provider')===-1) {
      this.router.navigate(['/'])
      return false
    }
    return true
  }
  
}
