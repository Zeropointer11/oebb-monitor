import { LocalizedString, LocalizedStringInterface } from "../general/localizedstring.model";
import { ConnectionStation } from "./connectionstation.model";

export interface SectionInterface {
  category:                             Category;
  sectionIdx:                           number;
  from:                                 ConnectionStation;
  to:                                   ConnectionStation;
  type:                                 string;
  attributes:                           LocalizedString[];
  passlist:                             Passlist[];
  duration:                             number;
  image:                                string;
  distance:                             number;
  durationSum:                          number;
  switchDuration:                       number;
  footpathDuration:                     number;
  notValidOffers:                       string[];
  extras:                               Extra[];
  particularPlacesRequiredPassengerIds: number[];
  numberOfSelectablePlaces:             number;
  nighttrain:                           ConnectionSectionNighttrain;
  hasRealtime:                          boolean;
  reservations:                         any[];
  hasOffer:                             boolean;
  shift:                                number;
  lastPaged:                            boolean;
  hasOnlySecondClass:                   boolean;
  graphicalReservation:                 GraphicalReservation;
  infos:                                Info[];
}

export class Section implements SectionInterface {
  category: Category;
  sectionIdx: number;
  from: ConnectionStation;
  to: ConnectionStation;
  type: string;
  attributes: LocalizedString[];
  passlist: Passlist[];
  duration: number;
  image: string;
  distance: number;
  durationSum: number;
  switchDuration: number;
  footpathDuration: number;
  notValidOffers: string[];
  extras: Extra[];
  particularPlacesRequiredPassengerIds: number[];
  numberOfSelectablePlaces: number;
  nighttrain: ConnectionSectionNighttrain;
  hasRealtime: boolean;
  reservations: any[];
  hasOffer: boolean;
  shift: number;
  lastPaged: boolean;
  hasOnlySecondClass: boolean;
  graphicalReservation: GraphicalReservation;
  infos: Info[];

  constructor(data : SectionInterface) {
    this.category = data.category;
    this.sectionIdx = data.sectionIdx;
    this.from = new ConnectionStation(data.from);
    this.to = new ConnectionStation(data.to);
    this.type  = data.type;
    this.attributes = data.attributes; //TODO:
    this.passlist = data.passlist; // TODO:
    this.duration = data.duration;
    this.image = data.image;
    this.distance = data.distance;
    this.durationSum = data.durationSum;
    this.switchDuration = data.switchDuration;
    this.footpathDuration = data.footpathDuration;
    this.notValidOffers = data.notValidOffers;
    this.extras = data.extras; // TODO:
    this.particularPlacesRequiredPassengerIds = data.particularPlacesRequiredPassengerIds;
    this.numberOfSelectablePlaces = data.numberOfSelectablePlaces;
    this.nighttrain = data.nighttrain; //TODO:
    this.hasRealtime = data.hasRealtime;
    this.reservations = data.reservations; //TODO:
    this.hasOffer = data.hasOffer;
    this.shift = data.shift;
    this.lastPaged = data.lastPaged;
    this.hasOnlySecondClass = data.hasOnlySecondClass ?? true;
    this.graphicalReservation = data.graphicalReservation; // TODO:
    this.infos = data.infos; //TODO;
  }

}

export interface Category {
  name:                    string;
  displayName:             string;
  longName:                LocalizedString;
  place:                   LocalizedString;
  number:                  string;
  direction:               string;
  backgroundColor:         string;
  backgroundColorDisabled: string;
  barColor:                string;
  barColorDisabled:        string;
  fontColor:               string;
  fontColorDisabled:       string;
  iconId:                  string;
  journeyPreviewIconColor: string;
  journeyPreviewIconId:    string;
  assistantIconId:         string;
  train:                   boolean;
  parallelName:            string | null;
  parallelNumber:          string | null;
  parallelDisplayName:     string | null;
  parallelLongName:       LocalizedString | null;
}

export interface Extra {
  offers:                  Offer[];
  offerIds:                string[];
  available:               boolean;
  fancyReservation:        AccommodationCategoryFancyReservation;
  accommodationCategories: AccommodationCategoryElement[];
  scope:                   number[];
  relevantReductions:      RelevantReduction[];
  availabilityState:       string;
  validities:              Validity[];
  validityTimerange:       ValidityTimerange;
  id:                      string;
  type:                    string;
  title:                   LocalizedString;
  germanProductTitlesRaw:  string[];
  notes:                   Note[];
  selected:                boolean;
  disabled:                boolean;
  price:                   AvailableOfferPrice;
}

export interface AccommodationCategoryElement {
  id:                                  number;
  fancyReservation:                    AccommodationCategoryFancyReservation;
  image:                               string;
  selected:                            boolean;
  title:                               LocalizedString;
  notes:                               Note[];
  preferences:                         PurplePreference[];
  preferencesRequiredForAllPassengers: boolean;
  price:                               AvailableOfferPrice;
  disabled:                            boolean;
  availabilityState:                   string;
  availableOffers:                     AvailableOffer[];
  availableSpots:                      AvailableSpots;
}

export interface AvailableOffer {
  id:                string;
  price:             AvailableOfferPrice;
  privateVariations: PrivateVariation[];
}

export interface AvailableOfferPrice {
  total:               number;
  tax:                 number;
  surcharge:           number;
  saving:              number;
  followUp:            number;
  ignoreFirstFollowUp: boolean;
}

export interface PrivateVariation {
  count:     number;
  surcharge: number;
  selected:  boolean;
}

export interface AvailableSpots {
  female: number;
  male:   number;
}

export interface AccommodationCategoryFancyReservation {
  particularPlaces:         ParticularPlaces;
  referencePlace:           ReferencePlace;
  seatDistribution:         SeatDistribution;
  particularPlacesAdvanced: ParticularPlacesAdvanced;
}

export interface ParticularPlaces {
  available: boolean;
  selection: ParticularPlacesClass;
}

export interface ParticularPlacesClass {
  coachNumber: number;
  places:      Place[];
}

export interface Place {
  gender:      string;
  passengerId: number;
  placeNumber: string;
}

export interface ParticularPlacesAdvanced {
  available: boolean;
  selection: ParticularPlacesAdvancedClass;
}

export interface ParticularPlacesAdvancedClass {
  selectedPlaces: SelectedPlace[];
}

export interface SelectedPlace {
  coachNumber: string;
  places:      string[];
  class:       string;
}

export interface ReferencePlace {
  available: boolean;
  selection: ReferencePlaceClass;
}

export interface ReferencePlaceClass {
  coachNumber: string;
  placeNumber: string;
}

export interface SeatDistribution {
  available: boolean;
  selection: boolean;
}

export interface Note {
  type:  Type;
  text:  LocalizedString;
  style: string;
}

export enum Type {
  Default = "default",
}

export interface PurplePreference {
  type:        string;
  items:       Item[];
  title:       LocalizedString;
  required:    boolean;
  passengerId: number;
}

export interface Item {
  id:         string;
  selected:   boolean;
  title:      LocalizedString;
  type:       string;
  disabled:   boolean;
  rideconfId: number;
  gender:     string;
}

export interface Offer {
  offerId:                              string;
  reducedScope:                         ReducedScope[];
  required:                             boolean;
  surcharge:                            number;
  price:                                AvailableOfferPrice;
  allSections:                          boolean;
  reservationDetails:                   ReservationDetails;
  additionalSurcharges:                 AdditionalSurcharge[];
  excludedExtras:                       string[];
  requiredExtras:                       string[];
  notes:                                Note[];
  currentlySelected:                    CurrentlySelected;
  reservationScopes:                    ReservationScope[];
  defaultSelected:                      boolean;
  availabilityState:                    string;
  additionalAvailabilityState:          AdditionalAvailabilityState[];
  accommodationCategoryGroups:          AccommodationCategoryGroup[];
  fancyReservation:                     AccommodationCategoryFancyReservation;
  particularPlacesRequiredPassengerIds: number[];
}

export interface AccommodationCategoryGroup {
  id:                                   Type;
  title:                                LocalizedString;
  notes:                                Note[];
  accommodationCategories:              AccommodationCategoryElement[];
  fancyReservation:                     AccommodationCategoryFancyReservation;
  particularPlacesRequiredPassengerIds: number[];
  numberOfSelectablePlaces:             number;
}

export interface AdditionalAvailabilityState {
  extraId:           string;
  availabilityState: string;
}

export interface AdditionalSurcharge {
  extraId:   string;
  surcharge: number;
}

export interface CurrentlySelected {
  price:             AvailableOfferPrice;
  notes:             Note[];
  reservationScopes: ReservationScope[];
  nighttrain:        CurrentlySelectedNighttrain;
  excludedExtras:    string[];
  requiredExtras:    string[];
  fancyReservation:  CurrentlySelectedFancyReservation;
}

export interface CurrentlySelectedFancyReservation {
  particularPlaces:         ParticularPlacesClass;
  referencePlace:           ReferencePlaceClass;
  seatDistribution:         boolean;
  particularPlacesAdvanced: ParticularPlacesAdvancedClass;
}

export interface CurrentlySelectedNighttrain {
  accommodationCategory: NighttrainAccommodationCategory;
  fancyReservation:      CurrentlySelectedFancyReservation;
}

export interface NighttrainAccommodationCategory {
  id:                           number;
  preferences:                  FluffyPreference[];
  numberOfSelectedCompartments: number;
}

export interface FluffyPreference {
  id:         string;
  type:       string;
  rideconfId: number;
}

export interface ReservationScope {
  accommodationCategory: NighttrainAccommodationCategory;
  fancyReservation:      CurrentlySelectedFancyReservation;
  scope:                 number[];
  selectedPlaces:        SelectedPlace[];
}

export interface ReducedScope {
  from: ReducedScopeFrom;
  to:   ReducedScopeFrom;
}

export interface ReducedScopeFrom {
  name:       string;
  sectionIdx: number;
}

export interface ReservationDetails {
  class1: Class[];
  class2: Class[];
}

export interface Class {
  id:                  number;
  accCat:              string;
  accClass:            number;
  accType:             string;
  ignoreFirstFollowUp: boolean;
  isGlobalPriced:      boolean;
  isRequired:          boolean;
  isFixReservability:  boolean;
  isGAR:               boolean;
  objects:             Object[];
  rideConfs:           RideConf[];
  scope:               number[];
  special:             boolean;
  rawObjects:          UnsortedSeatLines[];
}

export interface Object {
  label:     number;
  price:     number;
  birthdate: string;
  special:   boolean;
  tc:        number;
  id:        number;
}

export interface UnsortedSeatLines {
}

export interface RideConf {
  accCat:              string;
  bookingCodes:        UnsortedSeatLines[];
  capacity:            number;
  maxPerBooking:       number;
  bookingQuantity:     number;
  displayId:           number;
  followUpPrice:       number;
  id:                  number;
  mergedId:            number;
  name:                LocalizedString;
  title:               string;
  objects:             Object[];
  preferences:         RideConfPreference[];
  price:               number;
  genderInputRequired: boolean;
  isFixReservability:  boolean;
  availabilityState:   string;
}

export interface RideConfPreference {
  display_id:     number;
  name:           LocalizedString;
  param:          string;
  success_digits: string[];
}

export interface RelevantReduction {
  type: string;
  text: LocalizedString;
}

export interface Validity {
  date:     string;
  selected: boolean;
}

export interface ValidityTimerange {
  begin:               string;
  end:                 string;
  selectedValidityDay: string;
}

export interface ConnectionSectionFrom {
  departure:                  string;
  departureDelay:             string;
  departurePlatform:          string;
  departurePlatformDeviation: string;
  journeyPreviewName:         string;
  name:                       string;
  esn:                        number;
}

export interface GraphicalReservation {
  available:                boolean;
  ride:                     Ride;
  numberOfSelectablePlaces: number;
  componentUrl:             string;
}

export interface Ride {
  category:        string;
  number:          string;
  from:            number;
  to:              number;
  departure:       string;
  origin:          number;
  destination:     number;
  originDeparture: string;
}

export interface Info {
  category:     string;
  validFrom:    string;
  validTo:      string;
  header:       string;
  text:         string;
  textPlain:    string;
  internalLink: string;
  externalLink: string;
  type:         string;
  sectionIdx:   number;
  emergency:    boolean;
}

export interface ConnectionSectionNighttrain {
  title:               LocalizedString;
  operatorCategory:    string;
  accommodationGroups: AccommodationGroup[];
  detailsLink:         LocalizedString;
  image:               string;
  required:            boolean;
  selectionInfo:       SelectionInfo;
  from:                NighttrainFrom;
  to:                  NighttrainFrom;
  sectionIdx:          number;
}

export interface AccommodationGroup {
  id:                            string;
  image:                         string;
  type:                          string;
  title:                         LocalizedString;
  linkTitle:                     LocalizedString;
  notes:                         Note[];
  fancyReservation:              AccommodationCategoryFancyReservation;
  selected:                      boolean;
  offers:                        Offer[];
  accommodationCategories:       AccommodationCategoryElement[];
  availableOfferIds:             string[];
  hasMissingRequiredPreferences: boolean;
  detailsLink:                   LocalizedString;
  availabilityState:             string;
  accommodationCategoryGroups:   AccommodationCategoryGroup[];
}

export interface NighttrainFrom {
  name: string;
}

export interface SelectionInfo {
  title:                 LocalizedString;
  notes:                 Note[];
  price:                 SelectionInfoPrice;
  selected:              boolean;
  disabled:              boolean;
  showChangeOfferButton: boolean;
}

export interface SelectionInfoPrice {
  surcharge: number;
}

export interface Passlist {
  departure:                  string;
  departurePlatform:          string;
  departureDelay:             string;
  arrival:                    string;
  arrivalPlatform:            string;
  departurePlatformDeviation: string;
  arrivalPlatformDeviation:   string;
  arrivalDelay:               string;
  name:                       string;
  journeyPreviewName:         string;
  esn:                        number;
  gps:                        number[];
  showAsResolvedMetaStation:  boolean;
}
