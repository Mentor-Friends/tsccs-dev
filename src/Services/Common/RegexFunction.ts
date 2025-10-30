/**
 * @module RegexFunction
 * @description Provides string manipulation functions for concept type names
 */

/**
 * Removes the "the_" prefix from a string if it exists.
 * Used for cleaning concept type names in the CCS system.
 *
 * @param {string} inputString - The string to process
 * @returns {string} The string with "the_" prefix removed, or the original string if prefix not found
 *
 * @example
 * ```typescript
 * const typeName = "the_user";
 * const cleaned = removeThePrefix(typeName);
 * // cleaned = "user"
 *
 * const noPrefix = "post";
 * const unchanged = removeThePrefix(noPrefix);
 * // unchanged = "post"
 * ```
 *
 * @remarks
 * - Only removes prefix if string starts with exactly "the_"
 * - Case-sensitive matching
 * - Returns original string if prefix not found
 * - Used throughout formatting functions to clean type names
 */
export function removeThePrefix(inputString:string) {
    if (inputString.startsWith("the_")) {
      return inputString.slice(4); // Removes the first 4 characters
    }
    return inputString; // Return as-is if it doesn't start with "the_"
}