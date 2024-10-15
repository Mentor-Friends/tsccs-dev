import { SearchLinkMultipleAll, SearchQuery } from "../app";
import { DependencyObserver } from "./DepenedencyObserver";

export class SearchLinkMultipleAllObservable extends DependencyObserver{
    searchQuery: SearchQuery[] = [];
    constructor(searchQuery: SearchQuery[]){
        super();
        this.searchQuery = searchQuery;
    }

    async bind() {
        this.data = await SearchLinkMultipleAll(this.searchQuery, "", this);
        this.mainConcept = this.searchQuery[0].composition;
        this.listenToEvent(this.mainConcept);
        console.log("this is the data", this.data);
        return this.data;
    }
    

}

/**
 * 
 * @param searchQueries Queries that need to be executed.
 * @param token token of the user.
 * @returns  returns the json format of the output.
 */
export function searchLinkMultipleListener(searchQueries: SearchQuery[], token?: string) {
    return new SearchLinkMultipleAllObservable(searchQueries);
}