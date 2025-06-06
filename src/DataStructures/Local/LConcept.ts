import { BaseUrl } from "../BaseUrl";
import { Concept } from "../Concept";

export  class LConcept{
    id: number;
    structureType: string = "lconcept";
    ghostId: number;
    userId: number;
    typeId: number;
    categoryId: number;
    accessId: number;
    characterValue: string;
    typeCharacter: string;
    entryTimeStamp: Date;
    referentId: number;
    updatedTimeStamp:Date;
    type: LConcept | null | void | Concept;
    isNew: boolean;
    isComposition: boolean = false;
    isTemp: boolean = false;
    isSynced : boolean = false;
    // applicationId: number = BaseUrl.BASE_RANDOMIZER;
    applicationId: number = BaseUrl.getRandomizer();


    constructor(id: number, userId: number, typeId:number, categoryId:number,accessId: number, characterValue:string, typeCharacter:string,
         isNew:boolean=false, entryTimeStamp: Date, updatedTimeStamp:Date, referentId: number){
        this.id = id;
        this.userId = userId;
        this.typeId  = typeId;
        this.ghostId = id;
        this.categoryId = categoryId;
        this.characterValue = characterValue;
        this.accessId = accessId;
        this.type = null;
        this.isNew = isNew;
        this.typeCharacter = typeCharacter;
        this.entryTimeStamp = entryTimeStamp;
        this.updatedTimeStamp = updatedTimeStamp;
        this.isSynced = false;
        this.referentId = referentId;
       // ConceptsData.AddConcept(this);
    }

    getType(){
        console.log(this.typeId);
    }

    









}