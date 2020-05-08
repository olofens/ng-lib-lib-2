import { TestBed } from '@angular/core/testing';

import { OeLibraryService } from './oe-library.service';

describe('OeLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OeLibraryService = TestBed.get(OeLibraryService);
    expect(service).toBeTruthy();
  });
});
