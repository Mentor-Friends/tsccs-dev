import { CreateTheConceptApi } from "../../Api/Create/CreateTheConceptApi";
import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { ReservedIds } from "../../DataStructures/ReservedIds";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/indexdblocal";

export default async function CreateTheConceptLocal(referent:string, userId:number, categoryId:number, categoryUserId:number,
typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number){

var id = Math.floor(Math.random() * 100000000);
var isNew: boolean = true;
var concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
    securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew);
concept.isTemp = true;
LocalConceptsData.AddConcept(concept);
console.log("adding this concept to local");
console.log(concept);
storeToDatabase("localconcept",concept);
return concept;

}