/**
 * @fileoverview Observable wrapper for schema query operations in the CCS-JS system.
 * @module WrapperFunctions/SchemaQueryObservable
 */

import { FreeschemaQueryApi } from "../Api/Search/FreeschemaQueryApi";
import { ALLID, DATAID, JUSTDATA, NORMAL } from "../Constants/FormatConstants";
import { FreeschemaQuery } from "../DataStructures/Search/FreeschemaQuery";
import { DecodeCountInfo } from "../Services/Common/DecodeCountInfo";
import { formatConnections, formatConnectionsDataId, formatConnectionsJustId } from "../Services/Search/SearchWithTypeAndLinker";

/**
 * Observable wrapper for handling multiple linked concept searches.
 *
 * @remarks
 * SearchLinkMultipleAllObservable encapsulates the state and configuration for executing
 * schema queries that retrieve multiple linked concepts. It maintains query parameters,
 * formatting options, and the results of API calls including concept IDs, internal
 * connections, linkers, and other relationship data.
 *
 * This class is designed to work with the FreeschemaQuery system and can format results
 * in various output formats (NORMAL, DATAID, JUSTDATA, ALLID).
 *
 * @example
 * ```typescript
 * const query = new FreeschemaQuery();
 * query.outputFormat = DATAID;
 * query.order = "ASC";
 *
 * const observable = new SearchLinkMultipleAllObservable(query, "auth-token");
 * console.log(observable.format); // DATAID
 * console.log(observable.order); // "ASC"
 * ```
 */
export class SearchLinkMultipleAllObservable{
    /**
     * Array of main composition IDs retrieved from the query.
     * @defaultValue []
     */
    mainCompositionIds: number [] =[];

    /**
     * The FreeschemaQuery object containing query parameters and configuration.
     * @defaultValue new FreeschemaQuery()
     */
    query: FreeschemaQuery = new FreeschemaQuery();

    /**
     * Array of encoded count information strings returned from the API.
     * @defaultValue []
     */
    countInfoStrings: string [] = [];

    /**
     * Sort order for the query results.
     * @defaultValue "DESC"
     */
    order: string = "DESC";

    /**
     * Output format for the query results.
     * @defaultValue DATAID
     *
     * @remarks
     * Valid values include NORMAL, DATAID, JUSTDATA, and ALLID from FormatConstants.
     */
    format: number = DATAID;

    /**
     * Flag indicating whether data has been loaded from the API.
     * @defaultValue false
     */
    isDataLoaded: boolean = false;

    /**
     * Array of concept IDs retrieved from the query.
     * @defaultValue []
     */
    conceptIds:number[] =[];

    /**
     * Array of internal connection IDs showing relationships between concepts.
     * @defaultValue []
     */
    internalConnections:number[] = [];

    /**
     * Array of linker IDs representing the types of connections.
     * @defaultValue []
     */
    linkers:number[] = [];

    /**
     * Array of reverse relationship indicators.
     * @defaultValue []
     */
    reverse: number[] = [];

    /**
     * The processed data result from the query.
     *
     * @remarks
     * The structure and content of this property depends on the format setting.
     */
    data:any;

    /**
     * Creates a new SearchLinkMultipleAllObservable instance.
     *
     * @param query - The FreeschemaQuery object containing query parameters
     * @param token - Authentication token for API requests (currently unused in constructor)
     *
     * @remarks
     * The constructor initializes the observable with the provided query and extracts
     * the output format and order settings from the query object. The token parameter
     * is accepted but not currently stored or used within the constructor.
     *
     * @example
     * ```typescript
     * const query = new FreeschemaQuery();
     * query.outputFormat = JUSTDATA;
     * query.order = "ASC";
     *
     * const observable = new SearchLinkMultipleAllObservable(query, "my-token");
     * console.log(observable.format); // JUSTDATA
     * console.log(observable.order); // "ASC"
     * ```
     */
    constructor(query: FreeschemaQuery, token: string){
        this.query = query;
        this.format = query.outputFormat;
        this.order = query.order;
    }

    // async bind() {
    //         this.isDataLoaded = true;
    //         this.query.outputFormat = ALLID;
    //         let result:any = await FreeschemaQueryApi(this.query, "");
    //         this.conceptIds = result.conceptIds;
    //         this.internalConnections = result.internalConnections;
    //         this.linkers = result.linkers;
    //         this.reverse = result.reverse;
    //         this.mainCompositionIds = result.mainCompositionIds;
    //         this.countInfoStrings = result.countinfo;
    //         return await this.build();
    // }



}


/**
 * Executes a schema query and formats the results according to the specified output format.
 *
 * @param query - The FreeschemaQuery object containing query parameters and configuration
 * @param token - Authentication token for API requests
 * @returns Promise resolving to formatted query results (structure varies by output format)
 *
 * @remarks
 * This function serves as the main entry point for executing schema queries. It performs
 * the following operations:
 * 1. Temporarily changes the output format to ALLID to retrieve all relationship data
 * 2. Calls the FreeschemaQueryApi to execute the query
 * 3. Extracts concept IDs, connections, linkers, and metadata from the result
 * 4. Decodes count information strings
 * 5. Formats the data according to the original output format setting
 *
 * The function supports three output formats:
 * - DATAID: Formatted with data IDs included
 * - JUSTDATA: Formatted with only data, no IDs
 * - NORMAL (or any other value): Standard formatting
 *
 * @example
 * ```typescript
 * // Create and configure a query
 * const query = new FreeschemaQuery();
 * query.outputFormat = DATAID;
 * query.order = "DESC";
 * // ... set other query parameters
 *
 * // Execute the query
 * const results = await SchemaQueryListener(query, "auth-token");
 * console.log(results); // Formatted results based on DATAID format
 * ```
 *
 * @example
 * ```typescript
 * // Query with JUSTDATA format
 * const query = new FreeschemaQuery();
 * query.outputFormat = JUSTDATA;
 * query.order = "ASC";
 *
 * const results = await SchemaQueryListener(query, "my-token");
 * // Results contain only data without IDs
 * ```
 */
export async function SchemaQueryListener(query: FreeschemaQuery, token: string){
    let format = query.outputFormat;
     query.outputFormat = ALLID;
    let result:any = await FreeschemaQueryApi(query, "");
    let conceptIds = result.conceptIds;
    let internalConnections = result.internalConnections;
    let linkers = result.linkers;
    let reverse = result.reverse;
    let mainCompositionIds = result.mainCompositionIds;
    let countInfoStrings = result.countinfo;
    let order = query.order;
    let data:any;
    let countInfos = DecodeCountInfo(countInfoStrings);

    if(format == DATAID){
        data = await formatConnectionsDataId(linkers, conceptIds,mainCompositionIds, reverse,countInfos,order);
    }
    else if(format == JUSTDATA){
        data = await formatConnectionsJustId(linkers, conceptIds, mainCompositionIds, reverse, countInfos, order);
    }
    else{

        data = await formatConnections(linkers, conceptIds, mainCompositionIds, reverse, countInfos);

}
return data;
}