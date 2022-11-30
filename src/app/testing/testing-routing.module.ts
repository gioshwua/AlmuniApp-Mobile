import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingPage } from './testing.page';

const routes: Routes = [
  {
    path: '',
    component: TestingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingPageRoutingModule {}
