import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoconfirmComponent } from './depositoconfirm.component';

describe('DepositoconfirmComponent', () => {
  let component: DepositoconfirmComponent;
  let fixture: ComponentFixture<DepositoconfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositoconfirmComponent]
    });
    fixture = TestBed.createComponent(DepositoconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
