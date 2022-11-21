import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register3Page } from './register3.page';

const routes: Routes = [
  {
    path: '',
    component: Register3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register3PageRoutingModule {}
