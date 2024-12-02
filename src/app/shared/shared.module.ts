import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { PhoneNavComponent } from '../phone-nav/phone-nav.component';


@NgModule({
  declarations: [NavBarComponent, PhoneNavComponent],
  imports: [CommonModule, IonicModule, RouterModule],
  exports: [NavBarComponent, PhoneNavComponent]
})

export class SharedModule { }
