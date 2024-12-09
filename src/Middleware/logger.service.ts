export class Logger {

    private static logLevel: string = "INFO";
    private static logs: any[] = [];
    private static readonly SERVER_URL = "https://devai.freeschema.com/api/v1/add-logs";
    private static readonly LOG_LEVELS = ["DEBUG", "INFO", "WARNING", "ERROR"];

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
        this.saveToLocalStorage(logEntry)
        
    }

    public static logInfo(
        startTime: number,
        userId: string | number,
        operationType?: "read" | "create" | "update" | "delete" | "search",
        requestFrom?: string,
        requestIP?: string,
        responseStatus?: number,
        responseData?: any,
        functionName?: string,
        functionParameters?: any[],
        userAgent?: string,
        conceptsUsed?: string[]
    ): void {
        const sessionId = getCookie("SessionId");
        const responseTime = `${(performance.now() - startTime).toFixed(3)}ms`;
        const responseSize = responseData ? `${JSON.stringify(responseData).length}` : "0";
        const logData: LogData = {
            userId,
            operationType,
            requestFrom,
            requestIP,
            responseStatus,
            responseTime,
            responseSize,
            sessionId: sessionId?.toString(),
            functionName,
            functionParameters,
            userAgent,
            conceptsUsed,
        };
    
        Logger.log("INFO", `Information logged for ${functionName}`, logData);
    }
    
    public static logError(
        startTime: number,
        userId: string | number,
        operationType?: "read" | "create" | "update" | "delete" | "search",
        requestFrom?: string,
        requestIP?: string,
        responseStatus?: number,
        responseData?: any,
        functionName?: string,
        functionParameters?: any[],
        userAgent?: string,
        conceptsUsed?: string[]
    ): void {
        const sessionId = getCookie("SessionId");
        const responseTime = `${(performance.now() - startTime).toFixed(3)}ms`;
        const responseSize = responseData ? `${JSON.stringify(responseData).length}` : "0";

        const logData: LogData = {
            userId,
            operationType,
            requestFrom,
            requestIP,
            responseStatus,
            responseTime,
            responseSize,
            sessionId: sessionId?.toString(),
            functionName,
            functionParameters,
            userAgent,
            conceptsUsed,
        };
    
        Logger.log("ERROR", `Information logged for ${functionName}`, logData);

    }

    public static logWarning(
        startTime: number,
        userId: string | number,
        operationType?: "read" | "create" | "update" | "delete" | "search",
        requestFrom?: string,
        requestIP?: string,
        responseStatus?: number,
        responseData?: any,
        functionName?: string,
        functionParameters?: any[],
        userAgent?: string,
        conceptsUsed?: string[]
    ): void {
        const sessionId = getCookie("SessionId");
        const responseTime = `${(performance.now() - startTime).toFixed(3)}ms`;
        const responseSize = responseData ? `${JSON.stringify(responseData).length}` : "0";

        const logData: LogData = {
            userId,
            operationType,
            requestFrom,
            requestIP,
            responseStatus,
            responseTime,
            responseSize,
            sessionId: sessionId?.toString(),
            functionName,
            functionParameters,
            userAgent,
            conceptsUsed,
        };
    
        Logger.log("WARNING", `Information logged for ${functionName}`, logData);

    }

    public static logDebug(
        startTime: number,
        userId: string | number,
        operationType?: "read" | "create" | "update" | "delete" | "search",
        requestFrom?: string,
        requestIP?: string,
        responseStatus?: number,
        responseData?: any,
        functionName?: string,
        functionParameters?: any[],
        userAgent?: string,
        conceptsUsed?: string[]
    ): void {
        const sessionId = getCookie("SessionId");
        const responseTime = `${(performance.now() - startTime).toFixed(3)}ms`;
        const responseSize = responseData ? `${JSON.stringify(responseData).length}` : "0";

        const logData: LogData = {
            userId,
            operationType,
            requestFrom,
            requestIP,
            responseStatus,
            responseTime,
            responseSize,
            sessionId: sessionId?.toString(),
            functionName,
            functionParameters,
            userAgent,
            conceptsUsed,
        };
    
        Logger.log("DEBUG", `Information logged for ${functionName}`, logData);
    
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
            console.log("Stored Logs : ", storedLogs);
            
            const chunkSize = 50;
            for (let i = 0; i < storedLogs.length; i += chunkSize) {
                const chunk = storedLogs.slice(i, i + chunkSize);

                console.log("Sending logs chunk:", chunk);
                console.log("Payload chunk:", JSON.stringify(chunk)); 

                const response = await fetch(Logger.SERVER_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify( chunk ),
                });

                if (!response.ok) {
                    const responseBody = await response.text();
                    console.log("Response Body on failed request : ", responseBody);
                    console.error("Failed to send logs:-", response.status, response.statusText, responseBody);
                    return;
                }
            }

            localStorage.removeItem("logs");
            console.log("Logs successfully sent and cleared.");
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
     * The userId of the request
     */
    userId?: string|Number;

    /**
     * The type of operation performed (e.g., create, read, update, delete).
     * @example "create"
     */
     operationType?: 'create' | 'read' | 'update' | 'delete' | 'search';

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
    responseStatus?: string|Number;

    /**
     * The time taken to execute the function.
     * @example "150ms"
     */
    responseTime?: string;

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

/**
 * 
 * @param cname The name of the cookie
 * @returns Cookie value
 */
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