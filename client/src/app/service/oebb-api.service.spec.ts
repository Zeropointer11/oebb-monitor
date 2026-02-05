import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { OebbApiService } from './oebb-api.service';
import { of } from 'rxjs';

describe('OebbApiService', () => {
  let service: OebbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          OebbApiService,
          { provide: HttpClient, useValue: { get: () => of([]), post: () => of([]) } }
      ]
    });
    service = TestBed.inject(OebbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
