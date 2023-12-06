import { ConceptsData } from "./../DataStructures/ConceptData";
import { GetAllConceptsByTypeUrl } from './../Constants/ApiConstants';
export async function GetAllConceptsByType(type:string,userId: number){
    try{
            var urlencoded = new URLSearchParams();
            urlencoded.append("type", type);
            urlencoded.append("user_id", userId.toString());
            const response = await fetch(GetAllConceptsByTypeUrl,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: urlencoded
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