import { Component, Input, OnInit } from '@angular/core';
import { ConnectionSection } from 'src/app/models/timetable/section.model';
import { ConnectionViewModel } from '../connection.viewmodel';

@Component({
  selector: 'app-connection-sections',
  templateUrl: './connection-sections.component.html',
  styleUrls: ['./connection-sections.component.less']
})
export class ConnectinSectionsComponent implements OnInit {

  @Input() viewModel!: ConnectionViewModel;

  sectionsWidth: number = 108;
  sectionsValues: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.calculateSectons()
  }

  private calculateSectons() {
      var duration = this.viewModel.connection.duration;
      if ((duration / this.viewModel.longestDuration) * 100 < 100) {
          this.sectionsWidth = (duration / this.viewModel.longestDuration) * 100;
      }

      this.sectionsValues = this.viewModel.connection.sections?.map(s => {
        let sum = this.viewModel.getDurationSum();
        let percent = s.duration / sum * 100;
        let conPercent = this.viewModel.connection.duration / this.viewModel.longestDuration * 100;

        if (conPercent < 50) {
          return '1 0 ' + percent + '%';
        }
        else {
          return '0 1 ' + percent + '%';
        }
      }) ?? [];
  }

  trackBySection(index: number, item: ConnectionSection): string | null {
    return item.id;
  }
}
