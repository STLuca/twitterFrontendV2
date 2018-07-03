import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/Login.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    authValue = '';

    constructor(
        private loginService: LoginService,
        // private router: Router
    ) {
        // this.loginService.getAuthValue().subscribe(x => console.log('login service'));
        this.loginService.getAuthValue().subscribe(x => this.authValue = x);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        /*
         const authHeader = this.loginService.getAuthValue();
         const authReq = req.clone({setHeaders: {Authorization: authHeader}});

        return next.handle(authReq).do((event: HttpEvent<any>) => {
            return event;
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {}
                    // this.router.navigate(['/login']);
                }
            }

            );
            */
        // const authHeader = 'Basic ' + btoa('Susan' + ':' + 'mypassword');
        const authHeader = 'Basic ' + this.authValue;
        const authReq = req.clone({setHeaders: {Authorization: authHeader}});
        return next.handle(authReq);
    }



}
