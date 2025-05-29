import { BaseUrl, ConceptsData, DATAID, handleServiceWorkerException, JUSTDATA, Logger, SearchLinkMultipleApi, sendMessage, serviceWorker } from "../app";
import { WidgetDetails } from "../DataStructures/WidgetCache/WidgetDetails";
import { requestNextCacheServer } from "../Services/cacheService";
import { DecodeCountInfo } from "../Services/Common/DecodeCountInfo";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { DataIdBuildLayer } from "../Services/Search/SearchLinkMultiple";
import { formatConnections, formatConnectionsDataId, formatConnectionsJustId } from "../Services/Search/SearchWithTypeAndLinker";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { ConceptCircle } from "../Visualize/ConceptCircle";
const widgetCache = new Map<number, Promise<any>>();
const latestWidgetCache = new Map<number, Promise<any>>();
export async function BuildWidgetFromId(id:number){
    Logger.logfunction("BuildWidgetFromId", arguments);
        try {
          if (serviceWorker) {
            const res: any = await sendMessage('BuildWidgetFromId', {id})
            // console.log('data received search from sw', res)
            return res.data
          }
        } catch (error) { 
          console.error('BuildWidgetFromId error sw: ', error)
          handleServiceWorkerException(error)
        }
        let data : any = {};

        if (widgetCache.has(id)) return widgetCache.get(id) || data;
        const BuildWidgetFromId = (async()=>{
          try{

            let conceptIds: number[] = [];
            let linkers: number [] = [];
            let connections: number[] = [];
            let reverse: number[] = [];
            let mainCompositionIds: number[] = [];
            let order = "DESC";
            let countInfoStrings:string[] =  [];
            let conceptsConnections: any = {} ;
            let result: any = {};
        let header = GetRequestHeader("application/json");
        let queryUrl = BaseUrl.getWidgetData() + "?id=" + id;
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
          finally{
            widgetCache.delete(id);
          }
        })()
        widgetCache.set(id,BuildWidgetFromId );
        return BuildWidgetFromId;

}

export async function BuildWidgetFromCache(id:number){
    try {
        if (serviceWorker) {
          const res: any = await sendMessage('BuildWidgetFromCache', {id})
          // console.log('data received search from sw', res)
          return res.data
        }
      } catch (error) { 
        console.error('BuildWidgetFromCache error sw: ', error)
        handleServiceWorkerException(error)
      }
  let objectData:any = {
      "data": null,
      "mainId": 0,
  }
  let widgetDetails:WidgetDetails = await ConceptsData.GetWidget(id);
  if(widgetDetails.widgetId > 0){
          let order = "DESC";
          let conceptIds = widgetDetails.conceptIds;
          let linkers = widgetDetails.linkers;
          let reverse = widgetDetails.reverse;
          let mainCompositionIds = widgetDetails.mainCompositionIds;
          let countInfoStrings = widgetDetails.countinfo;
          let countInfos = DecodeCountInfo(countInfoStrings);
          let data = await formatConnectionsDataId(linkers, conceptIds, mainCompositionIds, reverse,countInfos, order);
          objectData= {
            "data": data,
            "mainId": widgetDetails.mainId,
          }
  }
  return objectData;

}


export async function BuildWidgetFromIdForLatest(id:number){
  Logger.logfunction("BuildWidgetFromIdForLatest", arguments);
      try {
        if (serviceWorker) {
          const res: any = await sendMessage('BuildWidgetFromIdForLatest', {id})
          // console.log('data received search from sw', res)
          return res.data
        }
      } catch (error) { 
        console.error('BuildWidgetFromIdForLatest error sw: ', error)
        handleServiceWorkerException(error)
      }
      let data : any = {};
      if (latestWidgetCache.has(id)) return latestWidgetCache.get(id) || data;
      const BuildWidgetFromIdForLatest = (async()=>{
        try{

          let conceptIds: number[] = [];
          let linkers: number [] = [];
          let connections: number[] = [];
          let reverse: number[] = [];
          let mainCompositionIds: number[] = [];
          let order = "DESC";
          let countInfoStrings:string[] =  [];
          let conceptsConnections: any = {} ;
          let result: any = {};
      let header = GetRequestHeader("application/json");
    
      let response;
      try {   
            let queryUrl = BaseUrl.getLatestWidgetData() + "?id=" + id;
            response = await fetch(queryUrl,{
                method: 'GET',
                headers: header
            });
          } catch (error) {
            response = await requestNextCacheServer({
              method: 'GET',
              headers: header
          }, "?id=" + id)
          }
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
          let details: WidgetDetails = new WidgetDetails();
          details.conceptIds = conceptIds;
          details.linkers = linkers;
          details.reverse = reverse;
          details.mainCompositionIds = mainCompositionIds;
          details.countinfo = countInfoStrings;
          details.widgetId = id;
          details.mainId = result.mainId;
          ConceptsData.AddWidget(details);
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
        finally{
          latestWidgetCache.delete(id);
        }
      })()

      latestWidgetCache.set(id, BuildWidgetFromIdForLatest)
      return BuildWidgetFromIdForLatest;

}
export function GetWidgetForTree(data:any, id:number){

  console.log("This is the data ", data, id);
    for(let i=0; i<data.length; i++){
      if(data[i].id == id){
        return data[i];

      }
    }
}