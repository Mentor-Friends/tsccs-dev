import { SearchInternalApi } from "../../Api/Search/SearchInternalApi";
import { SearchStructure, ViewInternalData } from "../../app";


export async function SearchLinkInternal(searchQuery: SearchStructure, token: string=""){
    var conceptsConnections = await  SearchInternalApi(searchQuery, token);
    console.log("These are the connections", conceptsConnections);
     let out = await ViewInternalData(conceptsConnections);
    return out;
  }