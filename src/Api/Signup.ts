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
   * 
   * @param signupData 
   *   const signupData: any = {
   *   type: typeValue,
   *   username: usernameValue,
   *   title: genderValue,
   *   email: emailValue,
   *   password: passwordValue,
   *   timestamp: new Date().toISOString(),
   *   fname: firstNameValue,
   *   lname: lastNameValue,
   * };
   * @returns 
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
      throw new Error(response.status);
    }
  }
  