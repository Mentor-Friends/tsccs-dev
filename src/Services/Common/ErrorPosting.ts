import { FreeSchemaResponse } from "../../DataStructures/Responses/ErrorResponse";

export  function HandleHttpError(response: Response){
    if(response.status == 401){
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

export function HandleInternalError(error: any, url: string = ""){
    let errorResponse = new FreeSchemaResponse(error.message, false, 500, error.stack);
    errorResponse.setUrl(url);
    throw errorResponse;
}