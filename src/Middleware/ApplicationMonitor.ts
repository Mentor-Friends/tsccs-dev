import { Logger } from "./logger.service";

export class ApplicationMonitor {
  static initialize() {
    console.log("Initialized Application Moniroring...");
    // Log unhandled errors
    window.addEventListener("error", (event) => {
      console.log("error called...");
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
      console.log("unhandledrejection called...");
      const errorDetails = {
        reason: event.reason,
        stack: event.reason?.stack,
      }
      const message = "Unhandled Promise Rejection"
      Logger.logApplication("Unhandled", message, errorDetails)
    });

    // Log user interactions
    document.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      console.log("Click Event called...");
      const errorDetails = {
        element: target.tagName,
        id: target.id,
        classes: target.className,
        text: target.innerText?.slice(0, 50),
      }
      const message = "User Click"
      Logger.logApplication("Event Click", message, errorDetails)
     
    });

    // Log network requests requires interception with Service Worker or monkey-patching
    this.logNetworkRequests();

    // Log application state changes for SPAs
    this.logRouteChanges();
  }

  static logNetworkRequests() {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const [url, options] = args;
      const urlString = url instanceof Request ? url.url : (url instanceof URL ? url.toString() : url);
  
      console.log("Custom fetch called for:", urlString);
  
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
  
        Logger.logApplication("Network", "Network Request", networkDetails)
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
        Logger.logApplication("Network", "Network Request", networkDetails)
  
        // Throw a standard Error object (not the networkDetails object)
        throw new Error(`Network request failed for ${urlString}: ${error.message}`);
      }
    };
  }
  
  static logPerformanceMetrics() {
    window.addEventListener("load", () => {
      const timing = performance.timing;
      const details = {
        loadTime: timing.loadEventEnd - timing.navigationStart,
        domContentLoadedTime: timing.domContentLoadedEventEnd - timing.navigationStart,
      }
      Logger.logApplication("Load", "Performance Metrics", details)
    });
  }

  // Log route changes (SPAs)
  static logRouteChanges() {
    const pushState = history.pushState;
    history.pushState = function (...args) {
      const urlChange = {
        url: args[2]?.toString(),
      }
      Logger.logApplication("Route Changed", "Route Change", urlChange )
      return pushState.apply(this, args);
    };

    window.addEventListener("popstate", () => {
      const urlChange = {
        url: location.href
      }
      Logger.logApplication("Route Changed", "Route Changed (Back/Forward)", urlChange)
    });
  }

}

