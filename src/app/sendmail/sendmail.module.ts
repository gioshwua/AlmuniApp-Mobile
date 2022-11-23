import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendmailPageRoutingModule } from './sendmail-routing.module';

import { SendmailPage } from './sendmail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendmailPageRoutingModule
  ],
  declarations: [SendmailPage]
})
export class SendmailPageModule {}
