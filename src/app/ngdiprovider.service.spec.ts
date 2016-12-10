/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NgdiproviderService } from './ngdiprovider.service';

describe('NgdiproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgdiproviderService]
    });
  });

  it('should ...', inject([NgdiproviderService], (service: NgdiproviderService) => {
    expect(service).toBeTruthy();
  }));
});
