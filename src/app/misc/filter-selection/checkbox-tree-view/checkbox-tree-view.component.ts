import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RadioGroup } from '../radioGroup';
import { NewCheckboxValue } from '../events';

@Component({
  selector: 'app-checkbox-tree-view',
  templateUrl: './checkbox-tree-view.component.html',
  styleUrls: ['./checkbox-tree-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxTreeViewComponent {

  @Input() groups: RadioGroup<string>[];
  @Output() newValue = new EventEmitter<NewCheckboxValue>();

  constructor() { }

  emitNewValue(value: string, index: number) {
    this.newValue.emit(new NewCheckboxValue(value, index));
  }

}
