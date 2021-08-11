import { LocalizedString } from "./localizedstring.model";

export interface LocalizedErrorInterface {
  title: LocalizedString | null;
  message: LocalizedString | null;
}

export class LocalizedError implements LocalizedErrorInterface {
  title: LocalizedString | null = null;
  message: LocalizedString | null = null;
  constructor(data : LocalizedErrorInterface) {
    if (data.title != null) {
      this.title = new LocalizedString(data.title);
    }
    if (data.message != null) {
      this.message = new LocalizedString(data.message);
    }
  }
}
