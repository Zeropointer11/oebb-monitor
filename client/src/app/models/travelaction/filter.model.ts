import { LocalizedString } from "../general/localizedstring.model";

export interface IFilter {
  header: FilterHeader | null;
  elements : FilterElement[] | null;
  active: boolean;
  discardedConnections: string[] | null;
}

export class Filter implements IFilter {
  header: FilterHeader | null;
  elements: FilterElement[] | null;
  active: boolean;
  discardedConnections: string[] | null;

  constructor(data : IFilter) {
    this.header = data.header;
    this.active = data.active ?? true;
    this.discardedConnections = data.discardedConnections;
    this.elements = data.elements;
  }
}

export interface FilterHeader {
  title : string | null;
  text : LocalizedString | null;
  action: FilterAction | null;
}

export interface FilterAction {
  title: string | null;
  icon: string | null;
}

export interface FilterElement {
  id : string | null;
  title : LocalizedString | null;
  text : string | null;
  textInactive: string | null;
  icon: string | null;
  action: FilterAction | null;
  settings: any | null;
  selected: boolean;

}
