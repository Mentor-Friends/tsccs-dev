import {SearchStructure,SearchQuery, GetConnectionBulk, SearchWithTypeAndLinkerApi} from '../../app';
import { GetCompositionFromConnectionsInObject, GetCompositionFromConnectionsWithDataIdInObject, GetConnectionDataPrefetch } from '../GetCompositionBulk';
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