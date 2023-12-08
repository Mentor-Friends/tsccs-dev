import { GetConceptByCharacterValue } from "../Api/GetConceptByCharacterValue";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";

export default async function GetConceptByCharacter(characterValue: string){
    var concept = ConceptsData.GetConceptByCharacter(characterValue);
    if(concept == null && characterValue){
       await GetConceptByCharacterValue(characterValue);
        concept = ConceptsData.GetConceptByCharacter(characterValue);
    }
    return concept;
}