import { LConcept } from "./LConcept";
export declare class LConnection {
    id: number;
    ghostId: number;
    OfTheConceptId: number;
    ToTheConceptId: number;
    ofTheConceptId: number;
    toTheConceptId: number;
    entryTimeStamp: Date;
    terminationDateTime: Date;
    accessId: number;
    typeId: number;
    orderId: number;
    localSyncTime: Date;
    isTemp: boolean;
    typeCharacter: string;
    type: LConcept;
    constructor(id: number, ofTheConceptId: number, toTheConceptId: number, typeId: number, orderId: number, accessId: number);
}
