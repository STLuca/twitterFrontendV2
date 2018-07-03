import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RadioGroup } from '../radioGroup';
import { FilterSelectionService } from '../filterSelection.service';
import { Tree } from '../TreeValues';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkbox-tree-container',
  templateUrl: './checkbox-tree-container.component.html',
  styleUrls: ['./checkbox-tree-container.component.css'],
  providers: [
    FilterSelectionService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxTreeContainerComponent implements OnInit {

  groups: Observable<RadioGroup<string>[]>;

  constructor(
    private service: FilterSelectionService
  ) {
    this.groups = this.service.getRadioGroup();
  }

  ngOnInit() {
  }

  newValue(x) {
    this.service.newValue(x);
  }
}
