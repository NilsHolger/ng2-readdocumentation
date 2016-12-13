/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MakechildComponent } from './makechild.component';

describe('MakechildComponent', () => {
  let component: MakechildComponent;
  let fixture: ComponentFixture<MakechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
