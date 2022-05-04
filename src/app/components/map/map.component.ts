import { Component, OnInit } from "@angular/core";

import { MarkerModel } from "src/app/models/marker.model";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  public lat: number = -0.17239496915142513;
  public lng: number = -78.48261026997494;

  public markers: MarkerModel[] = [];

  constructor() {
    const newMarker = new MarkerModel(-0.17239496915142513, -78.48261026997494);
    this.markers.push(newMarker);
  }

  ngOnInit(): void {
  }

  public addMarker(event: any): void {
    const { lat, lng } = event.coords;
    console.info(lat, lng);
    this.markers.push(new MarkerModel(lat, lng));
  }
}
