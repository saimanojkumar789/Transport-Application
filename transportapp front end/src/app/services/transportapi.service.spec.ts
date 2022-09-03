import { TestBed } from '@angular/core/testing';

import { TransportapiService } from './transportapi.service';

describe('TransportapiService', () => {
  let service: TransportapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
