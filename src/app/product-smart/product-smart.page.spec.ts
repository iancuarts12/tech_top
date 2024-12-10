import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSmartPage } from './product-smart.page';

describe('ProductSmartPage', () => {
  let component: ProductSmartPage;
  let fixture: ComponentFixture<ProductSmartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSmartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
