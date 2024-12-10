import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-laptop',
  templateUrl: './product-laptop.page.html',
  styleUrls: ['./product-laptop.page.scss'],
})
export class ProductLaptopPage implements OnInit {
  selectedProduct: string | null = null;

  products = [
    {
      id: 11,
      name: 'ACER NITRO 5',
      price: '₱49,999',
      brand: 'ACER',
      specs: ['Intel Core i5-12500H', '8GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/laptop1.jpg',
      moreInfo: 'https://www.acer.com/ph-en/laptops/nitro/nitro-5',
      isInCart: false,
    },
    {
      id: 12,
      name: 'MSI GF63',
      price: '₱45,999',
      brand: 'MSI',
      specs: ['Intel i5 11400H CPU', '16GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/laptop2.jpg',
      moreInfo: 'https://www.msi.com/Laptop/GF63-Thin-9SX-GTX/Specification',
      isInCart: false,
    },

    {
      id: 13,
      name: 'IDEAPAD GAMING 3',
      price: '₱49,999',
      brand: 'LENOVO',
      specs: ['Ryzen 6600H', '16GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/laptop3.jpg',
      moreInfo: 'https://www.lenovo.com/us/en/p/laptops/ideapad/ideapad-gaming-laptops/gaming-3-gen-6-(15-amd)/wmd00000479',
      isInCart: false,
    },

    {
      id: 14,
      name: 'ASPIRE 3',
      price: '₱31,999',
      brand: 'ACER',
      specs: ['Intel® Core™ i3-1115G4', '8GB DDR4 RAM', '512GB NVMe SSD'],
      image: 'assets/products/laptop4.jpg',
      moreInfo: 'https://www.acer.com/ph-en/laptops/aspire/aspire-3-intel',
      isInCart: false,
    },


    {
      id: 15,
      name: 'IDEAPAD SLIM 3I',
      price: '₱25,999',
      brand: 'LENOVO',
      specs: ['Intel Core i3-1215U', '8GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/laptop5.jpg',
      moreInfo: 'https://www.lenovo.com/ph/en/p/laptops/ideapad/ideapad-3/ideapad-slim-3i-gen-8-15-inch-intel/len101i0069',
      isInCart: false,
    },

    {
      id: 16,
      name: 'MSI MODERN 15',
      price: '₱34,999',
      brand: 'MSI',
      specs: ['Ryzen 7530U', '8GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/laptop6.jpg',
      moreInfo: 'https://www.msi.com/Business-Productivity/Modern-15-B12X',
      isInCart: false,
    },

    {
      id: 17,
      name: 'VIVOBOOK 16',
      price: '₱33,495',
      brand: 'ASUS',
      specs: ['12th Gen Intel Core H-series', 'Up to DDR5 32GB', 'GeForce RTX 3050 Ti'],
      image: 'assets/products/laptop7.jpg',
      moreInfo: 'https://www.msi.com/Business-Productivity/Modern-15-B12X',
      isInCart: false,
    },


    {
      id: 18,
      name: 'MATEBOOK D15 5I',
      price: '₱31,999',
      brand: 'HUAWEI',
      specs: ['10th Gen Intel Core i5-10210U', '8GB DDR4 RAM', '512GB SSD'],
      image: 'assets/products/laptop8.jpg',
      moreInfo: 'https://consumer.huawei.com/en/laptops/matebook-d-15-2022/',
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
