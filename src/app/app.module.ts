import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

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
import { FeedContainerComponent } from './domain/view-components/feed-container/feed-container.component';
import { TweetContainerComponent } from './domain/view-components/tweet-container/tweet-container.component';
import { UserContainerComponent } from './domain/view-components/user-container/user-container.component';
import { AuthInterceptor } from './domain/interceptors/AuthInterceptor';
import { TimeFilterInterceptor } from './domain/interceptors/TimeFilterInterceptor';
import { TweetPageContainerComponent } from './domain/view-components/tweet-page-container/tweet-page-container.component';
import { DomainFormsModule } from './domain/domain-forms/domain-forms.module';
import { LoginService } from './domain/services/Login.service';
import { LoginFormComponent } from './domain/domain-forms/login-form/login-form.component';
import { RegisterFormComponent } from './domain/domain-forms/register-form/register-form.component';
import { UserPageContainerComponent } from './domain/view-components/user-page-container/user-page-container.component';
import { SearchContainerComponent } from './domain/view-components/search-container/search-container.component';
import { DomainModule } from './domain/domain.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DomainModule,
    CustomMaterialModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterFormComponent},
      {
        path: 'feed',
        children: [
          { path: ':x/:y/:z', component: FeedContainerComponent },
          { path: ':x/:y', component: FeedContainerComponent },
          { path: '**', redirectTo: 'recent/new?count=10&page=0', pathMatch: 'prefix',  },
        ]
      },
      {
        path: 'tweet/:tweetID/replies',
        children: [
          { path: ':x/:y/:z', component: TweetPageContainerComponent },
          { path: ':x/:y', component: TweetPageContainerComponent },
          { path: '**', redirectTo: 'recent/new?count=10&page=0', pathMatch: 'prefix',  },
        ]
      },
      {
        path: 'user/search',
        children: [
          { path: '', component: SearchContainerComponent },
          { path: ':username', component: SearchContainerComponent },
          { path: '**', redirectTo: '', pathMatch: 'prefix',  },
        ]
      },
      {
        path: 'user/:userID',
        children: [
          { path: ':x/:y/:z/:a', component: UserPageContainerComponent },
          { path: ':x/:y/:z', component: UserPageContainerComponent },
          { path: '**', redirectTo: 'tweets/recent/new?count=10&page=0', pathMatch: 'prefix',  },
        ]
      },
      { path: '', component: CheckboxTreeContainerComponent}
    ])
  ],
  providers: [
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
