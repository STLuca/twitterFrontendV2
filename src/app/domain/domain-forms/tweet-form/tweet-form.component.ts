
import { Component, OnInit, Input } from '@angular/core';
import { TweetsService } from '../../services/Tweets.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css'],
  providers: [TweetsService]
})
export class TweetFormComponent implements OnInit {

  @Input()
  private replyToID = 0;

  messageLength: Observable<number>;
  tweetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tweetService: TweetsService
  ) { }

  ngOnInit() {
    this.createForm();
    this.messageLength = this.tweetForm.valueChanges.pipe(
      map(x => x['message'] ? x.message : []),
      map(x => x.length ? x['length'] : 0),
      startWith(0)
    );
  }

  createForm() {
    this.tweetForm = this.fb.group({
      message: ['', Validators.compose([Validators.required, Validators.maxLength(160)])]
    });
  }

  createTweet() {
    if (this.tweetForm.valid) {
      // this.tweetService.postTweet(this.tweetForm.get('message').value, this.replyToID);
      this.tweetForm.get('message').reset();
    }

  }

}
