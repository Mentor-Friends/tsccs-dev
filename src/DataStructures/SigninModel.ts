/**
 * @fileoverview Defines the SigninModel interface for user authentication data.
 * @module DataStructures/SigninModel
 */

/**
 * Represents the data required for user authentication/signin.
 * This interface defines the structure for collecting user credentials
 * during the login process.
 *
 * @interface SigninModel
 *
 * @example
 * ```typescript
 * const signinData: SigninModel = {
 *   email: "user@example.com",
 *   password: "MySecurePassword123"
 * };
 * ```
 *
 * @example
 * ```typescript
 * // Usage in an authentication function
 * async function authenticateUser(credentials: SigninModel) {
 *   const user = await validateCredentials(credentials.email, credentials.password);
 *   if (user) {
 *     return generateAuthToken(user);
 *   }
 *   throw new Error("Invalid credentials");
 * }
 * ```
 */
export interface SigninModel{
    /**
     * The user's email address.
     * Used to identify the user account attempting to sign in.
     *
     * @type {string}
     *
     * @example "user@example.com"
     */
    email: string ;

    /**
     * The user's password for authentication.
     * Will be verified against the stored hashed password.
     *
     * @type {string}
     *
     * @remarks
     * The password is transmitted securely and verified against
     * the hashed version stored in the database. Never store or
     * log passwords in plain text.
     */
    password: string ;
}