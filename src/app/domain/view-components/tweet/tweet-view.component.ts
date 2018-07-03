import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Tweet } from '../../models/Tweet';

export class ToggleLikeEvent {
  constructor(
    public liked: boolean,
    public tweetID: string
  ) {}
}


@Component({
  selector: 'app-tweet-view',
  templateUrl: './tweet-view.component.html',
  styleUrls: ['./tweet-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetViewComponent implements OnInit {

  @Input() tweet: Tweet;
  @Output() toggleLike: EventEmitter<ToggleLikeEvent> = new EventEmitter();
  @Output() navigateToTweet: EventEmitter<string> = new EventEmitter();
  @Output() navigateToUser: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleLikeMethod() {
    this.toggleLike.emit(new ToggleLikeEvent(this.tweet.liked, this.tweet.id));
  }

}


