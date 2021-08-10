export interface StationInterface {
  number: string;
  name: string;
  meta: string | null;
  longitude : number;
  latitude : number;
}

export class Station implements StationInterface {
  number: string;
  name: string;
  meta: string | null;
  longitude: number;
  latitude: number;

  constructor(stationResponse: StationInterface) {
    this.number = stationResponse.number;
    this.name = stationResponse.name;
    this.meta = stationResponse.meta ?? null;
    this.latitude = stationResponse.latitude;
    this.longitude = stationResponse.longitude;
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
