import { CreateDefaultConcept } from "../Services/CreateDefaultConcept";
import { Concept } from "./Concept";
import { ConnectionData } from "./ConnectionData";

export class Connection{
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
    isTemp:boolean = false;
    toUpdate:boolean = false;
    type: Concept = CreateDefaultConcept();

    constructor(id: number = 0, ofTheConceptId: number, toTheConceptId: number, ofTheConceptUserId: number, toTheConceptUserId: number,
        userId: number, typeId: number, typeUserId: number, orderId: number, orderUserId: number, securityId: number, securityUserId: number,
        accessId: number, accessUserId: number, sessionInformationId: number, sessionInformationUserId: number){
            this.id = id;
            this.OfTheConceptId = ofTheConceptId;
            this.ToTheConceptId = toTheConceptId;
            this.ofTheConceptId = ofTheConceptId;
            this.toTheConceptId = toTheConceptId;
            this.OfTheConceptUserId = ofTheConceptUserId;
            this.ToTheConceptUserId = toTheConceptUserId;
            this.userId = userId;
            this.typeId = typeId;
            this.ghostId = id;
            this.typeUserId = typeUserId;
            this.orderId = orderId;
            this.orderUserId = orderUserId;
            this.securityId = securityId;
            this.securityUserId = securityUserId;
            this.accessId = accessId;
            this.accessUserId = accessUserId;
            this.sessionInformationId = sessionInformationId;
            this.sessionInformationUserId = sessionInformationUserId;
            this.entryTimeStamp = new Date();
            this.terminationDateTime  = new Date();
            this.localSyncTime = new Date();
        }


}