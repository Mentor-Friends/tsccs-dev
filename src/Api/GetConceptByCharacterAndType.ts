import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptByCharacterAndTypeUrl } from './../Constants/ApiConstants';
import { Concept } from "./../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { GetConceptBulk } from "./GetConceptBulk";

const conceptCache = new Map<string, Promise<Concept>>();


export async function GetConceptByCharacterAndType(characterValue: string, typeId: number): Promise<Concept>{
  let concept:Concept = await ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue,typeId);
  let key = characterValue + typeId;
  if (conceptCache.has(key)) return conceptCache.get(key) || concept;

  const GetConceptByCharacterAndType = (async () => {
    try{
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
            console.log("This is the concept by type and character error", response.status);
            HandleHttpError(response);
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
        throw error;
      }
      finally {
        conceptCache.delete(key); // Remove from cache after fetching
      }
  })()
  conceptCache.set(key, GetConceptByCharacterAndType);
  return GetConceptByCharacterAndType;
}


export async function GetConceptByTypeBulk(connectionTypes:string[]): Promise<Concept[]>{
        let conceptList:Concept[] = [];
        let types = JSON.stringify(connectionTypes);
          var header = GetRequestHeader();
          const response = await fetch(BaseUrl.GetConceptConnectionByType(),{
              method: 'POST',
              headers: header,
              body: types,
          });
          if(response.ok){
            let conceptIdsList = await response.json() ;
            conceptList = await GetConceptBulk(conceptIdsList);
          }
          else{
          //  throw new Error(`Error! status: ${response.status}`);
            console.log("This is the concept by type and character error", response.status);
            HandleHttpError(response);
          }
    return conceptList;
}
