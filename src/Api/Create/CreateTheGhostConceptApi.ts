import { CreateTheConceptUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import {  LConcept } from "../../DataStructures/Local/LConcept";
import { TokenStorage } from "../../DataStructures/Security/TokenStorage";
import { LConnection } from "../../app";
export async function CreateTheGhostConceptApi(conceptData: LConcept[], connectionData: LConnection[]){
  let result = {
    "concepts": [],
    "connections": []
  };
    try{
            var header = GetRequestHeaderWithAuthorization("application/json", TokenStorage.BearerAccessToken);
            console.log("This is the header", header);
            let myBody = {
              "concepts": conceptData,
              "connections": connectionData
            }
            const response = await fetch(BaseUrl.CreateGhostConceptApiUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(myBody),
            });
            if(!response.ok){
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
        return result;
      }
}