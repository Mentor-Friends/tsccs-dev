/**
 * @fileoverview Defines the FreeSchemaResponse class for standardized error and response handling.
 * @module DataStructures/Responses/ErrorResponse
 */

import { BaseUrl } from "../BaseUrl";

/**
 * Standardized response class for FreeSchema API operations.
 * This class provides a consistent response structure across all API operations,
 * eliminating the need to manually handle HTTP response codes. It supports method
 * chaining through fluent setters and provides accessors for all response properties.
 *
 * @class FreeSchemaResponse
 *
 * @example
 * ```typescript
 * // Create a success response
 * const response = new FreeSchemaResponse(
 *   "Data retrieved successfully",
 *   true,
 *   200,
 *   { users: [...] }
 * );
 * ```
 *
 * @example
 * ```typescript
 * // Create an error response with chaining
 * const errorResponse = new FreeSchemaResponse("", false, 500, null)
 *   .setMessage("Internal server error")
 *   .setUrl("https://api.example.com/users");
 * ```
 *
 * @example
 * ```typescript
 * // Accessing response data
 * if (response.getOk()) {
 *   const data = response.getData();
 *   console.log(response.getMessage());
 * }
 * ```
 */
export class FreeSchemaResponse{
    /**
     * Human-readable message describing the result of the operation.
     * @private
     * @type {string}
     */
    private message: string

    /**
     * HTTP status code representing the result of the operation.
     * Standard codes include: 200 (OK), 401 (Unauthorized), 500 (Internal Server Error), etc.
     * @private
     * @type {number}
     */
    private status: number

    /**
     * The response data payload.
     * Can contain any type of data depending on the operation performed.
     * @private
     * @type {any}
     */
    private data: any

    /**
     * Boolean flag indicating operation success (true) or failure (false).
     * @private
     * @type {boolean}
     */
    private ok: boolean

    /**
     * The URL that originated the response or error.
     * Defaults to the base API URL.
     * @private
     * @type {string}
     */
    private url: string = BaseUrl.BASE_URL;


    /**
     * Creates a new FreeSchemaResponse instance.
     *
     * @constructor
     * @param {string} message - Human-readable message describing the result of the operation
     * @param {boolean} ok - Status flag indicating success (true) or failure (false)
     * @param {number} status - Standard HTTP status code (e.g., 200 for OK, 500 for internal error)
     * @param {any} data - The response data payload, can be any type
     *
     * @example
     * ```typescript
     * const response = new FreeSchemaResponse(
     *   "User created successfully",
     *   true,
     *   201,
     *   { id: 123, username: "johndoe" }
     * );
     * ```
     */
    constructor(message: string, ok:boolean, status: number, data: any ){
        this.message = message;
        this.ok = ok;
        this.status = status;
        this.data = data;
    }


    /**
     * Retrieves the response message.
     *
     * @public
     * @returns {string} The human-readable message describing the operation result
     *
     * @example
     * ```typescript
     * const message = response.getMessage();
     * console.log(message); // "User created successfully"
     * ```
     */
    public getMessage(): string{
        return this.message;
    }

    /**
     * Sets the response message. Supports method chaining.
     *
     * @public
     * @param {string} message - The message to set in the FreeSchemaResponse
     * @returns {FreeSchemaResponse} The current instance for method chaining
     *
     * @example
     * ```typescript
     * response.setMessage("Operation completed successfully")
     *         .setStatus(200);
     * ```
     */
    public setMessage(message: string): FreeSchemaResponse{
        this.message = message;
        return this;
    }

    /**
     * Retrieves the HTTP status code.
     *
     * @public
     * @returns {number} The HTTP status code
     *
     * @example
     * ```typescript
     * const statusCode = response.getStatus();
     * if (statusCode === 200) {
     *   // Handle success
     * }
     * ```
     */
    public getStatus(): number{
        return this.status;
    }


    /**
     * Sets the HTTP status code. Supports method chaining.
     *
     * @public
     * @param {number} status - Standard HTTP status code (200 OK, 401 Unauthorized, 500 Internal Server Error, etc.)
     * @returns {FreeSchemaResponse} The current instance for method chaining
     *
     * @example
     * ```typescript
     * response.setStatus(404)
     *         .setMessage("Resource not found");
     * ```
     */
    public setStatus(status: number): FreeSchemaResponse{
        this.status = status;
        return this;
    }

    /**
     * Retrieves the response data payload.
     *
     * @public
     * @returns {any} The data associated with the response
     *
     * @example
     * ```typescript
     * const data = response.getData();
     * console.log(data.users);
     * ```
     */
    public getData(): any{
        return this.data;
    }


    /**
     * Sets the response data payload. Supports method chaining.
     *
     * @public
     * @param {any} data - The data to include in the response (can be of any type)
     * @returns {FreeSchemaResponse} The current instance for method chaining
     *
     * @example
     * ```typescript
     * response.setData({ users: [...], total: 100 })
     *         .setOk(true);
     * ```
     */
    public setData(data: any): FreeSchemaResponse{
        this.data = data;
        return this;
    }

    /**
     * Retrieves the success status flag.
     *
     * @public
     * @returns {boolean} True if the operation was successful, false otherwise
     *
     * @example
     * ```typescript
     * if (response.getOk()) {
     *   // Process successful response
     * } else {
     *   // Handle error
     * }
     * ```
     */
    public getOk(): boolean{
        return this.ok;
    }

    /**
     * Sets the success status flag. Supports method chaining.
     *
     * @public
     * @param {boolean} ok - True if the operation was successful, false if it failed
     * @returns {FreeSchemaResponse} The current instance for method chaining
     *
     * @example
     * ```typescript
     * response.setOk(false)
     *         .setStatus(500)
     *         .setMessage("Internal server error");
     * ```
     */
    public setOk(ok: boolean): FreeSchemaResponse{
        this.ok = ok;
        return this;
    }

    /**
     * Retrieves the URL associated with this response.
     *
     * @public
     * @returns {string} The URL from which the response originated
     *
     * @example
     * ```typescript
     * const url = response.getUrl();
     * console.log(url); // "https://api.example.com/users"
     * ```
     */
    public getUrl(){
        return this.url;
    }

    /**
     * Sets the URL associated with this response. Supports method chaining.
     *
     * @public
     * @param {string} url - The URL from which the response or error originates
     * @returns {FreeSchemaResponse} The current instance for method chaining
     *
     * @example
     * ```typescript
     * response.setUrl("https://api.example.com/users/123")
     *         .setStatus(404);
     * ```
     */
    public setUrl(url: string): FreeSchemaResponse{
        this.url = url;
        return this;
    }




}