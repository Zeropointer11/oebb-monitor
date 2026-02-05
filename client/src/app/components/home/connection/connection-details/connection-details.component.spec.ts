import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionDetailsComponent } from './connection-details.component';

describe('ConnectionDetailsComponent', () => {
  let component: ConnectionDetailsComponent;
  let fixture: ComponentFixture<ConnectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionDetailsComponent);
    component = fixture.componentInstance;
    component.viewModel = {
      duration: () => '1:30',
      switches: () => 0,
      sectionChangeName: () => '',
      fromName: () => 'A',
      toName: () => 'B'
    } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
