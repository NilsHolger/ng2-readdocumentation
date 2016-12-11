/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HdieditorComponent } from './hdieditor.component';

describe('HdieditorComponent', () => {
  let component: HdieditorComponent;
  let fixture: ComponentFixture<HdieditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdieditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdieditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
