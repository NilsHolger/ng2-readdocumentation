/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IwantandroidComponent } from './iwantandroid.component';

describe('IwantandroidComponent', () => {
  let component: IwantandroidComponent;
  let fixture: ComponentFixture<IwantandroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IwantandroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IwantandroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
