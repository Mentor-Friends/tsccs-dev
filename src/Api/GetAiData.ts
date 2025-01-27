import { BaseUrl } from '../DataStructures/BaseUrl';
import { ConceptsData } from '../DataStructures/ConceptData';
import { HandleHttpError, HandleInternalError } from '../Services/Common/ErrorPosting';
import { PurgatoryDatabaseUpdated } from '../Services/InitializeSystem';
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from '../Services/Security/GetRequestHeader';
import { BinaryTree, Logger } from '../app';
import { GetAllAiData } from './../Constants/ApiConstants';

export async function GetAiData(){
  Logger.logfunction(GetAiData);
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