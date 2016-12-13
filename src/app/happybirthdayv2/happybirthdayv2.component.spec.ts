/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Happybirthdayv2Component } from './happybirthdayv2.component';

describe('Happybirthdayv2Component', () => {
  let component: Happybirthdayv2Component;
  let fixture: ComponentFixture<Happybirthdayv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Happybirthdayv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Happybirthdayv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
