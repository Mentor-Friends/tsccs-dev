import { BaseUrl } from "../app";
import { ConceptsData } from "./ConceptData";

export  class Concept{
    id: number;
    ghostId: number;
    count: number = 0;
    userId: number;
    typeId: number;
    categoryId: number;
    accessId: number;
    characterValue: string;
    typeCharacter: string = "";
    entryTimeStamp: Date;
    referentId: number;
    updatedTimeStamp:Date;
    type:  null | void | Concept;
    isNew: boolean;
    isComposition: boolean = false;
    isTemp: boolean = false;
    isSynced : boolean = false;
    applicationId: number = BaseUrl.BASE_RANDOMIZER;
    x:number = 0;
    y: number = 0;


    constructor(id: number, userId: number, typeId:number,  categoryId:number,
             referentId:number,  characterValue:string,
            accessId:number, isNew:boolean=false, entryTimeStamp: Date, updatedTimeStamp:Date, typeCharacter:string){
        this.id = id;
        this.userId = userId;
        this.typeId  = typeId;
        this.ghostId = id;
        this.categoryId = categoryId;
        this.referentId = referentId;
        this.characterValue = `${characterValue}`;
        this.accessId = accessId;
        this.typeCharacter = typeCharacter;
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