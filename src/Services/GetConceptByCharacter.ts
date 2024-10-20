import { GetConceptByCharacterValue } from "../Api/GetConceptByCharacterValue";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";

export default async function GetConceptByCharacter(characterValue: string){
    let concept = await ConceptsData.GetConceptByCharacter(characterValue);
    let literalCharacter = `${characterValue}`;
    if((concept == null || concept?.id == 0) && literalCharacter){
        await GetConceptByCharacterValue(characterValue);
        concept = await ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue,51);
        if(concept.id == 0){
            concept = await ConceptsData.GetConceptByCharacter(characterValue);
        }
    }
    return concept;
}

export  async function GetConceptByCharacterUpdated(characterValue: string){
    let concept = await ConceptsData.GetConceptByCharacter(characterValue);
    let literalCharacter = `${characterValue}`;
    if((concept == null || concept?.id == 0) && literalCharacter){
        await GetConceptByCharacterValue(characterValue);
        concept = await ConceptsData.GetConceptByCharacter(characterValue);
    }
    return concept;
}