export class Entrypoint {
  public id : string;
  public registrationRequired : boolean;
  public chooseConnection: string;
  public dateMandatory: string;
  public defaultQuantity: number;
  public ageStatement: string;
  public passengerMandatory: boolean;
  public relationMandatory: boolean;
  public title: [string : string];
  public validTo : Date;
  public filter: any;
  public errorText: any;
  public timerangesIncluded: any | null;

  constructor(entrypointResponse : any) {
    this.id = entrypointResponse.id;
    this.registrationRequired = entrypointResponse.registrationRequired;
    this.chooseConnection = entrypointResponse.chooseConnection;
    this.dateMandatory = entrypointResponse.dateMandatory;
    this.defaultQuantity = entrypointResponse.defaultQuantity;
    this.ageStatement = entrypointResponse.ageStatement;
    this.passengerMandatory = entrypointResponse.passengerMandatory;
    this.relationMandatory = entrypointResponse.relationMandatory;
    this.title = entrypointResponse.title;
    this.validTo = new Date(entrypointResponse.validTo);
    this.filter = entrypointResponse.filter;
    this.errorText = entrypointResponse.errorText;
    this.timerangesIncluded = entrypointResponse.timerangesIncluded;
  }
}
