import { GetConceptByCharacterValue } from "../Api/GetConceptByCharacterValue";
import { sendMessage, serviceWorker } from "../app";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";

export default async function GetConceptByCharacter(characterValue: string){
    if (serviceWorker) {
        const res: any = await sendMessage('GetConceptByCharacter', {characterValue})
        // console.log('data received from sw', res)
        return res.data
      }
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
    if (serviceWorker) {
        const res: any = await sendMessage('GetConceptByCharacterUpdated', {characterValue})
        // console.log('data received from sw', res)
        return res.data
      }
    let concept = await ConceptsData.GetConceptByCharacter(characterValue);
    let literalCharacter = `${characterValue}`;
    if((concept == null || concept?.id == 0) && literalCharacter){
        await GetConceptByCharacterValue(characterValue);
        concept = await ConceptsData.GetConceptByCharacter(characterValue);
    }
    return concept;
}