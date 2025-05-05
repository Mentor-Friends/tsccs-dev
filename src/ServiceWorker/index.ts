import { AccessTracker, BaseUrl, InnerActions, LocalSyncData, updateAccessToken } from "../app";
import { broadcastChannel } from "../Constants/general.const";
import { IdentifierFlags } from "../DataStructures/IdentifierFlags";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";
import CreateConceptBinaryTreeFromIndexDb from "../Services/CreateBinaryTreeFromData";
import { GetConnectionsFromIndexDb, GetConnectionsFromIndexDbLocal } from "../Services/GetDataFromIndexDb";
import InitializeSystem from "../Services/InitializeSystem";
import CreateLocalBinaryTreeFromIndexDb, { PopulateTheLocalConnectionToMemory } from "../Services/Local/CreateLocalBinaryTreeFromData";
import { Actions, connectionActions, createActions, deleteActions, getActions, searchActions, syncActions, updateActions } from "./actions";


let TSCCS_init = false
let tabActionsMap: Map<string, InnerActions> = new Map()
let actionsLock = false
let processMessageQueue: string[] = []

/**
 * Method to handle message event in service worker
 * @param event any
 * @returns Promise<void>
 */
export async function handleMessageEvent(event: any) {
  let responseData: {success: boolean, data?: any, messageId?: string, actions?: InnerActions} = {success: false, data: undefined}
  const { type, payload }: any = event.data;
  const tabId = payload.TABID
  let addedActions = false

  try {
   // if (type != 'checkProcess') console.log('received', type, payload?.messageId)
    if (!type || !payload.TABID) return;
    processMessageQueue.push(payload.messageId)

    // console.log('received type', type, payload?.messageId)

    if (type != 'init' && !checkSWInitialization()) {
      console.warn('Message received before sw initialization', type, payload.messageId)

      // wait for init to complete
      await new Promise((resolve) => {
        console.log('is it stuck here???? type', type, payload.messageId)
        let count = 1
        const interval = setInterval(() => {
          console.log('Interval check 0', TSCCS_init, type, payload.messageId)
          if (TSCCS_init) {
            console.log('Interval check 2', TSCCS_init, type, payload.messageId)
            console.log(timeout, interval)
            clearInterval(interval)
            clearTimeout(timeout)
            resolve(undefined)
          } else {
            console.warn(`Watring for init ${count}:`, type)
          }
        }, 200) // check every 200ms

        const timeout = setTimeout(() => {
          console.warn('Tried waiting for init but couldn\'t complete in time: ', type, payload.messageId)
          clearInterval(interval)
          resolve(undefined)
        }, 90000) // 1.5 minute
      })
      console.log('After timeout promise', type, payload.messageId, TSCCS_init)
      if (!TSCCS_init) {
        console.log('wait failed', TSCCS_init, payload.messageId, type)
        processMessageQueue = await Promise.all(processMessageQueue.filter(item => item != payload.messageId))
        event.source.postMessage(responseData)
      }
      console.log('After timeout promise nice', type, TSCCS_init)
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
    //if (type != 'checkProcess') console.log('sent', type, payload?.messageId)

    processMessageQueue = await Promise.all(processMessageQueue.filter(item => item != payload.messageId))
    event.source.postMessage(responseData)
  } catch (error: any) {
    console.error('Service worker Message Handle Error: ', type, error)
    if (error?.status == 401 || error?.status == 500) {
      responseData = {success: false, data: {status: error.status, statusText: error?.url}, messageId: payload.messageId}
    }
    processMessageQueue = await Promise.all(processMessageQueue.filter(item => item != payload.messageId))
    event.source.postMessage(responseData)
  }
}


// Actions that can be performed in this service worker
const actions: Actions = {
    checkProcess: async (payload: any) => {
        if (payload?.checkMessageId && processMessageQueue.includes(payload?.checkMessageId)) return {success: true, data: {processing: true}, name: 'init'}
        return {success: true, data: {processing: false}, name: 'init'}
    },
    init: async (payload: any) => {
        if (TSCCS_init) {
            console.warn('Already Initialized')
            return {success: true, name: 'init'}
        }
        console.log('init has started')
        TSCCS_init = true
        console.log('init has set value')
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
        console.log('init has completed')
        return {success: true, data: undefined, name: 'init'}
    },
    updateAccessToken: async (payload) => {
        await updateAccessToken(payload.accessToken, payload.session)
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
    if (accessToken) {
      TokenStorage.BearerAccessToken = accessToken;
    }
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
export const checkSWInitialization = () => {
    if (!TSCCS_init) {
      // Send a message using broadcastChannel to notify about init status
      broadcastChannel.postMessage({
        type: "checkInit",
        payload: {},
      });
  
    //  console.log("Message posted to broadcastChannel");
      return false
    }
    return true
  }
  