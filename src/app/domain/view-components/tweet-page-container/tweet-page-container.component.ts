import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tweet } from '../../models/Tweet';
import { testTweet } from '../../models/test';
import { tweetFilter } from '../../../misc/filter-selection/TreeValues';
import { TweetsService } from '../../services/Tweets.service';
import { UserService } from '../../services/User.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-tweet-page-container',
  templateUrl: './tweet-page-container.component.html',
  styleUrls: ['./tweet-page-container.component.css'],
  providers: [
    TweetsService,
    UserService,
    { provide: 'tree', useValue: tweetFilter }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetPageContainerComponent implements OnInit {

  tweet: Observable<Tweet>;
  tweets: Observable<Tweet[]>;
  users: Observable<User[]>;

  constructor(
    private tweetService: TweetsService,
    private userService: UserService
  ) {
    this.tweet = this.tweetService.getTweet();
    this.tweets = this.tweetService.getTweets();
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

}
