import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetiroconfirmctComponent } from './retiroconfirmct.component';

describe('RetiroconfirmctComponent', () => {
  let component: RetiroconfirmctComponent;
  let fixture: ComponentFixture<RetiroconfirmctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetiroconfirmctComponent]
    });
    fixture = TestBed.createComponent(RetiroconfirmctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
