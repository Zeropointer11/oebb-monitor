export interface TimeRangeInterface {
  begin : Date | null
  end : Date | null
}

export class TimeRange  implements TimeRangeInterface{
  begin: Date | null = null;
  end: Date | null = null;
  constructor(data : TimeRangeInterface) {
    if(data.begin != null) {
      this.begin = new Date(data.begin);
    }
    if(data.end != null) {
      this.end = new Date(data.end);
    }
  }
}
