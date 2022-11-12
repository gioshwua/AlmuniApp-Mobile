import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../Components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { NavBarComponent } from '../Components/nav-bar/nav-bar.component';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LandingPageRoutingModule],
  declarations: [LandingPage, HeaderComponent, NavBarComponent],
})
export class LandingPageModule {}
