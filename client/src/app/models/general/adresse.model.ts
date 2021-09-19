import { LocalizedString } from "./localizedstring.model";

export interface IAdresse {
  type:           string
  label:          LocalizedString
  city:           string
  street:         string
  zipCode:        string
  countryIsoCode: string
  countryText:    string
}

export class Adresse implements IAdresse {
  type: string;
  label: LocalizedString;
  city: string;
  street: string;
  zipCode: string;
  countryIsoCode: string;
  countryText: string;

  constructor(data : IAdresse) {
    this.type = data.type;
    this.label = new LocalizedString(data.label)
    this.city = data.city;
    this.street = data.street;
    this.zipCode = data.zipCode;
    this.countryIsoCode = data.countryIsoCode;
    this.countryText = data.countryText
  }
}
