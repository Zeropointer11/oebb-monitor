import { TestBed } from '@angular/core/testing';

import { OebbApiService } from './oebb-api.service';


describe('OebbApiService', () => {
  let service: OebbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OebbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return value from Promise', () => {
    service.searchStations("Wien", { results: 1 })
    .then(result => {
      console.log(result);
      
    })
  });  
});
