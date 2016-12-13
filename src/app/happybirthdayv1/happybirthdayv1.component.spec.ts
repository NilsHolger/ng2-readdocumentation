/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Happybirthdayv1Component } from './happybirthdayv1.component';

describe('Happybirthdayv1Component', () => {
  let component: Happybirthdayv1Component;
  let fixture: ComponentFixture<Happybirthdayv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Happybirthdayv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Happybirthdayv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
