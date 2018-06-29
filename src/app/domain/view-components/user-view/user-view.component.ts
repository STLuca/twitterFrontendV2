import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
