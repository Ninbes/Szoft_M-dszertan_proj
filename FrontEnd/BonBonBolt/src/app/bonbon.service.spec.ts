import { TestBed } from '@angular/core/testing';

import { BonbonService } from './bonbon.service';

describe('BonbonService', () => {
  let service: BonbonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonbonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
