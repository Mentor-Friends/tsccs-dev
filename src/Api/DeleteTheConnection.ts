import { BaseUrl } from "../DataStructures/BaseUrl";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader, GetRequestHeaderWithAuthorization } from "../Services/Security/GetRequestHeader";
export default async function DeleteTheConnection(id:number, token:string = ""){
  let isDeleted = false;  
  try{
           const formdata = new FormData();
           let myHeaders = GetRequestHeader('application/x-www-form-urlencoded');
           if(token != ""){
              myHeaders = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded',token)
 
           }
           formdata.append("id", id.toString());
           formdata.append("apiKey", "nodeserver");
            const response = await fetch(BaseUrl.DeleteTheConnectionUrl(),{
                method: 'POST',
                headers: myHeaders,
                body: formdata,  
                redirect: "follow"
            });
            if(!response.ok){
              console.log('Delete connection error status: ', response.status);
              HandleHttpError(response);
            }
            else{
              const result = await response.json()
              isDeleted = result.success;
            }



        
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Delete connection error message: ', error.message);
        } else {
          console.log('Delete connection unexpected error: ', error);
        }
        throw error;
      }

      return isDeleted;
}