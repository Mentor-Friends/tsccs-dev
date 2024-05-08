import { BaseUrl } from "../DataStructures/BaseUrl";
import { TokenStorage } from '../DataStructures/Security/TokenStorage';

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
            if(!response.ok){
                throw new Error(`Error! status: ${response.status}`);
            }
             const result = await response.json();
             console.log(result.data);
             TokenStorage.BearerAccessToken = result.data.token;
             console.log("this is the token",TokenStorage.BearerAccessToken);
            return result;
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