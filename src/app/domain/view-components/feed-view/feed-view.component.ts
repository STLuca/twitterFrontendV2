import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Tweet } from '../../models/Tweet';

@Component({
  selector: 'app-feed-view',
  templateUrl: './feed-view.component.html',
  styleUrls: ['./feed-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedViewComponent implements OnInit {

  @Input() tweets: Tweet[];

  constructor() { }

  ngOnInit() {
  }

}
