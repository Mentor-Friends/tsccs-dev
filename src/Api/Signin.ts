/**
 * API module for user sign-in operations.
 * Provides standardized authentication with structured response handling.
 *
 * @module Api/Signin
 * @see https://documentation.freeschema.com for reference
 */

import { FreeschemaResponse } from "../DataStructures/Responses/StandardResponses"
import { SigninModel } from "../DataStructures/SigninModel"
import { HandleHttpError } from "../Services/Common/ErrorPosting"
import { BaseUrl } from "../app"

/**
 * Authenticates a user and returns a standardized Freeschema response.
 * This function provides a more structured authentication approach compared to LoginToBackend,
 * returning a FreeschemaResponse object with consistent status and data fields.
 *
 * The signin process validates user credentials and returns authentication data including
 * tokens and user information in a standardized response format.
 *
 * @param signinInfo - The signin model containing user credentials (email and password)
 * @returns A promise that resolves to a FreeschemaResponse containing authentication data
 *
 * @example
 * ```typescript
 * // Sign in a user with standardized response
 * const signinData: SigninModel = {
 *   email: 'user@example.com',
 *   password: 'securePassword123'
 * };
 *
 * const response = await Signin(signinData);
 * if (response.status && response.statusCode === 200) {
 *   console.log('Signin successful:', response.data);
 *   // Use response.data.token for subsequent API calls
 * } else {
 *   console.error('Signin failed:', response.message);
 * }
 * ```
 *
 * @remarks
 * - Returns a FreeschemaResponse with status, statusCode, message, and data fields
 * - On success: status=true, statusCode=200, data contains authentication information
 * - On failure: status=false, statusCode and message indicate the error
 * - HTTP errors are handled through HandleHttpError
 * - Errors are logged to console and re-thrown for caller handling
 * - Uses JSON content-type for request body
 *
 * @see LoginToBackend for alternative login implementation
 * @see Signup for user registration
 * @see SigninModel for the signin data structure
 * @see FreeschemaResponse for the response structure
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
    } else {
      HandleHttpError(response);
    }
    return freeschemaRes
  } catch (error) {
    console.log('Sign in api error', error)

    throw error;
  }
}
