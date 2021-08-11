import { LocalizedError } from "../general/localizederror.model";
import { LocalizedString } from "../general/localizedstring.model";
import { Station } from "../station/station.model";
import { Filter } from "./filter.model";
import { TimeRange } from "./timeranges.model";

export interface EntrypointInterface {
  id : string | null;
  registrationRequired : boolean;
  dateMandatory: string | null;
  defaultQuantity: number;
  maxQuantity: number;
  defaultCards : any[] | null;
  externalLink: string | null;
  vcLink: string | null;
  passengerMandatory: boolean;
  relationMandatory: boolean;
  birthdateMandatory: boolean;
  title: LocalizedString | null;
  chooseConnection: string | null;
  validTo : Date | null;
  errorText: LocalizedError | null;
  timerangesIncluded: TimeRange[] | null;
  timerangesExcluded: TimeRange[] | null;
  filter: Filter | null;
  from: Station| null;
  to : Station | null;
  toFixed: boolean;
}

export class Entrypoint implements EntrypointInterface {
  id: string | null;
  registrationRequired: boolean;
  dateMandatory: string | null;
  defaultQuantity: number = 1;
  maxQuantity: number = 0;
  defaultCards: any[] | null;
  externalLink: string | null;
  vcLink: string | null;
  passengerMandatory: boolean = false;
  relationMandatory: boolean = false;
  birthdateMandatory: boolean = false;
  title: LocalizedString | null = null;
  chooseConnection: string | null;
  validTo: Date | null = null;
  errorText: LocalizedError | null;
  timerangesIncluded: TimeRange[] | null = null;
  timerangesExcluded: TimeRange[] | null = null;
  filter: Filter | null;
  from: Station | null = null;
  to: Station | null = null;
  toFixed: boolean;

  constructor(entrypointResponse : EntrypointInterface) {
    this.id = entrypointResponse.id;
    this.registrationRequired = entrypointResponse.registrationRequired;
    this.defaultQuantity = entrypointResponse.defaultQuantity ?? 1;
    this.maxQuantity = entrypointResponse.maxQuantity ?? 0;
    this.defaultCards = entrypointResponse.defaultCards ?? null;
    this.externalLink = entrypointResponse.externalLink;
    this.vcLink = entrypointResponse.vcLink
    this.chooseConnection = entrypointResponse.chooseConnection;
    this.dateMandatory = entrypointResponse.dateMandatory;
    this.passengerMandatory = entrypointResponse.passengerMandatory ?? false;
    this.relationMandatory = entrypointResponse.relationMandatory ?? false;
    this.birthdateMandatory = entrypointResponse.birthdateMandatory ?? false;
    if (entrypointResponse.title != null) {
      this.title = new LocalizedString( entrypointResponse.title);
    }
    if (entrypointResponse.validTo != null) {
      this.validTo = new Date(entrypointResponse.validTo);
    }
    this.filter = entrypointResponse.filter;
    this.errorText = entrypointResponse.errorText;
    if(entrypointResponse.timerangesIncluded != null) {
      this.timerangesIncluded = entrypointResponse.timerangesIncluded.map(t => new TimeRange(t));
    }
    if(entrypointResponse.timerangesExcluded != null) {
      this.timerangesExcluded = entrypointResponse.timerangesExcluded.map(t => new TimeRange(t));
    }
    if(entrypointResponse.from != null) {
      this.from = new Station(entrypointResponse.from)
    }
    if (entrypointResponse.to != null) {
      this.to = new Station(entrypointResponse.to)
    }
    this.toFixed = entrypointResponse.toFixed ?? false;
  }
}
