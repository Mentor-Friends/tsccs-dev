import { GetConceptByCharacterValue } from "../Api/GetConceptByCharacterValue";
import { handleServiceWorkerException, sendMessage, serviceWorker } from "../app";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";

export default async function GetConceptByCharacter(characterValue: string){
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('GetConceptByCharacter', {characterValue})
            return res.data
        } catch (error ) {
            console.error('GetConceptByCharacter sw error: ', error)
            handleServiceWorkerException(error)
        }
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
        try {
            const res: any = await sendMessage('GetConceptByCharacterUpdated', {characterValue})
            return res.data
        } catch (error) {
            console.error('GetConceptByCharacterUpdated error sw: ', error)
            handleServiceWorkerException(error)
        }
    }
    let concept = await ConceptsData.GetConceptByCharacter(characterValue);
    let literalCharacter = `${characterValue}`;
    if((concept == null || concept?.id == 0) && literalCharacter){
        await GetConceptByCharacterValue(characterValue);
        concept = await ConceptsData.GetConceptByCharacter(characterValue);
    }
    return concept;
}