import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { switchMap, filter, tap, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    private authValue = new Subject<string>();
    private loggedInAs = new Subject<string>();

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.authValue.pipe(
            filter(x => x !== ''),
            debounceTime(500),
            switchMap(auth => this.http.get<string>('http://localhost:8080/user/login')),
            tap(console.log)
        ).subscribe( name => this.loggedInAs.next(name),
                            err => this.loggedInAs.next(''));
        this.loggedInAs.pipe(
            // filter(user => user !== '')
        ).subscribe(x => this.router.navigate(['feed']));
    }

    login(username: string, password: string) {
        this.authValue.next(btoa(username + ':' + password));
    }

    logout() {
        this.authValue.next('');
        this.loggedInAs.next('');
        this.router.navigate(['login']);
    }

    currentUser(): Observable<string> {
        return this.loggedInAs.asObservable();
    }

    getAuthValue(): Observable<string> {
        return this.authValue;
    }
}
