import { LocalizedString } from "../general/localizedstring.model";

export interface ICustomAttribute {
  id:              string,
  type:            string,
  label:           LocalizedString,
  subtext:         LocalizedString,
  value:           string,
  maxLength:       number,
  dateFrom:        Date,
  dateTo:          Date,
  listValues:      ListValue[],
  listOptions:     ListOptions,
  fixedValue:      string | null,
  list_id:         string,
  show_attributes: string,
}

export class CustomAttribute implements ICustomAttribute {
  id: string;
  type: string;
  label: LocalizedString;
  subtext: LocalizedString;
  value: string;
  maxLength: number;
  dateFrom: Date;
  dateTo: Date;
  listValues: ListValue[];
  listOptions: ListOptions;
  fixedValue: string | null;
  list_id: string;
  show_attributes: string;

  constructor(data : ICustomAttribute) {
    this.id = data.id;
    this.type = data.type;
    this.label = new LocalizedString(data.label);
    this.subtext = new LocalizedString(data.subtext);
    this.value = data.value;
    this.maxLength = data.maxLength;
    this.dateFrom = new Date(data.dateFrom);
    this.dateTo  = new Date(data.dateTo);
    this.listValues = data.listValues.map(l => new ListValue(l));
    this.listOptions = new ListOptions(data.listOptions);
    this.fixedValue = data.fixedValue;
    this.list_id = data.list_id;
    this.show_attributes = data.show_attributes;
  }

}

export interface IListOptions {
  listId:     string,
  pageNumber: number,
  pageSize:   number,
}

export class ListOptions implements IListOptions {
  listId: string;
  pageNumber: number;
  pageSize: number;

  constructor(data : IListOptions) {
    this.listId = data.listId;
    this.pageNumber = data.pageNumber;
    this.pageSize = data.pageSize;
  }
}

export interface IListValue {
  label:    LocalizedString,
  priority: number,
  value:    string,
}

export class ListValue implements IListValue {
  label: LocalizedString;
  priority: number;
  value: string;

  constructor(data : IListValue) {
    this.label = new LocalizedString(data.label);
    this.priority = data.priority;
    this.value = data.value;
  }
}
