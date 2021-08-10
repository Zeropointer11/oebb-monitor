
export interface ConnectionStationInterface {
  departure:                  Date | null;
  departurePlatform:          string | null;
  departureDelay:             Date | null;
  arrival:                    Date | null;
  arrivalPlatform:            string | null;
  departurePlatformDeviation: string | null;
  arrivalPlatformDeviation:   string | null;
  arrivalDelay:               Date | null;
  name:                       string;
  journeyPreviewName:         string;
  esn:                        number;
  gps:                        number[];
  showAsResolvedMetaStation:  boolean;
}

export class ConnectionStation implements ConnectionStationInterface {
  departure: Date | null = null;
  departurePlatform: string | null = null;
  departureDelay: Date | null = null;
  arrival: Date | null = null;
  arrivalPlatform: string | null = null;
  departurePlatformDeviation: string | null = null;
  arrivalPlatformDeviation: string | null = null;
  arrivalDelay: Date | null = null;
  name: string;
  journeyPreviewName: string;
  esn: number;
  gps: number[];
  showAsResolvedMetaStation: boolean;

  constructor(data : ConnectionStationInterface) {
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
    this.journeyPreviewName = data.journeyPreviewName;
    this.esn = data.esn;
    this.gps = data.gps;
    this.showAsResolvedMetaStation = data.showAsResolvedMetaStation ?? false;

  }

}
