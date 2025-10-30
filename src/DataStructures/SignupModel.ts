/**
 * @fileoverview Defines the SignupModel interface for user registration data.
 * @module DataStructures/SignupModel
 */

/**
 * Represents the data required for user registration/signup.
 * This interface defines the structure for collecting user credentials
 * during the account creation process.
 *
 * @interface SignupModel
 *
 * @example
 * ```typescript
 * const signupData: SignupModel = {
 *   email: "newuser@example.com",
 *   password: "SecureP@ssw0rd123"
 * };
 * ```
 *
 * @example
 * ```typescript
 * // Usage in a signup function
 * async function registerUser(userData: SignupModel) {
 *   // Validate and create user account
 *   const result = await createAccount(userData.email, userData.password);
 *   return result;
 * }
 * ```
 */
export interface SignupModel{
    /**
     * The user's email address.
     * Used as the primary identifier for the user account.
     * Should be unique and in valid email format.
     *
     * @type {string}
     *
     * @example "user@example.com"
     */
    email: string ;

    /**
     * The user's password for account authentication.
     * Should meet security requirements (e.g., minimum length, complexity).
     * Will be hashed before storage for security purposes.
     *
     * @type {string}
     *
     * @remarks
     * Passwords should be validated for strength before being accepted.
     * Common requirements include minimum length, uppercase, lowercase,
     * numbers, and special characters.
     */
    password: string ;
}