import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductConsolesPage } from './product-consoles.page';

describe('ProductConsolesPage', () => {
  let component: ProductConsolesPage;
  let fixture: ComponentFixture<ProductConsolesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductConsolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
