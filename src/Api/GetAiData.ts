import { BaseUrl } from '../DataStructures/BaseUrl';
import { ConceptsData } from '../DataStructures/ConceptData';
import { PurgatoryDatabaseUpdated } from '../Services/InitializeSystem';
import { GetRequestHeader } from '../Services/Security/GetRequestHeader';
import { BinaryTree } from '../app';
import { GetAllAiData } from './../Constants/ApiConstants';

export async function GetAiData(){
    try{
      const start = new Date().getTime();
        var header = GetRequestHeader('application/x-www-form-urlencoded');
        const response = await fetch(BaseUrl.GetAllAiData(),{
            method: 'GET',
            headers: header,
        });
        if(!response.ok){
            throw new Error(`Error! status: ${response.status}`);
        }
         const result = await response.json();
        for(var i=0; i< result.length; i++){
            ConceptsData.AddConcept(result[i]);
        }
        //PurgatoryDatabaseUpdated();
        let elapsed = new Date().getTime() - start;
        console.log("The time taken is ", elapsed);


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