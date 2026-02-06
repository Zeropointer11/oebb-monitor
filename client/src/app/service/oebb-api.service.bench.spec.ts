import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OebbApiService } from './oebb-api.service';
import { Station } from '../models/station/station.model';

describe('OebbApiService Benchmark', () => {
  let service: OebbApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(OebbApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // We want to verify no extra requests are made
    httpMock.verify();
  });

  it('should make multiple requests without caching (baseline)', () => {
    const query = 'Wien';
    const mockResponse = [new Station({ name: 'Wien Westbahnhof', id: '123' } as any)];

    // First call
    service.searchStation(query).subscribe(stations => {
      expect(stations.length).toBe(1);
    });

    // Expect an auth request (if auth logic triggers it) or just the search request.
    // Based on code: auth() checks isTokenExpired(). If expired/no token, it calls init().
    // init() makes a request to /api/auth.
    // _searchStation() makes a request to /api/station/search.

    // To simplify, let's assume auth might be triggered.
    // However, looking at the service, if lastLoginResponse is undefined, it calls init().
    // So we might see an auth request first.

    // Let's handle potential auth request.
    // The service implementation:
    // searchStation -> auth() -> (if expired) init() -> http.get('/api/auth')
    //                         -> (else) of(lastLoginResponse)
    // then mergeMap -> _searchStation -> http.get('/api/station/search')

    // In a fresh test, lastLoginResponse is undefined, so init() is called.

    // 1. Auth request
    const authReq = httpMock.expectOne(req => req.url.includes('/api/auth'));
    const validJwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    authReq.flush({
      accessToken: validJwt,
      token: { accessToken: validJwt, refreshToken: 'refresh' },
      supportId: '1',
      sessionId: 'session:1',
      cashId: 'cashId',
      orgUnit: 1,
      legacyUserMigrated: false,
      userId: 'user',
      personId: 'person',
      customerId: 'customer',
      realm: 'realm',
      sessionTimeout: 1000,
      sessionVersion: '1',
      sessionCreatedAt: new Date(),
      xffxIP: 'ip',
      showTermsAndConditions: false,
      activeSmartJourneyTracking: 'no'
    });

    // 2. Search request
    const searchReq1 = httpMock.expectOne(req => req.url.includes('/api/station/search') && req.params.get('name') === query);
    searchReq1.flush(mockResponse);

    // Second call
    service.searchStation(query).subscribe(stations => {
      expect(stations.length).toBe(1);
    });

    // We expect NO new request because it should be served from cache
    httpMock.expectNone(req => req.url.includes('/api/station/search') && req.params.get('name') === query);
  });
});
