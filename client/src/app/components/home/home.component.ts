import { Component, Input, OnInit, Output } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { StationSearchOptions } from 'src/app/models/request.model';
import { Station } from 'src/app/models/station.model';
import { OebbApiService } from 'src/app/service/oebb-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  stations : Station[]= new Array<Station>();

  constructor(
    private readonly service : OebbApiService
  ) {
    service.searchStation("Wien", new StationSearchOptions(5))
    .pipe(
      //for session tests call it twice
      mergeMap(x => service.searchStation("Wien", new StationSearchOptions(5)))
    )
    .subscribe({
      next: value => {
        this.stations = value;
      }
    })
  }

  ngOnInit(): void {


  }

}
