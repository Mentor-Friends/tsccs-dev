import { FreeschemaResponse } from "../DataStructures/Responses/StandardResponses";
import { SignupModel } from "../DataStructures/SignupModel"
import { HandleHttpError, HandleInternalError } from "../Services/Common/ErrorPosting";
import { BaseUrl } from "../app"

export default async function Signup(signupModel: SignupModel){
    const signupResponse = await postData(BaseUrl.SignupUrl(), signupModel);
    return signupResponse;
}

async function postData(url = '', data = {}) {
    let freeschemaRes: FreeschemaResponse = {
        message: 'success',
        status: false,
        statusCode: 200,
        data: '',
      }
    // Default options are marked with *
    try{
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          })
          const output = await response.json()
          if(response.ok){
            freeschemaRes = {
              message: 'success',
              status: true,
              statusCode: 200,
              data: output,
            }
          }
          else{
            HandleHttpError(response);
          }
          return freeschemaRes
    }
    catch(error){
        console.log('Signup Error: ', error);
        HandleInternalError(error,url );
    }

  }