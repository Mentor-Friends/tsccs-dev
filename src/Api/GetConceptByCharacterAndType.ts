import { ConceptsData } from "./../DataStructures/ConceptData";
import { Concept } from "./../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";

export async function GetConceptByCharacterAndType(characterValue: string, typeId: number){
  Logger.logfunction(GetConceptByCharacterAndType, arguments);
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
          var header = GetRequestHeader();
          const response = await fetch(BaseUrl.GetConceptByCharacterAndTypeUrl(),{
              method: 'POST',
              headers: header,
              body: toSendJson,
          });
          if(response.ok){
            let conceptString = await response.json() ;
            concept = conceptString as Concept;
            ConceptsData.AddConcept(concept);
          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            HandleHttpError(response);
            console.log("This is the concept by type and character error", response.status);

          }

      }
      return concept;

    }
    catch (error) {
        if (error instanceof Error) {
          console.log(' This is the concept by type and character error message: ', error.message);
        } else {
          console.log(' This is the concept by type and character unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.GetConceptByCharacterAndTypeUrl());
      }
}