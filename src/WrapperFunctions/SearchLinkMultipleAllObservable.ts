import { SearchLinkMultipleAll, SearchQuery } from "../app";
import { DATAID } from "../Constants/FormatConstants";
import { DependencyObserver } from "./DepenedencyObserver";

/**
 * Observable wrapper for executing multiple search queries with automatic updates.
 */
export class SearchLinkMultipleAllObservable extends DependencyObserver{
    /** Array of search query conditions */
    searchQuery: SearchQuery[] = [];
    /** Output format */
    format: number = DATAID;

    /**
     * Creates a new multi-search observable.
     * @param searchQuery - Array of SearchQuery objects defining search conditions
     * @param token - Authentication token
     * @param format - Output format (DATAID by default)
     */
    constructor(searchQuery: SearchQuery[], token: string, format:number = DATAID){
        super();
        this.searchQuery = searchQuery;
        this.format = format;
    }

    /**
     * Executes the search queries and sets up change listeners.
     * @returns Formatted search results
     */
    async bind() {
        this.data = await SearchLinkMultipleAll(this.searchQuery, "", this, this.format);
        this.mainConcept = this.searchQuery[0].composition;
        this.listenToEvent(this.mainConcept);
        console.log("this is the data", this.data);
        return this.data;
    }


}

/**
 * Creates an observable that executes multiple search queries and updates subscribers when results change.
 * @param searchQueries - Array of SearchQuery objects defining search conditions
 * @param token - Authentication token
 * @param format - Output format (DATAID by default)
 * @returns Observable instance for the search results
 *
 * @example
 * const queries = [{ composition: 123, type: "BlogPost", searchField: "title", searchText: "tutorial" }];
 * const observer = searchLinkMultipleListener(queries, token, DATAID);
 * observer.subscribe((results) => console.log(results));
 */
export function searchLinkMultipleListener(searchQueries: SearchQuery[], token?: string, format: number = DATAID) {
    return new SearchLinkMultipleAllObservable(searchQueries, token ?? "", format);
}