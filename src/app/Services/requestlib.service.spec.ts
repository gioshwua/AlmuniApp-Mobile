import { TestBed } from '@angular/core/testing';

import { RequestlibService } from './requestlib.service';

describe('RequestlibService', () => {
  let service: RequestlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
