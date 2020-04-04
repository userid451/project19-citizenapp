import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StatisticsPageRoutingModule } from "./statistics-routing.module";
import { HeaderModule } from "../component/header/header.module";

import { StatisticsPage } from "./statistics.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatisticsPageRoutingModule,
    HeaderModule,
  ],
  declarations: [StatisticsPage],
})
export class StatisticsPageModule {}
