import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductLaptopPage } from './product-laptop.page';

describe('ProductLaptopPage', () => {
  let component: ProductLaptopPage;
  let fixture: ComponentFixture<ProductLaptopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLaptopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
