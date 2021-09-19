import { DurationPipe } from "src/app/helper/duration.helper";
import { Connection } from "src/app/models/timetable/connection.model";
import { ConnectionSection } from "src/app/models/timetable/section.model";

export class ConnectionViewModel {
  connection : Connection
  constructor(conn : Connection) {
    this.connection = conn;
  }

  fromName() : string {
    return this.connection.from?.displayName() ?? '';
  }

  toName(): string {
    return this.connection.to?.displayName() ?? '';
  }

  duration(): string {
    return DurationPipe.getDuration(this.connection.duration)
  }

  switches(): number {
    return this.connection.switches
  }

  sectionChangeName(): string {
    if ((this.connection.sections?.length ?? 0) === 0) return '';
    return this.connection.sections
    ?.reduce((result : string, section : ConnectionSection, index : number) => {
      if (section.type?.toLocaleLowerCase() === 'walk') return result;
      if (index == (this.connection.sections?.length ?? 0) - 1) return result;
      if (result.length > 0) result += ', ';
      return result + section.to?.displayName() ?? ''
    }, '') ?? '';
  }
}
