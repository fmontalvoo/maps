import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MaterialModule } from "./material.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MapComponent } from './components/map/map.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    MapComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
