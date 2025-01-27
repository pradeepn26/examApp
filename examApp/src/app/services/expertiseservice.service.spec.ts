import { TestBed } from '@angular/core/testing';

import { ExpertiseserviceService } from './expertiseservice.service';

describe('ExpertiseserviceService', () => {
  let service: ExpertiseserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertiseserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
