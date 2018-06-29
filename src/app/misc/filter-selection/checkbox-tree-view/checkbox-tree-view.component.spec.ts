import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTreeViewComponent } from './checkbox-tree-view.component';

describe('CheckboxTreeViewComponent', () => {
  let component: CheckboxTreeViewComponent;
  let fixture: ComponentFixture<CheckboxTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
