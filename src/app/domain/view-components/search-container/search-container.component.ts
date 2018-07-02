import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/User';
import { testUser } from '../../models/test';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/User.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css'],
  providers: [
    UserService
  ]
})
export class SearchContainerComponent implements OnInit {

  users: Observable<User[]>;
  searchName: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.users = this.userService.getSearchedUsers();
    this.searchName = this.userService.getSearchedUsername();
    // this.users = of([testUser, testUser]);
  }

  ngOnInit() {
  }

  newSearch(username: string) {
    this.userService.searchForUser(username);
  }
}
