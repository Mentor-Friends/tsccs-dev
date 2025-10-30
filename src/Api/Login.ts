import { Logger } from "../app";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { TokenStorage } from '../DataStructures/Security/TokenStorage';
import { HandleHttpError, HandleHttpErrorObject, HandleInternalError, UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";

/**
 * Authenticates a user with the backend API and obtains an access token.
 *
 * This is the primary authentication function that validates user credentials against the backend
 * server and retrieves a JWT bearer token for subsequent API requests.
 *
 * **Authentication Flow:**
 * 1. Sends email and password to backend login endpoint
 * 2. Receives JWT token in response
 * 3. Automatically stores token in TokenStorage.BearerAccessToken
 * 4. Token is used for all subsequent authenticated API calls
 * 5. Logs the authentication attempt for audit purposes
 *
 * **Features:**
 * - Automatic token storage (no manual handling required)
 * - Error handling and logging
 * - Application-specific authentication
 * - Performance and audit logging
 *
 * **Security Notes:**
 * - Credentials are sent over HTTPS (ensure BaseUrl uses HTTPS)
 * - Token is stored in memory (TokenStorage)
 * - Token should be refreshed before expiration
 * - Never log or expose the token in client-side code
 *
 * @param email - The user's email address. Must be a valid registered email.
 *               Used as the primary login identifier.
 * @param password - The user's password. Sent to backend for verification.
 *                  Should meet password complexity requirements.
 * @param application - The application identifier for multi-tenant authentication.
 *                     Defaults to "boomconsole.com". Used to scope authentication
 *                     to specific applications in the system.
 *
 * @returns Promise resolving to the authentication result object containing:
 *         - data.token: The JWT bearer token
 *         - user information
 *         - session details
 *         Returns undefined on error
 *
 * @example
 * // Basic login
 * const result = await LoginToBackend(
 *   "user@example.com",
 *   "securePassword123"
 * );
 * if (result) {
 *   console.log("Logged in successfully");
 *   console.log("Token:", result.data.token); // Now stored in TokenStorage
 * }
 *
 * @example
 * // Login for specific application
 * const result = await LoginToBackend(
 *   "admin@company.com",
 *   "adminPass",
 *   "admin.company.com"  // Custom application
 * );
 *
 * @example
 * // Use with other authenticated operations
 * const loginResult = await LoginToBackend("user@example.com", "pass123");
 * if (loginResult) {
 *   // Token is automatically available for subsequent calls
 *   const concepts = await SearchAllConcepts("", "search term", "", TokenStorage.BearerAccessToken);
 * }
 *
 * @throws Does not throw but logs errors. Returns undefined on failure.
 *        Error scenarios include:
 *        - Invalid credentials (401 Unauthorized)
 *        - Network errors
 *        - Server errors (5xx)
 *        - Malformed request
 *
 * @see {@link Signin} for alternative sign-in function
 * @see {@link Signup} for user registration
 * @see {@link updateAccessToken} for manually updating the stored token
 */
export async function LoginToBackend(email:string, password:string, application:string = "boomconsole.com"){
  const logData : any = Logger.logfunction("LoginToBackend", arguments);
    try{
        let object = {
            'email': email,
            'password': password,
            'application': application
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
              Logger.logUpdate(logData);
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
       UpdatePackageLogWithError(logData, 'LoginToBackend', error);
      }
}