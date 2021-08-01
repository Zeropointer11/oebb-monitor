import { Gps } from "./gps.model";

export class Station {
    constructor(
        public id: string,
        public name: string,
        public meta: boolean,
        public location: Gps
    ){}
}