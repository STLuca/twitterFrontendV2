import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { PaginatorModule } from './misc/paginator/paginator.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FilterSelectionModule } from './misc/filter-selection/filter-selection.module';
import { CheckboxTreeContainerComponent } from './misc/filter-selection/checkbox-tree-container/checkbox-tree-container.component';
import { EmptyComponent } from './empty/empty.component';
import { followTypeFilter, tweetFilter } from './misc/filter-selection/TreeValues';
import { ViewComponentsModule } from './domain/view-components/view-components.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    PaginatorModule,
    FilterSelectionModule,
    CustomMaterialModule,
    ViewComponentsModule,
    RouterModule.forRoot([
      {
        path: 'feed',
        children: [
          { path: ':x/:y/:z', component: CheckboxTreeContainerComponent },
          { path: ':x/:y', component: CheckboxTreeContainerComponent },
          { path: '**', redirectTo: 'recent/new', pathMatch: 'prefix',  },
          { path: '**', component: NavigationComponent }
        ]
      },
      // { path: '', component: NavigationComponent, pathMatch: 'prefix'},
      { path: '', component: CheckboxTreeContainerComponent}
    ])
  ],
  providers: [
    { provide: 'tree', useValue: tweetFilter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
