import { ConceptsData } from "./ConceptData";

export  class Concept{
    x: number;
    y: number;
    id: number;
    ghostId: number;
    userId: number;
    typeId: number;
    typeUserId: number;
    categoryId: number;
    categoryUserId: number;
    referentId: number;
    referentUserId: number;
    characterValue: string;
    securityId: number;
    securityUserId: number;
    accessId: number;
    accessUserId: number;
    sessionInformationId: number;
    sessionInformationUserId: number;
    entryTimeStamp: Date;
    updatedTimeStamp:Date;
    referent: number;
    type: Concept | null | void;
    isNew: boolean;
    isTemp: boolean = false;


    constructor(id: number, userId: number, typeId:number, typeUserId:number, categoryId:number, categoryUserId:number,
             referentId:number, referentUserId:number, characterValue:string,
            securityId:number, securityUserId:number, accessId:number, accessUserId:number, sessionId:number,
             sessionUserId:number, isNew:boolean=false, entryTimeStamp: Date, updatedTimeStamp:Date){
        this.id = id;
        this.userId = userId;
        this.typeId  = typeId;
        this.typeUserId = typeUserId;
        this.ghostId = id;
        this.categoryId = categoryId;
        this.categoryUserId = categoryUserId;
        this.referentId = referentId;
        this.referent = referentId;
        this.referentUserId = referentUserId;
        this.characterValue = `${characterValue}`;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionInformationId = sessionId;
        this.sessionInformationUserId = sessionUserId;
        this.x = 0;
        this.y = 0;
        this.type = null;
        this.isNew = isNew;
        this.entryTimeStamp = entryTimeStamp;
        this.updatedTimeStamp = updatedTimeStamp;
       // ConceptsData.AddConcept(this);
    }

    getType(){
        console.log(this.typeId);
    }

    









}