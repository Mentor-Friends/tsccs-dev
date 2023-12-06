import { ConnectionData } from "./ConnectionData";

export class Connection{
    id: number;
    userId: number;
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
            ConnectionData.AddConnection(this);
        }


}