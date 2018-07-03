import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../models/User';
import { Observable, of } from 'rxjs';
import { testUser } from '../../models/test';
import { UserService } from '../../services/User.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserContainerComponent implements OnInit {

  @Input() user: User;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
  }

  navigateToTweets(username: string) {
    this.userService.navigateToUser(username);
  }

  navigateToFollowing(username: string) {
    this.userService.navigateToUserFollowing(username);
  }

  navigateToFollowers(username: string) {
    this.userService.navigateToUserFollowers(username);
  }
}
