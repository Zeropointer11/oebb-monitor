import { Entrypoint } from "./entrypoint.model";
import { Station } from "../station/station.model";
import { LocalizedString } from "../general/localizedstring.model";

export interface TravelActionResponseInterface {
  travelActions : Array<TravelAction>;
}

export class TravelActionResponse implements TravelActionResponseInterface {
  travelActions : Array<TravelAction>;
  constructor(response : TravelActionResponseInterface) {
    this.travelActions = response.travelActions.map(t => new TravelAction(t));
  }
}

export interface TravelActionInterface {
  id : string;
  isRemovable : boolean;
  entrypoint : any;
  type : string;
  from : Station;
  to : Station;
  title : LocalizedString;
  displayType : string;
  subtitle : LocalizedString;
}
export class TravelAction implements TravelActionInterface {
  id: string;
  isRemovable: boolean;
  entrypoint: any;
  type: string;
  from: Station;
  to: Station;
  title: LocalizedString;
  displayType: string;
  subtitle: LocalizedString;

  constructor(travelActionResponse : TravelActionInterface) {
    this.id = travelActionResponse.id;
    this.isRemovable = travelActionResponse.isRemovable;
    this.entrypoint = new Entrypoint(travelActionResponse.entrypoint);
    this.type = travelActionResponse.type;
    this.from = new Station(travelActionResponse.from);
    this.to = new Station(travelActionResponse.to);
    this.title = new LocalizedString( travelActionResponse.title);
    this.displayType = travelActionResponse.displayType;
    this.subtitle = new LocalizedString(travelActionResponse.subtitle);
  }
}


