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
var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
    securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew);
concept.isTemp = false;
SyncData.AddConcept(concept);
return concept;

}

export  async function CreateTheConceptTemporary(referent:string, userId:number, categoryId:number, categoryUserId:number,
    typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
    accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number){
    
    var id = await ReservedIds.getId();
    var isNew: boolean = true;
    var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
        securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew);
    concept.isTemp = true;
    return concept;
    
}

export  async function CreateTheConceptImmediate(referent:string, userId:number, categoryId:number, categoryUserId:number,
    typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
    accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number){
    
    var id = await ReservedIds.getId();
    var isNew: boolean = false;
    var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
        securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew);
    ConceptsData.AddConcept(concept);
    
    CreateTheConceptApi([concept]);
    //SyncData.AddConcept(concept);
    return concept;
    
}