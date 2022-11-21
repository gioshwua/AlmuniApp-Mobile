import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Register3PageRoutingModule } from './register3-routing.module';

import { Register3Page } from './register3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Register3PageRoutingModule
  ],
  declarations: [Register3Page]
})
export class Register3PageModule {}
