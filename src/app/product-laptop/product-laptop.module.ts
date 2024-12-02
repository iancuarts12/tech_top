import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductLaptopPageRoutingModule } from './product-laptop-routing.module';

import { ProductLaptopPage } from './product-laptop.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductLaptopPageRoutingModule,
    SharedModule
  ],
  declarations: [ProductLaptopPage]
})
export class ProductLaptopPageModule {}
