import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderModule } from "../app/component/header/header.module";
import { RouteReuseStrategy, RouterModule } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule }   from "./app-routing.module";
import { AppComponent }       from "./app.component";
import { CommonModule }       from "@angular/common";
import { FormsModule }        from "@angular/forms";
import { IonicStorageModule } from "@ionic/storage";
import { NgxQRCodeModule }    from "ngx-qrcode2";
import {MenuModule}           from './component/menu/menu.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxQRCodeModule,
    IonicStorageModule.forRoot(),
    HeaderModule,
    MenuModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
