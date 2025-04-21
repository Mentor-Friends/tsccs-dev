import { BaseUrl } from "../app";

function updateToNextNearestServer() {
  const currentCacheServer = BaseUrl.NODE_CACHE_URL;
  if (currentCacheServer === BaseUrl.BASE_URL) {
    throw new Error("Base Server Down");
  }
  let myCacheServer = sessionStorage.getItem("cacheServers") as any;
  myCacheServer = JSON.parse(myCacheServer) as string[];
  const indexOfCurrentCacheServer = myCacheServer.indexOf(currentCacheServer);
  if (indexOfCurrentCacheServer < myCacheServer.length - 1) {
    const nextNearestCacheServer = myCacheServer[indexOfCurrentCacheServer + 1];
    BaseUrl.NODE_CACHE_URL = nextNearestCacheServer;
  } else {
    throw new Error("All Servers are Down.");
  }
}

export async function requestNextCacheServer(
  requestData: any,
  url: string
) {
  try {
    updateToNextNearestServer();
    try {
        const response = await fetch(`${BaseUrl.NODE_CACHE_URL}${url}`, requestData);
        return response
    } catch (error) {
        return await requestNextCacheServer(requestData, url)
    }
  } catch (error) {
    throw error
  }
}
