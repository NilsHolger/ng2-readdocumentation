/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NgdiService } from './ngdi.service';

describe('NgdiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgdiService]
    });
  });

  it('should ...', inject([NgdiService], (service: NgdiService) => {
    expect(service).toBeTruthy();
  }));
});
