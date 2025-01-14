import { FreeschemaQuery, FreeschemaQueryApi } from "../app";
import { ALLID, DATAID, JUSTDATA, NORMAL } from "../Constants/FormatConstants";
import { DecodeCountInfo } from "../Services/Common/DecodeCountInfo";
import { formatConnections, formatConnectionsDataId, formatConnectionsJustId, formatDataArrayDataId, formatDataArrayNormal } from "../Services/Search/SearchWithTypeAndLinker";
import { DependencyObserver } from "./DepenedencyObserver";

export class SearchLinkMultipleAllObservable extends DependencyObserver{
    mainCompositionIds: number [] =[];
    query: FreeschemaQuery = new FreeschemaQuery();
    countInfoStrings: string [] = [];
    order: string = "DESC";
    constructor(query: FreeschemaQuery, token: string){
        super();
        this.query = query;
        this.format = query.outputFormat;
        this.order = query.order;
    }

    async bind() {
        if(!this.isDataLoaded){
            this.isDataLoaded = true;
            this.query.outputFormat = ALLID;
            let result:any = await FreeschemaQueryApi(this.query, "");
            this.conceptIds = result.conceptIds;
            this.internalConnections = result.internalConnections;
            this.linkers = result.linkers;
            this.reverse = result.reverse;
            this.mainCompositionIds = result.mainCompositionIds;
            this.countInfoStrings = result.countinfo;
        }
        return await this.build();
    }
    
    async build(){
        let countInfos = DecodeCountInfo(this.countInfoStrings);
        if(this.format == DATAID){
            this.data = await formatConnectionsDataId(this.linkers, this.conceptIds, this.mainCompositionIds, this.reverse);
        }
        else if(this.format == JUSTDATA){
            this.data = await formatConnectionsJustId(this.linkers, this.conceptIds, this.mainCompositionIds, this.reverse, countInfos, this.order);
        }
        else{
            this.data = await formatConnections(this.linkers, this.conceptIds, this.mainCompositionIds, this.reverse, countInfos);

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