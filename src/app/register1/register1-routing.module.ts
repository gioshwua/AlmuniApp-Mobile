import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Register1Page } from './register1.page';

const routes: Routes = [
  {
    path: '',
    component: Register1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Register1PageRoutingModule {}
