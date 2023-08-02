import { TestBed } from '@angular/core/testing';

import { ProjectDataMemoryStoreService } from './project-data-memory-store.service';

describe('ProjectDataMemoryStoreService', () => {
  let service: ProjectDataMemoryStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectDataMemoryStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
