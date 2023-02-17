import { TestBed } from '@angular/core/testing';

import { WorkPageService } from './work-page.service';

describe('WorkPageService', () => {
  let service: WorkPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
