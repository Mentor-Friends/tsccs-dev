import { CreateTheConceptApi } from "../../Api/Create/CreateTheConceptApi";
import { LConcept } from "../../DataStructures/Local/LConcept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { ReservedIds } from "../../DataStructures/ReservedIds";
import { SyncData } from "../../DataStructures/SyncData";
import { storeToDatabase } from "../../Database/indexdblocal";
import { LocalSyncData } from "../../app";

export default async function CreateTheConceptLocal(referent:string, typecharacter:string, userId:number, categoryId:number, 
typeId:number, 
accessId:number, isComposition: boolean = false){

var id = Math.floor(Math.random() * 100000000);
var isNew: boolean = true;
let created_on:Date = new Date();
let updated_on:Date = new Date();

var concept = new LConcept(id,userId,typeId,categoryId,accessId, referent,typecharacter, isNew,created_on,updated_on);
concept.isTemp = true;
concept.isComposition = isComposition;
LocalConceptsData.AddConcept(concept);
storeToDatabase("localconcept",concept);
return concept;

}