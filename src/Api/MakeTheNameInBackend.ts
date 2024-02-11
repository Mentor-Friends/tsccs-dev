import { TheCharacter } from "../DataStructures/TheCharacter";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { TokenStorage } from "../DataStructures/TokenStorage";
import { Concept } from "../app";
export async function MakeTheNameInBackend(newConceptId:number, referent:string, typeId: number, typeUserId:number){
    try{
        var object = {
            'newConceptId': newConceptId,
            'referent': referent,
            'typeId': typeId,
            'typeUserId': typeUserId
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer "+ TokenStorage.token);

        var requestObject = JSON.stringify(object);
        console.log('this is the request object', requestObject);
            const response =  fetch(BaseUrl.MakeTheNameInBackendUrl(),{
                method: 'POST',
                headers: myHeaders,
                body: requestObject
            });
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