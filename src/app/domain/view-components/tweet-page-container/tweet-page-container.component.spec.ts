import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPageContainerComponent } from './tweet-page-container.component';

describe('TweetPageContainerComponent', () => {
  let component: TweetPageContainerComponent;
  let fixture: ComponentFixture<TweetPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
