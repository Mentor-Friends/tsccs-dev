import { GetConceptByCharacterValue } from "../Api/GetConceptByCharacterValue";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import { Concept } from "../DataStructures/Concept";
import { ConceptsData } from "../DataStructures/ConceptData";
import { UpdatePackageLogWithError } from "./Common/ErrorPosting";

export default async function GetConceptByCharacter(characterValue: string){
    const logData : any = Logger.logfunction("GetConceptByCharacter", arguments);
    if (serviceWorker) {
        logData.serviceWorker = true;
        try {
            const res: any = await sendMessage('GetConceptByCharacter', {characterValue})
            Logger.logUpdate(logData); 
            return res.data
        } catch (error ) {
            console.error('GetConceptByCharacter sw error: ', error)
            UpdatePackageLogWithError(logData, 'GetConceptByCharacter', error);
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
    Logger.logUpdate(logData);
    return concept;
}

export  async function GetConceptByCharacterUpdated(characterValue: string){
    const logData : any = Logger.logfunction("GetConceptByCharacterUpdated", arguments);
    if (serviceWorker) {
        logData.serviceWorker = true;
        try {
            const res: any = await sendMessage('GetConceptByCharacterUpdated', {characterValue})
            Logger.logUpdate(logData);
            return res.data
        } catch (error) {
            console.error('GetConceptByCharacterUpdated error sw: ', error)
            UpdatePackageLogWithError(logData, 'GetConceptByCharacterUpdated', error);
            handleServiceWorkerException(error)
        }
    }
    let concept = await ConceptsData.GetConceptByCharacter(characterValue);
    let literalCharacter = `${characterValue}`;
    if((concept == null || concept?.id == 0) && literalCharacter){
        await GetConceptByCharacterValue(characterValue);
        concept = await ConceptsData.GetConceptByCharacter(characterValue);
    }
    Logger.logUpdate(logData)
    return concept;
}