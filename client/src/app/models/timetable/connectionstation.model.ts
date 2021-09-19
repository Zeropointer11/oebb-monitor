
export interface IConnectionStation {
  id:                         string | null;
  name:                       string | null;

  departure:                  Date | null;
  arrival:                    Date | null;

  departureDelay:             Date | null;
  arrivalDelay:               Date | null;

  departurePlatform:          string | null;
  arrivalPlatform:            string | null;

  departurePlatformDeviation: string | null;
  arrivalPlatformDeviation:   string | null;

  esn:                        number;
  showAsResolvedMetaStation:  boolean;
}

export class ConnectionStation implements IConnectionStation {
  id: string | null;
  name: string | null;
  departure: Date | null = null;
  arrival: Date | null = null;
  departureDelay: Date | null = null;
  arrivalDelay: Date | null = null;
  departurePlatform: string | null;
  arrivalPlatform: string | null;
  departurePlatformDeviation: string | null;
  arrivalPlatformDeviation: string | null;
  esn: number;
  showAsResolvedMetaStation: boolean;

  constructor(data : IConnectionStation) {
    this.id = data.id;

    if (data.departure !== null){
      this.departure = new Date(data.departure);
    }
    this.departurePlatform = data.departurePlatform;
    if (data.departureDelay !== null) {
      this.departureDelay = new Date(data.departureDelay);
    }
    if (data.arrival !== null) {
      this.arrival = new Date(data.arrival);
    }
    this.arrivalPlatform = data.arrivalPlatform;
    if (data.arrivalDelay !== null) {
      this.arrivalDelay = new Date(data.arrivalDelay);
    }
    this.departurePlatformDeviation = data.departurePlatformDeviation;
    this.arrivalPlatformDeviation = data.arrivalPlatformDeviation;
    this.name = data.name;
    this.esn = data.esn ?? -1;
    this.showAsResolvedMetaStation = data.showAsResolvedMetaStation ?? false;

  }

  realTimeDeparture(): Date | null {
    return this.departureDelay ?? this.departure;
  }

  realTimeArrival(): Date | null {
    return this.arrivalDelay ?? this.arrival;
  }

}
