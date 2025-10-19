import { BaseUrl } from "../app";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from "../Services/Security/GetRequestHeader";

export default async function DeleteTheConnectionBulkApi(ids:number[]){
  let isDeleted = false;
    try{
           let header = GetRequestHeaderWithAuthorization();
            const response = await fetch(BaseUrl.DeleteTheConnectionBulkUrl(),{
                method: 'POST',
                headers: header,
                body: JSON.stringify(ids)
            });
            if(!response.ok){
              console.log('Delete connection Bulk Api error status: ', response.status);
              HandleHttpError(response);
            }
            else{
              const result = await response.json()
              isDeleted = result.success;
            }



        
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Delete connection Bulk Api error message: ', error.message);
        } else {
          console.log('Delete connection Bulk Api unexpected error: ', error);
        }
      }
      return isDeleted;
}