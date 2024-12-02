import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPcPage } from './product-pc.page';

describe('ProductPcPage', () => {
  let component: ProductPcPage;
  let fixture: ComponentFixture<ProductPcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
