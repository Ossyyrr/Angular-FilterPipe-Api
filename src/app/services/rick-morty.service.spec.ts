import { TestBed } from '@angular/core/testing';

import { RickMortyService } from './rick-morty.service';

describe('RickMortyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RickMortyService = TestBed.get(RickMortyService);
    expect(service).toBeTruthy();
  });
});
