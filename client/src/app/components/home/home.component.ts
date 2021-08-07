import { Component, Input, OnInit, Output } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { SearchStation, StationSearchOptions, TravelActionRequest, TravelActionRequestFilter } from 'src/app/models/request.model';
import { Station } from 'src/app/models/station.model';
import { TravelAction } from 'src/app/models/travelaction.model';
import { OebbApiService } from 'src/app/service/oebb-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  stations : Station[]= new Array<Station>();

  travelActions : TravelAction[] = new Array<TravelAction>();

  constructor(
    private readonly service : OebbApiService
  ) {
    service.searchStation("Wien", new StationSearchOptions(5))
    .subscribe({
      next: value => {
        this.stations = value;
      }
    })

    service.travelAction(new TravelActionRequest(
      new SearchStation("Bad Erlach", 1132306),
      new SearchStation("Wien", 1190100)
    ))
    .subscribe({
      next: value => {
        this.travelActions = value;
      }
    })
  }

  ngOnInit(): void {


  }

}
