import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { RegisterPage } from './register.page';
import {HeaderModule}   from '../../../component/header/header.module';
import {RouterModule}   from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HeaderModule,
    RouterModule.forChild([{ path: '', component: RegisterPage }])
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
