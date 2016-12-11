/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HdiheroesService } from './hdiheroes.service';

describe('HdiheroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HdiheroesService]
    });
  });

  it('should ...', inject([HdiheroesService], (service: HdiheroesService) => {
    expect(service).toBeTruthy();
  }));
});
