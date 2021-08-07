import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StationSearchOptions, TravelActionRequest } from '../models/request.model';

import { Observable, of } from 'rxjs';
import { catchError, last, map, mergeMap, tap } from 'rxjs/operators';

import { LoginResponse } from '../models/login.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Station } from '../models/station.model';
import { environment } from 'src/environments/environment';
import { TravelAction, TravelActionResponse } from '../models/travelaction.model';



@Injectable({
  providedIn: 'root'
})
export class OebbApiService {
  private baseUrl = environment.baseURL;
  private lastLoginResponse? : LoginResponse;

  private requestHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Chanel' : 'inet',
  });

  constructor(
    private http : HttpClient,
    ) { }

  auth(): Observable<LoginResponse>  {
    if (this.isTokenExpired()) {
      return this.init();
    }
    else {
      return of(this.lastLoginResponse!)
    }
  }
  searchStation(query: string, opt?: StationSearchOptions) : Observable<Array<Station>> {
    if (query.length == 0) {
      throw new Error('missing or invalid `query` parameter')
    }
    const options = opt !== undefined ? opt: new StationSearchOptions(1)
    return this.auth().pipe(
      mergeMap(_ => this._searchStation(query, options))
    )
  }

  travelAction(request : TravelActionRequest) : Observable<Array<TravelAction>> {
    return this.auth().pipe(
      mergeMap(_ => this._travelAction(request))
    )
  }


  //region Private

  private init(): Observable<LoginResponse> {
    let url = `${this.baseUrl}/api/auth`
    return this.http.get(url,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(
      map(x => new LoginResponse(x)),
      tap((response : LoginResponse) => {
        this.lastLoginResponse = response;
        this.updateHeader();
      })
    )
  }

  private _searchStation(name: string, opt: StationSearchOptions) : Observable<Array<Station>> {
    let url = `${this.baseUrl}/api/station/search`
    return this.http.get<Array<Station>>(url, {
      params: {
        name: name,
        results: opt.results
      },
      headers: this.requestHeaders
    })
    .pipe(
      map(x => x.map(s => new Station(s))),
      tap(response => console.log('stationSearch:', response)
      )
    )
  }

  private _travelAction(request : TravelActionRequest) : Observable<Array<TravelAction>> {
    let url = `${this.baseUrl}/api/travelActions`
    return this.http.post<TravelActionResponse>(url, request, {
      headers: this.requestHeaders
    })
    .pipe(
      map(x => {
        return new TravelActionResponse(x).travelActions;
      })
    )
  }

  private isTokenExpired(): Boolean {
    if(this.lastLoginResponse !== null && this.lastLoginResponse !== undefined) {
      const token = this.lastLoginResponse.getAccessToken();
      const helper = new JwtHelperService();
      const isExpired = helper.isTokenExpired(token);
      console.log('isTokenExpired', isExpired);
      return isExpired;
      /*
      const { exp } = jwt.decode(token) as {
        exp: number;
      };
      const expirationDatetimeInSeconds = exp * 1000;
      return Date.now() >= expirationDatetimeInSeconds;
      */
      //return this.jwtHelper.isTokenExpired(this.lastLoginResponse.getAccessToken())
    }
    else {
      return true;
    }
  }

  private updateHeader() {
    if(this.lastLoginResponse !== null && this.lastLoginResponse !== undefined ) {
      this.requestHeaders = this.requestHeaders.set('AccessToken', this.lastLoginResponse.getAccessToken());
      this.requestHeaders = this.requestHeaders.set('x-ts-supportid', `WEB_${this.lastLoginResponse.supportId}`);
      this.requestHeaders = this.requestHeaders.set("session", this.lastLoginResponse.sessionId.replace('session:', ''));
    }
  }
}
