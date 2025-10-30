/**
 * API module for fetching reserved concept IDs from the backend.
 * Manages a pool of pre-allocated concept IDs to optimize performance when creating new concepts.
 *
 * @module Api/GetReservedIds
 * @see https://documentation.freeschema.com for reference
 */

import { ReservedIds } from "../DataStructures/ReservedIds";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

let isFetching = false
let fetchQueue: any[] = []

/**
 * Helper method to process the next queued request.
 * Ensures sequential processing of fetch requests to prevent race conditions.
 *
 * @internal
 */
const processNextQueue = () => {
  if (fetchQueue.length > 0 && !isFetching) {
    const nextRequest = fetchQueue.shift()
    nextRequest()
  }
}

/**
 * Fetches reserved concept IDs from the backend and stores them in the local pool.
 * Uses a queue-based system to prevent simultaneous requests and maintains a minimum
 * threshold of available IDs.
 *
 * This function is essential for maintaining a pool of pre-allocated concept IDs,
 * which significantly improves performance by avoiding the need to request IDs
 * individually when creating new concepts in the Concept Connection System.
 *
 * @returns A promise that resolves when the IDs are successfully fetched and stored
 *
 * @example
 * ```typescript
 * // Ensure reserved concept IDs are available
 * await GetReservedIds();
 *
 * // Now IDs can be consumed from ReservedIds.ids
 * const id = ReservedIds.GetId();
 * ```
 *
 * @remarks
 * - Skips fetching if more than 10 IDs are already available
 * - Uses a queue system to serialize requests and prevent concurrent fetches
 * - Automatically refills the pool when it runs low during concept creation
 * - Errors are logged with the endpoint URL for debugging purposes
 * - The promise is rejected on error to allow proper error handling
 *
 * @see ReservedIds for the storage data structure
 * @see GetReservedConnectionIds for fetching connection IDs
 */
export async function GetReservedIds(){
  return new Promise<void>((resolve, reject) => {
    console.log('trying to fetch more concepts')
    // Add request to queue
    fetchQueue.push(async () => {
      try {
        // prevent simultanious request
        if (isFetching) return
        isFetching = true

        // Skip fetching if enough IDs exist
        if (ReservedIds.ids.length > 10) {
          console.log('Enough IDs available, skipping fetch.')
          isFetching = false // flag is reset
          processNextQueue()
          return resolve() // Resolve & exit
        }
        
        var header = GetRequestHeader("application/x-www-form-urlencoded");
        const response = await fetch(BaseUrl.GetReservedIdUrl(), {
          method: "GET",
          headers: header,
        });
        if (!response.ok) {
          HandleHttpError(response);
          throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        for (var i = 0; i < result.length; i++) {
          ReservedIds.AddId(result[i]);
        }
        
        console.log('Ids Fetch Success')
        resolve() // Resolve when done
      } catch (error) {
        if (error instanceof Error) {
          console.log(
            "get reserved ids error message: ",
            error.message,
            BaseUrl.GetReservedConnectionIdUrl()
          );
        } else console.log("get reserved ids  unexpected error: ", error);
        reject(error)
        // throw error;
      } finally {
        // Mark as fetched and process next request
        isFetching = false
        processNextQueue()
      }
    })

    // process the next request in the queue
    processNextQueue()
  })
}