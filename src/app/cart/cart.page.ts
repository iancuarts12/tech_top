import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any[] = [];
  totalProductPrice: number = 0;
  shippingHandling: number = 0;
  totalBeforeTax: number = 0;
  estimatedTax: number = 0;
  shippingHandlingPerProduct: number = 200; // 200 pesos per product

  constructor() {}

  ngOnInit() {
    this.loadCartItems();
  }

  // Load cart items from localStorage and calculate totals
  loadCartItems() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.calculateCartSummary();
    }
  }

  // Calculate the cart summary
  calculateCartSummary() {
    // Calculate total product price (sum of all product prices)
    this.totalProductPrice = this.cartItems.reduce((sum, product) => {
      return sum + parseFloat(product.price.replace('₱', '').replace(',', ''));
    }, 0);

    // Calculate shipping & handling cost (200 pesos per product)
    this.shippingHandling = this.cartItems.length * this.shippingHandlingPerProduct;

    // Calculate total before tax (total product price + shipping & handling)
    this.totalBeforeTax = this.totalProductPrice + this.shippingHandling;

    // Calculate estimated tax (10% of the total before tax)
    this.estimatedTax = this.totalBeforeTax * 0.10;
  }

  // Remove item from cart
  removeFromCart(item: any) {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.calculateCartSummary(); // Recalculate the summary after removal
  }


  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
