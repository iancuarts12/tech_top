import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductMobilePage } from './product-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: ProductMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductMobilePageRoutingModule {}
