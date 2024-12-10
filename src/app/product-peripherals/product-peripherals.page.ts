import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-peripherals',
  templateUrl: './product-peripherals.page.html',
  styleUrls: ['./product-peripherals.page.scss'],
})
export class ProductPeripheralsPage implements OnInit {
  selectedProduct: string | null = null;

  products = [
    {
      id: 41,
      name: 'RAKK TALA 81',
      price: '₱1,995',
      brand: 'RAKK | KEYBOARD',
      specs: ['325x138x20mm Dimension', '850g', 'BT, 2.4, Wired'],
      image: 'assets/products/peri1.jpg',
      moreInfo: 'https://easypc.com.ph/products/rakk-tala-81-keys-white-trimode-rgb-universal-hotswap-gasket-mount-brown-switch',
      isInCart: false,
    },
    {
      id: 42,
      name: 'AULA F75 ',
      price: '₱2,895',
      brand: 'AULA | KEYBOARD',
      specs: ['BT, 2.4, Wired', 'Gasket Structure', 'Hot-swappable keys'],
      image: 'assets/products/peri2.jpg',
      moreInfo: 'https://www.aulastar.com/gaming-keyboard/176.html',
      isInCart: false,
    },

    {
      id: 43,
      name: 'DEATHADDER ESSENTIAL',
      price: '₱950',
      brand: 'RAZER | MOUSE',
      specs: ['127x73x43mm Dimensions', '96g', '6400dpi'],
      image: 'assets/products/peri3.jpg',
      moreInfo: 'https://www.razer.com/ap-en/gaming-mice/razer-deathadder-essential',
      isInCart: false,
    },

    {
      id: 44,
      name: 'M711 COBRA',
      price: '₱830',
      brand: 'REDRAGON',
      specs: ['5.0x2.6x1.6in', '5 DPI Levels ', 'up to 1000Hz rate'],
      image: 'assets/products/peri4.jpg',
      moreInfo: 'https://www.redragonzone.com/products/redragon-m711-gaming-mouse',
      isInCart: false,
    },
    {
      id: 45,
      name: 'CLOUD STINGER',
      price: '₱1,850',
      brand: 'HYPERX | HEADSET',
      specs: ['50mm with neodymium magnets', 'Over ear, circumoral', '10Hz-28kHz Response'],
      image: 'assets/products/peri5.jpg',
      moreInfo: 'https://row.hyperx.com/products/hyperx-cloud-stinger-2-wired-gaming-headset?variant=41062768771277',
      isInCart: false,
    },
    {
      id: 46,
      name: 'SOUNDCORE H301',
      price: '₱1,245',
      brand: 'ANKER | HEADSEY',
      specs: ['20Hz-20kHz Frequency', 'Rotating Ear Cups', '22 EQ Preset'],
      image: 'assets/products/peri6.jpg',
      moreInfo: 'https://support.soundcore.com/s/article/Technical-specifications-of-soundcore-H30i',
      isInCart: false,
    },
    {
      id: 47,
      name: 'LOGICTECH Z120',
      price: '₱580',
      brand: 'LOGICTECH | SPEAKER',
      specs: ['3.5mm Headphone Jack', '3.5mm input ', 'Power and volume controls on right speaker'],
      image: 'assets/products/peri7.jpg',
      moreInfo: 'https://www.logitech.com/en-ph/products/speakers/z120-compact-usb-speakers.980-000514.html',
      isInCart: false,
    },
    {
      id: 48,
      name: 'EDIFIER MG300',
      price: '₱1,500',
      brand: 'EDIFIER | SPEAKER',
      specs: ['0.9kg', '2.5W+2.5W Output Power', '80Hz-20kHz Response'],
      image: 'assets/products/peri8.jpg',
      moreInfo: 'https://www.edifier.com/global/p/computer-speakers/mg300',
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
