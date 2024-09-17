import { CreateTheConceptUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { TokenStorage } from "../../DataStructures/Security/TokenStorage";
import { LConnection } from "../../app";
import { HandleHttpError } from "../../Services/Common/ErrorPosting";
export async function CreateTheGhostConceptApi(conceptData: Concept[], connectionData: LConnection[]){
  let result = {
    "concepts": [],
    "connections": []
  };
    try{
          const myHeaders = new Headers();
            let myBody = {
              "concepts": conceptData,
              "connections": connectionData
            }

           myHeaders.set("Content-Type","application/json" );
           myHeaders.set('Authorization', "Bearer " + TokenStorage.BearerAccessToken)
           myHeaders.set('Accept',  'application/json');
           myHeaders.set('Randomizer', BaseUrl.BASE_RANDOMIZER.toString());
            const response = await fetch(BaseUrl.CreateGhostConceptApiUrl(),{
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(myBody),
            });
            if(!response.ok){
                HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
             const resultString = await response.json();
            result.concepts = resultString.concepts;
            result.connections = resultString.connections;

            return result;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the concept api error message: ', error.message);
        } else {
          console.log('Create the concept api unexpected error: ', error);
        }
        throw error;
      }
}