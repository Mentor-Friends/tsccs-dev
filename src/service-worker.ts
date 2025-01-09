import { AccessTracker, BaseUrl, InnerActions, LocalSyncData, Logger, setHasActivatedSW, updateAccessToken } from "./app";
import { BASE_URL } from "./Constants/ApiConstants";
import { broadcastChannel } from "./Constants/general.const";
import { IdentifierFlags } from "./DataStructures/IdentifierFlags";
import { TokenStorage } from "./DataStructures/Security/TokenStorage";
import CreateConceptBinaryTreeFromIndexDb from "./Services/CreateBinaryTreeFromData";
import {
  GetConnectionsFromIndexDb,
  GetConnectionsFromIndexDbLocal,
} from "./Services/GetDataFromIndexDb";
import InitializeSystem from "./Services/InitializeSystem";
import CreateLocalBinaryTreeFromIndexDb, { PopulateTheLocalConnectionToMemory } from "./Services/Local/CreateLocalBinaryTreeFromData";
import { Actions, createActions, getActions, searchActions, syncActions, updateActions, connectionActions, deleteActions } from "./ServiceWorker/actions";

let tabActionsMap: Map<string, InnerActions> = new Map()
let TSCCS_init = false
let actionsLock = false

// Install Service Worker
self.addEventListener("install", (event: any) => {
  console.log("Service Worker installing... sw");
  // event.waitUntil();
  event.waitUntil((self as any).skipWaiting())
});

// Activate Service Worker
self.addEventListener("activate", async (event: any) => {
  await setHasActivatedSW(true)
  console.log("Service Worker activating... sw");

  // Using event.waitUntil to wait for the Promise to resolve
  event.waitUntil(
    new Promise((resolve, reject) => {
      try {
        // Claim control of the clients (this makes the service worker active immediately)
        (self as any).clients.claim();
        console.log('claimed')
        checkSWInitialization()

        // Resolve the Promise to indicate activation is complete
        resolve(undefined);
      } catch (error) {
        console.error("Error during service worker activation:", error);
        reject(error);
      }
    })
  );
});
// Handle 401 in service worker
// Fetch event listener
self.addEventListener('fetch', (event: any) => {
  if (!event.clientId) {
    event.respondWith(handleInterceptRequest(event));
  }
});


// For Caching gives the event when fetch request is triggered
// self.addEventListener('fetch', (event: any) => {
//     console.log('Fetching: sw', event.request.url);
// });

// Actions that can be performed in this service worker
const actions: Actions = {
  init: async (payload: any) => {
    if (TSCCS_init) {
      console.warn('Already Initialized')
      return {success: true, name: 'init'}
    }
    TSCCS_init = true
    console.log("Payload log in service worker : ", payload)
    await init(
        payload?.url,
        payload?.aiurl,
        payload?.accessToken,
        payload?.nodeUrl,
        payload?.enableAi,
        payload?.applicationName,
        payload?.flags
      );
    return {success: true, data: undefined, name: 'init'}
  },
  updateAccessToken: async (payload) => {
    await updateAccessToken(payload.accessToken)
    return {success: true, name: 'updateAccessToken'}
  },
  // imported actions
  ...getActions,
  ...searchActions,
  ...createActions,
  ...updateActions,
  ...connectionActions,
  ...deleteActions,
  ...syncActions,
}

// Listen message received by service worker
self.addEventListener("message", async (event: any) => {
  let responseData: {success: boolean, data?: any, messageId?: string, actions?: InnerActions} = {success: false, data: undefined}
  const { type, payload }: any = event.data;
  const tabId = payload.TABID
  let addedActions = false

  try {
    if (!type || !payload.TABID) return;
  
    if (type != 'init' && !checkSWInitialization()) {
      console.warn('Message received before sw initialization', type)

      // wait for init to complete
      await new Promise((resolve) => {
        let count = 1
        const interval = setInterval(() => {
          if (TSCCS_init) {
            clearInterval(interval)
            resolve(undefined)
          } else {
            console.warn(`Watring for init ${count}:`, type)
          }
        }, 200) // check every 200ms

        setTimeout(() => {
          console.warn('Tried waiting for init but couldn\'t complete in time: ', type)
          clearInterval(interval)
          resolve(undefined)
        }, 90000) // 1.5 minute
      })

      if (!TSCCS_init) event.source.postMessage(responseData)
    }
    
    if (!tabActionsMap.has(tabId)) tabActionsMap.set(tabId, {concepts: [], connections: []})
  
    let tabData = tabActionsMap.get(tabId)
    if (!Array.isArray(payload?.actions?.concepts) || !Array.isArray(payload?.actions?.connections)) {
      payload.actions = {concepts: [], connections: []}
      addedActions = true
    }
    
    if (type == 'LocalSyncData__SyncDataOnline' && !payload.transactionId && tabData) {
      // add all the transaction to sync for the curernt tab // little chance of error when syncing is before marking of query transaction on single tab 
      // console.log('tab Data in local', tabData)
      const dataPromise = LocalSyncData.SyncDataOnline(undefined, JSON.parse(JSON.stringify(tabData)));
  
      tabActionsMap.delete(tabId)
      tabData = undefined
      console.log('Syncing the tab here', type)
  
      responseData = { success: true, data: await dataPromise, actions: {concepts: [], connections: []} }
    } else if (actions[type]) {
        responseData = await actions[type](payload);
    } else {
      console.warn(`Unable to handle "${type}" case in service worker`)
    }
    responseData.messageId = payload.messageId
    
    if (actionsLock) console.warn('Race condition has been met', type); // use queue if occured
    actionsLock = true
      tabData = tabActionsMap.get(tabId)
    // update the concepts for current actions
    if (responseData.actions && tabData) {
      let data = {
        concepts: [...tabData.concepts, ...responseData.actions.concepts],
        connections: [
          ...tabData.connections,
          ...responseData.actions.connections,
        ],
      }
      // save unique concepts and connections
      const [concepts, connections] = await Promise.all([
        Promise.all(Array.from(
          new Map(data.concepts.map(item => [`${item.id}-${item.ghostId}`, item])).values())),
        Promise.all(Array.from(
          new Map(data.connections.map(item => [`${item.id}-${item.ghostId}`, item])).values()))
      ])
      tabActionsMap.set(tabId, JSON.parse(JSON.stringify({concepts, connections})));
    }
    actionsLock = false
  
    if (addedActions) delete responseData.actions
    
    event.source.postMessage(responseData)
  } catch (error: any) {
    console.error('Service worker Message Handle Error: ', type, error)
    if (error?.status == 401 || error?.status == 500) {
      responseData = {success: false, data: {status: error.status, statusText: error?.url}, messageId: payload.messageId}
    }
    event.source.postMessage(responseData)
  }
});

/**
 * Method to initialize the initial data in service worker
 * @param url string
 * @param aiurl string
 * @param accessToken string
 * @param nodeUrl string
 * @param enableAi boolean
 * @param applicationName string
 * @param isTest boolean
 * @returns Promise<any>
 */
async function init(
  url: string = "",
  aiurl: string = "",
  accessToken: string = "",
  nodeUrl: string = "",
  enableAi: boolean = true,
  applicationName: string = "",
  flags?: { logApplication?: boolean; logPackage?:boolean; accessTracker?:boolean; isTest?: boolean }

) {
  BaseUrl.BASE_URL = url;
  BaseUrl.AI_URL = aiurl;
  BaseUrl.NODE_URL = nodeUrl;
  BaseUrl.BASE_APPLICATION = applicationName;
  TokenStorage.BearerAccessToken = accessToken;
  let randomizer = Math.floor(Math.random() * 100000000);
  // BaseUrl.BASE_RANDOMIZER = randomizer;
  console.log("Flags came in init of service worker is ", flags)
  BaseUrl.setRandomizer(randomizer)
  BaseUrl.FLAGS = flags;

  if (BaseUrl.FLAGS?.isTest) {
    IdentifierFlags.isDataLoaded = true;
    IdentifierFlags.isCharacterLoaded = true;
    IdentifierFlags.isTypeLoaded = true;
    IdentifierFlags.isLocalDataLoaded = true;
    IdentifierFlags.isLocalTypeLoaded = true;
    IdentifierFlags.isLocalCharacterLoaded = true;
    IdentifierFlags.isConnectionLoaded = true;
    IdentifierFlags.isConnectionTypeLoaded = true;
    IdentifierFlags.isLocalConnectionLoaded = true;
    return true;
  }
  console.log("This is the base url", BaseUrl.BASE_URL, randomizer);
  console.log("service worker BaseUrl.FLAGS is ", BaseUrl.FLAGS)

  if(BaseUrl.FLAGS?.accessTracker){
    console.log("From service worker, flag of Access Tracker.")
    AccessTracker.activateStatus = true;
    console.log("Access Tracker Activation status from service worker", AccessTracker.activateStatus)
  }
  /**
   * We initialize the system so that we get all the concepts from the backend system that are most likely to be used
   * We use some sort of AI algorithm to initilize these concepts with the most used concept.
   * @param enableAi enableAi is a flag that the user can choose to set if they want to use this enable AI feature
   * If the developer does not want to use this feature then they can just set enableAi to false.
   */
  await InitializeSystem();
  const start = new Date().getTime();

  /**
   * This  will create a binary tree in the memory from the indexdb.
   * This process will set Flags to denote that the binary tree is loaded, the character binary tree is  loaded
   * and that the type binary tree has been loaded.
   * These trees are helpful in caching concepts and connections for the data fabric.
   */
  await CreateConceptBinaryTreeFromIndexDb()
    .then(() => {
      // IdentifierFlags.isDataLoaded= true;
      // IdentifierFlags.isCharacterLoaded= true;
      // IdentifierFlags.isTypeLoaded= true;
      let elapsed = new Date().getTime() - start;
      console.log("The time taken to prepare concept  data is  ", elapsed);
    })
    .catch((event) => {
      // console.log("This is the error in creating binary tree", IdentifierFlags.isDataLoaded, IdentifierFlags.isCharacterLoaded, IdentifierFlags.isTypeLoaded);
      throw event;
    });

  /**
   * This will create a binary tree of local concepts that is saved from the indexdb.
   * This process after finishing creating a binary tree of local concepts then set flag to denote that
   * LocalBinaryTree has been created from the concepts in indexdb
   * Local Binary Type tree has been loaded to the index db (flag is set to denote that)
   * Character Binary Tree has been loaded from indexdb to memory (flag is set to denote that)
   */
  await CreateLocalBinaryTreeFromIndexDb()
    .then(() => {
      // IdentifierFlags.isLocalDataLoaded = true;
      // IdentifierFlags.isLocalTypeLoaded = true;
      // IdentifierFlags.isLocalCharacterLoaded = true;
      let elapsed = new Date().getTime() - start;
      console.log("The time taken to prepare local concept  ", elapsed);
    })
    .catch((event) => {
      throw event;
    });

  /**
   * This process gets the local connections from indexdb and loads it to the local connections array which is inside of
   * a static class called LocalConnectionData.
   * This function will also set and IdentifierFlag that tells the whole program that this process has finished.
   */
  await GetConnectionsFromIndexDbLocal()
    .then(() => {
      IdentifierFlags.isLocalConnectionLoaded = true;
    })
    .catch((event) => {
      //console.log("This is the error in creating local connections binary tree");
      throw event;
    });

  /**
   * We have designed our system to use local concepts and connections with its own local ids(negative ids) that
   * is only valid for the browser that creates this. We have a translator in our node server.
   * This function does this process in initlization.
   */
  await PopulateTheLocalConnectionToMemory();

  /**
   * This process gets the connections from indexdb and loads it to the connections array which is inside of
   * a static class called ConnectionData.
   * This function will also set and IdentifierFlag that tells the whole program that this process has finished.
   */
  await GetConnectionsFromIndexDb()
    .then(() => {
      IdentifierFlags.isConnectionLoaded = true;
      IdentifierFlags.isConnectionTypeLoaded = true;
      let elapsed = new Date().getTime() - start;
      console.log("The time taken to prepare connections  ", elapsed);
    })
    .catch((event) => {
      //console.log("This is the error in creating connections tree");
      throw event;
    });
}

/**
 * Method to check and inform main thread if sw is not initialized
 * @returns boolean
 */
const checkSWInitialization = () => {
  if (!TSCCS_init) {
    // Send a message using broadcastChannel to notify about init status
    broadcastChannel.postMessage({
      type: "checkInit",
      payload: {},
    });

    console.log("Message posted to broadcastChannel");
    return false
  }
  return true
}

// let refreshingToken = false;
// let refreshTokenPromise;

const handleInterceptRequest = async (event: any) => {
  try {
    const response = await fetch(event.request);

    // If the response is 401 (Unauthorized), send it back to the main thread
    if (response.status === 401) {
      const messageId = Math.random().toString(36).substring(2)
      event.waitUntil(
        // (self as any).clients.matchAll().then((clients: any) => {
        //     clients.forEach(async (client: any) => {
                // client.postMessage({
                event.source.postMessage({
                    type: 'API_401',
                    messageId,
                    message: 'Unauthorized',
                    payload: {
                      method: event.request.method,
                      url: event.request.url,
                      headers: Array.from(event.request.headers.entries()),  // Convert headers to array
                      // body: await event.request.clone().text()  // Clone and send the body
                      body: await event.request.clone().json()  // Clone and send the body
                    }
                })
        //     });
        // })
      );
      // Wait for the main thread to send back the response
      const newResponse = await new Promise((resolve) => {
        console.log('Re resolving 401', response.url)
        // fallback 
        setTimeout(() => resolve(response), 60000) // 60 sec

        navigator.serviceWorker.addEventListener('message', (e) => {
          if (e.data && e.data?.messageId == messageId && e.data?.type === 'API_RESPONSE') {
            if (e?.data?.response)
              resolve(e.data.response); // Resolve with the old response
            else {
              console.log('Unable to resolve re 401', response.url)
              resolve(response); // Resolve with the old response
            }
          }
        });
      });
      return newResponse; // Return the new response
    }

    // if (response.status == 401) {

    //   if (!refreshingToken) {
    //     refreshingToken = true;
    //     refreshTokenPromise = refreshToken()
    //   }
    //   console.warn('Awating to perform token refresh')
    //   // set options to update if need else not
    //   setTimeout(() => {
    //     return response
    //   }, 30000) // return after 30 sec if unable to update token
      
    //   await refreshingToken

    //   const clonedRequest = event.request.clone()
    //   clonedRequest.headers.set()
      
    // }
    
    // If no issues, return the response as is
    return response
  } catch (error) {
    console.error('Error occured during 401 intercepting', error)
    throw error
  }
} 