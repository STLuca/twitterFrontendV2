import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TimeFilterInterceptor implements HttpInterceptor {

    // : Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = req.url;
        const newUrl = findAndReplace(url, metaData);
        const newReq = req.clone({url: newUrl});
        return next.handle(newReq);
    }

}

export function findAndReplace(val: string, data: {find: string, replace: string}[] ) {
    data.forEach(x => val = val.includes(x.find) ? val.replace(x.find, '') + '&t=' + x.replace : val);
    return val;
}

export const metaData: {find: string, replace: string}[] = [
    {find: '/day', replace: '1'},
    {find: '/week', replace: '7'},
    {find: '/month', replace: '31'},
    {find: '/year', replace: '365'},
];
