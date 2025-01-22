import { setHasActivatedSW } from "./app";
import { checkSWInitialization, handleMessageEvent } from "./ServiceWorker";


// Install Service Worker
self.addEventListener("install", (event: any) => {
  console.log("Service Worker installing... sw");
  // event.waitUntil();
  event.waitUntil((self as any).skipWaiting())
});

// Activate Service Worker
self.addEventListener("activate", async (event: any) => {
  await setHasActivatedSW(true)
  console.log("Service Worker activating... sw");

  // Using event.waitUntil to wait for the Promise to resolve
  event.waitUntil(
    new Promise((resolve, reject) => {
      try {
        // Claim control of the clients (this makes the service worker active immediately)
        (self as any).clients.claim();
        console.log('claimed')
        checkSWInitialization()

        // Resolve the Promise to indicate activation is complete
        resolve(undefined);
      } catch (error) {
        console.error("Error during service worker activation:", error);
        reject(error);
      }
    })
  );
});
// Handle 401 in service worker
// Fetch event listener
self.addEventListener('fetch', (event: any) => {
  if (!event.clientId) {
    event.respondWith(handleInterceptRequest(event));
  }
});


// For Caching gives the event when fetch request is triggered
// self.addEventListener('fetch', (event: any) => {
//     console.log('Fetching: sw', event.request.url);
// });


// Listen message received by service worker
self.addEventListener("message", (event: any) => {
  handleMessageEvent(event)
});


// let refreshingToken = false;
// let refreshTokenPromise;

/**
 * Method to handle intercepted request
 * @param event any
 * @returns Promise<unknown>
 */
const handleInterceptRequest = async (event: any) => {
  try {
    const response = await fetch(event.request);

    // If the response is 401 (Unauthorized), send it back to the main thread
    if (response.status === 401) {
      const messageId = Math.random().toString(36).substring(2)
      event.waitUntil(
        // (self as any).clients.matchAll().then((clients: any) => {
        //     clients.forEach(async (client: any) => {
                // client.postMessage({
                event.source.postMessage({
                    type: 'API_401',
                    messageId,
                    message: 'Unauthorized',
                    payload: {
                      method: event.request.method,
                      url: event.request.url,
                      headers: Array.from(event.request.headers.entries()),  // Convert headers to array
                      // body: await event.request.clone().text()  // Clone and send the body
                      body: await event.request.clone().json()  // Clone and send the body
                    }
                })
        //     });
        // })
      );
      // Wait for the main thread to send back the response
      const newResponse = await new Promise((resolve) => {
        console.log('Re resolving 401', response.url)
        // fallback 
        setTimeout(() => resolve(response), 60000) // 60 sec

        navigator.serviceWorker.addEventListener('message', (e) => {
          if (e.data && e.data?.messageId == messageId && e.data?.type === 'API_RESPONSE') {
            if (e?.data?.response)
              resolve(e.data.response); // Resolve with the old response
            else {
              console.log('Unable to resolve re 401', response.url)
              resolve(response); // Resolve with the old response
            }
          }
        });
      });
      return newResponse; // Return the new response
    }

    // if (response.status == 401) {

    //   if (!refreshingToken) {
    //     refreshingToken = true;
    //     refreshTokenPromise = refreshToken()
    //   }
    //   console.warn('Awating to perform token refresh')
    //   // set options to update if need else not
    //   setTimeout(() => {
    //     return response
    //   }, 30000) // return after 30 sec if unable to update token
      
    //   await refreshingToken

    //   const clonedRequest = event.request.clone()
    //   clonedRequest.headers.set()
      
    // }
    
    // If no issues, return the response as is
    return response
  } catch (error) {
    console.error('Error occured during 401 intercepting', error)
    throw error
  }
} 