import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tweet } from '../../models/Tweet';
import { testTweet } from '../../models/test';
import { tweetFilter } from '../../../misc/filter-selection/TreeValues';
import { TweetsService } from '../../services/Tweets.service';
import { UserService } from '../../services/User.service';

@Component({
  selector: 'app-feed-container',
  templateUrl: './feed-container.component.html',
  styleUrls: ['./feed-container.component.css'],
  providers: [
    TweetsService,
    { provide: 'tree', useValue: tweetFilter }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedContainerComponent implements OnInit {

  tweets: Observable<Tweet[]>;

  constructor(
    private tweetsService: TweetsService
  ) {
    //  this.tweets = of(Array.from(Array(10).keys()).map(x => testTweet));
    this.tweets = this.tweetsService.getTweets();
  }

  ngOnInit() {
  }

}
