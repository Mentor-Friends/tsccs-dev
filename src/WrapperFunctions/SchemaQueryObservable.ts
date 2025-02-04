import { FreeschemaQueryApi } from "../Api/Search/FreeschemaQueryApi";
import { ALLID, DATAID, JUSTDATA, NORMAL } from "../Constants/FormatConstants";
import { FreeschemaQuery } from "../DataStructures/Search/FreeschemaQuery";
import { DecodeCountInfo } from "../Services/Common/DecodeCountInfo";
import { formatConnections, formatConnectionsDataId, formatConnectionsJustId } from "../Services/Search/SearchWithTypeAndLinker";

export class SearchLinkMultipleAllObservable{
    mainCompositionIds: number [] =[];
    query: FreeschemaQuery = new FreeschemaQuery();
    countInfoStrings: string [] = [];
    order: string = "DESC";
    format: number = DATAID;
    isDataLoaded: boolean = false;
    conceptIds:number[] =[];
    internalConnections:number[] = [];
    linkers:number[] = [];
    reverse: number[] = [];
    data:any;
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
 * 
 * @param id this is the id whose links need to be found
 * @param linker this is the type connection that is connected to the mainConcept(id)
 * @param inpage number of outputs that has to be displayed
 * @param page the page which needs to be displayed as per the inpage parameter
 * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
 */
export async function SchemaQueryListener(query: FreeschemaQuery, token: string){
    let isDataLoaded = true;
     query.outputFormat = ALLID;
    let result:any = await FreeschemaQueryApi(query, "");
    let conceptIds = result.conceptIds;
    let internalConnections = result.internalConnections;
    let linkers = result.linkers;
    let reverse = result.reverse;
    let mainCompositionIds = result.mainCompositionIds;
    let countInfoStrings = result.countinfo;
    let format = query.outputFormat;
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