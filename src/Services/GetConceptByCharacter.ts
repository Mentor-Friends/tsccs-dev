import { GetConceptByCharacterValue } from "../Api/GetConceptByCharacterValue";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";

export default async function GetConceptByCharacter(characterValue: string){
    var concept = ConceptsData.GetConceptByCharacter(characterValue);
    if(concept == null && characterValue){
       var conceptString = await GetConceptByCharacterValue(characterValue);
       concept = conceptString as Concept;
    }
    return concept;
}