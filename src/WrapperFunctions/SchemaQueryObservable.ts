import { FreeschemaQuery, FreeschemaQueryApi, Logger, MakeTheTypeConceptApi } from "../app";
import { ALLID, DATAID, DATAV2, JUSTDATA, NORMAL, RAW } from "../Constants/FormatConstants";
import { DecodeCountInfo } from "../Services/Common/DecodeCountInfo";
import { formatConnections, formatConnectionsDataId, formatConnectionsJustId, formatConnectionsV2, formatDataArrayDataId, formatDataArrayNormal } from "../Services/Search/SearchWithTypeAndLinker";
import { DependencyObserver } from "./DepenedencyObserver";

/**
 * Observable wrapper for executing free-schema queries with automatic updates.
 * Supports complex filtering, sorting, and pagination with multiple output formats.
 */
export class SearchLinkMultipleAllObservable extends DependencyObserver{
    /** The free-schema query object containing all search parameters */
    query: FreeschemaQuery = new FreeschemaQuery();
    /** Encoded count information strings */
    countInfoStrings: string [] = [];
    /** Sort order for results */
    order: string = "DESC";
    /** Total count of matching results */
    totalCount:number = 0;

    /**
     * Creates a new schema query observable.
     * @param query - FreeschemaQuery object with search parameters
     * @param token - Authentication token
     */
    constructor(query: FreeschemaQuery, token: string){
        super();
        this.query = query;
        this.format = query.outputFormat;
        this.order = query.order;
    }

    /**
     * Executes the query once without subscribing to updates.
     * @returns Formatted query results
     */
    async run() {
        try {
            this.query.outputFormat = ALLID;
            this.compositionIds = [];
            let result:any = await FreeschemaQueryApi(this.query, "");
            this.conceptIds = result.conceptIds;
            this.internalConnections = result.internalConnections ?? [];
            this.linkers = result.linkers ?? [];
            this.reverse = result.reverse;
            this.compositionIds = result.mainCompositionIds;
            this.totalCount = result.mainCount;
            this.countInfoStrings = result.countinfo;

            let output = await this.build();

            return output;
        } catch (err) {
            console.error('Error in SchemaQueryObservable.run():', err);
            throw err;
        }
    }

    /**
     * Executes the query and sets up change listeners for all matching compositions.
     * @returns Formatted query results
     */
    async bind() {
        try {
            if(this.compositionIds.length > 0){
                for(let i=0; i<this.compositionIds.length; i++){
                    this.removeListenToEvent(this.compositionIds[i]);
                }
            }

            if(!this.isDataLoaded){
                this.query.outputFormat = ALLID;
                this.compositionIds = [];
                let result:any = await FreeschemaQueryApi(this.query, "");
                this.conceptIds = result.conceptIds;
                this.internalConnections = result.internalConnections ?? [];
                this.linkers = result.linkers ?? [];
                this.reverse = result.reverse;
                this.compositionIds = result.mainCompositionIds;
                this.totalCount = result.mainCount;
                this.countInfoStrings = result.countinfo;

            }
            else{

                for(let i=0 ;i<this.compositionIds.length; i++){
                    this.listenToEvent(this.compositionIds[i]);
                }
            }
            let output = await this.build();
            if(!this.isDataLoaded){
                this.isDataLoaded = true;
                for(let i=0 ;i<this.compositionIds.length; i++){
                    this.listenToEvent(this.compositionIds[i]);
                }
                if(this.query.type != ""){
                    let concept = await MakeTheTypeConceptApi(this.query.type, 999);
                    if(concept.id > 0){
                        this.listenToEventType(concept.id);
                    }

                }
            }
            for(let i=0 ;i<this.newIds.length; i++){
                this.listenToEvent(this.newIds[i]);
            }
            this.newIds = [];

            return output;
        } catch (err) {
            console.error('Error in SchemaQueryObservable.bind():', err);
            throw err;
        }
    }

    /**
     * Builds the query results in the specified format.
     * @returns Formatted query results based on the output format
     */
    async build(){
        try {
            Logger.logfunction("build", ["schemaquery", this.compositionIds]);
            let countInfos = DecodeCountInfo(this.countInfoStrings);

            if(this.format == DATAID){
                this.data = await formatConnectionsDataId(this.linkers, this.conceptIds, this.compositionIds, this.reverse,countInfos, this.order);
            }
            else if(this.format == JUSTDATA){
                this.data = await formatConnectionsJustId(this.linkers, this.conceptIds, this.compositionIds, this.reverse, countInfos, this.order);
            }
            else if(this.format == DATAV2){
                this.data = await formatConnectionsV2(this.linkers, this.conceptIds,this.compositionIds, this.reverse, countInfos, this.order );
            }
            else if(this.format == RAW){
                console.log("this is the raw format");
                this.data = {};
                this.data.linkers = this.linkers;
                this.data.conceptIds = this.conceptIds;
                this.data.compositionIds = this.compositionIds;
                this.data.reverse = this.reverse;
                this.data.countInfos = countInfos;
                this.data.order = this.order;
            }
            else{

                this.data = await formatConnections(this.linkers, this.conceptIds, this.compositionIds, this.reverse, countInfos);

                //this.data = await formatDataArrayNormal(this.linkers, this.conceptIds, this.internalConnections,  this.mainCompositionIds, this.reverse );
            }
            return this.data;
        } catch (err) {
            console.error('Error in SchemaQueryObservable.build():', err);
            throw err;
        }
    }

}


/**
 * Creates an observable that executes a free-schema query and updates subscribers when results change.
 * @param query - FreeschemaQuery object with search, filter, sort, and pagination parameters
 * @param token - Authentication token
 * @returns Observable instance for the query results
 *
 * @example
 * const query = new FreeschemaQuery();
 * query.type = "BlogPost";
 * query.outputFormat = DATAID;
 * const observer = SchemaQueryListener(query, token);
 * observer.subscribe((results) => console.log(results));
 */
export function SchemaQueryListener(query: FreeschemaQuery, token: string){
    return new SearchLinkMultipleAllObservable(query, token);
}

/**
 * Executes a free-schema query once without creating a subscription.
 * @param query - FreeschemaQuery object with search parameters
 * @param token - Authentication token
 * @returns Promise resolving to formatted query results
 */
export function SchemaQuery(query: FreeschemaQuery, token: string){
    return new SearchLinkMultipleAllObservable(query, token).execute();
}