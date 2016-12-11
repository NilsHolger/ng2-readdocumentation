/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HdirestoreService } from './hdirestore.service';

describe('HdirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HdirestoreService]
    });
  });

  it('should ...', inject([HdirestoreService], (service: HdirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
