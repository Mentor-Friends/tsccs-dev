import { CreateDefaultLConcept } from "../../Services/Local/CreateDefaultLConcept";
import { Concept } from "../Concept";
import { LConcept } from "./LConcept";

export class LConnection{
    id: number;
    ghostId: number;
    ofTheConceptId: number;
    toTheConceptId: number;
    entryTimeStamp: Date;
    terminationDateTime: Date;
    accessId: number;
    typeId: number;
    orderId: number;
    typeCharacter: string;
    localSyncTime: Date;
    isTemp:boolean = false;
    type: LConcept = CreateDefaultLConcept();

    constructor(id: number = 0, ofTheConceptId: number, toTheConceptId: number,
         typeId: number, orderId: number,
        accessId: number){
            this.id = id;
            this.ofTheConceptId = ofTheConceptId;
            this.toTheConceptId = toTheConceptId;
            this.typeId = typeId;
            this.ghostId = id;
            this.orderId = orderId;
            this.typeCharacter = "";
            this.accessId = accessId;
            this.entryTimeStamp = new Date();
            this.terminationDateTime  = new Date();
            this.localSyncTime = new Date();
        }


}