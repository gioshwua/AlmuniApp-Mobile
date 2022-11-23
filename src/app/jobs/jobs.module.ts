import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsPageRoutingModule } from './jobs-routing.module';
import { HeaderComponent } from '../Components/header/header.component';
import { JobsPage } from './jobs.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, JobsPageRoutingModule],
  declarations: [JobsPage, HeaderComponent],
})
export class JobsPageModule {}
