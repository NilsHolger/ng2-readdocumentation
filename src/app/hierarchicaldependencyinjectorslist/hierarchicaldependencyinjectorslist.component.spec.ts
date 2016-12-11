/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HierarchicaldependencyinjectorslistComponent } from './hierarchicaldependencyinjectorslist.component';

describe('HierarchicaldependencyinjectorslistComponent', () => {
  let component: HierarchicaldependencyinjectorslistComponent;
  let fixture: ComponentFixture<HierarchicaldependencyinjectorslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchicaldependencyinjectorslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchicaldependencyinjectorslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
