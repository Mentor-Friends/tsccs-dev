import { SearchInternalApi } from "../../Api/Search/SearchInternalApi";
import { SearchStructure, ViewInternalData } from "../../app";


export async function SearchLinkInternal(searchQuery: SearchStructure, token: string=""){
  try{
    var conceptsConnections = await  SearchInternalApi(searchQuery, token);
     let out = await ViewInternalData(conceptsConnections);
    return out;
  }
  catch(ex){
    throw ex;
  }

  }


  export async function SearchLinkInternalAll(searchQuery: SearchStructure, token: string=""){
    try{
      var conceptsConnections = await  SearchInternalApi(searchQuery, token);
       let out = await ViewInternalData(conceptsConnections);
      return out;
    }
    catch(ex){
      throw ex;
    }
  
    }