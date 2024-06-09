import { LocalConceptsData } from "./../../DataStructures/Local/LocalConceptData";
import { GetConceptByCharacterValueUrl } from './../../Constants/ApiConstants';
import { LConcept } from "../../DataStructures/Local/LConcept";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { CreateDefaultLConcept } from "../../app";
export async function GetLocalConceptByCharacterValue(characterValue: string){
  let result = CreateDefaultLConcept();
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');

            const response = await fetch(BaseUrl.GetConceptByCharacterValueUrl(),{
              method: 'POST',
              headers: header,
              body: `character_value=${characterValue}`
          });
          if(response.ok){
            result = await response.json() as LConcept;
            if(result.id > 0){
                LocalConceptsData.AddConcept(result);
            }
          }
          else{
            console.log("Error in Getting Local concept by character value Error", response.status);
          }
          return result;


    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Error in Getting Local concept by character value error message: ', error);
        } else {
          console.log('Error in Getting Local concept by character value unexpected error: ', error);
        }
        return result;
      }
}