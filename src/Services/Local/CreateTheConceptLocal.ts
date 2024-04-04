import { CreateTheConceptApi } from "../../Api/Create/CreateTheConceptApi";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { ReservedIds } from "../../DataStructures/ReservedIds";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/NoIndexDb";

export default async function CreateTheConceptLocal(referent:string, userId:number, categoryId:number, categoryUserId:number,
typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number){

var id = Math.floor(Math.random() * 100000000);
var isNew: boolean = true;
let created_on:Date = new Date();
let updated_on:Date = new Date();
var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
    securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on,updated_on);
concept.isTemp = true;
LocalConceptsData.AddConcept(concept);
storeToDatabase("localconcept",concept);
return concept;

}