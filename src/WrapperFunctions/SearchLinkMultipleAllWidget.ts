import { SearchLinkMultipleAll, SearchQuery } from "../app";
import { Wrapper } from "./Wrapper";

export class SearchLinkMultipleAllWidget extends Wrapper{
    searchQuery: SearchQuery[] = [];
    constructor(searchQuery: SearchQuery[]){
        super();
        this.searchQuery = searchQuery;
    }

    async executeData() {
        this.data = await SearchLinkMultipleAll(this.searchQuery, "", this);
        this.mainConcept = this.searchQuery[0].composition;
        this.listenToEvent(this.mainConcept);
        return this.data;
    }
    

}