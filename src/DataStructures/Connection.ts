import { CreateDefaultConcept } from "../Services/CreateDefaultConcept";
import { BaseUrl } from "./BaseUrl";
import { Concept } from "./Concept";
import { ConnectionData } from "./ConnectionData";

export class Connection{
    id: number;
    count: number = 0;
    userId: number;
    ghostId: number;
    ofTheConceptId: number;
    toTheConceptId: number;
    entryTimeStamp: Date;
    terminationDateTime: Date;
    typeId: number;
    orderId: number;
    accessId: number;
    typeCharacter: string;
    localSyncTime: Date;
    isTemp:boolean = false;
    toUpdate:boolean = false;
    // applicationId: number = BaseUrl.BASE_RANDOMIZER;
    applicationId: number = BaseUrl.getRandomizer();
    type: Concept = CreateDefaultConcept();
    ofConcept: Concept = CreateDefaultConcept();
    toConcept: Concept = CreateDefaultConcept();

    constructor(id: number = 0, ofTheConceptId: number, toTheConceptId: number,
        userId: number, typeId: number,  orderId: number,
        accessId: number){
            this.id = id;
            this.ofTheConceptId = ofTheConceptId;
            this.toTheConceptId = toTheConceptId;
            this.userId = userId;
            this.typeId = typeId;
            this.ghostId = id;
            this.orderId = orderId;
            this.accessId = accessId;
            this.entryTimeStamp = new Date();
            this.terminationDateTime  = new Date();
            this.localSyncTime = new Date();
            this.typeCharacter = "";
        }


}