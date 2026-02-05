import { ConnectionViewModel } from './connection.viewmodel';
import { Connection } from 'src/app/models/timetable/connection.model';
import { ConnectionSection, IConnectionSection } from 'src/app/models/timetable/section.model';
import { IConnectionStation } from 'src/app/models/timetable/connectionstation.model';

describe('ConnectionViewModel', () => {
  const createSection = (type: string, toName: string): ConnectionSection => {
    return new ConnectionSection({
      type: type,
      to: { name: toName } as IConnectionStation
    } as IConnectionSection);
  };

  const createConnection = (sections: ConnectionSection[]): Connection => {
    return new Connection({
      sections: sections
    } as any);
  };

  it('should return empty string if sections are empty', () => {
    const vm = new ConnectionViewModel(createConnection([]), 0);
    expect(vm.sectionChangeName()).toBe('');
  });

  it('should return empty string if only one section', () => {
    // One section means it's the last one, so it should be skipped.
    const sections = [createSection('JNY', 'Station A')];
    const vm = new ConnectionViewModel(createConnection(sections), 0);
    expect(vm.sectionChangeName()).toBe('');
  });

  it('should return correct change name for two sections', () => {
    const sections = [
      createSection('JNY', 'Station A'),
      createSection('JNY', 'Station B')
    ];
    // First section 'Station A' (to), second is last.
    const vm = new ConnectionViewModel(createConnection(sections), 0);
    expect(vm.sectionChangeName()).toBe('Station A');
  });

  it('should filter out walk sections', () => {
    const sections = [
      createSection('WALK', 'Station A'),
      createSection('JNY', 'Station B'),
      createSection('JNY', 'Station C')
    ];
    // [0] WALK -> skip
    // [1] JNY -> Station B
    // [2] JNY -> Last -> skip
    // Result: Station B
    const vm = new ConnectionViewModel(createConnection(sections), 0);
    expect(vm.sectionChangeName()).toBe('Station B');
  });

  it('should join multiple changes with comma', () => {
    const sections = [
      createSection('JNY', 'Station A'),
      createSection('JNY', 'Station B'),
      createSection('JNY', 'Station C')
    ];
    // [0] -> Station A
    // [1] -> Station B
    // [2] -> Last
    // Result: Station A, Station B
    const vm = new ConnectionViewModel(createConnection(sections), 0);
    expect(vm.sectionChangeName()).toBe('Station A, Station B');
  });

  it('should handle null to stations gracefully', () => {
     const sections = [
      new ConnectionSection({ type: 'JNY', to: null } as any),
      createSection('JNY', 'Station B')
    ];
    const vm = new ConnectionViewModel(createConnection(sections), 0);
    // [0] -> ''
    // [1] -> Last
    expect(vm.sectionChangeName()).toBe('');
  });
});
