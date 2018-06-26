import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { PaginatorViewComponent } from './paginator-view/paginator-view.component';
import { PaginatorContainerComponent } from './paginator-container/paginator-container.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    PaginatorViewComponent,
    PaginatorContainerComponent
  ],
  exports: [
    PaginatorContainerComponent
  ]
})
export class PaginatorModule { }
