/**
 * @fileoverview Defines the FilterSearch class for creating filter criteria in search queries.
 * @module DataStructures/FilterSearch
 */

/**
 * Represents a single filter criterion for search operations.
 * This class encapsulates the conditions for filtering search results based on
 * specific fields, values, and logical operators.
 *
 * @class FilterSearch
 *
 * @example
 * ```typescript
 * const filter = new FilterSearch();
 * filter.type = "age";
 * filter.search = "25";
 * filter.logicoperator = ">=";
 * filter.index = 0;
 * filter.composition = true;
 * filter.name = "age_filter";
 * filter.operateon = "value";
 * ```
 *
 * @example
 * ```typescript
 * // String equality filter
 * const nameFilter = new FilterSearch();
 * nameFilter.type = "name";
 * nameFilter.search = "John";
 * nameFilter.logicoperator = "=";
 * nameFilter.operateon = "text";
 * ```
 */
export class FilterSearch{
    /**
     * The type or field name to filter on.
     * Specifies which property of the entity should be evaluated by this filter.
     *
     * @type {string}
     * @default ""
     */
    type:string = "";

    /**
     * The search value or term to filter against.
     * The value that will be compared with the specified field using the logic operator.
     *
     * @type {string}
     * @default ""
     */
    search:string = "";

    /**
     * The logical operator for comparison.
     * Determines how the search value is compared with the field value.
     * Common operators include: "=", "!=", ">", "<", ">=", "<=", "LIKE", "IN".
     *
     * @type {string}
     * @default "="
     */
    logicoperator:string = "=";

    /**
     * The index or position of this filter in a filter array.
     * Used for ordering and referencing filters in complex filter combinations.
     *
     * @type {number}
     * @default 0
     */
    index:number = 0;

    /**
     * Flag indicating whether this filter applies to compositions.
     * When true, the filter is evaluated within a composition context.
     *
     * @type {boolean}
     * @default true
     */
    composition:boolean = true;

    /**
     * A descriptive name for this filter.
     * Useful for identifying and debugging filter operations.
     *
     * @type {string}
     * @default ""
     */
    name: string = "";

    /**
     * The operand type or target field for the filter operation.
     * Specifies what kind of data or field the filter operates on
     * (e.g., "value", "text", "date", "id").
     *
     * @type {string}
     * @default ""
     */
    operateon: string = "";
}