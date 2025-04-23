import { CreateTheConceptApi } from "../Api/Create/CreateTheConceptApi";
import { Concept } from "../DataStructures/Concept";
import { ReservedIds } from "../DataStructures/ReservedIds";
import { SyncData } from "../DataStructures/SyncData";
import { ConceptsData } from "../app";

export default async function CreateTheConcept(referent:string, userId:number, categoryId:number,
typeId:number,referentId:number,
accessId:number, typeCharacter:string){

let id = await ReservedIds.getId();
let isNew: boolean = true;
let created_on:Date = new Date();
let updated_on:Date = new Date();
// let concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
    // securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on,updated_on);
let concept = new Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);

    concept.isTemp = false;
SyncData.AddConcept(concept);
return concept;

}

export  async function CreateTheConceptTemporary(referent:string, userId:number, categoryId:number,
    typeId:number, referentId:number,
    accessId:number, typeCharacter:string){
    
    let id = await ReservedIds.getId();
    let isNew: boolean = true;
    let created_on:Date = new Date();
    let updated_on:Date = new Date();
    // let concept = new Concept(id,userId,typeId,typeUserId,categoryId,referentId, referent,
    //     accessId,isNew,created_on, updated_on);
    let concept = new Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);
    concept.isTemp = true;
    return concept;
    
}

export  async function CreateTheConceptImmediate(referent:string, userId:number, categoryId:number,
    typeId:number,referentId:number|null,
    accessId:number, typeCharacter:string){
    
    let id = await ReservedIds.getId();
    let isNew: boolean = false;
    let created_on:Date = new Date();
let updated_on:Date = new Date();
    // let concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
    //     securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on, updated_on);
    
    let concept = new Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);
    
    ConceptsData.AddConcept(concept);
    
    CreateTheConceptApi([concept]);
    //SyncData.AddConcept(concept);
    return concept;
    
}