/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrisiscenterlistComponent } from './crisiscenterlist.component';

describe('CrisiscenterlistComponent', () => {
  let component: CrisiscenterlistComponent;
  let fixture: ComponentFixture<CrisiscenterlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisiscenterlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisiscenterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
