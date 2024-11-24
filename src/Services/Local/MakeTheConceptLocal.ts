import { Concept } from "../../DataStructures/Concept";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import CreateTheConceptLocal from "./CreateTheConceptLocal";

export default async function MakeTheConceptLocal(referent:string, typeCharacter:string, userId:number, categoryId:number,
typeId:number){

    let conceptString = await LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent,typeId);
    let concept = conceptString as Concept;
    let accessId = 4;
    if(typeCharacter == "the"){
        categoryId = 1;
    }
    if(concept.id == 0){

       conceptString = await  CreateTheConceptLocal(referent,typeCharacter,userId,categoryId,typeId,accessId );
        concept = conceptString as Concept;
    }

    return concept;


}