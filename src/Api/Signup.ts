/**
 * API module for user registration and signup operations.
 * Handles new user account creation with standardized response handling.
 *
 * @module Api/Signup
 * @see https://documentation.freeschema.com for reference
 */

import { FreeschemaResponse } from "../DataStructures/Responses/StandardResponses";
import { SignupModel } from "../DataStructures/SignupModel"
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { BaseUrl } from "../app"

/**
 * Registers a new user account in the Concept Connection System.
 * This function creates a new user with the provided signup information and returns
 * a standardized response containing registration results.
 *
 * @param signupModel - The signup model containing user registration information (name, email, password, etc.)
 * @returns A promise that resolves to a FreeschemaResponse indicating success or failure
 *
 * @example
 * ```typescript
 * // Register a new user
 * const newUser: SignupModel = {
 *   name: 'John Doe',
 *   email: 'john@example.com',
 *   password: 'securePassword123'
 * };
 *
 * const response = await Signup(newUser);
 * if (response.status && response.statusCode === 200) {
 *   console.log('Signup successful:', response.data);
 * } else {
 *   console.error('Signup failed:', response.message);
 * }
 * ```
 *
 * @remarks
 * - Returns a FreeschemaResponse with status, statusCode, message, and data fields
 * - On success: status=true, statusCode=200, data contains user information
 * - On failure: status=false with error details
 * - HTTP errors are handled through HandleHttpError
 * - Errors are logged to console and re-thrown for caller handling
 *
 * @see Signin for user authentication after signup
 * @see LoginToBackend for alternative login
 * @see SignupModel for the signup data structure
 * @see FreeschemaResponse for the response structure
 */
export default async function Signup(signupModel: SignupModel){
    const signupResponse = await postData(BaseUrl.SignupUrl(), signupModel);
    return signupResponse;
}

/**
 * Internal helper function for posting signup data to the backend.
 * Handles the HTTP request with proper headers and CORS configuration.
 *
 * @param url - The signup endpoint URL
 * @param data - The signup data to be sent
 * @returns A promise that resolves to a FreeschemaResponse
 *
 * @internal
 */
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
        throw error;
    }

  }