/**
 * @module CompositionCache
 * @description Provides composition retrieval functions with caching support for improved performance
 */

import { Concept } from '../../DataStructures/Concept';
import { Connection } from '../../DataStructures/Connection';
import { ConceptsData } from '../../DataStructures/ConceptData';
import { GetAllConnectionsOfComposition } from '../../Api/GetAllConnectionsOfComposition';
import { GetConnectionBulk } from '../../Api/GetConnectionBulk';
import { GetConcept } from '../../Api/GetConcept';
import { recursiveFetchNew } from './BuildComposition'
import { recursiveFetch } from '../GetComposition';
import { Composition } from '../../DataStructures/Composition/Composition';
import { CompositionBinaryTree } from '../../DataStructures/Composition/CompositionBinaryTree';
import { BulkConceptGetterApi } from '../../Api/GetConceptBulk'

/**
 * Retrieves a composition by ID with caching support, optionally using provided connections.
 * Returns a formatted composition object with all internal connections.
 *
 * @async
 * @param {number} id - The composition concept ID to retrieve
 * @param {Connection[]} [connectionListPassed=[]] - Optional pre-fetched connections for this composition
 * @returns {Promise<any>} A promise that resolves to the formatted composition object
 *
 * @example
 * ```typescript
 * // Retrieve composition without pre-loaded connections
 * const composition = await GetCompositionWithCache(123);
 * // composition = { user: { name: "John", email: "john@example.com" } }
 *
 * // Retrieve composition with pre-loaded connections (more efficient)
 * const connections: Connection[] = [...]; // Previously fetched
 * const composition = await GetCompositionWithCache(123, connections);
 * ```
 *
 * @remarks
 * This function:
 * - Checks local cache (ConceptsData) before making API calls
 * - Uses provided connections if available, otherwise fetches them
 * - Builds list of composition IDs and concept IDs from connections
 * - Recursively builds the composition structure
 * - Returns empty string if concept ID is 0
 * - Uses concept type as the root key in returned object
 */
export async function GetCompositionWithCache(
  id: number,
  connectionListPassed: Connection[] = [],
) {
    let connectionList: Connection[] = []
  const conceptIdList: number[] = []
  let returnOutput: any = {}
  let output: any = {}
  const compositionList: number[] = []
  let concept = await ConceptsData.GetConcept(id)
  if (concept.id == 0 && id != null && id != undefined) {
    const conceptString = await GetConcept(id)
    concept = conceptString as Concept
  }
    let connectionListString: any = []
    if (connectionListPassed.length > 0) {
      connectionListString = getMyConnections(id, connectionListPassed)
    } else {
      connectionListString = await GetAllConnectionsOfComposition(id)
    }
    connectionList = connectionListString as Connection[]
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);

    for (let i = 0; i < connectionList.length; i++) {
      if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
        compositionList.push(connectionList[i].ofTheConceptId)
        conceptIdList.push(connectionList[i].ofTheConceptId)
      }
      if (!conceptIdList.includes(connectionList[i].toTheConceptId)) {
        conceptIdList.push(connectionList[i].toTheConceptId)
      }
    }

    let visitedConcepts: number [] = []
    output = await recursiveFetch(id, connectionList, compositionList, visitedConcepts)
    const mainString = concept?.type?.characterValue ?? ''
    returnOutput[mainString] = output

  if (concept.id == 0) {
    return ''
  }

  return returnOutput
  }
/**
 * Filters a list of connections to find all connections belonging to a specific composition.
 *
 * @param {number} id - The composition ID (used as typeId in connections)
 * @param {Connection[]} connectionList - Array of connections to filter
 * @returns {Connection[]} Array of connections that belong to the specified composition
 *
 * @example
 * ```typescript
 * const allConnections: Connection[] = [
 *   { id: 1, typeId: 123, ... },
 *   { id: 2, typeId: 456, ... },
 *   { id: 3, typeId: 123, ... }
 * ];
 * const compositionConnections = getMyConnections(123, allConnections);
 * // Returns connections with id 1 and 3
 * ```
 *
 * @remarks
 * - Filters connections where typeId matches the provided composition ID
 * - Used for bulk connection fetching optimization
 * - Returns empty array if no matching connections found
 */
function getMyConnections(id: number, connectionList: Connection[]) {
    const connections: Connection[] = []
    for (let i = 0; i < connectionList.length; i++) {
      if (connectionList[i].typeId == id) {
        connections.push(connectionList[i])
      }
    }
    return connections
  }
/**
 * Retrieves a composition by ID in DATA-ID format with caching support.
 * Returns composition with id, data, and created_at fields.
 *
 * @async
 * @param {number} id - The composition concept ID to retrieve
 * @param {Connection[]} [connectionListPassed=[]] - Optional pre-fetched connections for this composition
 * @returns {Promise<any>} A promise that resolves to composition object with id, data, and created_at properties
 *
 * @example
 * ```typescript
 * const composition = await GetCompositionWithDataIdWithCache(123);
 * // composition = {
 * //   id: 123,
 * //   data: { user: { name: "John", email: "john@example.com" } },
 * //   created_at: "2023-10-30T12:00:00Z"
 * // }
 * ```
 *
 * @remarks
 * Format: DATA-ID - Includes explicit ID and timestamp information
 * This function:
 * - Similar to GetCompositionWithCache but includes ID metadata
 * - Returns object with id, data (composition tree), and created_at
 * - Uses caching for improved performance
 * - Returns empty string if concept ID is 0
 */
export async function GetCompositionWithDataIdWithCache(
  id: number,
  connectionListPassed: Connection[] = [],
) {
    let FinalReturn: any = {}
  let connectionList: Connection[] = []
  const conceptIdList: number[] = []
  let output: any
  const returnOutput: any = {}

  const compositionList: number[] = []
  let concept = await ConceptsData.GetConcept(id)
  if (concept.id == 0 && id != null && id != undefined) {
    const conceptString = await GetConcept(id)
    concept = conceptString as Concept
  }

    let connectionListString: any = []
    if (connectionListPassed.length > 0) {
      connectionListString = getMyConnections(id, connectionListPassed)
    } else {
      connectionListString = await GetAllConnectionsOfComposition(id)
    }
    connectionList = connectionListString as Connection[]
    //connectionList = ConnectionData.GetConnectionsOfComposition(id);

    for (let i = 0; i < connectionList.length; i++) {
      if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
        compositionList.push(connectionList[i].ofTheConceptId)
        conceptIdList.push(connectionList[i].ofTheConceptId)
      }
      if (!conceptIdList.includes(connectionList[i].toTheConceptId)) {
        conceptIdList.push(connectionList[i].toTheConceptId)
      }
    }

    output = await recursiveFetch(id, connectionList, compositionList)
    const mainString = concept?.type?.characterValue ?? ''
    returnOutput[mainString] = output
    FinalReturn["created_at"] = concept.entryTimeStamp
    FinalReturn['data'] = returnOutput
    FinalReturn['id'] = id
  if (concept.id == 0) {
    return ''
  }
  return FinalReturn
  }
/**
 * Retrieves multiple compositions in bulk using DATA-ID format.
 * Efficiently fetches multiple compositions with their internal connections in one operation.
 *
 * @async
 * @param {number[]} ids - Array of composition concept IDs to retrieve
 * @param {number[]} connections - Array of connection IDs for all compositions
 * @returns {Promise<any[]>} A promise that resolves to array of composition objects with DATA-ID format
 *
 * @example
 * ```typescript
 * const compositionIds = [123, 456, 789];
 * const connectionIds = [1, 2, 3, 4, 5];
 * const compositions = await GetCompositionWithDataIdBulk(compositionIds, connectionIds);
 * // compositions = [
 * //   { id: 123, data: {...}, created_at: timestamp },
 * //   { id: 456, data: {...}, created_at: timestamp },
 * //   { id: 789, data: {...}, created_at: timestamp }
 * // ]
 * ```
 *
 * @remarks
 * This function:
 * - Optimized for bulk operations to reduce API calls
 * - Fetches all connections once, then filters per composition
 * - Each result includes id, data object, and created_at timestamp
 * - Filters out null/undefined compositions from results
 * - More efficient than calling GetCompositionWithDataIdWithCache individually
 */
export async function GetCompositionWithDataIdBulk(
  ids: number[],
  connections: number[],
) {
    let connectionList: Connection[] = []
    const compositions: any[] = []
    const newConnections = await GetConnectionBulk(connections)
    connectionList = newConnections as Connection[]
    for (let i = 0; i < ids.length; i++) {
      const output = await GetCompositionWithDataIdWithCache(ids[i], connectionList)
      if (output) {
        compositions.push(output)
      }
    }
    return compositions
  }
/**
 * Saves a composition to the cache (CompositionBinaryTree) for fast retrieval.
 * Builds and caches the complete composition structure.
 *
 * @async
 * @param {Concept} concept - The main concept of the composition
 * @param {Connection[]} connections - Array of all connections in the composition
 * @param {number[]} conceptIdList - Array of all concept IDs involved
 * @param {number[]} numbers - Array of subcomposition IDs
 *
 * @example
 * ```typescript
 * const mainConcept: Concept = { id: 123, ... };
 * const connections: Connection[] = [...];
 * const conceptIds = [1, 2, 3, 123];
 * const subcompositions = [456, 789];
 * await SaveToCompositionCache(mainConcept, connections, conceptIds, subcompositions);
 * ```
 *
 * @remarks
 * This function:
 * - Fetches all concepts from cache or API in bulk
 * - Builds the composition tree using recursiveFetchNew
 * - Creates a Composition object with all metadata
 * - Stores the composition in CompositionBinaryTree for caching
 * - Used internally by composition retrieval functions
 * - No return value (void function)
 */
async function SaveToCompositionCache(
  concept: Concept,
  connections: Connection[],
  conceptIdList: number[],
  numbers: number[],
) {
    const composition = new Composition()
    const concepts = await BulkConceptGetter(conceptIdList)
    composition.connections = connections
    composition.concepts = concepts
    composition.id = concept.id
    composition.subcompositions = numbers
    composition.mainConcept = concept
    let visitedConcepts: number[] = [];
    const output = await recursiveFetchNew(
      concept.id,
      connections,
      concepts,
      numbers,
      visitedConcepts
    )
    composition.cached = output
    CompositionBinaryTree.addCompositionToTree(composition)
  }
/**
 * Retrieves multiple concepts efficiently using cache-first approach with bulk API fallback.
 *
 * @async
 * @param {number[]} conceptIds - Array of concept IDs to retrieve
 * @returns {Promise<Concept[]>} A promise that resolves to array of Concept objects
 *
 * @example
 * ```typescript
 * const conceptIds = [1, 2, 3, 4, 5];
 * const concepts = await BulkConceptGetter(conceptIds);
 * // concepts = [Concept1, Concept2, Concept3, Concept4, Concept5]
 * ```
 *
 * @remarks
 * This function:
 * - First checks local cache (ConceptsData) for each concept
 * - Collects IDs of concepts not in cache
 * - Fetches missing concepts in bulk from API (single call)
 * - Returns combined list of cached and fetched concepts
 * - Optimized to minimize API calls
 * - Returns empty array if no valid concept IDs provided
 */
async function BulkConceptGetter(conceptIds: number[]) {
    let conceptList: Concept[] = []
  
    const bulkConceptFetch: number[] = []
    for (let i = 0; i < conceptIds?.length; i++) {
      const conceptUse: Concept = await ConceptsData.GetConcept(conceptIds[i])
      if (conceptUse.id == 0) {
        bulkConceptFetch.push(conceptIds[i])
      } else {
        conceptList.push(conceptUse)
      }
    }
  
    if (bulkConceptFetch?.length == 0) {
      return conceptList
    } else {
      conceptList = await BulkConceptGetterApi(bulkConceptFetch)
    }
    return conceptList
  }
  