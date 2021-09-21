import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectinSectionsComponent } from './connection-sections.component';

describe('ConnectinSectionsComponent', () => {
  let component: ConnectinSectionsComponent;
  let fixture: ComponentFixture<ConnectinSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectinSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectinSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
