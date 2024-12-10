import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductSmartPageRoutingModule } from './product-smart-routing.module';

import { ProductSmartPage } from './product-smart.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductSmartPageRoutingModule,
    SharedModule
  ],
  declarations: [ProductSmartPage]
})
export class ProductSmartPageModule {}
