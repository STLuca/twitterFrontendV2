import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tweet } from '../../models/Tweet';
import { testTweet } from '../../models/test';
import { tweetFilter } from '../../../misc/filter-selection/TreeValues';
import { TweetsService } from '../../services/Tweets.service';

@Component({
  selector: 'app-tweet-page-container',
  templateUrl: './tweet-page-container.component.html',
  styleUrls: ['./tweet-page-container.component.css'],
  providers: [
    TweetsService,
    { provide: 'tree', useValue: tweetFilter }
  ]
})
export class TweetPageContainerComponent implements OnInit {

  tweet: Observable<Tweet>;
  tweets: Observable<Tweet[]>;

  constructor(
    private tweetService: TweetsService
  ) {
    this.tweet = this.tweetService.getTweet();
    this.tweets = this.tweetService.getTweets();
  }

  ngOnInit() {
  }

}
