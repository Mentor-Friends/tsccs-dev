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

export async function RecursiveSearchLocal(
  composition: number,
  listLinkers: string[] = [],
  textSearch: string = ""
) {}
