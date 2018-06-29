import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { RadioGroup } from './radioGroup';
import { Tree, validValues, followTypeFilter, userFilter } from './TreeValues';
import { NewCheckboxValue } from './events';

@Injectable()
export class FilterSelectionService {

    vals: Observable<RadioGroup<string>[]>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        @Inject('tree') private tree: Tree<string>[]
    ) {
        console.log('to string: ', this.router.url);
        this.vals = this.route.url.pipe(
            tap(x => console.log(x)),
            map(segments => segments.map(segment => segment.path)),
            tap(x => console.log(x)),
            map(segments => this.convertToView(this.tree, segments)),
            tap(x => console.log(x))
        );
    }

    getRadioGroup(): Observable<RadioGroup<string>[]> {
        return this.vals;
    }

    newValue(val: NewCheckboxValue) {
        const segments = this.route.snapshot.url.map(x => x.path);

        const newSegments: string[] = Object.assign([...segments], {[val.index]: val.newValue});
        // [...segments, [val.index]: val.newValue];
        console.log(this.fixVals(this.tree, newSegments));
        this.router.navigate(
            [...this.fixVals(this.tree, newSegments)],
            {
                queryParams:  {  page: 0 },
                queryParamsHandling: 'merge',
                relativeTo: this.route.parent
            }
        );
    }

    private convertToView(tree: Tree<string>[], vals: string[]): RadioGroup<string>[] {
        console.log(validValues(tree, vals));
        console.log(tree, vals);
        if (validValues(tree, vals)) {
            return this.convertToViewIntermediate(tree, vals);
        } else {
            return [];
        }
    }

    private convertToViewIntermediate(tree: Tree<string>[], vals: string[]): RadioGroup<string>[] {
        if (tree.length !== 0) {
            return [
                {
                    vals: tree.map(x => x.val),
                    selectedItem: vals[0]
                },
                ...this.convertToViewIntermediate(tree[tree.findIndex(x => x.val === vals[0])].children, vals.slice(1, vals.length))
            ];
        } else {
            return [];
        }
    }

    private fixVals(tree: Tree<string>[], vals: string[]): string[] {
        if (tree.length === 0) { return []; }
        if (vals.length === 0) { return [tree[0].val, ...this.fixVals(tree[0].children, [])]; }
        const index = tree.map(x => x.val).findIndex(x => x === vals[0]);
        if (index !== -1) {
            return [vals[0], ...this.fixVals(tree[index].children, vals.slice(1, vals.length))];
        } else {
            return [tree[0].val, ...this.fixVals(tree[0].children, vals.slice(1, vals.length))];
        }
    }

}
