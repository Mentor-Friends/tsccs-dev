import { FreeschemaQuery, FreeschemaQueryApi, Logger, MakeTheTypeConceptApi } from "../app";
import { ALLID, DATAID, DATAV2, JUSTDATA, NORMAL, RAW } from "../Constants/FormatConstants";
import { DecodeCountInfo } from "../Services/Common/DecodeCountInfo";
import { formatConnections, formatConnectionsDataId, formatConnectionsJustId, formatConnectionsV2, formatDataArrayDataId, formatDataArrayNormal } from "../Services/Search/SearchWithTypeAndLinker";
import { DependencyObserver } from "./DepenedencyObserver";

export class SearchLinkMultipleAllObservable extends DependencyObserver{
    query: FreeschemaQuery = new FreeschemaQuery();
    countInfoStrings: string [] = [];
    order: string = "DESC";
    totalCount:number = 0;
    constructor(query: FreeschemaQuery, token: string){
        super();
        this.query = query;
        this.format = query.outputFormat;
        this.order = query.order;
    }

    async run() {

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
    }

    async bind() {
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
    }
    
    async build(){
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
        return this.data
    }

}


/**
 * 
 * @param id this is the id whose links need to be found
 * @param linker this is the type connection that is connected to the mainConcept(id)
 * @param inpage number of outputs that has to be displayed
 * @param page the page which needs to be displayed as per the inpage parameter
 * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
 */
export function SchemaQueryListener(query: FreeschemaQuery, token: string){
    return new SearchLinkMultipleAllObservable(query, token);
}


export function SchemaQuery(query: FreeschemaQuery, token: string){
    return new SearchLinkMultipleAllObservable(query, token).execute();
}