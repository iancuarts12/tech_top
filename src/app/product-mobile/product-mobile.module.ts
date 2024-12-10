import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductMobilePageRoutingModule } from './product-mobile-routing.module';

import { ProductMobilePage } from './product-mobile.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductMobilePageRoutingModule,
    SharedModule
  ],
  declarations: [ProductMobilePage]
})
export class ProductMobilePageModule {}
