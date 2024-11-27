import { Connection } from "../DataStructures/Connection";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { SearchQuery } from "../DataStructures/SearchQuery";
import { GetCompositionFromConnectionsWithDataId } from "../Services/GetCompositionBulk";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { resolveObjectURL } from "buffer";
import {
  HandleHttpError,
  HandleInternalError,
} from "../Services/Common/ErrorPosting";
import { sendMessage, serviceWorker } from "../app";

export async function RecursiveSearchApi(
  composition: number = 0,
  listLinkers: string[] = [],
  textSearch: string = ""
) {
  if (serviceWorker) {
    const res: any = await sendMessage("RecursiveSearchApi", {
      composition,
      listLinkers,
      textSearch,
    });
    // console.log("data received from sw", res);
    return res.data;
  }

  let concepts: any[] = [];

  try {
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
      concepts = await GetCompositionFromConnectionsWithDataId(
        conceptIds,
        connections
      );
    } else {
      console.log("recursive search error ", response.status);
      HandleHttpError(response);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log("recursive search error message: ", error.message);
    } else {
      console.log("recursive search unexpected error: ", error);
    }
    HandleInternalError(error, BaseUrl.RecursiveSearchUrl());
  }
  return concepts;
}

export async function RecursiveSearchApiRaw(
  composition: number = 0,
  listLinkers: string[] = [],
  textSearch: string = ""
) {
  if (serviceWorker) {
    const res: any = await sendMessage("RecursiveSearchApiRaw", {
      composition,
      listLinkers,
      textSearch,
    });
    // console.log("data received from sw", res);
    return res.data;
  }

  let concepts: any[] = [];

  try {
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
      return result;
    } else {
      console.log("recursive search error ", response.status);
      HandleHttpError(response);
    }
    return [];
  } catch (error) {
    if (error instanceof Error) {
      console.log("recursive search error message: ", error.message);
    } else {
      console.log("recursive search unexpected error: ", error);
    }
    HandleInternalError(error, BaseUrl.RecursiveSearchUrl());
  }
}

export async function RecursiveSearchApiRawFullLinker(
  composition: number = 0,
  fullLinkers: string[] = [],
  textSearch: string = ""
) {
  if (serviceWorker) {
    const res: any = await sendMessage("RecursiveSearchApiRawFullLinker", {
      composition,
      fullLinkers,
      textSearch,
    });
    // console.log("data received from sw", res);
    return res.data;
  }

  let concepts: any[] = [];

  try {
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
      return result;
    } else {
      console.log("recursive search error ", response.status);
      HandleHttpError(response);
    }
    return [];
  } catch (error) {
    if (error instanceof Error) {
      console.log("recursive search error message: ", error.message);
    } else {
      console.log("recursive search unexpected error: ", error);
    }
    HandleInternalError(error, BaseUrl.RecursiveSearchUrl());
  }
}

export async function RecursiveSearchApiNewRawFullLinker(
  composition: number = 0,
  fullLinkers: string[] = [],
  textSearch: string = ""
) {
  if (serviceWorker) {
    const res: any = await sendMessage("RecursiveSearchApiNewRawFullLinker", {
      composition,
      fullLinkers,
      textSearch,
    });
    // console.log("data received from sw", res);
    return res.data;
  }
  let concepts: any[] = [];

  try {
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
      return result;
    } else {
      console.log("recursive search error ", response.status);
      HandleHttpError(response);
    }
    return [];
  } catch (error) {
    if (error instanceof Error) {
      console.log("recursive search error message: ", error.message);
    } else {
      console.log("recursive search unexpected error: ", error);
    }
    HandleInternalError(error, BaseUrl.RecursiveSearchUrl());
  }
}

export async function RecursiveSearchLocal(
  composition: number,
  listLinkers: string[] = [],
  textSearch: string = ""
) {}
