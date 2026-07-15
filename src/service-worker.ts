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
// Auth retry is handled in the request layer by fetchWithAuthRetry.
// The service worker only handles explicit package messages.


// For Caching gives the event when fetch request is triggered
// self.addEventListener('fetch', (event: any) => {
//     console.log('Fetching: sw', event.request.url);
// });


// Listen message received by service worker
self.addEventListener("message", (event: any) => {
  handleMessageEvent(event)
});


