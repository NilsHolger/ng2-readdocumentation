/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AftercontentComponent } from './aftercontent.component';

describe('AftercontentComponent', () => {
  let component: AftercontentComponent;
  let fixture: ComponentFixture<AftercontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AftercontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AftercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
