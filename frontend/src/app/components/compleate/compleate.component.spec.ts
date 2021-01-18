import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleateComponent } from './compleate.component';

describe('CompleateComponent', () => {
  let component: CompleateComponent;
  let fixture: ComponentFixture<CompleateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
