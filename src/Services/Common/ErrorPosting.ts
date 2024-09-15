import { FreeSchemaResponse } from "../../DataStructures/Responses/ErrorResponse";

export  function HandleHttpError(response: Response){
    if(response.status == 401){
        let errorResponse = new FreeSchemaResponse(response.statusText, false, response.status, "");
        errorResponse.setUrl(response.url);
        throw errorResponse;
    }
}