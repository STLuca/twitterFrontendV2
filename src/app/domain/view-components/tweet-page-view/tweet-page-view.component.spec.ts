import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPageViewComponent } from './tweet-page-view.component';

describe('TweetPageViewComponent', () => {
  let component: TweetPageViewComponent;
  let fixture: ComponentFixture<TweetPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
