import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ConnectinSectionsComponent } from './connection-sections.component';

describe('ConnectinSectionsComponent', () => {
  let component: ConnectinSectionsComponent;
  let fixture: ComponentFixture<ConnectinSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectinSectionsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectinSectionsComponent);
    component = fixture.componentInstance;
    component.viewModel = {
      connection: {
          duration: 100,
          sections: []
      },
      longestDuration: 100,
      getDurationSum: () => 100
    } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
