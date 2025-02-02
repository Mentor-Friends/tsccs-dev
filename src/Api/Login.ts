import { Logger } from "../app";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { TokenStorage } from '../DataStructures/Security/TokenStorage';
import { HandleHttpError, HandleHttpErrorObject, HandleInternalError } from "../Services/Common/ErrorPosting";

export async function LoginToBackend(email:string, password:string){
  Logger.logfunction("LoginToBackend", arguments);
    try{
        let object = {
            'email': email,
            'password': password
        }

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestObject = JSON.stringify(object);
            const response = await fetch(BaseUrl.LoginUrl(),{
                method: 'POST',
                headers: myHeaders,
                body: requestObject
            });
            const result = await response.json();
            if(response.ok){
              TokenStorage.BearerAccessToken = result.data.token;
             return result;

            }
            else{
              console.log('Login tsccs error message: ', response.status);
              HandleHttpErrorObject(response, result);

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