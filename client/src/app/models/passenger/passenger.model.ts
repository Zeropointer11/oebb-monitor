import { max } from "rxjs/operators";
import { Adresse } from "../general/adresse.model";
import { LocalizedString } from "../general/localizedstring.model";
import { CustomAttribute } from "./customattribute.model";

export interface PassengerInterface {
  type:                string,
  id:                  number,
  me:                  boolean,
  remembered:          boolean,
  challengedFlags:     ChallengedFlags,
  relations:           any[],
  cards:               any[],
  birthdateChangeable: boolean,
  birthdateDeletable:  boolean,
  nameChangeable:      boolean,
  passengerDeletable:  boolean,
  isSelected:          boolean,
  addresses:           Adresse[],
  customAttributes:    CustomAttribute[],
}

export class Passenger implements PassengerInterface {
  public type: string;
  public id: number;
  public me: boolean;
  public remembered: boolean;
  public challengedFlags: ChallengedFlags;
  public relations: any[];
  public cards: any[];
  public birthdateChangeable: boolean;
  public birthdateDeletable: boolean;
  public nameChangeable: boolean;
  public passengerDeletable: boolean;
  public isSelected: boolean;
  public addresses: Adresse[];
  public customAttributes: CustomAttribute[];

  constructor(data : PassengerInterface) {
    this.type = data.type;
    this.id = data.id;
    this.me = data.me;
    this.remembered = data.remembered;
    this.challengedFlags = new ChallengedFlags(data.challengedFlags);
    this.relations = data.relations;
    this.cards = data.cards;
    this.birthdateChangeable = data.birthdateChangeable;
    this.birthdateDeletable = data.birthdateDeletable;
    this.nameChangeable = data.nameChangeable;
    this.passengerDeletable = data.passengerDeletable;
    this.isSelected = data.isSelected;
    this.addresses = data.addresses.map(a => new Adresse(a)),
    this.customAttributes = data.customAttributes.map(c => new CustomAttribute(c))
  }

  public static getDefaultPassenger(): Passenger {
    return new Passenger({
      type: "ADULT",
      id: 1234567891,
      me: false,
      remembered: false,
      challengedFlags: {
        hasAssistanceDog: false,
        hasAttendant: false,
        hasWheelchair: false,
        hasHandicappedPass: false
      },
      relations: [],
      cards: [],
      birthdateChangeable: true,
      birthdateDeletable: true,
      nameChangeable: true,
      passengerDeletable: true,
      isSelected: false,
      addresses: [],
      customAttributes: [],
    }
    )
  }
}

export interface ChallengedFlagsInterface {
  hasAssistanceDog:   boolean,
  hasWheelchair:      boolean,
  hasAttendant:       boolean,
  hasHandicappedPass: boolean,

}

export class ChallengedFlags implements ChallengedFlagsInterface {
  hasAssistanceDog: boolean;
  hasWheelchair: boolean;
  hasAttendant: boolean;
  hasHandicappedPass: boolean;

  constructor(data : ChallengedFlagsInterface) {
    this.hasAssistanceDog = data.hasAssistanceDog;
    this.hasWheelchair = data.hasWheelchair;
    this.hasAttendant = data.hasAttendant;
    this.hasHandicappedPass = data.hasHandicappedPass;
  }

}
