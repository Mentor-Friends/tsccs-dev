import { CreateTheConceptApi } from "../Api/Create/CreateTheConceptApi";
import { Concept } from "../DataStructures/Concept";
import { ReservedIds } from "../DataStructures/ReservedIds";
import { SyncData } from "../DataStructures/SyncData";
import { ConceptsData } from "../app";

export default async function CreateTheConcept(referent:string, userId:number, categoryId:number, categoryUserId:number,
typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number){

var id = await ReservedIds.getId();
var isNew: boolean = true;
let created_on:Date = new Date();
let updated_on:Date = new Date();
var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
    securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on,updated_on);
concept.isTemp = false;
SyncData.AddConcept(concept);
return concept;

}

export  async function CreateTheConceptTemporary(referent:string, userId:number, categoryId:number, categoryUserId:number,
    typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
    accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number){
    
    var id = await ReservedIds.getId();
    var isNew: boolean = true;
    let created_on:Date = new Date();
    let updated_on:Date = new Date();
    var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
        securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on, updated_on);
    concept.isTemp = true;
    return concept;
    
}

export  async function CreateTheConceptImmediate(referent:string, userId:number, categoryId:number, categoryUserId:number,
    typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
    accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number){
    
    var id = await ReservedIds.getId();
    var isNew: boolean = false;
    let created_on:Date = new Date();
let updated_on:Date = new Date();
    var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
        securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on, updated_on);
    ConceptsData.AddConcept(concept);
    concept.updateRecursion = true;
    //CreateTheConceptApi([concept]);
    SyncData.AddConcept(concept);
    return concept;
    
}