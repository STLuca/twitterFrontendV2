import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPageContainerComponent } from './user-page-container.component';

describe('UserPageContainerComponent', () => {
  let component: UserPageContainerComponent;
  let fixture: ComponentFixture<UserPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
