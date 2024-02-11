import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetAllConceptsByTypeUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
export async function GetAllConceptsByType(type:string,userId: number){
    try{
            var urlencoded = new URLSearchParams();
            urlencoded.append("type", type);
            urlencoded.append("user_id", userId.toString());

            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = await fetch(BaseUrl.GetAllConceptsByTypeUrl(),{
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json();
            for(var i=0; i< result.length; i++){
                ConceptsData.AddConcept(result[i]);
            }
            console.log("added");
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