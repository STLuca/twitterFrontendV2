import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxTreeContainerComponent } from './checkbox-tree-container.component';

describe('CheckboxTreeContainerComponent', () => {
  let component: CheckboxTreeContainerComponent;
  let fixture: ComponentFixture<CheckboxTreeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxTreeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxTreeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
