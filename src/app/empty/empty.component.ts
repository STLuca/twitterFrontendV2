import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    console.log(route.snapshot.url);
  }

  ngOnInit() {
  }

}
