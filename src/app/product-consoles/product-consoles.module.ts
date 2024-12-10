import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductConsolesPageRoutingModule } from './product-consoles-routing.module';

import { ProductConsolesPage } from './product-consoles.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductConsolesPageRoutingModule,
    SharedModule
  ],
  declarations: [ProductConsolesPage]
})
export class ProductConsolesPageModule {}
