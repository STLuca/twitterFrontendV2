import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxTreeViewComponent } from './checkbox-tree-view/checkbox-tree-view.component';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { CheckboxTreeContainerComponent } from './checkbox-tree-container/checkbox-tree-container.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    CheckboxTreeViewComponent,
    CheckboxTreeContainerComponent
  ],
  exports: [
    CheckboxTreeContainerComponent
  ]
})
export class FilterSelectionModule { }
