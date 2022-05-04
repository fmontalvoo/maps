import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MaterialModule } from "./material.module";
import { MapComponent } from "./components/map/map.component";

import { AgmCoreModule } from "@agm/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCJyqy2ThK0aYpot6cadjYngEzClGrta-U",
    }),
  ],
  declarations: [
    AppComponent,
    MapComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
