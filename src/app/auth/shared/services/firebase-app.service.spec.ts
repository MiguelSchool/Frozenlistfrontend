import { TestBed } from '@angular/core/testing';

import { FirebaseAppService } from './firebase-app.service';

describe('FirebaseAppService', () => {
  let service: FirebaseAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
