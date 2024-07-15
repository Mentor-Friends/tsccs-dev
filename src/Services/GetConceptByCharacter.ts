import { GetConceptByCharacterValue } from "../Api/GetConceptByCharacterValue";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";

export default async function GetConceptByCharacter(characterValue: string){
    var concept = await ConceptsData.GetConceptByCharacter(characterValue);
    var literalCharacter = `${characterValue}`;
    if((concept == null || concept?.id == 0) && literalCharacter){
        await GetConceptByCharacterValue(characterValue);
        concept = await ConceptsData.GetConceptByCharacter(characterValue);
    }
    return concept;
}

export  async function GetConceptByCharacterUpdated(characterValue: string){
    var concept = await ConceptsData.GetConceptByCharacter(characterValue);
    var literalCharacter = `${characterValue}`;
    if((concept == null || concept?.id == 0) && literalCharacter){
        await GetConceptByCharacterValue(characterValue);
        concept = await ConceptsData.GetConceptByCharacter(characterValue);
    }
    return concept;
}