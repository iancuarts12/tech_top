import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductPcPage } from './product-pc.page';

const routes: Routes = [
  {
    path: '',
    component: ProductPcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPcPageRoutingModule {}
