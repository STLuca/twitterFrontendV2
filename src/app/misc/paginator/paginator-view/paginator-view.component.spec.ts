import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorViewComponent } from './paginator-view.component';

describe('PaginatorViewComponent', () => {
  let component: PaginatorViewComponent;
  let fixture: ComponentFixture<PaginatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
