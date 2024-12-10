import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';  

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = []; 
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]); 
  cartItems$ = this.cartSubject.asObservable();  

  constructor() {
    const savedCart = localStorage.getItem('cart');
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
    this.cartSubject.next(this.cartItems);  
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.updateLocalStorage();
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(itemName: string) {
    this.cartItems = this.cartItems.filter(item => item.name !== itemName);
    this.updateLocalStorage();
    this.cartSubject.next(this.cartItems); 
  }


  getCartItems(): any[] {
    return this.cartItems;
  }


  clearCart() {
    this.cartItems = [];
    localStorage.removeItem('cart');
    this.cartSubject.next(this.cartItems);  
  }


  private updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
