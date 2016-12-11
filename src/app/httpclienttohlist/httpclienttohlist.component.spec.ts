/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpclienttohlistComponent } from './httpclienttohlist.component';

describe('HttpclienttohlistComponent', () => {
  let component: HttpclienttohlistComponent;
  let fixture: ComponentFixture<HttpclienttohlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpclienttohlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclienttohlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
