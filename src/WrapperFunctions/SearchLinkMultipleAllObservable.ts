import { SearchLinkMultipleAll, SearchQuery } from "../app";
import { DATAID } from "../Constants/FormatConstants";
import { DependencyObserver } from "./DepenedencyObserver";

export class SearchLinkMultipleAllObservable extends DependencyObserver{
    searchQuery: SearchQuery[] = [];
    format: number = DATAID;
    constructor(searchQuery: SearchQuery[], token: string, format:number = DATAID){
        super();
        this.searchQuery = searchQuery;
        this.format = format;
    }

    async bind() {
        this.data = await SearchLinkMultipleAll(this.searchQuery, "", this, this.format);
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
export function searchLinkMultipleListener(searchQueries: SearchQuery[], token?: string, format: number = DATAID) {
    return new SearchLinkMultipleAllObservable(searchQueries, token ?? "", format);
}