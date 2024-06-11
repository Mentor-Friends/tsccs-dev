import { SearchLinkMultipleApi } from "../../Api/Search/SearchLinkMultipleApi";
import { SearchQuery } from "../../DataStructures/SearchQuery";

export async function SearchLinkMultipleAll(searchQuery: SearchQuery[], token: string=""){
  var conceptsConnections = await  SearchLinkMultipleApi(searchQuery, token);
  console.log(conceptsConnections);
}