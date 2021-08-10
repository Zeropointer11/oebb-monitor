import { LocalizedString } from "./localizedstring.model";

export interface AdresseInterface {
  type:           string
  label:          LocalizedString
  city:           string
  street:         string
  zipCode:        string
  countryIsoCode: string
  countryText:    string
}

export class Adresse implements AdresseInterface {
  type: string;
  label: LocalizedString;
  city: string;
  street: string;
  zipCode: string;
  countryIsoCode: string;
  countryText: string;

  constructor(data : AdresseInterface) {
    this.type = data.type;
    this.label = new LocalizedString(data.label)
    this.city = data.city;
    this.street = data.street;
    this.zipCode = data.zipCode;
    this.countryIsoCode = data.countryIsoCode;
    this.countryText = data.countryText
  }
}
