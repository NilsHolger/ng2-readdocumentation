/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PowerboosterComponent } from './powerbooster.component';

describe('PowerboosterComponent', () => {
  let component: PowerboosterComponent;
  let fixture: ComponentFixture<PowerboosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerboosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerboosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
