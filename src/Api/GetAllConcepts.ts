import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetAllConceptsOfUserUrl } from './../Constants/ApiConstants';
import { BaseUrl } from "../DataStructures/BaseUrl";
export async function GetAllUserConcepts(userId: number){
    try{

            const response = await fetch(BaseUrl.GetAllConceptsOfUserUrl(),{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
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