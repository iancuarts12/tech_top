import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductLaptopPage } from './product-laptop.page';

const routes: Routes = [
  {
    path: '',
    component: ProductLaptopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductLaptopPageRoutingModule {}
