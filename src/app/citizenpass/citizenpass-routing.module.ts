import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizenpassPage } from './citizenpass.page';

const routes: Routes = [
  {
    path: '',
    component: CitizenpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitizenpassPageRoutingModule {}
