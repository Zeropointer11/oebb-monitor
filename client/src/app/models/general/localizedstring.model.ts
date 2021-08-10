export interface LocalizedStringInterface {
  de: string | null,
  en: string | null,
  it: string | null,
  fr: string | null,
}

export class LocalizedString implements LocalizedStringInterface {
  de: string | null;
  en: string | null;
  it: string | null;
  fr: string | null;

  constructor(data : LocalizedStringInterface) {
    this.de = data.de;
    this.en = data.en;
    this.it = data.it;
    this.fr = data.fr;
  }
}
