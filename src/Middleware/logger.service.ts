import { strict } from "assert";
import { BaseUrl } from "../app";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";

export class Logger {

    private static logLevel: string = "INFO";
    private static packageLogsData: any[] = [];
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
        this.startAutoSync();
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
        this.nextSyncTime = Date.now() + this.SYNC_INTERVAL_MS;

        setInterval(() => {
            const currentTime = Date.now();
            // console.log("Current Time : ",currentTime);
            if (this.nextSyncTime && currentTime >= this.nextSyncTime) {
                // console.log("Time to sync log.")
                this.nextSyncTime = currentTime + this.SYNC_INTERVAL_MS;
                this.sendPackageLogsToServer();
                this.sendApplicationLogsToServer();
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
            this.nextSyncTime = null;
        }
    }


    /**
     * Set the log level (e.g., "DEBUG", "INFO", "WARNING", "ERROR").
     */
     public static setLogLevel(level: string): void {
        this.logLevel = level;
    }

    /**
     * Determines whether the current log level permits the given level to be logged.
     */
    private static shouldLog(level: string): boolean {
        return this.LOG_LEVELS.indexOf(level) >= this.LOG_LEVELS.indexOf(this.logLevel);
    }


    /**
     * Logs a message with optional additional structured data.
     */
    public static formatLogData(
        level: string,
        message: string,
        data?: LogData
    ): void {
        if (!this.shouldLog(level)) return;

        const logEntry : any = {
            timestamp: new Date().toLocaleString(),
            level,
            message,
            ...data,
        };

        this.packageLogsData.push(logEntry);
        if(level == "ERROR"){
            this.sendPackageLogsToServer();
            this.sendApplicationLogsToServer();
        }
        //this.saveLogToLocalStorage(this.mftsccsBrowser, logEntry)
         // console.log("Package Log Updated : ", this.packageLogsData);

    }

    

    public static log(
        level: 'INFO' | 'ERROR' | 'DEBUG' | 'WARNING',
        message: string,
        data?:any | null
    ) : void {
        if(!this.logPackageActivationStatus) return;
        try{
            this.formatLogData(level, message, data || null)
        } catch(error){
            console.error("Error on Logger Log : ", error);
        }
    }

    public static logfunction(myfunction:string, ...args:any[]){
        
      //  if(this.logPackageActivationStatus){
      let myarguments: any = args;
      //let size = Object.values(myarguments[0]).length;

           // console.log("info", myfunction.name, myarguments, myarguments[0].length);
            let logData: LogData = {
                functionName: myfunction,
                functionParameters: myarguments,
                requestFrom: BaseUrl.BASE_APPLICATION,
                sessionId: TokenStorage.sessionId,
                applicationId: BaseUrl.getRandomizer()
            }
            this.formatLogData('INFO', "function called", logData);
       // }
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
        
            this.log("INFO", `Information logged for ${functionName}`, logData);
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
        
            this.formatLogData("ERROR", `Information logged for ${functionName}`, logData);    
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
        
            this.formatLogData("WARNING", `Information logged for ${functionName}`, logData);
    
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
        
            this.formatLogData("DEBUG", `Information logged for ${functionName}`, logData);
    
        } catch(error){
            console.error("Error on logDebug");
        }
    
    }    

   // Log Application Activity
    public static logApplication(type: string, message: string, data?: any): void {
        console.log("LogApplicationActivationStatus  : ", this.logApplicationActivationStatus)
        if(!this.logApplicationActivationStatus) return;
        try {
            const timestamp = new Date().toLocaleString();
            
            const logEntry = {
                timestamp: timestamp,
                type: type,
                message: message,
                data: data || null,
            };

            this.applicationLogsData.push(logEntry);
            // this.saveLogToLocalStorage(this.appLogs, logEntry)
            // console.log("Application Log Updated : ", this.applicationLogsData);

        } catch (error) {
            console.error("Failed to log application activity:", error);
        }
    }


    /**
     * Helper method to send logs to the server.
    */
    public static async sendApplicationLogsToServer(): Promise<void> {
        const storedLogs = this.applicationLogsData

        try {

            console.log("Log from sendApplicationLogsToServer : ", this.applicationLogsData);
            if(this.applicationLogsData.length === 0){
                return
            }

            const accessToken = TokenStorage.BearerAccessToken;
            if(!accessToken) return;

            // clear application log from memory
            this.applicationLogsData = [] 
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
                    this.applicationLogsData.push(storedLogs);
                   // console.error("Failed to send app-logs:-", response.status, response.statusText, responseBody);
                }
            }


            
        } catch (error) {
            this.applicationLogsData.push(storedLogs);
          //  console.error("Network error while sending logs:", error);
        }
    }

    public static async sendPackageLogsToServer(): Promise<void> {
        const storedLogs = this.packageLogsData;

        try {

            console.log("Log from sendPackageLogsToServer : ", this.packageLogsData);
            
            if(this.packageLogsData.length === 0) return

            const accessToken = TokenStorage.BearerAccessToken;
            if(!accessToken) return;

            this.packageLogsData = [];
            const chunkSize = 300;
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
                    this.packageLogsData.push(storedLogs);
                    //console.error("Failed to send logs:-", response.status, response.statusText, responseBody);
                    return;
                }
            }

            // clear mftsccs log from memory
            //this.packageLogsData = [] 

        } catch (error) {
            this.packageLogsData.push(storedLogs);
           //console.error("Error while sending logs to server:", error);
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
            this.log("ERROR", "Error while saving log in local storage")
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

    applicationId?: number;

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
        console.log("this is the decoded cookie", decodedCookie);
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
