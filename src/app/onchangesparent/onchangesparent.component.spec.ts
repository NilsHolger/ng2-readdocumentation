/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnchangesparentComponent } from './onchangesparent.component';

describe('OnchangesparentComponent', () => {
  let component: OnchangesparentComponent;
  let fixture: ComponentFixture<OnchangesparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnchangesparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnchangesparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
