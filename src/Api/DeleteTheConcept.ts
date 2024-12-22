import { BaseUrl } from "../DataStructures/BaseUrl";
import { Concept } from "../DataStructures/Concept";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
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
              HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }


        
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Delete concept error message: ', error.message);
        } else {
          console.log('Delete concept unexpected error: ', error);
        }
        throw error;
      }
}