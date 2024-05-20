import { Concept } from "../Concept";

export  class LConcept{
    id: number;
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
    isTemp: boolean = false;


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
       // ConceptsData.AddConcept(this);
    }

    getType(){
        console.log(this.typeId);
    }

    









}