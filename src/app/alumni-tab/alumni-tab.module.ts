import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../Components/header/header.component';
import { AlumniTabPageRoutingModule } from './alumni-tab-routing.module';

import { AlumniTabPage } from './alumni-tab.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AlumniTabPageRoutingModule],
  declarations: [AlumniTabPage, HeaderComponent],
})
export class AlumniTabPageModule {}
