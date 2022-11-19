import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../modules/auth/services/auth.service';
import { GeneralService } from './../services/general.service';


@Injectable()
export class HttpRequestInterceptor  implements HttpInterceptor {

    constructor(
        private general: GeneralService,
        private authService: AuthService,
        private messageService: MessageService
    ){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.general.isLoad(true)
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    this.general.isLoad(false)
                    if (error.status === 401) {
                        this.authService.logout()
                    } else {
                        this.general.c('Error HTTP', error)
                        this.messageService.add({ severity: 'Error', summary: `Error ${error.status}`, detail: JSON.stringify(error) })
                    }
                    return throwError(error);
                })
            )
            .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
                if (evt instanceof HttpResponse) {
                    this.general.isLoad(false)
                }
                return evt;
            }));

    }
}

export const HttpErrorHttpInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
}
