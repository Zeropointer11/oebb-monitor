import { Station } from "../station/station.model";

export class TravelActionRequest {
  public filter: TravelActionRequestFilter = new TravelActionRequestFilter();
  public shopEntryName: string | null = null;
  public entryPointId: string | null = null;
  public datetime: Date | null = null;

  constructor(
    public from : Station,
    public to : Station
  ){}

  setDateTime(dateTime : Date) : TravelActionRequest {
    this.datetime = dateTime;
    return this;
  }

  setFilter(filter : TravelActionRequestFilter) : TravelActionRequest {
    this.filter = filter;
    return this;
  }

}

export class TravelActionRequestFilter {
  constructor(
    public channel : string = 'inet',
    public history : boolean = false,
    public maxEntries: number = 5,
    public productTypes : string[] =  []
  ){}
}
