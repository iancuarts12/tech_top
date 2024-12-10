import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPeripheralsPage } from './product-peripherals.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPeripheralsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPeripheralsPageRoutingModule {}
