import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GeneralService } from '@services/general.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleProviderGuard implements CanActivate {
  
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
    if (!role || (role.indexOf('provider')===-1 && role.indexOf('gallery')===-1)) {      
      this.router.navigate(['/'])
      return false
    } else if (role.length > 1) {
      this.store.select((sta: any) => sta.Reducer.currentRole)
        .pipe(delay(0))
        .subscribe((role: string) => {
          this.generalGeneral.c('role state', role)
          if (!role) {
            this.router.navigate(['/hub'])
          }
        })
      return true
    } else {
      return true
    }
  }
  
}
