import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OnboardingPageRoutingModule } from "./onboarding-routing.module";

import { OnboardingPage } from "./onboarding.page";
import { HeaderModule } from "../component/header/header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingPageRoutingModule,
    HeaderModule
  ],
  declarations: [OnboardingPage]
})
export class OnboardingPageModule {}
