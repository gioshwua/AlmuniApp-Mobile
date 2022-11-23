import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendmailPage } from './sendmail.page';

const routes: Routes = [
  {
    path: '',
    component: SendmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendmailPageRoutingModule {}
