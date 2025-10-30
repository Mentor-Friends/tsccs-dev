/**
 * @fileoverview Defines the SearchQuery class for constructing search queries with filtering and pagination.
 * @module DataStructures/SearchQuery
 */

import { FilterSearch } from "./FilterSearch";

/**
 * Represents a search query configuration with support for filtering, linking, and pagination.
 * This class provides a comprehensive structure for building complex search operations
 * with multiple criteria and logical operators.
 *
 * @class SearchQuery
 *
 * @example
 * ```typescript
 * const query = new SearchQuery();
 * query.type = "Article";
 * query.composition = 123;
 * query.textSearch = "TypeScript tutorial";
 * query.page = 1;
 * query.inpage = 25;
 * query.logic = "and";
 * ```
 *
 * @example
 * ```typescript
 * // Search with filters
 * const query = new SearchQuery();
 * query.type = "Product";
 * query.doFilter = true;
 * query.filterSearches = [
 *   { type: "price", search: "100", logicoperator: ">", index: 0, composition: true, name: "price", operateon: "value" },
 *   { type: "category", search: "Electronics", logicoperator: "=", index: 1, composition: true, name: "category", operateon: "value" }
 * ];
 * ```
 */
export class SearchQuery{
     /**
      * The composition ID to search within.
      * Specifies which composition context the search should be performed in.
      *
      * @type {number}
      * @default 0
      */
     composition:number = 0;

     /**
      * The type of entity to search for.
      * Determines the data structure or entity type being queried.
      *
      * @type {string}
      * @default ""
      */
     type: string = "";

     /**
      * The linker identifier for relationship-based searches.
      * Used to specify connection types when traversing relationships.
      *
      * @type {string}
      * @default ""
      */
     linker: string = "";

     /**
      * The number of results to display per page (page size).
      * Controls pagination by limiting the number of results returned.
      *
      * @type {number}
      * @default 10
      */
     inpage:number = 10;

     /**
      * The page number to retrieve (1-indexed).
      * Used with inpage for paginating through search results.
      *
      * @type {number}
      * @default 1
      */
     page:number = 1;

     /**
      * Array of linker identifiers for multiple relationship types.
      * Allows searching across multiple connection types simultaneously.
      *
      * @type {string[]}
      * @default []
      */
     listLinkers:string[] = [];

     /**
      * Array of complete linker specifications for complex relationship queries.
      * Contains fully qualified linker definitions for advanced searches.
      *
      * @type {string[]}
      * @default []
      */
     fullLinkers:string[] = [];

     /**
      * The text search term or query string.
      * Primary search criteria for text-based filtering.
      *
      * @type {string}
      * @default ""
      */
     textSearch:string = "";

     /**
      * The logical operator to combine multiple search criteria.
      * Determines how multiple conditions are combined (e.g., "or", "and").
      *
      * @type {string}
      * @default "or"
      */
     logic: string = "or";

     /**
      * Flag indicating whether to reverse the search direction.
      * When true, traverses relationships in the opposite direction.
      *
      * @type {boolean}
      * @default false
      */
     reverse: boolean = false;

     /**
      * Flag indicating whether to apply filters to the search.
      * When true, the filterSearches array is applied to narrow results.
      *
      * @type {boolean}
      * @default false
      */
     doFilter: boolean = false;

     /**
      * Array of FilterSearch objects defining specific filter criteria.
      * Each filter specifies conditions that must be met for results to be included.
      *
      * @type {FilterSearch[]}
      * @default []
      */
     filterSearches:FilterSearch[]  = [];

     /**
      * Array of field selectors to include in the query results.
      * Specifies which properties should be returned in the response.
      *
      * @type {string[]}
      * @default []
      *
      * @example
      * ```typescript
      * query.selectors = ["id", "name", "createdAt"];
      * ```
      */
     selectors: string[] = [];

}