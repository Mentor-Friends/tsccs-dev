import { Logger } from "../../app";
import { FreeSchemaResponse } from "../../DataStructures/Responses/ErrorResponse";

export  function HandleHttpError(response: Response){
    Logger.log("ERROR",response.statusText, { 'code': response.status, 'data': response.statusText});
    if(response.status == 401 || response.status == 406){
        let errorResponse = new FreeSchemaResponse(response.statusText, false, response.status, "");
        errorResponse.setUrl(response.url);
        throw errorResponse;
    }
    else if(response.status == 500){
        let errorResponse = new FreeSchemaResponse(response.statusText, false, response.status, "");
        errorResponse.setUrl(response.url);
        throw errorResponse;
    }
}

export  function HandleHttpErrorObject(response: Response, output:any= {}){
    Logger.log("ERROR",output.statusText, { 'code': response.status, 'data': response.status});
    if(response.status == 401 || response.status == 406){
        let errorResponse = new FreeSchemaResponse(output.statusText, false, response.status, "");
        errorResponse.setUrl(response.url);
        throw errorResponse;
    }
    else if(response.status == 500){
        let errorResponse = new FreeSchemaResponse(output.statusText, false, response.status, "");
        errorResponse.setUrl(response.url);
        throw errorResponse;
    }
}

export function HandleInternalError(error: any, url: string = ""){
    Logger.log("ERROR",error.message, { 'code': error.status, 'data': error.stack});
    if(error.status){
        let errorResponse = new FreeSchemaResponse(error.message, false, error.status, error.stack);
        errorResponse.setUrl(url);
        throw errorResponse;
    }
    else{
        let errorResponse = new FreeSchemaResponse(error.message, false, 500, error.stack);
        errorResponse.setUrl(url);
        throw errorResponse;
    }
    throw error;
}

/**
 * Handle errors inside package functions
 * @updateLog existing function log at start
 * @param functionName name of the function that encountered the error
 * @param error error appeared
 */
export function UpdatePackageLogWithError(logData: any, functionName: string, error: any):void {
    try {
        if (!logData) {
            console.error(`Error in ${functionName}: logData is undefined`);
            return;
        }

        const errorTime = Date.now();
         // Ensure startTime is set
        logData.startTime = logData.startTime ?? errorTime;
        logData.responseTime = `${errorTime - logData.startTime} ms`;

        logData.level = "ERROR";
        logData.errorMessage = error?.message || "Unknown error occurred";
        
        // Log additional error details
         console.error(`Error in function ${functionName}:`, error);
    } catch (err) {
        console.error("Failed to handle package function error:", err);
    }
}

