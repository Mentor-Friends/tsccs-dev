import { Connection, ConnectionData, DATAID, GetConceptBulk, GetConceptByCharacter, NORMAL, SearchQuery, SearchStructure, SearchWithTypeAndLinker, SearchWithTypeAndLinkerApi } from "../app";
import { ConnectionOfNode } from "../DataStructures/ConnectionBinaryTree/ConnectionOfNode";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";
import { formatDataArrayDataId, formatDataArrayNormal } from "../Services/Search/SearchWithTypeAndLinker";
import { DependencyObserver } from "./DepenedencyObserver";

/**
 * Observable wrapper for searching linked concepts with complex query structures and automatic updates.
 */
export class GetLinkListObservable extends DependencyObserver{
    /** Array of search query conditions */
    searchQuery: SearchQuery[] = [];
    /** Search structure defining composition and linker types */
    searchStructure: SearchStructure;
    /** Output format */
    format: number = DATAID;
    /** List of main composition IDs */
    mainCompositionIds: number [] =[];
    /** Character value of the search composition */
    searchCharacter = "";
    /** Authentication token */
    token: string = "";

    /**
     * Creates a new link list observable.
     * @param searchStructure - Defines composition and linker types for the search
     * @param searchQuery - Array of query conditions to filter results
     * @param token - Authentication token
     * @param format - Output format (DATAID, NORMAL)
     */
    constructor(searchStructure:SearchStructure, searchQuery: SearchQuery[], token: string, format:number = DATAID){
        super();
        this.searchStructure = searchStructure;
        this.searchQuery = searchQuery;
        this.searchQuery[0].type  = searchStructure.composition;
        this.searchCharacter = searchStructure.composition;
        this.format = format;
        this.token = TokenStorage.BearerAccessToken;
    }

    /**
     * Overrides base method to handle new compositions of the searched type being created.
     * @param id - The type concept ID to track
     */
    listenToEventType(id: number): void {
            window.addEventListener(`${id}`, (event) => {
                if(!this.isUpdating){
                    this.isUpdating = true;
                    let that = this;
                    setTimeout( async function(){
                        let myEvent = event as CustomEvent;
                        if(!that.mainCompositionIds.includes(myEvent?.detail)){
                            that.mainCompositionIds.unshift(myEvent?.detail);
                            that.conceptIds.push(myEvent?.detail);
                            that.listenToEvent(myEvent?.detail);
                            ConnectionData.GetConnectionsOfConcept(myEvent?.detail).then((connectionList: Connection[])=>{
                                for(let i=0;i < connectionList.length; i++){
                                    that.linkers.push(connectionList[i].id);
                                }
                            })
                        }
                        that.isUpdating = false;
                        await that.bind();
                        that.notify();
    
    
                    }, 200);
                }
                else{
                   // console.log("rejected this");
                }
    
            });
        }


    /**
     * Executes the search query and sets up change listeners.
     * @returns Array of formatted search results
     */
    async bind(){
        if(!this.isDataLoaded){

            this.isDataLoaded = true;
            var concept = await GetConceptByCharacter(this.searchCharacter);
            let result:any = await SearchWithTypeAndLinkerApi( this.searchStructure, this.searchQuery, this.token);
            this.conceptIds = result.compositionIds;
            this.internalConnections = result.internalConnections;
            this.linkers = result.linkers;
            this.reverse = result.reverse;
            this.mainCompositionIds = result.mainCompositionIds;
            this.listenToEventType(concept.id);
            for(let i =0; i< this.mainCompositionIds.length; i++){
                this.listenToEvent(this.mainCompositionIds[i]);
            }

        }
        return await this.build();
    }


    /**
     * Builds the search results in the specified format.
     * @returns Array of formatted search results
     */
    async build(){

    await GetConceptBulk(this.conceptIds);

        if(this.format == DATAID){
            this.data = await formatDataArrayDataId(this.linkers, this.conceptIds, this.internalConnections, this.mainCompositionIds, this.reverse);
        }
        else{
            this.data = await formatDataArrayNormal(this.linkers, this.conceptIds, this.internalConnections,  this.mainCompositionIds, this.reverse );
        }
        return this.data
    }
}


/**
 * Creates an observable that tracks search results with complex query conditions and updates subscribers when results change.
 * @param searchStructure - Defines composition and linker types for the search
 * @param searchQuery - Array of query conditions to filter results
 * @param token - Authentication token
 * @param format - Output format (DATAID, NORMAL)
 * @returns Observable instance for the search results
 *
 * @example
 * const structure = { composition: "BlogPost", linker: ["Author", "Category"] };
 * const queries = [{ type: "BlogPost", searchField: "title", searchText: "tutorial" }];
 * const observer = GetLinkListListener(structure, queries, token, DATAID);
 * observer.subscribe((results) => console.log(results));
 */
export function GetLinkListListener(searchStructure: SearchStructure, searchQuery: SearchQuery[], token: string, format:number = DATAID){
    return new GetLinkListObservable(searchStructure, searchQuery, token, format);
}