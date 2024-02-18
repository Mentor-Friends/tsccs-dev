import { CreateTheConceptUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
export async function CreateTheConceptApi(conceptData: any){
    try{
            var header = GetRequestHeader();
            const response = await fetch(BaseUrl.CreateTheConceptUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(conceptData),
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
             const resultString = await response.json();
            const result = resultString as Concept;

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