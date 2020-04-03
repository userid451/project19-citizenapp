import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { LandingPageRoutingModule } from "./landing-routing.module";

import { LandingPage } from "./landing.page";
import { HeaderModule } from "../component/header/header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    HeaderModule
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
