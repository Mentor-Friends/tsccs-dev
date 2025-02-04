import { CountInfo } from "../../DataStructures/Count/CountInfo";
import { GetConnectionTypeForCount } from "../Common/DecodeCountInfo";
import { GetConnectionDataPrefetch } from "../GetCompositionBulk";
import { FormatFromConnectionsAlteredArrayExternal, FormatFunctionData, FormatFunctionDataForData } from "./DataIdFormat";
import { FormatConceptsAndConnectionsNormalList, formatFunction, formatFunctionForData } from "./FormatData";
import { FormatFromConnectionsAlteredArrayExternalJustId, FormatFunctionDataForDataJustId } from "./JustIdFormat";
import { orderTheConnections } from "./orderingConnections";

/**
 * ## Format Normal ##
 * This function fetches all the connections and then converts all the connections to the single level connections 
 * Then those single level objects are then stiched together to create a complex json/ array.
 * @param linkers 
 * @param conceptIds 
 * @param mainCompositionIds 
 * @param reverse 
 * @returns 
 */
export async function formatConnections(linkers: number[], conceptIds: number [], mainCompositionIds: number[], reverse: number[],countInfos: CountInfo[]){
    
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    prefetchConnections = orderTheConnections(prefetchConnections);
    let compositionData: any [] = [];
    let newCompositionData: any [] = [];
    compositionData = await formatFunction(prefetchConnections, compositionData, reverse);
    compositionData = await formatFunctionForData(prefetchConnections, compositionData, reverse);
    let output:any  = await FormatConceptsAndConnectionsNormalList(prefetchConnections, compositionData, mainCompositionIds, newCompositionData, reverse );
    return output;
}


/**
 * ## Format DATA-ID ##
 * This function fetches all the connections and then converts all the connections to the single level connections 
 * Then those single level objects are then stiched together to create a complex json/ array.
 * @param linkers 
 * @param conceptIds 
 * @param mainCompositionIds 
 * @param reverse 
 * @returns 
 */
export async function formatConnectionsDataId(linkers: number[], conceptIds: number [], mainCompositionIds: number[], reverse: number[], countInfos: CountInfo[], order:string = "DESC"){
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    let CountDictionary:any = await GetConnectionTypeForCount(countInfos);
    prefetchConnections = orderTheConnections(prefetchConnections, order);
    let compositionData: any [] = [];
    let newCompositionData: any [] = [];
    compositionData = await FormatFunctionData(prefetchConnections, compositionData, reverse);
    compositionData = await FormatFunctionDataForData(prefetchConnections, compositionData, reverse);
    let output:any  = await FormatFromConnectionsAlteredArrayExternal(prefetchConnections, compositionData,newCompositionData, mainCompositionIds, reverse, CountDictionary );
    return output;
}



/**
 * ## Format JustId ##
 * This function fetches all the connections and then converts all the connections to the single level connections 
 * Then those single level objects are then stiched together to create a complex json/ array.
 * @param linkers 
 * @param conceptIds 
 * @param mainCompositionIds 
 * @param reverse 
 * @returns 
 */
export async function formatConnectionsJustId(linkers: number[], conceptIds: number [], mainCompositionIds: number[], reverse: number[], countInfos: CountInfo[], order:string = "DESC"){
   
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    let CountDictionary:any = await GetConnectionTypeForCount(countInfos);
     prefetchConnections = orderTheConnections(prefetchConnections, order);

    let compositionData: any [] = [];
    let newCompositionData: any [] = [];
    compositionData = await formatFunction(prefetchConnections, compositionData, reverse);
    compositionData = await FormatFunctionDataForDataJustId(prefetchConnections, compositionData, reverse);
    let output:any  = await FormatFromConnectionsAlteredArrayExternalJustId(prefetchConnections, compositionData, mainCompositionIds, reverse, CountDictionary);
    return output;
}