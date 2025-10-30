/**
 * @module ErrorPosting
 * @description Provides error handling functions for HTTP and internal errors with structured error responses
 */

import { FreeSchemaResponse } from "../../DataStructures/Responses/ErrorResponse";

/**
 * Handles HTTP errors by creating and throwing structured error responses.
 * Specifically handles 401 Unauthorized errors.
 *
 * @param {Response} response - The HTTP Response object to process
 * @throws {FreeSchemaResponse} Throws a structured error response for unauthorized requests
 *
 * @example
 * ```typescript
 * const response = await fetch("https://api.example.com/data");
 * HandleHttpError(response);
 * // Throws FreeSchemaResponse if status is 401
 * ```
 *
 * @remarks
 * - Currently only handles 401 status codes
 * - Creates FreeSchemaResponse with status text, success=false, status code, and URL
 * - Other status codes are not handled (function returns normally)
 * - Useful for API call error handling
 */
export  function HandleHttpError(response: Response){
    if(response.status == 401){
        let errorResponse = new FreeSchemaResponse(response.statusText, false, response.status, "");
        errorResponse.setUrl(response.url);
        throw errorResponse;
    }
}

/**
 * Handles internal application errors by creating and throwing structured error responses.
 * Wraps any error object into a FreeSchemaResponse.
 *
 * @param {any} error - The error object to process
 * @param {string} [url=""] - Optional URL associated with the error
 * @throws {FreeSchemaResponse} Always throws a structured error response
 *
 * @example
 * ```typescript
 * try {
 *   // Some operation
 *   throw new Error("Something went wrong");
 * } catch (error) {
 *   HandleInternalError(error, "https://api.example.com/data");
 * }
 * ```
 *
 * @remarks
 * - Checks if error has a status property to use, defaults to 500
 * - Creates FreeSchemaResponse with error message, success=false, status, and stack trace
 * - Sets URL if provided
 * - Useful for consistent error handling throughout the application
 * - Always throws after creating the response (never returns)
 */
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