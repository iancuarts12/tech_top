import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private router: Router) {}

  
  loadCart(products: any[]) {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      products.forEach((product) => {
        product.isInCart = parsedCart.includes(product.id);
      });
    }
  }

  
  isProductInCart(productId: number): boolean {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.some((item: any) => item.id === productId);
  }

  
  toggleCart(product: any) {
    product.isInCart = !product.isInCart;

    const savedCart = localStorage.getItem('cart');
    let cart = savedCart ? JSON.parse(savedCart) : [];

    if (product.isInCart) {
      cart.push(product);
    } else {
      cart = cart.filter((p: any) => p.id !== product.id);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }

  
  navigate(event: any) {
    const selectedValue = event.detail.value;

    if (selectedValue === 'laptops') {
      this.router.navigate(['/product-laptop'], { replaceUrl: true });
    } else if (selectedValue === 'pc') {
      this.router.navigate(['/product-pc'], { replaceUrl: true });
    } else if (selectedValue === 'consoles') {
      this.router.navigate(['/product-consoles'], { replaceUrl: true });
    } else if (selectedValue === 'peripherals') {
      this.router.navigate(['/product-peripherals'], { replaceUrl: true });
    } else if (selectedValue === 'mobile') {
      this.router.navigate(['/product-mobile'], { replaceUrl: true });
    } else if (selectedValue === 'smart') {
      this.router.navigate(['/product-smart'], { replaceUrl: true });
    } else {
      console.log('No valid product selected');
    }
  }
}
