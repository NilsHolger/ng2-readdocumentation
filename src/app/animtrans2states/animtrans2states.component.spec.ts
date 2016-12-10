/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Animtrans2statesComponent } from './animtrans2states.component';

describe('Animtrans2statesComponent', () => {
  let component: Animtrans2statesComponent;
  let fixture: ComponentFixture<Animtrans2statesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animtrans2statesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animtrans2statesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
