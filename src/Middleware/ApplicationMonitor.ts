import { Logger } from "./logger.service";

export class ApplicationMonitor {
  static initialize() {
    console.log("Initialized Application Moniroring...");
    // Log unhandled errors
    window.addEventListener("error", (event) => {
      // console.log("error called...");
      const errorDetails = {
        error: event.error?.message || event.message,
        source: event.filename,
        line: event.lineno,
        column: event.colno,
        stack: event.error?.stack
      }
      const message = "Unhandled Error"
      Logger.logApplication("Error", message, errorDetails)
    });

    // Log unhandled promise rejections
    window.addEventListener("unhandledrejection", (event) => {
      // console.log("unhandledrejection called...");
      const errorDetails = {
        reason: event.reason,
        stack: event.reason?.stack,
      }
      const message = "Unhandled Promise Rejection"
      Logger.logApplication("Error", message, errorDetails)
    });

    // Log user interactions
    this.logUserInteractions()

    // Log network requests requires interception with Service Worker or monkey-patching
    this.logNetworkRequests();

    // Log application state changes for SPAs
    this.logRouteChanges();


  }

   // Log user interactions
   static logUserInteractions() {
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const message = "User Click"
      const details = {
        element: target.tagName,
        id: target.id,
        classes: target.className,
        text: target.innerText?.slice(0, 50),
      }
      Logger.logApplication("INFO", message, details)
    });

    document.addEventListener("input", (event) => {
      const target = event.target as HTMLElement;
      const message = "User Input"
      const details = {
        element: target.tagName,
        id: target.id,
        value: (target as HTMLInputElement).value,
      }
      Logger.logApplication("INFO", message, details)

    });

    window?.addEventListener("scroll", () => {
      const message = "User Scroll"
      const details = {
        position: window.scrollY,
      }
      Logger.logApplication("INFO", message, details)
    });
  }

  static logNetworkRequests() {
    const originalFetch = window?.fetch;
    window.fetch = async (...args) => {
      const [url, options] = args;
      const urlString = url instanceof Request ? url.url : (url instanceof URL ? url.toString() : url);
  
      // console.log("Custom fetch called for:", urlString);
  
      let networkDetails:any = {
        "request": {
          type: "REQUEST",
          message: "Network Request",
          method: options?.method || "GET",
          url: urlString,
          body: options?.body,
        }
      };
  
      try {
        const response = await originalFetch(...args);
  
        // Add response details to the network log
        networkDetails["response"] = {
          type: "RESPONSE",
          message: "Network Response",
          url: urlString,
          status: response.status,
        };
  
        Logger.logApplication("INFO", "Network Request", networkDetails)
        return response;
      } catch (error:any) {
        console.error("Fetch failed for:", urlString, error); // Debugging log
  
        // Add error details to the network log
        networkDetails["response"] = {
          type: "ERROR",
          message: "Network Request Failed",
          url: urlString,
          error: error instanceof Error ? error.message : String(error),
        };
  
        // Log or process networkDetails if needed
        Logger.logApplication("ERROR", "Network Request", networkDetails)
  
        // Throw a standard Error object (not the networkDetails object)
        throw new Error(`Network request failed for ${urlString}: ${error.message}`);
      }
    };
  }
  
  static logPerformanceMetrics() {
    window?.addEventListener("load", () => {
      const timing = performance.timing;
      const details = {
        loadTime: timing.loadEventEnd - timing.navigationStart,
        domContentLoadedTime: timing.domContentLoadedEventEnd - timing.navigationStart,
      }
      Logger.logApplication("INFO", "Performance Metrics", details)
    });
  }

  // Log route changes (SPAs)
  static logRouteChanges() {
    const pushState = history.pushState;
    history.pushState = function (...args) {
      const urlChange = {
        url: args[2]?.toString(),
      }
      Logger.logApplication("INFO", "Route Change", urlChange )
      return pushState.apply(this, args);
    };

    window?.addEventListener("popstate", () => {
      const urlChange = {
        url: location.href
      }
      Logger.logApplication("INFO", "Route Changed (Back/Forward)", urlChange)
    });
  }

  // Log WebSocket events
  static logWebSocketEvents() {
    const originalWebSocket = WebSocket;
    window.WebSocket = class extends originalWebSocket {
      constructor(url: string | URL, protocols?: string | string[]) {
        super(url, protocols);
  
        const message = "WebSocket Open"
        const data = {
          "url" : url.toString()
        }
        Logger.logApplication("INFO", message, data)

        this.addEventListener("message", (event) => {
          const message = "WebSocket Message"
          const data = {
            "url" : url,
            "data" : event.data
          }
          Logger.logApplication("INFO", message, data)

        });

        this.addEventListener("error", (error) => {
          const message = "WebSocket Error"
          const data = {
            "url" : url,
            "error" : error instanceof Error ? error.message : String(error),
          }
          Logger.logApplication("INFO", message, data)
        });

        this.addEventListener("close", () => {
          const message = "WebSocket Closed"
          const data = {
            "url" : url,
          }
          Logger.logApplication("INFO", message, data)
        });
      }
    };
  }

}

