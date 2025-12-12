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
//export {MakeTheTypeConcept} from './Services/MakeTheTypeConcept';
export {MakeTheTypeConceptApi} from './Api/MakeTheTypeConceptApi';
export { GetLinkerConnectionFromConcepts, GetLinkerConnectionToConcepts} from './Services/GetLinkerConnectionFromConcept';
export { DeleteConceptById } from './Services/DeleteConcept';
export { DeleteConnectionById,DeleteConnectionByIdBulk } from './Services/DeleteConnection';
export { TrashTheConcept } from './Api/Delete/DeleteConceptInBackend'
export { GetConnectionById } from './Services/GetConnections';
export {MakeTheTimestamp} from './Services/MakeTheTimestamp';
export {RecursiveSearchApi,RecursiveSearchApiWithInternalConnections, RecursiveSearchApiRaw,RecursiveSearchApiRawFullLinker,RecursiveSearchApiNewRawFullLinker} from './Api/RecursiveSearch';
export {GetCompositionBulkWithDataId,GetCompositionFromConnectionsWithDataIdFromConnections,GetCompositionFromConnectionsWithIndexFromConnections,GetCompositionBulk,GetCompositionFromConnectionsWithDataId} from './Services/GetCompositionBulk';
export {uploadAttachment, uploadFile, uploadImage, uploadImageV2, validDocumentFormats, validImageFormats} from './Services/Upload'
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
export {CreateTheConnectionLocal, CreateConnection} from './Services/Local/CreateTheConnectionLocal';
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
export {GetCompositionWithIdAndDateFromMemory,GetCompositionFromMemoryWithConnections} from './Services/GetComposition';
export { GetConceptByCharacterAndType} from './Api/GetConceptByCharacterAndType';
export {GetConnectionDataPrefetch} from './Services/GetCompositionBulk';
export { FormatFromConnectionsAltered} from './Services/Search/SearchLinkMultiple';
export {NORMAL, JUSTDATA, DATAID, DATAIDDATE, RAW, ALLID, LISTNORMAL, DATAV2} from './Constants/FormatConstants';
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
export {GetConnectionTypeForCount} from './Services/Common/DecodeCountInfo';
export {orderTheConnections} from './Services/Search/orderingConnections';
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
export { Logger } from "./Middleware/logger.service";
import { WidgetTree } from "./Widgets/WidgetTree";
import { HandleHttpError, HandleInternalError, UpdatePackageLogWithError } from "./Services/Common/ErrorPosting";
import { ApplicationMonitor } from "./Middleware/ApplicationMonitor";
import { FreeSchemaResponse } from "./DataStructures/Responses/ErrorResponse";
import { AccessTracker } from "./app";
import { Logger } from "./app";
import { BASE_URL } from "./Constants/ApiConstants";
import { getCookie, LogData } from "./Middleware/logger.service";
import { randomInt } from "crypto";
import { access } from "fs";
export { sendEmail } from "./Services/Mail";
export { BuilderStatefulWidget } from "./Widgets/BuilderStatefulWidget";
export { LocalTransaction } from "./Services/Transaction/LocalTransaction";
export { InnerActions } from "./Constants/general.const";
export { Anomaly } from './Anomaly/anomaly';
export { Validator } from './Validator/validator';
export { createFormFieldData } from './Validator/utils';
export {BaseUrl} from './DataStructures/BaseUrl';
export {StatefulWidget} from './Widgets/StatefulWidget';
export {DeleteConnectionByType, DeleteConnectionByTypeBulk, GetAllTheConnectionsByTypeAndOfTheConcept} from './Services/DeleteConnectionByType';
export {FreeschemaQuery} from './DataStructures/Search/FreeschemaQuery';
export {FreeschemaQueryApi} from './Api/Search/FreeschemaQueryApi';
export {SchemaQueryListener, SchemaQuery} from './WrapperFunctions/SchemaQueryObservable';
export {WidgetTree} from './Widgets/WidgetTree';
export { DeleteUser } from './Services/DeleteConcept';
export { AccessTracker } from './AccessTracker/accessTracker'
export {CreateConnectionBetweenEntityLocal} from './Services/CreateConnection/CreateConnectionEntity';
export {BuildWidgetFromId} from './Widgets/WidgetBuild';
export {removeAllChildren} from './Services/Common/RemoveAllChild';
export {getUserDetails} from './Services/User/UserFromLocalStorage';
export {CountInfo} from './DataStructures/Count/CountInfo';
export {LogEvent} from './Services/Logs/LogEvent';
export {Selector} from './Api/Prototype/Selector';
export { AccessControlService } from './Services/AccessControl/AccessControl';
export {importLatestWidget, importRecentWidget, renderImportedWidget, renderLatestWidget, renderPage, renderWidget,convertWidgetTreeToWidgetWithWrapper, getWidgetFromId, convertWidgetTreeToWidget, unwrapContainers,getWidgetBulkFromId} from './Widgets/RenderWidgetService';

export {CreateData} from './Services/automated/automated-concept-connection';

export {Prototype} from './DataStructures/Prototype/Prototype';
export {Environments} from './DataStructures/environments/environments';
export {createPrototypeLocal} from './prototype/prototype.service';
export {GetImageApi} from './Api/Images/GetImages';

export { GetAllLinkerConnectionsFromTheConcept } from "./Api/GetAllLinkerConnectionsFromTheConcept";

export {GetFreeschemaImage,GetFreeschemaImageUrl} from './Services/assets/GetImageService';
type listeners = {
  listenerId: string | number
  callback: any,
  createdAt: number
}
export var serviceWorker: any;
const TABID = Date.now().toString(36) + Math.random().toString(36).substring(2)
export let subscribedListeners: listeners[] = [];
// let serviceWorkerReady = false;
let messageQueue: any[] = [];
// for sw use only START
export let hasActivatedSW: boolean = false
export function setHasActivatedSW (value: boolean) { hasActivatedSW = value}
// for sw use only END


/**
 * Updates the JWT access token used for authenticated API requests.
 *
 * This function should be called after user authentication to set or update the bearer token
 * that will be used for all subsequent authenticated operations. The token is stored in
 * TokenStorage and automatically included in API request headers.
 *
 * **When to Use:**
 * - After successful login (LoginToBackend or Signin)
 * - When refreshing an expired token
 * - When switching between user sessions
 * - When restoring a saved session on app reload
 *
 * **Token Flow:**
 * 1. User logs in via LoginToBackend() or Signin()
 * 2. Backend returns JWT token
 * 3. Call updateAccessToken() with the token
 * 4. Token is stored in memory (TokenStorage.BearerAccessToken)
 * 5. All API calls automatically use this token
 * 6. If service worker enabled, token is synced to service worker
 *
 * **Security Notes:**
 * - Token is stored in memory only (not persisted to disk)
 * - Token is cleared on page refresh (unless you save/restore it)
 * - Never expose token in logs or client-side code
 * - Token should be refreshed before expiration
 *
 * @param accessToken - The JWT bearer token obtained from authentication.
 *                     Format: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                     Pass empty string to clear the token (logout).
 *
 * @param session - Optional session information to sync with token.
 *                 Reserved for future use. Currently not fully implemented.
 *
 * @returns void
 *
 * @example
 * // After login, update token
 * const loginResult = await LoginToBackend("user@example.com", "password");
 * updateAccessToken(loginResult.data.token);
 * console.log("Token updated - now authenticated");
 *
 * @example
 * // Restore token from localStorage on app reload
 * const savedToken = localStorage.getItem("authToken");
 * if (savedToken) {
 *   updateAccessToken(savedToken);
 * }
 *
 * @example
 * // Clear token on logout
 * updateAccessToken("");
 * console.log("Token cleared - logged out");
 *
 * @example
 * // Refresh expired token
 * const newToken = await refreshTokenFromBackend();
 * updateAccessToken(newToken);
 *
 * @see {@link LoginToBackend} for obtaining initial token
 * @see {@link Signin} for alternative authentication
 * @see {@link init} which can also set initial token
 */
function updateAccessToken(accessToken: string = "", session?: any) {
  TokenStorage.BearerAccessToken = accessToken;

  // because in the service worker document is not defined.
  if(typeof document == undefined){
    // for the service worker
   // TokenStorage.sessionId = session;
  }
  else{
    // for the main thread
   // let parsedCookie = getCookie("SessionId") ?? "999";
    //TokenStorage.sessionId = parseInt(parsedCookie);
  }
 // let parsedCookie = getCookie("SessionId") ?? "999";
  if (serviceWorker) sendMessage('updateAccessToken', { accessToken, session: TokenStorage.sessionId})
}




/**
 * Initializes the mftsccs-browser package and sets up all required subsystems.
 *
 * This is the FIRST function you must call before using any other functionality in the package.
 * It configures the backend connections, initializes local databases, sets up service workers,
 * and prepares the system for concept and connection operations.
 *
 * **Initialization Process:**
 * 1. Configures Base URLs for backend, AI, and node servers
 * 2. Sets up access token for authenticated requests
 * 3. Generates unique application randomizer for IndexedDB identification
 * 4. Initializes feature flags (logging, access tracking, etc.)
 * 5. Checks for service worker support
 * 6. Initializes local IndexedDB databases for caching
 * 7. Sets up message listeners for service worker communication
 * 8. Optionally registers and activates service worker
 * 9. Falls back to main thread if service worker unavailable
 *
 * **Subsystems Initialized:**
 * - IndexedDB databases (concepts, connections, settings)
 * - Service worker (if enabled and supported)
 * - Message passing between main thread and service worker
 * - Broadcast channel for cross-tab communication
 * - Access token storage
 * - Logging and monitoring systems
 * - Access tracking (if enabled)
 *
 * @param url - The backend API base URL (C# data fabric server).
 *             This is the primary server for concept and connection data.
 *             Example: "https://api.example.com" or "https://backend.yourdomain.com"
 *             **Required** for most operations.
 *
 * @param aiurl - The AI service URL for AI-powered features and data preloading.
 *               If not using AI features, pass empty string and set enableAi to false.
 *               Example: "https://ai.example.com"
 *
 * @param accessToken - JWT bearer token for authenticated API requests.
 *                     Can be empty string on initialization - set later with updateAccessToken().
 *                     Token is obtained through LoginToBackend() or Signin().
 *                     Example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *
 * @param nodeUrl - The Node.js server URL for business logic and security features.
 *                 Used for additional server-side operations.
 *                 Example: "https://node.example.com"
 *
 * @param enableAi - Flag to enable/disable AI features and AI data preloading to IndexedDB.
 *                  Set to false if not using AI features or if aiurl is not provided.
 *                  Default: true
 *
 * @param applicationName - Unique identifier for your application.
 *                         Used to create separate IndexedDB instances for different apps.
 *                         Example: "my-app-v1", "project-manager", "knowledge-base"
 *                         Useful when multiple applications share the same domain.
 *
 * @param enableSW - Service worker configuration object. Service worker enables background
 *                  processing for better performance and offline capabilities.
 *                  - activate: boolean - Enable/disable service worker
 *                  - scope: string (optional) - Service worker scope path (default: "/")
 *                  - pathToSW: string (optional) - Path to service worker file (default: "/service-worker.js")
 *                  - manual: boolean (optional) - If true, assumes SW already registered manually
 *                  Example: {activate: true, scope: "/", pathToSW: "/sw.js"}
 *
 * @param flags - Feature flags object for enabling/disabling various features:
 *               - logApplication: boolean - Enable application-level logging
 *               - logPackage: boolean - Enable package-level logging
 *               - accessTracker: boolean - Enable access tracking/analytics
 *               - isTest: boolean - Mark as test environment
 *               All default to false if not specified.
 *
 * @param parameters - Additional configuration parameters:
 *                    - logserver: string - Custom log server URL (default: "https://logdev.freeschema.com")
 *
 * @returns Promise<boolean> - Returns true if initialization succeeds, undefined if it fails.
 *         On failure, falls back to main thread operation and logs warnings.
 *
 * @example
 * // Basic initialization (minimum required)
 * await init(
 *   "https://api.myapp.com",     // backend URL
 *   "",                           // no AI
 *   "",                           // no token yet
 *   "",                           // no node server
 *   false,                        // disable AI
 *   "my-app"                      // app name
 * );
 *
 * @example
 * // Full initialization with service worker
 * await init(
 *   "https://api.myapp.com",
 *   "https://ai.myapp.com",
 *   "",
 *   "https://node.myapp.com",
 *   true,
 *   "my-app-v2",
 *   {
 *     activate: true,
 *     scope: "/",
 *     pathToSW: "/service-worker.js"
 *   },
 *   {
 *     logApplication: true,
 *     accessTracker: true
 *   },
 *   {
 *     logserver: "https://logs.myapp.com"
 *   }
 * );
 *
 * @example
 * // Initialize then login
 * await init("https://api.example.com", "", "", "", false, "my-app");
 * const loginResult = await LoginToBackend("user@example.com", "password");
 * updateAccessToken(loginResult.data.token);
 * // Now ready to use all authenticated operations
 *
 * @throws Does not throw - logs warnings and falls back to main thread on errors.
 *        Common issues: Service worker registration failures, IndexedDB access denied.
 *
 * @see {@link updateAccessToken} for updating the access token after initialization
 * @see {@link LoginToBackend} for obtaining an access token
 * @see {@link sendMessage} for communicating with service worker after initialization
 * @param accessControlUrl This is the url for the access control system. This is another server in the data fabric that is used as server for business logic and security features.
 *
 */
async function init(
  url: string = "",
  aiurl: string = "",
  accessToken: string = "",
  nodeUrl: string = "",
  enableAi: boolean = true,
  applicationName: string = "",
  enableSW: {activate: boolean, scope?: string, pathToSW?: string, manual?: boolean} | undefined = undefined,
  flags: { logApplication?: boolean; logPackage?:boolean; accessTracker?:boolean; isTest?: boolean } = {},
  parameters: { logserver?:string} = {},
  accessControlUrl: string = "",
) {
  try {
    BaseUrl.BASE_URL = url;
    BaseUrl.AI_URL = aiurl;
    BaseUrl.NODE_URL = nodeUrl;
    BaseUrl.BASE_APPLICATION = applicationName;
    BaseUrl.LOG_SERVER = parameters.logserver ?? "https://logdev.freeschema.com";
    BaseUrl.ACCESS_CONTROL_BASE_URL = accessControlUrl;
    console.log("setting the logserver", BaseUrl.LOG_SERVER, parameters.logserver);
    if (accessToken) updateAccessToken(accessToken);
    //TokenStorage.BearerAccessToken = accessToken;
    let randomizer = Math.floor(Math.random() * 100000000);
    // BaseUrl.BASE_RANDOMIZER = randomizer;
    // BaseUrl.BASE_RANDOMIZER = 999;
    
    BaseUrl.setRandomizer(randomizer)

    // Change Default Flags
    const defaultFlags = {
      logApplication: false,
      logPackage: false,
      accessTracker: false,
      isTest: false
    };
    BaseUrl.FLAGS = defaultFlags

    // Merge Provided Flags with Defaults
    BaseUrl.FLAGS = { ...defaultFlags, ...flags };

    initializeFlags(BaseUrl.FLAGS)
    // console.log("BaseUrl.FLAGS before sending to service worker : ",  BaseUrl.FLAGS)

    if (!("serviceWorker" in navigator)) {
      await initConceptConnection();
      console.warn("Service Worker not supported in this browser.");
      return
    }
    
    await initializeAppConfig()
    listenPostMessagaes()
    listenBroadCastMessages()

    // check if manual service worker was activated 
    if (enableSW && enableSW.activate && enableSW.manual) {
      await new Promise((resolve, reject) => {
        navigator.serviceWorker.ready
        .then(async (registration) => {
          console.log('registraions ready', registration)
          serviceWorker = registration.active
          await initServiceWorker()
          resolve('done')
        })
        .catch(err => {
          console.error("Error: Ready service worker", err)
          reject(err);
        })
        .finally(() => console.log('Finally service worker ready done'))

        setTimeout(() => reject('Timeout ready'), 30000)
      })
    }
     else if (
      // this condition starts the service worker if not manually started.
      enableSW &&
      enableSW?.activate
    ) {
      try {
        console.log("service worker initialiing");
        await handleRegisterServiceWorker(enableSW)
      } catch (error) {
        // run on the main thread.
        await initConceptConnection();
        console.error("Unable to start service worker", error);
      }
    } else {
      // run on the main thread.
      await initConceptConnection();
      console.warn('Service Worker not activated')
    }
    return true;
  } catch (error) {
    // run on the main thread.
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
export async function sendMessage(type: string, payload: any, retryCount = 0) {
  let messagedProcessed = false
  const messageId = Math.random().toString(36).substring(2); // Generate a unique message ID
  payload.messageId = messageId
  payload.TABID = TABID
  // let actions = payload.actions

  const newPayload = JSON.parse(JSON.stringify(payload))

  let checkProcessInterval: any
  if (type != 'checkProcess' && retryCount == 0) {
    checkProcessInterval = setInterval(async () => {
     // console.log('process took more than one second', messageId, type, messagedProcessed)
      // if (!await checkIfExecutingProcess(messageId, type) && !messagedProcessed) {
      //   console.log("Message process missing")
      //   throw Error('Failed to handle type ' + type + ' ' + messageId)
      // }
      if (!messagedProcessed && !await checkIfExecutingProcess(messageId, type)) {
        clearInterval(checkProcessInterval)
          if (!messagedProcessed) {
            console.log('Failed to handle type ' + type + ' message not found ' + messageId, 'retrying: ', retryCount == 0, type)
            if (retryCount == 0 && type != 'checkProcess') {
              console.log('retrying ', type, messageId)
              const res = await sendMessage(type, payload, retryCount + 1)
              return res
            } else {
              // throw Error('Failed to handle type ' + type + ' ' + messageId)
              console.log('Failed to handle type ' + type + ' ' + messageId)
            }
          }
        // throw Error('Failed to handle type ' + type + ' ' + messageId)
      }
    }, 2000)
  }

  return new Promise((resolve, reject) => {
    if (!((navigator.serviceWorker.controller || serviceWorker))) console.log('', navigator.serviceWorker.controller, serviceWorker, type)
    if ((navigator.serviceWorker.controller || serviceWorker)) {
      const responseHandler = (event: any) => {
        if (event?.data?.messageId == messageId) { // Check if the message ID matches
          messagedProcessed = true
         // if (type != 'checkProcess') 
            //console.log('received from sw', type, messageId)
          clearInterval(checkProcessInterval)
          if (!event.data.success) {
            if (event?.data?.status == 401) {
              reject(HandleHttpError(new Response('Unauthorized', {status: 401, statusText: event?.data?.statusText})))
            } else if (event?.data?.status == 500) {
              reject(HandleInternalError(new Response('Internal Server Error', {status: 500, statusText: event?.data?.statusText})))
            } else {
              console.error('Error in the response from worker:', event)
              reject(`Failed to handle action ${type} ${JSON.stringify(payload)}, Response: ${JSON.stringify(event.data)}`)
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
  
      // Send the message to the service worker
      if (navigator.serviceWorker.controller) {
        if (type != 'checkProcess') console.log('sent to sw', type, messageId)
        navigator.serviceWorker.controller.postMessage({ type, payload: newPayload })
      } else if (serviceWorker) {
        // console.log('sent to sw', type, messageId)
        console.warn(`controller not found but serviceWorker is available. messageId: ${messageId}, type: ${type}`)
        // if (serviceWorkerReady) console.warn('service worker was registered already but navigator is empty!!!', serviceWorker)
        try {
          serviceWorker.postMessage({ type, payload: newPayload })
        } catch(err) {
          console.log('Retrying again on catch service worker', err)
          serviceWorker.postMessage({ type, payload: newPayload });
        }
      } else {
        console.warn(`Service Worker hasn't loaded yet. messageId: ${messageId}, type: ${type}`)

        // if (serviceWorkerReady) console.warn('service worker was registered already but is not available NOW!!!')
        console.info('ready', navigator.serviceWorker.ready)
        // wait one second before checking again
        setTimeout(() => {
          console.warn(`Re-Trying after certain time. messageId: ${messageId}, type: ${type}`)
          if (serviceWorker) {
            console.info('This is triggered ')
            serviceWorker?.postMessage({ type, payload });
          } else {
            console.log('not ready', type)
            clearInterval(checkProcessInterval)
            reject("Service worker not ready");
          }
        }, 30000) // 30 seconds
      }
  
      // Timeout for waiting for the response (e.g., 5 seconds)
      setTimeout(() => {
        clearInterval(checkProcessInterval)
        reject(`No response from service worker after timeout: ${type}`);
        navigator.serviceWorker.removeEventListener("message", responseHandler);
      }, 210000); // 3.5 minutes
    } else {
      messageQueue.push({message: {type, payload: newPayload}})
      //console.log('Message Queued', type, payload)
      //console.log(navigator.serviceWorker.controller, serviceWorker, type)
      if (type == 'init') {
        clearInterval(checkProcessInterval)
        resolve(null)
      }
    }
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
      let event = new CustomEvent(payload.id || '', payload.data);
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
    await initServiceWorker();
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
        console.warn(`Unable to handle "${type}" case in BC service worker`)
      }
    
  });
}
/**
 * If service worker sends any messages then this will listen.
 */
function listenPostMessagaes() {
  // broadcast event can be listened through both the service worker and other tabs
  navigator.serviceWorker.addEventListener('message', async (event: any) => {
    try {
      if (event.data && event.data.type === 'API_401') {
        const { requestDetails } = event.data;
  
        // Re-create the POST request with the same headers and body
        const requestOptions = {
            method: requestDetails.method,
            headers: new Headers(requestDetails.headers),
            body: requestDetails.body  // Pass the original body
        };
  
        // Re-hit the API with the same details
        const apiResponse = await fetch(requestDetails.url, requestOptions);
        const responseBody = await apiResponse?.json(); // Get the response text
  
        // Send the response back to the Service Worker (same client)
        navigator?.serviceWorker?.controller?.postMessage({
            type: 'API_RESPONSE',
            messageId: event.data.messageId,
            response: new Response(responseBody, {
              status: apiResponse.status,
              statusText: apiResponse.statusText,
              headers: apiResponse.headers
            })
        });
    }

  } catch (error) {
    console.error("Error during listenPostMessage", error)
    navigator?.serviceWorker?.controller?.postMessage({
      type: 'API_RESPONSE',
      messageId: event.data.messageId
    })
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
 });

//  await PopulateTheLocalConceptsToMemory().catch((event)=>{
//   console.log("This is the error in populating binary tree");
//  });

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
  if (serviceWorker || typeof window  != "undefined") {
    // let event = new Event(`${id}`);
    let event = new CustomEvent(`${id}`, data)
    dispatchEvent(event);
  } 
  else {
    broadcastChannel.postMessage({type: 'dispatchEvent', payload: {id, data}})

  }
}

async function processMessageQueue() {
  console.log('message queue', messageQueue)
  // process init if exist in queue
  const initQueueItem = messageQueue.find(item => item?.message?.type == 'init')
  if (initQueueItem) {
    console.log('Processing Init Queue poped', initQueueItem?.type, initQueueItem);
    // remove current init items
    const index = messageQueue.indexOf(initQueueItem);
    if (index > -1) { // only splice array when item is found
      messageQueue.splice(index, 1); // 2nd parameter means remove one item only
    }
    await sendMessage(initQueueItem?.type, initQueueItem?.payload)
  }

  console.log('message queue while', messageQueue)
  
  while (messageQueue.length > 0) {
    const { message, resolve, reject } = messageQueue.shift();
    console.log('Queue poped', message.type, message);
    await sendMessage(message.type, message.payload)
  }
}

/**
 * Method to handle global exception occured in service worker
 * @param error any
 */
export const handleServiceWorkerException = (error: any) => {
  // if (error instanceof FreeSchemaResponse && error.getStatus() != 401) {
  if (error instanceof FreeSchemaResponse) {
    console.error('FreeSchemaResponse Error', error)
    throw error
  }
  // if (error instanceof FreeSchemaResponse && error.getStatus() == 401) console.error('401 triggered in sw defaulting')
  console.error('Service Worker Error', error)
}

/**
 * Function to setup initial flag
 */
function initializeFlags(flags: any) {
  const updateLog:any = Logger.logfunction("initializeFlags",arguments);
  try {
    if (flags.logApplication) {
      ApplicationMonitor.initialize();
      Logger.logApplicationActivationStatus = true;
      console.warn("Application log started.");
    }
    if (flags.logPackage) {
      Logger.logPackageActivationStatus = true;
      console.warn("Package log started.");
    }
    if (flags.accessTracker) {
      AccessTracker.activateStatus = true;
      console.warn("Access Tracker Activated.");
    }
    if (flags.isTest) {
      IdentifierFlags.isDataLoaded = true;
      IdentifierFlags.isCharacterLoaded = true;
      IdentifierFlags.isTypeLoaded = true;
      IdentifierFlags.isLocalDataLoaded = true;
      IdentifierFlags.isLocalTypeLoaded = true;
      IdentifierFlags.isLocalCharacterLoaded = true;
      IdentifierFlags.isConnectionLoaded = true;
      IdentifierFlags.isConnectionTypeLoaded = true;
      IdentifierFlags.isLocalConnectionLoaded = true;
      // return true;
    }

    // update the existing log
    Logger.logUpdate(updateLog)
    
    // throw new Error("Forced error for testing!");
    
    return flags
  } catch (error) {
    UpdatePackageLogWithError(updateLog, 'initializeFlags', error);
    throw error;
  }
}

/**
 * Method to handle Registering service worker
 * @param enableSW any
 */
async function handleRegisterServiceWorker(enableSW: any) {
  const logData:any = Logger.logfunction("handleRegisterServiceWorker",arguments);
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
        // process queue if exist
        setInterval(() => {
          //console.log('message process interrval calling', messageQueue)
          if (messageQueue.length)
            processMessageQueue()
        }, 2000)
        
        // Add Listeners before initializing the service worker

        // Listen for updates to the service worker
        console.log("update listen start");
        registration.onupdatefound = () => {
          const newWorker = registration.installing;
          console.log("new worker", newWorker);
          if (newWorker) {
            newWorker.onstatechange = async () => {
              console.warn("on state change triggered", newWorker.state, navigator.serviceWorker.controller);
              if (newWorker.state === "installing") {
                console.log("Service Worker installing");
                serviceWorker = undefined
                // serviceWorkerReady = false
              }
              // if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
              if ((newWorker.state === "activated" || newWorker.state === 'redundant') && navigator.serviceWorker.controller) {
                // && navigator.serviceWorker.controller) {
                // serviceWorkerReady = true;
                serviceWorker = newWorker;
                console.log(
                  "New Service Worker is active",
                  registration
                );
                // serviceWorker = registration.active;
                // Send init message now that it's active
                setTimeout(() => {
                  console.log('Message Processed after some time')
                  processMessageQueue();
                }, 5000)
                await initServiceWorker()
                
                success = true;
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
            console.warn('Service worker has been activated; controller change');
            await initServiceWorker()
            // The new service worker is now controlling the page
            // You can reload the page if necessary or handle the update process here
          }
        });

        // state change 
        if (registration.installing || registration.waiting || registration.active) {
          registration.addEventListener('statechange', async (event: any) => {
            if (event?.target?.state === 'activating') {
              serviceWorker = navigator.serviceWorker.controller
              console.warn('Service Worker is activating statechange');
              await initServiceWorker()
            }
          });
        }
        
        // If the service worker is already active, mark it as ready
        if (registration.active) {
          // serviceWorkerReady = true;
          console.log("active sw");
          serviceWorker = registration.active;

          await initServiceWorker()
          processMessageQueue();
          resolve();
        } else {
          // Handle if on state change didn't trigger
          setTimeout(() => {
            if (!success) reject("Not Completed Initialization");
          }, 10000);
        }


      })
      .catch(async (error) => {
        await initConceptConnection();
        reject(error);
        console.error("Service Worker registration failed:", error);
        UpdatePackageLogWithError(logData, 'handleRegisterServiceWorker', error)
      });
  })
}

/**
 * Method to initialize Serivce Worker
 */
async function initServiceWorker() {
  await sendMessage("init", {
    url: BaseUrl.BASE_URL,
    aiurl: BaseUrl.AI_URL,
    accessToken: TokenStorage.BearerAccessToken,
    nodeUrl: BaseUrl.NODE_URL,
    enableAi: false,
    applicationName: BaseUrl.BASE_APPLICATION,
    flags: BaseUrl.FLAGS,
    accessControlUrl: BaseUrl.ACCESS_CONTROL_BASE_URL,
  });
}

async function checkIfExecutingProcess(messageId: string, type: string) {
  try {
    const res: any = await sendMessage("checkProcess", {checkMessageId: messageId})
    console.log('check interval data res for type ', type, messageId, res.data)
    if (res?.data?.processing) return true
    else false
  } catch (error) {
    console.error('error on checing executing process', type, messageId, error)
    return false
  }
}

async function initializeAppConfig() {
  let cacheServerName = BaseUrl.BASE_APPLICATION + "_cacheServers";
  let cacheConfigName = BaseUrl.BASE_APPLICATION + "_config";
  let cacheConfigSession = BaseUrl.BASE_APPLICATION + "_session";
  let myCacheServer = sessionStorage.getItem(cacheServerName);
  let appConfig = sessionStorage.getItem(cacheConfigName)


  let sessionString = sessionStorage.getItem(cacheConfigSession) ?? "999";
  let sessionId = parseInt(sessionString);


  if (myCacheServer === undefined || myCacheServer === "undefined") {
    BaseUrl.NODE_CACHE_URL = BaseUrl.BASE_URL;
  }

  myCacheServer = JSON.parse(myCacheServer as string) 
  const config: Record<string, number> = JSON.parse(appConfig as string);
  async function getAppConfigHandler() {
    let response
    try {
      let windowApplication = window?.location?.hostname ?? "boomconsole";

        response = await fetch(BaseUrl.getAppConfig() + "?application=" + windowApplication, {
          method: "POST",
        });
  
        if (!response.ok) {
          throw new Error("Failed to sync data to the server.");
        }
  
        const cacheRes = await response.json();
        if (cacheRes.success) {
          sessionStorage.setItem(cacheServerName, JSON.stringify(cacheRes.servers));
          sessionStorage.setItem(cacheConfigName, JSON.stringify(cacheRes.config));
          sessionStorage.setItem(cacheConfigSession,cacheRes.session)
          TokenStorage.setSession(cacheRes.session);
          //TokenStorage.sessionId = cacheRes.session;
          if (!cacheRes.servers) {
            BaseUrl.NODE_CACHE_URL = BaseUrl.BASE_URL
          } else {
            BaseUrl.NODE_CACHE_URL = cacheRes.servers[0];
          }
          if (cacheRes.config) {
            BaseUrl.DOCUMENTATION_WIDGET = cacheRes.config.documentationWidget
          }
        }
    } catch (error: any) {
      console.error("error getting app config from server", error.message);
    }
  }
  
  if (!myCacheServer || !config || !config.documentationWidget || sessionId == 999) {
    // navigator.geolocation.getCurrentPosition(
    //   async (data) => {
        await getAppConfigHandler();
      // },
      // async (error) => {
      //   if (error.code === error.PERMISSION_DENIED) {
      //     // await getCacheServer();
      //     BaseUrl.NODE_CACHE_URL = BaseUrl.BASE_URL
      //   }
      // }
    // );
  } else {
    if (Array.isArray(myCacheServer) && myCacheServer.length) {
      BaseUrl.NODE_CACHE_URL = myCacheServer[0];
    } else {
      BaseUrl.NODE_CACHE_URL = BaseUrl.BASE_URL;
    }
    TokenStorage.setSession(sessionId);
    BaseUrl.DOCUMENTATION_WIDGET = config.documentationWidget
  }
  console.log("before the payload in app", TokenStorage.sessionId);
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    sendMessage("SESSION_DATA", {
     type: 'SESSION_DATA',
     data: BaseUrl.NODE_CACHE_URL,
     session: TokenStorage.sessionId
   })
  }
}
