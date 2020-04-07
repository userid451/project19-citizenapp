import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { MenuComponent } from "./menu.component";
import { RouterModule } from "@angular/router";
import { HeaderModule } from "../header/header.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, HeaderModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {}
