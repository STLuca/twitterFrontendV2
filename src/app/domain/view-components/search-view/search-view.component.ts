import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  @Input() users: User[];
  @Input() searchName: string;
  @Output() newSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
