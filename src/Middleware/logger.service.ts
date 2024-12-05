export class Logger {

    private static logLevel: string = "INFO";
    private static logs: any[] = [];
    private static readonly SERVER_URL = "https://devai.freeschema.com/api/v1/add-logs";
    private static readonly LOG_LEVELS = ["DEBUG", "INFO", "WARNING", "ERROR"];

    // // Set default log label as INFO
    // private static logLevel:string = "INFO"
    // private static logs : any[] = [];

    /**
     * Set the log level (e.g., "DEBUG", "INFO", "WARNING", "ERROR").
     */
     public static setLogLevel(level: string): void {
        Logger.logLevel = level;
    }

    /**
     * Determines whether the current log level permits the given level to be logged.
     */
    private static shouldLog(level: string): boolean {
        return Logger.LOG_LEVELS.indexOf(level) >= Logger.LOG_LEVELS.indexOf(Logger.logLevel);
    }
    // private static shouldLog(level: string): boolean {
    //     const levels = ["DEBUG", "INFO", "WARNING", "ERROR"];
    //     return levels.indexOf(level) >= levels.indexOf(Logger.logLevel);
    // }


    /**
     * Logs a message with optional additional structured data.
     */
    public static log(
        level: string,
        message: string,
        data?: LogData
    ): void {
        if (!Logger.shouldLog(level)) return;

        const logEntry : any = {
            timestamp: new Date().toISOString(),
            level,
            message,
            ...data,
        };

        Logger.logs.push(logEntry);
        console.log("Log Data in Logger Class : ", Logger.logs);

        const storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");
        storedLogs.push(logEntry);
        console.log("Stored Logs : ", storedLogs);
        localStorage.setItem("logs", JSON.stringify(storedLogs));
        
        // try {
        //     const storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");
        //     storedLogs.push(logEntry);
        //     console.log("Stored Logs : ", storedLogs);
        //     localStorage.setItem("logs", JSON.stringify(storedLogs));
        // } catch (error) {
        //     console.error("Failed to save log to localStorage:", error);
        // }
    }

    /**
     * Helper method to save logs to localStorage.
     */
    private static saveToLocalStorage(logMessage: string): void {
        try {
        const logs = JSON.parse(localStorage.getItem("logs") || "[]");
        logs.push(logMessage);
        localStorage.setItem("logs", JSON.stringify(logs));
        } catch (error) {
        console.error("Failed to save log to localStorage:", error);
        }
    }

    /**
     * Helper method to send logs to the server.
     */
    public static async sendLogsToServer(): Promise<void> {
        try {
            console.log("Log sending to server...");
            
            const storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");
            if (storedLogs.length === 0) return;

            const chunkSize = 50;
            for (let i = 0; i < storedLogs.length; i += chunkSize) {
                const chunk = storedLogs.slice(i, i + chunkSize);

                const response = await fetch(Logger.SERVER_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ logs: chunk }),
                });

                if (!response.ok) {
                    console.error("Failed to send logs:", response.statusText);
                    return;
                }
            }

            localStorage.removeItem("logs");
        } catch (error) {
            console.error("Error while sending logs to server:", error);
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
    requestStatus?: string|Number;

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
     * The Session Id
     */
    sessionId?: string|number;

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


export function getCookie(cname:string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }