import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule,
  ],
})
export class MaterialModule {}
