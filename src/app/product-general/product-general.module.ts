import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductGeneralPageRoutingModule } from './product-general-routing.module';

import { ProductGeneralPage } from './product-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductGeneralPageRoutingModule
  ],
  declarations: [ProductGeneralPage]
})
export class ProductGeneralPageModule {}
