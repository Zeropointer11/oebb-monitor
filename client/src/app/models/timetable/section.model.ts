import { LocalizedString, ILocalizedString } from "../general/localizedstring.model";
import { ConnectionStation } from "./connectionstation.model";
import { ConnectionDetailInfo } from "./timetable.model";

export interface IConnectionSection {
  id:                                   string | null;
  from:                                 ConnectionStation | null;
  to:                                   ConnectionStation | null;
  type:                                 string | null;
  category:                             IConnectionSectionCategory | null;
  sectionIdx:                           number | null;
  infos:                                ConnectionDetailInfo[] | null;
  passlist:                             ConnectionStation[] | null;
  duration:                             number;
  hasRealtime:                          boolean;
  durationSum:                          number;
}

export class ConnectionSection implements IConnectionSection {
  id: string | null;
  from: ConnectionStation | null = null;
  to: ConnectionStation | null = null;
  type: string | null;
  category: IConnectionSectionCategory| null = null;
  sectionIdx: number | null;
  infos: ConnectionDetailInfo[] | null;
  passlist: ConnectionStation[] | null;
  duration: number;
  hasRealtime: boolean;
  durationSum: number;

  constructor(data : IConnectionSection) {
    this.id = data.id;

    if (data.category) {
      this.category = {
        ...data.category,
        barColor: data.category.backgroundColor,
        barColorDisabled: data.category.backgroundColorDisabled,
        train: data.category.train ?? false
      };
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

export interface IConnectionSectionCategory {
  name:                    string | null;
  number:                  string | null;
  place:                   ILocalizedString | null;
  displayName:             string | null;
  direction:               string | null;
  longName:                ILocalizedString | null;
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
  parallelLongName:        ILocalizedString | null;
}

export type ConnectionSectionCategory = IConnectionSectionCategory;

