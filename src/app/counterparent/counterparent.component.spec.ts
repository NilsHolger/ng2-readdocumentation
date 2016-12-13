/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CounterparentComponent } from './counterparent.component';

describe('CounterparentComponent', () => {
  let component: CounterparentComponent;
  let fixture: ComponentFixture<CounterparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
