import { Concept } from "./Concept";
export declare class Connection {
    id: number;
    userId: number;
    ghostId: number;
    OfTheConceptId: number;
    ToTheConceptId: number;
    ofTheConceptId: number;
    toTheConceptId: number;
    OfTheConceptUserId: number;
    ToTheConceptUserId: number;
    entryTimeStamp: Date;
    terminationDateTime: Date;
    typeId: number;
    typeUserId: number;
    orderId: number;
    orderUserId: number;
    securityId: number;
    securityUserId: number;
    accessId: number;
    accessUserId: number;
    sessionInformationId: number;
    sessionInformationUserId: number;
    localSyncTime: Date;
    isTemp: boolean;
    type: Concept;
    constructor(id: number | undefined, ofTheConceptId: number, toTheConceptId: number, ofTheConceptUserId: number, toTheConceptUserId: number, userId: number, typeId: number, typeUserId: number, orderId: number, orderUserId: number, securityId: number, securityUserId: number, accessId: number, accessUserId: number, sessionInformationId: number, sessionInformationUserId: number);
}
