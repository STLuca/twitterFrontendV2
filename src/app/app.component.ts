import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  newPage() {
    console.log('hi');
  }

  log(x) {
    console.log(x);
  }
}
