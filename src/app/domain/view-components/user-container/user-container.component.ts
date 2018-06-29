import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { Observable, of } from 'rxjs';
import { testUser } from '../../models/test';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  user: Observable<User>;

  constructor() {
    this.user = of(testUser);
   }

  ngOnInit() {
  }

}
