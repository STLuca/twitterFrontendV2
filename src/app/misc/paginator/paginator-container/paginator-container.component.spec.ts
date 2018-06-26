import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorContainerComponent } from './paginator-container.component';

describe('PaginatorContainerComponent', () => {
  let component: PaginatorContainerComponent;
  let fixture: ComponentFixture<PaginatorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
