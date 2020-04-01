import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfScreeningPage } from './self-screening.page';

const routes: Routes = [
  {
    path: '',
    component: SelfScreeningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfScreeningPageRoutingModule {}
