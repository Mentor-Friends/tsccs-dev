import { Connection, ConnectionData, DATAID, GetComposition, JUSTDATA, NORMAL } from "../app";
import { GetCompositionById, RecursiveFetchBuildLayer, RecursiveFetchBuildLayerDataId, RecursiveFetchBuildLayerNormal } from "../Services/GetComposition";
import { DependencyObserver } from "./DepenedencyObserver";

/**
 * Observable wrapper for retrieving a composition with automatic updates when the composition changes.
 */
export class GetCompositionObservable extends DependencyObserver{
    /** The composition ID to observe */
    id: number;

    /**
     * Creates a new composition observable.
     * @param id - The composition concept ID
     * @param format - Output format (JUSTDATA, DATAID, NORMAL)
     */
    constructor(id:number, format:number = JUSTDATA){
        super();
        this.id = id;
        this.format = format;
    }

    /**
     * Fetches composition data and sets up change listeners.
     * @returns The formatted composition data
     */
    async bind(){
        if(!this.isDataLoaded){
            let conceptConnections = await GetCompositionById(this.id);
            this.mainConcept = this.id;
            this.compositionIds = conceptConnections.compositionList;
            let internalConnections = conceptConnections.connectionList;
            for(let i=0 ; i< internalConnections.length; i++){
                this.internalConnections.push(internalConnections[i].id);
            }
            this.isDataLoaded = true;
            this.listenToEvent(this.mainConcept);

        }

        return await this.build();

    }

    /**
     * Builds the composition data in the specified format.
     * @returns The formatted composition data
     */
    async build(){
        let latestConnectionList: Connection[]= [];
        let latestConnectionIds = this.internalConnections;
        for(let i= 0; i< latestConnectionIds.length; i++){
         latestConnectionList.push(await ConnectionData.GetConnection(latestConnectionIds[i]));
        }
        if(this.format == JUSTDATA){
            this.data = await RecursiveFetchBuildLayer(this.mainConcept, latestConnectionList, this.compositionIds);
        }
        else if(this.format == DATAID){
            this.data = await RecursiveFetchBuildLayerDataId(this.mainConcept, latestConnectionList, this.compositionIds);
        }
        else if(this.format == NORMAL){
            this.data = await RecursiveFetchBuildLayerNormal(this.mainConcept, latestConnectionList, this.compositionIds);
        }
        else{
            this.data = await RecursiveFetchBuildLayer(this.mainConcept, latestConnectionList, this.compositionIds);

        }

        return this.data;
    }
}

/**
 * Creates an observable that tracks a composition and updates subscribers when it changes.
 * @param id - The composition concept ID to observe
 * @param format - Output format (JUSTDATA, DATAID, NORMAL)
 * @returns Observable instance for the composition
 *
 * @example
 * const observer = GetCompositionListener(123, JUSTDATA);
 * observer.subscribe((data) => console.log(data));
 */
export function GetCompositionListener(id:number, format: number = JUSTDATA){
    return new GetCompositionObservable(id, format);
}