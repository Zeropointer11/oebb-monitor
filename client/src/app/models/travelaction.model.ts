import { Entrypoint } from "./entrypoint.model";
import { Station } from "./station.model";

export class TravelActionResponse {
  public travelActions : Array<TravelAction>
  constructor(response : TravelActionResponse) {
    this.travelActions = response.travelActions.map(t => new TravelAction(t));
  }
}

export class TravelAction {
  public id : string;
  public isRemovable : boolean;
  public entrypoint : any;
  public type : string;
  public from : Station;
  public to : Station;
  public title : [string: string][];
  public displayType : string;
  public subtitle : [string: string];

  constructor(travelActionResponse : TravelAction) {
    this.id = travelActionResponse.id;
    this.isRemovable = travelActionResponse.isRemovable;
    this.entrypoint = new Entrypoint(travelActionResponse.entrypoint);
    this.type = travelActionResponse.type;
    this.from = new Station(travelActionResponse.from);
    this.to = new Station(travelActionResponse.to);
    this.title = travelActionResponse.title;
    this.displayType = travelActionResponse.displayType;
    this.subtitle = travelActionResponse.subtitle;
  }
}


