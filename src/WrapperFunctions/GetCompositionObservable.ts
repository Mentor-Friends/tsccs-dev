import { Connection, ConnectionData, DATAID, GetComposition, JUSTDATA, NORMAL } from "../app";
import { GetCompositionById, RecursiveFetchBuildLayer, RecursiveFetchBuildLayerDataId, RecursiveFetchBuildLayerNormal } from "../Services/GetComposition";
import { DependencyObserver } from "./DepenedencyObserver";

export class GetCompositionObservable extends DependencyObserver{
    id: number;

    constructor(id:number, format:number = JUSTDATA){
        super();
        this.id = id;
        this.format = format;
    }

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
 * 
 * @param id Id of the composition
 * @returns composition of the id given in the json form.
 */
export function GetCompositionListener(id:number, format: number = JUSTDATA){
    return new GetCompositionObservable(id, format);
}