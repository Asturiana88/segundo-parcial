import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TablaComponent } from "./tabla.component";

@NgModule({
    declarations: [
      TablaComponent,
    ],
    exports: [
      TablaComponent,
    ],
    imports: [
      CommonModule,
    ]
  })
  export class TablaModule { }
  