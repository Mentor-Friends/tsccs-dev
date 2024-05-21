import { CreateDefaultLConcept } from "../../Services/Local/CreateDefaultLConcept";
import { LConcept } from "./LConcept";
import { LocalConnectionData } from "./LocalConnectionData";

export class LConnection{
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
    isTemp:boolean = false;
    type: LConcept = CreateDefaultLConcept();

    constructor(id: number, ofTheConceptId: number, toTheConceptId: number,
         typeId: number, orderId: number,
        accessId: number){
            this.id = id;
            this.OfTheConceptId = ofTheConceptId;
            this.ToTheConceptId = toTheConceptId;
            this.ofTheConceptId = ofTheConceptId;
            this.toTheConceptId = toTheConceptId;
            this.typeId = typeId;
            this.ghostId = id;
            this.orderId = orderId;
            this.accessId = accessId;
            this.entryTimeStamp = new Date();
            this.terminationDateTime  = new Date();
            this.localSyncTime = new Date();
        }


}