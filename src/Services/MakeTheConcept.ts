import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { Concept } from "../DataStructures/Concept";
import { ReservedIds } from "../DataStructures/ReservedIds";
import CreateTheConcept from "./CreateTheConcept";

export default async function MakeTheConcept(referent:string, userId:number, categoryId:number, categoryUserId:number,
typeId:number, typeUserId:number,referentId:number, referentUserId:number,securityId:number, securityUserId:number,
accessId:number, accessUserId:number, sessionInformationId:number, sessionInformationUserId:number){

    var conceptString = await GetConceptByCharacterAndType(referent, typeId);
    var concept = conceptString as Concept;

    if(concept.id == 0){
       conceptString = await  CreateTheConcept(referent,userId,categoryId,categoryUserId,typeId, typeUserId, referentId, referentUserId, securityId,
            securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId);

        concept = conceptString as Concept;
    }

    return concept;


}