import { FreeSchemaResponse } from "../../DataStructures/Responses/ErrorResponse";

export  function HandleHttpError(response: Response){
    if(response.status >= 400){
        let errorResponse = new FreeSchemaResponse(response.statusText, false, response.status, "");
        errorResponse.setUrl(response.url);
        throw errorResponse;
    } 
}

export function HandleInternalError(error: any, url: string = ""){
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