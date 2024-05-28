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
    updatedTimeStamp:Date;
    type: LConcept | null | void | Concept;
    isNew: boolean;
    isComposition: boolean = false;
    isTemp: boolean = false;
    isSynced : boolean = false;


    constructor(id: number, userId: number, typeId:number, categoryId:number,accessId: number, characterValue:string, typeCharacter:string,
         isNew:boolean=false, entryTimeStamp: Date, updatedTimeStamp:Date){
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
    }

    getType(){
        console.log(this.typeId);
    }

    









}