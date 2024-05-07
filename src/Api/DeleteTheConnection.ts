import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
export default async function DeleteTheConnection(id:number){
    try{
           const formdata = new FormData();
           formdata.append("id", id.toString());
           console.log("trying to delete", id);
            const response = await fetch(BaseUrl.DeleteTheConnectionUrl(),{
                method: 'POST',
                body: formdata,  
                redirect: "follow"
            });
            if(!response.ok){
              console.log('Delete connection error status: ', response.status);
            }


        
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Delete connection error message: ', error.message);
        } else {
          console.log('Delete connection unexpected error: ', error);
        }
      }
}