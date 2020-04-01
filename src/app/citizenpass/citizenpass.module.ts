import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CitizenpassPageRoutingModule } from './citizenpass-routing.module';

import { CitizenpassPage } from './citizenpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CitizenpassPageRoutingModule
  ],
  declarations: [CitizenpassPage]
})
export class CitizenpassPageModule {}
