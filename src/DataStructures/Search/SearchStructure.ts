/**
 * @fileoverview Defines the SearchStructure class for configuring search operations.
 * @module DataStructures/Search/SearchStructure
 */

/**
 * Represents a search structure configuration for querying data.
 * This class encapsulates all parameters needed to perform a search operation,
 * including filtering, pagination, and composition settings.
 *
 * @class SearchStructure
 *
 * @example
 * ```typescript
 * const search = new SearchStructure();
 * search.type = "concept";
 * search.search = "user profile";
 * search.page = 1;
 * search.inpage = 20;
 * ```
 */
export class SearchStructure{
    /**
     * The type of entity to search for (e.g., "concept", "connection").
     * Determines which data structure will be queried.
     *
     * @type {string}
     * @default ""
     */
    type: string = "";

    /**
     * The search term or query string to match against.
     * This is the primary search criteria used for filtering results.
     *
     * @type {string}
     * @default ""
     */
    search: string = "";

    /**
     * The composition identifier or filter for searching within compositions.
     * Used to narrow search results to specific composition contexts.
     *
     * @type {string}
     * @default ""
     */
    composition: string = "";

    /**
     * Internal composition identifier for nested or hierarchical composition searches.
     * Allows for more granular filtering within composition structures.
     *
     * @type {string}
     * @default ""
     */
    internalComposition: string = "";

    /**
     * The user ID associated with the search operation.
     * Used for access control and filtering results based on user permissions.
     *
     * @type {number}
     * @default 999
     */
    userId: number = 999;

    /**
     * The number of results to display per page (page size).
     * Controls pagination by limiting the number of results returned.
     *
     * @type {number}
     * @default 10
     */
    inpage: number = 10;

    /**
     * The page number to retrieve (1-indexed).
     * Used in conjunction with inpage for pagination of search results.
     *
     * @type {number}
     * @default 1
     */
    page: number = 1;
}