import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductGeneralPage } from './product-general.page';

describe('ProductGeneralPage', () => {
  let component: ProductGeneralPage;
  let fixture: ComponentFixture<ProductGeneralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
