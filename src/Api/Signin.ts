import { FreeschemaResponse } from "../DataStructures/Responses/StandardResponses"
import { SigninModel } from "../DataStructures/SigninModel"
import { HandleHttpError, HandleHttpErrorObject, HandleInternalError } from "../Services/Common/ErrorPosting"
import { BaseUrl, updateAccessToken } from "../app"

/**
 * Alternative sign-in function using SigninModel structure.
 *
 * Similar to LoginToBackend but returns FreeschemaResponse format and
 * does NOT automatically store the token. You must manually handle the token.
 *
 * @param signinInfo - SigninModel object containing email and password
 * @returns FreeschemaResponse with {status, statusCode, message, data} structure
 *         data contains user information and token (not auto-stored)
 *
 * @example
 * const result = await Signin({
 *   email: "user@example.com",
 *   password: "password123"
 * });
 * if (result.status) {
 *   const token = result.data.token; // Manual token handling required
 * }
 *
 * @see {@link LoginToBackend} for auto-token-storage version
 */
export default async function Signin(signinInfo: SigninModel) {
  const raw = JSON.stringify({
    email: signinInfo.email,
    password: signinInfo.password,
  })
  let freeschemaRes: FreeschemaResponse = {
    message: 'success',
    status: false,
    statusCode: 200,
    data: '',
  }
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  const url = BaseUrl.LoginUrl();
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    })
    const output = await response.json()
    if (response.ok) {
      const dataObject = output?.data
      freeschemaRes = {
        message: 'success',
        status: true,
        statusCode: 200,
        data: dataObject,
      }
      updateAccessToken(dataObject.token)
    } else {
      HandleHttpErrorObject(response, output);
    }
    return freeschemaRes
  } catch (error) {
    console.log('Sign in api error', error)
    HandleInternalError(error,url );
  }
}
