import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OebbApiService } from './oebb-api.service';


describe('OebbApiService', () => {
  let service: OebbApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OebbApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return value from Promise', () => {
    service.searchStation("Wien")
    .subscribe(result => {
      console.log(result);
      
    })
  });
});
