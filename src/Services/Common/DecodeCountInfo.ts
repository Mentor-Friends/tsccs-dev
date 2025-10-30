/**
 * @module DecodeCountInfo
 * @description Provides functions to decode and process count information for connections
 */

import { GetConcept } from "../../Api/GetConcept";
import { Concept, Connection } from "../../app";
import { CountInfo } from "../../DataStructures/Count/CountInfo";

/**
 * Decodes an array of count information strings into CountInfo objects.
 * Parses encoded count data for connection statistics.
 *
 * @param {string[]} [countStrings=[]] - Array of count strings in format "conceptId_connectionTypeId_count"
 * @returns {CountInfo[]} Array of decoded CountInfo objects
 *
 * @example
 * ```typescript
 * const countStrings = ["123_456_42", "789_456_15"];
 * const countInfos = DecodeCountInfo(countStrings);
 * // countInfos = [
 * //   { conceptId: 123, connectionTypeId: 456, count: 42 },
 * //   { conceptId: 789, connectionTypeId: 456, count: 15 }
 * // ]
 * ```
 *
 * @remarks
 * - Each string must be in format: "conceptId_connectionTypeId_count"
 * - All three parts must be numeric
 * - Returns empty array if no strings provided
 * - Throws error if string format is invalid
 */
export function DecodeCountInfo(countStrings: string[] = []){
    let countInfos: CountInfo[] = [];
    if(countStrings.length > 0){
        for(let i=0; i<countStrings?.length; i++){
            let countInfo = separateString(countStrings[i]);
            countInfos.push(countInfo);
        }
    }
    return countInfos;
}

/**
 * Fetches connection type concepts for count information and creates a dictionary.
 * Enriches CountInfo objects with connection type names and indexes them by concept ID.
 *
 * @async
 * @param {CountInfo[]} countInfos - Array of CountInfo objects to process
 * @returns {Promise<any>} A promise that resolves to a dictionary mapping concept IDs to enriched CountInfo objects
 *
 * @example
 * ```typescript
 * const countInfos: CountInfo[] = [
 *   { conceptId: 123, connectionTypeId: 456, count: 42 },
 *   { conceptId: 789, connectionTypeId: 456, count: 15 }
 * ];
 * const dictionary = await GetConnectionTypeForCount(countInfos);
 * // dictionary = {
 * //   123: { conceptId: 123, connectionTypeId: 456, count: 42, connectionType: "follows" },
 * //   789: { conceptId: 789, connectionTypeId: 456, count: 15, connectionType: "follows" }
 * // }
 * ```
 *
 * @remarks
 * - Fetches concept objects for each connectionTypeId
 * - Adds connectionType (character value) to each CountInfo
 * - Returns dictionary indexed by conceptId for fast lookup
 * - Used by formatting functions to add count information
 */
export async function GetConnectionTypeForCount(countInfos: CountInfo[]){
    let CountDictionary:any = {};
    for(let i =0; i<countInfos.length; i++){
        let concept: Concept = await GetConcept(countInfos[i].connectionTypeId);
        countInfos[i].connectionType = concept.characterValue;
        CountDictionary[countInfos[i].conceptId] = countInfos[i];
    }
    return CountDictionary;
}


/**
 * Parses a count information string into a CountInfo object.
 * Splits the string by underscores and extracts numeric values.
 *
 * @param {string} input - String in format "conceptId_connectionTypeId_count"
 * @returns {CountInfo} Parsed CountInfo object
 * @throws {Error} If the string doesn't contain exactly three underscore-separated parts
 *
 * @example
 * ```typescript
 * const countString = "123_456_42";
 * const countInfo = separateString(countString);
 * // countInfo = { conceptId: 123, connectionTypeId: 456, count: 42 }
 * ```
 *
 * @remarks
 * - Internal helper function for DecodeCountInfo
 * - Expects exactly three parts separated by underscores
 * - All parts must be convertible to numbers
 * - Throws descriptive error if format is invalid
 */
function separateString(input:string) {
    // Split the string by the underscore
    const parts = input.split('_');
    
    // Check if the input has exactly three parts
    if (parts.length === 3) {
        let countInfo = new CountInfo();
        countInfo.conceptId = Number(parts[0]);
        countInfo.connectionTypeId = Number(parts[1]);
        countInfo.count = Number(parts[2]);
        return countInfo;
    } else {
        throw new Error('Input string must contain exactly three parts separated by underscores.');
    }
}