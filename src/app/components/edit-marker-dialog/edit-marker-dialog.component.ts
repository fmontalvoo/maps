import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MarkerModel } from "src/app/models/marker.model";

@Component({
  selector: "app-edit-marker-dialog",
  templateUrl: "./edit-marker-dialog.component.html",
  styleUrls: ["./edit-marker-dialog.component.css"],
})
export class EditMarkerDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<EditMarkerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MarkerModel,
  ) {
  }

  ngOnInit(): void {
  }

  public close(): void {
    this.dialogRef.close();
  }
}
