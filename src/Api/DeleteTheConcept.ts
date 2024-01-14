import { BaseUrl } from "../DataStructures/BaseUrl";
import { Concept } from "../DataStructures/Concept";
export default async function DeleteTheConcept(id:number){
    try{

            const response = await fetch(BaseUrl.DeleteConceptUrl(),{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `id=${id}`
            });
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
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