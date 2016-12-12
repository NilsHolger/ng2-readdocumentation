/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeekabooComponent } from './peekaboo.component';

describe('PeekabooComponent', () => {
  let component: PeekabooComponent;
  let fixture: ComponentFixture<PeekabooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeekabooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeekabooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
