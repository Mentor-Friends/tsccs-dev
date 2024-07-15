import { SearchInternalApi } from "../../Api/Search/SearchInternalApi";
import { SearchStructure, ViewInternalData } from "../../app";


export async function SearchLinkInternal(searchQuery: SearchStructure, token: string=""){
    var concepts:any[] = [];
    var conceptsConnections = await  SearchInternalApi(searchQuery, token);
    console.log("These are the connections", conceptsConnections);
    for(let i =0; i<conceptsConnections.length; i++){
        let out = await ViewInternalData(conceptsConnections[i]);
        concepts.push(out);
    }
    return concepts;
  }