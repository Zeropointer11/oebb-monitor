import {
  Gps
} from "./gps.model";

export class Station {

  public number: string;
  public name: string;
  public meta: string | null;
  public location: Gps;
  constructor(stationResponse: any) {
    this.number = stationResponse.number;
    this.name = stationResponse.name;
    this.meta = stationResponse.meta ?? null;
    this.location = new Gps(stationResponse.longitude, stationResponse.latitude)
  }

  displayName(): string {
    let displayName = '';
    if (this.meta !== null && this.meta.length > 0) {
      displayName += this.meta;
    }
    if(this.name.length > 0) {
      if(displayName.length > 0) {
        displayName += ' ';
      }
      displayName += this.name;
    }

    return displayName;
  }

}
