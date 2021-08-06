import { Gps } from "./gps.model";

export class Station {

  public number: string;
  public name: string;
  public meta: string | null;
  public location: Gps;
    constructor(stationResponse : any){
      this.number = stationResponse.number;
      this.name = stationResponse.name;
      this.meta = stationResponse.meta ?? null;
      this.location = new Gps(stationResponse.longitude, stationResponse.latitude)
    }
}
