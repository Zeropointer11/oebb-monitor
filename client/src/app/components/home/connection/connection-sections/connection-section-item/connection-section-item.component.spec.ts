import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionSectionItemComponent } from './connection-section-item.component';

describe('ConnectionSectionItemComponent', () => {
  let component: ConnectionSectionItemComponent;
  let fixture: ComponentFixture<ConnectionSectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionSectionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionSectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
