import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptByCharacterAndTypeUrl } from './../Constants/ApiConstants';
export async function GetConceptByCharacterAndType(characterValue: string, typeId: number){


    try{
          var json = {
            'character_value': characterValue,
            'type_id': typeId 
          };
          var toSendJson = JSON.stringify(json);

            const response = await fetch(GetConceptByCharacterAndTypeUrl,{
                method: 'POST',
                headers:{
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: toSendJson,
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json() ;

            ConceptsData.AddConcept(result);
            return result;
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