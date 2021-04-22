import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GeneralService } from './../services/general.service';


@Injectable()
export class HttpRequestInterceptor  implements HttpInterceptor {

    constructor(
        private general: GeneralService
    ){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.general.isLoad(true)
        return next.handle(request)
            .pipe(
                catchError((error: HttpErrorResponse) => {                    
                    this.general.isLoad(false)
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