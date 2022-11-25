import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendmailPageRoutingModule } from './sendmail-routing.module';
import { HeaderComponent } from '../Components/header/header.component';
import { SendmailPage } from './sendmail.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SendmailPageRoutingModule],
  declarations: [SendmailPage, HeaderComponent],
})
export class SendmailPageModule {}
