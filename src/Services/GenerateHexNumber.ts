/**
 * @fileoverview Hexadecimal number generation utility for the CCS-JS system.
 * This module provides functionality to generate negative pseudo-random numbers based on
 * hexadecimal calculations, commonly used for creating unique temporary identifiers for
 * local concepts before they are persisted to the backend.
 * @module Services/GenerateHexNumber
 */

/**
 * Generates a negative pseudo-random number based on hexadecimal calculations.
 *
 * This function creates a negative integer by accumulating random hexadecimal values.
 * It is primarily used in the CCS-JS system to generate temporary local IDs for concepts
 * and connections that haven't been persisted to the backend yet. The negative value
 * convention helps distinguish local (client-side) entities from persisted (server-side)
 * entities which have positive IDs.
 *
 * The algorithm multiplies random hex digits (0-15) by 16 for each iteration, accumulating
 * the results, then returns the negative of this sum. This ensures the generated numbers
 * are always negative and within a predictable range based on the length parameter.
 *
 * @param len - The number of iterations to perform, affecting the magnitude of the output.
 *              Higher values produce larger negative numbers. Common values are 1-4.
 * @returns A negative integer calculated from accumulated random hexadecimal values
 *
 * @example
 * ```typescript
 * // Generate a small negative ID for a temporary concept
 * const localId = genHexString(2);
 * // Returns: a negative number like -512, -768, etc.
 * ```
 *
 * @example
 * ```typescript
 * // Generate a larger negative ID for more range
 * const localId = genHexString(4);
 * // Returns: a negative number like -2048, -3072, etc.
 * ```
 *
 * @example
 * ```typescript
 * // Use in concept creation for temporary local ID
 * import { genHexString } from './GenerateHexNumber';
 *
 * const tempConcept = {
 *   id: genHexString(3),
 *   type: "tempConcept",
 *   isLocal: true
 * };
 * // tempConcept.id will be a negative number like -1280
 * ```
 *
 * @remarks
 * Key characteristics of this function:
 * - Always returns negative numbers to distinguish local entities from persisted ones
 * - Uses Math.random() for pseudo-random generation (not cryptographically secure)
 * - The range of output values is roughly: -256 * len (with random variation)
 * - Multiple calls with the same length can produce the same value (not guaranteed unique)
 * - This is suitable for temporary IDs but not for security-sensitive applications
 *
 * The formula used is: -(sum of [Math.floor(Math.random() * 16) * 16] for len iterations)
 *
 * @see {@link Math.random} for details on the random number generation
 * @see {@link Math.floor} for understanding the rounding behavior
 */
export function genHexString(len:number) {
    let output:number = 0;
    for (let i = 0; i < len; ++i) {
        output += (Math.floor(Math.random() * 16) * 16);
    }
    return -output;
}