/**
 * API module for fetching reserved connection IDs from the backend.
 * Manages a pool of pre-allocated connection IDs to optimize performance when creating connections.
 *
 * @module Api/GetReservedConnectionIds
 * @see https://documentation.freeschema.com for reference
 */

import { ReservedConnectionIds } from "../DataStructures/ReservedIds";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

let isFetching = false;
let fetchQueue: any[] = [];

/**
 * Helper method to process the next queued request.
 * Ensures sequential processing of fetch requests to prevent race conditions.
 *
 * @internal
 */
const processNextQueue = () => {
  if (fetchQueue.length > 0 && !isFetching) {
    const nextRequest = fetchQueue.shift();
    nextRequest();
  }
};

/**
 * Fetches reserved connection IDs from the backend and stores them in the local pool.
 * Uses a queue-based system to prevent simultaneous requests and maintains a minimum
 * threshold of available IDs.
 *
 * This function is critical for maintaining a pool of pre-allocated connection IDs,
 * which improves performance by avoiding the need to request IDs individually when
 * creating new connections in the Concept Connection System.
 *
 * @returns A promise that resolves when the IDs are successfully fetched and stored
 *
 * @example
 * ```typescript
 * // Ensure reserved connection IDs are available
 * await GetReservedConnectionIds();
 *
 * // Now IDs can be consumed from ReservedConnectionIds.connectionIds
 * const id = ReservedConnectionIds.GetId();
 * ```
 *
 * @remarks
 * - Skips fetching if more than 10 IDs are already available
 * - Uses a queue system to serialize requests and prevent concurrent fetches
 * - Automatically refills the pool when it runs low
 * - Errors are logged but the promise is rejected to allow proper error handling
 *
 * @see ReservedConnectionIds for the storage data structure
 * @see GetReservedIds for fetching regular concept IDs
 */
export async function GetReservedConnectionIds() {
  return new Promise<void>((resolve, reject) => {
    // Add request to queue
    fetchQueue.push(async () => {
      try {
        // prevent simultanious request
        if (isFetching) return;
        isFetching = true;

        // Skip fetching if enough IDs exist
        if (ReservedConnectionIds.connectionIds.length > 10) {
          isFetching = false; // flag is reset
          processNextQueue();
          return resolve(); // Resolve & exit
        }

        var header = GetRequestHeader("application/x-www-form-urlencoded");
        const response = await fetch(BaseUrl.GetReservedConnectionIdUrl(), {
          method: "GET",
          headers: header,
        });
        if (!response.ok) {
          HandleHttpError(response);
          throw new Error(`Error! status: ${response.status}`);
        }
        const result = await response.json();
        for (var i = 0; i < result.length; i++) {
          ReservedConnectionIds.AddId(result[i]);
        }

        resolve(); // Resolve when done
      } catch (error) {
        if (error instanceof Error) {
          console.log("get reserved connection ids error message: ", error.message);
        } else console.log("get reserved connection ids  unexpected error: ", error);
        reject(error);
        // throw error;
      } finally {
        // Mark as fetched and process next request
        isFetching = false;
        processNextQueue();
      }
    });

    // process the next request in the queue
    processNextQueue();
  });
}
