export { init, updateAccessToken };

import CreateConceptBinaryTreeFromIndexDb from "./Services/CreateBinaryTreeFromData";

import { IdentifierFlags } from './DataStructures/IdentifierFlags';
export {SearchLinkMultipleApi} from './Api/Search/SearchLinkMultipleApi';
export { SplitStrings} from './Services/SplitStrings'; 
export { GetCompositionList,GetCompositionListWithId }  from './Services/GetCompositionList';
export { GetCompositionListLocal, GetCompositionListLocalWithId} from './Services/Local/GetCompositionListLocal';
export {GetAllConnectionsOfComposition} from './Api/GetAllConnectionsOfComposition';
export {GetComposition,GetCompositionWithId, recursiveFetch,GetCompositionWithAllIds} from './Services/GetComposition';
export {GetCompositionLocal, GetCompositionLocalWithId} from './Services/Local/GetCompositionLocal';
export {default as CreateComposition} from './Services/CreateTheComposition';
export { CreateTheCompositionLocal } from './Services/Local/CreateTheCompositionLocal';
export {CreateConnectionBetweenTwoConcepts,CreateConnectionBetweenTwoConceptsGeneral} from './Services/CreateConnectionBetweenTwoConcepts';
export { default as GetTheConcept} from './Services/GetTheConcept';
export { default as MakeTheInstanceConcept} from './Services/MakeTheInstanceConcept';
export { MakeTheInstanceConceptLocal} from './Services/Local/MakeTheInstanceConceptLocal';
export { storeToDatabase,getFromDatabaseWithType,getObjectsFromIndexDb } from './Database/NoIndexDb';
export { createTheConnection as CreateTheConnection} from './Services/CreateTheConnection';
export { default as GetConceptByCharacter } from './Services/GetConceptByCharacter';
export { GetLink,GetLinkRaw } from './Services/GetLink';
export {CreateDefaultConcept} from './Services/CreateDefaultConcept';
export { MakeTheTypeConceptLocal} from './Services/Local/MakeTheTypeLocal';
export {MakeTheTypeConcept} from './Services/MakeTheTypeConcept';
export {MakeTheTypeConceptApi} from './Api/MakeTheTypeConceptApi';
export { GetLinkerConnectionFromConcepts, GetLinkerConnectionToConcepts} from './Services/GetLinkerConnectionFromConcept';
export { DeleteConceptById } from './Services/DeleteConcept';
export { DeleteConnectionById } from './Services/DeleteConnection';
export { TrashTheConcept } from './Api/Delete/DeleteConceptInBackend'
export { GetConnectionById } from './Services/GetConnections';
export {MakeTheTimestamp} from './Services/MakeTheTimestamp';
export {RecursiveSearchApi, RecursiveSearchApiRaw,RecursiveSearchApiRawFullLinker,RecursiveSearchApiNewRawFullLinker} from './Api/RecursiveSearch';
export {GetCompositionBulkWithDataId,GetCompositionBulk,GetCompositionFromConnectionsWithDataId} from './Services/GetCompositionBulk';
export { GetConceptBulk } from './Api/GetConceptBulk';
export { GetConnectionBulk } from './Api/GetConnectionBulk';
export {GetAllConnectionsOfCompositionBulk} from './Api/GetAllConnectionsOfCompositionBulk';

export { LoginToBackend } from './Api/Login';
export {GetConnectionOfTheConcept} from './Api/GetConnectionOfTheConcept';
export  {default as Signup} from  './Api/Signup';
export { default as Signin} from './Api/Signin';
export {SignupEntity} from './Api/Signup';
export { default as UpdateComposition} from './Services/UpdateComposition';
export {SearchAllConcepts} from './Api/Search/Search';
export {SearchWithLinker} from './Api/Search/SearchWithLinker';
export {GetCompositionWithCache, GetCompositionWithDataIdWithCache, GetCompositionWithDataIdBulk} from './Services/Composition/CompositionCache';
export {CreateSession} from './Api/Session/CreateSession';
export {CreateSessionVisit} from './Api/Session/CreateSessionVisit';
export {  } from './Api/GetConceptByCharacterAndType';
export {GetRelation, GetRelationRaw} from './Services/GetRelation';
export { recursiveFetchNew} from './Services/Composition/BuildComposition'
export {CreateTheCompositionWithCache} from './Services/Composition/CreateCompositionCache';
export {CreateDefaultLConcept} from './Services/Local/CreateDefaultLConcept';
export { CreateTheConnectionGeneral} from './Services/CreateTheConnectionGeneral';
export {CreateTheConnectionLocal} from './Services/Local/CreateTheConnectionLocal';
export { GetCompositionListAll, GetCompositionListAllWithId,GetCompositionListWithIdUpdated } from './Services/GetCompositionList';
export {GetUserGhostId,AddGhostConcept} from './Services/User/UserTranslation';
export {SearchLinkMultipleAll,FormatFromConnections} from './Services/Search/SearchLinkMultiple';
export {GetTheConceptLocal} from './Services/Local/GetTheConceptLocal';
export {UpdateCompositionLocal} from './Services/Local/UpdateCompositionLocal';
export {GetCompositionFromConnectionsWithDataIdInObject,GetCompositionFromConnectionsWithIndex,GetCompositionFromConnectionsWithDataIdIndex} from './Services/GetCompositionBulk';
export {GetRelationLocal} from './Services/Local/GetRelationLocal';
export {GetConceptByCharacterAndCategoryLocal} from './Services/Local/GetConceptByCharacterLocal'; 
export {ViewInternalData} from './Services/View/ViewInternalData';
export {ViewInternalDataApi} from './Api/View/ViewInternalDataApi';
export {convertFromLConceptToConcept, convertFromConceptToLConcept} from './Services/Conversion/ConvertConcepts';
export {SearchLinkInternal,SearchLinkInternalAll} from './Services/Search/SearchLinkInternal';
export {CreateConnectionBetweenTwoConceptsLocal} from './Services/Local/CreateConnectionBetweenTwoConceptsLocal';
export {DeleteConceptLocal} from './Services/Local/DeleteConceptLocal';
export {GetConnectionBetweenTwoConceptsLinker} from './Services/GetConnectionBetweenTwoConceptsLinker';
export {DelayFunctionExecution} from './Services/Common/DelayFunction';
export {GetCompositionWithIdAndDateFromMemory} from './Services/GetComposition';
export { GetConceptByCharacterAndType} from './Api/GetConceptByCharacterAndType';
export {GetConnectionDataPrefetch} from './Services/GetCompositionBulk';
export { FormatFromConnectionsAltered} from './Services/Search/SearchLinkMultiple';
export {NORMAL, JUSTDATA, DATAID, DATAIDDATE, RAW, ALLID, LISTNORMAL} from './Constants/FormatConstants';
export {PRIVATE , PUBLIC , ADMIN} from './Constants/AccessConstants';
export {SearchWithTypeAndLinkerApi} from './Api/Search/SearchWithTypeAndLinker';
export { DependencyObserver} from './WrapperFunctions/DepenedencyObserver';
export {SearchLinkMultipleAllObservable, searchLinkMultipleListener} from './WrapperFunctions/SearchLinkMultipleAllObservable';
export {GetCompositionListener} from './WrapperFunctions/GetCompositionObservable';
export {GetCompositionListListener} from './WrapperFunctions/GetCompositionListObservable';
export {SearchWithTypeAndLinker} from './Services/Search/SearchWithTypeAndLinker';
export {GetLinkListener} from './WrapperFunctions/GetLinkObservable';
export {RecursiveSearchListener} from './WrapperFunctions/RecursiveSearchObservable'
export {GetLinkListListener} from './WrapperFunctions/GetLinkListObservable';
export {SyncData} from './DataStructures/SyncData';
export {Concept} from './DataStructures/Concept';
export {LConcept} from './DataStructures/Local/LConcept';
export {LConnection} from './DataStructures/Local/LConnection';
export {Connection} from './DataStructures/Connection';
export {ConceptsData} from './DataStructures/ConceptData';
export { ConnectionData } from './DataStructures/ConnectionData';
export {BinaryTree} from './DataStructures/BinaryTree';
export {SearchQuery} from './DataStructures/SearchQuery';
export {SignupModel} from './DataStructures/SignupModel';
export {SigninModel} from './DataStructures/SigninModel';
export {FreeschemaResponse} from './DataStructures/Responses/StandardResponses'
export {PatcherStructure} from './DataStructures/PatcherStructure';
export {SessionData} from './DataStructures/Session/SessionData';
export {Composition} from './DataStructures/Composition/Composition';
export {CompositionBinaryTree} from './DataStructures/Composition/CompositionBinaryTree';
export {CompositionNode} from './DataStructures/Composition/CompositionNode';
export {LocalSyncData} from './DataStructures/Local/LocalSyncData';
export {UserBinaryTree} from './DataStructures/User/UserBinaryTree';
export {FilterSearch} from './DataStructures/FilterSearch';
export {SearchStructure} from './DataStructures/Search/SearchStructure';
export {LocalConceptsData} from './DataStructures/Local/LocalConceptData';
import {GetConnectionsFromIndexDb,GetConnectionsFromIndexDbLocal} from './Services/GetDataFromIndexDb';
import CreateLocalBinaryTreeFromIndexDb, { PopulateTheLocalConceptsToMemory, PopulateTheLocalConnectionToMemory } from './Services/Local/CreateLocalBinaryTreeFromData';
import InitializeSystem from './Services/InitializeSystem';
import { BaseUrl } from './DataStructures/BaseUrl';
import { TokenStorage } from './DataStructures/Security/TokenStorage';
import { broadcastChannel } from "./Constants/general.const";
import { WidgetTree } from "./Widgets/WidgetTree";
import { HandleHttpError, HandleInternalError } from "./Services/Common/ErrorPosting";
export { BuilderStatefulWidget } from "./Widgets/BuilderStatefulWidget";
export { LocalTransaction } from "./Services/Transaction/LocalTransaction";
export { InnerActions } from "./Constants/general.const";
export { Anomaly } from './Anomaly/anomaly';
export { Validator } from './Validator/validator';
export { createFormFieldData } from './Validator/utils';
export {BaseUrl} from './DataStructures/BaseUrl';
export {StatefulWidget} from './Widgets/StatefulWidget';
export {DeleteConnectionByType, GetAllTheConnectionsByTypeAndOfTheConcept} from './Services/DeleteConnectionByType';
export {FreeschemaQuery} from './DataStructures/Search/FreeschemaQuery';
export {FreeschemaQueryApi} from './Api/Search/FreeschemaQueryApi';
export {SchemaQueryListener} from './WrapperFunctions/SchemaQueryObservable';
export {WidgetTree} from './Widgets/WidgetTree';
export { DeleteUser } from './Services/DeleteConcept';



type listeners = {
  listenerId: string | number
  callback: any,
  createdAt: number
}
export var serviceWorker: any;
const TABID = Date.now().toString(36) + Math.random().toString(36).substring(2)
export let subscribedListeners: listeners[] = [];
let serviceWorkerReady = false;
let messageQueue: any[] = []

/**
 * This function lets you update the access token that the package uses. If this is not passed you cannot create, update, view or delete
 * Your concepts using this package.
 * @param accessToken access token got from the sign in process
 */
function updateAccessToken(accessToken: string = "") {
  TokenStorage.BearerAccessToken = accessToken;
  if (serviceWorker) sendMessage('updateAccessToken', { accessToken })
}
/**
 *
 * @param url This is the url for the backend c# system or our main data fabric server
 * @param aiurl This is the AI url that pulls in the data using our AI system . If you do not enter this then also disable the enableAi flag.
 * @param accessToken This is the JWT token that needs to be passed (But since you have just initilized the system). There is no way we can get access token
 * So this access token can be empty string. You can set it afterwards with another function UpdateAccessToken();
 * @param nodeUrl This is the url for the node server. This is another server in the data fabric that is used as server for business logic and security features.
 * @param enableAi This flag is used to enable or disable the AI feature that preloads data in the indexdb.
 * @param applicationName This is an unique name that is given to a program. Use this to discern one indexdb from another.
 * @param enableSW {activate: boolean, scope?: string, pathToSW?: string, manual?: boolean} | undefined - This is for enabling service worker with its scope
 */
async function init(
  url: string = "",
  aiurl: string = "",
  accessToken: string = "",
  nodeUrl: string = "",
  enableAi: boolean = true,
  applicationName: string = "",
  enableSW: {activate: boolean, scope?: string, pathToSW?: string, manual?: boolean} | undefined = undefined,
  isTest: boolean = false,
) {
  try {
    BaseUrl.BASE_URL = url;
    BaseUrl.AI_URL = aiurl;
    BaseUrl.NODE_URL = nodeUrl;
    BaseUrl.BASE_APPLICATION = applicationName;
    TokenStorage.BearerAccessToken = accessToken;
    let randomizer = Math.floor(Math.random() * 100000000);
    // BaseUrl.BASE_RANDOMIZER = randomizer;
    // BaseUrl.BASE_RANDOMIZER = 999;
    
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

    if (!("serviceWorker" in navigator)) {
      await initConceptConnection();
      console.warn("Service Worker not supported in this browser.");
      return
    }

    listenBroadCastMessages()
    if (enableSW && enableSW.activate && enableSW.manual) {
      await new Promise((resolve, reject) => {
        navigator.serviceWorker.ready
        .then(async (registration) => {
          console.log('registraions ready', registration)
          serviceWorker = registration.active
          await sendMessage("init", {
            url,
            aiurl,
            accessToken,
            nodeUrl,
            enableAi,
            applicationName,
            isTest,
          });
          resolve('done')
        })
        .catch(err => {
          console.error("Error: Ready service worker", err)
          reject(err);
        })
        .finally(() => console.log('Finally service worker ready done'))

        setTimeout(() => reject('Timeout ready'), 30000)
      })
    } else if (
      enableSW &&
      enableSW?.activate
    ) {
      try {
        console.log("service worker initialiing");
        // navigator.serviceWorker
        //   .getRegistrations()
        //   .then(async (registrations) => {
        //     console.log("Service Workers registered:", registrations);
        //     if (registrations.length > 0) {
        //       // TODO:: check if the domain has our own service worker or others
        //       registrations.forEach((registration, index) => {
        //         console.log(`Service Worker ${index + 1}:`, registration);
        //         if (registration.installing) {
        //           console.log("Status: Installing");
        //         } else if (registration.waiting) {
        //           console.log("Status: Waiting");
        //         } else if (registration.active) {
        //           console.log("Status: Active");
        //           serviceWorker = registration.active;
        //           // sendMessage('init', {})
        //         } else {
        //           console.log("Status: No active worker", registration);
        //         }
        //       });
        //     } else {
              // let serviceWorkerPath = enableSW.path ? enableSW.path : './serviceWorker.bundle.js'
              // if (enableSW.path && enableSW.path.slice(-1) == '/') serviceWorkerPath = enableSW.path + 'serviceWorker.bundle.js'
              // else if (enableSW.path && enableSW.path.length > 2 && !enableSW.path.includes('serviceWorker.bundle.js')) serviceWorkerPath = enableSW.path + './serviceWorker.bundle.js'

              await new Promise<void>((resolve, reject) => {
                let success = false;

                navigator.serviceWorker
                  .register(enableSW.pathToSW ?? "./serviceWorker.bundle.js", {
                    // type: "module",
                    scope: enableSW.scope ?? "/",
                  })
                  .then(async (registration) => {
                    console.log(
                      "Service Worker registered:",
                      registration
                    );
                    
                    // If the service worker is already active, mark it as ready
                    if (registration.active) {
                      serviceWorkerReady = true;
                      console.log("active sw");
                      serviceWorker = registration.active;

                      await sendMessage("init", {
                        url,
                        aiurl,
                        accessToken,
                        nodeUrl,
                        enableAi,
                        applicationName,
                        isTest,
                      });
                      processMessageQueue();
                      resolve();
                    } else {
                      // Handle if on state change didn't trigger
                      setTimeout(() => {
                        if (!success) reject("Not Completed Initialization");
                      }, 5000);
                    }

                    // state change 
                    if (registration.installing || registration.waiting || registration.active) {
                      registration.addEventListener('statechange', async (event: any) => {
                        if (event?.target?.state === 'activating') {
                          serviceWorker = navigator.serviceWorker.controller
                          console.log('Service Worker is activating statechange');
                          await sendMessage("init", {
                            url,
                            aiurl,
                            accessToken,
                            nodeUrl,
                            enableAi,
                            applicationName,
                            isTest,
                          });
                        }
                      });
                    }

                    // Listen for updates to the service worker
                    console.log("update listen start");
                    registration.onupdatefound = () => {
                      const newWorker = registration.installing;
                      console.log("new worker", newWorker);
                      if (newWorker) {
                        newWorker.onstatechange = async () => {
                          console.log("on state change triggered", (newWorker.state === "installed" || newWorker.state === "activated" || newWorker.state === 'redundant'), navigator.serviceWorker.controller);
                          // if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
                          if ((newWorker.state === "installed" || newWorker.state === "activated" || newWorker.state === 'redundant') && navigator.serviceWorker.controller) {
                            // && navigator.serviceWorker.controller) {
                            console.log(
                              "New Service Worker is active",
                              registration
                            );
                            serviceWorker = newWorker;
                            // serviceWorker = registration.active;
                            // Send init message now that it's active
                            await sendMessage("init", {
                              url,
                              aiurl,
                              accessToken,
                              nodeUrl,
                              enableAi,
                              applicationName,
                              isTest,
                            });
                            success = true;
                            serviceWorkerReady = true;
                            processMessageQueue();
                            resolve();
                          }
                        };
                      }
                    };

                    // Listen for the activation of the new service worker
                    registration.addEventListener('controllerchange', async () => {
                      console.warn('controller change triggered', navigator.serviceWorker.controller)
                      if (navigator.serviceWorker.controller) {
                        serviceWorker = navigator.serviceWorker.controller
                        console.log('Service worker has been activated');
                        await sendMessage("init", {
                          url,
                          aiurl,
                          accessToken,
                          nodeUrl,
                          enableAi,
                          applicationName,
                          isTest,
                        });
                        // The new service worker is now controlling the page
                        // You can reload the page if necessary or handle the update process here
                      }
                    });
                  })
                  .catch(async (error) => {
                    await initConceptConnection();
                    reject(error);
                    console.error("Service Worker registration failed:", error);
                  });
              });
          //   }
          // })
          // .catch((err) => {
          //   console.log("Unable to register", err);
          // });
      } catch (error) {
        await initConceptConnection();
        console.error("Unable to start service worker", error);
      }
    } else {
      await initConceptConnection();
      console.warn('Service Worker not activated')
    }
    return true;
  } catch (error) {
    await initConceptConnection();
    console.warn("Cannot initialize the system", error);
  }
}

/**
 * Method to send message to the service worker from main thread
 * @param type string
 * @param payload any
 * @returns Promise<any>
 */
export async function sendMessage(type: string, payload: any) {
  const messageId = Math.random().toString(36).substring(2); // Generate a unique message ID
  payload.messageId = messageId
  payload.TABID = TABID
  // let actions = payload.actions

  const newPayload = JSON.parse(JSON.stringify(payload))

  return new Promise((resolve, reject) => {
    // navigator.serviceWorker.ready
    //   .then((registration) => {
    if ((navigator.serviceWorker.controller || serviceWorker) && (serviceWorkerReady || type == 'init')) {
      const responseHandler = (event: any) => {
        if (event?.data?.messageId == messageId) { // Check if the message ID matches
          if (!event.data.success) {
            if (event.data.status == 401) {
              reject(HandleHttpError(new Response('Unauthorized', {status: 401, statusText: event?.data?.statusText})))
            } else {
              reject(`Failed to handle action ${type} ${JSON.stringify(payload)}`)
            }
          }
          if (event.data?.actions) {
            payload.actions = JSON.parse(JSON.stringify(event.data.actions))
          }
          resolve(event.data);
          navigator.serviceWorker.removeEventListener("message", responseHandler);
        }
      };
  
      navigator.serviceWorker.addEventListener("message", responseHandler);
      // console.log("before sending message", type, 'new', newPayload);
      // serviceWorker?.postMessage({ type, payload });
  
      // Send the message to the service worker
      if (serviceWorker) {
        try {
          serviceWorker.postMessage({ type, payload: newPayload })
        } catch(err) {
          console.log(err)
          // serviceWorker.postMessage({ type, payload: newPayload });
          serviceWorker.postMessage({ type, payload: newPayload });
        }
        // navigator.serviceWorker.controller.postMessage({ type, payload });
      } else {
        // wait one second before checking again
        setTimeout(() => {
          // if (navigator.serviceWorker.controller) {
          if (serviceWorker) {
            // serviceWorker.postMessage({ type, payload });
            console.info('This is triggered ')
            serviceWorker?.postMessage({ type, payload });
          } else {
            console.log('not ready', type)
            reject("Service worker not ready");
          }
        }, 90000) // 90 seconds
      }
  
      // Timeout for waiting for the response (e.g., 5 seconds)
      setTimeout(() => {
        reject("No response from service worker after timeout");
        navigator.serviceWorker.removeEventListener("message", responseHandler);
      }, 90000); // 90 sec
    } else {
      messageQueue.push({message: {type, payload: newPayload}})
      console.log('Message Queued', type, payload)
      if (type == 'init') resolve(null)
    }
      // })
      // .catch(err => reject(err))
      // .finally(() => console.log('finally'))
  });
}

// export function sendMessage(type: string, payload: any) {
//    return new Promise((resolve) => {
//      const responseHandler = (event: any) => {
//        resolve(event.data);
//        navigator.serviceWorker.removeEventListener("message", responseHandler);
//      };
 
//      navigator.serviceWorker.addEventListener("message", responseHandler);
//      navigator.serviceWorker.controller?.postMessage({ type, payload });
//    });
//  }

// actions for message received on broadcast channel (specially from service worker)
const broadcastActions: any = {
  GetLinkListener: async (payload: any) => {
    const listener = subscribedListeners.find(listener => listener.listenerId == payload.listenerId)
    listener?.callback(payload.data)
    return { success: true }
  },
  dispatchEvent: async (payload: any) => {
    if (serviceWorker) {
      let event = new Event(payload.id || '');
      dispatchEvent(event);
    }
    // self.clients.matchAll({ includeUncontrolled: true }).then(clients => {
    //   clients.forEach(client => {
    //     client.postMessage({ id, updatedData });
    //   });
    // });
    return { success: true }
  },
  checkInit: async (payload: any) => {
    console.log('service worker init 0')
    if (navigator.serviceWorker.controller) {
      console.log('service worker init 1')
      serviceWorker = navigator.serviceWorker.controller
    }
    await sendMessage("init", {
      url: BaseUrl.BASE_URL,
      aiurl: BaseUrl.AI_URL,
      accessToken: TokenStorage.BearerAccessToken,
      nodeUrl: BaseUrl.NODE_URL,
      enableAi: false,
      applicationName: BaseUrl.BASE_APPLICATION
    });
    return { success: true }
  }
}

/**
 * Method to trigger broadcast message listener
 */
function listenBroadCastMessages() {
  // broadcast event can be listened through both the service worker and other tabs
  broadcastChannel.addEventListener('message', async (event) => {
    const { type, payload }: any = event.data;
      if (!type) return;
      let responseData: {success: boolean, data?: any} = {success: false, data: undefined}
    
      if (broadcastActions[type]) {
        responseData = await broadcastActions[type](payload);
      } else {
        console.log(`Unable to handle "${type}" case in BC service worker`)
      }
    
  });
}

/**
 * Method to initialize the initial data
 * @param url string
 * @param aiurl string
 * @param accessToken string
 * @param nodeUrl string
 * @param enableAi boolean
 * @param applicationName string
 * @param isTest boolean
 * @returns Promise<any>
 */
async function initConceptConnection() {
  
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
  await PopulateTheLocalConnectionToMemory().catch((event) => {
    console.log("This is the error in populating binary tree");
   throw event;
 });;

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
 * Method to dispatch Event received from SW
 * @param id number|string
 * @param data any
 */
export function dispatchIdEvent(id: number|string, data:any = {}) {
  // console.log('id event dispatched', id)
  if (serviceWorker) {
    // let event = new Event(`${id}`);
    let event = new CustomEvent(`${id}`, data)
    console.log("event fired from", event);
    dispatchEvent(event);
  } else {
    broadcastChannel.postMessage({type: 'dispatchEvent', payload: {id}})
  }
}

async function processMessageQueue() {
  while (messageQueue.length > 0) {
    const { message, resolve, reject } = messageQueue.shift();
    await sendMessage(message.type, message.payload)
  }
}