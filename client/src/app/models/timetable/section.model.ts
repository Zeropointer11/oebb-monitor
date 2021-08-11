import { LocalizedString, LocalizedStringInterface } from "../general/localizedstring.model";
import { ConnectionStation } from "./connectionstation.model";
import { ConnectionDetailInfo } from "./timetable.model";

export interface ConnectionSectionInterface {
  id:                                   string | null;
  from:                                 ConnectionStation | null;
  to:                                   ConnectionStation | null;
  type:                                 string | null;
  category:                             ConnectionSectionCategoryInterface | null;
  sectionIdx:                           number | null;
  infos:                                ConnectionDetailInfo[] | null;
  passlist:                             ConnectionStation[] | null;
  duration:                             number;
  hasRealtime:                          boolean;
  durationSum:                          number;
}

export class ConnectionSection implements ConnectionSectionInterface {
  id: string | null;
  from: ConnectionStation | null = null;
  to: ConnectionStation | null = null;
  type: string | null;
  category: ConnectionSectionCategory| null = null;
  sectionIdx: number | null;
  infos: ConnectionDetailInfo[] | null;
  passlist: ConnectionStation[] | null;
  duration: number;
  hasRealtime: boolean;
  durationSum: number;

  constructor(data : ConnectionSectionInterface) {
    this.id = data.id;

    if (data.category != null) {
      this.category = new ConnectionSectionCategory(data.category);
    }
    this.sectionIdx = data.sectionIdx;
    if (data.from != null) {
      this.from = new ConnectionStation(data.from);
    }
    if (data.to != null) {
      this.to = new ConnectionStation(data.to);
    }
    this.type  = data.type;
    this.passlist = data.passlist?.map(p => new ConnectionStation(p)) ?? null;
    this.duration = data.duration;

    this.durationSum = data.durationSum;
    this.hasRealtime = data.hasRealtime;
    this.infos = data.infos?.map(i => new ConnectionDetailInfo(i)) ?? null;
  }

}

export interface ConnectionSectionCategoryInterface {
  name:                    string | null;
  number:                  string | null;
  place:                   LocalizedString | null;
  displayName:             string | null;
  direction:               string | null;
  longName:                LocalizedString | null;
  iconId:                  string | null;

  backgroundColor:         string | null;
  backgroundColorDisabled: string | null;

  fontColor:               string | null;
  fontColorDisabled:       string | null;

  barColor:                string | null;
  barColorDisabled:        string | null;

  journeyPreviewIconColor: string | null;
  journeyPreviewIconId:    string | null;

  assistantIconId:         string | null;

  train:                   boolean;

  parallelName:            string | null;
  parallelNumber:          string | null;
  parallelDisplayName:     string | null;
  parallelLongName:        LocalizedString | null;
}

export class ConnectionSectionCategory implements ConnectionSectionCategoryInterface {
  name: string | null;
  number: string | null;
  place: LocalizedString | null = null;
  displayName: string | null;
  direction: string | null;
  longName: LocalizedString | null = null;
  iconId: string | null;
  backgroundColor: string | null;
  backgroundColorDisabled: string | null;
  fontColor: string | null;
  fontColorDisabled: string | null;
  barColor: string | null;
  barColorDisabled: string | null;
  journeyPreviewIconColor: string | null;
  journeyPreviewIconId: string | null;
  assistantIconId: string | null;
  train: boolean;
  parallelName: string | null;
  parallelNumber: string | null;
  parallelDisplayName: string | null;
  parallelLongName: LocalizedString | null = null;

  constructor(data : ConnectionSectionCategoryInterface) {
    this.name = data.name;
    this.number = data.number;
    if (data.place != null) {
      this.place = new LocalizedString(data.place);
    }
    this.displayName = data.displayName;
    this.direction = data.direction;
    if (data.longName != null) {
      this.longName = new LocalizedString(data.longName);
    }
    this.iconId = data.iconId;

    this.backgroundColor = data.backgroundColor;
    this.backgroundColorDisabled = data.backgroundColorDisabled;

    this.fontColor = data.fontColor;
    this.fontColorDisabled = data.fontColorDisabled;

    this.barColor = data.backgroundColor;
    this.barColorDisabled = data.backgroundColorDisabled;

    this.journeyPreviewIconColor = data.journeyPreviewIconColor;
    this.journeyPreviewIconId = data.journeyPreviewIconId;

    this.assistantIconId = data.assistantIconId;
    this.train = data.train ?? false;

    this.parallelName = data.parallelName;
    this.parallelNumber = data.parallelNumber;
    this.parallelDisplayName = data.parallelDisplayName;
    if (data.parallelLongName != null) {
      this.parallelLongName = new LocalizedString(data.parallelLongName);
    }
  }

}

