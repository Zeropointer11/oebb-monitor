import { ConnectionStation } from "./connectionstation.model";
import { Section } from "./section.model";

export interface ConnectionInterface {
  id:       string;
  from:     ConnectionStation;
  to:       ConnectionStation;
  sections: Section[];
  switches: number;
  duration: number;
}
export class Connection implements ConnectionInterface {
  id: string;
  from: ConnectionStation;
  to: ConnectionStation;
  sections: Section[];
  switches: number;
  duration: number;

  constructor(data : ConnectionInterface) {
    this.id = data.id;
    this.from = new ConnectionStation(data.from);
    this.to = new ConnectionStation(data.to);
    this.sections = data.sections;
    this.switches = data.switches;
    this.duration = data.duration;
  }
}
