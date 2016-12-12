/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LchloggerService } from './lchlogger.service';

describe('LchloggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LchloggerService]
    });
  });

  it('should ...', inject([LchloggerService], (service: LchloggerService) => {
    expect(service).toBeTruthy();
  }));
});
