import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPeripheralsPage } from './product-peripherals.page';

describe('ProductPeripheralsPage', () => {
  let component: ProductPeripheralsPage;
  let fixture: ComponentFixture<ProductPeripheralsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPeripheralsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
