/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DocheckComponent } from './docheck.component';

describe('DocheckComponent', () => {
  let component: DocheckComponent;
  let fixture: ComponentFixture<DocheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
