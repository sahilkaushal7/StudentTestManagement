import { TestBed, inject } from '@angular/core/testing';

import { ChoosesubjectService } from './choosesubject.service';

describe('ChoosesubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChoosesubjectService]
    });
  });

  it('should be created', inject([ChoosesubjectService], (service: ChoosesubjectService) => {
    expect(service).toBeTruthy();
  }));
});
