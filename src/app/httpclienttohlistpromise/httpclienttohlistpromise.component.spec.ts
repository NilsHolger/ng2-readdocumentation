/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpclienttohlistpromiseComponent } from './httpclienttohlistpromise.component';

describe('HttpclienttohlistpromiseComponent', () => {
  let component: HttpclienttohlistpromiseComponent;
  let fixture: ComponentFixture<HttpclienttohlistpromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpclienttohlistpromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclienttohlistpromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
