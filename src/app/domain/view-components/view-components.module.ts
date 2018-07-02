import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetViewComponent } from './tweet/tweet-view.component';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { TweetContainerComponent } from './tweet-container/tweet-container.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { FeedViewComponent } from './feed-view/feed-view.component';
import { FeedContainerComponent } from './feed-container/feed-container.component';
import { PaginatorModule } from '../../misc/paginator/paginator.module';
import { FilterSelectionModule } from '../../misc/filter-selection/filter-selection.module';
import { TweetPageViewComponent } from './tweet-page-view/tweet-page-view.component';
import { TweetPageContainerComponent } from './tweet-page-container/tweet-page-container.component';
import { UserPageContainerComponent } from './user-page-container/user-page-container.component';
import { UserPageViewComponent } from './user-page-view/user-page-view.component';
import { DomainFormsModule } from '../domain-forms/domain-forms.module';
import { TweetsService } from '../services/Tweets.service';
import { UserService } from '../services/User.service';
import { SearchContainerComponent } from './search-container/search-container.component';
import { SearchViewComponent } from './search-view/search-view.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    PaginatorModule,
    FilterSelectionModule,
    DomainFormsModule
  ],
  declarations: [
    TweetViewComponent,
    TweetContainerComponent,
    UserViewComponent,
    UserContainerComponent,
    FeedViewComponent,
    FeedContainerComponent,
    TweetPageViewComponent,
    TweetPageContainerComponent,
    UserPageContainerComponent,
    UserPageViewComponent,
    SearchContainerComponent,
    SearchViewComponent
  ],
  exports: [
    TweetContainerComponent,
    UserContainerComponent,
    FeedContainerComponent,
    SearchContainerComponent
  ],
  providers: [
    TweetsService,
    UserService
  ]
})
export class ViewComponentsModule { }
