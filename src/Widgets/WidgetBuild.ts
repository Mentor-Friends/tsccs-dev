import { BaseUrl, ConceptsData, DATAID, handleServiceWorkerException, JUSTDATA, Logger, SearchLinkMultipleApi, sendMessage, serviceWorker } from "../app";
import { WidgetDetails } from "../DataStructures/WidgetCache/WidgetDetails";
import { requestNextCacheServer } from "../Services/cacheService";
import { DecodeCountInfo } from "../Services/Common/DecodeCountInfo";
import { HandleHttpError } from "../Services/Common/ErrorPosting";
import { DataIdBuildLayer } from "../Services/Search/SearchLinkMultiple";
import { formatConnections, formatConnectionsDataId, formatConnectionsJustId } from "../Services/Search/SearchWithTypeAndLinker";
import { GetRequestHeader } from "../Services/Security/GetRequestHeader";
import { ConceptCircle } from "../Visualize/ConceptCircle";
import { WidgetCacheManager } from "./WidgetCacheManager";

/** Cache for widget data requests by widget ID */
const widgetCache = new Map<number, Promise<any>>();

/** Cache for latest widget version requests by origin ID */
const latestWidgetCache = new Map<number, Promise<any>>();

const recentWidgetCache = new Map<number, Promise<any>>();


/**
 * Fetches and builds widget data from the backend by widget ID.
 *
 * Retrieves complete widget structure including concepts, connections, and metadata.
 * Uses caching to prevent duplicate requests for the same widget.
 *
 * @param id - The widget ID to fetch
 * @returns Promise resolving to formatted widget data
 */
export async function BuildWidgetFromId(id:number){
    Logger.logfunction("BuildWidgetFromId", arguments);
        try {
          if (serviceWorker) {
            const res: any = await sendMessage('BuildWidgetFromId', {id})
            return res.data
          }
        } catch (error) {
          console.error('BuildWidgetFromId error sw: ', error)
          handleServiceWorkerException(error)
        }
        let data : any = {};

        if (widgetCache.has(id)) return widgetCache.get(id) || data;

        let header = GetRequestHeader("application/json");
        let queryUrl = BaseUrl.getWidgetData() + "?id=" + id;

        const cached = WidgetCacheManager.getWidget(id);
        if (cached) {
            // Return cached data immediately, revalidate in the background
            fetch(queryUrl, { method: 'GET', headers: header })
                .then(async (response) => {
                    if (response.ok) {
                        const fresh = await response.json();
                        WidgetCacheManager.setWidget(id, fresh);
                    } else {
                        HandleHttpError(response);
                    }
                }).catch(() => {});

            let countInfos = DecodeCountInfo(cached.countinfo);
            return await formatConnectionsDataId(cached.linkers, cached.conceptIds, cached.mainCompositionIds, cached.reverse, countInfos, "DESC");
        }

        const buildPromise = (async()=>{
          try{
            const response = await fetch(queryUrl,{
                method: 'GET',
                headers: header
            });
            if(response.ok){
                let result = await response.json();
                WidgetCacheManager.setWidget(id, result);
                let countInfos = DecodeCountInfo(result.countinfo);
                data = await formatConnectionsDataId(result.linkers, result.conceptIds, result.mainCompositionIds, result.reverse, countInfos, "DESC");
                return data;
            }
            else{
                HandleHttpError(response);
                return [];
            }
          }
          catch(e){
            throw e;
          }
          finally{
            widgetCache.delete(id);
          }
        })()
        widgetCache.set(id, buildPromise);
        return buildPromise;

}

/**
 * Builds widget data from local cache instead of making API request.
 *
 * @param id - The widget ID to fetch from cache
 * @returns Promise resolving to widget data object with mainId
 */
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

/**
 * Fetches the latest published version of a widget by origin ID.
 *
 * Retrieves the most recent version of a widget, useful for always displaying
 * updated content. Uses separate cache from standard widget requests.
 *
 * @param id - The origin widget ID to fetch latest version for
 * @returns Promise resolving to object with widget data and mainId
 */
export async function BuildWidgetFromIdForLatest(id:number){
  Logger.logfunction("BuildWidgetFromIdForLatest", arguments);
      try {
        if (serviceWorker) {
          const res: any = await sendMessage('BuildWidgetFromIdForLatest', {id})
          return res.data
        }
      } catch (error) {
        console.error('BuildWidgetFromIdForLatest error sw: ', error)
        handleServiceWorkerException(error)
      }
      let data : any = {};
      if (latestWidgetCache.has(id)) return latestWidgetCache.get(id) || data;

      let header = GetRequestHeader("application/json");

      const cached = WidgetCacheManager.getLatest(id);
      if (cached) {
          // Return cached data immediately, revalidate in the background
          (async () => {
              let response;
              try {
                  let queryUrl = BaseUrl.getLatestWidgetData() + "?id=" + id;
                  response = await fetch(queryUrl, { method: 'GET', headers: header });
              } catch (error) {
                  response = await requestNextCacheServer({ method: 'GET', headers: header }, "?id=" + id);
              }
              if (response.ok) {
                  const fresh = await response.json();
                  WidgetCacheManager.setLatest(id, fresh);
              } else {
                  HandleHttpError(response);
              }
          })().catch(() => {});

          let countInfos = DecodeCountInfo(cached.countinfo);
          let formattedData = await formatConnectionsDataId(cached.linkers, cached.conceptIds, cached.mainCompositionIds, cached.reverse, countInfos, "DESC");
          return { data: formattedData, mainId: cached.mainId };
      }

      const buildPromise = (async()=>{
        try{
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
              let result = await response.json();
              WidgetCacheManager.setLatest(id, result);
              let countInfos = DecodeCountInfo(result.countinfo);
              data = await formatConnectionsDataId(result.linkers, result.conceptIds, result.mainCompositionIds, result.reverse, countInfos, "DESC");
              return { data: data, mainId: result.mainId };
          }
          else{
              HandleHttpError(response);
              return [];
          }
        }
        catch(e){
          throw e;
        }
        finally{
          latestWidgetCache.delete(id);
        }
      })()

      latestWidgetCache.set(id, buildPromise)
      return buildPromise;

}



/**
 * Fetches the recent published version of a widget by origin ID.
 *
 * Retrieves the most recent version of a widget, useful for always displaying
 * updated content. Uses separate cache from standard widget requests.
 *
 * @param id - The origin widget ID to fetch latest version for
 * @returns Promise resolving to object with widget data and mainId
 */
export async function BuildWidgetFromIdForRecent(id:number){
  Logger.logfunction("BuildWidgetFromIdForRecent", arguments);
      try {
        if (serviceWorker) {
          const res: any = await sendMessage('BuildWidgetFromIdForRecent', {id})
          return res.data
        }
      } catch (error) {
        console.error('BuildWidgetFromIdForRecent error sw: ', error)
        handleServiceWorkerException(error)
      }
      let data : any = {};
      if (recentWidgetCache.has(id)) return recentWidgetCache.get(id) || data;

      let header = GetRequestHeader("application/json");

      const cached = WidgetCacheManager.getRecent(id);
      if (cached) {
          // Return cached data immediately, revalidate in the background
          (async () => {
              let response;
              try {
                  let queryUrl = BaseUrl.getRecentWidgetData() + "?id=" + id;
                  response = await fetch(queryUrl, { method: 'GET', headers: header });
              } catch (error) {
                  response = await requestNextCacheServer({ method: 'GET', headers: header }, "?id=" + id);
              }
              if (response.ok) {
                  const fresh = await response.json();
                  WidgetCacheManager.setRecent(id, fresh);
              } else {
                  HandleHttpError(response);
              }
          })().catch(() => {});

          let countInfos = DecodeCountInfo(cached.countinfo);
          let formattedData = await formatConnectionsDataId(cached.linkers, cached.conceptIds, cached.mainCompositionIds, cached.reverse, countInfos, "DESC");
          return { data: formattedData, mainId: cached.mainId };
      }

      const buildPromise = (async()=>{
        try{
          let response;
          try {
                let queryUrl = BaseUrl.getRecentWidgetData() + "?id=" + id;
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
              let result = await response.json();
              WidgetCacheManager.setRecent(id, result);
              let countInfos = DecodeCountInfo(result.countinfo);
              data = await formatConnectionsDataId(result.linkers, result.conceptIds, result.mainCompositionIds, result.reverse, countInfos, "DESC");
              return { data: data, mainId: result.mainId };
          }
          else{
              HandleHttpError(response);
              return [];
          }
        }
        catch(e){
          throw e;
        }
        finally{
          recentWidgetCache.delete(id);
        }
      })()

      recentWidgetCache.set(id, buildPromise)
      return buildPromise;

}

/**
 * Finds and returns a specific widget from bulk widget data by ID.
 *
 * @param data - Array of widget data objects
 * @param id - The widget ID to find
 * @returns The matching widget object or undefined
 */
export function GetWidgetForTree(data:any, id:number){

    for(let i=0; i<data.length; i++){
      if(data[i].id == id){
        return data[i];

      }
    }
}