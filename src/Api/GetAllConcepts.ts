import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetAllConceptsOfUserUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
export async function GetAllUserConcepts(userId: number){
    try{
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConceptsOfUserUrl(),{
                method: 'POST',
                headers: header,
                body: `user_id=${userId}`
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json();
            for(var i=0; i< result.length; i++){
                ConceptsData.AddConcept(result[i]);
            }
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