/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroesanimationsService } from './heroesanimations.service';

describe('HeroesanimationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesanimationsService]
    });
  });

  it('should ...', inject([HeroesanimationsService], (service: HeroesanimationsService) => {
    expect(service).toBeTruthy();
  }));
});
