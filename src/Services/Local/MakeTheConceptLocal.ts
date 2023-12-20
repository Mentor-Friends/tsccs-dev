import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import CreateTheConceptLocal from "./CreateTheConceptLocal";

export default async function MakeTheConceptLocal(referent:string, userId:number, categoryId:number, categoryUserId:number,
typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number){

    var conceptString = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent,typeId);
    var concept = conceptString as Concept;

    if(concept.id == 0){

       conceptString = await  CreateTheConceptLocal(referent,userId,categoryId,categoryUserId,typeId, typeUserId, referentId, referentUserId, securityId,
            securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);

        concept = conceptString as Concept;
    }

    return concept;


}