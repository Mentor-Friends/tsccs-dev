import { BaseUrl } from "../../DataStructures/BaseUrl"
import { HandleHttpError, HandleInternalError } from "../../Services/Common/ErrorPosting"

/**
 * Deletes (trashes) a concept from the backend with explicit token auth.
 *
 * Alternative delete function that requires manual token passing.
 * Similar to DeleteTheConcept but with explicit authentication parameter.
 *
 * @param id - The concept ID to delete
 * @param token - Bearer authentication token
 * @throws Error if deletion fails
 *
 * @example
 * await TrashTheConcept(12345, userToken);
 */
export  async function TrashTheConcept(
    id: number,
    token: string,
  ) {
    try {
      const myHeaders = new Headers()
      myHeaders.append('Authorization', 'Bearer ' + token)
      const formdata = new FormData()
      formdata.append('id', id.toString())
      const response = await fetch(BaseUrl.DeleteConceptUrl(), {
        method: 'POST',
        body: formdata,
        headers: myHeaders,
      })
      if (!response.ok) {
        HandleHttpError(response);
        throw new Error(`Delete composition Error! status: ${response.status}`)
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log('Delete composition error message: ', error.message)
      } else {
        console.log('Delete composition unexpected error: ', error)
      }
      HandleInternalError(error, BaseUrl.DeleteConceptUrl());
    }
  }