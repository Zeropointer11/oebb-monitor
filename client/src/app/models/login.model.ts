export class LoginResponse {

    constructor(
        public accessToken: string,
        public token : LoginToken,
        public supportId: string,
        public cashId : string,
        public orgUnit: number,
        public legacyUserMigrated: boolean=false,
        public userId: string,
        public personId: string,
        public customerId: string,
        public realm: string,
        public sessionId: string,
        public sessionTimeout: number,
        public sessionVersion: string,
        public sessionCreatedAt: Date,
        public xffxIP: string,
        public showTermsAndConditions : boolean,
        public activeSmartJourneyTracking: string,
    ){}

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

    constructor(
        public accessToken: string,
        public refreshToken: string,
    ){}
}