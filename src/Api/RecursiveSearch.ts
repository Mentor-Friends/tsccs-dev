import { Connection } from "../DataStructures/Connection";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { SearchQuery } from "../DataStructures/SearchQuery";
import { GetCompositionFromConnectionsWithDataId } from "../Services/GetCompositionBulk";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";

export  async function RecursiveSearchApi(composition:number = 0, listLinkers:string[] = [], textSearch:string = ""){

try{
    var searchQuery = new SearchQuery();
    searchQuery.composition = composition;
    searchQuery.listLinkers = listLinkers;
    searchQuery.textSearch = textSearch;
    var raw = JSON.stringify(searchQuery);
    var Connections :Connection [] = []; 
    var myHeaders = GetRequestHeader();
    const response = await fetch(BaseUrl.RecursiveSearchUrl(),{
        method: 'POST',
        headers: myHeaders,
        body: raw
    });
    if(!response.ok){
        throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    var conceptIds = result.compositionIds;
    var connections = result.internalConnections;
    var concepts:any[] = [];
    concepts = await GetCompositionFromConnectionsWithDataId(conceptIds,connections);
    return concepts;
    

}

catch (error) {
    if (error instanceof Error) {
      console.log('recursive search error message: ', error.message);
      return error.message;
    } else {
      console.log('recursive search unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
