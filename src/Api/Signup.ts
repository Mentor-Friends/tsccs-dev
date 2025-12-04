import { FreeschemaResponse } from "../DataStructures/Responses/StandardResponses";
import { SignupModel } from "../DataStructures/SignupModel"
import { HandleHttpError, HandleHttpErrorObject, HandleInternalError } from "../Services/Common/ErrorPosting";
import { BaseUrl } from "../app"

/**
 * Registers a new user account on the backend server.
 *
 * Creates a new user with provided signup information including email, password,
 * username, and profile details.
 *
 * @param signupModel - SignupModel object containing:
 *   - email: User's email address
 *   - password: User's password
 *   - username: Unique username
 *   - fname: First name
 *   - lname: Last name
 *   - title: Title/gender
 *   - type: User type
 * @returns FreeschemaResponse with signup result (status, message, data)
 *
 * @example
 * const result = await Signup({
 *   email: "newuser@example.com",
 *   password: "securePass123",
 *   username: "newuser",
 *   fname: "John",
 *   lname: "Doe"
 * });
 * if (result.status) {
 *   console.log("Account created successfully");
 * }
 */
export default async function Signup(signupModel: SignupModel){
    const signupResponse = await postData(BaseUrl.SignupUrl(), signupModel);
    return signupResponse;
}

async function postData(url = '', data = {}) {
    let freeschemaRes: FreeschemaResponse = {
        message: 'success',
        status: false,
        statusCode: 200,
        data: 'cannot signup',
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
            HandleHttpErrorObject(response, output);
          }
          return freeschemaRes
    }
    catch(error){
        console.log('Signup Error: ', error);
        HandleInternalError(error,url );
    }

  }

  // export async function submitSignupForm(e: any) {
  //   e.preventDefault();
  //   // alert("Are you sure to want to signup?");
  
  //   const inputType = <HTMLInputElement>document.getElementById("type");
  //   const typeValue = inputType?.value;
  
  //   const inputUsername = <HTMLInputElement>document.getElementById("username");
  //   const usernameValue = inputUsername?.value;
  
  //   const inputEmail = <HTMLInputElement>document.getElementById("email");
  //   const emailValue = inputEmail?.value;
  
  //   const inputGender = <HTMLInputElement>document.getElementById("gender");
  //   const genderValue = inputGender?.value;
  
  //   const inputFirstName = <HTMLInputElement>document.getElementById("firstName");
  //   const firstNameValue = inputFirstName?.value;
  
  //   const inputLastName = <HTMLInputElement>document.getElementById("lastName");
  //   const lastNameValue = inputLastName?.value;
  
  //   const inputPassword = <HTMLInputElement>document.getElementById("password");
  //   const passwordValue = inputPassword?.value;
  
  //   const inputConfirmPassword = <HTMLInputElement>(
  //     document.getElementById("confirmPassword")
  //   );
  //   const confirmPasswordValue = inputConfirmPassword?.value;
  //   // console.log(confirmPasswordValue,"confirmPasswordValue");
  //   const inputprivacyPolicy = <HTMLInputElement>(
  //     document.getElementById("privacyPolicy")
  //   );
  //   const privacyPolicy = inputprivacyPolicy?.checked;
  //   const inputPrivacyPolicyError = <HTMLInputElement>(
  //     document.getElementById("privacyPolicyError")
  //   );
  //   if (!privacyPolicy) {
  //     inputPrivacyPolicyError.style.display = "block";
  //   }
  
  //   const signupData: any = {
  //     type: typeValue,
  //     username: usernameValue,
  //     title: genderValue,
  //     email: emailValue,
  //     password: passwordValue,
  //     timestamp: new Date().toISOString(),
  //     fname: firstNameValue,
  //     lname: lastNameValue,
  //   };
  //   if (privacyPolicy) {
  //     const signupResponse = await signupEntity(signupData);
  //     if (!signupResponse?.error && signupResponse?.data) {
  //       updateContent("/login");
  //     }
  //   }
  // }
  
/**
 * Registers a new entity (organization/company account) on the backend.
 *
 * Creates entity-type accounts (different from regular user accounts).
 * Includes timestamp for registration tracking.
 *
 * @param signupData - Signup data object containing:
 *   - type: Entity type
 *   - username: Unique username
 *   - title: Title/designation
 *   - email: Entity email
 *   - password: Account password
 *   - timestamp: Registration timestamp (ISO string)
 *   - fname: First name / Entity name
 *   - lname: Last name / Additional info
 * @returns Response JSON with entity creation result
 * @throws Error if signup fails (404, 500, or other HTTP errors)
 *
 * @example
 * const result = await SignupEntity({
 *   type: "organization",
 *   username: "acme_corp",
 *   email: "admin@acme.com",
 *   password: "securePass",
 *   timestamp: new Date().toISOString(),
 *   fname: "ACME Corporation",
 *   lname: "Inc."
 * });
 */
export async function SignupEntity(signupData: any) {
    const baseURL = BaseUrl.NODE_URL
    const response: any = await fetch(`${baseURL}/api/v1/entity/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });
  
    if (response.ok) {
      return response.json();
    } else {
      if (response.status === 404) throw new Error("404, Not found");
      if (response.status === 500) throw new Error("500, internal server error");
      let errorResponse = await response.json();
      console.log("This is the error from package", errorResponse);
      throw new Error(errorResponse.message);
    }
  }
  