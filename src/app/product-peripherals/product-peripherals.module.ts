import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPeripheralsPageRoutingModule } from './product-peripherals-routing.module';

import { ProductPeripheralsPage } from './product-peripherals.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPeripheralsPageRoutingModule,
    SharedModule
  ],
  declarations: [ProductPeripheralsPage]
})
export class ProductPeripheralsPageModule {}
