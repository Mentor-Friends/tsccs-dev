import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { ConceptsData, Connection, ConnectionData, DATAID, GetAllConnectionsOfCompositionBulk, GetComposition, GetCompositionList, GetConceptByCharacter, JUSTDATA, NORMAL } from "../app";
import { GetCompositionById, GetCompositionFromMemory, GetCompositionFromMemoryNormal, GetCompositionWithIdFromMemory, RecursiveFetchBuildLayer } from "../Services/GetComposition";
import { DependencyObserver } from "./DepenedencyObserver";
import { GetCompositionListener, GetCompositionObservable } from "./GetCompositionObservable";

/**
 * Observable wrapper for retrieving a paginated list of compositions by type with automatic updates.
 */
export class GetCompositionListObservable extends DependencyObserver{
    /** The composition type character name */
    compositionName: string;
    /** The user ID who owns the compositions */
    userId: number;
    /** Number of items per page */
    inpage: number;
    /** Current page number */
    page: number;
    /** List of composition data */
    data: any = [];
    /** Starting page index */
    startPage:number = 0;

    /**
     * Creates a new composition list observable.
     * @param compositionName - The composition type name
     * @param userId - The user ID who owns the compositions
     * @param inpage - Number of items per page
     * @param page - Page number (1-indexed)
     * @param format - Output format (JUSTDATA, DATAID, NORMAL)
     */
    constructor(compositionName:string, userId: number, inpage: number , page: number, format: number){
        super();
        this.compositionName = compositionName;
        this.userId = userId;
        this.inpage = inpage;
        this.page = page;
        this.format = format;
    }



    /**
     * Fetches paginated composition list and sets up change listeners.
     * @returns Array of formatted composition data
     */
    async bind(){
        if(!this.isDataLoaded){
            var concept = await GetConceptByCharacter(this.compositionName);

            if(concept){
                await GetAllConceptsByType(this.compositionName, this.userId);
                let conceptList = await ConceptsData.GetConceptsByTypeIdAndUser(concept.id,this.userId);
                var startPage = this.inpage * (this.page - 1);
                for(var i=startPage; i< startPage + this.inpage; i++){
                    if(conceptList[i]){

                        this.compositionIds.push(conceptList[i].id);
                    }
                }
            }
            await GetAllConnectionsOfCompositionBulk(this.compositionIds);

            this.isDataLoaded = true;
            this.listenToEventType(concept.id);
            for(let i= 0 ; i< this.compositionIds.length; i++){
                this.listenToEvent(this.compositionIds[i]);
            }
        }
        let mydata  =  await this.build();
        return mydata;
    }

    /**
     * Builds the list of compositions in the specified format.
     * @returns Array of formatted composition data
     */
    async build(){
        this.data = [];
        if(this.format == JUSTDATA){
            for(let i=this.startPage; i< this.startPage + this.inpage; i++){
                if(this.compositionIds[i]){
          
                   let compositionJson= await GetCompositionFromMemory(this.compositionIds[i]);
                   this.data.push(compositionJson);
                }
              }
        }
        else if(this.format == DATAID){
            for(let i=this.startPage; i< this.startPage + this.inpage; i++){
                if(this.compositionIds[i]){
          
                    let compositionJson= await GetCompositionWithIdFromMemory(this.compositionIds[i]);
                   this.data.push(compositionJson);
                }
              }
        }
        else if(this.format == NORMAL){
            for(let i=this.startPage; i< this.startPage + this.inpage; i++){
                if(this.compositionIds[i]){
                    let compositionJson= await GetCompositionFromMemoryNormal(this.compositionIds[i]);
                   this.data.push(compositionJson);
                }
              }
        }
        else{
            for(let i=this.startPage; i< this.startPage + this.inpage; i++){
                if(this.compositionIds[i]){
          
                    let compositionJson= await GetCompositionFromMemory(this.compositionIds[i]);

                   this.data.push(compositionJson);
                }
              }
        }

        return this.data;
    }
}

/**
 * Creates an observable that tracks a paginated list of compositions and updates subscribers when they change.
 * @param compositionName - The composition type name
 * @param userId - The user ID who owns the compositions
 * @param inpage - Number of items per page
 * @param page - Page number (1-indexed)
 * @param format - Output format (JUSTDATA, DATAID, NORMAL)
 * @returns Observable instance for the composition list
 *
 * @example
 * const observer = GetCompositionListListener("BlogPost", 123, 10, 1, JUSTDATA);
 * observer.subscribe((data) => console.log(data));
 */
export function GetCompositionListListener(compositionName:string, userId: number, inpage: number, page: number, format:number = JUSTDATA){


    return  new GetCompositionListObservable(compositionName, userId, inpage, page,format);

    // Add Log
    // Logger.logInfo(
    //     startTime,
    //     userId,
    //     "read",
    //     "Unknown",
    //     "Unknown",
    //     200,
    //     compositionResult,
    //     "GetCompositionListListener",
    //     ['compositionName', 'userId', 'inpage', 'page', 'format'],
    //     "UnknownUserAgent",
    //     []
    // );

}