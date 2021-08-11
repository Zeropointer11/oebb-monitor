import { ConnectionStation } from "./connectionstation.model";
import { ConnectionSection } from "./section.model";
import { ConnectionDetailInfo, TimeTableReducedScope } from "./timetable.model";

export interface ConnectionInterface {
  id:               string | null;
  from:             ConnectionStation | null;
  to:               ConnectionStation | null;
  pastConnection:   boolean;
  sections:         ConnectionSection[] | null;
  reducedScopes:    TimeTableReducedScope[] | null,
  switches:         number;
  duration:         number;
  products:         any[] | null;
  ts_price:         number | null;
  specialPriceInfo: string | null;
  infos:            ConnectionDetailInfo[] | null;
}
export class Connection implements ConnectionInterface {
  id: string | null;
  from: ConnectionStation | null = null;
  to: ConnectionStation | null = null;
  pastConnection: boolean;
  sections: ConnectionSection[] | null;
  reducedScopes: TimeTableReducedScope[] | null;
  switches: number;
  duration: number;
  products: any[] | null;
  ts_price: number | null;
  specialPriceInfo: string | null;
  infos: ConnectionDetailInfo[] | null;

  constructor(data : ConnectionInterface) {
    this.id = data.id;
    if (data.from != null) {
      this.from = new ConnectionStation(data.from);
    }
    if (data.to != null) {
      this.to = new ConnectionStation(data.to);
    }
    this.pastConnection = data.pastConnection ?? false;
    this.reducedScopes = data.reducedScopes;

    this.sections = data.sections;

    this.switches = data.switches;
    this.duration = data.duration;
    this.products = data.products;
    this.ts_price = data.ts_price;
    this.specialPriceInfo = data.specialPriceInfo;
    this.infos = data.infos?.map(i => new ConnectionDetailInfo(i)) ?? null;
  }
}
