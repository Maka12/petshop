import { TestBed } from '@angular/core/testing';

import { AuthentecateService } from './authentecate.service';

describe('AuthentecateService', () => {
  let service: AuthentecateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentecateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
