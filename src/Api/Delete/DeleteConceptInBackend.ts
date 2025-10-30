/**
 * Backend concept deletion API module for the Concept Connection System.
 *
 * This module provides functionality to permanently delete concepts from the backend database.
 * It handles authenticated API requests to remove concept records using the trash/delete endpoint.
 *
 * @module Api/Delete/DeleteConceptInBackend
 * @see https://documentation.freeschema.com for API reference
 */

import { BaseUrl } from "../../DataStructures/BaseUrl"
import { HandleHttpError } from "../../Services/Common/ErrorPosting"

/**
 * Permanently deletes a concept from the backend database using the trash endpoint.
 *
 * This function sends an authenticated POST request to remove a concept by its ID. It's used
 * when a concept needs to be completely removed from the system rather than just marked as deleted.
 * The operation requires authentication and will throw errors if the deletion fails.
 *
 * @param id - The unique identifier of the concept to delete
 * @param token - Bearer authentication token for authorizing the deletion request
 *
 * @returns A promise that resolves when the concept is successfully deleted, or rejects with an error
 *
 * @throws Will throw an error if the HTTP request fails or returns a non-OK status
 * @throws Will re-throw any caught errors after logging them to the console
 *
 * @example
 * ```typescript
 * // Delete a concept with authentication
 * try {
 *   await TrashTheConcept(12345, 'your-auth-token-here');
 *   console.log('Concept deleted successfully');
 * } catch (error) {
 *   console.error('Failed to delete concept:', error);
 * }
 * ```
 *
 * @remarks
 * This function uses FormData to send the concept ID in the request body. The deletion is permanent
 * and cannot be undone. All errors are logged to the console before being re-thrown to allow
 * proper error handling by the caller.
 *
 * @see DeleteTheConcept for an alternative deletion method
 * @see BaseUrl.DeleteConceptUrl for the API endpoint configuration
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
      throw error;
    }
  }