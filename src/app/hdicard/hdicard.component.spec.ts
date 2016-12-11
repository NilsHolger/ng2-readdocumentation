/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HdicardComponent } from './hdicard.component';

describe('HdicardComponent', () => {
  let component: HdicardComponent;
  let fixture: ComponentFixture<HdicardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdicardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdicardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
