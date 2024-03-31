import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
export async function MakeTheNameInBackend(newConceptId:number, referent:string, typeId: number, typeUserId:number){
    try{
        var object = {
            'newConceptId': newConceptId,
            'referent': referent,
            'typeId': typeId,
            'typeUserId': typeUserId
        }

        var myHeaders = GetRequestHeader();

        var requestObject = JSON.stringify(object);
            const response =  fetch(BaseUrl.MakeTheNameInBackendUrl(),{
                method: 'POST',
                headers: myHeaders,
                body: requestObject
            });
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('make the name in backend error message: ', error.message);
          return error.message;
        } else {
          console.log('make the name in backend unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
}