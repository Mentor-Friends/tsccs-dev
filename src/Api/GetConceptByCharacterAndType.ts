import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetConceptByCharacterAndTypeUrl } from './../Constants/ApiConstants';
import { Concept } from "./../DataStructures/Concept";
export async function GetConceptByCharacterAndType(characterValue: string, typeId: number){

    try{
    var concept:Concept = await ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue,typeId);

      if(concept == null || concept.id == 0){
        var json = {
          'character_value': `${characterValue}`,
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
            concept = await response.json() ;
      }


            ConceptsData.AddConcept(concept);
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