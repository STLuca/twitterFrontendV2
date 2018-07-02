import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator-view',
  templateUrl: './paginator-view.component.html',
  styleUrls: ['./paginator-view.component.css']
})
export class PaginatorViewComponent implements OnInit {

  itemsPerPageOptions: number[] = [5, 10, 20, 40];

  @Input() itemsPerPage: number;
  @Input() pageNum: number;

  @Output() newItemsPerPage = new EventEmitter<number>();
  @Output() nextPage = new EventEmitter<number>();
  @Output() previousPage = new EventEmitter<number>();

  constructor() {
   }

  ngOnInit() {
  }

  get minItemNumber(): number {
    return (this.itemsPerPage * this.pageNum) + 1;
  }

  get maxItemNumber(): number {
    return this.itemsPerPage * (this.pageNum + 1);
  }

  get isPage0(): boolean {
    return this.pageNum === 0;
  }
}

