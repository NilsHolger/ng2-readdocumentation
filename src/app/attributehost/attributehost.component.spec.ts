/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AttributehostComponent } from './attributehost.component';

describe('AttributehostComponent', () => {
  let component: AttributehostComponent;
  let fixture: ComponentFixture<AttributehostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributehostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributehostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
