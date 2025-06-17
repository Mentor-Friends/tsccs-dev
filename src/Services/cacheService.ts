import { BaseUrl, sendMessage } from "../app";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";

function updateToNextNearestServer() {
  const currentCacheServer = BaseUrl.NODE_CACHE_URL;
  if (currentCacheServer === BaseUrl.BASE_URL) {
    throw new Error("Base Server Down");
  }
  let myCacheServer = sessionStorage.getItem("cacheServers") as any;
  myCacheServer = JSON.parse(myCacheServer) as string[];
  const indexOfCurrentCacheServer = myCacheServer.indexOf(currentCacheServer);
  if (myCacheServer.includes(currentCacheServer)) {
    if (indexOfCurrentCacheServer !== -1) {
      myCacheServer.splice(indexOfCurrentCacheServer, 1);
    }
  }
  sessionStorage.setItem("cacheServers", JSON.stringify(myCacheServer));
  // console.log("remaining cache servers", myCacheServer, BaseUrl.BASE_URL);
  if (myCacheServer.length) {
    const nextNearestCacheServer = myCacheServer[0];
    BaseUrl.NODE_CACHE_URL = nextNearestCacheServer;
  } else {
    // console.log("this is the application base url", BaseUrl.BASE_URL)
    BaseUrl.NODE_CACHE_URL = BaseUrl.BASE_URL;
  }
  console.log("before the payload",TokenStorage.sessionId);
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    sendMessage("SESSION_DATA", {
      type: "SESSION_DATA",
      data: BaseUrl.NODE_CACHE_URL,
      session: TokenStorage.sessionId
    });
  }
}

export async function requestNextCacheServer(requestData: any, url: string) {
  const isServiceWorker =
  typeof self !== "undefined" &&
  typeof ServiceWorkerGlobalScope !== "undefined" &&
  self instanceof ServiceWorkerGlobalScope;
  if (isServiceWorker) {
    throw new Error("Cannot switch server from service worker");
  }
  try {
    updateToNextNearestServer();
    try {
      const response = await fetch(
        `${BaseUrl.NODE_CACHE_URL}${url}`,
        requestData
      );
      return response;
    } catch (error) {
      return await requestNextCacheServer(requestData, url);
    }
  } catch (error) {
    throw error;
  }
}
