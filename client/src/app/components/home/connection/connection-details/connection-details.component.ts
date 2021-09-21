import { Component, Input, OnInit } from '@angular/core';
import { ConnectionViewModel } from '../connection.viewmodel';

@Component({
  selector: 'app-connection-details',
  templateUrl: './connection-details.component.html',
  styleUrls: ['./connection-details.component.less']
})
export class ConnectionDetailsComponent implements OnInit {


  @Input() viewModel!: ConnectionViewModel;

  constructor() { }

  ngOnInit(): void {
  }

}
