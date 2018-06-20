import { TestBed, inject } from '@angular/core/testing';

import { MarksService } from './marks.service';

describe('MarksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarksService]
    });
  });

  it('should be created', inject([MarksService], (service: MarksService) => {
    expect(service).toBeTruthy();
  }));
});
