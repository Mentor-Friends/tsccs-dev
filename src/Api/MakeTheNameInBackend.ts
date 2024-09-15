import { BaseUrl } from "../DataStructures/BaseUrl";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
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
            const response = await fetch(BaseUrl.MakeTheNameInBackendUrl(),{
                method: 'POST',
                headers: myHeaders,
                body: requestObject
            });
            if(! response.ok){
              HandleHttpError(response);
            }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('make the name in backend error message: ', error.message);
        } else {
          console.log('make the name in backend unexpected error: ', error);
        }
        throw error;
      }
}