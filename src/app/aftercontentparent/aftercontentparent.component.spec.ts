/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AftercontentparentComponent } from './aftercontentparent.component';

describe('AftercontentparentComponent', () => {
  let component: AftercontentparentComponent;
  let fixture: ComponentFixture<AftercontentparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AftercontentparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AftercontentparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
