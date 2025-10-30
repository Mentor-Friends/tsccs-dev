/**
 * @fileoverview Defines the SessionData class for storing session information.
 * @module DataStructures/Session/SessionData
 */

/**
 * Represents session information for a user's connection.
 * This class stores comprehensive details about a user's session, including
 * network information, server configuration, and user identification data.
 * It captures both client and server-side information for session tracking and security purposes.
 *
 * @class SessionData
 *
 * @example
 * ```typescript
 * const session = new SessionData();
 * session.id = "abc123def456";
 * session.userId = "12345";
 * session.email = "user@example.com";
 * session.remote_address = "192.168.1.100";
 * session.http_user_agent = "Mozilla/5.0...";
 * ```
 *
 * @example
 * ```typescript
 * // Populate session data from request
 * const session = new SessionData();
 * session.remote_address = request.connection.remoteAddress;
 * session.server_port = process.env.PORT;
 * session.server_name = request.hostname;
 * ```
 */
export  class SessionData{
    /**
     * The unique session identifier.
     * Used to track and identify individual sessions across requests.
     *
     * @type {string}
     * @default "0"
     */
    id: string = "0";

    /**
     * The remote IP address of the client.
     * Identifies the network address from which the client is connecting.
     *
     * @type {string}
     * @default ""
     *
     * @example "192.168.1.100" or "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
     */
    remote_address:string = "";

    /**
     * The port number on which the server is listening.
     * Indicates which server port is handling the connection.
     *
     * @type {string}
     * @default ""
     *
     * @example "8080" or "443"
     */
    server_port: string = "";

    /**
     * The server's IP address.
     * Identifies the network address of the server handling the request.
     *
     * @type {string}
     * @default ""
     */
    server_address: string = "";

    /**
     * The server's hostname or domain name.
     * The fully qualified domain name or hostname of the server.
     *
     * @type {string}
     * @default ""
     *
     * @example "api.example.com" or "localhost"
     */
    server_name: string = "";

    /**
     * Information about the server software.
     * Identifies the server software and version handling the request.
     *
     * @type {string}
     * @default ""
     *
     * @example "Apache/2.4.41" or "nginx/1.18.0"
     */
    server_software: string = "";

    /**
     * The HTTP User-Agent header from the client.
     * Contains information about the client's browser or application making the request.
     *
     * @type {string}
     * @default ""
     *
     * @example "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36..."
     */
    http_user_agent: string = "";

    /**
     * The self-referential identifier or URL.
     * May contain a reference to the current script or endpoint.
     *
     * @type {string}
     * @default ""
     */
    self: string = "";

    /**
     * The client's port number.
     * Indicates which port on the client side is being used for the connection.
     *
     * @type {string}
     * @default ""
     */
    port: string = "";

    /**
     * The user's unique identifier.
     * Links the session to a specific user account.
     *
     * @type {string}
     * @default ""
     */
    userId: string = "";

    /**
     * The user's email address.
     * Stores the authenticated user's email for session tracking.
     *
     * @type {string}
     * @default ""
     */
    email: string = "";
}