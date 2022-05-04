import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EditMarkerDialogComponent } from "./components/edit-marker-dialog/edit-marker-dialog.component";

import { MaterialModule } from "./material.module";
import { MapComponent } from "./components/map/map.component";

import { AgmCoreModule } from "@agm/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCJyqy2ThK0aYpot6cadjYngEzClGrta-U",
    }),
  ],
  declarations: [
    AppComponent,
    MapComponent,
    EditMarkerDialogComponent,
  ],
  entryComponents: [EditMarkerDialogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
