import { TestBed } from '@angular/core/testing';

import { ClaudeServiceService } from './claude-service.service';

describe('ClaudeServiceService', () => {
  let service: ClaudeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaudeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
