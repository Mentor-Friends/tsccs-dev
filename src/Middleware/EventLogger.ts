import { Logger } from "./logger.service";

export class EventLogger {
  static initialize() {
    console.log("Initialized Event Logger...");
    // Log unhandled errors
    window.addEventListener("error", (event) => {
      console.log("error called...");
      Logger.logErrorEvent({
        message: "Unhandled Error",
        error: event.error?.message || event.message,
        source: event.filename,
        line: event.lineno,
        column: event.colno,
        stack: event.error?.stack,
      });
    });

    // Log unhandled promise rejections
    window.addEventListener("unhandledrejection", (event) => {
      console.log("unhandledrejection called...");
      Logger.logErrorEvent({
        message: "Unhandled Promise Rejection",
        reason: event.reason,
        stack: event.reason?.stack,
      });
    });

    // Log user interactions
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      console.log("Click Event called...");
      Logger.logErrorEvent({
        message: "User Click",
        element: target.tagName,
        id: target.id,
        classes: target.className,
        text: target.innerText?.slice(0, 50),
      });
    });

    // Log network requests (requires interception with Service Worker or monkey-patching)
    this.logNetworkRequests();
  }

  static logNetworkRequests() {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const [url, options] = args;
      const urlString = url instanceof Request ? url.url : (url instanceof URL ? url.toString() : url);
  
      console.log("Custom fetch called for:", urlString);
  
      Logger.logNetwork({
        type: "REQUEST",
        message: "Network Request",
        method: options?.method || "GET",
        url: urlString,
        body: options?.body,
      });
  
      try {
        const response = await originalFetch(...args);
        Logger.logNetwork({
          type: "RESPONSE",
          message: "Network Response",
          url: urlString,
          status: response.status,
        });
        return response;
      } catch (error) {
        console.error("Fetch failed for:", urlString, error); // Debugging log
        Logger.logNetwork({
          type: "ERROR",
          message: "Network Request Failed",
          url: urlString,
          error: error instanceof Error ? error.message : String(error),
        });
        throw error;
      }
    };
  }
  

//   static logNetworkRequests() {
//     const originalFetch = window.fetch;
//     window.fetch = async (...args) => {
//         const [url, options] = args;
//         const urlString = url instanceof Request ? url.url : (url instanceof URL ? url.toString() : url);
  
//         Logger.logNetwork({
//             type: "REQUEST",
//             message: "Network Request",
//             method: options?.method || "GET",
//             url: urlString,
//             body: options?.body,
//         });
    
//         try {
//             const response = await originalFetch(...args);
//             Logger.logNetwork({
//                 type: "RESPONSE",
//                 message: "Network Response",
//                 url: urlString,
//                 status: response.status,
//             });
//             return response;
//         } catch (error) {
//             Logger.logNetwork({
//                 type: "ERROR",
//                 message: "Network Request Failed",
//                 url: urlString,
//                 error: error instanceof Error ? error.message : String(error),
//             });
//             throw error;
//         }
//         };
//     }

}
