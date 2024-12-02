import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-product-general',
  templateUrl: './product-general.page.html',
  styleUrls: ['./product-general.page.scss'],
})
export class ProductGeneralPage implements OnInit {

  constructor(private menuCtrl:MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  openMenu(){
    this.menuCtrl.close();
  }

}
