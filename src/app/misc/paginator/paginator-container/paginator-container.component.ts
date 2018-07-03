import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PaginatorService } from '../paginator.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paginator-container',
  templateUrl: './paginator-container.component.html',
  styleUrls: ['./paginator-container.component.css'],
  providers: [
    PaginatorService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorContainerComponent {

  pageNum: Observable<number>;
  itemsPerPage: Observable<number>;

  constructor(
    private pageService: PaginatorService
  ) {
    this.pageNum = pageService.getPageNum();
    this.itemsPerPage = pageService.getItemsPerPage();
  }

  updatePageNum(newPage: number) {
    this.pageService.updatePage(newPage);
  }

  updateCount(newCount: number) {
    this.pageService.UpdateItemsPerPage(newCount);
  }

}
