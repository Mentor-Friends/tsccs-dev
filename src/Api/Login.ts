/**
 * API module for user authentication and login functionality.
 * Handles user login by validating credentials against the backend and storing the access token.
 *
 * @module Api/Login
 * @see https://documentation.freeschema.com for reference
 */

import { BaseUrl } from "../DataStructures/BaseUrl";
import { TokenStorage } from '../DataStructures/Security/TokenStorage';
import { HandleHttpError } from "../Services/Common/ErrorPosting";

/**
 * Authenticates a user with the backend using email and password credentials.
 * Upon successful authentication, stores the bearer access token for subsequent API requests.
 *
 * This function is used for logging existing users into the Concept Connection System,
 * enabling them to perform authenticated operations such as creating and modifying concepts.
 *
 * @param email - The user's email address used for authentication
 * @param password - The user's password for authentication
 * @returns A promise that resolves to the login response containing user data and token, or undefined on error
 *
 * @example
 * ```typescript
 * // Login an existing user
 * const result = await LoginToBackend('user@example.com', 'securePassword123');
 * if (result) {
 *   console.log('Login successful:', result.data);
 *   // Token is automatically stored in TokenStorage.BearerAccessToken
 * }
 * ```
 *
 * @remarks
 * - The bearer access token is automatically stored in TokenStorage.BearerAccessToken upon successful login
 * - HTTP errors are handled through HandleHttpError for consistent error reporting
 * - The function returns undefined if the response is not OK
 * - Errors are logged to console and re-thrown for caller handling
 *
 * @see Signin for an alternative login implementation
 * @see Signup for user registration
 * @see TokenStorage for token management
 */
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
              TokenStorage.BearerAccessToken = result.data.token;
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
        throw error;
      }
}