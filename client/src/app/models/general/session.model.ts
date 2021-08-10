export interface AuthResponseInterface {

  accessToken: string,
  token : AuthToken,
  supportId: string,
  cashId : string,
  orgUnit: number,
  legacyUserMigrated: boolean,
  userId: string,
  personId: string,
  customerId: string,
  realm: string,
  sessionId: string,
  sessionTimeout: number,
  sessionVersion: string,
  sessionCreatedAt: Date,
  xffxIP: string,
  showTermsAndConditions : boolean,
  activeSmartJourneyTracking: string,
}

export class AuthResponse implements AuthResponseInterface {
  accessToken: string;
  token: AuthToken;
  supportId: string;
  cashId: string;
  orgUnit: number;
  legacyUserMigrated: boolean;
  userId: string;
  personId: string;
  customerId: string;
  realm: string;
  sessionId: string;
  sessionTimeout: number;
  sessionVersion: string;
  sessionCreatedAt: Date;
  xffxIP: string;
  showTermsAndConditions: boolean;
  activeSmartJourneyTracking: string;

  constructor(authResponse: AuthResponseInterface) {
    this.accessToken = authResponse.accessToken;
    this.token = new AuthToken(authResponse.token);
    this.supportId = authResponse.supportId;
    this.cashId = authResponse.cashId;
    this.orgUnit = authResponse.orgUnit;
    this.legacyUserMigrated = authResponse.legacyUserMigrated;
    this.userId = authResponse.userId;
    this.personId = authResponse.personId;
    this.customerId = authResponse.customerId;
    this.realm = authResponse.realm;
    this.sessionId = authResponse.sessionId;
    this.sessionTimeout = authResponse.sessionTimeout;
    this.sessionVersion = authResponse.sessionVersion;
    this.sessionCreatedAt = new Date(authResponse.sessionCreatedAt);
    this.xffxIP = authResponse.xffxIP;
    this.showTermsAndConditions = authResponse.showTermsAndConditions;
    this.activeSmartJourneyTracking = authResponse.activeSmartJourneyTracking;
  }

  getAccessToken(): string {
    if(this.token === null || this.token === undefined){
      return this.accessToken;
        }
        else if (this.token.accessToken !== null || this.token.accessToken !== undefined) {
            return this.token.accessToken;
        }
        else {
            return this.accessToken;
        }
    }

}

export interface AuthTokenInterface {
  accessToken: string,
  refreshToken: string
}

export class AuthToken implements AuthTokenInterface{
  accessToken: string;
  refreshToken: string;

  constructor(tokenResponse : AuthTokenInterface) {
    this.accessToken = tokenResponse.accessToken;
    this.refreshToken = tokenResponse.refreshToken;
  }

}
