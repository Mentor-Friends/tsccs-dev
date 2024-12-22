import { FreeschemaResponse } from "../DataStructures/Responses/StandardResponses"
import { SigninModel } from "../DataStructures/SigninModel"
import { HandleHttpError } from "../Services/Common/ErrorPosting"
import { BaseUrl } from "../app"


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
