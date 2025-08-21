import { strict } from "assert";
import { BaseUrl } from "../app";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";
import { UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";

export class Logger {

    private static isLoggerActive: boolean = true;
    private static lastCheck:Date = new Date();
    private static checkInterval: number = 0;
    private static logLevel: string = "INFO";
    private static packageLogsData: any[] = [];
    private static applicationLogsData: any[] = [];
    private static readonly LOG_LEVELS = ["DEBUG", "INFO", "WARNING", "ERROR", "ROUTE"];
    private static readonly SYNC_INTERVAL_MS = 60 * 1000; // 60 Sec
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
        }, 30000); // Check every half minute
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
    ) {
        // if (!this.shouldLog(level)) return ;

        const logEntry : any = {
            timestamp: new Date().toISOString(),
            level,
            message,
            ...data,
        };

        this.packageLogsData.push(logEntry);
        // console.log("Log Update Test for functions : ", this.packageLogsData);
        if(level == "ERROR"){
            this.sendPackageLogsToServer(); 
            this.sendApplicationLogsToServer();
        }
        //this.saveLogToLocalStorage(this.mftsccsBrowser, logEntry)
         // console.log("Package Log Updated : ", this.packageLogsData);
         return logEntry;

    }

    public static log(
        level: 'INFO' | 'ERROR' | 'DEBUG' | 'WARNING',
        message: string,
        data?:any | null
    ) {
        if(!this.logPackageActivationStatus) return;
        try{
            this.formatLogData(level, message, data || null)
        } catch(error){
            console.error("Error on Logger Log : ", error);
        }
    }

    /**
     * Updates log data with execution details.
     * @param logData The log data object to be updated.
    */
    public static logUpdate(logData:LogData){

        try {
            if(!this.logPackageActivationStatus){
                return {};
            }

            //console.log("Log Data for update is : ", logData);
            if (!logData) {
                // console.error("logUpdate failed: logData is undefined");
                return {};
            }

            const updateTime = Date.now();
            
            //  prevent undefined subtraction
            logData.startTime = logData.startTime ?? updateTime;
    
            const responseTime = updateTime - logData.startTime;

            // Update log data with execution details
            logData.responseTime = `${responseTime} ms`;
            if (!logData.serviceWorker === true) {
                logData.serviceWorker = false;
            }
            // logData.endTime = updateTime;
            // console.log("Updated Log Data:", logData);
        } catch (error) {
            // console.error("Error updating log data:", error);
            UpdatePackageLogWithError(logData, "Logger.logUpdate", error)
        }

    }


    public static logfunction(myFunction:string, ...args:any[]){
        if(!this.logPackageActivationStatus) return {};
        const startTime = Date.now(); 
      // console.log("Existing Package Log : ", this.packageLogsData.length);
        //console.log("Package Log Activation Status: ", this.logPackageActivationStatus);
        
        //   if(this.logPackageActivationStatus){
        // console.log("Inside Package Log Activation Status: ");
        let myarguments: any = args;
        //let size = Object.values(myarguments[0]).length;
        const applicationId = BaseUrl.getRandomizer();
        const sessionId = TokenStorage.sessionId;

        // console.log("info", myfunction.name, myarguments, myarguments[0].length);
        let logData: LogData = {
            startTime: startTime,
            functionName: myFunction,
            functionParameters: myarguments,
            requestFrom: BaseUrl.BASE_APPLICATION,
            sessionId: sessionId,
            applicationId: applicationId
        }
        return this.formatLogData('INFO', "function called", logData);
        //   }

        // }

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
            const sessionId = TokenStorage.sessionId;
            const responseTime = `${(performance.now() - startTime).toFixed(3)}ms`;
            const responseSize = responseData ? `${JSON.stringify(responseData).length}` : "0";
    
            const logData: LogData = {
                startTime,
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

    public static logApplication(level: string, message: string, data?: any): void {
        //console.log("LogApplicationActivationStatus  : ", this.logApplicationActivationStatus)
        if(!this.logApplicationActivationStatus) return;
        try {
            const timestamp = new Date().toISOString();
            
            const logEntry = {
                timestamp: timestamp,
                level: level,
                message: message,
                data: data || null,
            };

            this.applicationLogsData.push(logEntry);
            if(level == "ROUTE"){
                this.sendPackageLogsToServer(); 
                this.sendApplicationLogsToServer();
            }
            // this.saveLogToLocalStorage(this.appLogs, logEntry)
            // console.log("Application Log Updated : ", this.applicationLogsData);

        } catch (error) {
            console.error("Failed to log application activity:", error);
        }
    }

    public static async checkLoggerServerStatus(){
        let cooldownMs = 10000 + Logger.checkInterval;
        const now = new Date();
         if (Logger.lastCheck && now.getTime() - Logger.lastCheck.getTime() < cooldownMs) {
            console.log("still cooling down");
            return;
         }
         try{
            let url = BaseUrl.LogHealth();
            Logger.lastCheck = new Date();
            const res = await fetch(url, { method: "GET" }); 
            if (res.ok) {
                Logger.isLoggerActive = true;
                Logger.checkInterval = 0;
            }
         }
         catch(error){
            console.warn("This is error in the logger check");
         }
        Logger.checkInterval = Logger.checkInterval + 500;
    }

    /**
     * Helper method to send logs to the server.
    */
    public static async sendApplicationLogsToServer(): Promise<void> {
        const storedLogs = this.applicationLogsData

        try {
            if(!Logger.isLoggerActive){
                Logger.checkLoggerServerStatus();
                return;
            }
           // console.log("Log from sendApplicationLogsToServer : ", this.applicationLogsData);
            
            if(storedLogs.length === 0){

                return
            }
            this.applicationLogsData = []

            const accessToken = TokenStorage.BearerAccessToken;

            // clear application log from memory
            const chunkSize = 50;
            let header = GetRequestHeader();
            let i = 0;
            while(storedLogs.length != 0)
            { 
                debugger;               
                // console.log(`${i}` , " = Current length of the storedLogs  : ", storedLogs.length);

                const chunk = storedLogs.slice(0, chunkSize);
                const response = await fetch(BaseUrl.PostLogger(), {
                    method: "POST",
                    headers: header,
                    body: JSON.stringify({
                        logType : this.appLogs,
                        logData : chunk
                    })
                });

                if (!response.ok) {
                    
                        if (response.status === 404) {
                           Logger.isLoggerActive = false;
                        }
                }
                storedLogs.splice(0, chunkSize);
                i = i+chunkSize;
                i++;
            }
            
        } catch (error) {
            Logger.isLoggerActive = false;
            //this.applicationLogsData.push(...storedLogs);
          //  console.error("Network error while sending logs:", error);
        }
    }

    public static async sendPackageLogsToServer(): Promise<void> {
        const storedLogs = this.packageLogsData;

        try {
            if(!Logger.isLoggerActive){
                Logger.checkLoggerServerStatus();
                return 
            }
            //console.log("Log from sendPackageLogsToServer : ", this.packageLogsData);
            if(storedLogs.length === 0) {

                return
            }
            // if(this.packageLogsData.length === 0) return
            this.packageLogsData = [];
            //console.log("Stored Logs for send : ", storedLogs);

            const chunkSize = 300;
            let i = 0;
            while(storedLogs.length != 0)
            {   
                // console.log(`${i}` , " = Current length of the storedLogs  : ", storedLogs.length);
                const chunk = storedLogs.slice(0, chunkSize)
                // console.log("Chunk : ", chunk);
            //for (let i = 0; i < storedLogs.length; i += chunkSize) {
                // const chunk = storedLogs.slice(i, i + chunkSize);
                // console.log("Package Log URL : ", BaseUrl.PostLogger);
                
                let header= GetRequestHeader();
                const response = await fetch(BaseUrl.PostLogger(), {
                    method: "POST",
                    headers: header,
                    body: JSON.stringify( {
                        logType : this.mftsccsBrowser,
                        logData : chunk
                    }
                ),
                });

                if (!response.ok) {
                        if (response.status === 404) {
                           Logger.isLoggerActive = false;
                        }
                   // this.packageLogsData.push(...storedLogs);
                    //console.error("Failed to send logs:-", response.status, response.statusText, responseBody);
                    return;
                }
                
                storedLogs.splice(0, chunkSize);
                // i += chunkSize;
                i++;
            }

            // clear mftsccs log from memory
            //this.packageLogsData = [] 

        } catch (error) {
            Logger.isLoggerActive = false;
            //this.packageLogsData.push(...storedLogs);
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
     * The start and end time 
     */
    startTime: number;
    endTime?: number;

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
     * The error return
     * @example function could not execute
     */
    errorMessage? : string,

    /**
     * The parameters used in the function.
     * This should include all inputs to the function.
     * @example [ "userId", "concept" ]
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
     * @example [105292435 , 105292431  ]
     */
    conceptsUsed?: string[];

    /**
     * Service worker
     * @example boolean
     */
    serviceWorker? : boolean 
}

/**getCookie
 * 
 * @param cname The name of the cookie
 * @returns Cookie value
 */
export function getCookie(cname:string) {

    try{
        if(sessionStorage.getItem('session')){
        let sessionId = sessionStorage.getItem('session');
        return sessionId;
        }
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
        return "999";            
    } catch(error){
        console.error("Error on getcookie", error);
        return "999"
    }
}
