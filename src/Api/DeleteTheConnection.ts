import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
export default async function DeleteTheConnection(id:number){
    try{
           const formdata = new FormData();
           formdata.append("id", id.toString());
            const response = await fetch(BaseUrl.DeleteTheConnectionUrl(),{
                method: 'POST',
                body: formdata,  
                redirect: "follow"
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