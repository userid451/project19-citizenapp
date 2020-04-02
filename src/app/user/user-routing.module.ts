import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';

const routes: Routes = [
  {
    path: 'test',
    component: UserPage,
  }
];

// t routes: Routes = [
//   {
//     path: 'test',
//     component: UserPage,
//   },
//   {
//     path: '',
//     redirectTo: '/user',
//     pathMatch: 'full'
//   }
// ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
