import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdvansedCategoryComponent } from './business-advansed-category.component';

describe('BusinessAdvansedCategoryComponent', () => {
  let component: BusinessAdvansedCategoryComponent;
  let fixture: ComponentFixture<BusinessAdvansedCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAdvansedCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAdvansedCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
