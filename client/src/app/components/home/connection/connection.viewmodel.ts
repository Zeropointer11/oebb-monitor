import { DurationPipe } from "src/app/helper/duration.helper";
import { Connection } from "src/app/models/timetable/connection.model";
import { ConnectionSection } from "src/app/models/timetable/section.model";

export class ConnectionViewModel {
  connection : Connection
  longestDuration : number;

  constructor(conn : Connection, longestDuration: number) {
    this.connection = conn;
    this.longestDuration = longestDuration;
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
    ?.filter((section, index, array) => index < array.length - 1 && section.type?.toLocaleLowerCase() !== 'walk')
    .map(section => section.to?.displayName() ?? '')
    .join(', ') ?? '';
  }

  getDurationSum(): number {
    return this.connection.sections
    ?.reduce((result , section) => {
      return result + section.duration;
    }, 0) ?? 0;
  }
}
