import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySubcategoryProfileComponent } from './category-subcategory-profile.component';

describe('CategorySubcategoryProfileComponent', () => {
  let component: CategorySubcategoryProfileComponent;
  let fixture: ComponentFixture<CategorySubcategoryProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySubcategoryProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySubcategoryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
