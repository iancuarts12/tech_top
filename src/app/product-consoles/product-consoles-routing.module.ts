import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductConsolesPage } from './product-consoles.page';

const routes: Routes = [
  {
    path: '',
    component: ProductConsolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductConsolesPageRoutingModule {}
