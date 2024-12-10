import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSmartPage } from './product-smart.page';

const routes: Routes = [
  {
    path: '',
    component: ProductSmartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductSmartPageRoutingModule {}
