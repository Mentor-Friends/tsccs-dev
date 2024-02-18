import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptByCharacterAndTypeUrl } from './../Constants/ApiConstants';
import { Concept } from "./../DataStructures/Concept";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
export async function GetConceptByCharacterAndType(characterValue: string, typeId: number){

    try{
    var concept:Concept = await ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue,typeId);
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
          if(!response.ok){
              throw new Error(`Error! status: ${response.status}`);
          }
            var conceptString = await response.json() ;
            concept = conceptString as Concept;
            ConceptsData.AddConcept(concept);
      }
      return concept;

    }
    catch (error) {
        if (error instanceof Error) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
}