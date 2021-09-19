export interface ITimeRange {
  begin : Date | null
  end : Date | null
}

export class TimeRange  implements ITimeRange{
  begin: Date | null = null;
  end: Date | null = null;
  constructor(data : ITimeRange) {
    if(data.begin != null) {
      this.begin = new Date(data.begin);
    }
    if(data.end != null) {
      this.end = new Date(data.end);
    }
  }
}
