import { Connection } from "../DataStructures/Connection";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { SearchQuery } from "../DataStructures/SearchQuery";
import { GetCompositionFromConnectionsWithDataId, GetCompositionFromConnectionsWithDataIdFromConnections } from "../Services/GetCompositionBulk";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { resolveObjectURL } from "buffer";
import {
  HandleHttpError,
  HandleInternalError,
  UpdatePackageLogWithError,
} from "../Services/Common/ErrorPosting";
import { handleServiceWorkerException, Logger, sendMessage, serviceWorker } from "../app";
import { formatConnectionsDataId } from "../Services/Search/SearchWithTypeAndLinker";
import { log } from "console";

/**
 * Performs recursive search through composition hierarchy.
 * Searches through nested compositions using linker relationships.
 *
 * **Complex Logic**: Constructs SearchQuery, fetches composition IDs and connections,
 * processes internal/external connections, and builds composition objects from results.
 *
 * @param composition - Root composition ID to start search from (default: 0)
 * @param listLinkers - Array of linker strings to traverse (default: [])
 * @param textSearch - Text search filter (default: "")
 * @param fullLinkers - Array of full linker paths (default: [])
 * @returns Array of composition objects with connections
 *
 * @example
 * const results = await RecursiveSearchApi(123, ["has_child", "has_property"], "search text");
 */
export async function RecursiveSearchApi(
  composition: number = 0,
  listLinkers: string[] = [],
  textSearch: string = "",
  fullLinkers: string[] = []
) {
  const logData : any = Logger.logfunction("RecursiveSearchApi", arguments) || {};
  let concepts: any[] = [];

  try {
    if (serviceWorker) {
      logData.serviceWorker = true;
      try {
        const res: any = await sendMessage("RecursiveSearchApi", {
          composition,
          listLinkers,
          textSearch,
          fullLinkers
        });
        Logger.logUpdate(logData);
        return res.data;
      } catch (error) {
        console.error("RecursiveSearchApi sw error: ", error);
        UpdatePackageLogWithError(logData, 'RecursiveSearchApi', error);
        handleServiceWorkerException(error);
      }
    }

    let searchQuery = new SearchQuery();
    searchQuery.composition = composition;
    searchQuery.listLinkers = listLinkers;
    searchQuery.fullLinkers = fullLinkers;
    searchQuery.textSearch = textSearch;
    let raw = JSON.stringify(searchQuery);
    let Connections: Connection[] = [];
    let myHeaders = GetRequestHeader();
    const response = await fetch(BaseUrl.RecursiveSearchUrl(), {
      method: "POST",
      headers: myHeaders,
      body: raw,
    });
    if (response.ok) {
      const result = await response.json();
      let conceptIds = result.compositionIds;
      let connections = result.internalConnections;
      let externalConnections = result.externalConnections;
      concepts = await GetCompositionFromConnectionsWithDataId(
        conceptIds,
        connections
      );

    } else {
      console.log("recursive search error ", response.status);
      UpdatePackageLogWithError(logData, 'RecursiveSearchApi', response.status);
      HandleHttpError(response);
    }
    Logger.logUpdate(logData);
  } catch (error) {
    if (error instanceof Error) {
      console.log("recursive search error message: ", error.message);
    } else {
      console.log("recursive search unexpected error: ", error);
    }
    UpdatePackageLogWithError(logData, 'RecursiveSearchApi', error);
    HandleInternalError(error, BaseUrl.RecursiveSearchUrl());
  }
  return concepts;
}

/**
 * Performs recursive search returning results with internal connections.
 * Similar to RecursiveSearchApi but uses different connection formatting.
 *
 * @param composition - Root composition ID to start search from (default: 0)
 * @param listLinkers - Array of linker strings to traverse (default: [])
 * @param textSearch - Text search filter (default: "")
 * @returns Array of composition objects with internal connections
 */
export async function RecursiveSearchApiWithInternalConnections(
  composition: number = 0,
  listLinkers: string[] = [],
  textSearch: string = ""
) {
  const logData:any = Logger.logfunction("RecursiveSearchApiWithInternalConnections", arguments) || {};
  let concepts: any[] = [];

  try {  
    if (serviceWorker) {
      logData.serviceWorker = true;
      try {
        const res: any = await sendMessage("RecursiveSearchApiWithInternalConnections", {
          composition,
          listLinkers,
          textSearch,
        });
        Logger.logUpdate(logData);  
        return res.data;
      } catch (error) {
        console.error("RecursiveSearchApiWithInternalConnections sw error: ", error);
        UpdatePackageLogWithError(logData, 'RecursiveSearchApiWithInternalConnections', error);
        handleServiceWorkerException(error);
      }
    }
    let searchQuery = new SearchQuery();
    searchQuery.composition = composition;
    searchQuery.listLinkers = listLinkers;
    searchQuery.textSearch = textSearch;
    let raw = JSON.stringify(searchQuery);
    let Connections: Connection[] = [];
    let myHeaders = GetRequestHeader();
    const response = await fetch(BaseUrl.RecursiveSearchUrl(), {
      method: "POST",
      headers: myHeaders,
      body: raw,
    });
    if (response.ok) {
      const result = await response.json();
      let conceptIds = result.compositionIds;
      let connections = result.internalConnections;
      let externalConnections = result.externalConnections;
      concepts = await GetCompositionFromConnectionsWithDataIdFromConnections(
        conceptIds,
        connections
      );

      Logger.logUpdate(logData);  

    } else {
      console.log("recursive search error ", response.status);
      UpdatePackageLogWithError(logData, 'GetCompositionConnectionsBetweenTwoConcepts', response.status);
      HandleHttpError(response);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log("recursive search error message: ", error.message);
    } else {
      console.log("recursive search unexpected error: ", error);
    }
    UpdatePackageLogWithError(logData, 'GetCompositionConnectionsBetweenTwoConcepts', error);
    HandleInternalError(error, BaseUrl.RecursiveSearchUrl());
  }
  return concepts;
}

/**
 * Performs recursive search returning raw API response.
 * Returns unprocessed result with composition IDs and connection arrays.
 *
 * @param composition - Root composition ID (default: 0)
 * @param listLinkers - Array of linker strings (default: [])
 * @param textSearch - Text search filter (default: "")
 * @param fullLinkers - Array of full linker paths (default: [])
 * @returns Raw API response object with compositionIds, internalConnections, externalConnections
 */
export async function RecursiveSearchApiRaw(
  composition: number = 0,
  listLinkers: string[] = [],
  textSearch: string = "",
  fullLinkers: string[] = []
) {
  const logData : any = Logger.logfunction("RecursiveSearchApiRaw", arguments) || {};
  let concepts: any[] = [];

  try {
    if (serviceWorker) {
      logData.serviceWorker = true;
      try {
        const res: any = await sendMessage("RecursiveSearchApiRaw", {
          composition,
          listLinkers,
          textSearch,
          fullLinkers
        });
        Logger.logUpdate(logData);  
        return res.data;
      } catch (error) {
        console.error("RecursiveSearchApiRaw sw error: ", error);
        UpdatePackageLogWithError(logData, 'RecursiveSearchApiRaw', error);
        handleServiceWorkerException(error);
      }
    }
    let searchQuery = new SearchQuery();
    searchQuery.composition = composition;
    searchQuery.listLinkers = listLinkers;
    searchQuery.textSearch = textSearch;
    searchQuery.fullLinkers = fullLinkers;
    let raw = JSON.stringify(searchQuery);
    let Connections: Connection[] = [];
    let myHeaders = GetRequestHeader();
    const response = await fetch(BaseUrl.RecursiveSearchUrl(), {
      method: "POST",
      headers: myHeaders,
      body: raw,
    });
    if (response.ok) {
      const result = await response.json();
      let conceptIds = result.compositionIds;
      let connections = result.internalConnections;
      let externalConnections = result.externalConnections;
      Logger.logUpdate(logData);
      return result;
    } else {
      console.log("recursive search error ", response.status);
      UpdatePackageLogWithError(logData, 'RecursiveSearchApiRaw',  response.status);
      HandleHttpError(response);
    }
    Logger.logUpdate(logData);
    return [];
  } catch (error) {
    if (error instanceof Error) {
      console.log("recursive search error message: ", error.message);
    } else {
      console.log("recursive search unexpected error: ", error);
    }
    UpdatePackageLogWithError(logData, 'RecursiveSearchApiRaw', error);
    HandleInternalError(error, BaseUrl.RecursiveSearchUrl());
  }
}

/**
 * Performs recursive search using full linker paths, returning raw response.
 * Uses complete linker path specifications instead of partial linkers.
 *
 * @param composition - Root composition ID (default: 0)
 * @param fullLinkers - Array of complete linker path strings (default: [])
 * @param textSearch - Text search filter (default: "")
 * @returns Raw API response object with compositionIds and connections
 */
export async function RecursiveSearchApiRawFullLinker(
  composition: number = 0,
  fullLinkers: string[] = [],
  textSearch: string = ""
) {
  const logData : any = Logger.logfunction("RecursiveSearchApiRawFullLinker", arguments) || {};
  let concepts: any[] = [];

  try {
    if (serviceWorker) {
      logData.serviceWorker = true;
      try {
        const res: any = await sendMessage("RecursiveSearchApiRawFullLinker", {
          composition,
          fullLinkers,
          textSearch,
        });
        Logger.logUpdate(logData);
        return res.data;
      } catch (error) {
        console.error("RecursiveSearchApiRawFullLinker sw error: ", error);
        UpdatePackageLogWithError(logData, 'RecursiveSearchApiRawFullLinker', error);
        handleServiceWorkerException(error);
      }
    }
    let searchQuery = new SearchQuery();
    searchQuery.composition = composition;
    searchQuery.fullLinkers = fullLinkers;
    searchQuery.textSearch = textSearch;
    let raw = JSON.stringify(searchQuery);
    let Connections: Connection[] = [];
    let myHeaders = GetRequestHeader();
    const response = await fetch(BaseUrl.RecursiveSearchUrl(), {
      method: "POST",
      headers: myHeaders,
      body: raw,
    });
    if (response.ok) {
      const result = await response.json();
      let conceptIds = result.compositionIds;
      let connections = result.internalConnections;
      let externalConnections = result.externalConnections;
      Logger.logUpdate(logData);
      return result;
    } else {
      console.log("recursive search error ", response.status);
      UpdatePackageLogWithError(logData, 'RecursiveSearchApiRawFullLinker', response.status);
      HandleHttpError(response);
    }
    Logger.logUpdate(logData);
    return [];
  } catch (error) {
    if (error instanceof Error) {
      console.log("recursive search error message: ", error.message);
    } else {
      console.log("recursive search unexpected error: ", error);
    }
    HandleInternalError(error, BaseUrl.RecursiveSearchUrl());
    UpdatePackageLogWithError(logData, 'RecursiveSearchApiRawFullLinker', error);
  }
}

/**
 * New version of recursive search with full linker paths.
 * Alternative implementation of RecursiveSearchApiRawFullLinker.
 *
 * @param composition - Root composition ID (default: 0)
 * @param fullLinkers - Array of complete linker path strings (default: [])
 * @param textSearch - Text search filter (default: "")
 * @returns Raw API response object with compositionIds and connections
 */
export async function RecursiveSearchApiNewRawFullLinker(
  composition: number = 0,
  fullLinkers: string[] = [],
  textSearch: string = ""
) {
  const logData : any = Logger.logfunction("RecursiveSearchApiRawFullLinker", arguments) || {};
  let concepts: any[] = [];

  try {
    if (serviceWorker) {
      try {
        logData.serviceWorker = true;
        const res: any = await sendMessage("RecursiveSearchApiNewRawFullLinker", {
          composition,
          fullLinkers,
          textSearch,
        });
        Logger.logUpdate(logData); 
        return res.data;
      } catch (error) {
        console.error("RecursiveSearchApiNewRawFullLinker sw error: ", error);
        UpdatePackageLogWithError(logData, 'RecursiveSearchApiNewRawFullLinker', error);
        handleServiceWorkerException(error);
      }
    }
    let searchQuery = new SearchQuery();
    searchQuery.composition = composition;
    searchQuery.fullLinkers = fullLinkers;
    searchQuery.textSearch = textSearch;
    let raw = JSON.stringify(searchQuery);
    let Connections: Connection[] = [];
    let myHeaders = GetRequestHeader();
    const response = await fetch(BaseUrl.RecursiveSearchUrl(), {
      method: "POST",
      headers: myHeaders,
      body: raw,
    });
    if (response.ok) {
      const result = await response.json();
      let conceptIds = result.compositionIds;
      let connections = result.internalConnections;
      let externalConnections = result.externalConnections;
      Logger.logUpdate(logData);
      return result;
    } else {
      console.log("recursive search error ", response.status);
      UpdatePackageLogWithError(logData, 'RecursiveSearchApiNewRawFullLinker', response.status);
      HandleHttpError(response);
    }
    Logger.logUpdate(logData);
    return [];
  } catch (error) {
    if (error instanceof Error) {
      console.log("recursive search error message: ", error.message);
    } else {
      console.log("recursive search unexpected error: ", error);
    }
    HandleInternalError(error, BaseUrl.RecursiveSearchUrl());
    UpdatePackageLogWithError(logData, 'RecursiveSearchApiNewRawFullLinker', error);
  }
}

/**
 * Performs recursive search using local data only.
 * Placeholder for local-only search implementation.
 *
 * @param composition - Root composition ID
 * @param listLinkers - Array of linker strings (default: [])
 * @param textSearch - Text search filter (default: "")
 */
export async function RecursiveSearchLocal(
  composition: number,
  listLinkers: string[] = [],
  textSearch: string = ""
) {}
