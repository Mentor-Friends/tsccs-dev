import { BaseUrl } from "../app";
import { Logger } from "./logger.service";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";

export class ApplicationMonitor {
  private static globalErrorHandlersInitialized = false;
  private static consoleErrorPatched = false;
  private static errorEventListenerRegistered = false;
  private static unhandledErrorListenerRegistered = false;
  private static userInteractionListenersRegistered = false;
  private static networkRequestsPatched = false;
  private static performanceMetricsRegistered = false;
  private static routeChangeListenersRegistered = false;
  private static webSocketEventsPatched = false;
  private static initialLoadTimeout: ReturnType<typeof setTimeout> | null = null;

  static initialize() {
    try {
      if (!this.isBrowser()) return;

      // Initialize error handling and logging
      this.initGlobalErrorHandlers();
      this.logCatchError();
      this.logErrorEvent();
      this.logUnhandledError();

      // Log user interactions and other relevant events
      this.logUserInteractions();
      this.logNetworkRequests();
      this.logRouteChanges();
     // this.logPerformanceMetrics();
      //this.logWebSocketEvents();
    } catch (error) {
      console.error("Error during Application Monitoring initialization:", error);
    }
  } 

  // Initialize global error handlers for JavaScript errors and promise rejections
  static initGlobalErrorHandlers() {
    try{
      // console.log("Into initGlobalErrorHandlers.")
      if(!this.isBrowser() || this.globalErrorHandlersInitialized) return;
      this.globalErrorHandlersInitialized = true;
      
      // Track runtime errors
      (window as any).onerror = (message: string | Event, source: string | undefined, lineno: number | undefined, colno: number | undefined, error: Error | undefined) => {
      const sessionId = TokenStorage.sessionId || "unknown";

        const errorDetails = {
          message,
          source,
          lineno,
          colno,
          stack: error?.stack || 'undefined',
          requestFrom: BaseUrl.BASE_APPLICATION,
          sessionId: sessionId
        };
        // console.log("This is the window error", errorDetails);
        Logger.logApplication("ERROR", "Runtime Error", errorDetails);
        Logger.log("ERROR","Runtime Error",errorDetails );
      };

      // Track unhandled promise rejections
      window.onunhandledrejection = (event) => {
      const sessionId = TokenStorage.sessionId || "unknown";

        Logger.logApplication("ERROR", "Unhandled Promise Rejection", {
          message: event.reason ? event.reason.message : event.reason,
          stack: event.reason ? event.reason.stack : null,
          requestFrom: BaseUrl.BASE_APPLICATION,
          sessionId: sessionId
        });
        Logger.log("ERROR", "Unhandled Promise Rejection", {
          message: event.reason ? event.reason.message : event.reason,
          stack: event.reason ? event.reason.stack : null,
          requestFrom: BaseUrl.BASE_APPLICATION,
          sessionId: sessionId
        });
      };
    } catch(error) {
      console.warn("Failed to initialize global error handlers:", error);
    }

  }

  static logCatchError() {
    try {
      if (this.consoleErrorPatched) return;
      this.consoleErrorPatched = true;

      const originalConsoleError = console.error;
      console.log("Inside originalConsoleError...");
      
      console.error = function (...args) {
        if(args?.[0] == "Intercepted Fetch Error:") return;
        const message = "Console Error";
        const sessionId = TokenStorage.sessionId || 'unknown';
  
        // Handle circular references in arguments
        const safeArgs = args.map(arg => safeStringify(arg));
        
        // Log error details with safe arguments
        const errorDetails = { 
          arguments: safeArgs,
          requestFrom: BaseUrl.BASE_APPLICATION,
          sessionId: sessionId
        };
        Logger.logApplication("ERROR", message, errorDetails);
        Logger.log("ERROR", message, errorDetails);
  
        // Call the original console.error method
        originalConsoleError.apply(console, args);
      };
    } catch (error) {
      console.warn("Failed to override console.error:", error);
    }
  }
  
  
  static logErrorEvent() {
    try{
      if (!this.isBrowser() || this.errorEventListenerRegistered) return;
      this.errorEventListenerRegistered = true;

      // Log unhandled errors
      window.addEventListener("error", (event) => {
        console.log("Inside error event...")
        const sessionId = TokenStorage.sessionId || 'unknown';
        const errorDetails = {
          error: event.error?.message || event.message,
          source: event.filename,
          line: event.lineno,
          column: event.colno,
          stack: event.error ? safeStringify(event.error.stack) : undefined,
          requestFrom: BaseUrl.BASE_APPLICATION,
          sessionId: sessionId
        }
        const message = "Unhandled Error"
        Logger.logApplication("ERROR", message, errorDetails)
        Logger.log("ERROR", message, errorDetails)
      });
    } catch(error) {
      console.warn("Failed to add error event listener:", error);
    }
  }


  static logUnhandledError() {
    try {
      if (!this.isBrowser() || this.unhandledErrorListenerRegistered) return;
      this.unhandledErrorListenerRegistered = true;

      // Log unhandled promise rejections
      window.addEventListener("unhandledrejection", (event) => {
        console.log("Inside unhandledrejection...")
        const sessionId = TokenStorage.sessionId || 'unknown';
        const errorDetails = {
          reason: event.reason?.message || String(event.reason),
          stack: event.reason?.stack || "No stack trace available",
          requestFrom: BaseUrl.BASE_APPLICATION,
          sessionId : sessionId
        };
        Logger.logApplication("ERROR", "Unhandled Promise Rejection", errorDetails);
        Logger.log("ERROR", "Unhandled Promise Rejection", errorDetails);
      });      
    } catch (error) {
      console.warn("Failed to add unhandled rejection event listener:", error);
    }

  }

  // Log user interactions
  static logUserInteractions() {
    if (!this.isBrowser() || typeof document === "undefined" || this.userInteractionListenersRegistered) return;
    this.userInteractionListenersRegistered = true;

    document.addEventListener("click", (event) => {
      const sessionId = TokenStorage.sessionId || 'unknown';
      const target = event.target as HTMLElement;
      const message = "User Click"
      const details = {
        element: target.tagName,
        id: target.id,
        classes: target.className,
        text: target.innerText?.slice(0, 50),
        requestFrom: BaseUrl.BASE_APPLICATION,
        sessionId: sessionId      
      }
       Logger.logApplication("INFO", message, details)
    });

    document.addEventListener("input", (event) => {
      const target = event.target as HTMLElement;
      const sessionId = TokenStorage.sessionId || 'unknown';
      const message = "User Input"
      const details = {
        element: target.tagName,
        id: target.id,
        value: (target as HTMLInputElement).value,
        requestFrom: BaseUrl.BASE_APPLICATION,
        sessionId: sessionId
      }
      // Logger.logApplication("INFO", message, details)

    });

    document.addEventListener("scroll", () => {
      const message = "User Scroll"
      const sessionId = TokenStorage.sessionId || 'unknown';
      const details = {
        position: window.scrollY,
        requestFrom: BaseUrl.BASE_APPLICATION,
        sessionId: sessionId     
      }
      // Logger.logApplication("INFO", message, details)
    });
  }

  static logNetworkRequests() {
    try {
      if(!this.isBrowser() || this.networkRequestsPatched) return
      this.networkRequestsPatched = true;

      const originalFetch = window?.fetch;
      // console.log("Original Fetch is equals to : ", originalFetch);
      
      if (!originalFetch) {
        throw new Error("Original fetch is not available.");
      }
  
      // Define ignored URLs
      const ignoredUrls = [BaseUrl.PostLogger(), BaseUrl.PostPrefetchConceptConnections()];
      
      window.fetch = async (...args) => {
      const sessionId = TokenStorage.sessionId || 'unknown';
        const [url, options] = args;
        const urlString: string = url instanceof Request ? url.url : (url instanceof URL ? url.toString() : url);
  
        // Check if the URL is in the ignored URLs list
        if (ignoredUrls.includes(urlString)) {
          let networkDetails = {
            'url' : urlString,
            'detail' : 'skip'
          }
          //Logger.logApplication("INFO", "Network Request", networkDetails)
          return originalFetch(...args);
        }
    
        let networkDetails:any = {
          "request": {
            type: "REQUEST",
            message: "Network Request",
            method: options?.method || "GET",
            url: urlString,
            body: options?.body,
            requestFrom: BaseUrl.BASE_APPLICATION,
            sessionId:sessionId  
          }
        };
    
        try {
          const response: Response = await originalFetch(...args) as Response;
    
          // Add response details to the network log
          networkDetails.response = {
            type: "RESPONSE",
            message: "Network Response",
            url: urlString,
            status: response.status,
            requestFrom: BaseUrl.BASE_APPLICATION,
            sessionId:sessionId    
          };
    
          // Logger.logApplication("INFO", "Successful Network Request", networkDetails)
          return response;
        } catch (error:any) {  
          // Add error details to the network log
          networkDetails.response = {
            type: "ERROR",
            message: "Network Request Failed",
            url: urlString,
            error: error instanceof Error ? error.message : String(error),
            requestFrom: BaseUrl.BASE_APPLICATION,   
            sessionId: sessionId       
          };
    
          // Log or process networkDetails if needed
          Logger.logApplication("ERROR", "Failed Network Request", networkDetails)
    
          // Throw a standard Error object (not the networkDetails object)
          throw new Error(`Network request failed for ${urlString}: ${error.message}`);
        }
      };
      
    } catch (error) {
      console.warn("Failed to override network requests:", error); 
    }

  }
  
  static logPerformanceMetrics() {
    if(!this.isBrowser() || this.performanceMetricsRegistered){
      return
    }
    this.performanceMetricsRegistered = true;

    window?.addEventListener("load", () => {
      const timing = performance.timing;
      const sessionId = TokenStorage.sessionId || 'unknown';
      const details = {
        loadTime: timing.loadEventEnd - timing.navigationStart,
        domContentLoadedTime: timing.domContentLoadedEventEnd - timing.navigationStart,
        requestFrom: BaseUrl.BASE_APPLICATION,   
        sessionId: sessionId       
      }
      // Logger.logApplication("INFO", "Performance Metrics", details)
    });
  }

  // Log route changes (SPAs)
  static logRouteChanges() {
    if (!this.isBrowser() || typeof history === "undefined" || this.routeChangeListenersRegistered) return;
    this.routeChangeListenersRegistered = true;

    const pushState = history.pushState;
    this.initialLoadTimeout = setTimeout(()=>{
      ApplicationMonitor.logOnWindowLoad();

    }, 3000);
    // setInterval(()=>{
    //   ApplicationMonitor.logSample();

    // }, 10000);
    history.pushState = function (...args) {
    const sessionId = TokenStorage.sessionId || 'unknown';
    let referrer = document.referrer;
     const newUrl = args[2] ? new URL(args[2], location.origin).href : location.href;
      const urlChange = {
        url: newUrl,
        requestFrom: BaseUrl.BASE_APPLICATION,
        sessionId: sessionId,
        referrer: referrer
      }
      Logger.logApplication("ROUTE", "Route Change", urlChange )
      
      return pushState.apply(this, args);
    };

    window?.addEventListener("beforeunload", () => {
      const sessionId = TokenStorage.sessionId || 'unknown';
      const urlChange = {
        url: location.href,
        requestFrom:BaseUrl.BASE_APPLICATION,
        sessionId:sessionId
      }
      Logger.logApplication("ROUTE", "Unload", urlChange);
    });

    window?.addEventListener("popstate", () => {
      const sessionId = TokenStorage.sessionId || 'unknown';
      let referrer = document.referrer;
      const urlChange = {
        url: location.href,
        requestFrom:BaseUrl.BASE_APPLICATION,
        sessionId:sessionId,
        referrer: referrer
      }
      Logger.logApplication("ROUTE", "Route Changed (Back/Forward)", urlChange)
    });
  }


  static logOnWindowLoad(){
      if (!this.isBrowser() || typeof localStorage === "undefined") return;
      const sessionId = TokenStorage.sessionId || 'unknown';
      let referrer = document.referrer;
      const data = JSON.stringify(Object.entries(localStorage));
      const urlChange:any = {
        url: location.href,
        requestFrom:BaseUrl.BASE_APPLICATION,
        sessionId:sessionId,
        referrer: referrer,
        localdata: data,
      };
      Logger.logApplication("ROUTE", "Initial Load", urlChange );

  }

  static logSample(){
      if (!this.isBrowser()) return;
      const sessionId = TokenStorage.sessionId || 'unknown';
      const urlChange:any = {
        url: location.href,
        requestFrom:BaseUrl.BASE_APPLICATION,
        sessionId:sessionId
      };
      Logger.logApplication("ROUTE", "Sample", urlChange );

  }

  // Log WebSocket events
  static logWebSocketEvents() {
    if(!this.isBrowser() || typeof WebSocket === "undefined" || this.webSocketEventsPatched){
      return
    }
    this.webSocketEventsPatched = true;

    const sessionId = TokenStorage.sessionId || 'unknown';
    const originalWebSocket = WebSocket;
    window.WebSocket = class extends originalWebSocket {
      constructor(url: string | URL, protocols?: string | string[]) {
        super(url, protocols);
  
        const message = "WebSocket Open"
        const data = {
          "url" : url.toString(),
          "requestFrom" : BaseUrl.BASE_APPLICATION,
          "sessionId": sessionId
        }
        Logger.logApplication("INFO", message, data)

        this.addEventListener("message", (event) => {
          const sessionId = TokenStorage.sessionId || 'unknown';
          const message = "WebSocket Message"
          const data = {
            "url" : url,
            "data" : event.data,
            "requestFrom" : BaseUrl.BASE_APPLICATION,
            "sessionId":sessionId
          }
          Logger.logApplication("INFO", message, data)

        });

        this.addEventListener("error", (error) => {
          const sessionId = TokenStorage.sessionId || 'unknown';
          const message = "WebSocket Error"
          const data = {
            "url" : url,
            "error" : error instanceof Error ? error.message : String(error),
            "requestFrom" : BaseUrl.BASE_APPLICATION,
            "sessionId":sessionId
          }
          Logger.logApplication("ERROR", message, data)
        });

        this.addEventListener("close", () => {
          const sessionId = TokenStorage.sessionId || 'unknown';
          const message = "WebSocket Closed"
          const data = {
            "url" : url,
            "requestFrom" : BaseUrl.BASE_APPLICATION,
            sessionId:sessionId
          }
          Logger.logApplication("INFO", message, data)
        });
      }
    };
  }

  private static isBrowser(): boolean {
    return typeof window !== "undefined";
  }

}


/**
 * Helper function to safely stringify values to avoid circular references
 *  
 * */ 

// Handle circular references by replacing them with a string
function safeStringify(value:unknown) : string{
  try {
    return JSON.stringify(value, (key, val) => {
      if (val && typeof val === 'object') {
        if (val instanceof Error) {
          return {
            message: val.message,
            stack: val.stack
          };
        }
      }
      return val;
    });
  } catch (error) {
    return "Error while serializing value";
  }
}
