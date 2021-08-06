export class LoginResponse {

  public accessToken: string;
  public token : LoginToken;
  public supportId: string;
  public cashId : string;
  public orgUnit: number;
  public legacyUserMigrated: boolean=false;
  public userId: string;
  public personId: string;
  public customerId: string;
  public realm: string;
  public sessionId: string;
  public sessionTimeout: number;
  public sessionVersion: string;
  public sessionCreatedAt: Date;
  public xffxIP: string;
  public showTermsAndConditions : boolean;
  public activeSmartJourneyTracking: string;


  constructor(loginResponse: any) {
    this.accessToken = loginResponse.accessToken;
    this.token = new LoginToken(loginResponse.token);
    this.supportId = loginResponse.supportId;
    this.cashId = loginResponse.cashId;
    this.orgUnit = loginResponse.orgUnit;
    this.legacyUserMigrated = loginResponse.legacyUserMigrated;
    this.userId = loginResponse.userId;
    this.personId = loginResponse.personId;
    this.customerId = loginResponse.customerId;
    this.realm = loginResponse.realm;
    this.sessionId = loginResponse.sessionId;
    this.sessionTimeout = loginResponse.sessionTimeout;
    this.sessionVersion = loginResponse.sessionVersion;
    this.sessionCreatedAt = loginResponse.sessionCreatedAt;
    this.xffxIP = loginResponse.xffxIP;
    this.showTermsAndConditions = loginResponse.showTermsAndConditions;
    this.activeSmartJourneyTracking = loginResponse.activeSmartJourneyTracking;
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

export class LoginToken {

  public accessToken: string;
  public refreshToken: string;

  constructor(tokenResponse : any) {
    this.accessToken = tokenResponse.accessToken;
    this.refreshToken = tokenResponse.refreshToken;
  }
}
