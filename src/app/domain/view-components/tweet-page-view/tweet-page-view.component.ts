import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Tweet } from '../../models/Tweet';
import { User } from '../../models/User';

@Component({
  selector: 'app-tweet-page-view',
  templateUrl: './tweet-page-view.component.html',
  styleUrls: ['./tweet-page-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetPageViewComponent implements OnInit {

  @Input() tweet: Tweet;
  @Input() tweets: Tweet[];
  @Input() users: User[];

  constructor() { }

  ngOnInit() {
  }

  get loading(): boolean {
    return this.tweet === null;
  }
}
