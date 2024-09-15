import { CreateTheConceptUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { CreateDefaultConcept } from "../../app";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
export async function CreateTheConceptApi(conceptData: any){
  let result = CreateDefaultConcept();
    try{
            var header = GetRequestHeader();
            const response = await fetch(BaseUrl.CreateTheConceptUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(conceptData),
            });
            if(!response.ok){
                HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
             const resultString = await response.json();
            result = resultString as Concept;

            return result;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the concept api error message: ', error.message);
        } else {
          console.log('Create the concept api unexpected error: ', error);
        }
        return error;
      }
}