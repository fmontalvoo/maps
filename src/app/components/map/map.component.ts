import { Component, OnInit } from "@angular/core";

import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { MarkerModel } from "src/app/models/marker.model";
import { EditMarkerDialogComponent } from "../edit-marker-dialog/edit-marker-dialog.component";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})
export class MapComponent implements OnInit {
  public lat: number = -0.17239496915142513;
  public lng: number = -78.48261026997494;

  public markers: MarkerModel[] = [];

  private duration: number = 2000;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {
    const markersInStoreage = localStorage.getItem("markers");
    if (markersInStoreage) {
      const items = JSON.parse(markersInStoreage);
      for (const item of items) {
        console.log(item);
        const {
          _lat: lat,
          _lng: lng,
          _title: title,
          _description: description,
        } = item;
        const marker = new MarkerModel(lat, lng);
        marker.title = title;
        marker.description = description;
        console.log(marker);
        this.markers.push(marker);
      }
    }
  }

  ngOnInit(): void {
  }

  public addMarker(event: any): void {
    const { lat, lng } = event.coords;
    this.markers.push(new MarkerModel(lat, lng));
    this.saveInStorage();
    this.snackBar.open("Marcador agregado", "Cerrar", {
      duration: this.duration,
    });
  }

  public editMarker(marker: MarkerModel): void {
    const dialogRef = this.dialog.open(EditMarkerDialogComponent, {
      width: "250px",
      data: marker,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  public removeMarker(index: number): void {
    this.markers.splice(index, 1);
    this.saveInStorage();
    this.snackBar.open("Marcador eliminado", "Cerrar", {
      duration: this.duration,
    });
  }

  private saveInStorage(): void {
    console.log(this.markers);
    localStorage.setItem("markers", JSON.stringify(this.markers));
  }
}
