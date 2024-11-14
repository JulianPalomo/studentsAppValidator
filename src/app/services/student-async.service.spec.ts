import { TestBed } from '@angular/core/testing';

import { StudentAsyncService } from './student-async.service';

describe('StudentAsyncService', () => {
  let service: StudentAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
