/**
 * @fileoverview String utility module for splitting type strings in the CCS-JS system.
 * This module provides functionality to parse type strings that follow a naming convention
 * with underscore separators, commonly used for identifying concept types and their relationships.
 * @module Services/SplitStrings
 */

/**
 * Splits a type string into component parts based on the last underscore delimiter.
 *
 * This function is used throughout the CCS-JS system to parse type identifiers that follow
 * a naming convention where the last underscore separates the base type from its suffix.
 * For example, "concept_type_123" would be split into ["concept_type", "123"].
 *
 * The function uses the last occurrence of underscore as the split point, which allows
 * for type names that contain underscores themselves. If no underscore is found, the
 * original string is returned as a single-element array.
 *
 * @param typeString - The type identifier string to be split
 * @returns An array containing the split components. Returns a two-element array [prefix, suffix]
 *          if an underscore is found, or a single-element array [typeString] if no underscore exists.
 *
 * @example
 * ```typescript
 * // Split a composite type string
 * const result = SplitStrings("user_profile_123");
 * // Returns: ["user_profile", "123"]
 * ```
 *
 * @example
 * ```typescript
 * // Handle string without underscore
 * const result = SplitStrings("simpleType");
 * // Returns: ["simpleType"]
 * ```
 *
 * @example
 * ```typescript
 * // Split concept type identifier
 * const result = SplitStrings("concept_type");
 * // Returns: ["concept", "type"]
 * ```
 *
 * @remarks
 * The function specifically uses `lastIndexOf("_")` to find the splitting point, which means:
 * - Only the last underscore is considered for splitting
 * - All underscores before the last one remain part of the first element
 * - The position check (pos > 0) ensures underscore is not the first character
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf | String.lastIndexOf}
 */
export  function SplitStrings(typeString: string)
{
    const pos = typeString.lastIndexOf("_");
    let SplittedStrings:string[] = [];
    if(pos > 0){
        var rest = typeString.substring(0, pos);
        var last = typeString.substring(pos + 1, typeString.length);

         SplittedStrings = [rest, last];
    }
    else{
        SplittedStrings = [typeString];
    }


    return SplittedStrings;
}