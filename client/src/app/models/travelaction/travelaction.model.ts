import { Entrypoint } from "./entrypoint.model";
import { Station } from "../station/station.model";
import { LocalizedString } from "../general/localizedstring.model";

export interface ITravelActionResponse {
  travelActions : Array<TravelAction>;
}

export class TravelActionResponse implements ITravelActionResponse {
  travelActions : Array<TravelAction>;
  constructor(response : ITravelActionResponse) {
    this.travelActions = response.travelActions.map(t => new TravelAction(t));
  }
}

export interface ITravelAction {
  id : string | null;
  icon: string| null;
  backgroundColor: string | null;
  type : string | null;
  isAbroad: boolean;
  isRemovable : boolean;
  title : LocalizedString | null;
  subtitle : LocalizedString | null;
  fromText: string | null;
  toText: string | null;
  from : Station | null;
  to : Station | null;
  entrypoint : Entrypoint | null;
  displayType : string | null;
  iconType : string | null;
  shopEntryName: string | null;
}
export class TravelAction implements ITravelAction {
  id: string | null;
  icon: string | null;
  backgroundColor: string | null;
  type: string | null;
  isAbroad: boolean;
  isRemovable: boolean;
  title: LocalizedString | null = null;
  subtitle: LocalizedString | null = null;
  fromText: string | null;
  toText: string | null;
  from: Station | null = null;
  to: Station | null = null;
  entrypoint: Entrypoint | null = null;
  displayType: string | null;
  iconType: string | null;
  shopEntryName: string | null;

  constructor(travelActionResponse : ITravelAction) {
    this.id = travelActionResponse.id;
    this.icon = travelActionResponse.icon;
    this.backgroundColor = travelActionResponse.backgroundColor;
    this.isAbroad = travelActionResponse.isAbroad ?? false;
    this.isRemovable = travelActionResponse.isRemovable ?? false;
    if (travelActionResponse.entrypoint != null) {
      this.entrypoint = new Entrypoint(travelActionResponse.entrypoint);
    }
    this.type = travelActionResponse.type;
    this.fromText = travelActionResponse.fromText;
    this.toText = travelActionResponse.toText;
    if (travelActionResponse.from != null) {
      this.from = new Station(travelActionResponse.from);
    }
    if(travelActionResponse.to != null) {
      this.to = new Station(travelActionResponse.to);
    }
    if (travelActionResponse.title != null) {
      this.title = new LocalizedString( travelActionResponse.title);
    }
    this.displayType = travelActionResponse.displayType;
    if(travelActionResponse.subtitle != null) {
      this.subtitle = new LocalizedString(travelActionResponse.subtitle);
    }
    this.iconType = travelActionResponse.iconType;
    this.shopEntryName = travelActionResponse.shopEntryName;
  }

}


