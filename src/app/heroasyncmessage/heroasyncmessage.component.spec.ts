/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroasyncmessageComponent } from './heroasyncmessage.component';

describe('HeroasyncmessageComponent', () => {
  let component: HeroasyncmessageComponent;
  let fixture: ComponentFixture<HeroasyncmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroasyncmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroasyncmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
