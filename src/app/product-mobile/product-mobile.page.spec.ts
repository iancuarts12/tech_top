import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductMobilePage } from './product-mobile.page';

describe('ProductMobilePage', () => {
  let component: ProductMobilePage;
  let fixture: ComponentFixture<ProductMobilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
