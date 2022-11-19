import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NavBarComponent } from '../Components/nav-bar/nav-bar.component';
import { HeaderComponent } from '../Components/header/header.component';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, HeaderComponent, NavBarComponent],
})
export class HomePageModule {}
