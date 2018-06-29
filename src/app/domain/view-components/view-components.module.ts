import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetViewComponent } from './tweet/tweet-view.component';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';
import { TweetContainerComponent } from './tweet-container/tweet-container.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { FeedViewComponent } from './feed-view/feed-view.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    TweetViewComponent,
    TweetContainerComponent,
    UserViewComponent,
    UserContainerComponent,
    FeedViewComponent
  ],
  exports: [
    TweetContainerComponent,
    UserContainerComponent
  ],
})
export class ViewComponentsModule { }
