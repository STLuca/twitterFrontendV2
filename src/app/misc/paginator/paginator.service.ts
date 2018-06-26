import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

export type PageCommand = 'NEXT' | 'PREVIOUS';

@Injectable()
export class PaginatorService {


    constructor(
        private route: ActivatedRoute,
        private router: Router) {
            this.route.queryParams.subscribe(x => console.log(x));
        }

    UpdateItemsPerPage(count: number) {
        this.router.navigate(['.'], {
            queryParams:  { count: count, page: 0 },
            queryParamsHandling: 'merge'
        });
    }

    updatePage(newPage: number) {
        console.log('updating page');
        this.router.navigate(['.'], {
            queryParams:  { page: newPage},
            queryParamsHandling: 'merge'
        });
    }

    getItemsPerPage(): Observable<number> {
        return this.route.queryParamMap.pipe(
            map(x => Number(x.get('count')) || 10)
        );
    }

    getPageNum(): Observable<number> {
        return this.route.queryParamMap.pipe(
            map(x => Number(x.get('page')) || 0)
        );
    }
}
