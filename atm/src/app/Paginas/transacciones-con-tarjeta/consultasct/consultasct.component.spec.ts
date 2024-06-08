import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasctComponent } from './consultasct.component';

describe('ConsultasctComponent', () => {
  let component: ConsultasctComponent;
  let fixture: ComponentFixture<ConsultasctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultasctComponent]
    });
    fixture = TestBed.createComponent(ConsultasctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
