/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpclientComponent } from './httpclient.component';

describe('HttpclientComponent', () => {
  let component: HttpclientComponent;
  let fixture: ComponentFixture<HttpclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
