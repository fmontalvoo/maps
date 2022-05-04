export class MarkerModel {
  private _lat!: number;
  private _lng!: number;
  private _title: string = "Título";
  private _description: string = "Descripción ";

  constructor(lat: number, lng: number) {
    this._lat = lat;
    this._lng = lng;
  }

  set lat(value: number) {
    this._lat = value;
  }
  set lng(value: number) {
    this._lng = value;
  }
  set title(value: string) {
    this._title = value;
  }
  set description(value: string) {
    this._description = value;
  }

  get lat() {
    return this._lat;
  }
  get lng() {
    return this._lng;
  }
  get title() {
    return this._title;
  }
  get description() {
    return this._description;
  }
}
