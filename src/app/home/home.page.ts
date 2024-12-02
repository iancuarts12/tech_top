import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menuCtrl:MenuController, private router:Router) {}
  toClose(){
    this.menuCtrl.close();
  }
  navigateToProduct(){
    this.menuCtrl.close();
    this.router.navigate(['/product-general']);
  }

}
