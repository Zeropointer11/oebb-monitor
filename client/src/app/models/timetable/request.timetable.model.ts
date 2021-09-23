import { Passenger } from "../passenger/passenger.model";
import { Station } from "../station/station.model";
import { formatDate } from "@angular/common";

export class TimeTableRequest {
  constructor(
  public travelActionId:    string,
  private datetimeDeparture:string,
  private datetimeArrival:  string | null,
  public from:              Station | null,
  public to:                Station | null,
  public entryPointId:      string | null,
  public shopEntryName:     string | null,
  public maxChanges:        number | null,
  public count:             number,
  public filter:            TimeTableFilter,
  public passengers:        Passenger[],
  public reverse:           boolean | null,
  public debugFilter:       TimeTableDebugFilter,
  public sortType:          TimeTableSortType,
  public customVias:        Station[],
  ){}

  setDatetimeDeparture(date : Date): TimeTableRequest {
    this.datetimeDeparture = this.convertToApiDateString(date);
    return this;
  }

  setDateTimeArrival(date : Date): TimeTableRequest {
    this.datetimeArrival = this.convertToApiDateString(date);
    return this;
  }

  setFilter(filter : TimeTableFilter): TimeTableRequest {
    this.filter = filter;
    return this;
  }

  convertToApiDateString(date : Date) : string {
    return TimeTableRequest.convertToApiDateString(date);
  }

  static convertToApiDateString(date : Date) : string {
    return formatDate(new Date(),'yyyy-MM-dd\'T\'HH:mm:ss.SSS', 'de-AT');
  }

  public static getDefaultRequest(
    travelActionId: string,
    from: Station,
    to: Station,
    customVias : Station[] = []): TimeTableRequest {
    return new TimeTableRequest(
      travelActionId,
      this.convertToApiDateString(new Date()),
      null,
      from,
      to,
      '',
      '',
      null,
      5,
      new TimeTableFilter(),
      [Passenger.getDefaultPassenger()],
      null,
      new TimeTableDebugFilter(),
      TimeTableSortType.DEPARTURE,
      customVias
    )
  }
}

export enum TimeTableSortType {
  PRICE = "PRICE",
  DEPARTURE = "DEPARTURE",
  ARRIVAL = "ARRIVA",
}

export class TimeTableDebugFilter {
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

export class TimeTableFilter {
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

