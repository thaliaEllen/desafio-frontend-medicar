import { TestBed } from '@angular/core/testing';

import { AuthGuardsInactiveService } from './auth-guards-inactive.service';

describe('AuthGuardsInactiveService', () => {
  let service: AuthGuardsInactiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardsInactiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
