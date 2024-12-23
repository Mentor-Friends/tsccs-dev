import { GetConcept } from '../../Api/GetConcept';
import {SearchStructure,SearchQuery, GetConnectionBulk, SearchWithTypeAndLinkerApi, GetTheConcept} from '../../app';
import { recursiveFetchConceptSingleLoop } from '../GetComposition';
import { GetCompositionFromConnectionsInObject, GetCompositionFromConnectionsInObjectNormal, GetCompositionFromConnectionsWithDataIdInObject, GetConnectionDataPrefetch } from '../GetCompositionBulk';
import { FormatConceptsAndConnectionsNormalList, FormatFromConnectionsAlteredArrayExternal, formatFunction, FormatFunctionData, FormatFunctionDataForData, formatFunctionForData } from './FormatData';
import { FormatConceptsAndConnections, FormatFromConnectionsAltered, FormatFromConnectionsAlteredArray } from './SearchLinkMultiple';

/**
 * This function will help you search a concept by their type and also to query inside of it.
 * Put the number of compositions you want to get in the searchStructure which can be set by inpage and page
 * Then the type should be set in searchQuery for the compositionName.
 * Inside the searchQuery array this you can set the full linker / listLinker in the searchQuery.
 * This will give the id of the structures.
 */
export async function SearchWithTypeAndLinkerDataId(searchStructure:SearchStructure, searchQuery:SearchQuery[], token:string = "")
{
    let result:any = await SearchWithTypeAndLinkerApi(searchStructure, searchQuery, token);
    let conceptIds = result.compositionIds;
    let connections = result.internalConnections;
    let linkers = result.linkers;
    let reverse = result.reverse;
    let mainCompositionIds = result.mainCompositionIds;
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    let concepts = await GetCompositionFromConnectionsWithDataIdInObject(conceptIds, connections);
    let output:any =  await FormatFromConnectionsAlteredArray(prefetchConnections, concepts, conceptIds, mainCompositionIds, reverse);
    return output;
}

/**
 * This function will help you search a concept by their type and also to query inside of it.
 * Put the number of compositions you want to get in the searchStructure which can be set by inpage and page
 * Then the type should be set in searchQuery for the compositionName.
 * Inside the searchQuery array this you can set the full linker / listLinker in the searchQuery.
 * This will not give the id of the structures.
 */
export async function SearchWithTypeAndLinker(searchStructure:SearchStructure, searchQuery:SearchQuery[], token:string = "")
{
    let result:any = await SearchWithTypeAndLinkerApi(searchStructure, searchQuery, token);
    let conceptIds = result.compositionIds;
    let connections = result.internalConnections;
    let linkers = result.linkers;
    let reverse = result.reverse;
    let mainCompositionIds = result.mainCompositionIds;
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    let concepts = await GetCompositionFromConnectionsInObject(conceptIds, connections);
    let output:any =  await FormatConceptsAndConnections(prefetchConnections, concepts, mainCompositionIds, reverse);
    return output;
}

/**
 * ## Format dataid ##
 * @param linkers 
 * @param conceptIds 
 * @param connections 
 * @param mainCompositionIds 
 * @param reverse 
 * @returns 
 */
export async function formatDataArrayDataId(linkers: number[], conceptIds: number[], connections: number[], mainCompositionIds: number[], reverse: number[] ){
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    let concepts = await GetCompositionFromConnectionsWithDataIdInObject(conceptIds, connections);
    let output:any =  await FormatFromConnectionsAlteredArray(prefetchConnections, concepts, conceptIds, mainCompositionIds, reverse);
    return output;
}

/**
 * ## Format Normal ##
 * @param linkers 
 * @param conceptIds 
 * @param connections 
 * @param mainCompositionIds 
 * @param reverse 
 * @returns 
 */
export async function formatDataArrayNormal(linkers: number[], conceptIds: number[], connections: number[], mainCompositionIds: number[], reverse: number[] ){
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    let concepts = await GetCompositionFromConnectionsInObjectNormal(conceptIds, connections);
    let output:any =  await FormatConceptsAndConnections(prefetchConnections, concepts, mainCompositionIds, reverse);
    return output;
}



/**
 * ## Format Normal ##
 * @param linkers 
 * @param conceptIds 
 * @param connections 
 * @param mainCompositionIds 
 * @param reverse 
 * @returns 
 */
export async function formatLinkersNormal(linkers: number[], conceptIds: number[], connections: number[], mainCompositionIds: number[], reverse: number[] ){
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    let concepts = await GetCompositionFromConnectionsInObjectNormal(conceptIds, connections);
    let output:any =  await FormatConceptsAndConnections(prefetchConnections, concepts, mainCompositionIds, reverse);
    return output;
}


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
export async function formatConnections(linkers: number[], conceptIds: number [], mainCompositionIds: number[], reverse: number[]){
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
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
export async function formatConnectionsDataId(linkers: number[], conceptIds: number [], mainCompositionIds: number[], reverse: number[]){
    let prefetchConnections = await GetConnectionDataPrefetch(linkers);
    let compositionData: any [] = [];
    let newCompositionData: any [] = [];
    compositionData = await FormatFunctionData(prefetchConnections, compositionData, reverse);
    compositionData = await FormatFunctionDataForData(prefetchConnections, compositionData, reverse);
    console.log("this is the composition data", compositionData);
     let output:any  = await FormatFromConnectionsAlteredArrayExternal(prefetchConnections, compositionData,newCompositionData, mainCompositionIds, reverse );
     return output;
}

