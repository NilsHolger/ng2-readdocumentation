/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeekabooparentComponent } from './peekabooparent.component';

describe('PeekabooparentComponent', () => {
  let component: PeekabooparentComponent;
  let fixture: ComponentFixture<PeekabooparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeekabooparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeekabooparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
