import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";
import { Duration } from "moment";

@Pipe({name: 'showDuration' })
export class DurationPipe implements PipeTransform{

  static getDuration(duration: Duration | number) : string {
    if (!duration) return '';

    let aDuration : Duration;
    if(typeof duration === 'number') {
      aDuration = moment.duration(duration);
    }
    else {
      aDuration = duration;
    }
    let result = ''

    if(aDuration.days() > 0) {
      result += `${aDuration.days()} d`;
    }
    if (aDuration.hours() > 0) {
      if(result.length > 0) result += ' ';
      result += `${aDuration.hours()} h`;
    }
    if(aDuration.minutes() > 0) {
      if(result.length > 0) result += ' ';
      result += `${aDuration.minutes()} min`
    }
    if(aDuration.seconds() > 0) {
      if(result.length > 0) result += ' ';
      result += `${aDuration.seconds()} sec`
    }
    return result;
  }

  transform(duration : Duration | number) : string {
    return DurationPipe.getDuration(duration);
  }

}
