/**
 * @fileoverview Defines the TokenStorage class for managing authentication tokens.
 * @module DataStructures/Security/TokenStorage
 */

/**
 * Centralized storage for authentication tokens.
 * This class provides a singleton-like static storage mechanism for managing
 * Bearer access tokens across the application. The token is stored as a static
 * property, making it accessible throughout the application without instantiation.
 *
 * @class TokenStorage
 *
 * @example
 * ```typescript
 * // Set the access token after authentication
 * TokenStorage.BearerAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
 * ```
 *
 * @example
 * ```typescript
 * // Retrieve the access token for API requests
 * const token = TokenStorage.BearerAccessToken;
 * const headers = {
 *   'Authorization': `Bearer ${token}`
 * };
 * ```
 *
 * @example
 * ```typescript
 * // Clear the token on logout
 * TokenStorage.BearerAccessToken = "";
 * ```
 */
export class TokenStorage{
    /**
     * The Bearer access token used for authentication.
     * This static property stores the JWT or other authentication token
     * used for authorizing API requests. The token typically has the format
     * "Bearer <token>" when included in HTTP headers.
     *
     * @static
     * @type {string}
     * @default ""
     *
     * @remarks
     * As a static property, this token is shared across all instances and modules.
     * Exercise caution when handling this token to prevent security vulnerabilities.
     * Consider clearing this value on logout or session expiration.
     */
    static BearerAccessToken:string = "";
}