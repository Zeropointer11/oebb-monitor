import { first, map, mergeMap } from "rxjs/operators";
import { Station } from "src/app/models/station/station.model";
import { TimeTableRequest } from "src/app/models/timetable/request.timetable.model";
import { TimeTable } from "src/app/models/timetable/timetable.model";
import { TravelActionRequest } from "src/app/models/travelaction/request.travelaction.model";
import { TravelAction } from "src/app/models/travelaction/travelaction.model";
import { OebbApiService } from "src/app/service/oebb-api.service";
import { ConnectionViewModel } from "src/app/components/home/connection/connection.viewmodel"
import { IConnection } from "src/app/models/timetable/connection.model";

export class HomeViewModel {

  stations : Station[]= new Array<Station>();
  travelActions : TravelAction[] = new Array<TravelAction>();
  timeTable : TimeTable | null = null;
  connectionItemVms : ConnectionViewModel[] = new Array<ConnectionViewModel>();

  constructor(private readonly service : OebbApiService) {
/*
    service.searchStation("Wien")
    .subscribe({
      next: value => {
        this.stations = value;
      }
    })
    */
    service.travelAction(new TravelActionRequest(
      Station.from("Bad Erlach", 1132306),
      Station.from("Wien", 1190100)
    ))
    .pipe(
      map(travelActions => {
        this.travelActions = travelActions
        return travelActions.filter(ta =>  ta.entrypoint?.id === 'timetable')[0]
      }),
      mergeMap(ta => {
        var ttRequest = TimeTableRequest
        .getDefaultRequest(ta.id!, ta.from!, ta.to!)
        return service.timeTable(ttRequest)
      })
    )
    .subscribe({
      next: value => {
        let longestDuration = 0;
        if (value.connections != null) {
          longestDuration = this.getLongestDuration(value.connections);
        }

        this.connectionItemVms = value.connections
        ?.map(c => new ConnectionViewModel(c, longestDuration))
        ?? new Array<ConnectionViewModel>();
        this.timeTable = value
      }
    })
  }

  getLongestDuration(connections: IConnection[]) : number {
    return connections
    .filter(c => c.duration)
    .reduce((currentDuration, con) => {
       return currentDuration >= con.duration
       ? currentDuration
       : con.duration
      }, 0);
  }
}
