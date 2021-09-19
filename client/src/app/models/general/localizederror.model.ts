import { LocalizedString } from "./localizedstring.model";

export interface ILocalizedError {
  title: LocalizedString | null;
  message: LocalizedString | null;
}

export class LocalizedError implements ILocalizedError {
  title: LocalizedString | null = null;
  message: LocalizedString | null = null;
  constructor(data : ILocalizedError) {
    if (data.title != null) {
      this.title = new LocalizedString(data.title);
    }
    if (data.message != null) {
      this.message = new LocalizedString(data.message);
    }
  }
}
