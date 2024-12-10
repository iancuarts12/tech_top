import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-mobile',
  templateUrl: './product-mobile.page.html',
  styleUrls: ['./product-mobile.page.scss'],
})
export class ProductMobilePage implements OnInit {
  selectedProduct: string | null = null;

  products = [
    {
      id: 51,
      name: 'SAMSUNG GALAXY A06',
      price: '₱5,790',
      brand: 'SAMSUNG',
      specs: ['MediaTek Helio G85', '4GB RAM', '128GB Storage'],
      image: 'assets/products/phone1.png',
      moreInfo: 'https://www.gsmarena.com/samsung_galaxy_a06-13265.php',
      isInCart: false,
    },
    {
      id: 52,
      name: 'TECNO SPARK 30C',
      price: '₱5,799',
      brand: 'TECNO',
      specs: ['MediaTek Helio G81', '8GB RAM', '256GB Storage'],
      image: 'assets/products/phone2.png',
      moreInfo: 'https://www.gsmarena.com/tecno_spark_30c-13310.php',
      isInCart: false,
    },

    {
      id: 53,
      name: 'ITEL T55',
      price: '₱5,599',
      brand: 'ITEL',
      specs: ['UNISOC T603', '8GB RAM', '256GB Storage'],
      image: 'assets/products/phone3.png',
      moreInfo: 'https://www.gsmarena.com/itel_p55_5g-12604.php',
      isInCart: false,
    },

    {
      id: 54,
      name: 'ITEL A80',
      price: '₱4,199',
      brand: 'ITEL',
      specs: ['UNISOC T603', '8GB RAM', '128GB Storage'],
      image: 'assets/products/phone4.png',
      moreInfo: 'https://www.gsmarena.com/itel_a80-13343.php',
      isInCart: false,
    },
    {
      id: 55,
      name: 'OPPO A3X',
      price: '₱5,499',
      brand: 'OPPO',
      specs: ['Snapdragon 6s 4G Gen 1', '4GB RAM', '128GB Storage'],
      image: 'assets/products/phone5.png',
      moreInfo: 'https://www.gsmarena.com/oppo_a3x-13257.php',
      isInCart: false,
    },
    {
      id: 56,
      name: 'VIVO Y30T',
      price: '₱4,399',
      brand: 'VIVO',
      specs: ['UNISOC T612 SoC', '4GB RAM', '128GB Storage'],
      image: 'assets/products/phone6.png',
      moreInfo: 'https://phoneaqua.com/vivo-y30t-6858.php',
      isInCart: false,
    },
    {
      id: 57,
      name: 'REALME NOTE 60',
      price: '₱4,999',
      brand: 'REALME',
      specs: ['UNISOC T612', '4GB RAM', '128GB Storage'],
      image: 'assets/products/phone7.png',
      moreInfo: 'https://www.gsmarena.com/realme_note_60-13283.php',
      isInCart: false,
    },
    {
      id: 58,
      name: 'TECNO SPARK GO 1',
      price: '₱3,499',
      brand: 'TECNO',
      specs: ['UNIOC T615 SoC', '4GB RAM', '128GB Storage'],
      image: 'assets/products/phone8.png',
      moreInfo: 'https://www.gsmarena.com/tecno_spark_go_1-13274.php',
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
