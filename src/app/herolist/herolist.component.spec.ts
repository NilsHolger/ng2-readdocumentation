/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HerolistComponent } from './herolist.component';

describe('HerolistComponent', () => {
  let component: HerolistComponent;
  let fixture: ComponentFixture<HerolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
