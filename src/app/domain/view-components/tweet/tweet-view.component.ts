import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '../../models/Tweet';

@Component({
  selector: 'app-tweet-view',
  templateUrl: './tweet-view.component.html',
  styleUrls: ['./tweet-view.component.css']
})
export class TweetViewComponent implements OnInit {

  @Input() tweet: Tweet;

  constructor() { }

  ngOnInit() {
  }

}
