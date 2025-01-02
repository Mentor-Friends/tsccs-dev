import { BaseUrl } from "../app";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";

export class Logger {

    private static logLevel: string = "INFO";
    private static logsData: any[] = [];
    private static applicationLogsData: any[] = [];
    private static readonly LOG_LEVELS = ["DEBUG", "INFO", "WARNING", "ERROR"];
    private static readonly SYNC_INTERVAL_MS = 120 * 1000; // 120 Sec
    private static nextSyncTime: number | null = null;
    private static appLogs:string = "app";
    private static mftsccsBrowser:string = "mftsccs";
    public static logApplicationActivationStatus:boolean = false;
    public static logPackageActivationStatus:boolean = false;


    // Private auto-sync interval management
    private static autoSyncInterval: number | null = null;

    // Ensure logs are managed automatically
    static {
        Logger.startAutoSync();
    }

    /**
     * Automatically starts the auto-sync mechanism.
     * This is private and does not need external interaction.
     */
    private static startAutoSync(): void {
        if (this.autoSyncInterval) {
            console.warn("Auto-sync is already running.");
            return;
        }

        Logger.nextSyncTime = Date.now() + Logger.SYNC_INTERVAL_MS;
        setInterval(() => {
            const currentTime = Date.now();
            // console.log("Current Time : ",currentTime);
            if (Logger.nextSyncTime && currentTime >= Logger.nextSyncTime) {
                Logger.nextSyncTime = currentTime + Logger.SYNC_INTERVAL_MS;
                Logger.sendLogsToServer();
                Logger.sendApplicationLogsToServer();
            }
        }, 60000); // Check every minute
    }

    /**
     * Automatically stops the auto-sync mechanism when required.
     */
    private static stopAutoSync(): void {
        if (this.autoSyncInterval !== null) {
            clearInterval(this.autoSyncInterval);
            this.autoSyncInterval = null;
            Logger.nextSyncTime = null;
        }
    }


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
    public static formatLogData(
        level: string,
        message: string,
        data?: LogData
    ): void {
        if (!Logger.shouldLog(level)) return;

        const logEntry : any = {
            timestamp: new Date().toLocaleString(),
            level,
            message,
            ...data,
        };

        Logger.logsData.push(logEntry);
        // this.saveLogToLocalStorage(this.mftsccsBrowser, logEntry)
    }

    public static log(
        level: 'INFO' | 'ERROR' | 'DEBUG' | 'WARNING',
        message: string,
        data?:any | null
    ) : void {
        if(!this.logPackageActivationStatus) return;
        try{
            Logger.formatLogData(level, message, data || null)
        } catch(error){
            console.error("Error on Logger Log : ", error);
        }
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
        try{
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
        } catch(error){
            console.error("Error on logInfo");
        }

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
        try{
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
        
            Logger.formatLogData("ERROR", `Information logged for ${functionName}`, logData);    
        } catch(error){
            console.error("Error on logError");
        }
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
        try{
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
        
            Logger.formatLogData("WARNING", `Information logged for ${functionName}`, logData);
    
        } catch(error){
            console.error("Error on logWarning");
        }
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
        try{
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
        
            Logger.formatLogData("DEBUG", `Information logged for ${functionName}`, logData);
    
        } catch(error){
            console.error("Error on logDebug");
        }
    
    }    

   // Log Application Activity
    public static logApplication(type: string, message: string, data?: any): void {
        if(!this.logApplicationActivationStatus) return;
        try {
            const timestamp = new Date().toLocaleString();
            
            const logEntry = {
                timestamp: timestamp,
                type: type,
                message: message,
                data: data || null,
            };

            Logger.applicationLogsData.push(logEntry);
            // this.saveLogToLocalStorage(this.appLogs, logEntry)

        } catch (error) {
            console.error("Failed to log application activity:", error);
        }
    }


    /**
     * Helper method to send logs to the server.
    */
    public static async sendApplicationLogsToServer(): Promise<void> {
        try {

            if(this.applicationLogsData.length === 0){
                return
            }

            const accessToken = TokenStorage.BearerAccessToken;
            if(!accessToken) return;

            const storedLogs = this.applicationLogsData
            
            const chunkSize = 50;
            for (let i = 0; i < storedLogs.length; i += chunkSize) {
                const chunk = storedLogs.slice(i, i + chunkSize);
                const response = await fetch(BaseUrl.PostLogger(), {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`
                    },
                    body: JSON.stringify({
                        logType : this.appLogs,
                        logData : chunk
                    })
                });

                if (!response.ok) {
                    const responseBody = await response.text();
                    console.error("Failed to send app-logs:-", response.status, response.statusText, responseBody);
                    return;
                }
            }

            // clear application log from memory
            this.applicationLogsData = [] 
            
        } catch (error) {
            console.error("Error while sending logs to server:", error);
        }
    }

    public static async sendLogsToServer(): Promise<void> {
        try {
            
            if(this.logsData.length === 0) return

            if(this.logsData.length === 0){
                return
            }
            const accessToken = TokenStorage.BearerAccessToken;
            if(!accessToken) return;

            const storedLogs = this.logsData
            
            const chunkSize = 50;
            for (let i = 0; i < storedLogs.length; i += chunkSize) {
                const chunk = storedLogs.slice(i, i + chunkSize);

                const response = await fetch(BaseUrl.PostLogger(), {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`
                    },
                    body: JSON.stringify( {
                        logType : this.mftsccsBrowser,
                        logData : chunk
                    }
                ),
                });

                if (!response.ok) {
                    const responseBody = await response.text();
                    console.error("Failed to send logs:-", response.status, response.statusText, responseBody);
                    return;
                }
            }

            // clear mftsccs log from memory
            this.logsData = [] 

        } catch (error) {
            console.error("Error while sending logs to server:", error);
        }
    }

    
    /**
     * Helper method to save logs to localStorage.
    */
    private static saveLogToLocalStorage(logType:string, logMessage:any):void{
        try{
            if (typeof localStorage === undefined) {
                console.warn("Local Storage type undefined");
                return
            } else {
                const logs = JSON.parse(localStorage?.getItem(logType) || "[]");
                logs.push(logMessage)
                localStorage?.setItem(logType, JSON.stringify(logs));
            }
        } catch(error){
            console.error("Error on saving log in localstorage");
            Logger.log("ERROR", "Error while saving log in local storage")
        }
    }

    private static clearLogsFromLocalStorage(logType:string) {
        if (typeof localStorage === undefined) {
            console.warn('localStorage is not available');
            return;
        } else {
            localStorage?.removeItem(logType);
            // console.log('Logs removed from localStorage');
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
    try{
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
    } catch(error){
        console.error("Error on getcookie");
        return ""
    }
  }
