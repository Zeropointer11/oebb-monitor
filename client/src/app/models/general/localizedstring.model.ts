export interface ILocalizedString {
  de: string | null,
  en: string | null,
  it: string | null,
  fr: string | null,
}

export class LocalizedString implements ILocalizedString {
  de: string | null;
  en: string | null;
  it: string | null;
  fr: string | null;

  constructor(data : ILocalizedString) {
    this.de = data.de;
    this.en = data.en;
    this.it = data.it;
    this.fr = data.fr;
  }
}
