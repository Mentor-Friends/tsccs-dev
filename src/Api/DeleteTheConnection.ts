import { BaseUrl } from "../DataStructures/BaseUrl";
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";
import { GetOnlyTokenHeader, GetRequestHeader, GetRequestHeaderWithAuthorization } from "../Services/Security/GetRequestHeader";
export default async function DeleteTheConnection(id:number){
    try{
           const formdata = new FormData();
           formdata.append("id", id.toString());
           let header = GetOnlyTokenHeader();
            const response = await fetch(BaseUrl.DeleteTheConnectionUrl(),{
                method: 'POST',
                headers: header,
                body: formdata,  
                redirect: "follow"
            });
            if(!response.ok){
              console.log('Delete connection error status: ', response.status);
              HandleHttpError(response);
            }


        
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Delete connection error message: ', error.message);
        } else {
          console.log('Delete connection unexpected error: ', error);
        }
        HandleInternalError(error, BaseUrl.DeleteTheConnectionUrl());
      }
}