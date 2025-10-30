/**
 * @fileoverview Defines the FreeschemaResponse interface for standardized API responses.
 * @module DataStructures/Responses/StandardResponses
 */

/**
 * Represents a standardized response structure for Freeschema API operations.
 * This interface provides a consistent format for all API responses, including
 * success and error cases, making it easier to handle responses uniformly across the application.
 *
 * @interface FreeschemaResponse
 *
 * @example
 * ```typescript
 * const response: FreeschemaResponse = {
 *   message: "User created successfully",
 *   status: true,
 *   statusCode: 201,
 *   data: { id: 123, name: "John Doe" }
 * };
 * ```
 *
 * @example
 * ```typescript
 * // Error response example
 * const errorResponse: FreeschemaResponse = {
 *   message: "User not found",
 *   status: false,
 *   statusCode: 404,
 *   data: null
 * };
 * ```
 */
export interface FreeschemaResponse {
    /**
     * A human-readable message describing the result of the operation.
     * Provides context about the success or failure of the request.
     *
     * @type {string}
     */
    message: string

    /**
     * A boolean flag indicating whether the operation was successful.
     * True indicates success, false indicates failure.
     *
     * @type {boolean}
     */
    status: boolean

    /**
     * The HTTP status code representing the result of the operation.
     * Standard HTTP status codes are used (e.g., 200 for success, 404 for not found, 500 for server error).
     *
     * @type {number}
     *
     * @example
     * 200 - OK
     * 201 - Created
     * 400 - Bad Request
     * 401 - Unauthorized
     * 404 - Not Found
     * 500 - Internal Server Error
     */
    statusCode: number

    /**
     * The response data payload.
     * Can contain any type of data depending on the operation performed.
     * May be null or undefined for operations that don't return data.
     *
     * @type {any}
     */
    data: any
  }