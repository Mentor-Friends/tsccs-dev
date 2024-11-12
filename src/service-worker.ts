import { BaseUrl, updateAccessToken } from "./app";
import { IdentifierFlags } from "./DataStructures/IdentifierFlags";
import { TokenStorage } from "./DataStructures/Security/TokenStorage";
import CreateConceptBinaryTreeFromIndexDb from "./Services/CreateBinaryTreeFromData";
import {
  GetConnectionsFromIndexDb,
  GetConnectionsFromIndexDbLocal,
} from "./Services/GetDataFromIndexDb";
import InitializeSystem from "./Services/InitializeSystem";
import CreateLocalBinaryTreeFromIndexDb from "./Services/Local/CreateLocalBinaryTreeFromData";
import { Actions, createActions, getActions, searchActions, syncActions, updateActions, connectionActions } from "./ServiceWorker/actions";

// Install Service Worker
self.addEventListener("install", (event: any) => {
  console.log("Service Worker installing... sw");
  // event.waitUntil(self.skipWaiting(););
  (self as any).skipWaiting()
});

// Activate Service Worker
self.addEventListener("activate", async (event) => {
  console.log("Service Worker activating... sw");
  // await init();
});

// For Caching gives the event when fetch request is triggered
// self.addEventListener('fetch', (event: any) => {
//     console.log('Fetching: sw', event.request.url);
// });

// Actions that can be performed in this service worker
const actions: Actions = {
  init: async (payload: any) => {
    await init(
        payload?.url,
        payload?.aiurl,
        payload?.accessToken,
        payload?.nodeUrl,
        payload?.enableAi,
        payload?.applicationName,
        payload?.isTest
      );
    return {success: true, data: undefined}
  },
  updateAccessToken: async (payload) => {
    updateAccessToken(payload.accessToken)
    return {success: true}
  },
  // imported actions
  ...getActions,
  ...searchActions,
  ...createActions,
  ...updateActions,
  ...connectionActions,
  ...syncActions,
}

// Listen message received by service worker
self.addEventListener("message", async (event: any) => {
  console.log("message received sw", event);
  const { type, payload }: any = event.data;
  if (!type) return;
  console.log('has type', type)
  let responseData: {success: boolean, data?: any} = {success: false, data: undefined}

  if (actions[type]) {
    console.log('if type')
    responseData = await actions[type](payload);
  } else {
    console.log('else type')
    console.log(`Unable to handle "${type}" case in service worker`)
  }
  
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
  BaseUrl.BASE_RANDOMIZER = randomizer;
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
  console.log("This ist he base url", BaseUrl.BASE_URL, randomizer);

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
  // PopulateTheLocalSettingsToMemory().then(()=>{
  // }).catch((event) => {
  //    //console.log("This is the error in populating binary tree");
  //   throw event;
  // });

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
