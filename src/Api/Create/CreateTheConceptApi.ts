import { CreateTheConceptUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeader } from "../../Services/Security/GetRequestHeader";
import { CreateDefaultConcept, Logger } from "../../app";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";

/**
 * Creates a concept on the backend server via API.
 *
 * Sends concept data to the backend server for creation. Returns the created
 * concept with server-assigned positive ID.
 *
 * @param conceptData - Concept data to create (can be partial concept object)
 * @returns Created Concept object with server-assigned ID
 * @throws Error if HTTP request fails or server returns error status
 *
 * @example
 * const newConcept = await CreateTheConceptApi({
 *   characterValue: "Alice",
 *   typeId: 100,
 *   userId: 42
 * });
 * console.log(newConcept.id); // Positive ID from server (e.g., 12345)
 */
export async function CreateTheConceptApi(conceptData: any){
  const logData : any = Logger.logfunction("CreateTheConceptApi", conceptData);
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
            Logger.logUpdate(logData);
            return result;
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Create the concept api error message: ', error.message);
        } else {
          console.log('Create the concept api unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.CreateTheConceptUrl());
        UpdatePackageLogWithError(logData, 'CreateTheConceptApi', error);
      }
}