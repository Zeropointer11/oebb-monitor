import { Station } from "../station/station.model";
import { Connection } from "./connection.model";

export interface TimeTableInterface {
  connections: Connection[];
  infos:       Info[];
}

export class TimeTable implements TimeTableInterface {
  connections: Connection[];
  infos: Info[];

  constructor(data : TimeTableInterface) {
    this.connections = data.connections.map(c => new Connection(c))
    this.infos = data.infos.map(i => new Info(i))
  }
}

export interface InfoInterface {
  category:   string;
  header:     string;
  text:       string;
  textPlain:  string;
  sectionIdx: number;
  emergency:  boolean;
}

export class Info implements InfoInterface {
  category: string;
  header: string;
  text: string;
  textPlain: string;
  sectionIdx: number;
  emergency: boolean;

  constructor(data : InfoInterface) {
    this.category = data.category;
    this.header = data.header;
    this.text = data.text;
    this.textPlain = data.textPlain;
    this.sectionIdx = data.sectionIdx;
    this.emergency = data.emergency;
  }

}
