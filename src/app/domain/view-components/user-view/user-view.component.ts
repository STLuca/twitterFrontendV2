import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User';

export class ToggleFollowEvent {
  constructor(
    public liked: boolean,
    public tweetID: string
  ) {}
}
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @Input() user: User;
  @Output() tweetsClicked = new EventEmitter<string>();
  @Output() followingClicked = new EventEmitter<string>();
  @Output() followersClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
