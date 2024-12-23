import { EventLogger } from "./EventLogger";
import { Logger } from "./logger.service";

/**
 * Handles errors in function execution by logging relevant details.
 * @param error The error object caught during execution.
 * @param data Additional context or data to log with the error.
 */
export function HandleFunctionError(error: any, data?: any) {
    if (error) {
        const errorDetails = {
            message: error.message || "Unknown function error",
            stack: error.stack || "No stack trace",
            context: data || "No context provided",
        };
        Logger.log("ERROR", "Function Error", errorDetails);
    }
}


/**
 * Handles network errors by logging request and response details.
 * Extend this to handle network-specific errors in `fetch` or `XMLHttpRequest`.
 * @param request Details of the network request.
 * @param error The error object or response details.
 */
export function HandleNetworkError(request: any, error: any) {
    const networkErrorDetails = {
        message: "Network Error",
        request: {
            method: request.method || "Unknown",
            url: request.url || "Unknown URL",
            body: request.body || "No body provided",
        },
        response: error.response || "No response details",
        stack: error.stack || "No stack trace",
    };

    Logger.log("ERROR", "Network Error", networkErrorDetails);
}

/**
 * Handles errors during DOM or event interactions by logging event-specific details.
 * @param event The event object where the error occurred.
 * @param error The error object caught during execution.
 */
export function HandleEventError(event: Event, error: any) {
    const target = event.target as HTMLElement;
    const eventErrorDetails = {
        message: "Event Error",
        eventType: event.type,
        element: {
            tagName: target?.tagName || "Unknown",
            id: target?.id || "No ID",
            classes: target?.className || "No classes",
            text: target?.innerText?.slice(0, 50) || "No text",
        },
        errorDetails: {
            message: error?.message || "Unknown error",
            stack: error?.stack || "No stack trace",
        },
    };

    Logger.log("ERROR", "Event Error", eventErrorDetails);
}
