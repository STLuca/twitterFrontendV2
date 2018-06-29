import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../models/Tweet';

@Component({
  selector: 'app-feed-view',
  templateUrl: './feed-view.component.html',
  styleUrls: ['./feed-view.component.css']
})
export class FeedViewComponent implements OnInit {

  @Input() tweets: Tweet[];

  constructor() { }

  ngOnInit() {
  }

}
