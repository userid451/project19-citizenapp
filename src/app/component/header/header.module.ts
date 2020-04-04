import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header.component";
import { MenuModule } from "../menu/menu.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MenuModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
