import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../domain/services/Login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  user: Observable<string>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {
    this.user = this.loginService.currentUser();
    // this.loginService.login('Susan', 'mypassword');
  }

  logout() {
    this.loginService.logout();
  }
}
