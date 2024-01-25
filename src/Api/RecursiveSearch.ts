import { Connection } from "../DataStructures/Connection";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { SearchQuery } from "../DataStructures/SearchQuery";
import { GetCompositionFromConnectionsWithDataId } from "../Services/GetCompositionBulk";
import { ConnectionData } from "../DataStructures/ConnectionData";

export  async function RecursiveSearchApi(composition:number = 0, listLinkers:string[] = [], textSearch:string = ""){

try{
    var searchQuery = new SearchQuery();
    searchQuery.composition = composition;
    searchQuery.listLinkers = listLinkers;
    searchQuery.textSearch = textSearch;
    var raw = JSON.stringify(searchQuery);
    var Connections :Connection [] = []; 

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEwMjY3IiwiZW1haWwiOiJuaXNjYWxiaGFuZGFyaTEyQGdtYWlsLmNvbSIsInVwbiI6IjEwMDEyODM5MiIsInByaW1hcnlzaWQiOiIxMDAyMDcxMTAiLCJuYmYiOjE3MDUyMjAxNTMsImV4cCI6MTcwNTMwNjU1MywiaWF0IjoxNzA1MjIwMDkzfQ.60UmKDgfGpEtWXWBkdCThnIWehgsDZVjn1SrjqRXI2Y");
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
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
