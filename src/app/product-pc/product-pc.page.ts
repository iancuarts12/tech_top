import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-pc',
  templateUrl: './product-pc.page.html',
  styleUrls: ['./product-pc.page.scss'],
})
export class ProductPcPage implements OnInit {
  selectedProduct: string | null = null;

  products = [
    {
      id: 21,
      name: 'CYBORG RYZEN 5',
      price: '₱60,599',
      brand: 'AMD',
      specs: ['Ryzen 5 5600G', '16GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/pc1.jpg',
      moreInfo: '',
      isInCart: false,
    },

    {
      id: 22,
      name: 'ICE WHITE RYZEN 6',
      price: '₱55,999',
      brand: 'AMD',
      specs: ['Ryzen 5 5600G', '16GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/pc2.jpg',
      moreInfo: '',
      isInCart: false,
    },

    {
      id: 23,
      name: 'NZXT RYZEN 5',
      price: '₱55,999',
      brand: 'AMD',
      specs: ['Ryzen 5 5600X', '16GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/pc3.jpg',
      moreInfo: '',
      isInCart: false,
    },

    {
      id: 24,
      name: 'ACER WHITE BOX',
      price: '₱69,899',
      brand: 'ACER',
      specs: ['Ryzen 7 5700G', '16GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/pc4.jpg',
      moreInfo: '',
      isInCart: false,
    },

    {
      id: 25,
      name: 'ACER HYTE Y70',
      price: '₱119,999',
      brand: 'HEXA',
      specs: ['GeForce RTX 4070 Ti', '16GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/pc5.jpg',
      moreInfo: '',
      isInCart: false,
    },

    {
      id: 26,
      name: 'ALPHA AURUS ASUS',
      price: '₱89,599',
      brand: 'TUF',
      specs: ['Ryzen 7 5700X', '16GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/pc6.jpg',
      moreInfo: '',
      isInCart: false,
    },

    {
      id: 27,
      name: 'CRYSTAL CORRUSTION',
      price: '₱49,999',
      brand: 'CORSAIR',
      specs: ['Ryzen 5 5600G', '16GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/pc7.jpg',
      moreInfo: '',
      isInCart: false,
    },

    {
      id: 28,
      name: 'ACER TUF PURPLE 6',
      price: '₱49,999',
      brand: 'ACER',
      specs: ['Ryzen 7 5700G | MSI RTX 1080 Ti', '16GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/pc8.jpg',
      moreInfo: '',
      isInCart: false,
    },
  ];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.loadCart(this.products);
  }

  btnClicked(product: any) {
    this.productService.toggleCart(product);
  }

  navigate(event: any) {
    this.productService.navigate(event);
  }

  isProductInCart(productId: number): boolean {
    return this.productService.isProductInCart(productId);
  }
}
