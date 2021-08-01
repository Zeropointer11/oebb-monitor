
export class StationSearchOptions {
    constructor(
        public results : number
    ){}
}

export class JourneySearchOptions {
    constructor(
        public when : Date = new Date(),
        public departureAfter : Date = new Date(),
        public results? : number,
        public interval? : number,
        public transfers? : number,
        public prices : boolean = true
    ){}
}