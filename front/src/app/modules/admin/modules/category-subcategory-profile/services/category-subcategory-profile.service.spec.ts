import { TestBed } from '@angular/core/testing';

import { CategorySubcategoryProfileService } from './category-subcategory-profile.service';

describe('CategorySubcategoryProfileService', () => {
  let service: CategorySubcategoryProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySubcategoryProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
