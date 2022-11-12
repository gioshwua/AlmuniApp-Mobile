import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumniTabPage } from './alumni-tab.page';

const routes: Routes = [
  {
    path: '',
    component: AlumniTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumniTabPageRoutingModule {}
