import { Component, OnInit } from '@angular/core';
import { Tweet } from '../../models/Tweet';
import { Observable, of } from 'rxjs';
import { testTweet } from '../../models/test';

@Component({
  selector: 'app-tweet-container',
  templateUrl: './tweet-container.component.html',
  styleUrls: ['./tweet-container.component.css']
})
export class TweetContainerComponent implements OnInit {

  tweet: Observable<Tweet>;

  constructor() {
    this.tweet = of(testTweet);
  }

  ngOnInit() {
  }

}
