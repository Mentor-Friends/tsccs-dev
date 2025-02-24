import { ReservedIds } from "../DataStructures/ReservedIds";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { HandleHttpError } from "../Services/Common/ErrorPosting";

let isFetching = false
let fetchQueue: any[] = []

// Helper method to process next queue request
const processNextQueue = () => {
  if (fetchQueue.length > 0 && !isFetching) {
    const nextRequest = fetchQueue.shift()
    nextRequest()
  }
}

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