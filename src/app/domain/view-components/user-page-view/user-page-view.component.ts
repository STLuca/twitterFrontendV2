import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { User, toggleUserFollow } from '../../models/User';
import { Tweet } from '../../models/Tweet';

export class ToggleFollowEvent {
  constructor(
    public following: boolean,
    public username: string
  ) {}
}

@Component({
  selector: 'app-user-page-view',
  templateUrl: './user-page-view.component.html',
  styleUrls: ['./user-page-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPageViewComponent implements OnInit {

  @Input() user?: User;
  @Input() tweets: Tweet[];
  @Input() users: User[];

  @Output() toggleFollow = new EventEmitter<ToggleFollowEvent>();

  constructor() { }

  ngOnInit() {
    console.log('users: ', this.users);
  }

  get followStatus(): string {
    return this.user ? this.user.following ? 'Unfollow' : 'Follow' : '';
  }

  toggleFollowMethod() {
    this.toggleFollow.emit(new ToggleFollowEvent(this.user.following, this.user.username));
  }
}
