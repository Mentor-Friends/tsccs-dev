import { GetConceptByCharacterAndType } from "../Api/GetConceptByCharacterAndType";
import { Concept } from "../DataStructures/Concept";
import { ReservedIds } from "../DataStructures/ReservedIds";
import CreateTheConcept from "./CreateTheConcept";

export default async function MakeTheConcept(referent:string, userId:number, categoryId:number,
typeId:number, referentId:number,
accessId:number, typeCharacter:string){

    var conceptString = await GetConceptByCharacterAndType(referent, typeId);
    var concept = conceptString as Concept;

    if(concept.id == 0){

       conceptString = await  CreateTheConcept(referent,userId,categoryId,typeId, referentId, accessId, typeCharacter);

        concept = conceptString as Concept;
    }

    return concept;


}