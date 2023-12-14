import { CreateTheConceptApi } from "../Api/Create/CreateTheConceptApi";
import { Concept } from "../DataStructures/Concept";
import { ReservedIds } from "../DataStructures/ReservedIds";
import { SyncData } from "../DataStructures/SyncData";

export default async function CreateTheConcept(referent:string, userId:number, categoryId:number, categoryUserId:number,
typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number){

var id = await ReservedIds.getId();
var isNew: boolean = true;
var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
    securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew);
concept.isTemp = true;
console.log(concept, "adding this to concept");
SyncData.AddConcept(concept);
return concept;

}