/**
 * API module for creating named concept entries in the backend.
 * Registers concept names (referents) with their associated type information in the system.
 *
 * @module Api/MakeTheNameInBackend
 * @see https://documentation.freeschema.com for reference
 */

import { BaseUrl } from "../DataStructures/BaseUrl";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";

/**
 * Creates a named concept entry in the backend by associating a referent (name) with a concept ID.
 * This function registers the human-readable name for a concept along with its type classification.
 *
 * In the Concept Connection System, concepts are identified by numeric IDs, but they also need
 * human-readable names (referents). This function establishes that association in the backend.
 *
 * @param newConceptId - The unique identifier of the concept being named
 * @param referent - The human-readable name or label for the concept
 * @param typeId - The type category ID that classifies this concept
 * @param typeUserId - The user ID associated with the type
 * @returns A promise that resolves when the name is successfully registered
 *
 * @example
 * ```typescript
 * // Create a named concept for "John Doe" as a person type
 * await MakeTheNameInBackend(
 *   12345,           // newConceptId
 *   'John Doe',      // referent
 *   999,             // typeId for 'person'
 *   1                // typeUserId
 * );
 * ```
 *
 * @remarks
 * - This function does not return a value on success, only throws on error
 * - HTTP errors are handled through HandleHttpError
 * - Requires authentication via GetRequestHeader
 * - Errors are logged and re-thrown for caller handling
 *
 * @see MakeTheTypeConceptApi for creating type concepts
 */
export async function MakeTheNameInBackend(newConceptId:number, referent:string, typeId: number, typeUserId:number){
    try{
        var object = {
            'newConceptId': newConceptId,
            'referent': referent,
            'typeId': typeId,
            'typeUserId': typeUserId
        }

        var myHeaders = GetRequestHeader();

        var requestObject = JSON.stringify(object);
            const response = await  fetch(BaseUrl.MakeTheNameInBackendUrl(),{
                method: 'POST',
                headers: myHeaders,
                body: requestObject
            });
            if(!response.ok){
              HandleHttpError(response);
            }
    }
    catch (error) {
        if (error instanceof Error) {
          console.log('make the name in backend error message: ', error.message);
        } else {
          console.log('make the name in backend unexpected error: ', error);
        }
        throw error;
      }
}