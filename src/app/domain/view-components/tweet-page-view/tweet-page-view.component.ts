import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Tweet } from '../../models/Tweet';

@Component({
  selector: 'app-tweet-page-view',
  templateUrl: './tweet-page-view.component.html',
  styleUrls: ['./tweet-page-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetPageViewComponent implements OnInit {

  @Input() tweet: Tweet;
  @Input() tweets: Tweet[];

  constructor() { }

  ngOnInit() {
  }

  get loading(): boolean {
    return this.tweet === null;
  }
}
