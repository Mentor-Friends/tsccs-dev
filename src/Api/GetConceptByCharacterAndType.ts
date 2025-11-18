import { ConceptsData } from "./../DataStructures/ConceptData";
import { Concept } from "./../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import { AddTypeConcept } from "../Services/GetTheConcept";

/**
 * Retrieves a concept by character value and type ID.
 * Checks local cache first, then fetches from backend if not found.
 *
 * **Complex Logic**: Checks local ConceptsData cache, falls back to API,
 * supports service worker for offline capability.
 *
 * @param characterValue - Character value string to search for
 * @param typeId - Type ID to filter by
 * @returns Concept object or null if not found
 *
 * @example
 * const concept = await GetConceptByCharacterAndType("the_person", 5);
 */
export async function GetConceptByCharacterAndType(characterValue: string, typeId: number){
  const logData : any = Logger.logfunction("GetConceptByCharacterAndType", arguments);
  try{
    if (serviceWorker) {
      try {
        const res: any = await sendMessage('GetConceptByCharacterAndType', {characterValue, typeId})
        return res.data
      } catch (error) {
        console.error('GetConceptByCharacterAndType sw error: ', error);
        handleServiceWorkerException(error);
      }
    }
      let concept:Concept = await ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue,typeId);
      if(concept == null || concept.id == 0){
        var json = {
          'character_value': `${characterValue}`,
          'type_id': typeId 
        };
        var toSendJson = JSON.stringify(json);
          var header = GetRequestHeader("application/json");
          const response = await fetch(BaseUrl.GetConceptByCharacterAndTypeUrl(),{
              method: 'POST',
              headers: header,
              body: toSendJson,
          });
          if(response.ok){
            let conceptString = await response.json() ;
            concept = conceptString as Concept;
            AddTypeConcept(concept).then((output)=>{
                ConceptsData.AddConcept(concept);
            })
          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            HandleHttpError(response);
            console.log("This is the concept by type and character error", response.status);

          }

      }
      Logger.logUpdate(logData)
      return concept;

    }
    catch (error) {
        if (error instanceof Error) {
          console.log(' This is the concept by type and character error message: ', error.message);
        } else {
          console.log(' This is the concept by type and character unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetConceptByCharacterAndTypeUrl());
        UpdatePackageLogWithError(logData, 'GetConceptByCharacterAndType', error);
      }
}