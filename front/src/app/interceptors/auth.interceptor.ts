import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralService } from '@services/general.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private general: GeneralService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = (localStorage.getItem('vaouser')) ? JSON.parse(localStorage.getItem('vaouser')).token: null
    let clone = request.clone()
    if (token) {
      clone = clone.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
    this.general.isLoad(true)
    return next.handle(clone)
  }
}

export const AuthTokenHttpInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}