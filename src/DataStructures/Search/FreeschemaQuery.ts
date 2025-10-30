/**
 * @fileoverview Defines the FreeschemaQuery class for complex, flexible query construction.
 * @module DataStructures/Search/FreeschemaQuery
 */

import { ALLID, NORMAL } from "../../Constants/FormatConstants";
import { Concept } from "../Concept";
import { FilterSearch } from "../FilterSearch";

/**
 * Represents a flexible, schema-free query structure for complex data retrieval operations.
 * This class supports nested queries, filtering, ordering, and various output formats.
 * It is designed to handle advanced querying scenarios with multiple concepts and connections.
 *
 * @class FreeschemaQuery
 *
 * @example
 * ```typescript
 * const query = new FreeschemaQuery();
 * query.type = "User";
 * query.inpage = 20;
 * query.page = 1;
 * query.order = "ASC";
 * query.filters = [filterSearch1, filterSearch2];
 * query.filterLogic = "AND";
 * ```
 *
 * @example
 * ```typescript
 * // Nested query example
 * const parentQuery = new FreeschemaQuery();
 * const childQuery = new FreeschemaQuery();
 * childQuery.type = "Comment";
 * parentQuery.freeschemaQueries = [childQuery];
 * ```
 */
export class FreeschemaQuery{
    /**
     * The type of entity to query (e.g., "User", "Post", "Comment").
     * Determines the primary data structure being queried.
     *
     * @type {string}
     * @default ""
     */
    type: string = "";

    /**
     * The number of results to return per page (page size).
     * Controls pagination by limiting results in the response.
     *
     * @type {number}
     * @default 10
     */
    inpage: number = 10;

    /**
     * The page number to retrieve (1-indexed).
     * Used with inpage for paginating through large result sets.
     *
     * @type {number}
     * @default 1
     */
    page: number = 1;

    /**
     * Array of Concept objects to include in the query.
     * Contains the actual concept instances used for filtering or joining.
     *
     * @type {Concept[]}
     * @default []
     */
    concepts: Concept[] = [];

    /**
     * Array of concept IDs to filter by.
     * Alternative to using full Concept objects when only IDs are needed.
     *
     * @type {number[]}
     * @default []
     */
    conceptIds: number[] = [];

    /**
     * Array of field selectors to include in the query results.
     * Specifies which properties should be returned in the response.
     *
     * @type {string[]}
     * @default []
     *
     * @example
     * ```typescript
     * query.selectors = ["id", "name", "email"];
     * ```
     */
    selectors: string[] = [];

    /**
     * Array of nested FreeschemaQuery objects for complex hierarchical queries.
     * Enables querying related data structures in a single operation.
     *
     * @type {FreeschemaQuery[]}
     * @default []
     */
    freeschemaQueries : FreeschemaQuery[] = [];

    /**
     * Array of FilterSearch objects to apply to the query.
     * Each filter defines specific criteria for narrowing results.
     *
     * @type {FilterSearch[]}
     * @default []
     */
    filters: FilterSearch[] = [];

    /**
     * The logical operator to combine multiple filters.
     * Typically "AND" or "OR" to determine how filters are applied together.
     *
     * @type {string}
     * @default ""
     */
    filterLogic: string = "";

    /**
     * The type of connection to query when dealing with relationships.
     * Specifies the connection type when traversing between concepts.
     *
     * @type {string}
     * @default ""
     */
    typeConnection: string = "";

    /**
     * The sort order for query results.
     * Determines whether results are sorted in ascending or descending order.
     *
     * @type {string}
     * @default "DESC"
     */
    order: string = "DESC";

    /**
     * The output format for query results.
     * Determines the structure and presentation of returned data.
     *
     * @type {number}
     * @default NORMAL
     *
     * @see {@link FormatConstants.NORMAL}
     * @see {@link FormatConstants.ALLID}
     */
    outputFormat: number = NORMAL;

    /**
     * A descriptive name for this query.
     * Useful for identifying or debugging complex nested queries.
     *
     * @type {string}
     * @default ""
     */
    name: string = "";

    /**
     * Flag indicating whether to reverse the query direction.
     * When true, traverses relationships in the opposite direction.
     *
     * @type {boolean}
     * @default false
     */
    reverse: boolean = false;

    /**
     * Flag indicating whether to apply a limit to the query results.
     * When true, enforces the page size limit strictly.
     *
     * @type {boolean}
     * @default false
     */
    limit: boolean = false;

    /**
     * Filter criteria applied to ancestor nodes in hierarchical queries.
     * Used for filtering based on parent or ancestor relationships.
     *
     * @type {string}
     * @default ""
     */
    filterAncestor: string = "";

    /**
     * Flag indicating whether to include this query in parent filter operations.
     * When true, the query results are considered in parent-level filtering.
     *
     * @type {boolean}
     * @default false
     */
    includeInFilter: boolean = false;

    /**
     * Flag indicating whether to use legacy connection type behavior.
     * Maintains backward compatibility with older connection type systems.
     *
     * @type {boolean}
     * @default false
     */
    isOldConnectionType: boolean = false;
}