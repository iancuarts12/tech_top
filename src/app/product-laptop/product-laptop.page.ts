import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-laptop',
  templateUrl: './product-laptop.page.html',
  styleUrls: ['./product-laptop.page.scss'],
})
export class ProductLaptopPage implements OnInit {

  selectedProduct: string | null = null;

  constructor(private router: Router) {}
  navigate(event: any) {
    const selectedValue = event.detail.value;

    if (selectedValue === 'laptops') {
      this.router.navigate(['/products-laptop'], { replaceUrl: true });
    } else if (selectedValue === 'pc') {
      this.router.navigate(['/products-pc'], { replaceUrl: true });
    } else if (selectedValue === 'consoles') {
      this.router.navigate(['/products-consoles']);
    } else if (selectedValue === 'peripherals') {
      this.router.navigate(['/products-peripherals']);
    } else if (selectedValue === 'mobile') {
      this.router.navigate(['/products-mobile']);
    } else if (selectedValue === 'smart') {
      this.router.navigate(['/products-smart']);
    } else {
      console.log('No valid product selected');
    }

    setTimeout(() => {
      this.selectedProduct = null;
    }, 100);
  }


  ngOnInit() {
    // Ensure the select is cleared when the component loads
    this.selectedProduct = null;
  }

}
