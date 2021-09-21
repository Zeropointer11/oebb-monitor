import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ConnectionSection } from 'src/app/models/timetable/section.model';
import { ConnectionViewModel } from '../../connection.viewmodel';

@Component({
  selector: 'app-connection-section-item',
  templateUrl: './connection-section-item.component.html',
  styleUrls: ['./connection-section-item.component.less']
})
export class ConnectionSectionItemComponent implements OnInit {


  @Input() viewModel!: ConnectionViewModel;
  @Input() section! : ConnectionSection;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
/*
  cssStyle() {
    let borderBottomColor = this.viewModel.pastConnection && this.section.category.barColorDisabled || this.section.category.barColor;

    let backgroundColor = this.viewModel.pastConnection && this.section.category.backgroundColorDisabled || this.section.category.backgroundColor;

    if (this.section.isSectionDisabled) {
        backgroundColor = this.section.category.backgroundColorDisabled;
        borderBottomColor = this.section.category.barColorDisabled;
    }

    return this.domSanitizer
    .bypassSecurityTrustStyle('border-bottom: 3px solid {0}; background-color: {1};'
    .format(borderBottomColor, backgroundColor));
}*/
}
