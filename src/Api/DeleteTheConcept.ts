import { BaseUrl } from "../DataStructures/BaseUrl";
import { Concept } from "../DataStructures/Concept";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
export default async function DeleteTheConcept(id:number){
    try{
           const formdata = new FormData();
           formdata.append("id", id.toString());
            const response = await fetch(BaseUrl.DeleteConceptUrl(),{
                method: 'POST',
                body: formdata
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