import { Component, OnInit, Input } from '@angular/core';
import { Tweet, toggleTweetLike } from '../../models/Tweet';
import { Observable, of } from 'rxjs';
import { testTweet } from '../../models/test';
import { ToggleLikeEvent } from '../tweet/tweet-view.component';
import { TweetsService } from '../../services/Tweets.service';
import { UserService } from '../../services/User.service';

@Component({
  selector: 'app-tweet-container',
  templateUrl: './tweet-container.component.html',
  styleUrls: ['./tweet-container.component.css']
})
export class TweetContainerComponent implements OnInit {

  @Input() tweet: Tweet;

  // can create a subject to push tweet updates too so that component can be onpush change detection

  constructor(
    private tweetService: TweetsService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  toggleLike(event: ToggleLikeEvent) {
    if (event.liked === true) {
      this.tweetService.unlikeTweet(event.tweetID)
        .subscribe(x => this.tweet = toggleTweetLike(this.tweet));
    } else {
      this.tweetService.likeTweet(event.tweetID)
        .subscribe(x => this.tweet = toggleTweetLike(this.tweet));
    }
  }

  navigateToTweet(tweetID: string) {
    this.tweetService.navigateToTweet(tweetID);
  }

  navigateToUser(userID: string) {
    this.userService.navigateToUser(userID);
  }

}
