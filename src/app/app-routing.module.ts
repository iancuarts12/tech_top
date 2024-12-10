import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductGeneralPage } from './product-general/product-general.page';
import { AboutPage } from './about/about.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'product-general',
    loadChildren: () => import('./product-general/product-general.module').then( m => m.ProductGeneralPageModule)
  },
  {
    path: 'product-laptop',
    loadChildren: () => import('./product-laptop/product-laptop.module').then( m => m.ProductLaptopPageModule)
  },
  {
    path: 'product-pc',
    loadChildren: () => import('./product-pc/product-pc.module').then( m => m.ProductPcPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'product-mobile',
    loadChildren: () => import('./product-mobile/product-mobile.module').then( m => m.ProductMobilePageModule)
  },
  {
    path: 'product-peripherals',
    loadChildren: () => import('./product-peripherals/product-peripherals.module').then( m => m.ProductPeripheralsPageModule)
  },
  {
    path: 'product-consoles',
    loadChildren: () => import('./product-consoles/product-consoles.module').then( m => m.ProductConsolesPageModule)
  },
  {
    path: 'product-smart',
    loadChildren: () => import('./product-smart/product-smart.module').then( m => m.ProductSmartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
