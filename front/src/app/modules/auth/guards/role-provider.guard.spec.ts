import { TestBed } from '@angular/core/testing';

import { RoleProviderGuard } from './role-user.guard';

describe('RoleProviderGuard', () => {
  let guard: RoleProviderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleProviderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
