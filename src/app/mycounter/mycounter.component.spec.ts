/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MycounterComponent } from './mycounter.component';

describe('MycounterComponent', () => {
  let component: MycounterComponent;
  let fixture: ComponentFixture<MycounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
