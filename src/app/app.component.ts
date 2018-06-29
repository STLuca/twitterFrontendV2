import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
) {
    this.route.url.subscribe(x => console.log('new activated route url: ', x));

    // this.route.queryParamMap.subscribe(x => console.log('query params: ', x));
    // this.route.paramMap.subscribe(x => console.log('route: ', x));

    // this.router.navigate(['/feed']);
}

  newPage() {
    console.log('hi');
  }

  log(x) {
    console.log(x);
  }

  printRoute() {
    console.log('url: ', this.router.url);
    console.log('activated route: ', this.route.snapshot);
    // console.log(this.router.parseUrl(this.router.url).root.children.primary.segments.map(x => x.path));
    // console.log(this.route.snapshot.url.map(x => x.path));
    // this.route.url.subscribe(x => console.log('activated route url: ', x));
  }
}

