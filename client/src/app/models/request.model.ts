export class StationSearchOptions {
    constructor(
        public results : number
    ){}
}

export class JourneySearchOptions {
    constructor(
        public when : Date = new Date(),
        public departureAfter : Date = new Date(),
        public results? : number,
        public interval? : number,
        public transfers? : number,
        public prices : boolean = true
    ){}
}

export class TravelActionRequest {
  public datetime : Date = new Date();
  public filter : TravelActionRequestFilter = new TravelActionRequestFilter();
  constructor(
    public from : SearchStation,
    public to : SearchStation
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

export class SearchStation {
  constructor(
    public name: string,
    public number: number
  ){}
}
