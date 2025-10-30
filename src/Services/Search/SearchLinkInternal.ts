/**
 * @module SearchLinkInternal
 * @description Provides functionality to search for internal links within concepts and return formatted data
 */

import { SearchInternalApi } from "../../Api/Search/SearchInternalApi";
import { SearchStructure, ViewInternalData } from "../../app";

/**
 * Searches for internal links within concepts based on the provided search query
 * and returns the formatted internal data view.
 *
 * @async
 * @param {SearchStructure} searchQuery - The search query structure containing search criteria
 * @param {string} [token=""] - Optional authentication token for API requests
 * @returns {Promise<any[]>} A promise that resolves to an array of formatted concept connections
 *
 * @example
 * ```typescript
 * const searchQuery: SearchStructure = {
 *   composition: 123,
 *   linker: 456
 * };
 * const results = await SearchLinkInternal(searchQuery, "auth-token");
 * console.log(results);
 * ```
 *
 * @remarks
 * This function performs a two-step process:
 * 1. Fetches internal concept connections using the SearchInternalApi
 * 2. Formats the connections into a readable view using ViewInternalData
 */
export async function SearchLinkInternal(searchQuery: SearchStructure, token: string=""){
    var conceptsConnections = await  SearchInternalApi(searchQuery, token);
     let out = await ViewInternalData(conceptsConnections);
    return out;
  }