import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductGeneralPage } from './product-general.page';

const routes: Routes = [
  {
    path: 'ProductGeneral',
    component: ProductGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductGeneralPageRoutingModule {}
