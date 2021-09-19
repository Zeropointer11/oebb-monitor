import { LocalizedString } from "../general/localizedstring.model";
import { Station } from "../station/station.model";
import { Connection } from "./connection.model";

export interface ITimeTable {
  id: string | null;
  scrolling: string | null;
  connections: Connection[] | null;
  reducedScope: Array<Array<TimeTableReducedScope>> | null;
  infos:       ConnectionDetailInfo[] | null;
}

export class TimeTable implements ITimeTable {
  id: string | null;
  scrolling: string | null;
  connections: Connection[] | null = null;
  reducedScope: TimeTableReducedScope[][] | null = null;
  infos: ConnectionDetailInfo[] | null = null;

  constructor(data : ITimeTable) {
    this.id = data.id;
    this.scrolling = data.scrolling;
    if (data.connections != null) {
    this.connections = data.connections.map(c => new Connection(c))
    }
    if (data.infos != null) {
      this.infos = data.infos.map(i => new ConnectionDetailInfo(i))
    }
    if(data.reducedScope != null) {
      this.reducedScope = data.reducedScope;
    }
  }
}

export interface IConnectionDetail {
  category:     string | null;
  header:       string | null;
  validFrom:    string | null;
  validTo:      string | null;
  //html text
  text:         string | null;
  textPlain:    string | null;
  type:         string | null;
  sectionIdx:   number | null;
  emergency:    boolean;
  externalLink: string | null;
  internalLink: string | null;
}

export class ConnectionDetailInfo implements IConnectionDetail {
  category: string | null;
  header: string | null;
  validFrom: string | null;
  validTo: string | null;
  //html text
  text: string | null;
  textPlain: string | null;
  type:       string | null;
  sectionIdx: number | null;
  emergency: boolean ;
  externalLink: string | null;
  internalLink: string | null;

  constructor(data : IConnectionDetail) {
    this.category = data.category;
    this.header = data.header;
    this.validFrom = data.validFrom;
    this.validTo = data.validTo;
    this.text = data.text;
    this.textPlain = data.textPlain;
    this.type = data.type;
    this.sectionIdx = data.sectionIdx;
    this.emergency = data.emergency ?? false;
    this.externalLink = data.externalLink;
    this.internalLink = data.internalLink;
  }
}

export interface TimeTableReducedScope {
  from : ReducedScopeStation | null;
  to: ReducedScopeStation | null;
}

export interface ReducedScopeStation {
  name: string | null;
  sectionIdx: number | number;
}
