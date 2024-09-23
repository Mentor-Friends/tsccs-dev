import { BaseUrl } from "../DataStructures/BaseUrl";
import { TokenStorage } from '../DataStructures/Security/TokenStorage';
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";

export async function LoginToBackend(email:string, password:string){
    try{
        var object = {
            'email': email,
            'password': password
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestObject = JSON.stringify(object);

            const response = await fetch(BaseUrl.LoginUrl(),{
                method: 'POST',
                headers: myHeaders,
                body: requestObject
            });
            if(response.ok){
              const result = await response.json();
              console.log(result.data);
              TokenStorage.BearerAccessToken = result.data.token;
              console.log("this is the token",TokenStorage.BearerAccessToken);
             return result;

            }
            else{
              console.log('Login tsccs error message: ', response.status);
              HandleHttpError(response);

            }

    }
    catch (error) {
        if (error instanceof Error) {
          console.log('Login tsccs error message: ', error.message);
        } else {
          console.log(' Login tsccs  unexpected error: ', error);
        }
       HandleInternalError(error,BaseUrl.LoginUrl() );
      }
}