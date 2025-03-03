import { BaseUrl, DATAID, handleServiceWorkerException, JUSTDATA, Logger, SearchLinkMultipleApi, sendMessage, serviceWorker } from "../app";
import { DecodeCountInfo } from "../Services/Common/DecodeCountInfo";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { DataIdBuildLayer } from "../Services/Search/SearchLinkMultiple";
import { formatConnections, formatConnectionsDataId, formatConnectionsJustId } from "../Services/Search/SearchWithTypeAndLinker";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";

export async function BuildWidgetFromId(id:number, renderLatest:boolean=false){
    Logger.logfunction("BuildWidgetFromId", arguments);
      try{
        try {
          if (serviceWorker) {
            const res: any = await sendMessage('BuildWidgetFromId', {id, renderLatest})
            // console.log('data received search from sw', res)
            return res.data
          }
        } catch (error) { 
          console.error('BuildWidgetFromId error sw: ', error)
          handleServiceWorkerException(error)
        }
        let conceptIds: number[] = [];
        let linkers: number [] = [];
        let connections: number[] = [];
        let reverse: number[] = [];
        let mainCompositionIds: number[] = [];
        let order = "DESC";
        let countInfoStrings:string[] =  [];
        let conceptsConnections: any = {} ;
        let result: any = {};
        let data : any = {};
    let header = GetRequestHeader("application/json");
    let queryUrl = BaseUrl.getWidgetData() + "?id=" + id;
    if(renderLatest){
      queryUrl = BaseUrl.getLatestWidgetData() + "?id=" + id;
    }
        const response = await fetch(queryUrl,{
            method: 'GET',
            headers: header
        });
        if(response.ok){
            result = await response.json();
            // Add Log
            // Logger.logInfo(startTime, "unknown", "search", "unknown", undefined, 200, result, "SearchLinkMultipleApi", ['searchQuery', 'token'], "unknown", undefined )

        }
        else{
            HandleHttpError(response);
            console.log("This is the BuildWidgetFromId error", response.status);
            return [];

        }
        conceptIds = result.conceptIds;
        linkers = result.linkers;
        reverse = result.reverse;
        mainCompositionIds = result.mainCompositionIds;
        countInfoStrings = result.countinfo;
        let countInfos = DecodeCountInfo(countInfoStrings);
        data = await formatConnectionsDataId(linkers, conceptIds, mainCompositionIds, reverse,countInfos, order);
        return data;
      }
      catch(e){
        console.log("this is the error in the build widget", e);
        throw e;
      }

}


export async function BuildWidgetFromIdForLatest(id:number, renderLatest:boolean=false){
  Logger.logfunction("BuildWidgetFromIdForLatest", arguments);
    try{
      try {
        if (serviceWorker) {
          const res: any = await sendMessage('BuildWidgetFromIdForLatest', {id, renderLatest})
          // console.log('data received search from sw', res)
          return res.data
        }
      } catch (error) { 
        console.error('BuildWidgetFromIdForLatest error sw: ', error)
        handleServiceWorkerException(error)
      }
      let conceptIds: number[] = [];
      let linkers: number [] = [];
      let connections: number[] = [];
      let reverse: number[] = [];
      let mainCompositionIds: number[] = [];
      let order = "DESC";
      let countInfoStrings:string[] =  [];
      let conceptsConnections: any = {} ;
      let result: any = {};
      let data : any = {};
  let header = GetRequestHeader("application/json");
  let queryUrl = BaseUrl.getWidgetData() + "?id=" + id;
  if(renderLatest){
    queryUrl = BaseUrl.getLatestWidgetData() + "?id=" + id;
  }
      const response = await fetch(queryUrl,{
          method: 'GET',
          headers: header
      });
      if(response.ok){
          result = await response.json();
          // Add Log
          // Logger.logInfo(startTime, "unknown", "search", "unknown", undefined, 200, result, "SearchLinkMultipleApi", ['searchQuery', 'token'], "unknown", undefined )

      }
      else{
          HandleHttpError(response);
          console.log("This is the BuildWidgetFromId error", response.status);
          return [];

      }
      conceptIds = result.conceptIds;
      linkers = result.linkers;
      reverse = result.reverse;
      mainCompositionIds = result.mainCompositionIds;
      countInfoStrings = result.countinfo;
      let countInfos = DecodeCountInfo(countInfoStrings);
      data = await formatConnectionsDataId(linkers, conceptIds, mainCompositionIds, reverse,countInfos, order);
      let objectData:any = {
        "data": data,
        "mainId": result.mainId,
      }
      return objectData;
    }
    catch(e){
      console.log("this is the error in the build widget", e);
      throw e;
    }

}
export function GetWidgetForTree(data:any, id:number){

    for(let i=0; i<data.length; i++){
      if(data[i].id == id){
        return data[i];

      }
    }
}