import { Passenger } from "../passenger/passenger.model";
import { Station } from "../station/station.model";

export class TimeTableRequest {
  constructor(
  public travelActionId:    string,
  public datetimeDeparture: Date,
  public filter:            Filter,
  public passengers:        Passenger[],
  public entryPointId:      string,
  public count:             number,
  public debugFilter:       DebugFilter,
  public sortType:          TimeTableSortType,
  public from:              Station,
  public to:                Station,
  public customVias:        Station[],
  ){}

  setDatetimeDeparture(date : Date): TimeTableRequest {
    this.datetimeDeparture = date;
    return this;
  }

  setFilter(filter : Filter): TimeTableRequest {
    this.filter = filter;
    return this;
  }

  public static getDefaultRequest(
    travelActionId: string,
    from: Station,
    to: Station,
    customVias : Station[] = []): TimeTableRequest {
    return new TimeTableRequest(
      travelActionId,
      new Date(),
      new Filter(),
      [Passenger.getDefaultPassenger()],
      '',
      5,
      new DebugFilter(),
      TimeTableSortType.DEPARTURE,
      from,
      to,
      customVias
    )
  }
}

export enum TimeTableSortType {
  PRICE = "PRICE",
  DEPARTURE = "DEPARTURE",
  ARRIVAL = "ARRIVA",
}

export class DebugFilter {
  constructor(
  public noAggregationFilter: boolean = false,
  public noEqclassFilter:     boolean = false,
  public noNrtpathFilter:     boolean = false,
  public noPaymentFilter:     boolean = false,
  public useTripartFilter:    boolean = false,
  public noVbxFilter:         boolean = false,
  public noCategoriesFilter:  boolean = false,
  ){}
}

export class Filter {
  constructor(
  public regionaltrains: boolean = false,
  public direct:         boolean = false,
  public wheelchair:     boolean = false,
  public bikes:          boolean  = false,
  public trains:         boolean = false,
  public motorail:       boolean = false,
  public connections:    string[]  = [],
  ) {}
}

