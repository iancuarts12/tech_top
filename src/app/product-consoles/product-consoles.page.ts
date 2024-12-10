import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-consoles',
  templateUrl: './product-consoles.page.html',
  styleUrls: ['./product-consoles.page.scss'],
})
export class ProductConsolesPage implements OnInit {
  selectedProduct: string | null = null;

  products = [
    {
      id: 31,
      name: 'XBOX SERIES S',
      price: '₱22,000',
      brand: 'MICROSOFT',
      specs: ['AMD ZEN 2', 'RDNA 2,4 TFLOPs', '512GB SSD'],
      image: 'assets/products/console1.jpg',
      moreInfo: 'https://www.xbox.com/en-US/consoles/xbox-series-s',
      isInCart: false,
    },
    {
      id: 32,
      name: 'PLAYSTATION 5',
      price: '₱33,000',
      brand: 'SONY',
      specs: ['AMD ZEN 2', 'RDNA 2,4 TFLOPs', '825GB SSD'],
      image: 'assets/products/console2.jpg',
      moreInfo: 'https://www.playstation.com/en-us/ps5/',
      isInCart: false,
    },

    {
      id: 33,
      name: 'XBOX SERIES X',
      price: '₱36,000',
      brand: 'MICROSOFT',
      specs: ['AMD ZEN 2', 'RDNA 2', '1TB SSD'],
      image: 'assets/products/console3.jpg',
      moreInfo: 'https://www.xbox.com/en-US/consoles/xbox-series-x',
      isInCart: false,
    },

    {
      id: 34,
      name: 'NINTENDO SWITCH',
      price: '₱49,999',
      brand: 'NINTENDO',
      specs: ['Custom NVIDIA Tegra', '62-inch 720p LCD', '32GB Expandable'],
      image: 'assets/products/console4.jpg',
      moreInfo: 'https://www.nintendo.com/us/switch/',
      isInCart: false,

    },


    {
      id: 35,
      name: 'NINTENDO S OLED',
      price: '₱21,000',
      brand: 'NINTENDO',
      specs: ['7-inch OLED Screen', 'Custom NVIDIA Tegra', '64GB Expandable'],
      image: 'assets/products/console5.jpg',
      moreInfo: 'https://www.nintendo.com/us/switch/oled-model/',
      isInCart: false,

    },

    {
      id: 36,
      name: 'STEAM DECK',
      price: '₱38,000',
      brand: 'VALVE',
      specs: ['AMD APU ZEN 2', '64GB eMMC', '256GB SSD'],
      image: 'assets/products/console6.jpg',
      moreInfo: 'https://store.steampowered.com/steamdeck/',
      isInCart: false,

    },

    {
      id: 37,
      name: 'PLAYSTATION VR2',
      price: '₱40,000',
      brand: 'SONY',
      specs: ['Dual OLED', '110° experience', 'integrated cameras'],
      image: 'assets/products/console7.jpg',
      moreInfo: 'https://www.playstation.com/en-ph/ps-vr2/',
      isInCart: false,
    },


    {
      id: 38,
      name: 'META QUEST 3',
      price: '₱38,000',
      brand: 'Reality Labs',
      specs: ['Dual 4K+ LCDs', 'Qualcomm Snapdragon XR2', '128/256GB'],
      image: 'assets/products/console8.jpg',
      moreInfo: 'https://www.meta.com/quest/quest-3/',
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

