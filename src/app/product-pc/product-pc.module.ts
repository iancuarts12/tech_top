import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPcPageRoutingModule } from './product-pc-routing.module';

import { ProductPcPage } from './product-pc.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPcPageRoutingModule,
    SharedModule
  ],
  declarations: [ProductPcPage]
})
export class ProductPcPageModule {}
