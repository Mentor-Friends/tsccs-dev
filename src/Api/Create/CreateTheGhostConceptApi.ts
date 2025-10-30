import { CreateTheConceptUrl } from "../../Constants/ApiConstants";
import { Concept } from "../../DataStructures/Concept";
import { Returner } from "../../DataStructures/Returner";
import { TheCharacter } from "../../DataStructures/TheCharacter";
import { BaseUrl } from "../../DataStructures/BaseUrl";
import { GetRequestHeaderWithAuthorization } from "../../Services/Security/GetRequestHeader";
import { TokenStorage } from "../../DataStructures/Security/TokenStorage";
import { Connection, Logger } from "../../app";
import { HandleHttpError, UpdatePackageLogWithError } from "../../Services/Common/ErrorPosting";

/**
 * Syncs local concepts and connections to the backend server in bulk (batch sync).
 *
 * **Complex Logic**:
 * 1. Strips type objects from data to reduce payload size
 * 2. If total items ≤2000: Sends in single request
 * 3. If total items >2000: Chunks into 1000-item batches and sends in parallel
 * 4. Returns arrays of created concepts and connections with real server IDs
 *
 * "Ghost" refers to preserving original local IDs (negative) as ghostId while assigning real positive IDs.
 *
 * @param conceptData - Array of Concept objects to sync (can include local negative IDs)
 * @param connectionData - Array of Connection objects to sync
 * @param withAuth - Whether to use authentication (default: true)
 * @returns Object with {concepts: Concept[], connections: Connection[]} containing synced items
 * @throws Error if any batch request fails
 *
 * @example
 * const result = await CreateTheGhostConceptApi(
 *   [concept1, concept2],
 *   [connection1, connection2]
 * );
 * // result.concepts contains concepts with real server IDs
 * // result.connections contains connections with real server IDs
 */
export async function CreateTheGhostConceptApi(conceptData: Concept[], connectionData: Connection[], withAuth:boolean = true){
  const logData : any = Logger.logfunction("CreateTheGhostConceptApi",[conceptData.length, connectionData.length] )
  try {
    const CHUNK_SIZE = 1000
    let result: any = {
      "concepts": [],
      "connections": []
    };
    
    // strip data
    const stripedConcept = await stripTypeFromConceptOrConnection(conceptData);
    const stripedConnection = await stripTypeFromConceptOrConnection(connectionData);

    // sync all in one request if data is less
    if (conceptData.length + connectionData.length <= (CHUNK_SIZE * 2)) {
      const response = await syncConceptConnection(stripedConcept, stripedConnection, withAuth)
      
      if (Array.isArray(response?.concepts)) result.concepts = [...result.concepts, ...response.concepts]
      if (Array.isArray(response?.connections)) result.connections = [...result.connections, ...response.connections]
      Logger.logUpdate(logData);
      return result
    }

    // split data 
    const splittedConcepts = chunkArrayByItemCount(stripedConcept, CHUNK_SIZE)
    const splittedConnections = chunkArrayByItemCount(stripedConnection, CHUNK_SIZE)

    const syncConceptPromises: any[] = []
    const syncConnectionPromises: any[] = []
    console.log("This is the with auth in syncing", withAuth);
    // sync concept
    for (let i = 0; i < splittedConcepts.length; i++) {
      const concepts = splittedConcepts[i] as Concept[];
      syncConceptPromises.push(syncConceptConnection(concepts, [], withAuth))
    }
    const conceptResponses = await Promise.all(syncConceptPromises)
    for (let i = 0; i < conceptResponses.length; i++) {
      const conceptsRes = conceptResponses[i];
      if (Array.isArray(conceptsRes?.concepts)) result.concepts = [...result.concepts, ...conceptsRes.concepts]
      if (Array.isArray(conceptsRes?.connections)) result.connections = [...result.connections, ...conceptsRes.connections]
    }

    // sync connection
    for (let i = 0; i < splittedConnections.length; i++) {
      const connections = splittedConnections[i] as Connection[];
      syncConnectionPromises.push(syncConceptConnection([], connections, withAuth))
    }
    const connectionResponses = await Promise.all(syncConnectionPromises)
    for (let i = 0; i < connectionResponses.length; i++) {
      const connectionsRes = connectionResponses[i];
      if (Array.isArray(connectionsRes?.concepts)) result.concepts = [...result.concepts, ...connectionsRes.concepts]
      if (Array.isArray(connectionsRes?.connections)) result.connections = [...result.connections, ...connectionsRes.connections]
    }
    Logger.logUpdate(logData);
    return result

  } catch (error) {
    console.log(error)
    UpdatePackageLogWithError(logData, 'CreateTheGhostConceptApi', error);
    throw error
  }
    
}

/**
 * 
 * @param concepts Concept[]
 * @param connections Connection[]
 * @returns Promise<{concepts: [], connections: []}>
 */
const syncConceptConnection = async (concepts: Concept[], connections: Connection[], withAuth:boolean = true) => {
  let result = {
    "concepts": [],
    "connections": []
  };
  try{
    const myHeaders = new Headers();
      let myBody = {
        "concepts": concepts,
        "connections": connections
      }

     myHeaders.set("Content-Type","application/json" );
     myHeaders.set('Authorization', "Bearer " + TokenStorage.BearerAccessToken)
     myHeaders.set('Accept',  'application/json');
     myHeaders.set('X-Session-Id', TokenStorage.sessionId.toString())
    //  myHeaders.set('Randomizer', BaseUrl.BASE_RANDOMIZER.toString());
     myHeaders.set('Randomizer', BaseUrl.getRandomizer().toString());
      const response = await fetch(BaseUrl.CreateGhostConceptApiUrl(withAuth),{
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(myBody),
      });
      if(!response.ok){
          HandleHttpError(response);
          throw new Error(`Error! status: ${response.status}`);
      }
       const resultString = await response.json();
      result.concepts = resultString.concepts;
      result.connections = resultString.connections;

      return result;
}
catch (error) {
  if (error instanceof Error) {
    console.log('Create the concept api error message: ', error.message);
  } else {
    console.log('Create the concept api unexpected error: ', error);
  }
  throw error;
}
}
// Function to split an array into chunks of 1024 items (500KB per chunk)
function chunkArrayByItemCount(array: Concept[] | Connection[], itemsPerChunk: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += itemsPerChunk) {
    const chunk = array.slice(i, i + itemsPerChunk); // Slice the array into smaller chunks
    chunks.push(chunk);
  }
  return chunks;
}

// method to strip type object from concept or connection
const stripTypeFromConceptOrConnection = async (items: Concept[] | Connection[] = []) => {
  return await Promise.all(items.map(item => {
    let newItem = JSON.parse(JSON.stringify(item))
    delete newItem.type;
    delete newItem.ofConcept
    delete newItem.toConcept
    return newItem
  }))
}