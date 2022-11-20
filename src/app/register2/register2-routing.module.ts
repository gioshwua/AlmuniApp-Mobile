import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register2Page } from './register2.page';

const routes: Routes = [
  {
    path: '',
    component: Register2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register2PageRoutingModule {}
