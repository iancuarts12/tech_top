import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-smart',
  templateUrl: './product-smart.page.html',
  styleUrls: ['./product-smart.page.scss'],
})
export class ProductSmartPage implements OnInit {
  selectedProduct: string | null = null;

  products = [
    {
      id: 61,
      name: 'AMAZON ECHO BOT',
      price: '₱3,500',
      brand: 'AMAZON',
      specs: ['Alexa voice assistant', 'Clear audio', 'Temperature & motion detection'],
      image: 'assets/products/smart1.jpg',
      moreInfo: 'https://www.amazon.com/Echo-4th-Gen/dp/B07XKF5RM3',
      isInCart: false,
    },
    {
      id: 62,
      name: 'WYZE CAM V3',
      price: '₱4,000',
      brand: 'WYZE',
      specs: ['Full HD 1080p', 'IP65 weatherproofing', 'Two-way audio'],
      image: 'assets/products/smart2.jpg',
      moreInfo: 'https://www.wyze.com/products/wyze-cam-v3',
      isInCart: false,
    },

    {
      id: 63,
      name: 'TAPO L530E',
      price: '₱1,000',
      brand: 'TP-LINK',
      specs: ['Dimmable and color-changing LED', '8.7W consumption', 'Scheduling & scene creation'],
      image: 'assets/products/smart3.jpg',
      moreInfo: 'https://www.tp-link.com/ph/home-networking/smart-bulb/tapo-l530e/',
      isInCart: false,
    },

    {
      id: 64,
      name: 'SMART BAND 2',
      price: '₱2,500',
      brand: 'REDMI',
      specs: ['1.4-inch touchscreen', '50m Water-resistant', 'Up to 12-day battery life'],
      image: 'assets/products/smart4.jpg',
      moreInfo: 'https://www.mi.com/global/product/redmi-smart-band-2/',
      isInCart: false,
    },
    {
      id: 65,
      name: 'CHROMECAST',
      price: '₱3,500',
      brand: 'GOOGLE',
      specs: ['HD Streaming', 'Voice control', 'Google Home Integration'],
      image: 'assets/products/smart5.jpg',
      moreInfo: 'https://store.google.com/us/product/chromecast_google_tv?hl=en-US',
      isInCart: false,
    },
    {
      id: 66,
      name: 'WI-FI SMART PLUG',
      price: '₱1,800',
      brand: 'D-LINK',
      specs: ['mydlink App Support', 'Voice Control', 'Fits multiple plugs'],
      image: 'assets/products/smart6.jpg',
      moreInfo: 'https://www.dlink.com.ph/product/my-dlink-wifi-smart-plug/',
      isInCart: false,
    },
    {
      id: 67,
      name: 'EUFY LUMI',
      price: '₱800',
      brand: 'ANKER',
      specs: ['Motion-activated LED light', 'Battery-operated', 'Energy-efficient'],
      image: 'assets/products/smart7.jpg',
      moreInfo: 'https://www.myanker.co.nz/eufy-lumi-stick-on-night-light.html',
      isInCart: false,
    },
    {
      id: 48,
      name: 'BUDS AIR 3 NEO',
      price: '₱1,700',
      brand: 'REALME',
      specs: ['Bluetooth 5.2', 'AI noise cancellation', 'IPX5 water resistance'],
      image: 'assets/products/smart8.jpg',
      moreInfo: 'https://www.realme.com/ph/realme-buds-air-neo',
      isInCart: false,
    }
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
