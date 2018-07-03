import { Component, OnInit, Input } from '@angular/core';
import { Tweet, toggleTweetLike } from '../../models/Tweet';
import { Observable, of, Subject } from 'rxjs';
import { testTweet } from '../../models/test';
import { ToggleLikeEvent } from '../tweet/tweet-view.component';
import { TweetsService } from '../../services/Tweets.service';
import { UserService } from '../../services/User.service';
import { startWith, scan } from 'rxjs/operators';

@Component({
  selector: 'app-tweet-container',
  templateUrl: './tweet-container.component.html',
  styleUrls: ['./tweet-container.component.css']
})
export class TweetContainerComponent implements OnInit {

  @Input() tweet: Tweet;

  // can create a subject to push tweet updates too so that component can be onpush change detection
  tweetUpdated = new Subject();
  tweet$: Observable<Tweet>;

  constructor(
    private tweetService: TweetsService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.tweet$ = this.tweetUpdated.pipe(
      startWith(this.tweet),
      scan((tweet: Tweet, _) => toggleTweetLike(tweet))
    );
  }

  toggleLike(event: ToggleLikeEvent) {
    if (event.liked === true) {
      this.tweetService.unlikeTweet(event.tweetID)
        .subscribe(x => this.tweetUpdated.next());
    } else {
      this.tweetService.likeTweet(event.tweetID)
        .subscribe(x => this.tweetUpdated.next());
    }
  }

  navigateToTweet(tweetID: string) {
    this.tweetService.navigateToTweet(tweetID);
  }

  navigateToUser(userID: string) {
    this.userService.navigateToUser(userID);
  }

}
