import { Component, OnInit } from '@angular/core';
import { userFilter } from '../../../misc/filter-selection/TreeValues';
import { Tweet } from '../../models/Tweet';
import { User } from '../../models/User';
import { Observable, Subject } from 'rxjs';
import { TweetsService } from '../../services/Tweets.service';
import { UserService } from '../../services/User.service';
import { ToggleFollowEvent } from '../user-page-view/user-page-view.component';
import { scan, startWith, switchMap, tap } from 'rxjs/operators';
import { testUser } from '../../models/test';

@Component({
  selector: 'app-user-page-container',
  templateUrl: './user-page-container.component.html',
  styleUrls: ['./user-page-container.component.css'],
  providers: [
    TweetsService,
    UserService,
    { provide: 'tree', useValue: userFilter }
  ]
})
export class UserPageContainerComponent implements OnInit {

  user: Observable<User>;
  tweets: Observable<Tweet[]>;
  users: Observable<User[]>;

  userUpdated = new Subject();

  constructor(
    private tweetService: TweetsService,
    private userService: UserService
  ) {
    this.user = this.userUpdated.asObservable().pipe(
      startWith(''),
      switchMap(_ => this.userService.getUser()),
    );
    // this.user = this.userService.getUser();
    this.tweets = this.tweetService.getTweets();
    this.users = this.userService.getUsers();
  }

  ngOnInit() {
  }

  toggleFollow(event: ToggleFollowEvent) {
    if (event.following) {
      this.userService.unfollowUser(event.username).subscribe(_ => this.userUpdated.next());
    } else {
      this.userService.followUser(event.username).subscribe(_ => this.userUpdated.next());
    }
  }
}
