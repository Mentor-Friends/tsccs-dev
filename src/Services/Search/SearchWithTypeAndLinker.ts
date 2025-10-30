/**
 * @module SearchWithTypeAndLinker
 * @description Provides various formatting functions for search results with different output formats (Normal, DATA-ID, JustId)
 */

import { CountInfo } from "../../DataStructures/Count/CountInfo";
import { GetConnectionTypeForCount } from "../Common/DecodeCountInfo";
import { GetConnectionDataPrefetch } from "../GetCompositionBulk";
import { FormatFromConnectionsAlteredArrayExternal, FormatFunctionData, FormatFunctionDataForData } from "./DataIdFormat";
import { FormatConceptsAndConnectionsNormalList, formatFunction, formatFunctionForData } from "./FormatData";
import { FormatFromConnectionsAlteredArrayExternalJustId, FormatFunctionDataForDataJustId } from "./JustIdFormat";
import { orderTheConnections } from "./orderingConnections";

/**
 * Formats connections in the Normal format by fetching connections, converting them to single-level objects,
 * and stitching them together to create a complex JSON structure or array.
 *
 * @async
 * @param {number[]} linkers - Array of connection IDs that act as linkers between concepts
 * @param {number[]} conceptIds - Array of concept IDs involved in the connections
 * @param {number[]} mainCompositionIds - Array of main composition IDs to format
 * @param {number[]} reverse - Array of connection IDs that should be treated as reverse connections
 * @param {CountInfo[]} countInfos - Array of count information objects for connection statistics
 * @returns {Promise<any[]>} A promise that resolves to an array of formatted composition data
 *
 * @example
 * ```typescript
 * const linkers = [101, 102];
 * const conceptIds = [1, 2, 3];
 * const mainIds = [100];
 * const reverse = [102];
 * const countInfos: CountInfo[] = [];
 * const result = await formatConnections(linkers, conceptIds, mainIds, reverse, countInfos);
 * ```
 *
 * @remarks
 * Format: Normal - This format is used for standard composition retrieval
 * Process:
 * 1. Fetches all connections using the provided linker IDs
 * 2. Orders the connections (descending by default)
 * 3. Formats connections to single-level objects
 * 4. Formats data connections
 * 5. Combines and stitches all data into a complex structure
 */
export async function formatConnections(linkers: number[], conceptIds: number [], mainCompositionIds: number[], reverse: number[],countInfos: CountInfo[]){
    
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    prefetchConnections = orderTheConnections(prefetchConnections);
    let compositionData: any [] = [];
    let newCompositionData: any [] = [];
    compositionData = await formatFunction(prefetchConnections, compositionData, reverse);
    compositionData = await formatFunctionForData(prefetchConnections, compositionData, reverse);
    let output:any  = await FormatConceptsAndConnectionsNormalList(prefetchConnections, compositionData, mainCompositionIds, newCompositionData, reverse );
    return output;
}


/**
 * Formats connections in the DATA-ID format, which includes both data and ID information for each concept.
 * Fetches connections, converts them to single-level objects, and stitches them together.
 *
 * @async
 * @param {number[]} linkers - Array of connection IDs that act as linkers between concepts
 * @param {number[]} conceptIds - Array of concept IDs involved in the connections
 * @param {number[]} mainCompositionIds - Array of main composition IDs to format
 * @param {number[]} reverse - Array of connection IDs that should be treated as reverse connections
 * @param {CountInfo[]} countInfos - Array of count information objects for connection statistics
 * @param {string} [order="DESC"] - Sort order for connections ("ASC" or "DESC")
 * @returns {Promise<any[]>} A promise that resolves to an array of formatted composition data with ID and data fields
 *
 * @example
 * ```typescript
 * const result = await formatConnectionsDataId(
 *   [101, 102],
 *   [1, 2, 3],
 *   [100],
 *   [102],
 *   [],
 *   "ASC"
 * );
 * // Result format: [{ id: 100, data: {...}, created_on: timestamp }]
 * ```
 *
 * @remarks
 * Format: DATA-ID - Each result includes concept ID, data object, and creation timestamp
 * This format is useful when you need to track both the identity and content of concepts
 * The order parameter allows sorting connections by ID in ascending or descending order
 */
export async function formatConnectionsDataId(linkers: number[], conceptIds: number [], mainCompositionIds: number[], reverse: number[], countInfos: CountInfo[], order:string = "DESC"){
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    let CountDictionary:any = await GetConnectionTypeForCount(countInfos);
    prefetchConnections = orderTheConnections(prefetchConnections, order);
    let compositionData: any [] = [];
    let newCompositionData: any [] = [];
    compositionData = await FormatFunctionData(prefetchConnections, compositionData, reverse);
    compositionData = await FormatFunctionDataForData(prefetchConnections, compositionData, reverse);
    let output:any  = await FormatFromConnectionsAlteredArrayExternal(prefetchConnections, compositionData,newCompositionData, mainCompositionIds, reverse, CountDictionary );
    return output;
}



/**
 * Formats connections in the JustId format, which provides a simplified view with IDs and minimal data.
 * Fetches connections, converts them to single-level objects, and stitches them together.
 *
 * @async
 * @param {number[]} linkers - Array of connection IDs that act as linkers between concepts
 * @param {number[]} conceptIds - Array of concept IDs involved in the connections
 * @param {number[]} mainCompositionIds - Array of main composition IDs to format
 * @param {number[]} reverse - Array of connection IDs that should be treated as reverse connections
 * @param {CountInfo[]} countInfos - Array of count information objects for connection statistics
 * @param {string} [order="DESC"] - Sort order for connections ("ASC" or "DESC")
 * @returns {Promise<any[]>} A promise that resolves to an array of formatted composition data with simplified ID structure
 *
 * @example
 * ```typescript
 * const result = await formatConnectionsJustId(
 *   [101, 102],
 *   [1, 2, 3],
 *   [100],
 *   [],
 *   [],
 *   "DESC"
 * );
 * // Result format: [{ id: 100, type: { id: 1, data: "value", created_on: timestamp } }]
 * ```
 *
 * @remarks
 * Format: JustId - This format provides a lightweight representation with IDs and essential data
 * Useful for list views and when you need to minimize data transfer
 * Each linked concept includes: ID, data value, and creation timestamp
 */
export async function formatConnectionsJustId(linkers: number[], conceptIds: number [], mainCompositionIds: number[], reverse: number[], countInfos: CountInfo[], order:string = "DESC"){
   
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    let CountDictionary:any = await GetConnectionTypeForCount(countInfos);
     prefetchConnections = orderTheConnections(prefetchConnections, order);

    let compositionData: any [] = [];
    let newCompositionData: any [] = [];
    compositionData = await formatFunction(prefetchConnections, compositionData, reverse);
    compositionData = await FormatFunctionDataForDataJustId(prefetchConnections, compositionData, reverse);
    let output:any  = await FormatFromConnectionsAlteredArrayExternalJustId(prefetchConnections, compositionData, mainCompositionIds, reverse, CountDictionary);
    return output;
}