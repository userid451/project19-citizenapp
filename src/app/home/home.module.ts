import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";
import { HeaderModule } from "../component/header/header.module";
import { NgxQRCodeModule } from "ngx-qrcode2";
import { Geolocation } from "@ionic-native/geolocation/ngx";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    NgxQRCodeModule,
    Geolocation,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
