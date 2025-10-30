import { BaseUrl } from '../DataStructures/BaseUrl';
import { ConceptsData } from '../DataStructures/ConceptData';
import { HandleHttpError, HandleInternalError } from '../Services/Common/ErrorPosting';
import { PurgatoryDatabaseUpdated } from '../Services/InitializeSystem';
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from '../Services/Security/GetRequestHeader';
import { BinaryTree, Logger } from '../app';
import { GetAllAiData } from './../Constants/ApiConstants';

/**
 * Fetches all AI-related concept data from the backend.
 * Loads AI concepts into local ConceptsData cache and triggers database update.
 *
 * @returns void - Updates ConceptsData in-place with AI concepts
 *
 * @example
 * await GetAiData(); // Loads all AI concepts into cache
 */
export async function GetAiData(){
  const logData:any = Logger.logfunction("GetAiData");
    try{
      const start = new Date().getTime();
        var header = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded');
        const response = await fetch(BaseUrl.GetAllAiData(),{
            method: 'GET',
            headers: header,
        });
        if(!response.ok){
          console.log('Ai Error Message: ', "Cannot get response");
          HandleHttpError(response);
        }
        const result = await response.json();
        for(var i=0; i< result.length; i++){
            ConceptsData.AddConcept(result[i]);
        }
        PurgatoryDatabaseUpdated();
        let elapsed = new Date().getTime() - start;
        console.log("The time taken is ", elapsed);

        Logger.logUpdate(logData)


}
catch (error) {
    if (error instanceof Error) {
      console.log('Ai Error Message: ', error.message);
    } else {
      console.log('Ai Error Message: ', error);
    }
    HandleInternalError(error, BaseUrl.GetAllAiData());
  }
}