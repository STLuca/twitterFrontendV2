import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

export type PageCommand = 'NEXT' | 'PREVIOUS';

@Injectable()
export class PaginatorService {


    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    UpdateItemsPerPage(count: number) {
        this.router.navigate([], {
            queryParams:  { count: count, page: 0 },
            queryParamsHandling: 'merge',
            relativeTo: this.route
        });
    }

    updatePage(newPage: number) {
        this.router.navigate([], {
            queryParams:  { page: newPage},
            queryParamsHandling: 'merge',
            relativeTo: this.route
        });
    }

    getItemsPerPage(): Observable<number> {
        return this.route.queryParamMap.pipe(
            map(x => Number(x.get('count')) || 20)
        );
    }

    getPageNum(): Observable<number> {
        return this.route.queryParamMap.pipe(
            map(x => Number(x.get('page')) || 0)
        );
    }
}
