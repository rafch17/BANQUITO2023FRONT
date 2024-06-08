/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PanelclaveComponent } from './panelclave.component';

describe('PanelclaveComponent', () => {
  let component: PanelclaveComponent;
  let fixture: ComponentFixture<PanelclaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelclaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
