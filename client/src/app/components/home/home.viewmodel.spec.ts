import { HomeViewModel } from './home.viewmodel';
import { of } from 'rxjs';
import { IConnection } from 'src/app/models/timetable/connection.model';
import { registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/de-AT';

registerLocaleData(localeDeAt);

describe('HomeViewModel', () => {
  let viewModel: HomeViewModel;
  let serviceMock: any;

  beforeEach(() => {
    serviceMock = jasmine.createSpyObj('OebbApiService', ['travelAction', 'timeTable']);
    const mockTravelAction = {
        id: '1',
        from: { name: 'A', id: 1 },
        to: { name: 'B', id: 2 },
        entrypoint: { id: 'timetable' }
    };
    serviceMock.travelAction.and.returnValue(of([mockTravelAction]));
    serviceMock.timeTable.and.returnValue(of({ connections: [] }));

    viewModel = new HomeViewModel(serviceMock);
  });

  describe('getLongestDuration', () => {
      it('should return 0 for empty connections', () => {
          expect(viewModel.getLongestDuration([])).toBe(0);
      });

      it('should return 0 if all durations are null/undefined/0', () => {
          const connections: IConnection[] = [
              { duration: 0 } as IConnection,
              { duration: null } as any,
              { duration: undefined } as any
          ];
          expect(viewModel.getLongestDuration(connections)).toBe(0);
      });

      it('should return correct max duration', () => {
          const connections: IConnection[] = [
              { duration: 10 } as IConnection,
              { duration: 5 } as IConnection,
              { duration: 20 } as IConnection
          ];
          expect(viewModel.getLongestDuration(connections)).toBe(20);
      });

      it('should ignore falsy durations when calculating max', () => {
          const connections: IConnection[] = [
              { duration: 10 } as IConnection,
              { duration: 0 } as IConnection,
              { duration: null } as any
          ];
          expect(viewModel.getLongestDuration(connections)).toBe(10);
      });
  });
});
