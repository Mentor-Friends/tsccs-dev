import { BaseUrl } from "../DataStructures/BaseUrl";
import { Concept } from "../DataStructures/Concept";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from "../Services/Security/GetRequestHeader";
export default async function DeleteTheConcept(id:number, token:string =""){
  let isDeleted = false; 
  try{
          let myHeaders = GetRequestHeader('application/x-www-form-urlencoded');
          if(token != ""){
             myHeaders = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded',token)

          }
           const formdata = new FormData();
           formdata.append("id", id.toString());
            const response = await fetch(BaseUrl.DeleteConceptUrl(),{
                method: 'POST',
                headers: myHeaders,
                body: formdata
            });
            if(!response.ok){
              HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            else{
              const result = await response.json()
              isDeleted = result.success;
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
      return isDeleted;
}