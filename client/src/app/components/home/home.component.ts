import { Component } from '@angular/core';
import { OebbApiService } from 'src/app/service/oebb-api.service';
import { HomeViewModel } from './home.viewmodel';
import { ConnectionViewModel } from './connection/connection.viewmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  readonly viewModel : HomeViewModel

  constructor(
    private readonly service : OebbApiService
  ) {
    this.viewModel = new HomeViewModel(service);
  }

  trackByConnection(index: number, item: ConnectionViewModel): string | null {
    return item.connection.id;
  }
}
