import { BaseUrl, InnerActions, LocalSyncData, updateAccessToken } from "./app";
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

// Install Service Worker
self.addEventListener("install", (event: any) => {
  console.log("Service Worker installing... sw");
  // event.waitUntil();
  event.waitUntil((self as any).skipWaiting())
});

// Activate Service Worker
self.addEventListener("activate", async (event: any) => {
  console.log("Service Worker activating... sw");
  // await init();
  event.waitUntil((self as any).clients.claim());
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
      return {success: false, name: 'init'}
    }
    TSCCS_init = true
    await init(
        payload?.url,
        payload?.aiurl,
        payload?.accessToken,
        payload?.nodeUrl,
        payload?.enableAi,
        payload?.applicationName,
        payload?.isTest
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
  // console.log("message received sw", event);
  const { type, payload }: any = event.data;
  const tabId = payload.TABID
  let addedActions = false
  
  if (!type || !payload.TABID) return;
  
  if (!tabActionsMap.has(tabId)) tabActionsMap.set(tabId, {concepts: [], connections: []})

  let responseData: {success: boolean, data?: any, messageId?: string, actions?: InnerActions} = {success: false, data: undefined}
  let tabData = tabActionsMap.get(tabId)
  if (!Array.isArray(payload?.actions?.concepts) || !Array.isArray(payload?.actions?.connections)) {
    payload.actions = {concepts: [], connections: []}
    addedActions = true
  }
  
  if (type == 'LocalSyncData__SyncDataOnline' && !payload.transactionId && tabData) {
    // add all the transaction to sync for the curernt tab // little chance of error when syncing is before marking of query transaction on single tab 
    // console.log('tab Data in local', tabData)
    const data = await LocalSyncData.SyncDataOnline(undefined, JSON.parse(JSON.stringify(tabData)));

    tabActionsMap.delete(tabId)
    tabData = undefined
    console.log('Syncing the tab here', type)

    responseData = { success: true, data, actions: {concepts: [], connections: []} }
  } else if (actions[type]) {
    try {
      responseData = await actions[type](payload);
    } catch (err) {
      console.log('Error: type -> ', type, err)
    }
  } else {
    console.log(`Unable to handle "${type}" case in service worker`)
  }
  responseData.messageId = payload.messageId
  
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
    let data2 = {
      concepts: Array.from(
      new Map(data.concepts.map(item => [`${item.id}-${item.ghostId}`, item])).values()),
      connections: Array.from(
      new Map(data.connections.map(item => [`${item.id}-${item.ghostId}`, item])).values()),
  }
    tabActionsMap.set(tabId, JSON.parse(JSON.stringify(data2)));
    
  }

  if (addedActions) delete responseData.actions
  
  event.source.postMessage(responseData)

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
  isTest: boolean = false
) {
  BaseUrl.BASE_URL = url;
  BaseUrl.AI_URL = aiurl;
  BaseUrl.NODE_URL = nodeUrl;
  BaseUrl.BASE_APPLICATION = applicationName;
  TokenStorage.BearerAccessToken = accessToken;
  let randomizer = Math.floor(Math.random() * 100000000);
  // BaseUrl.BASE_RANDOMIZER = randomizer;
  
  BaseUrl.setRandomizer(randomizer)
  if (isTest) {
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
