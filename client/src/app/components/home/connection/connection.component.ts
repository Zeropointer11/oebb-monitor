import { Component, Input, OnInit } from '@angular/core';
import { ConnectionViewModel } from './connection.viewmodel';
import { DurationPipe } from "src/app/helper/duration.helper";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.less'],
  providers: [DurationPipe]
})
export class ConnectionComponent implements OnInit {

  @Input() viewModel!: ConnectionViewModel;

  constructor() { }

  ngOnInit(): void {
  }

}
