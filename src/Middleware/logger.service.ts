export class Logger {

    // Set default log label as INFO
    private static logLabel:string = "INFO"

    // Method to set log label
    public static setLogLabel(label:string){
        Logger.logLabel = label;
    }

    // Determines whether the log level should be displayed
    private static shouldLog(level: string): boolean {
        // Defines the priority of log levels
        const levels = ["DEBUG", "INFO", "WARNING", "ERROR"];
        return levels.indexOf(level) >= levels.indexOf(Logger.logLabel);
    }

    // Main Logging Function
    public static log(label:string, message:string, data?:LogData){
        // Check either input log label meet the required log label else skip
        if (!Logger.shouldLog(label)) return;

        const timestamp = new Date().toISOString();
        const logEntry = `${timestamp} [${label}]: ${message}`;

        // If data is passed, format it nicely as JSON
        if (data) {
            console.log(logEntry, JSON.stringify(data, null, 2));  // Pretty prints data
        } else {
            console.log(logEntry);  // Logs just the message
        }
    }
}


/**
 * Represents the structure of log data used for application monitoring and anomaly detection.
 */
export interface LogData {
    /**
     * The origin of the request (e.g., browser, API client).
     * @example "Browser"
     */
    requestFrom?: string;

    /**
     * The IP address of the client making the request.
     * @example "192.168.1.1"
     */
    requestIP?: string;

    /**
     * The HTTP status code of the request.
     * @example "200", "404", "500"
     */
    requestStatus?: string;

    /**
     * The time taken to execute the function.
     * @example "150ms"
     */
    executionTime?: string;

    /**
     * The size of the response payload.
     * @example "15KB", "1.2MB"
     */
    responseSize?: string;

    /**
     * The name of the function being logged.
     * @example "fetchUserData"
     */
    functionName?: string;

    /**
     * The parameters used in the function.
     * This should include all inputs to the function.
     * @example [ "userId", "includeMetadata" ]
     */
    functionParameters?: any[];

    /**
     * The user agent details for the request.
     * This includes information such as the browser or device making the request.
     * @example "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
     */
    userAgent?: string;

    /**
     * A list of concepts (features or modules) used during the function execution.
     * @example [ "Authentication", "Data Retrieval" ]
     */
    conceptsUsed?: string[];
}
