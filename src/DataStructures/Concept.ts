import { ConceptsData } from "./ConceptData";

export  class Concept{
    x: number;
    y: number;
    id: number;
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
    sessionId: number;
    sessionUserId: number;
    referent: number;
    type: Concept | null;
    isNew: boolean;


    constructor(id: number, userId: number, typeId:number, typeUserId:number, categoryId:number, categoryUserId:number,
             referentId:number, referentUserId:number, characterValue:string,
            securityId:number, securityUserId:number, accessId:number, accessUserId:number, sessionId:number,
             sessionUserId:number, isNew:boolean=false){
        this.id = id;
        this.userId = userId;
        this.typeId  = typeId;
        this.typeUserId = typeUserId;
        this.categoryId = categoryId;
        this.categoryUserId = categoryUserId;
        this.referentId = referentId;
        this.referent = referentId;
        this.referentUserId = referentUserId;
        this.characterValue = characterValue;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.x = 0;
        this.y = 0;
        this.type = null;
        this.isNew = isNew;
        ConceptsData.AddConcept(this);
    }

    getType(){
        console.log(this.typeId);
    }

    









}