import { ReservedConnectionIds } from "../DataStructures/ReservedIds";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

let isFetching = false;
let fetchQueue: any[] = [];

// Helper method to process next queue request
const processNextQueue = () => {
  if (fetchQueue.length > 0 && !isFetching) {
    const nextRequest = fetchQueue.shift();
    nextRequest();
  }
};

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
