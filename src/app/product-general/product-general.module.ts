import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductGeneralPageRoutingModule } from './product-general-routing.module';

import { ProductGeneralPage } from './product-general.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductGeneralPageRoutingModule,
    SharedModule
  ],
  declarations: [ProductGeneralPage]
})
export class ProductGeneralPageModule {}
