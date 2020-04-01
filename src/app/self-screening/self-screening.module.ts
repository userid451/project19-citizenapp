import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfScreeningPageRoutingModule } from './self-screening-routing.module';

import { SelfScreeningPage } from './self-screening.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfScreeningPageRoutingModule
  ],
  declarations: [SelfScreeningPage]
})
export class SelfScreeningPageModule {}
