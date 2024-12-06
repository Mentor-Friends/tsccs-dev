/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  KC: () => (/* reexport */ ADMIN),
  BG: () => (/* reexport */ ALLID),
  TR: () => (/* reexport */ AddGhostConcept),
  IM: () => (/* reexport */ Anomaly),
  U3: () => (/* reexport */ BaseUrl_BaseUrl),
  Wg: () => (/* reexport */ BinaryTree),
  BO: () => (/* reexport */ Composition),
  WW: () => (/* reexport */ CompositionBinaryTree),
  BS: () => (/* reexport */ CompositionNode),
  ji: () => (/* reexport */ Concept_Concept),
  Ij: () => (/* reexport */ ConceptData_ConceptsData),
  Ng: () => (/* reexport */ Connection_Connection),
  du: () => (/* reexport */ ConnectionData),
  RC: () => (/* reexport */ CreateTheComposition),
  Cd: () => (/* reexport */ CreateConnectionBetweenTwoConcepts),
  pp: () => (/* reexport */ CreateConnectionBetweenTwoConceptsGeneral),
  hs: () => (/* reexport */ CreateConnectionBetweenTwoConceptsLocal),
  oI: () => (/* reexport */ CreateDefaultConcept_CreateDefaultConcept),
  u9: () => (/* reexport */ CreateDefaultLConcept_CreateDefaultLConcept),
  B7: () => (/* reexport */ CreateSession),
  mF: () => (/* reexport */ CreateSessionVisit),
  RU: () => (/* reexport */ CreateTheCompositionLocal),
  Q9: () => (/* reexport */ CreateTheCompositionWithCache),
  sF: () => (/* reexport */ createTheConnection),
  wT: () => (/* reexport */ CreateTheConnectionGeneral),
  Fv: () => (/* reexport */ CreateTheConnectionLocal),
  y0: () => (/* reexport */ DATAID),
  iw: () => (/* reexport */ DATAIDDATE),
  sG: () => (/* reexport */ DelayFunctionExecution),
  qN: () => (/* reexport */ DeleteConceptById),
  xY: () => (/* reexport */ DeleteConceptLocal),
  mZ: () => (/* reexport */ DeleteConnectionById),
  $S: () => (/* reexport */ DeleteConnectionByType),
  w_: () => (/* reexport */ DependencyObserver),
  Te: () => (/* reexport */ FilterSearch),
  vw: () => (/* reexport */ FormatFromConnections),
  y8: () => (/* reexport */ FormatFromConnectionsAltered),
  k9: () => (/* reexport */ FreeschemaQuery),
  eE: () => (/* reexport */ FreeschemaQueryApi),
  sP: () => (/* reexport */ GetAllConnectionsOfComposition),
  Y3: () => (/* reexport */ GetAllConnectionsOfCompositionBulk),
  Nj: () => (/* reexport */ GetComposition),
  dF: () => (/* reexport */ GetCompositionBulk),
  cw: () => (/* reexport */ GetCompositionBulkWithDataId),
  p8: () => (/* reexport */ GetCompositionFromConnectionsWithDataId),
  rv: () => (/* reexport */ GetCompositionBulk_GetCompositionFromConnectionsWithDataIdInObject),
  Nt: () => (/* reexport */ GetCompositionFromConnectionsWithDataIdIndex),
  as: () => (/* reexport */ GetCompositionFromConnectionsWithIndex),
  pX: () => (/* reexport */ GetCompositionList),
  Sx: () => (/* reexport */ GetCompositionListAll),
  XK: () => (/* reexport */ GetCompositionListAllWithId),
  vO: () => (/* reexport */ GetCompositionListListener),
  WJ: () => (/* reexport */ GetCompositionListLocal),
  j_: () => (/* reexport */ GetCompositionListLocalWithId),
  iD: () => (/* reexport */ GetCompositionListWithId),
  Ll: () => (/* reexport */ GetCompositionListWithIdUpdated),
  bk: () => (/* reexport */ GetCompositionListener),
  UI: () => (/* reexport */ GetCompositionLocal),
  XM: () => (/* reexport */ GetCompositionLocalWithId),
  Mb: () => (/* reexport */ GetCompositionWithAllIds),
  bq: () => (/* reexport */ GetCompositionWithCache),
  ke: () => (/* reexport */ GetCompositionWithDataIdBulk),
  w1: () => (/* reexport */ GetCompositionWithDataIdWithCache),
  yz: () => (/* reexport */ GetCompositionWithId),
  Ez: () => (/* reexport */ GetCompositionWithIdAndDateFromMemory),
  rh: () => (/* reexport */ GetConceptBulk),
  nW: () => (/* reexport */ GetConceptByCharacter),
  $I: () => (/* reexport */ GetConceptByCharacterAndCategoryLocal),
  Aj: () => (/* reexport */ GetConceptByCharacterAndType),
  xn: () => (/* reexport */ GetConnectionBetweenTwoConceptsLinker),
  jM: () => (/* reexport */ GetConnectionBulk),
  nS: () => (/* reexport */ GetConnectionById),
  QL: () => (/* reexport */ GetCompositionBulk_GetConnectionDataPrefetch),
  xf: () => (/* reexport */ GetConnectionOfTheConcept),
  L6: () => (/* reexport */ GetLink),
  $Y: () => (/* reexport */ GetLinkListListener),
  db: () => (/* reexport */ GetLinkListener),
  Z9: () => (/* reexport */ GetLinkRaw),
  Ny: () => (/* reexport */ GetLinkerConnectionFromConcepts),
  qY: () => (/* reexport */ GetLinkerConnectionToConcepts),
  jQ: () => (/* reexport */ GetRelation),
  CH: () => (/* reexport */ GetRelationLocal),
  NT: () => (/* reexport */ GetRelationRaw),
  SV: () => (/* reexport */ GetTheConcept),
  fz: () => (/* reexport */ GetTheConceptLocal),
  M2: () => (/* reexport */ GetUserGhostId),
  ZJ: () => (/* reexport */ JUSTDATA),
  RA: () => (/* reexport */ LConcept),
  BH: () => (/* reexport */ LConnection),
  SL: () => (/* reexport */ LISTNORMAL),
  vF: () => (/* reexport */ LocalConceptData_LocalConceptsData),
  HW: () => (/* reexport */ LocalSyncData),
  Vy: () => (/* reexport */ Logger),
  Ne: () => (/* reexport */ LoginToBackend),
  fg: () => (/* reexport */ MakeTheInstanceConcept),
  kQ: () => (/* reexport */ MakeTheInstanceConceptLocal),
  M4: () => (/* reexport */ MakeTheTimestamp),
  UG: () => (/* reexport */ MakeTheTypeConcept),
  CT: () => (/* reexport */ MakeTheTypeConceptApi),
  $1: () => (/* reexport */ MakeTheTypeConceptLocal),
  yv: () => (/* reexport */ NORMAL),
  Uj: () => (/* reexport */ PRIVATE),
  q: () => (/* reexport */ PUBLIC),
  vI: () => (/* reexport */ PatcherStructure),
  XZ: () => (/* reexport */ RAW),
  ZE: () => (/* reexport */ RecursiveSearchApi),
  FR: () => (/* reexport */ RecursiveSearchApiNewRawFullLinker),
  PR: () => (/* reexport */ RecursiveSearchApiRaw),
  PQ: () => (/* reexport */ RecursiveSearchApiRawFullLinker),
  RN: () => (/* reexport */ RecursiveSearchListener),
  yx: () => (/* reexport */ SchemaQueryListener),
  br: () => (/* reexport */ SearchAllConcepts),
  eU: () => (/* reexport */ SearchLinkInternal),
  df: () => (/* reexport */ SearchLinkInternalAll),
  cf: () => (/* reexport */ SearchLinkMultipleAll),
  Ph: () => (/* reexport */ SearchLinkMultipleAllObservable),
  jy: () => (/* reexport */ SearchLinkMultipleApi),
  L0: () => (/* reexport */ SearchQuery),
  qn: () => (/* reexport */ SearchStructure),
  ss: () => (/* reexport */ SearchWithLinker),
  zl: () => (/* reexport */ SearchWithTypeAndLinker),
  fU: () => (/* reexport */ SearchWithTypeAndLinker_SearchWithTypeAndLinkerApi),
  pf: () => (/* reexport */ SessionData),
  pZ: () => (/* reexport */ Signin),
  l4: () => (/* reexport */ Signup),
  oA: () => (/* reexport */ SignupEntity),
  f8: () => (/* reexport */ SplitStrings),
  HZ: () => (/* reexport */ StatefulWidget),
  Y6: () => (/* reexport */ SyncData),
  CE: () => (/* reexport */ TrashTheConcept),
  Sf: () => (/* reexport */ UpdateComposition),
  DJ: () => (/* reexport */ UpdateCompositionLocal),
  tp: () => (/* reexport */ UserBinaryTree),
  Dr: () => (/* reexport */ Validator),
  Ry: () => (/* reexport */ ViewInternalData),
  x7: () => (/* reexport */ ViewInternalDataApi),
  F4: () => (/* reexport */ convertFromConceptToLConcept),
  dp: () => (/* reexport */ convertFromLConceptToConcept),
  HR: () => (/* reexport */ createFormFieldData),
  Yo: () => (/* binding */ dispatchIdEvent),
  sc: () => (/* reexport */ getFromDatabaseWithType),
  D3: () => (/* reexport */ NoIndexDb_getObjectsFromIndexDb),
  Ts: () => (/* binding */ init),
  zN: () => (/* reexport */ recursiveFetch),
  dU: () => (/* reexport */ recursiveFetchNew),
  Xz: () => (/* reexport */ searchLinkMultipleListener),
  _z: () => (/* binding */ sendMessage),
  wK: () => (/* binding */ serviceWorker),
  eD: () => (/* reexport */ NoIndexDb_storeToDatabase),
  KD: () => (/* binding */ subscribedListeners),
  $Q: () => (/* binding */ updateAccessToken)
});

;// CONCATENATED MODULE: ./src/DataStructures/SettingData.ts
class SettingData_SettingData {
    constructor(isOnlineSync) {
        this.id = 1;
        this.isOnlineSync = false;
        this.isOnlineSync = isOnlineSync;
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/BaseUrl.ts
class BaseUrl_BaseUrl {
    static setRandomizer(id) {
        console.log('set randomizer', id);
        this.BASE_RANDOMIZER = id;
    }
    static getRandomizer() {
        return this.BASE_RANDOMIZER;
    }
    // static GetConceptUrl:string = this.BASE_URL + '/api/getConcept';
    static GetConceptUrl() {
        return this.BASE_URL + '/api/getConcept';
    }
    static GetConnectionUrl() {
        return this.BASE_URL + '/api/get-connection-by-id';
    }
    static GetConceptBulkUrl() {
        return this.BASE_URL + '/api/get_concept_bulk';
    }
    static GetConnectionBulkUrl() {
        return this.BASE_URL + '/api/get_connection_bulk';
    }
    static GetAllConceptsOfUserUrl() {
        return this.BASE_URL + '/api/get_all_concepts_of_user';
    }
    static GetAllConnectionsOfUserUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_user';
    }
    static GetAllConnectionsOfCompositionUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_composition';
    }
    static GetAllConnectionsOfCompositionBulkUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_composition_bulk';
    }
    static GetConceptByCharacterValueUrl() {
        return this.BASE_URL + '/api/get_concept_by_character_value';
    }
    static GetConceptByCharacterAndTypeUrl() {
        return this.BASE_URL + '/api/get_concept_by_character_and_type';
    }
    static GetConceptByCharacterAndCategoryUrl() {
        return this.BASE_URL + '/api/get_concept_by_character_and_category';
    }
    static GetConceptByCharacterAndCategoryDirectUrl() {
        return this.BASE_URL + '/api/get_concept_by_character_and_category_direct';
    }
    static GetCharacterByCharacterUrl() {
        return this.BASE_URL + '/api/get_character_by_character';
    }
    static GetAllConceptsByTypeUrl() {
        return this.BASE_URL + '/api/get_all_concepts_by_type';
    }
    static GetAllConnectionsOfConceptUrl() {
        return this.BASE_URL + '/api/get-link-connections';
    }
    static GetAllAiData() {
        return this.BASE_URL + '/api/get-preloaded-concepts';
        // return this.AI_URL + '/api/get_ranked_type_id?inpage=300' || process.env.AI_URL ||  'https://ai.freeschema.com/api/get_ranked_type_id?inpage=300';
    }
    static GetAllPrefetchConnectionsUrl() {
        return this.BASE_URL + '/api/get_all_connections_of_user?inpage=500';
    }
    static GetAllLinkerConnectionOfConceptUrl() {
        return this.BASE_URL + '/api/get-all-linkers-from-concept';
    }
    static GetAllLinkerConnectionToConceptUrl() {
        return this.BASE_URL + '/api/get-all-linkers-to-concept';
    }
    static DeleteConceptUrl() {
        return this.BASE_URL + '/api/delete_concept';
    }
    static RecursiveSearchUrl() {
        return this.BASE_URL + '/api/recursivesearch-concept-connection';
    }
    static SearchLinkMultipleAllApiUrl() {
        return this.BASE_URL + '/api/Connection/search-link-multiple-all-ccs';
    }
    static MakeTheNameInBackendUrl() {
        return this.BASE_URL + '/api/make-name-from-frontend';
    }
    static SearchAllTypeWithLinker(auth = true) {
        if (auth) {
            return this.BASE_URL + '/api/search-all-with-linker-ccs';
        }
        else {
            return this.BASE_URL + '/api-search-compositions-internal-clean-ccs';
        }
    }
    static LoginUrl() {
        return this.BASE_URL + '/api/auth/login';
    }
    static SignupUrl() {
        return this.BASE_URL + '/api/auth/signup';
    }
    static GetCompositionConnectionBetweenTwoConceptsUrl() {
        return this.BASE_URL + '/api/get-composition-connection-between-two-concepts';
    }
    static SearchCompositionsUrl() {
        return this.BASE_URL + '/api/search-compositions';
    }
    static SearchLinkMultipleAll() {
        return this.BASE_URL + '/api/Connection/search-link-multiple-all';
    }
    static CreateSessionId() {
        return this.BASE_URL + '/api/create-session-id-remote';
    }
    static CreateSessionVisitUrl() {
        return this.BASE_URL + '/api/create-remote-session-visit';
    }
    //////////////////////////////////////////////////////////////////////////////
    /////////////////////Api for viewing internal data //////////////////////////
    static ViewInternalDataUrl() {
        return this.BASE_URL + '/api/view-api-internal-data-ccs-id-bulk';
    }
    static SearchInternalWithAuthenticatedCcsUrl() {
        return this.BASE_URL + '/api/search-composition-internal-authenticated-ccs';
    }
    static SearchInternalWithCcsUrl() {
        return this.BASE_URL + '/api-search-compositions-internal-clean-ccs';
    }
    static CreateGhostConceptApiUrl() {
        return BaseUrl_BaseUrl.NODE_URL + '/api/v1/local-concepts';
    }
    static CreateGhostConnectionApiUrl() {
        return BaseUrl_BaseUrl.NODE_URL + '/api/v1/local-connections';
    }
    static GetRealConceptById() {
        return BaseUrl_BaseUrl.NODE_URL + '/api/v1/local-concepts-translate';
    }
    //////////////////////////////////////////////////////////////////////////////
    //////////////// API For Reserved Ids ///////////////////////////////////////
    static GetReservedIdUrl() {
        return this.BASE_URL + '/api/get_reserved_ids';
    }
    static GetReservedConnectionIdUrl() {
        return this.BASE_URL + '/api/get_reserved_connection_ids';
    }
    /////////////////////////////////////////////////////////////////////////////
    ////////////////API For Creating Data //////////////////////////////////////
    static CreateTheTextDataUrl() {
        return this.BASE_URL + '/api/create_text_data';
    }
    static CreateTheCharacterDataUrl() {
        return this.BASE_URL + '/api/create_character_data';
    }
    static CreateTheConceptUrl() {
        return this.BASE_URL + '/api/create_the_concept';
    }
    static CreateTheConnectionUrl() {
        return this.BASE_URL + '/api/create_the_connection';
    }
    static CreateTheConnectionNewUrl() {
        return this.BASE_URL + '/api/create_the_connection_new';
    }
    static MakeTheTypeConceptUrl() {
        return this.BASE_URL + '/api/make_the_type_concept';
    }
    ////////////////////////////////////////////////////////////////////////
    /////////////////////API FOR Deleting Connection //////////////////////
    static DeleteTheConnectionUrl() {
        return this.BASE_URL + '/api/delete_connection';
    }
    //////////////////////////////////////////////////////////////////////
    //////////////////////API FOR FREESCHEMA QUERY //////////////////////
    static FreeschemaQueryUrl() {
        return this.BASE_URL + '/api/freeschema-query';
    }
}
BaseUrl_BaseUrl.BASE_URL = "https://localhost:7053/";
BaseUrl_BaseUrl.AI_URL = "https://ai.freeschema.com";
BaseUrl_BaseUrl.MQTT_URL = '192.168.1.249';
BaseUrl_BaseUrl.NODE_URL = "http://localhost:5001";
BaseUrl_BaseUrl.BASE_APPLICATION = "";
BaseUrl_BaseUrl.BASE_RANDOMIZER = 999;

;// CONCATENATED MODULE: ./src/Database/indexeddb.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * version of the database. If you want to change the database then you must update this version also.
 */
var version = 9;
/**
 * This class will help us store the indexdb  reference in memory and not go back to index db.
 */
class indexeddb_IndexDb {
}
/**
 *
 * @param databaseName not required actually. This is not used you can pass anything.
 * @returns a promise that either resolves or rejects opening the database.
 */
function openDatabase(databaseName) {
    return new Promise(function (resolve, reject) {
        // if the indexdb is already initialized then you do not need to again initialize the db so you can get 
        // from memory.
        if (indexeddb_IndexDb.db) {
            resolve(indexeddb_IndexDb.db);
        }
        // the name of the database is passed here. We are statically passing the dbName with inputs from user
        // the BASE_URL is the api that the framework calls
        // the BASE_APPLICATION is a thing that differentiates an application from another so no two application create
        // and use the same index db.
        let dbName = BaseUrl_BaseUrl.BASE_URL + "_FreeSchema" + BaseUrl_BaseUrl.BASE_APPLICATION;
        // open the database.
        const request = indexedDB.open(dbName, version);
        // in case that the database is not opened then log the error.
        // then we delete the database that is already present with the name
        // then again try to create the database, since this is a temporary database so it might not matter
        // but this is a point that we might need to be careful about.
        // we then reject the promise and report this problem.
        request.onerror = (event) => {
            console.error("Why didn't you allow my web app to use IndexedDB?!", event);
            indexedDB.deleteDatabase(dbName);
            openDatabase(databaseName);
            reject(event);
        };
        // in case that the database is allowed to be opened then we return the database object.
        request.onsuccess = function (event) {
            let target = event.target;
            indexeddb_IndexDb.db = target.result;
            resolve(indexeddb_IndexDb.db);
        };
        // in case that the version is upgraded then we delete all the old databases and then create a new database.
        // version upgrade is a way which we can clean up old databases and its structures.
        request.onupgradeneeded = (event) => {
            let target = event.target;
            let db = target.result;
            let conceptDb = "concept";
            let connectionDb = "connection";
            let settings = "settings";
            console.log("this is the version update for index", version);
            if (db.objectStoreNames.contains(conceptDb)) {
                db.deleteObjectStore(conceptDb);
            }
            if (db.objectStoreNames.contains(connectionDb)) {
                db.deleteObjectStore(connectionDb);
            }
            if (db.objectStoreNames.contains(settings)) {
                db.deleteObjectStore(settings);
            }
            if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
                let objectStore = db.createObjectStore(conceptDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                    // you can do something here after the db has been created.
                };
            }
            if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
                let objectStore = db.createObjectStore(connectionDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                    // you can do something here after the db has been created.
                };
            }
            if (!db.objectStoreNames.contains(settings)) {
                let objectStore = db.createObjectStore(settings, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                    // you can do something here after the db has been created.
                };
            }
            resolve(db);
        };
    });
}
/**
 *
 * @param databaseName name of the database that you want to store data to.
 * @param object any object that can be stored but keep in mind it must follow the convention that we created
 * while creating the datbase.
 * @returns a promise that if a store is successful then the obejct is returned else rejects with the event.
 */
function storeToDatabase(databaseName, object) {
    return new Promise(function (resolve, reject) {
        console.log("this is storing to the database", object);
        openDatabase(databaseName).then((db) => {
            if (object.id != 0) {
                let transaction = db.transaction(databaseName, "readwrite");
                let objStore = transaction.objectStore(databaseName);
                const request = objStore.add(object);
                request.onsuccess = (event) => {
                    resolve(object);
                };
                request.onerror = (event) => {
                    let errorObject = {
                        "status": 400,
                        "ok": false,
                        "message": "Cannot store to the database" + databaseName,
                        "data": event,
                        "body": object
                    };
                    reject(errorObject);
                };
            }
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot store to the database because you cannot open the database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
/**
  *
  * @param databaseName name of the database
  * @param object this is the object that you want to update
  * @returns returns the object if it is updated successfully.
  */
function UpdateToDatabase(databaseName, object) {
    return new Promise(function (resolve, reject) {
        console.log("this is wriring to the database", object);
        openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objStore = transaction.objectStore(databaseName);
            const request = objStore.put(object);
            request.onsuccess = (event) => {
                resolve(object);
            };
            request.onerror = (event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot Update to the database" + databaseName,
                    "data": event,
                    "body": object
                };
                reject(errorObject);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot update to database because you cannot open the database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
/**
 *
 * @returns This returns the last object from the database.
 */
function GetLastSettingsFromDatabase() {
    return new Promise(function (resolve, reject) {
        let databaseName = "settings";
        openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objectStore = transaction.objectStore(databaseName);
            let allobjects = objectStore.getAll();
            allobjects.onsuccess = () => {
                let settingsData = new SettingData_SettingData(false);
                let settingsArray = allobjects.result;
                for (let i = 0; i < settingsArray.length; i++) {
                    settingsData = settingsArray[i];
                    settingsData = settingsData;
                }
                resolve(settingsData);
            };
            allobjects.onerror = (event) => {
                reject(event);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot get last object from database because you cannot open the database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
/**
 *
 * @param object SettingData
 * @returns this will update the indexdb with the ai flag so that another time we do not have to pull
 *  ai data from the api.
 */
function AiUpdateFlag(object) {
    return new Promise(function (resolve, reject) {
        let databaseName = "settings";
        openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objStore = transaction.objectStore(databaseName);
            const request = objStore.put(object);
            request.onsuccess = (event) => {
                resolve(object);
            };
            request.onerror = (event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot update AI flag",
                    "data": event,
                    "body": object
                };
                reject(errorObject);
            };
        })
            .catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot update AI flag because you cannot open the database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
/**
 *  this function will return all the objects that are in the database
 * @param databaseName name of the database
 * @returns all the objects that are in the database
 */
function getObjectsFromIndexDb(databaseName) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            openDatabase(databaseName).then((db) => {
                let ConceptList = [];
                let transaction = db.transaction(databaseName, "readwrite");
                let objectStore = transaction.objectStore(databaseName);
                let allobjects = objectStore.getAll();
                allobjects.onsuccess = () => {
                    const students = allobjects.result;
                    for (let i = 0; i < students.length; i++) {
                        ConceptList.push(students[i]);
                    }
                    resolve(ConceptList);
                };
            }).catch((event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot get objects from the database because you cannot open the database",
                    "data": event
                };
                reject(errorObject);
            });
        });
    });
}
/**
 *
 * @param databaseName name of the database
 * @param id the id that we need to remove from the database (this is the index)
 * @returns an id if the deletion is successful and error with even in case it cannot.
 */
function removeFromDatabase(databaseName, id) {
    return new Promise(function (resolve, reject) {
        openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objectStore = transaction.objectStore(databaseName);
            const request = objectStore.delete(Number(id));
            request.onsuccess = function (event) {
                resolve(id);
            };
            request.onerror = (event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot remove from the database" + databaseName,
                    "data": event
                };
                reject(errorObject);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot remove from the database because you cannot open the database",
                "data": event,
                "body": id
            };
            reject(errorObject);
        });
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/IdentifierFlags.ts
class IdentifierFlags {
}
IdentifierFlags.isTypeLoaded = false;
IdentifierFlags.isCharacterLoaded = false;
IdentifierFlags.isDataLoaded = false;
IdentifierFlags.isLocalDataLoaded = false;
IdentifierFlags.isLocalCharacterLoaded = false;
IdentifierFlags.isLocalTypeLoaded = false;
IdentifierFlags.isConnectionLoaded = false;
IdentifierFlags.isConnectionTypeLoaded = false;
IdentifierFlags.isLocalConnectionLoaded = false;

;// CONCATENATED MODULE: ./src/DataStructures/Node.ts
class Node {
    constructor(key, value, leftNode, rightNode) {
        this.variants = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.currentNode = null;
    }
    addCurrentNode(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        if (passedNode.value.typeId != node.value.typeId) {
            node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        }
        return node;
    }
    addCurrentNodeType(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        let contains = false;
        for (let i = 0; i < node.variants.length; i++) {
            if (node.variants[i].value.id == passedNode.value.id) {
                contains = true;
            }
        }
        if (!contains) {
            node.variants.push(passedNode);
        }
        //node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        return node;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        // else if (node.key == passedNode.key && node.key != ""){
        //     node.currentNode = passedNode;
        // }
        else {
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    return this.rightRotate(node);
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    return this.rightRotate(node);
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    return this.leftRotate(node);
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    return this.leftRotate(node);
                }
            }
        }
        return node;
    }
    checkIfIdsInNode(node, ids, connectionArray, remainingIds) {
        if (node) {
            if (ids.includes(node.key)) {
                connectionArray.push(node.value);
                // remainingIds[node.key] = true;
                let index = ids.indexOf(node.key);
                ids.splice(index, 1);
            }
            if (node.leftNode) {
                this.checkIfIdsInNode(node.leftNode, ids, connectionArray, remainingIds);
            }
            if (node.rightNode) {
                this.checkIfIdsInNode(node.rightNode, ids, connectionArray, remainingIds);
            }
        }
    }
    addCharacterNode(passedNode, node, height) {
        let debugFlag = false;
        if (passedNode.value.characterValue != "") {
            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }
            if (node == null) {
                if (debugFlag) {
                    console.log("equal here", node);
                }
                node = passedNode;
                return node;
            }
            // if (node.key == passedNode.key && node.key != "" ){
            //     if(passedNode.value.characterValue == "Default"){
            //         console.log("equal");
            //     }
            //     node.currentNode = passedNode;
            //     return node;
            // }
            let LeftNode = node.leftNode;
            let RightNode = node.rightNode;
            if (node.key > passedNode.key) {
                if (debugFlag) {
                    console.log("left  here", node);
                }
                node.leftNode = this.addCharacterNode(passedNode, LeftNode, height);
            }
            else if (node.key < passedNode.key) {
                if (debugFlag) {
                    console.log("right here", node, RightNode);
                }
                node.rightNode = this.addCharacterNode(passedNode, RightNode, height);
            }
            // else if (node.key == passedNode.key && node.key != ""){
            //     node.currentNode = passedNode;
            // }
            else {
                if (debugFlag) {
                    console.log("else here", node, passedNode);
                }
                if (node.key == passedNode.key && node.key != "" && node.value.id != passedNode.value.id) {
                    // node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
                    node.addCurrentNodeType(passedNode, node);
                }
                return node;
            }
            node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
            if (debugFlag) {
                console.log("height here", node.height);
            }
            let balancingFactor = this.getBalanceFactor(node);
            if (debugFlag) {
                console.log("balancingFactor here", balancingFactor);
            }
            if (balancingFactor > 1) {
                if (node.leftNode) {
                    if (passedNode.key < node.leftNode.key) {
                        let returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        let returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 2 ", returner);
                        }
                        return returner;
                    }
                }
            }
            if (balancingFactor < -1) {
                if (node.rightNode) {
                    if (passedNode.key > node.rightNode.key) {
                        let returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        let returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here4 ", returner, node);
                        }
                        return returner;
                    }
                }
            }
        }
        else {
            if (debugFlag) {
                console.log("what here", node);
            }
        }
        if (debugFlag) {
            console.log("returning here 6", node);
        }
        return node;
    }
    addTypeNode(passedNode, node, height) {
        let debugFlag = false;
        if (passedNode.value.typeId != 0) {
            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }
            if (node == null) {
                if (debugFlag) {
                    console.log("equal here", node);
                }
                console.log("adding the type node to the tree", passedNode);
                node = passedNode;
                return node;
            }
            let LeftNode = node.leftNode;
            let RightNode = node.rightNode;
            if (node.key > passedNode.key) {
                if (debugFlag) {
                    console.log("left  here", node);
                }
                node.leftNode = this.addTypeNode(passedNode, LeftNode, height);
            }
            else if (node.key < passedNode.key) {
                if (debugFlag) {
                    console.log("right here", node, RightNode);
                }
                node.rightNode = this.addTypeNode(passedNode, RightNode, height);
            }
            else {
                if (debugFlag) {
                    console.log("else here", node, passedNode);
                }
                console.log("adding the type node to the tree down", passedNode);
                if (node.key == passedNode.key && node.key != 0 && node.value.id != passedNode.value.id) {
                    node.addCurrentNodeType(passedNode, node);
                }
                console.log("adding the type node to the tree last", node);
                return node;
            }
            node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
            if (debugFlag) {
                console.log("height here", node.height);
            }
            let balancingFactor = this.getBalanceFactor(node);
            if (debugFlag) {
                console.log("balancingFactor here", balancingFactor);
            }
            if (balancingFactor > 1) {
                if (node.leftNode) {
                    if (passedNode.key < node.leftNode.key) {
                        let returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        let returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 2 ", returner);
                        }
                        return returner;
                    }
                }
            }
            if (balancingFactor < -1) {
                if (node.rightNode) {
                    if (passedNode.key > node.rightNode.key) {
                        let returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        let returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here4 ", returner, node);
                        }
                        return returner;
                    }
                }
            }
        }
        else {
            if (debugFlag) {
                console.log("what here", node);
            }
        }
        if (debugFlag) {
            console.log("returning here 6", node);
        }
        return node;
    }
    rightRotate(y) {
        if (y) {
            let x = y.leftNode;
            if (x) {
                let T2 = x.rightNode;
                y.leftNode = T2;
                x.rightNode = y;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
            // return x;
        }
        return y;
    }
    leftRotate(x) {
        if (x) {
            let y = x.rightNode;
            if (y) {
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
                return y;
            }
            //return y;
        }
        return x;
    }
    getHeight(node) {
        if (node) {
            return node.height;
        }
        return 0;
    }
    getBalanceFactor(N) {
        if (N == null) {
            return 0;
        }
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
    }
    getFromNode(id, node) {
        if (node) {
            if (id == node.key) {
                // if(node.value.count){
                //     node.value.count++ ;
                // }
                // else{
                //     node.value.count = 1;
                // }
                return node;
            }
            else if (id < node.key) {
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > node.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;
    }
    getCharacterFromNode(value, node) {
        if (node) {
            if (value == node.key) {
                return node;
            }
            else if (value < node.key) {
                return this.getCharacterFromNode(value, node.leftNode);
            }
            else if (value > node.key) {
                return this.getCharacterFromNode(value, node.rightNode);
            }
            return node;
        }
        return node;
    }
    getCharacterFromNodeUpdated(value, node) {
        var _a;
        if (node) {
            if (value == node.key || ((_a = node.value) === null || _a === void 0 ? void 0 : _a.typeId) == 51) {
                return node;
            }
            else if (value < node.key) {
                return this.getCharacterFromNode(value, node.leftNode);
            }
            else if (value > node.key) {
                return this.getCharacterFromNode(value, node.rightNode);
            }
            return node;
        }
        return node;
    }
    getFromNodeWithCharacterAndType(value, typeId, node) {
        value = `${value}`;
        if (node) {
            if (value == node.key) {
                if (value == node.value.characterValue && typeId == node.value.typeId) {
                    return node;
                }
                else {
                    for (let i = 0; i < node.variants.length; i++) {
                        if (node.variants[i].value.typeId == typeId) {
                            return node.variants[i];
                        }
                    }
                    // return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
                }
            }
            else if (value < node.key) {
                return this.getFromNodeWithCharacterAndType(value, typeId, node.leftNode);
            }
            else if (value > node.key) {
                return this.getFromNodeWithCharacterAndType(value, typeId, node.rightNode);
            }
            return null;
        }
        return node;
    }
    getFromNodeWithCharacterAndCategory(value, categoryId, node) {
        value = `${value}`;
        if (node) {
            if (value == node.key) {
                if (value == node.value.characterValue && categoryId == node.value.categoryId) {
                    return node;
                }
                else {
                    for (let i = 0; i < node.variants.length; i++) {
                        if (node.variants[i].value.categoryId == categoryId) {
                            return node.variants[i];
                        }
                    }
                    // return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
                }
            }
            else if (value < node.key) {
                return this.getFromNodeWithCharacterAndCategory(value, categoryId, node.leftNode);
            }
            else if (value > node.key) {
                return this.getFromNodeWithCharacterAndCategory(value, categoryId, node.rightNode);
            }
            return null;
        }
        return node;
    }
    removeNode(passedNode, id) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > id) {
            passedNode.leftNode = this.removeNode(passedNode.leftNode, id);
            return passedNode;
        }
        else if (passedNode.key < id) {
            passedNode.rightNode = this.removeNode(passedNode.rightNode, id);
            return passedNode;
        }
        // if(passedNode.variants.length > 0){
        //     if(passedNode.value.id == id ){
        //     }
        //     var newNode = passedNode.variants[0];
        //     if(newNode){
        //         passedNode.value = newNode.value;
        //         passedNode.key = newNode.key;
        //         passedNode.currentNode = newNode.currentNode;
        //         return passedNode;
        //     }
        // }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
            return passedNode;
        }
    }
    removeNodeWithVariants(passedNode, typeIdentifier, conceptId) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > typeIdentifier) {
            passedNode.leftNode = this.removeNodeWithVariants(passedNode.leftNode, typeIdentifier, conceptId);
            return passedNode;
        }
        else if (passedNode.key < typeIdentifier) {
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, typeIdentifier, conceptId);
            return passedNode;
        }
        if (passedNode.variants.length > 0) {
            //condition if the main node is equal to the value
            if (passedNode.value.id == conceptId) {
                let newNode = passedNode.variants[0];
                if (newNode) {
                    passedNode.value = newNode.value;
                    passedNode.key = newNode.key;
                    passedNode.currentNode = newNode.currentNode;
                    passedNode.variants.splice(0, 1);
                    return passedNode;
                }
            }
            else {
                // in the condition that the main node is not equal to the checking value 
                for (let i = 0; i < passedNode.variants.length; i++) {
                    if (conceptId == passedNode.variants[i].value.id) {
                        passedNode.variants.splice(i, 1);
                        return passedNode;
                    }
                }
            }
        }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, immediateSuccessor.key, conceptId);
            return passedNode;
        }
    }
    countNodeBelow(root) {
        if (root == null) {
            return 0;
        }
        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return 1 + this.countNodeBelow(root.leftNode) + this.countNodeBelow(root.rightNode);
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/BinaryCharacterTree.ts
var BinaryCharacterTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class BinaryCharacterTree {
    static waitForDataToLoad() {
        return BinaryCharacterTree_awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (IdentifierFlags.isCharacterLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(BinaryCharacterTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addNodeToTree(node) {
        return BinaryCharacterTree_awaiter(this, void 0, void 0, function* () {
            if (this.characterRoot == null) {
                this.characterRoot = node;
                return this.characterRoot;
            }
            else {
                this.characterRoot = this.characterRoot.addCharacterNode(node, this.characterRoot, this.characterRoot.height);
            }
            return this.characterRoot;
        });
    }
    static removeNodeByCharacter(character, id) {
        return BinaryCharacterTree_awaiter(this, void 0, void 0, function* () {
            if (this.characterRoot) {
                this.characterRoot.removeNodeWithVariants(this.characterRoot, character, id);
            }
        });
    }
    static countNumberOfNodes() {
        if (this.characterRoot) {
            return this.characterRoot.countNodeBelow(this.characterRoot);
        }
        return 0;
    }
    static addConceptToTree(concept) {
        if (concept.characterValue != "") {
            var node = new Node(concept.characterValue, concept, null, null);
            this.addNodeToTree(node);
        }
    }
    static getNodeFromTree(value) {
        if (this.characterRoot) {
            var Node = this.characterRoot.getCharacterFromNode(value, this.characterRoot);
            return Node;
        }
        return this.characterRoot;
    }
    static getNodeFromTreeUpdated(value) {
        if (this.characterRoot) {
            var Node = this.characterRoot.getCharacterFromNode(value, this.characterRoot);
            return Node;
        }
        return this.characterRoot;
    }
    static getCharacterAndTypeFromTree(value, typeId) {
        return BinaryCharacterTree_awaiter(this, void 0, void 0, function* () {
            // try{
            //     var data = await this.waitForDataToLoad();
            // }
            // catch(exception){
            //     return null;
            // }
            if (this.characterRoot) {
                var Node = this.characterRoot.getFromNodeWithCharacterAndType(value, typeId, this.characterRoot);
                return Node;
            }
            return this.characterRoot;
        });
    }
    static getCharacterAndCategoryFromTree(value, categoryId) {
        return BinaryCharacterTree_awaiter(this, void 0, void 0, function* () {
            // try{
            //     var data = await this.waitForDataToLoad();
            // }
            // catch(exception){
            //     return null;
            // }
            if (this.characterRoot) {
                var Node = this.characterRoot.getFromNodeWithCharacterAndCategory(value, categoryId, this.characterRoot);
                return Node;
            }
            return this.characterRoot;
        });
    }
    static removeConceptCharacter(id) {
        if (this.characterRoot) {
            this.characterRoot = this.characterRoot.removeNode(this.characterRoot, id);
        }
    }
}
BinaryCharacterTree.characterRoot = null;

;// CONCATENATED MODULE: ./src/DataStructures/BinaryTree.ts
var BinaryTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class BinaryTree {
    static addNodeToTree(node) {
        if (this.root == null) {
            this.root = node;
            return this.root;
        }
        else {
            this.root = this.root.addNode(node, this.root, this.root.height);
        }
    }
    static waitForDataToLoad() {
        return BinaryTree_awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (IdentifierFlags.isDataLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(BinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addConceptToTree(concept) {
        let node = new Node(concept.id, concept, null, null);
        let characterNode = new Node(concept.characterValue, concept, null, null);
        BinaryCharacterTree.addNodeToTree(characterNode);
        this.addNodeToTree(node);
    }
    static getNodeFromTree(id) {
        return BinaryTree_awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                let Node = this.root.getFromNode(id, this.root);
                return Node;
            }
            return null;
        });
    }
    static removeNodeFromTree(id) {
        return BinaryTree_awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                let event = new Event(`${id}`);
                console.log("this is the fired event after delete", event);
                //  dispatchEvent(event);
                dispatchIdEvent(id);
                this.root = this.root.removeNode(this.root, id);
            }
        });
    }
    static getConceptListFromIds(ids, connectionArray, remainingIds) {
        return BinaryTree_awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                this.root.checkIfIdsInNode(this.root, ids, connectionArray, remainingIds);
            }
        });
    }
    static countNumberOfNodes() {
        if (this.root) {
            return this.root.countNodeBelow(this.root);
        }
        return 0;
    }
}
BinaryTree.root = null;

;// CONCATENATED MODULE: ./src/DataStructures/Concept.ts

class Concept_Concept {
    constructor(id, userId, typeId, categoryId, referentId, characterValue, accessId, isNew = false, entryTimeStamp, updatedTimeStamp, typeCharacter) {
        this.count = 0;
        this.typeCharacter = "";
        this.isComposition = false;
        this.isTemp = false;
        this.isSynced = false;
        // applicationId: number = BaseUrl.BASE_RANDOMIZER;
        this.applicationId = BaseUrl_BaseUrl.getRandomizer();
        this.x = 0;
        this.y = 0;
        this.id = id;
        this.userId = userId;
        this.typeId = typeId;
        this.ghostId = id;
        this.categoryId = categoryId;
        this.referentId = referentId;
        this.characterValue = `${characterValue}`;
        this.accessId = accessId;
        this.typeCharacter = typeCharacter;
        this.type = null;
        this.isNew = isNew;
        this.entryTimeStamp = entryTimeStamp;
        this.updatedTimeStamp = updatedTimeStamp;
        // ConceptsData.AddConcept(this);
    }
    getType() {
        console.log(this.typeId);
    }
}

;// CONCATENATED MODULE: ./src/Services/CreateDefaultConcept.ts

function CreateDefaultConcept_CreateDefaultConcept() {
    let created_on = new Date();
    let updated_on = new Date();
    let concept = new Concept_Concept(0, 0, 0, 0, 0, "0", 0, false, created_on, updated_on, "0");
    return concept;
}

;// CONCATENATED MODULE: ./src/DataStructures/TypeNode.ts
class TypeNode {
    constructor(key, value) {
        this.value = [];
        this.height = 1;
        this.key = key;
        this.value.push(value);
        this.leftNode = null;
        this.rightNode = null;
        this.currentNode = null;
    }
    addType(node, key, value) {
        var _a, _b, _c, _d;
        if (node == null) {
            return new TypeNode(key, value);
        }
        if (key < node.key) {
            node.leftNode = this.addType(node.leftNode, key, value);
        }
        else if (key > node.key) {
            node.rightNode = this.addType(node.rightNode, key, value);
        }
        else {
            // If key already exists, insert unique value into the set
            node.value.push(value);
            return node;
        }
        // Step 2: Update height of this ancestor node
        node.height = Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode)) + 1;
        // Step 3: Get the balance factor to check if this node became unbalanced
        const balance = this.getBalanceFactor(node);
        // Step 4: If the node is unbalanced, perform rotations
        // Left Left Case (Right Rotation)
        if (balance > 1 && key < ((_a = node.leftNode) === null || _a === void 0 ? void 0 : _a.key)) {
            return this.rightRotate(node);
        }
        // Right Right Case (Left Rotation)
        if (balance < -1 && key > ((_b = node.rightNode) === null || _b === void 0 ? void 0 : _b.key)) {
            return this.leftRotate(node);
        }
        // Left Right Case (Left rotation, then right rotation)
        if (balance > 1 && key > ((_c = node.leftNode) === null || _c === void 0 ? void 0 : _c.key)) {
            node.leftNode = this.leftRotate(node.leftNode);
            return this.rightRotate(node);
        }
        // Right Left Case (Right rotation, then left rotation)
        if (balance < -1 && key < ((_d = node.rightNode) === null || _d === void 0 ? void 0 : _d.key)) {
            node.rightNode = this.rightRotate(node.rightNode);
            return this.leftRotate(node);
        }
        return node;
    }
    rightRotate(y) {
        if (y) {
            let x = y.leftNode;
            if (x) {
                let T2 = x.rightNode;
                y.leftNode = T2;
                x.rightNode = y;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
            // return x;
        }
        return y;
    }
    leftRotate(x) {
        if (x) {
            let y = x.rightNode;
            if (y) {
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
                return y;
            }
            //return y;
        }
        return x;
    }
    getHeight(node) {
        if (node) {
            return node.height;
        }
        return 0;
    }
    getBalanceFactor(N) {
        if (N == null) {
            return 0;
        }
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
    }
    getFromNode(id, node) {
        if (node) {
            if (id == node.key) {
                // if(node.value.count){
                //     node.value.count++ ;
                // }
                // else{
                //     node.value.count = 1;
                // }
                return node;
            }
            else if (id < node.key) {
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > node.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;
    }
    removeNodeWithVariants(passedNode, key, conceptId) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > key) {
            passedNode.leftNode = this.removeNodeWithVariants(passedNode.leftNode, key, conceptId);
            return passedNode;
        }
        else if (passedNode.key < key) {
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, key, conceptId);
            return passedNode;
        }
        if (passedNode.value.length > 0) {
            // in the condition that the main node is not equal to the checking value 
            for (let i = 0; i < passedNode.value.length; i++) {
                if (conceptId == passedNode.value[i]) {
                    passedNode.value.splice(i, 1);
                    return passedNode;
                }
            }
        }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, immediateSuccessor.key, conceptId);
            return passedNode;
        }
    }
    countNodeBelow(root) {
        if (root == null) {
            return 0;
        }
        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return 1 + this.countNodeBelow(root.leftNode) + this.countNodeBelow(root.rightNode);
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/BinaryTypeTree.ts
var BinaryTypeTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class BinaryTypeTree {
    // old method having concept as the value.
    // static async addNodeToTree(node:Node){
    //     if(this.typeRoot == null){
    //         this.typeRoot = node;
    //         return this.typeRoot;
    //     }
    //     else{
    //          let event = new CustomEvent(`${node.value.typeId}`, {detail: node.value.id});
    //         // console.log("this is the fired event", event);
    //          dispatchEvent(event);
    //         this.typeRoot = this.typeRoot.addTypeNode(node,this.typeRoot,this.typeRoot.height);
    //     }
    //     return this.typeRoot;
    // }
    // new method with just ids 
    static addType(node) {
        return BinaryTypeTree_awaiter(this, void 0, void 0, function* () {
            if (this.root == null) {
                this.root = node;
                return this.root;
            }
            else {
                let event = new CustomEvent(`${node.key}`, { detail: node.value[0] });
                // console.log("this is the fired event", event);
                //  dispatchEvent(event);
                dispatchIdEvent(node.key, { detail: node.value[0] });
                // console.log("this is the fired event", event);
                this.root = this.root.addType(this.root, node.key, node.value[0]);
            }
            return this.root;
        });
    }
    static addConceptToTree(concept) {
        if (concept.typeId != 0) {
            /// old type 
            // var node: Node = new Node(concept.typeId, concept, null, null);
            // this.addNodeToTree(node);
            // new functionality
            let typeNode = new TypeNode(concept.typeId, concept.id);
            this.addType(typeNode);
        }
    }
    static removeTypeConcept(typeId, id) {
        // old mehtod
        // if(this.typeRoot){
        //     this.typeRoot = this.typeRoot.removeNodeWithVariants(this.typeRoot,typeId,id);
        // }
        // new method
        if (this.root) {
            this.root = this.root.removeNodeWithVariants(this.root, typeId, id);
        }
    }
    // static getNodeFromTree(id:number){
    //     // old method
    //     if(this.typeRoot){
    //         var Node = this.typeRoot.getFromNode(id, this.typeRoot);
    //         return Node;
    //     }
    //     return this.typeRoot;
    // }
    static getNodeFromTreeNew(id) {
        // new method
        if (this.root) {
            let node = this.root.getFromNode(id, this.root);
            return node;
        }
        return this.root;
    }
    /// old method
    // static getTypeVariantsFromTree(typeId:number){
    //         let Node = this.getNodeFromTree(typeId);
    //         var concepts : Concept[] = [];
    //         if(Node){
    //             concepts.push(Node?.value);
    //             for(let i=0; i< Node.variants.length; i++){
    //                 concepts.push(Node.variants[i].value);
    //             }
    //         return concepts;
    //     }
    // }
    //new method
    static getTypeVariantsFromTreeNew(typeId) {
        return BinaryTypeTree_awaiter(this, void 0, void 0, function* () {
            let node = this.getNodeFromTreeNew(typeId);
            let conceptIds = [];
            let concepts = [];
            if (node) {
                conceptIds = node.value;
                for (let i = 0; i < conceptIds.length; i++) {
                    let alreadyExist = false;
                    for (let j = 0; j < concepts.length; j++) {
                        if (concepts[j].id == conceptIds[i]) {
                            alreadyExist = true;
                        }
                    }
                    if (!alreadyExist) {
                        concepts.push(yield GetTheConcept(conceptIds[i]));
                    }
                }
            }
            return concepts;
        });
    }
    static waitForDataToLoad() {
        return BinaryTypeTree_awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (IdentifierFlags.isTypeLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(BinaryTypeTree.checkFlag, 1000, resolve);
        }
    }
    ;
    // static async getTypeVariantsFromTreeWithUserId(typeId:number, userId:number){
    //     var concepts : Concept[] = [];
    //         var Node = this.getNodeFromTree(typeId);
    //         if(Node){
    //             console.log("this is the tree to find", Node.value);
    //             if(Node.value.userId == userId ){
    //                 concepts.push(Node?.value);
    //             }
    //             for(let i=0; i< Node.variants.length; i++){
    //                 if(Node.variants[i].value.userId == userId ){
    //                     var isPresent = false;
    //                     for(let j=0; j<concepts.length;j++){
    //                         if(concepts[j].id == Node.variants[i].value.id){
    //                             isPresent = true;
    //                         }
    //                     }
    //                     if(!isPresent){
    //                         concepts.push(Node.variants[i].value);
    //                     }
    //                 }
    //             }
    //         }
    //     return concepts;
    // }
    // new method
    static getTypeVariantsFromTreeWithUserIdNew(typeId, userId) {
        return BinaryTypeTree_awaiter(this, void 0, void 0, function* () {
            let concepts = [];
            let allConcepts = yield this.getTypeVariantsFromTreeNew(typeId);
            console.log("these are all the concepts", allConcepts);
            for (let i = 0; i < allConcepts.length; i++) {
                if (allConcepts[i].userId == userId) {
                    concepts.push(allConcepts[i]);
                }
            }
            return concepts;
        });
    }
    // static async getTypeVariantsWithCharacterValue( characterValue:string,typeId:number,){
    //     let concept = CreateDefaultConcept();
    //         var Node = this.getNodeFromTree(typeId);
    //         if(Node){
    //             if(Node.value.characterValue == characterValue ){
    //                 concept = Node.value;
    //             }
    //             for(let i=0; i< Node.variants.length; i++){
    //                 if(Node.variants[i].value.characterValue == characterValue ){
    //                     concept = Node.variants[i].value;
    //                 }
    //             }
    //         }
    //     return concept;
    // }
    //new method
    static getTypeVariantsWithCharacterValueNew(characterValue, typeId) {
        return BinaryTypeTree_awaiter(this, void 0, void 0, function* () {
            let allConcepts = yield this.getTypeVariantsFromTreeNew(typeId);
            console.log("this is all the concepts for character", allConcepts);
            let concept = CreateDefaultConcept_CreateDefaultConcept();
            for (let i = 0; i < allConcepts.length; i++) {
                if (allConcepts[i].characterValue == characterValue) {
                    concept = allConcepts[i];
                }
            }
            return concept;
        });
    }
    static countNumberOfNodes() {
        if (this.typeRoot) {
            return this.typeRoot.countNodeBelow(this.typeRoot);
        }
        return 0;
    }
}
BinaryTypeTree.typeRoot = null;
BinaryTypeTree.root = null;

;// CONCATENATED MODULE: ./src/DataStructures/ConceptData.ts
var ConceptData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class ConceptData_ConceptsData {
    constructor() {
        this.name = "conceptsArray";
    }
    static CheckContains(concept) {
        var contains = false;
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].id == concept.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddNpc(id) {
        if (!this.NPC.includes(id)) {
            if (this.NPC.length > 10) {
                this.NPC = [];
            }
            this.NPC.push(id);
        }
    }
    static GetNpc(id) {
        if (this.NPC.includes(id)) {
            return true;
        }
        return false;
    }
    static AddConceptToStorage(concept) {
        if (concept.id > 0) {
            UpdateToDatabase("concept", concept);
        }
    }
    static GetConceptBulkData(ids, connectionArray, remainingIds) {
        return ConceptData_awaiter(this, void 0, void 0, function* () {
            yield BinaryTree.getConceptListFromIds(ids, connectionArray, remainingIds);
        });
    }
    static AddConcept(concept) {
        if (concept.id > 0) {
            // console.log("added the concept to the tree", concept);
            //var contains = this.CheckContains(concept);
            // this.conceptDictionary[concept.id] = concept;
            //    if(contains){
            //   this.RemoveConcept(concept);
            //  }
            //UpdateToDatabase("concept",concept);
            //IndexDbUpdate.UpdateConceptIndexDb(concept);
            BinaryTree.addConceptToTree(concept);
            BinaryTypeTree.addConceptToTree(concept);
            //BinaryCharacterTree.addConceptToTree(concept);
        }
    }
    static AddConceptToMemory(concept) {
        if (concept.id > 0) {
            //var contains = this.CheckContains(concept);
            // this.conceptDictionary[concept.id] = concept;
            //    if(contains){
            //   this.RemoveConcept(concept);
            //  }
            BinaryTree.addConceptToTree(concept);
            BinaryTypeTree.addConceptToTree(concept);
            // BinaryCharacterTree.addConceptToTree(concept);
        }
    }
    static AddConceptTemporary(concept) {
        var contains = this.CheckContains(concept);
        this.conceptDictionary[concept.id] = concept;
        if (contains) {
            this.RemoveConcept(concept);
        }
        this.conceptsArray.push(concept);
    }
    static RemoveConcept(concept) {
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].id == concept.id) {
                this.conceptsArray.splice(i, 1);
            }
        }
        removeFromDatabase("concept", concept.id);
    }
    static GetConcept(id) {
        return ConceptData_awaiter(this, void 0, void 0, function* () {
            var myConcept = CreateDefaultConcept_CreateDefaultConcept();
            var node = yield BinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConcept = node.value;
                if (returnedConcept) {
                    myConcept = returnedConcept;
                    // if(myConcept.count > IndexDbUpdate.MIN_USE_FOR_INDEX_DB){
                    //     IndexDbUpdate.UpdateConceptIndexDb(myConcept);
                    // }
                }
            }
            return myConcept;
        });
    }
    static GetConceptByCharacter(characterValue) {
        return ConceptData_awaiter(this, void 0, void 0, function* () {
            var concept = CreateDefaultConcept_CreateDefaultConcept();
            var Node = BinaryCharacterTree.getNodeFromTree(characterValue);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptByCharacterUpdated(characterValue) {
        return ConceptData_awaiter(this, void 0, void 0, function* () {
            var concept = CreateDefaultConcept_CreateDefaultConcept();
            var Node = BinaryCharacterTree.getNodeFromTree(characterValue);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptByCharacterAndTypeLocal(character_value, typeId) {
        return ConceptData_awaiter(this, void 0, void 0, function* () {
            var concept = CreateDefaultConcept_CreateDefaultConcept();
            //var Node = await BinaryCharacterTree.getCharacterAndTypeFromTree(character_value,typeId);
            concept = yield BinaryTypeTree.getTypeVariantsWithCharacterValueNew(character_value, typeId);
            // if(Node){
            //     concept =  Node.value;
            //     console.log("found the output");
            //     console.log(concept);
            // }
            return concept;
        });
    }
    static GetConceptByCharacterAndCategoryLocal(character_value, categoryId) {
        return ConceptData_awaiter(this, void 0, void 0, function* () {
            var concept = CreateDefaultConcept_CreateDefaultConcept();
            var Node = yield BinaryCharacterTree.getCharacterAndCategoryFromTree(character_value, categoryId);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptsByTypeId(typeId) {
        var myConcept;
        let ConceptList = [];
        myConcept = null;
        for (var i = 0; i < this.conceptsArray.length; i++) {
            if (this.conceptsArray[i].typeId == typeId) {
                ConceptList.push(this.conceptsArray[i]);
            }
        }
        return ConceptList;
    }
    static GetConceptsByTypeIdAndUser(typeId, userId) {
        return ConceptData_awaiter(this, void 0, void 0, function* () {
            let ConceptList = [];
            ConceptList = yield BinaryTypeTree.getTypeVariantsFromTreeWithUserIdNew(typeId, userId);
            return ConceptList;
        });
    }
    static GetBinaryCharacterTree() {
        return BinaryCharacterTree.characterRoot;
    }
    getName() {
        return this.name;
    }
}
ConceptData_ConceptsData.conceptsArray = [];
ConceptData_ConceptsData.NPC = [];
ConceptData_ConceptsData.conceptDictionary = [];

;// CONCATENATED MODULE: ./src/Services/CreateBinaryTreeFromData.ts
var CreateBinaryTreeFromData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function builds up the binary tree on startup from the indexdb
 */
function CreateConceptBinaryTreeFromIndexDb() {
    return CreateBinaryTreeFromData_awaiter(this, void 0, void 0, function* () {
        try {
            let conceptList = yield getObjectsFromIndexDb("concept");
            if (Array.isArray(conceptList)) {
                for (let i = 0; i < conceptList.length; i++) {
                    let concept = conceptList[i];
                    ConceptData_ConceptsData.AddConceptToMemory(concept);
                }
            }
            IdentifierFlags.isDataLoaded = true;
            IdentifierFlags.isCharacterLoaded = true;
            IdentifierFlags.isTypeLoaded = true;
        }
        catch (error) {
            yield DelayFunctionExecution(2000, CreateConceptBinaryTreeFromIndexDb());
            let errorObject = {
                "message": "Cannot create Binary Tree Concept",
                "ok": false,
                "status": 400,
                "data": error
            };
            throw errorObject;
        }
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/Responses/ErrorResponse.ts

/**
 * This is a class that is used to standardize the Response that is sent by FreeSchema.
 * This is done so that we do not have to send a HttpResponse codes.
 */
class FreeSchemaResponse {
    /**
     *
     * @param message this is the message for the response
     * @param ok  this is the status can be true or false boolean in case that request succeds or fails
     * @param status this is the standard http codes 200 for ok, 500 for internal error etc.
     * @param data  this is the standard data that can be anything.
     */
    constructor(message, ok, status, data) {
        this.url = BaseUrl_BaseUrl.BASE_URL;
        this.message = message;
        this.ok = ok;
        this.status = status;
        this.data = data;
    }
    /**
     * This function gets the message of the error
     * @returns
     */
    getMessage() {
        return this.message;
    }
    /**
     *
     * @param message This allows you to set a message variable in the FreeSchemaResponse
     * @returns
     */
    setMessage(message) {
        this.message = message;
        return this;
    }
    /**
     *
     * @returns status code of the FreeSchemaResponse
     */
    getStatus() {
        return this.status;
    }
    /**
     *
     * @param status standard http error codes (200 ok , 401 unauthorized, 500 internal server error etc.)
     * @returns
     */
    setStatus(status) {
        this.status = status;
        return this;
    }
    /**
     *
     * @returns returns the data for the request
     */
    getData() {
        return this.data;
    }
    /**
     *
     * @param data any type of data can be given here
     * @returns FreeSchemaReponse
     */
    setData(data) {
        this.data = data;
        return this;
    }
    /**
     *
     * @returns the status of the FreeSchemaReponse (either true or false)
     */
    getOk() {
        return this.ok;
    }
    /**
     *
     * @param status if the status is true then the response was successful else the success was not achieved.
     * @returns returns the FreeSchemaResponse
     */
    setOk(ok) {
        this.ok = ok;
        return this;
    }
    /**
     *
     * @returns the url that caused the error
     */
    getUrl() {
        return this.url;
    }
    /**
     *
     * @param url the url from which the error or response originates
     * @returns FreeSchemaResponse
     */
    setUrl(url) {
        this.url = url;
        return this;
    }
}

;// CONCATENATED MODULE: ./src/Services/Common/ErrorPosting.ts

function ErrorPosting_HandleHttpError(response) {
    if (response.status == 401 || response.status == 406) {
        let errorResponse = new FreeSchemaResponse(response.statusText, false, response.status, "");
        errorResponse.setUrl(response.url);
        throw errorResponse;
    }
    else if (response.status == 500) {
        let errorResponse = new FreeSchemaResponse(response.statusText, false, response.status, "");
        errorResponse.setUrl(response.url);
        throw errorResponse;
    }
}
function HandleInternalError(error, url = "") {
    if (error.status) {
        let errorResponse = new FreeSchemaResponse(error.message, false, error.status, error.stack);
        errorResponse.setUrl(url);
        throw errorResponse;
    }
    else {
        let errorResponse = new FreeSchemaResponse(error.message, false, 500, error.stack);
        errorResponse.setUrl(url);
        throw errorResponse;
    }
    throw error;
}

;// CONCATENATED MODULE: ./src/DataStructures/Security/TokenStorage.ts
class TokenStorage {
}
TokenStorage.BearerAccessToken = "";

;// CONCATENATED MODULE: ./src/Services/Security/GetRequestHeader.ts

function GetRequestHeader_GetRequestHeader(contentType = 'application/json', Accept = 'application/json') {
    var headers = {
        'Content-Type': contentType,
        'Authorization': "Bearer " + TokenStorage.BearerAccessToken,
        'Accept': Accept,
    };
    return headers;
}
function GetRequestHeaderWithAuthorization(contentType = 'application/json', token = "", Accept = 'application/json') {
    if (token == "") {
        token = TokenStorage.BearerAccessToken;
    }
    var headers = {
        'Content-Type': contentType,
        'Authorization': "Bearer " + token,
        'Accept': Accept
    };
    return headers;
}
function GetOnlyTokenHeader() {
    let token = TokenStorage.BearerAccessToken;
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + token);
    return myHeaders;
}

;// CONCATENATED MODULE: ./src/Api/Search/SearchLinkMultipleApi.ts
var SearchLinkMultipleApi_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function SearchLinkMultipleApi(searchQuery_1) {
    return SearchLinkMultipleApi_awaiter(this, arguments, void 0, function* (searchQuery, token = "") {
        var header = GetRequestHeaderWithAuthorization("application/json", token);
        const queryUrl = BaseUrl_BaseUrl.SearchLinkMultipleAllApiUrl();
        const body = JSON.stringify(searchQuery);
        try {
            const response = yield fetch(queryUrl, {
                method: 'POST',
                headers: header,
                body: body
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                ErrorPosting_HandleHttpError(response);
                console.log("This is the searching multiple error", response.status);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching multiple error", ex);
            HandleInternalError(ex, queryUrl);
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/SplitStrings.ts
function SplitStrings(typeString) {
    const pos = typeString.lastIndexOf("_");
    let SplittedStrings = [];
    if (pos > 0) {
        let rest = typeString.substring(0, pos);
        let last = typeString.substring(pos + 1, typeString.length);
        SplittedStrings = [rest, last];
    }
    else {
        SplittedStrings = [typeString];
    }
    return SplittedStrings;
}

;// CONCATENATED MODULE: ./src/Api/GetAllConceptsByType.ts
var GetAllConceptsByType_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetAllConceptsByType(type, userId) {
    return GetAllConceptsByType_awaiter(this, void 0, void 0, function* () {
        try {
            var urlencoded = new URLSearchParams();
            urlencoded.append("type", type);
            urlencoded.append("user_id", userId.toString());
            var header = GetRequestHeader_GetRequestHeader('application/x-www-form-urlencoded');
            const response = yield fetch(BaseUrl_BaseUrl.GetAllConceptsByTypeUrl(), {
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if (response.ok) {
                const result = yield response.json();
                for (var i = 0; i < result.length; i++) {
                    ConceptData_ConceptsData.AddConcept(result[i]);
                }
            }
            else {
                console.log("GetAllConceptsByType error", response.status);
                ErrorPosting_HandleHttpError(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('GetAllConceptsByType error message: ', error.message);
            }
            else {
                console.log('GetAllConceptsByType unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetAllConceptsByTypeUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/Connection.ts


class Connection_Connection {
    constructor(id = 0, ofTheConceptId, toTheConceptId, userId, typeId, orderId, accessId) {
        this.count = 0;
        this.isTemp = false;
        this.toUpdate = false;
        // applicationId: number = BaseUrl.BASE_RANDOMIZER;
        this.applicationId = BaseUrl_BaseUrl.getRandomizer();
        this.type = CreateDefaultConcept_CreateDefaultConcept();
        this.ofConcept = CreateDefaultConcept_CreateDefaultConcept();
        this.toConcept = CreateDefaultConcept_CreateDefaultConcept();
        this.id = id;
        this.ofTheConceptId = ofTheConceptId;
        this.toTheConceptId = toTheConceptId;
        this.userId = userId;
        this.typeId = typeId;
        this.ghostId = id;
        this.orderId = orderId;
        this.accessId = accessId;
        this.entryTimeStamp = new Date();
        this.terminationDateTime = new Date();
        this.localSyncTime = new Date();
        this.typeCharacter = "";
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/ConnectionBinaryTree/ConnectionNode.ts

class ConnectionNode {
    constructor(key, value, leftNode, rightNode) {
        this.variants = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.currentNode = null;
    }
    addCurrentNode(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        if (passedNode.value.typeId != node.value.typeId) {
            node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        }
        return node;
    }
    addCurrentNodeType(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        let contains = false;
        if (passedNode.value.id == node.value.id) {
            contains = true;
        }
        for (let i = 0; i < node.variants.length; i++) {
            if (node.variants[i].value.id == passedNode.value.id) {
                contains = true;
            }
        }
        if (!contains) {
            node.variants.push(passedNode);
        }
        //node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        return node;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        // else if (node.key == passedNode.key && node.key != ""){
        //     node.currentNode = passedNode;
        // }
        else {
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    return this.rightRotate(node);
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    return this.rightRotate(node);
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    return this.leftRotate(node);
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    return this.leftRotate(node);
                }
            }
        }
        return node;
    }
    addTypeNode(passedNode, node, height) {
        let debugFlag = false;
        if (passedNode.value.typeId != 0) {
            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }
            if (node == null) {
                if (debugFlag) {
                    console.log("equal here", node);
                }
                node = passedNode;
                return node;
            }
            let LeftNode = node.leftNode;
            let RightNode = node.rightNode;
            if (node.key > passedNode.key) {
                if (debugFlag) {
                    console.log("left  here", node);
                }
                node.leftNode = this.addTypeNode(passedNode, LeftNode, height);
            }
            else if (node.key < passedNode.key) {
                if (debugFlag) {
                    console.log("right here", node, RightNode);
                }
                node.rightNode = this.addTypeNode(passedNode, RightNode, height);
            }
            else {
                if (debugFlag) {
                    console.log("else here", node, passedNode);
                }
                if (node.key == passedNode.key && node.key != 0) {
                    node.addCurrentNodeType(passedNode, node);
                }
                return node;
            }
            node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
            if (debugFlag) {
                console.log("height here", node.height);
            }
            let balancingFactor = this.getBalanceFactor(node);
            if (debugFlag) {
                console.log("balancingFactor here", balancingFactor);
            }
            if (balancingFactor > 1) {
                if (node.leftNode) {
                    if (passedNode.key < node.leftNode.key) {
                        let returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        let returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 2 ", returner);
                        }
                        return returner;
                    }
                }
            }
            if (balancingFactor < -1) {
                if (node.rightNode) {
                    if (passedNode.key > node.rightNode.key) {
                        let returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        let returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here4 ", returner, node);
                        }
                        return returner;
                    }
                }
            }
        }
        else {
            if (debugFlag) {
                console.log("what here", node);
            }
        }
        if (debugFlag) {
            console.log("returning here 6", node);
        }
        return node;
    }
    rightRotate(y) {
        if (y) {
            let x = y.leftNode;
            if (x) {
                let T2 = x.rightNode;
                y.leftNode = T2;
                x.rightNode = y;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
            // return x;
        }
        return y;
    }
    leftRotate(x) {
        if (x) {
            let y = x.rightNode;
            if (y) {
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
                return y;
            }
            //return y;
        }
        return x;
    }
    getHeight(node) {
        if (node) {
            return node.height;
        }
        return 0;
    }
    getBalanceFactor(N) {
        if (N == null) {
            return 0;
        }
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
    }
    getFromNode(id, node) {
        if (node) {
            if (id == node.key) {
                if (node.value.count) {
                    node.value.count++;
                }
                else {
                    node.value.count = 1;
                }
                return node;
            }
            else if (id < node.key) {
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > node.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;
    }
    getCharacterFromNode(value, node) {
        if (node) {
            if (value == node.key) {
                return node;
            }
            else if (value < node.key) {
                return this.getCharacterFromNode(value, node.leftNode);
            }
            else if (value > node.key) {
                return this.getCharacterFromNode(value, node.rightNode);
            }
            return node;
        }
        return node;
    }
    checkIfIdsInNode(node, ids, connectionArray, remainingIds) {
        if (node) {
            if (ids.includes(node.key)) {
                connectionArray.push(node.value);
                //remainingIds[node.key] = true;
                let index = ids.indexOf(node.key);
                ids.splice(index, 1);
            }
            if (node.leftNode) {
                this.checkIfIdsInNode(node.leftNode, ids, connectionArray, remainingIds);
            }
            if (node.rightNode) {
                this.checkIfIdsInNode(node.rightNode, ids, connectionArray, remainingIds);
            }
        }
    }
    traverse(node) {
        let count = 0;
        if (node) {
            count = count + 1;
            if (node === null || node === void 0 ? void 0 : node.leftNode) {
                count += this.traverse(node.leftNode);
            }
            if (node.rightNode) {
                count += this.traverse(node.rightNode);
            }
        }
        return count;
    }
    removeNode(passedNode, id) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > id) {
            passedNode.leftNode = this.removeNode(passedNode.leftNode, id);
            return passedNode;
        }
        else if (passedNode.key < id) {
            passedNode.rightNode = this.removeNode(passedNode.rightNode, id);
            return passedNode;
        }
        // if(passedNode.variants.length > 0){
        //     if(passedNode.value.id == id ){
        //     }
        //     let newNode = passedNode.variants[0];
        //     if(newNode){
        //         passedNode.value = newNode.value;
        //         passedNode.key = newNode.key;
        //         passedNode.currentNode = newNode.currentNode;
        //         return passedNode;
        //     }
        // }
        /**
         * This is dispatched incase the connection is deleted and others are listening
         */
        let event = new Event(`${passedNode.value.ofTheConceptId}`);
        // dispatchEvent(event);
        dispatchIdEvent(passedNode.value.ofTheConceptId);
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
            return passedNode;
        }
    }
    removeNodeWithVariants(passedNode, typeIdentifier, conceptId) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > typeIdentifier) {
            passedNode.leftNode = this.removeNodeWithVariants(passedNode.leftNode, typeIdentifier, conceptId);
            return passedNode;
        }
        else if (passedNode.key < typeIdentifier) {
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, typeIdentifier, conceptId);
            return passedNode;
        }
        if (passedNode.variants.length > 0) {
            //condition if the main node is equal to the value
            if (passedNode.value.id == conceptId) {
                let newNode = passedNode.variants[0];
                if (newNode) {
                    passedNode.value = newNode.value;
                    passedNode.key = newNode.key;
                    passedNode.currentNode = newNode.currentNode;
                    passedNode.variants.splice(0, 1);
                    return passedNode;
                }
            }
            else {
                // in the condition that the main node is not equal to the checking value 
                for (let i = 0; i < passedNode.variants.length; i++) {
                    if (conceptId == passedNode.variants[i].value.id) {
                        passedNode.variants.splice(i, 1);
                        return passedNode;
                    }
                }
            }
        }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, immediateSuccessor.key, conceptId);
            return passedNode;
        }
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/ConnectionBinaryTree/ConnectionBinaryTree.ts
var ConnectionBinaryTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ConnectionBinaryTree {
    static addNodeToTree(node) {
        if (this.connectionroot == null) {
            this.connectionroot = node;
            return this.connectionroot;
        }
        else {
            this.connectionroot = this.connectionroot.addNode(node, this.connectionroot, this.connectionroot.height);
        }
    }
    static addConnectionToTree(connection) {
        let node = new ConnectionNode(connection.id, connection, null, null);
        this.addNodeToTree(node);
    }
    static traverse() {
        var _a;
        return (_a = this.connectionroot) === null || _a === void 0 ? void 0 : _a.traverse(this.connectionroot);
    }
    static waitForDataToLoad() {
        return ConnectionBinaryTree_awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (IdentifierFlags.isConnectionLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(ConnectionBinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static removeNodeFromTree(id) {
        return ConnectionBinaryTree_awaiter(this, void 0, void 0, function* () {
            if (this.connectionroot) {
                this.connectionroot = this.connectionroot.removeNode(this.connectionroot, id);
            }
        });
    }
    static getNodeFromTree(id) {
        return ConnectionBinaryTree_awaiter(this, void 0, void 0, function* () {
            if (this.connectionroot) {
                let Node = this.connectionroot.getFromNode(id, this.connectionroot);
                return Node;
            }
            return this.connectionroot;
        });
    }
    static getConnectionListFromIds(ids, connectionArray, remainingIds) {
        return ConnectionBinaryTree_awaiter(this, void 0, void 0, function* () {
            if (this.connectionroot) {
                this.connectionroot.checkIfIdsInNode(this.connectionroot, ids, connectionArray, remainingIds);
            }
        });
    }
}
ConnectionBinaryTree.connectionroot = null;

;// CONCATENATED MODULE: ./src/DataStructures/ConnectionBinaryTree/NodePrimitive.ts
class NodePrimitive {
    constructor(key, value, leftNode, rightNode) {
        this.key = "";
        this.value = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
    getFromNode(id, node) {
        if (node) {
            if (id == node.key) {
                return node;
            }
            else if (id < node.key) {
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > node.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;
    }
    rightRotate(y) {
        if (y) {
            let x = y.leftNode;
            if (x) {
                let T2 = x.rightNode;
                y.leftNode = T2;
                x.rightNode = y;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
            // return x;
        }
        return y;
    }
    leftRotate(x) {
        if (x) {
            let y = x.rightNode;
            if (y) {
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
                return y;
            }
            //return y;
        }
        return x;
    }
    getHeight(node) {
        if (node) {
            return node.height;
        }
        return 0;
    }
    getBalanceFactor(N) {
        if (N == null) {
            return 0;
        }
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
    }
    removeNode(passedNode, id) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > id) {
            passedNode.leftNode = this.removeNode(passedNode.leftNode, id);
            return passedNode;
        }
        else if (passedNode.key < id) {
            passedNode.rightNode = this.removeNode(passedNode.rightNode, id);
            return passedNode;
        }
        // if(passedNode.variants.length > 0){
        //     if(passedNode.value.id == id ){
        //     }
        //     var newNode = passedNode.variants[0];
        //     if(newNode){
        //         passedNode.value = newNode.value;
        //         passedNode.key = newNode.key;
        //         passedNode.currentNode = newNode.currentNode;
        //         return passedNode;
        //     }
        // }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            let immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
            return passedNode;
        }
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/ConnectionBinaryTree/ConnectionOfNode.ts

class ConnectionOfNode extends NodePrimitive {
    constructor(key, value, leftNode, rightNode) {
        super(key, value, leftNode, rightNode);
        this.key = "";
        this.value = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            // let event = new Event(`${passedNode.key}`);
            // dispatchEvent(event);
            return node;
        }
        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        else {
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    let returner = this.rightRotate(node);
                    return returner;
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    let returner = this.rightRotate(node);
                    return returner;
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    let returner = this.leftRotate(node);
                    return returner;
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    let returner = this.leftRotate(node);
                    return returner;
                }
            }
        }
        return node;
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/ConnectionBinaryTree/ConnectionOfTheTree.ts
var ConnectionOfTheTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * This is a binary tree that is used to store the reference to the main connection of the concept.
 */
class ConnectionOfTheTree {
    static CreateCompositionKey(ofTheConceptId, typeId) {
        return ofTheConceptId;
    }
    static GetConnectionByOfTheConceptAndTypeId(ofTheConceptId, typeId) {
        let key = this.CreateCompositionKey(ofTheConceptId, typeId);
        if (this.node) {
            let existingNode = this.node.getFromNode(key, this.node);
            if (existingNode) {
                return existingNode.value;
            }
        }
        return null;
    }
    /**
     * This function lets you add a connection by composite key with of the concept id and type id.
     * This function checks if the connection already exists and then updates in the case that it does not
     * If the connection of the concept id and type id combination is encountered first time then a node is created.
     * @param connection connection that needs to be added.
     */
    static addConnection(connection) {
        if (connection.id > 0) {
            let key = this.CreateCompositionKey(connection.ofTheConceptId, connection.typeId);
            console.log('key this.node', key, this.node);
            if (this.node) {
                let existingNode = this.node.getFromNode(key, this.node);
                console.log(existingNode, 'existing node');
                if (existingNode) {
                    let connectionList = existingNode === null || existingNode === void 0 ? void 0 : existingNode.value;
                    if (connectionList.length == 0) {
                        existingNode.value = [];
                    }
                    if (!connectionList.includes(connection.id)) {
                        connectionList.push(connection.id);
                    }
                }
                else {
                    let list = [];
                    list.push(connection.id);
                    let connectionNode = new ConnectionOfNode(key, list, null, null);
                    this.addNodeToTree(connectionNode);
                }
            }
            else {
                let list = [];
                list.push(connection.id);
                let connectionNode = new ConnectionOfNode(key, list, null, null);
                this.addNodeToTree(connectionNode);
            }
            let event = new Event(`${key}`);
            // console.log("dispatched the of the concecpt event", event);
            // dispatchEvent(event);
            dispatchIdEvent(key);
        }
        else {
            console.log("cannot insert key id with  n 0 to the connection tree", connection);
        }
    }
    /**
     * This is a function to add the connectionNode to the existing tree
     * @param connectionOfNode This is the node that needs to be added to the tree.
     * @returns ConnectionOfNode
     */
    static addNodeToTree(connectionOfNode) {
        return ConnectionOfTheTree_awaiter(this, void 0, void 0, function* () {
            if (this.node == null) {
                this.node = connectionOfNode;
                // let event = new Event(`${this.node.key}`);
                // console.log("dispatched the of the concecpt event", event);
                // dispatchEvent(event);
                return this.node;
            }
            else {
                this.node = this.node.addNode(connectionOfNode, this.node, this.node.height);
            }
            return this.node;
        });
    }
    static removeNodeFromTree(id) {
        return ConnectionOfTheTree_awaiter(this, void 0, void 0, function* () {
            if (this.node) {
                this.node = this.node.removeNode(this.node, id);
            }
        });
    }
}
ConnectionOfTheTree.node = null;

;// CONCATENATED MODULE: ./src/DataStructures/ConnectionBinaryTree/ConnectionTypeNode.ts

class ConnectionTypeNode extends NodePrimitive {
    constructor(key, value, leftNode, rightNode) {
        super(key, value, leftNode, rightNode);
        this.key = "";
        this.value = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        else {
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    let returner = this.rightRotate(node);
                    return returner;
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    let returner = this.rightRotate(node);
                    return returner;
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    let returner = this.leftRotate(node);
                    return returner;
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    let returner = this.leftRotate(node);
                    return returner;
                }
            }
        }
        return node;
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/ConnectionBinaryTree/ConnectionTypeTree.ts
var ConnectionTypeTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class ConnectionTypeTree {
    static CreateCompositionKey(typeId) {
        return typeId;
    }
    /**
     * This is a function to add the connectionNode to the existing tree
     * @param connectionOfNode This is the node that needs to be added to the tree.
     * @returns ConnectionOfNode
     */
    static addNodeToTree(connectionOfNode) {
        return ConnectionTypeTree_awaiter(this, void 0, void 0, function* () {
            if (this.connectionTypeRoot == null) {
                this.connectionTypeRoot = connectionOfNode;
                return this.connectionTypeRoot;
            }
            else {
                this.connectionTypeRoot = this.connectionTypeRoot.addNode(connectionOfNode, this.connectionTypeRoot, this.connectionTypeRoot.height);
            }
            return this.connectionTypeRoot;
        });
    }
    /**
     * This function lets you add a connection by composite key with of the concept id and type id.
     * This function checks if the connection already exists and then updates in the case that it does not
     * If the connection of the concept id and type id combination is encountered first time then a node is created.
     * @param connection connection that needs to be added.
     */
    static addConnectionToTree(connection) {
        if (connection.id > 0) {
            let key = this.CreateCompositionKey(connection.typeId);
            if (this.connectionTypeRoot) {
                // let event = new Event(`${key}`);
                // // console.log("dispatched the of the concecpt event", event);
                // dispatchEvent(event);
                let existingNode = this.connectionTypeRoot.getFromNode(key, this.connectionTypeRoot);
                if (existingNode) {
                    let connectionList = existingNode === null || existingNode === void 0 ? void 0 : existingNode.value;
                    if (connectionList.length == 0) {
                        existingNode.value = [];
                    }
                    if (!connectionList.includes(connection.id)) {
                        connectionList.push(connection.id);
                    }
                }
                else {
                    let list = [];
                    list.push(connection.id);
                    let connectionNode = new ConnectionTypeNode(key, list, null, null);
                    this.addNodeToTree(connectionNode);
                }
            }
            else {
                let list = [];
                list.push(connection.id);
                let connectionNode = new ConnectionTypeNode(key, list, null, null);
                this.addNodeToTree(connectionNode);
            }
        }
        else {
            console.log("cannot insert key id with  n 0 to the connection tree", connection);
        }
    }
    // static async removeNodeFromTree(id:number){
    //     if(this.connectionTypeRoot){
    //         this.connectionTypeRoot = this.connectionTypeRoot.removeNode(this.connectionTypeRoot,id);
    //     }
    //   }
    // commented
    // static getNodeFromTree(id:number){
    //     if(this.connectionTypeRoot){
    //         let Node = this.connectionTypeRoot.getFromNode(id, this.connectionTypeRoot);
    //         return Node;
    //     }
    //     return this.connectionTypeRoot;
    // }
    static GetConnectionByOfTheConceptAndTypeId(ofTheConceptId, typeId) {
        let key = this.CreateCompositionKey(typeId);
        if (this.connectionTypeRoot) {
            let existingNode = this.connectionTypeRoot.getFromNode(key, this.connectionTypeRoot);
            if (existingNode) {
                return existingNode.value;
            }
        }
        return null;
    }
}
ConnectionTypeTree.connectionTypeRoot = null;

;// CONCATENATED MODULE: ./src/DataStructures/ConnectionData.ts
var ConnectionData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class ConnectionData {
    constructor() {
        this.name = "Connection Array";
    }
    static CheckContains(connection) {
        let contains = false;
        for (let i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connection.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConnectionToStorage(connection) {
        UpdateToDatabase("connection", connection);
    }
    static AddConnection(connection) {
        //    var contains = this.CheckContains(connection);
        //     if(contains){
        //         this.RemoveConnection(connection);
        //     }
        //     if(connection.id != 0 || connection.isTemp){
        //         storeToDatabase("connection",connection);
        //     }
        //     this.connectionArray.push(connection);
        // if(!connection.isTemp){
        //UpdateToDatabase("connection", connection);
        console.log('testing add connection', connection);
        ConnectionBinaryTree.addConnectionToTree(connection);
        ConnectionTypeTree.addConnectionToTree(connection);
        ConnectionOfTheTree.addConnection(connection);
    }
    static AddConnectionToMemory(connection) {
        if (!connection.isTemp) {
            ConnectionBinaryTree.addConnectionToTree(connection);
            ConnectionTypeTree.addConnectionToTree(connection);
            ConnectionOfTheTree.addConnection(connection);
        }
    }
    static AddToDictionary(connection) {
        this.connectionDictionary[connection.id] = connection;
    }
    static RemoveConnection(connection) {
        //    for(var i=0; i<this.connectionArray.length; i++){
        //     if(this.connectionArray[i].id == connection.id){
        //         this.connectionArray.splice(i, 1);
        //     }
        //    }
        if (connection.id != 0) {
            removeFromDatabase("connection", connection.id);
            ConnectionBinaryTree.removeNodeFromTree(connection.id);
            // ConnectionTypeTree.removeTypeConcept(connection.typeId, connection.id);
            ConnectionOfTheTree.removeNodeFromTree(connection.id);
        }
    }
    static GetConnectionTypeOfTree() {
        ConnectionOfTheTree.node;
    }
    static GetConnectionByOfTheConceptAndType(ofTheConceptId, typeId) {
        return ConnectionData_awaiter(this, void 0, void 0, function* () {
            if (serviceWorker) {
                const res = yield sendMessage("ConnectionData__GetConnectionByOfTheConceptAndType", { ofTheConceptId, typeId });
                console.log("data received from sw", res);
                return res.data;
            }
            let connections = ConnectionOfTheTree.GetConnectionByOfTheConceptAndTypeId(ofTheConceptId, typeId);
            if (connections) {
                return connections;
            }
            return [];
        });
    }
    static GetConnectionByOfType(ofTheConceptId, typeId) {
        let connections = ConnectionTypeTree.GetConnectionByOfTheConceptAndTypeId(ofTheConceptId, typeId);
        if (connections) {
            return connections;
        }
        return [];
    }
    static GetConnectionTree() {
        return ConnectionBinaryTree.connectionroot;
    }
    static GetConnectionTypeTree() {
        return ConnectionTypeTree.connectionTypeRoot;
    }
    static GetConnectionBulkData(ids, connectionArray, remainingIds) {
        return ConnectionData_awaiter(this, void 0, void 0, function* () {
            yield ConnectionBinaryTree.getConnectionListFromIds(ids, connectionArray, remainingIds);
        });
    }
    static GetConnection(id) {
        return ConnectionData_awaiter(this, void 0, void 0, function* () {
            if (serviceWorker) {
                const res = yield sendMessage('ConnectionData__GetConnection', { id });
                console.log('data received from sw', res);
                return res.data;
            }
            //    var  myConcept: Connection|null;
            //    myConcept = null;
            //     for(var i=0; i<this.connectionArray.length; i++){
            //         if(this.connectionArray[i].id == id){
            //             myConcept = this.connectionArray[i];
            //         }
            //     }
            //     return myConcept;
            let myConnection = new Connection_Connection(0, 0, 0, 0, 0, 0, 0);
            let node = yield ConnectionBinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                let returnedConcept = node.value;
                if (returnedConcept) {
                    myConnection = returnedConcept;
                    //if(myConnection.count > IndexDbUpdate.MIN_USE_FOR_INDEX_DB){
                    // IndexDbUpdate.UpdateConnectionIndexDb(myConnection);
                    //}
                }
            }
            // if(myConcept.id == 0 || myConcept == null){
            //     for(var i=0; i<this.conceptsArray.length; i++){
            //         if(this.conceptsArray[i].id == id){
            //             myConcept = this.conceptsArray[i];
            //         }
            //     }
            // }
            return myConnection;
        });
    }
    // commented
    static GetConnectionsOfCompositionLocal(id) {
        return ConnectionData_awaiter(this, void 0, void 0, function* () {
            if (serviceWorker) {
                const res = yield sendMessage("ConnectionData__GetConnectionsOfCompositionLocal", { id });
                console.log("data received from sw", res);
                return res.data;
            }
            let connections = [];
            let connectionIds = [];
            connectionIds = ConnectionData.GetConnectionByOfType(id, id);
            for (let i = 0; i < connectionIds.length; i++) {
                let conn = yield ConnectionBinaryTree.getNodeFromTree(connectionIds[i]);
                if (conn) {
                    connections.push(conn.value);
                }
            }
            return connections;
            //let node = await ConnectionTypeTree.getNodeFromTree(id);
            // if(node?.value){
            //     let returnedConnection = node.value;
            //     if(returnedConnection){
            //         let myConnection = returnedConnection as Connection;
            //         connections.push(myConnection);
            //         for(let i=0; i<node.variants.length;i++){
            //             connections.push(node.variants[i].value);
            //         }
            //     }
            // }
            //return connections;
        });
    }
    static GetConnectionsOfConcept(id) {
        return ConnectionData_awaiter(this, void 0, void 0, function* () {
            let connectionIds = [];
            let connections = [];
            connectionIds = yield ConnectionData.GetConnectionByOfTheConceptAndType(id, id);
            for (let i = 0; i < connectionIds.length; i++) {
                let conn = yield ConnectionBinaryTree.getNodeFromTree(connectionIds[i]);
                if (conn) {
                    connections.push(conn.value);
                }
            }
            return connections;
        });
    }
    getName() {
        return this.name;
    }
}
ConnectionData.connectionArray = [];
ConnectionData.connectionDictionary = [];

;// CONCATENATED MODULE: ./src/Api/GetConceptBulk.ts
var GetConceptBulk_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function takes in a list of ids and returns a list of concepts . This uses local memory to find concepts
 * namely in the concept binary tree. If it could not find the concepts in local memory then it fetches those from
 * the api. The fetched concepts from api are then stored in the memory for further use in future.
 * @param conceptIds list of concept ids that need to be fetched
 * @returns list of concepts
 */
function GetConceptBulk(passedConcepts) {
    return GetConceptBulk_awaiter(this, void 0, void 0, function* () {
        let result = [];
        let setTime = new Date().getTime();
        // let conceptIds = passedConcepts.filter((value, index, self) => {
        //   return self.indexOf(value) === index;
        // });
        let conceptIds = Array.from(new Set(passedConcepts));
        try {
            if (conceptIds.length > 0) {
                let bulkConceptFetch = [];
                for (let i = 0; i < conceptIds.length; i++) {
                    let conceptUse = yield ConceptData_ConceptsData.GetConcept(conceptIds[i]);
                    if (conceptUse.id == 0) {
                        bulkConceptFetch.push(conceptIds[i]);
                    }
                }
                // let newAlgoTime = new Date().getTime();
                //let remainingIds:any = {};
                // for(let i=0; i< conceptIds.length; i++){
                //     remainingIds[conceptIds[i]] = false;
                // }
                //await ConceptsData.GetConceptBulkData(conceptIds, result, remainingIds );
                // for(let key in remainingIds){
                //     if(remainingIds[key] == false){
                //       bulkConceptFetch.push(Number(key));
                //     }
                // }
                //bulkConceptFetch = conceptIds;
                if (bulkConceptFetch.length == 0) {
                    return result;
                }
                else {
                    let header = GetRequestHeader_GetRequestHeader();
                    const response = yield fetch(BaseUrl_BaseUrl.GetConceptBulkUrl(), {
                        method: 'POST',
                        headers: header,
                        body: JSON.stringify(bulkConceptFetch)
                    });
                    if (response.ok) {
                        result = yield response.json();
                        console.log("got all the concepts", result);
                        if (result.length > 0) {
                            for (let i = 0; i < result.length; i++) {
                                let concept = result[i];
                                ConceptData_ConceptsData.AddConcept(concept);
                            }
                        }
                        console.log("added the concepts");
                    }
                    else {
                        console.log("Get Concept Bulk error", response.status);
                        ErrorPosting_HandleHttpError(response);
                    }
                }
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get Concept Bulk  error message: ', error.message);
            }
            else {
                console.log('Get Concept Bulk  unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetConceptBulkUrl());
        }
        return result;
    });
}
function BulkConceptGetterApi(bulkConceptFetch) {
    return GetConceptBulk_awaiter(this, void 0, void 0, function* () {
        const conceptList = [];
        if (bulkConceptFetch.length > 0) {
            const myHeaders = {
                'Content-Type': 'application/json',
            };
            try {
                const response = yield fetch(BaseUrl_BaseUrl.GetConceptBulkUrl(), {
                    method: 'POST',
                    headers: myHeaders,
                    body: JSON.stringify(bulkConceptFetch),
                });
                if (response.ok) {
                    const result = yield response.json();
                    if (result.length > 0) {
                        for (let i = 0; i < result.length; i++) {
                            const concept = result[i];
                            conceptList.push(concept);
                            ConceptData_ConceptsData.AddConcept(concept);
                        }
                    }
                }
                else {
                    console.log('bulk concept getter api error: ', response.status);
                    ErrorPosting_HandleHttpError(response);
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log('bulk concept getter api error: ', error.message);
                }
                else {
                    console.log('bulk concept getter api error: ', error);
                }
                HandleInternalError(error, BaseUrl_BaseUrl.GetConceptBulkUrl());
            }
        }
        return conceptList;
    });
}

;// CONCATENATED MODULE: ./src/Services/FindConeceptsFromConnection.ts
var FindConeceptsFromConnection_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * This function takes in a list of connections and in bulk gets the concepts that are related with these connections.
 * @param connectionList list of connections whose concepts need to be found out.
 */
function FindConceptsFromConnections() {
    return FindConeceptsFromConnection_awaiter(this, arguments, void 0, function* (connectionList = []) {
        let ConceptList = [];
        if (connectionList.length > 0) {
            for (let i = 0; i < connectionList.length; i++) {
                if (!ConceptList.includes(connectionList[i].ofTheConceptId)) {
                    ConceptList.push(connectionList[i].ofTheConceptId);
                }
                if (!ConceptList.includes(connectionList[i].toTheConceptId)) {
                    ConceptList.push(connectionList[i].toTheConceptId);
                }
            }
            yield GetConceptBulk(ConceptList);
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/FindConnectionsOfCompositionBulkInMemory.ts
var FindConnectionsOfCompositionBulkInMemory_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function FindConnectionsOfCompositionsBulkInMemory() {
    return FindConnectionsOfCompositionBulkInMemory_awaiter(this, arguments, void 0, function* (composition_ids = []) {
        let FinalConnectionList = [];
        for (let i = 0; i < composition_ids.length; i++) {
            // let connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_ids[i]);
            let connectionList = yield ConnectionData.GetConnectionsOfConcept(composition_ids[i]);
            FinalConnectionList.push(...connectionList);
        }
        return FinalConnectionList;
    });
}

;// CONCATENATED MODULE: ./src/Services/CheckForConnectionDeletion.ts
function CheckForConnectionDeletion(newConnections = [], oldConnections = []) {
    // for(let i=0; i<oldConnections.length; i++){
    //     if(Array.isArray(newConnections)){
    //         if(!newConnections.find(obj => obj.id === oldConnections[i].id)){
    //             ConnectionData.RemoveConnection(oldConnections[i]);
    //        }
    //     }
    // }
}
function CheckForConnectionDeletionWithIds(newConnectionIds = [], oldConnections = []) {
    // for(let i=0; i<oldConnections.length; i++){
    //     if(!newConnectionIds.includes(oldConnections[i].id)){
    //           ConnectionData.RemoveConnection(oldConnections[i]);
    //     }
    // }
}

;// CONCATENATED MODULE: ./src/Api/GetAllConnectionsOfCompositionBulk.ts
var GetAllConnectionsOfCompositionBulk_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








function GetAllConnectionsOfCompositionBulk() {
    return GetAllConnectionsOfCompositionBulk_awaiter(this, arguments, void 0, function* (composition_ids = []) {
        if (serviceWorker) {
            const res = yield sendMessage('GetAllConnectionsOfCompositionBulk', { composition_ids });
            console.log('data received from sw', res);
            return res.data;
        }
        var connectionList = [];
        var conceptList = [];
        if (composition_ids.length <= 0) {
            return connectionList;
        }
        var oldConnectionList = yield FindConnectionsOfCompositionsBulkInMemory(composition_ids);
        var connectionListString = yield GetAllConnectionsOfCompositionOnline(composition_ids);
        connectionList = connectionListString;
        CheckForConnectionDeletion(connectionList, oldConnectionList);
        yield FindConceptsFromConnections(connectionList);
        return connectionList;
    });
}
function GetAllConnectionsOfCompositionOnline() {
    return GetAllConnectionsOfCompositionBulk_awaiter(this, arguments, void 0, function* (composition_ids = []) {
        var connectionList = [];
        try {
            var header = GetRequestHeader_GetRequestHeader();
            const response = yield fetch(BaseUrl_BaseUrl.GetAllConnectionsOfCompositionBulkUrl(), {
                method: 'POST',
                headers: header,
                body: JSON.stringify(composition_ids)
            });
            if (response.ok) {
                const result = yield response.json();
                for (var i = 0; i < result.length; i++) {
                    ConnectionData.AddConnection(result[i]);
                    connectionList.push(result[i]);
                }
            }
            else {
                console.log('Get all connections of composition bulk error message: ', "Cannot get response");
                ErrorPosting_HandleHttpError(response);
            }
            return connectionList;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get all connections of composition bulk error message: ', error.message);
            }
            else {
                console.log('Get all connections of composition bulk unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetAllConnectionsOfCompositionBulkUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Database/indexdblocal.ts
var indexdblocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * version of the database. If you want to change the database then you must update this version also.
 */
var indexdblocal_version = 9;
/**
 * This class will help us store the indexdb  reference in memory and not go back to index db.
 */
class LocalIndexDb {
}
/**
 *
 * @param databaseName not required actually. This is not used you can pass anything.
 * @returns a promise that either resolves or rejects opening the database.
 */
function indexdblocal_openDatabase(databaseName) {
    return new Promise(function (resolve, reject) {
        // if the indexdb is already initialized then you do not need to again initialize the db so you can get 
        // from memory.
        if (LocalIndexDb.db) {
            resolve(LocalIndexDb.db);
        }
        // the name of the database is passed here. We are statically passing the dbName with inputs from user
        // the BASE_URL is the api that the framework calls
        // the BASE_APPLICATION is a thing that differentiates an application from another so no two application create
        // and use the same index db.  
        let localDbName = BaseUrl_BaseUrl.BASE_URL + "_FreeSchemaLocal" + BaseUrl_BaseUrl.BASE_APPLICATION;
        const request = indexedDB.open(localDbName, indexdblocal_version);
        // in case that the database is not opened then log the error.
        // then we delete the database that is already present with the name
        // then again try to create the database, since this is a temporary database so it might not matter
        // but this is a point that we might need to be careful about.
        // we then reject the promise and report this problem.
        request.onerror = (event) => {
            console.error("Why didn't you allow my web app to use IndexedDB?!", event);
            indexedDB.deleteDatabase(localDbName);
            indexdblocal_openDatabase(databaseName);
            reject(event);
        };
        // in case that the database is allowed to be opened then we return the database object.
        request.onsuccess = function (event) {
            var target = event.target;
            LocalIndexDb.db = target.result;
            resolve(LocalIndexDb.db);
        };
        // in case that the version is upgraded then we delete all the old databases and then create a new database.
        // version upgrade is a way which we can clean up old databases and its structures.
        request.onupgradeneeded = (event) => {
            var target = event.target;
            var db = target.result;
            var conceptDb = "localconcept";
            var connectionDb = "localconnection";
            var idDb = "localid";
            console.log("this is the version upgrade", indexdblocal_version);
            if (db.objectStoreNames.contains(conceptDb)) {
                db.deleteObjectStore(conceptDb);
            }
            if (db.objectStoreNames.contains(connectionDb)) {
                db.deleteObjectStore(connectionDb);
            }
            if (db.objectStoreNames.contains(idDb)) {
                db.deleteObjectStore(idDb);
            }
            if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
                let objectStore = db.createObjectStore(conceptDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                };
            }
            if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
                let objectStore = db.createObjectStore(connectionDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                };
            }
            if (!db.objectStoreNames.contains(idDb)) { // if there's no database name
                let objectStore = db.createObjectStore(idDb, { keyPath: 'id' }); // create it
                objectStore.transaction.oncomplete = (event) => {
                    // this is the event in which we initialize the local database
                    // we assume the start of the localconcept by -100, localconnection by -200 and a random value 
                    // which will enable us to identify this local database from others.
                    indexdblocal_storeToDatabase(idDb, { "id": 0, "value": -100 });
                    indexdblocal_storeToDatabase(idDb, { "id": 1, "value": -200 });
                    // storeToDatabase(idDb,{"id":3, "value": BaseUrl.BASE_RANDOMIZER});
                    indexdblocal_storeToDatabase(idDb, { "id": 3, "value": BaseUrl_BaseUrl.getRandomizer() });
                };
            }
            resolve(db);
        };
    });
}
function LockTheDatabase(databaseName) {
    return indexdblocal_awaiter(this, void 0, void 0, function* () {
        console.log("lock : locked db");
        yield indexdblocal_UpdateToDatabase(databaseName, { "id": 4, "value": true });
    });
}
function UnlockDatabase(databaseName) {
    return indexdblocal_awaiter(this, void 0, void 0, function* () {
        yield indexdblocal_UpdateToDatabase(databaseName, { "id": 4, "value": false });
        console.log("lock :locked opened");
    });
}
function GetLockStatus(databaseName) {
    return indexdblocal_awaiter(this, void 0, void 0, function* () {
        try {
            let list = yield getObjectsFromLocalIndexDb(databaseName);
            console.log("lock :for lock locked", list);
            if (Array.isArray(list)) {
                console.log("lock : This is the list vallue", list[4].value);
                return list[4].value;
            }
            console.log("lock : This is not a list", Array.isArray(list));
            return false;
        }
        catch (error) {
            console.log("lock : this is the error", error);
        }
    });
}
/**
*  this function will return all the objects that are in the database
* @param databaseName name of the database
* @returns all the objects that are in the database
*/
function getObjectsFromLocalIndexDb(databaseName) {
    return indexdblocal_awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            indexdblocal_openDatabase(databaseName).then((db) => {
                var concept;
                var ConceptList = [];
                let transaction = db.transaction(databaseName, "readwrite");
                let objectStore = transaction.objectStore(databaseName);
                var allobjects = objectStore.getAll();
                allobjects.onsuccess = () => {
                    const students = allobjects.result;
                    for (var i = 0; i < students.length; i++) {
                        ConceptList.push(students[i]);
                    }
                    resolve(ConceptList);
                };
            }).catch((event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot get objects from database because you cannot open the Local database",
                    "data": event
                };
                reject(errorObject);
            });
        });
    });
}
/**
 *
 * @param databaseName name of the database that you want to store data to.
 * @param object any object that can be stored but keep in mind it must follow the convention that we created
 * while creating the datbase.
 * @returns a promise that if a store is successful then the obejct is returned else rejects with the event.
 */
function indexdblocal_storeToDatabase(databaseName, object) {
    return new Promise(function (resolve, reject) {
        indexdblocal_openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objStore = transaction.objectStore(databaseName);
            const request = objStore.add(object);
            request.onsuccess = (event) => {
                resolve(object);
            };
            request.onerror = (event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot store to the Local database " + databaseName,
                    "data": event,
                    "body": object
                };
                reject(errorObject);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot store to database because you cannot open the Local database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
/**
 *
 * @param databaseName name of the database
 * @param object this is the object that you want to update
 * @returns returns the object if it is updated successfully.
 */
function indexdblocal_UpdateToDatabase(databaseName, object) {
    return new Promise(function (resolve, reject) {
        console.log("this is wriring to the database local", object);
        indexdblocal_openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objStore = transaction.objectStore(databaseName);
            const request = objStore.put(object);
            request.onsuccess = (event) => {
                resolve(object);
            };
            request.onerror = (event) => {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot Update to the Local database" + databaseName,
                    "data": event,
                    "body": object
                };
                reject(errorObject);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot update to database because you cannot open the Local database",
                "data": event
            };
            reject(errorObject);
        });
    });
}
//   /**
//  *  this function will return all the objects that are in the database 
//  * @param databaseName name of the database
//  * @returns all the objects that are in the database
//  */
// export async function getLConceptsFromLocalDb(databaseName:string){
//   return new Promise(function(resolve, reject){
//         var ConceptList:any[] = [];
//       openDatabase(databaseName).then(db=>{
//           let transaction = LocalIndexDb.db.transaction(databaseName, "readwrite") as IDBTransaction;
//           let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
//           var allobjects = objectStore.getAll();
//           allobjects.onsuccess = ()=> {
//             const readObjects = allobjects.result;
//             for(var i=0; i<readObjects.length; i++){
//                 ConceptList.push(readObjects[i]);
//             }
//             resolve(ConceptList); 
//         }
//       });
//   });
// }
/**
 *
 * @param databaseName name of the database
 * @param id the id that we need to remove from the database (this is the index)
 * @returns an id if the deletion is successful and error with even in case it cannot.
 */
function indexdblocal_removeFromDatabase(databaseName, id) {
    return new Promise(function (resolve, reject) {
        indexdblocal_openDatabase(databaseName).then((db) => {
            let transaction = db.transaction(databaseName, "readwrite");
            let objectStore = transaction.objectStore(databaseName);
            let getRequest = objectStore.delete(id);
            getRequest.onsuccess = function (event) {
                resolve(id);
            };
            getRequest.onerror = function (event) {
                let errorObject = {
                    "status": 400,
                    "ok": false,
                    "message": "Cannot Update to the Local database" + databaseName,
                    "data": event,
                    "body": id
                };
                reject(errorObject);
            };
        }).catch((event) => {
            let errorObject = {
                "status": 400,
                "ok": false,
                "message": "Cannot remove object from database because you cannot open the Local database",
                "data": event
            };
            reject(errorObject);
        });
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/Local/LNode.ts
class LNode {
    constructor(key, value, leftNode, rightNode) {
        this.variants = [];
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.currentNode = null;
    }
    addCurrentNode(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        if (passedNode.value.typeId != node.value.typeId) {
            node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        }
        return node;
    }
    addCurrentNodeType(passedNode, node) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        var contains = false;
        for (let i = 0; i < node.variants.length; i++) {
            if (node.variants[i].value.id == passedNode.value.id) {
                contains = true;
            }
        }
        if (!contains) {
            node.variants.push(passedNode);
        }
        //node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        return node;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        var LeftNode = node.leftNode;
        var RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        // else if (node.key == passedNode.key && node.key != ""){
        //     node.currentNode = passedNode;
        // }
        else {
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    return this.rightRotate(node);
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    return this.rightRotate(node);
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    return this.leftRotate(node);
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    return this.leftRotate(node);
                }
            }
        }
        return node;
    }
    addCharacterNode(passedNode, node, height) {
        var debugFlag = false;
        if (passedNode.value.characterValue != "") {
            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }
            if (node == null) {
                if (debugFlag) {
                    console.log("equal here", node);
                }
                node = passedNode;
                return node;
            }
            // if (node.key == passedNode.key && node.key != "" ){
            //     if(passedNode.value.characterValue == "Default"){
            //         console.log("equal");
            //     }
            //     node.currentNode = passedNode;
            //     return node;
            // }
            var LeftNode = node.leftNode;
            var RightNode = node.rightNode;
            if (node.key > passedNode.key) {
                if (debugFlag) {
                    console.log("left  here", node);
                }
                node.leftNode = this.addCharacterNode(passedNode, LeftNode, height);
            }
            else if (node.key < passedNode.key) {
                if (debugFlag) {
                    console.log("right here", node, RightNode);
                }
                node.rightNode = this.addCharacterNode(passedNode, RightNode, height);
            }
            // else if (node.key == passedNode.key && node.key != ""){
            //     node.currentNode = passedNode;
            // }
            else {
                if (debugFlag) {
                    console.log("else here", node, passedNode);
                }
                if (node.key == passedNode.key && node.key != "" && node.value.id != passedNode.value.id) {
                    // node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
                    node.addCurrentNodeType(passedNode, node);
                }
                return node;
            }
            node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
            if (debugFlag) {
                console.log("height here", node.height);
            }
            let balancingFactor = this.getBalanceFactor(node);
            if (debugFlag) {
                console.log("balancingFactor here", balancingFactor);
            }
            if (balancingFactor > 1) {
                if (node.leftNode) {
                    if (passedNode.key < node.leftNode.key) {
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 2 ", returner);
                        }
                        return returner;
                    }
                }
            }
            if (balancingFactor < -1) {
                if (node.rightNode) {
                    if (passedNode.key > node.rightNode.key) {
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here4 ", returner, node);
                        }
                        return returner;
                    }
                }
            }
        }
        else {
            if (debugFlag) {
                console.log("what here", node);
            }
        }
        if (debugFlag) {
            console.log("returning here 6", node);
        }
        return node;
    }
    addTypeNode(passedNode, node, height) {
        var debugFlag = false;
        if (passedNode.value.typeId != 0) {
            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }
            if (node == null) {
                if (debugFlag) {
                    console.log("equal here", node);
                }
                node = passedNode;
                return node;
            }
            var LeftNode = node.leftNode;
            var RightNode = node.rightNode;
            if (node.key > passedNode.key) {
                if (debugFlag) {
                    console.log("left  here", node);
                }
                node.leftNode = this.addTypeNode(passedNode, LeftNode, height);
            }
            else if (node.key < passedNode.key) {
                if (debugFlag) {
                    console.log("right here", node, RightNode);
                }
                node.rightNode = this.addTypeNode(passedNode, RightNode, height);
            }
            else {
                if (debugFlag) {
                    console.log("else here", node, passedNode);
                }
                if (node.key == passedNode.key && node.key != 0 && node.value.id != passedNode.value.id) {
                    node.addCurrentNodeType(passedNode, node);
                }
                return node;
            }
            node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
            if (debugFlag) {
                console.log("height here", node.height);
            }
            let balancingFactor = this.getBalanceFactor(node);
            if (debugFlag) {
                console.log("balancingFactor here", balancingFactor);
            }
            if (balancingFactor > 1) {
                if (node.leftNode) {
                    if (passedNode.key < node.leftNode.key) {
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 1 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key > node.leftNode.key) {
                        node.leftNode = this.leftRotate(node.leftNode);
                        var returner = this.rightRotate(node);
                        if (debugFlag) {
                            console.log("returning here 2 ", returner);
                        }
                        return returner;
                    }
                }
            }
            if (balancingFactor < -1) {
                if (node.rightNode) {
                    if (passedNode.key > node.rightNode.key) {
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here 3 ", returner);
                        }
                        return returner;
                    }
                    else if (passedNode.key < node.rightNode.key) {
                        node.rightNode = this.rightRotate(node.rightNode);
                        var returner = this.leftRotate(node);
                        if (debugFlag) {
                            console.log("returning here4 ", returner, node);
                        }
                        return returner;
                    }
                }
            }
        }
        else {
            if (debugFlag) {
                console.log("what here", node);
            }
        }
        if (debugFlag) {
            console.log("returning here 6", node);
        }
        return node;
    }
    rightRotate(y) {
        if (y) {
            let x = y.leftNode;
            if (x) {
                let T2 = x.rightNode;
                y.leftNode = T2;
                x.rightNode = y;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
            // return x;
        }
        return y;
    }
    leftRotate(x) {
        if (x) {
            let y = x.rightNode;
            if (y) {
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
                return y;
            }
            //return y;
        }
        return x;
    }
    getHeight(node) {
        if (node) {
            return node.height;
        }
        return 0;
    }
    getBalanceFactor(N) {
        if (N == null) {
            return 0;
        }
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
    }
    getFromNode(id, node) {
        if (node) {
            if (id == node.key) {
                return node;
            }
            else if (id < node.key) {
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > node.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;
    }
    updateNodeSyncStatus(id, value, node) {
        if (node) {
            if (id == node.key) {
                let lconcept = node.value;
                lconcept.isSynced = value;
                node.value = lconcept;
                return node;
            }
            else if (id < node.key) {
                return this.updateNodeSyncStatus(id, value, node.leftNode);
            }
            else if (id > node.key) {
                return this.updateNodeSyncStatus(id, value, node.rightNode);
            }
            return node;
        }
        return node;
    }
    getCharacterFromNode(value, node) {
        if (node) {
            if (value == node.key) {
                return node;
            }
            else if (value < node.key) {
                return this.getCharacterFromNode(value, node.leftNode);
            }
            else if (value > node.key) {
                return this.getCharacterFromNode(value, node.rightNode);
            }
            return node;
        }
        return node;
    }
    getFromNodeWithCharacterAndType(value, typeId, node) {
        value = `${value}`;
        if (node) {
            if (value == node.key) {
                if (value == node.value.characterValue && typeId == node.value.typeId) {
                    return node;
                }
                else {
                    for (let i = 0; i < node.variants.length; i++) {
                        if (node.variants[i].value.typeId == typeId) {
                            return node.variants[i];
                        }
                    }
                    // return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
                }
            }
            else if (value < node.key) {
                return this.getFromNodeWithCharacterAndType(value, typeId, node.leftNode);
            }
            else if (value > node.key) {
                return this.getFromNodeWithCharacterAndType(value, typeId, node.rightNode);
            }
            return null;
        }
        return node;
    }
    getFromNodeWithCharacterAndCategory(value, categoryId, node) {
        value = `${value}`;
        if (node) {
            if (value == node.key) {
                if (value == node.value.characterValue && categoryId == node.value.categoryId) {
                    return node;
                }
                else {
                    for (let i = 0; i < node.variants.length; i++) {
                        if (node.variants[i].value.categoryId == categoryId) {
                            return node.variants[i];
                        }
                    }
                    // return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
                }
            }
            else if (value < node.key) {
                return this.getFromNodeWithCharacterAndCategory(value, categoryId, node.leftNode);
            }
            else if (value > node.key) {
                return this.getFromNodeWithCharacterAndCategory(value, categoryId, node.rightNode);
            }
            return null;
        }
        return node;
    }
    removeNode(passedNode, id) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > id) {
            passedNode.leftNode = this.removeNode(passedNode.leftNode, id);
            return passedNode;
        }
        else if (passedNode.key < id) {
            passedNode.rightNode = this.removeNode(passedNode.rightNode, id);
            return passedNode;
        }
        // if(passedNode.variants.length > 0){
        //     if(passedNode.value.id == id ){
        //     }
        //     var newNode = passedNode.variants[0];
        //     if(newNode){
        //         passedNode.value = newNode.value;
        //         passedNode.key = newNode.key;
        //         passedNode.currentNode = newNode.currentNode;
        //         return passedNode;
        //     }
        // }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
            return passedNode;
        }
    }
    removeNodeWithVariants(passedNode, typeIdentifier, conceptId) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > typeIdentifier) {
            passedNode.leftNode = this.removeNodeWithVariants(passedNode.leftNode, typeIdentifier, conceptId);
            return passedNode;
        }
        else if (passedNode.key < typeIdentifier) {
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, typeIdentifier, conceptId);
            return passedNode;
        }
        if (passedNode.variants.length > 0) {
            //condition if the main node is equal to the value
            if (passedNode.value.id == conceptId) {
                var newNode = passedNode.variants[0];
                if (newNode) {
                    passedNode.value = newNode.value;
                    passedNode.key = newNode.key;
                    passedNode.currentNode = newNode.currentNode;
                    passedNode.variants.splice(0, 1);
                    return passedNode;
                }
            }
            else {
                // in the condition that the main node is not equal to the checking value 
                for (let i = 0; i < passedNode.variants.length; i++) {
                    if (conceptId == passedNode.variants[i].value.id) {
                        passedNode.variants.splice(i, 1);
                        return passedNode;
                    }
                }
            }
        }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode, immediateSuccessor.key, conceptId);
            return passedNode;
        }
    }
    countNodeBelow(root) {
        if (root == null) {
            return 0;
        }
        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return 1 + this.countNodeBelow(root.leftNode) + this.countNodeBelow(root.rightNode);
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/Local/LocalBinaryTree.ts
var LocalBinaryTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalBinaryTree {
    static addNodeToTree(node) {
        if (this.root == null) {
            this.root = node;
            return this.root;
        }
        else {
            this.root = this.root.addNode(node, this.root, this.root.height);
        }
    }
    static addConceptToTree(concept) {
        var node = new LNode(concept.id, concept, null, null);
        var characterNode = new LNode(concept.characterValue, concept, null, null);
        this.addNodeToTree(node);
    }
    static waitForDataToLoad() {
        return LocalBinaryTree_awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (IdentifierFlags.isLocalDataLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalBinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static getNodeFromTree(id) {
        return LocalBinaryTree_awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.root) {
                var Node = this.root.getFromNode(id, this.root);
                return Node;
            }
            return null;
        });
    }
    static getCharacterAndTypeFromTree(value, typeId) {
        if (this.root) {
            var Node = this.root.getFromNodeWithCharacterAndType(value, typeId, this.root);
            return Node;
        }
        return this.root;
    }
    static updateSyncStatus(id) {
        if (this.root) {
            var Node = this.root.updateNodeSyncStatus(id, true, this.root);
            return Node;
        }
        return this.root;
    }
    static removeNodeFromTree(id) {
        return LocalBinaryTree_awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                this.root = this.root.removeNode(this.root, id);
            }
        });
    }
}
LocalBinaryTree.root = null;

;// CONCATENATED MODULE: ./src/DataStructures/Local/LocalBinaryCharacterTree.ts
var LocalBinaryCharacterTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalBinaryCharacterTree {
    static waitForDataToLoad() {
        return LocalBinaryCharacterTree_awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (IdentifierFlags.isLocalCharacterLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalBinaryCharacterTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addNodeToTree(node) {
        return LocalBinaryCharacterTree_awaiter(this, void 0, void 0, function* () {
            if (this.LocalCharacterRoot == null) {
                this.LocalCharacterRoot = node;
                return this.LocalCharacterRoot;
            }
            else {
                this.LocalCharacterRoot = this.LocalCharacterRoot.addCharacterNode(node, this.LocalCharacterRoot, this.LocalCharacterRoot.height);
            }
            return this.LocalCharacterRoot;
        });
    }
    static addConceptToTree(concept) {
        if (concept.characterValue != "") {
            var node = new LNode(concept.characterValue, concept, null, null);
            this.addNodeToTree(node);
        }
    }
    static getNodeFromTree(value) {
        if (this.LocalCharacterRoot) {
            var Node = this.LocalCharacterRoot.getCharacterFromNode(value, this.LocalCharacterRoot);
            return Node;
        }
        return this.LocalCharacterRoot;
    }
    static getCharacterAndTypeFromTree(value, typeId) {
        return LocalBinaryCharacterTree_awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.LocalCharacterRoot) {
                var Node = this.LocalCharacterRoot.getFromNodeWithCharacterAndType(value, typeId, this.LocalCharacterRoot);
                return Node;
            }
            return this.LocalCharacterRoot;
        });
    }
    static getCharacterAndCategoryFromTree(value, categoryId) {
        return LocalBinaryCharacterTree_awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.LocalCharacterRoot) {
                var Node = this.LocalCharacterRoot.getFromNodeWithCharacterAndCategory(value, categoryId, this.LocalCharacterRoot);
                return Node;
            }
            return this.LocalCharacterRoot;
        });
    }
    static removeConceptType(character, id) {
        if (this.LocalCharacterRoot) {
            this.LocalCharacterRoot = this.LocalCharacterRoot.removeNodeWithVariants(this.LocalCharacterRoot, character, id);
        }
    }
}
LocalBinaryCharacterTree.LocalCharacterRoot = null;

;// CONCATENATED MODULE: ./src/DataStructures/Local/LocalBinaryTypeTree.ts
var LocalBinaryTypeTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalBinaryTypeTree {
    static addNodeToTree(node) {
        return LocalBinaryTypeTree_awaiter(this, void 0, void 0, function* () {
            if (this.LocalTypeRoot == null) {
                this.LocalTypeRoot = node;
                return this.LocalTypeRoot;
            }
            else {
                this.LocalTypeRoot = this.LocalTypeRoot.addTypeNode(node, this.LocalTypeRoot, this.LocalTypeRoot.height);
            }
            return this.LocalTypeRoot;
        });
    }
    static addConceptToTree(concept) {
        if (concept.typeId != 0) {
            var node = new LNode(concept.typeId, concept, null, null);
            this.addNodeToTree(node);
        }
    }
    static removeConceptType(typeId, id) {
        if (this.LocalTypeRoot) {
            this.LocalTypeRoot = this.LocalTypeRoot.removeNodeWithVariants(this.LocalTypeRoot, typeId, id);
        }
    }
    static getNodeFromTree(id) {
        if (this.LocalTypeRoot) {
            var Node = this.LocalTypeRoot.getFromNode(id, this.LocalTypeRoot);
            return Node;
        }
        return this.LocalTypeRoot;
    }
    static getTypeVariantsFromTree(typeId) {
        var Node = this.getNodeFromTree(typeId);
        var concepts = [];
        if (Node) {
            concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
            for (let i = 0; i < Node.variants.length; i++) {
                concepts.push(Node.variants[i].value);
            }
            return concepts;
        }
    }
    static waitForDataToLoad() {
        return LocalBinaryTypeTree_awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (IdentifierFlags.isLocalTypeLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalBinaryTypeTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static getTypeVariantsFromTreeWithUserId(typeId, userId) {
        return LocalBinaryTypeTree_awaiter(this, void 0, void 0, function* () {
            var concepts = [];
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return concepts;
            }
            var Node = this.getNodeFromTree(typeId);
            if (Node) {
                console.log("this is the node to type", Node);
                if (Node.value.userId == userId || Node.value.userId == 999) {
                    concepts.push(Node === null || Node === void 0 ? void 0 : Node.value);
                }
                for (let i = 0; i < Node.variants.length; i++) {
                    if (Node.variants[i].value.userId == userId || Node.value.userId == 999) {
                        concepts.push(Node.variants[i].value);
                    }
                }
            }
            return concepts;
        });
    }
}
LocalBinaryTypeTree.LocalTypeRoot = null;

;// CONCATENATED MODULE: ./src/Services/Local/CreateDefaultLConcept.ts

function CreateDefaultLConcept_CreateDefaultLConcept() {
    let created_on = new Date();
    let updated_on = new Date();
    let concept = new Concept_Concept(0, 0, 0, 0, 0, "0", 0, false, created_on, updated_on, "0");
    return concept;
}

;// CONCATENATED MODULE: ./src/DataStructures/Local/LocalGhostIdTree.ts
var LocalGhostIdTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalGhostIdTree {
    static addNodeToTree(node) {
        if (this.root == null) {
            this.root = node;
            return this.root;
        }
        else {
            this.root = this.root.addNode(node, this.root, this.root.height);
        }
    }
    static addConceptToTree(concept) {
        var node = new LNode(concept.ghostId, concept, null, null);
        this.addNodeToTree(node);
    }
    static waitForDataToLoad() {
        return LocalGhostIdTree_awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (IdentifierFlags.isLocalDataLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalGhostIdTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static getNodeFromTree(id) {
        return LocalGhostIdTree_awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            if (this.root) {
                var Node = this.root.getFromNode(id, this.root);
                return Node;
            }
            return null;
        });
    }
    static removeNodeFromTree(id) {
        return LocalGhostIdTree_awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                this.root = this.root.removeNode(this.root, id);
            }
        });
    }
}
LocalGhostIdTree.root = null;

;// CONCATENATED MODULE: ./src/Services/Local/ConvertFromLConnectionToConnection.ts

function ConvertFromLConnectionToConnection(lconnection) {
    let connection = new Connection_Connection(0, 0, 0, 0, 0, 0, 0);
    connection.ofTheConceptId = lconnection.ofTheConceptId;
    connection.toTheConceptId = lconnection.toTheConceptId;
    connection.typeId = lconnection.typeId;
    connection.orderId = lconnection.orderId;
    connection.id = lconnection.id;
    return connection;
}

;// CONCATENATED MODULE: ./src/Api/Create/CreateTheGhostConceptApi.ts
var CreateTheGhostConceptApi_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTheGhostConceptApi(conceptData, connectionData) {
    return CreateTheGhostConceptApi_awaiter(this, void 0, void 0, function* () {
        let result = {
            "concepts": [],
            "connections": []
        };
        try {
            const myHeaders = new Headers();
            let myBody = {
                "concepts": conceptData,
                "connections": connectionData
            };
            myHeaders.set("Content-Type", "application/json");
            myHeaders.set('Authorization', "Bearer " + TokenStorage.BearerAccessToken);
            myHeaders.set('Accept', 'application/json');
            //  myHeaders.set('Randomizer', BaseUrl.BASE_RANDOMIZER.toString());
            myHeaders.set('Randomizer', BaseUrl_BaseUrl.getRandomizer().toString());
            const response = yield fetch(BaseUrl_BaseUrl.CreateGhostConceptApiUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(myBody),
            });
            if (!response.ok) {
                ErrorPosting_HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            const resultString = yield response.json();
            result.concepts = resultString.concepts;
            result.connections = resultString.connections;
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Create the concept api error message: ', error.message);
            }
            else {
                console.log('Create the concept api unexpected error: ', error);
            }
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/Local/LocalSyncData.ts
var LocalSyncData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class LocalSyncData {
    static CheckContains(concept) {
        var contains = false;
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (this.conceptsSyncArray[i].id == concept.id) {
                contains = true;
            }
        }
        return contains;
    }
    static SyncDataDelete(id) {
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (id == this.conceptsSyncArray[i].id) {
                this.conceptsSyncArray.splice(i, 1);
            }
        }
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].ofTheConceptId == id || this.connectionSyncArray[i].toTheConceptId == id || this.connectionSyncArray[i].typeId == id) {
                this.connectionSyncArray.splice(i, 1);
            }
        }
    }
    static CheckContainsConnection(connection) {
        var contains = false;
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].id == connection.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConcept(concept) {
        try {
            let contains = false;
            let existingConcept = LocalSyncData.CheckIfTheConceptIdExists(concept.id, this.conceptsSyncArray);
            if (existingConcept.id != 0) {
                contains = true;
            }
            if (!contains) {
                this.conceptsSyncArray.push(concept);
            }
        }
        catch (error) {
            throw error;
        }
    }
    static RemoveConcept(concept) {
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (this.conceptsSyncArray[i].id == concept.id) {
                this.conceptsSyncArray.splice(i, 1);
            }
        }
    }
    static SyncDataOnline() {
        return LocalSyncData_awaiter(this, void 0, void 0, function* () {
            try {
                console.log('sw triggered');
                if (serviceWorker) {
                    const res = yield sendMessage('LocalSyncData_SyncDataOnline', {});
                    return res.data;
                }
                let conceptsArray = this.conceptsSyncArray.slice();
                let connectionsArray = this.connectionSyncArray.slice();
                this.connectionSyncArray = [];
                this.conceptsSyncArray = [];
                let toSyncConcepts = [];
                for (let i = 0; i < conceptsArray.length; i++) {
                    //if(!conceptsArray[i].isSynced){
                    toSyncConcepts.push(conceptsArray[i]);
                    //}
                    // this is used to denote that the local concept has already been synced with the online db
                    yield LocalConceptData_LocalConceptsData.UpdateConceptSyncStatus(conceptsArray[i].id);
                }
                //if(connectionsArray.length > 0){
                yield this.UpdateConceptListToIncludeRelatedConcepts(connectionsArray, toSyncConcepts);
                let result = yield CreateTheGhostConceptApi(toSyncConcepts, connectionsArray);
                let concepts = result.concepts;
                let connections = result.connections;
                for (let i = 0; i < concepts.length; i++) {
                    LocalConceptData_LocalConceptsData.AddPermanentConcept(concepts[i]);
                }
                for (let i = 0; i < connections.length; i++) {
                    LocalConnectionData.AddPermanentConnection(connections[i]);
                }
                //}
                return conceptsArray;
            }
            catch (error) {
                throw error;
            }
        });
    }
    //  static async  SyncDataOnline(){
    //     if(this.conceptsSyncArray.length > 0){
    //         let conceptsArray = this.conceptsSyncArray.slice();
    //         this.conceptsSyncArray = [];
    //         let concepts = await CreateTheGhostConceptApi(conceptsArray);
    //         for(let i =0 ; i< concepts.length; i++){
    //             LocalSyncData.ghostIdMap.set(concepts[i].ghostId,concepts[i].id);
    //             LocalConceptsData.AddPermanentConcept(concepts[i]);
    //         }
    //     }
    //      if(this.connectionSyncArray.length > 0){
    //         // for(let i =0 ; i<this.connectionSyncArray.length ; i++){
    //         //     console.log("create the connection in backend", this.connectionSyncArray[i].ofTheConceptId + "====" + this.connectionSyncArray[i].toTheConceptId);
    //         // }
    //         let connectionsArray = this.connectionSyncArray.slice();
    //         this.ConvertGhostIdsInConnections(connectionsArray);
    //         this.connectionSyncArray = [];
    //         await CreateTheGhostConnectionApi(connectionsArray);
    //     }
    //     return "done";
    //  }
    static ConvertGhostIdsInConnections(connectionArray) {
        var _a, _b, _c;
        for (let i = 0; i < connectionArray.length; i++) {
            let ofTheConceptId = connectionArray[i].ofTheConceptId;
            let toTheConceptId = connectionArray[i].toTheConceptId;
            let typeId = connectionArray[i].typeId;
            let newOfTheConceptId = (_a = LocalSyncData.ghostIdMap.get(ofTheConceptId)) !== null && _a !== void 0 ? _a : ofTheConceptId;
            let newToTheConceptId = (_b = LocalSyncData.ghostIdMap.get(toTheConceptId)) !== null && _b !== void 0 ? _b : toTheConceptId;
            let newTypeId = (_c = LocalSyncData.ghostIdMap.get(typeId)) !== null && _c !== void 0 ? _c : typeId;
            connectionArray[i].ofTheConceptId = newOfTheConceptId;
            connectionArray[i].toTheConceptId = newToTheConceptId;
            connectionArray[i].typeId = newTypeId;
        }
    }
    static UpdateConceptListToIncludeRelatedConcepts(connectionArray, conceptsArray) {
        return LocalSyncData_awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < connectionArray.length; i++) {
                let ofTheConceptId = connectionArray[i].ofTheConceptId;
                let toTheConceptId = connectionArray[i].toTheConceptId;
                let typeId = connectionArray[i].typeId;
                if (ofTheConceptId < 0) {
                    let ofTheConcept = this.CheckIfTheConceptIdExists(ofTheConceptId, conceptsArray);
                    if (ofTheConcept.id == 0) {
                        ofTheConcept = yield LocalConceptData_LocalConceptsData.GetConceptByGhostId(ofTheConceptId);
                        if (ofTheConcept.id != 0) {
                            if (ofTheConcept.id != ofTheConcept.ghostId) {
                                connectionArray[i].ofTheConceptId = ofTheConcept.id;
                            }
                        }
                        else {
                            ofTheConcept = yield LocalConceptData_LocalConceptsData.GetConcept(ofTheConceptId);
                            // if this has already been synced before and is a composition type then do not send it again
                            // if(!ofTheConcept.isSynced && !ofTheConcept.isComposition){
                            this.AddConceptIfDoesNotExist(ofTheConcept, conceptsArray);
                            //   }
                        }
                    }
                }
                if (toTheConceptId < 0) {
                    let toTheConcept = this.CheckIfTheConceptIdExists(toTheConceptId, conceptsArray);
                    if (toTheConcept.id == 0) {
                        toTheConcept = yield LocalConceptData_LocalConceptsData.GetConceptByGhostId(toTheConceptId);
                        if (toTheConcept.id != 0) {
                            if (toTheConcept.id != toTheConcept.ghostId) {
                                connectionArray[i].toTheConceptId = toTheConcept.id;
                            }
                        }
                        else {
                            toTheConcept = yield LocalConceptData_LocalConceptsData.GetConcept(toTheConceptId);
                            // if this has already been synced before and is a composition type then do not send it again
                            //   if(!toTheConcept.isSynced && !toTheConcept.isComposition){
                            this.AddConceptIfDoesNotExist(toTheConcept, conceptsArray);
                            //   }
                        }
                    }
                }
                if (typeId < 0) {
                    let type = this.CheckIfTheConceptIdExists(typeId, conceptsArray);
                    if (type.id == 0) {
                        type = yield LocalConceptData_LocalConceptsData.GetConceptByGhostId(typeId);
                        if (type.id != 0) {
                            if (type.id != type.ghostId) {
                                connectionArray[i].typeId = type.id;
                            }
                        }
                        else {
                            type = yield LocalConceptData_LocalConceptsData.GetConcept(typeId);
                            // if this has already been synced before and is a composition type then do not send it again
                            //    if(!type.isSynced && !type.isComposition){
                            this.AddConceptIfDoesNotExist(type, conceptsArray);
                            //    }
                        }
                    }
                }
            }
        });
    }
    static AddConceptIfDoesNotExist(concept, conceptList = []) {
        let exists = false;
        for (let i = 0; i < conceptList.length; i++) {
            if (concept.ghostId == conceptList[i].ghostId) {
                exists = true;
            }
        }
        if (!exists) {
            conceptList.push(concept);
        }
    }
    static CheckIfTheConceptIdExists(id, conceptList = []) {
        let returnConcept = CreateDefaultLConcept_CreateDefaultLConcept();
        for (let i = 0; i < conceptList.length; i++) {
            if (id == conceptList[i].ghostId || id == conceptList[i].id) {
                returnConcept = conceptList[i];
            }
        }
        return returnConcept;
    }
    static AddConnection(connection) {
        this.connectionSyncArray.push(connection);
    }
    static RemoveConnection(connection) {
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].id == connection.id) {
                this.connectionSyncArray.splice(i, 1);
            }
        }
    }
    static RemoveConnectionById(connectionId) {
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].id == connectionId) {
                this.connectionSyncArray.splice(i, 1);
            }
        }
    }
    static syncDataLocalDb() {
        return LocalSyncData_awaiter(this, void 0, void 0, function* () {
            if (this.conceptsSyncArray.length > 0) {
                for (let i = 0; i < this.conceptsSyncArray.length; i++) {
                    indexdblocal_UpdateToDatabase("localconcept", this.conceptsSyncArray[i]);
                }
                this.conceptsSyncArray = [];
            }
            if (this.connectionSyncArray.length > 0) {
                for (let i = 0; i < this.connectionSyncArray.length; i++) {
                    indexdblocal_UpdateToDatabase("localconnection", this.connectionSyncArray[i]);
                }
                this.connectionSyncArray = [];
            }
            return "done";
        });
    }
}
LocalSyncData.conceptsSyncArray = [];
LocalSyncData.connectionSyncArray = [];
LocalSyncData.ghostIdMap = new Map();

;// CONCATENATED MODULE: ./src/DataStructures/Local/LocalConnectionData.ts
var LocalConnectionData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class LocalConnectionData {
    constructor() {
        this.name = "Connection Array";
    }
    static CheckContains(connection) {
        var contains = false;
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connection.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConnection(connection) {
        var contains = this.CheckContains(connection);
        if (contains) {
            this.RemoveConnection(connection);
        }
        if (connection.id != 0) {
            indexdblocal_UpdateToDatabase("localconnection", connection);
        }
        this.connectionArray.push(connection);
    }
    static AddConnectionToMemory(connection) {
        var contains = this.CheckContains(connection);
        if (contains) {
            this.RemoveConnection(connection);
        }
        this.connectionArray.push(connection);
    }
    static AddToDictionary(connection) {
        this.connectionDictionary[connection.id] = connection;
    }
    static RemoveConnection(connection) {
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connection.id) {
                this.connectionArray.splice(i, 1);
            }
        }
        if (connection.id != 0) {
            //  removeFromDatabase("connection",connection.id);
        }
    }
    static RemoveConnectionById(connectionId) {
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == connectionId) {
                this.connectionArray.splice(i, 1);
            }
        }
        LocalSyncData.RemoveConnectionById(connectionId);
    }
    static AddPermanentConnection(connection) {
        if (connection.id > 0) {
            indexdblocal_removeFromDatabase("localconnection", connection.ghostId);
            ConnectionData.AddConnection(ConvertFromLConnectionToConnection(connection));
        }
    }
    static GetConnection(id) {
        var myConcept;
        myConcept = null;
        for (var i = 0; i < this.connectionArray.length; i++) {
            if (this.connectionArray[i].id == id) {
                myConcept = this.connectionArray[i];
            }
        }
        return myConcept;
    }
    static waitForDataToLoad() {
        return LocalConnectionData_awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (IdentifierFlags.isLocalConnectionLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(LocalConnectionData.checkFlag, 1000, resolve);
        }
    }
    ;
    static GetConnectionsOfCompositionLocal(id) {
        return LocalConnectionData_awaiter(this, void 0, void 0, function* () {
            var connectionList = [];
            try {
                var data = yield this.waitForDataToLoad();
                for (var i = 0; i < this.connectionArray.length; i++) {
                    if (this.connectionArray[i].typeId == id) {
                        connectionList.push(this.connectionArray[i]);
                    }
                }
                return connectionList;
            }
            catch (exception) {
                return connectionList;
            }
        });
    }
    static GetConnectionOfCompositionAndTypeLocal(typeId, ofTheConceptId) {
        return LocalConnectionData_awaiter(this, void 0, void 0, function* () {
            var connectionList = [];
            try {
                var data = yield this.waitForDataToLoad();
                console.log("this is the connections", this.connectionArray, typeId, ofTheConceptId);
                for (var i = 0; i < this.connectionArray.length; i++) {
                    if (this.connectionArray[i].typeId == typeId && this.connectionArray[i].ofTheConceptId == ofTheConceptId) {
                        connectionList.push(this.connectionArray[i]);
                    }
                }
                return connectionList;
            }
            catch (exception) {
                return connectionList;
            }
        });
    }
    getName() {
        return this.name;
    }
}
LocalConnectionData.connectionArray = [];
LocalConnectionData.connectionDictionary = [];

;// CONCATENATED MODULE: ./src/DataStructures/Local/LocalConceptData.ts
var LocalConceptData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









class LocalConceptData_LocalConceptsData {
    constructor() {
        this.name = "conceptsArray";
    }
    static AddConcept(concept) {
        if (concept.id != 0) {
            indexdblocal_UpdateToDatabase("localconcept", concept);
            LocalBinaryTree.addConceptToTree(concept);
            LocalBinaryCharacterTree.addConceptToTree(concept);
            LocalBinaryTypeTree.addConceptToTree(concept);
            this.localconceptsArray.push(concept);
        }
    }
    static AddPermanentConcept(concept) {
        if (concept.id != 0) {
            LocalBinaryTree.removeNodeFromTree(concept.ghostId);
            LocalBinaryCharacterTree.removeConceptType(concept.characterValue, concept.ghostId);
            LocalBinaryTypeTree.removeConceptType(concept.typeId, concept.ghostId);
            LocalGhostIdTree.addConceptToTree(concept);
            let removeData = indexdblocal_removeFromDatabase("localconcept", concept.ghostId);
            ConceptData_ConceptsData.AddConcept(concept);
        }
    }
    static RemoveConcept(concept) {
        return LocalConceptData_awaiter(this, void 0, void 0, function* () {
            try {
                if (concept.id != 0) {
                    LocalBinaryTree.removeNodeFromTree(concept.ghostId);
                    LocalBinaryCharacterTree.removeConceptType(concept.characterValue, concept.ghostId);
                    LocalBinaryTypeTree.removeConceptType(concept.typeId, concept.ghostId);
                    yield indexdblocal_removeFromDatabase("localconcept", concept.ghostId);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    static RemoveConceptById(conceptId) {
        return LocalConceptData_awaiter(this, void 0, void 0, function* () {
            try {
                let concept = yield LocalConceptData_LocalConceptsData.GetConcept(conceptId);
                if (concept.id != 0) {
                    LocalBinaryTree.removeNodeFromTree(conceptId);
                    LocalBinaryCharacterTree.removeConceptType(concept.characterValue, concept.ghostId);
                    LocalBinaryTypeTree.removeConceptType(concept.typeId, concept.ghostId);
                    LocalSyncData.RemoveConcept(concept);
                    // await removeFromDatabase("localconcept", concept.ghostId);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    static AddConceptToMemory(concept) {
        if (concept.id != 0) {
            LocalBinaryTree.addConceptToTree(concept);
            LocalBinaryCharacterTree.addConceptToTree(concept);
            LocalBinaryTypeTree.addConceptToTree(concept);
        }
    }
    static GetConcept(id) {
        return LocalConceptData_awaiter(this, void 0, void 0, function* () {
            var myConcept = CreateDefaultLConcept_CreateDefaultLConcept();
            var node = yield LocalBinaryTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConcept = node.value;
                if (returnedConcept) {
                    myConcept = returnedConcept;
                }
            }
            return myConcept;
        });
    }
    static UpdateConceptSyncStatus(id) {
        return LocalConceptData_awaiter(this, void 0, void 0, function* () {
            LocalBinaryTree.updateSyncStatus(id);
        });
    }
    static GetConceptByGhostId(id) {
        return LocalConceptData_awaiter(this, void 0, void 0, function* () {
            var myConcept = CreateDefaultLConcept_CreateDefaultLConcept();
            var node = yield LocalGhostIdTree.getNodeFromTree(id);
            if (node === null || node === void 0 ? void 0 : node.value) {
                var returnedConcept = node.value;
                if (returnedConcept) {
                    myConcept = returnedConcept;
                }
            }
            return myConcept;
        });
    }
    static GetConceptByCharacter(characterValue) {
        return LocalConceptData_awaiter(this, void 0, void 0, function* () {
            var concept = CreateDefaultLConcept_CreateDefaultLConcept();
            //  for(var i=0; i<this.conceptsArray.length; i++){
            //      if(this.conceptsArray[i].characterValue == characterValue){
            //         concept = this.conceptsArray[i];
            //      }
            //  }
            var Node = LocalBinaryCharacterTree.getNodeFromTree(characterValue);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptByCharacterAndTypeLocal(character_value, typeId) {
        return LocalConceptData_awaiter(this, void 0, void 0, function* () {
            var concept = CreateDefaultLConcept_CreateDefaultLConcept();
            // let conceptList:Concept[] = await this.GetConceptsByTypeId(typeId);
            // for(var i=0;i<conceptList.length; i++){
            //     if(character_value == conceptList[i].characterValue){
            //         concept = conceptList[i];
            //     }
            // }
            var Node = yield LocalBinaryCharacterTree.getCharacterAndTypeFromTree(character_value, typeId);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptByCharacterAndCategoryLocal(character_value, categoryId) {
        return LocalConceptData_awaiter(this, void 0, void 0, function* () {
            var concept = CreateDefaultLConcept_CreateDefaultLConcept();
            var Node = yield LocalBinaryCharacterTree.getCharacterAndCategoryFromTree(character_value, categoryId);
            if (Node) {
                concept = Node.value;
            }
            return concept;
        });
    }
    static GetConceptsByTypeId(typeId) {
        var myConcept;
        let ConceptList = [];
        myConcept = null;
        for (var i = 0; i < this.localconceptsArray.length; i++) {
            if (this.localconceptsArray[i].typeId == typeId) {
                ConceptList.push(this.localconceptsArray[i]);
            }
        }
        return ConceptList;
    }
    static GetConceptsByTypeIdAndUser(typeId, userId) {
        return LocalConceptData_awaiter(this, void 0, void 0, function* () {
            var myConcept;
            let ConceptList = [];
            // myConcept = null;
            //  for(var i=0; i<this.conceptsArray.length; i++){
            //      if(this.conceptsArray[i].typeId == typeId && this.conceptsArray[i].userId == userId){
            //          ConceptList.push(this.conceptsArray[i]);
            //      }
            //  }
            ConceptList = yield LocalBinaryTypeTree.getTypeVariantsFromTreeWithUserId(typeId, userId);
            return ConceptList;
        });
    }
    static ClearData() {
        return LocalConceptData_awaiter(this, void 0, void 0, function* () {
            this.localconceptsArray = [];
            LocalConnectionData.connectionArray = [];
        });
    }
    getName() {
        return this.name;
    }
}
LocalConceptData_LocalConceptsData.localconceptsArray = [];

;// CONCATENATED MODULE: ./src/Api/GetConcept.ts
var GetConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * This function helps you get concept from the id. This can only be positive.
 * @param id The id that you want to get the concept of
 * @returns
 */
function GetConcept_GetConcept(id) {
    return GetConcept_awaiter(this, void 0, void 0, function* () {
        try {
            if (serviceWorker) {
                const res = yield sendMessage('GetConcept', { id });
                console.log('data received from sw', res);
                return res.data;
            }
            let result = CreateDefaultConcept_CreateDefaultConcept();
            var conceptUse = yield ConceptData_ConceptsData.GetConcept(id);
            let isNpc = ConceptData_ConceptsData.GetNpc(id);
            if (conceptUse.id != 0 || isNpc) {
                return conceptUse;
            }
            else {
                var header = GetRequestHeader_GetRequestHeader();
                console.log("this is the url", BaseUrl_BaseUrl.GetConceptUrl());
                const formdata = new FormData();
                formdata.append("id", id.toString());
                const response = yield fetch(BaseUrl_BaseUrl.GetConceptUrl(), {
                    method: 'POST',
                    body: formdata
                });
                if (response.ok) {
                    result = (yield response.json());
                    if (result.id > 0) {
                        ConceptData_ConceptsData.AddConcept(result);
                    }
                    else {
                        ConceptData_ConceptsData.AddNpc(id);
                    }
                }
                else {
                    console.log("Get the concept error", response.status);
                    ErrorPosting_HandleHttpError(response);
                }
                return result;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get the concept error message: ', error.message);
            }
            else {
                console.log('Get the concept unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetConceptUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/GetAllConnectionsOfComposition.ts
var GetAllConnectionsOfComposition_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetAllConnectionsOfComposition(composition_id) {
    return GetAllConnectionsOfComposition_awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        //connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(composition_id);
        connectionList = yield ConnectionData.GetConnectionsOfConcept(composition_id);
        if (connectionList.length == 0) {
            var connectionListString = yield GetAllConnectionsOfComposition_GetAllConnectionsOfCompositionOnline(composition_id);
            connectionList = connectionListString;
        }
        else {
            var newConnectionsString = yield GetAllConnectionsOfComposition_GetAllConnectionsOfCompositionOnline(composition_id);
            var newConnections = newConnectionsString;
            CheckForConnectionDeletion(newConnections, connectionList);
            connectionList = newConnections;
        }
        return connectionList;
    });
}
function GetAllConnectionsOfComposition_GetAllConnectionsOfCompositionOnline(composition_id) {
    return GetAllConnectionsOfComposition_awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        try {
            var header = GetRequestHeader_GetRequestHeader('application/json');
            const myHeaders = new Headers();
            const formdata = new FormData();
            formdata.append("composition_id", composition_id.toString());
            const response = yield fetch(BaseUrl_BaseUrl.GetAllConnectionsOfCompositionUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: formdata
            });
            console.log("this is getting connection from online", BaseUrl_BaseUrl.GetAllConnectionsOfCompositionUrl(), composition_id);
            if (!response.ok) {
                ErrorPosting_HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                ConnectionData.AddConnection(result[i]);
                connectionList.push(result[i]);
            }
            return connectionList;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get all connection of composition error : ', error.message);
            }
            else {
                console.log('Get all connection of composition error : ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetAllConnectionsOfCompositionUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/GetComposition.ts
var GetComposition_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetCompositionById(id) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage('GetCompositionById', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        let connectionListString = yield GetAllConnectionsOfComposition(id);
        connectionList = connectionListString;
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        return { "connectionList": connectionList, "compositionList": compositionList };
    });
}
/**
 * ## format JUSTDATA ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns
 */
function RecursiveFetchBuildLayer(id, connectionList, compositionList) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let returnOutput = {};
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
/**
 * ## format DATAID ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns
 */
function RecursiveFetchBuildLayerDataId(id, connectionList, compositionList) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let returnOutput = {};
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        let FinalReturn = {};
        FinalReturn['created_at'] = concept.entryTimeStamp;
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
/**
 * ## format Normal ##
 * this function builds the composition with the main id as the point of building.
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns
 */
function RecursiveFetchBuildLayerNormal(id, connectionList, compositionList) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let returnOutput = {};
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        let output = yield recursiveFetchConceptNormal(concept, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
/**
 * ## format JUSTDATA ##
 * this function builds the composition with the main id as the point of building.
 * This just requires the id
 * @param id id of the main composition that you want to build
 * @param connectionList  list of connections
 * @param compositionList list of of_the_concept_ids for all the connections.
 * @returns
 */
function GetComposition(id) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (serviceWorker) {
            const res = yield sendMessage('GetComposition', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        let connectionListString = yield GetAllConnectionsOfComposition(id);
        connectionList = connectionListString;
        console.log("this is the connection list online", connectionList);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
function GetCompositionWithAllIds(id) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let connectionList = [];
        let returnOutput = {};
        let connectionListString = yield GetAllConnectionsOfComposition(id);
        connectionList = connectionListString;
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        let output = yield recursiveFetchWithSubCompositions(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
/**
 * ### Format JUSTDATA ###
 * This function just builds data from the memory.
 * This is a function that takes on all the concepts and connections of the concept (as a composition ) and builds
 * it into a json data.
 * @param id this id is just used to get all the composition data from the concepts and connections in memory
 * @returns
 */
function GetCompositionFromMemory(id) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (serviceWorker) {
            const res = yield sendMessage('GetCompositionFromMemory', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
        connectionList = yield ConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        let output = yield recursiveFetchConcept(concept, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
/**
 * ### Format Normal ###
 * This function just builds data from the memory.
 * This is a function that takes on all the concepts and connections of the concept (as a composition ) and builds
 * it into a json data.
 * @param id this id is just used to get all the composition data from the concepts and connections in memory
 * @returns
 */
function GetCompositionFromMemoryNormal(id) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let connectionList = [];
        let returnOutput = {};
        //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
        connectionList = yield ConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = ConnectionData.GetConnectionsOfComposition(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        let output = yield recursiveFetchConceptNormal(concept, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        return returnOutput;
    });
}
/**
 * ### Format DATAIDDATE ####
 * Gets data just from memory
 * @param id
 * @returns
 */
function GetCompositionWithIdFromMemory(id) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (serviceWorker) {
            const res = yield sendMessage('GetCompositionWithIdFromMemory', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        // connectionList = await ConnectionData.GetConnectionsOfConcept(id);
        connectionList = yield ConnectionData.GetConnectionsOfCompositionLocal(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        let output = yield recursiveFetchConcept(concept, connectionList, compositionList);
        // let output = await recursiveFetchConceptSingleLoop(concept, connectionList,compositionList );
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        let FinalReturn = {};
        FinalReturn['created_at'] = concept.entryTimeStamp;
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
/**
 * ### Format DATAIDDATE ####
 * ### experimental ####
 * This is the new format that needs to work with a single or max two loops
 * @param id the id whose composition needs to be created
 * @returns
 */
function GetCompositionWithIdFromMemoryNew(id) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        let connectionList = [];
        let returnOutput = {};
        //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
        connectionList = yield ConnectionData.GetConnectionsOfCompositionLocal(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            console.log("this concept you cannot find ", id);
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        let startTime = new Date().getTime();
        //console.log("this is the connection list which has to be looped", connectionList);
        let output = yield recursiveFetchConceptSingleLoop(concept, connectionList, compositionList);
        console.log("this is the time for the data to be made", new Date().getTime() - startTime);
        // let output = await recursiveFetchConceptSingleLoop(concept, connectionList,compositionList );
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput = output;
        let FinalReturn = {};
        FinalReturn['created_at'] = concept.entryTimeStamp;
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
/**
 * ### Format DATAIDDATE #####
 * ### This just returns composition from memory and not from anywhere else.
 * @param id
 * @returns
 */
function GetCompositionWithIdAndDateFromMemory(id) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (serviceWorker) {
            const res = yield sendMessage('GetCompositionWithIdAndDateFromMemory', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        connectionList = yield ConnectionData.GetConnectionsOfCompositionLocal(id);
        //connectionList = await ConnectionData.GetConnectionsOfConcept(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        let FinalReturn = {};
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        FinalReturn['created_at'] = concept.entryTimeStamp;
        return FinalReturn;
    });
}
function GetCompositionWithIdFromMemoryFromConnections(id_1) {
    return GetComposition_awaiter(this, arguments, void 0, function* (id, connectionList = []) {
        var _a, _b;
        let returnOutput = {};
        //connectionList = await ConnectionData.GetConnectionsOfCompositionLocal(id);
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield GetConcept(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        let FinalReturn = {};
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
/**
 * #### Format DATAID ####
 * ## This will return the composition even if it is not in the local memory ##
 * @param id
 * @returns
 */
function GetCompositionWithId(id) {
    return GetComposition_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        if (serviceWorker) {
            const res = yield sendMessage('GetCompositionWithId', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        let returnOutput = {};
        let connectionListString = yield GetAllConnectionsOfComposition(id);
        connectionList = connectionListString;
        let compositionList = [];
        for (let i = 0; i < connectionList.length; i++) {
            if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                compositionList.push(connectionList[i].ofTheConceptId);
            }
        }
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        let output = yield recursiveFetch(id, connectionList, compositionList);
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        returnOutput[mainString] = output;
        let FinalReturn = {};
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = id;
        return FinalReturn;
    });
}
/**
 * ## Format justdata ###
 * ## This contains a concept in the parameter so that you dont have to again find the concept ##
 * This function takes concepts and connections and then builds a json.
 * @param concept The concept that needs to get other concepts that are inside of it.
 * @param connectionList List of connections that are available in the composition. We have to loop over it.
 * @param compositionList Composition list is the list of concepts that have connections inside of them.
 * @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
 * @returns
 */
function recursiveFetchConcept(concept_1, connectionList_1, compositionList_1) {
    return GetComposition_awaiter(this, arguments, void 0, function* (concept, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d;
        let output = {};
        let arroutput = [];
        let id = concept.id;
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            for (let i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    if (id != connectionList[i].toTheConceptId) {
                        let toConceptId = connectionList[i].toTheConceptId;
                        let toConcept = yield ConceptData_ConceptsData.GetConcept(toConceptId);
                        if ((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined) {
                            let conceptString = yield GetConcept_GetConcept(toConceptId);
                            toConcept = conceptString;
                        }
                        if (toConcept.id != 0) {
                            if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                                let toConceptTypeId = toConcept.typeId;
                                let toConceptType = yield ConceptData_ConceptsData.GetConcept(toConceptTypeId);
                                toConcept.type = toConceptType;
                                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                    let conceptString = yield GetConcept_GetConcept(toConceptTypeId);
                                    toConceptType = conceptString;
                                    toConcept.type = toConceptType;
                                }
                            }
                        }
                        let regex = "the_";
                        let localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
                        let localKey = localmainString.replace(regex, "");
                        if (isNaN(Number(localKey))) {
                            if (localKey) {
                                const result = yield recursiveFetchConcept(toConcept, connectionList, compositionList, visitedConcepts);
                                output[localKey] = result;
                            }
                        }
                        else {
                            const result = yield recursiveFetchConcept(toConcept, connectionList, compositionList, visitedConcepts);
                            arroutput[localKey] = result;
                            output = arroutput;
                        }
                    }
                    else {
                        console.log("this is the faulty connection ", connectionList[i]);
                    }
                }
            }
        }
        return output;
    });
}
/**
* ## Format Normal ###
* ## This contains a concept in the parameter so that you dont have to again find the concept ##
* This function takes concepts and connections and then builds a json.
* @param concept The concept that needs to get other concepts that are inside of it.
* @param connectionList List of connections that are available in the composition. We have to loop over it.
* @param compositionList Composition list is the list of concepts that have connections inside of them.
* @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
* @returns
*/
function recursiveFetchConceptNormal(concept_1, connectionList_1, compositionList_1) {
    return GetComposition_awaiter(this, arguments, void 0, function* (concept, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d;
        let startTime = new Date().getTime();
        let output = {};
        let arroutput = [];
        let id = concept.id;
        output["id"] = id;
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            for (let i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    if (id != connectionList[i].toTheConceptId) {
                        let toConceptId = connectionList[i].toTheConceptId;
                        let toConcept = yield ConceptData_ConceptsData.GetConcept(toConceptId);
                        if ((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined) {
                            let conceptString = yield GetConcept_GetConcept(toConceptId);
                            toConcept = conceptString;
                        }
                        if (toConcept.id != 0) {
                            if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                                let toConceptTypeId = toConcept.typeId;
                                let toConceptType = yield ConceptData_ConceptsData.GetConcept(toConceptTypeId);
                                toConcept.type = toConceptType;
                                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                    let conceptString = yield GetConcept_GetConcept(toConceptTypeId);
                                    toConceptType = conceptString;
                                    toConcept.type = toConceptType;
                                }
                            }
                        }
                        let regex = "the_";
                        let localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
                        let localKey = localmainString.replace(regex, "");
                        if (isNaN(Number(localKey))) {
                            if (localKey) {
                                const result = yield recursiveFetchConcept(toConcept, connectionList, compositionList, visitedConcepts);
                                output[localKey] = result;
                            }
                        }
                        else {
                            const result = yield recursiveFetchConcept(toConcept, connectionList, compositionList, visitedConcepts);
                            arroutput[localKey] = result;
                            output = arroutput;
                        }
                    }
                    else {
                        console.log("this is the faulty connection ", connectionList[i]);
                    }
                }
            }
        }
        // console.log("second loop normal", new Date().getTime() - startTime);
        return output;
    });
}
/**
 * ## experimental ##
* This function takes concepts and connections and then builds a json.
* @param concept The concept that needs to get other concepts that are inside of it.
* @param connectionList List of connections that are available in the composition. We have to loop over it.
* @param compositionList Composition list is the list of concepts that have connections inside of them.
* @param visitedConcepts This is a checking mechanism to not go in loops. So preferably pass an empty array.
* @returns
*/
function recursiveFetchConceptSingleLoop(concept_1, connectionList_1, compositionList_1) {
    return GetComposition_awaiter(this, arguments, void 0, function* (concept, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let output = {};
        let id = concept.id;
        let startTime = new Date().getTime();
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            let myString = mainString;
            let returnoutput = { [myString]: concept === null || concept === void 0 ? void 0 : concept.characterValue };
            return returnoutput;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            for (let i = 0; i < connectionList.length; i++) {
                let newData = yield GetTheConcept(connectionList[i].ofTheConceptId);
                let toConcept = yield GetTheConcept(connectionList[i].toTheConceptId);
                connectionList[i].ofConcept = newData;
                connectionList[i].toConcept = toConcept;
                let ofKey = newData.id;
                let toConceptKey = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
                let regex = "the_";
                let localmainString = toConceptKey;
                let localToKey = localmainString.replace(regex, "");
                if (output[ofKey] == undefined || output[ofKey] == null) {
                    output[ofKey] = {};
                }
                output[ofKey][localToKey] = toConcept.characterValue;
            }
        }
        let finalOutput = {};
        for (let i = 0; i < connectionList.length; i++) {
            let ofConcept = connectionList[i].ofConcept;
            let toConcept = connectionList[i].toConcept;
            let ofConceptKey = (_f = (_e = ofConcept === null || ofConcept === void 0 ? void 0 : ofConcept.type) === null || _e === void 0 ? void 0 : _e.characterValue) !== null && _f !== void 0 ? _f : "";
            let toConceptKey = (_h = (_g = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _g === void 0 ? void 0 : _g.characterValue) !== null && _h !== void 0 ? _h : "";
            let regex = "the_";
            let localmainString = toConceptKey;
            let localToKey = localmainString.replace(regex, "");
            if (finalOutput[ofConcept.id] == undefined || finalOutput[ofConcept.id] == null) {
                finalOutput[ofConcept.id] = {};
            }
            let internalOutput = finalOutput[ofConcept.id];
            if (internalOutput[ofConceptKey] == undefined || internalOutput[ofConceptKey] == null) {
                internalOutput[ofConceptKey] = {};
            }
            if (output[connectionList[i].ofTheConceptId] != undefined && output[connectionList[i].toTheConceptId] != undefined) {
                internalOutput[ofConceptKey][localToKey] = output[toConcept.id];
            }
            else {
                internalOutput[ofConceptKey][localToKey] = toConcept.characterValue;
            }
        }
        return finalOutput[concept.id];
    });
}
/**
 * ## Format justdata ##
 * @param id
 * @param connectionList
 * @param compositionList
 * @param visitedConcepts
 * @returns
 */
function recursiveFetch(id_1, connectionList_1, compositionList_1) {
    return GetComposition_awaiter(this, arguments, void 0, function* (id, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d;
        let output = {};
        let arroutput = [];
        if (id == 0) {
            return null;
        }
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        if (concept.id != 0) {
            if (concept.type == null) {
                let toConceptTypeId = concept.typeId;
                let toConceptType = yield ConceptData_ConceptsData.GetConcept(toConceptTypeId);
                concept.type = toConceptType;
                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                    let conceptString = yield GetConcept_GetConcept(toConceptTypeId);
                    toConceptType = conceptString;
                    concept.type = toConceptType;
                }
            }
        }
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            for (let i = 0; i < connectionList.length; i++) {
                let insideTime = new Date().getTime();
                if (connectionList[i].ofTheConceptId == id) {
                    if (id != connectionList[i].toTheConceptId) {
                        let toConceptId = connectionList[i].toTheConceptId;
                        let toConcept = yield ConceptData_ConceptsData.GetConcept(toConceptId);
                        if ((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined) {
                            let conceptString = yield GetConcept_GetConcept(toConceptId);
                            toConcept = conceptString;
                        }
                        if (toConcept.id != 0) {
                            if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                                let toConceptTypeId = toConcept.typeId;
                                let toConceptType = yield ConceptData_ConceptsData.GetConcept(toConceptTypeId);
                                toConcept.type = toConceptType;
                                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                    let conceptString = yield GetConcept_GetConcept(toConceptTypeId);
                                    toConceptType = conceptString;
                                    toConcept.type = toConceptType;
                                }
                            }
                        }
                        let regex = "the_";
                        let localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
                        let localKey = localmainString.replace(regex, "");
                        if (isNaN(Number(localKey))) {
                            if (localKey) {
                                const result = yield recursiveFetch(toConceptId, connectionList, compositionList, visitedConcepts);
                                output[localKey] = result;
                            }
                        }
                        else {
                            const result = yield recursiveFetch(toConceptId, connectionList, compositionList, visitedConcepts);
                            arroutput[localKey] = result;
                            output = arroutput;
                        }
                    }
                    else {
                        console.log("this is the faulty connection ", connectionList[i]);
                    }
                }
            }
        }
        return output;
    });
}
function recursiveFetchWithSubCompositions(id_1, connectionList_1, compositionList_1) {
    return GetComposition_awaiter(this, arguments, void 0, function* (id, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d;
        let output = {};
        let arroutput = [];
        if (id == 0) {
            return null;
        }
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            let conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        if (concept.id != 0) {
            if (concept.type == null) {
                let toConceptTypeId = concept.typeId;
                let toConceptType = yield ConceptData_ConceptsData.GetConcept(toConceptTypeId);
                concept.type = toConceptType;
                if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                    let conceptString = yield GetConcept_GetConcept(toConceptTypeId);
                    toConceptType = conceptString;
                    concept.type = toConceptType;
                }
            }
        }
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            output["id"] = id;
            for (let i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    let toConceptId = connectionList[i].toTheConceptId;
                    let toConcept = yield ConceptData_ConceptsData.GetConcept(toConceptId);
                    if ((toConcept == null || toConcept.id == 0) && toConceptId != null && toConceptId != undefined) {
                        let conceptString = yield GetConcept_GetConcept(toConceptId);
                        toConcept = conceptString;
                    }
                    if (toConcept) {
                        if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                            let toConceptTypeId = toConcept.typeId;
                            let toConceptType = yield ConceptData_ConceptsData.GetConcept(toConceptTypeId);
                            toConcept.type = toConceptType;
                            if (toConceptType == null && toConceptTypeId != null && toConceptTypeId != undefined) {
                                let conceptString = yield GetConcept_GetConcept(toConceptTypeId);
                                toConceptType = conceptString;
                                toConcept.type = toConceptType;
                            }
                        }
                    }
                    let regex = "the_";
                    let localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "";
                    let localKey = localmainString.replace(regex, "");
                    if (isNaN(Number(localKey))) {
                        if (localKey) {
                            const result = yield recursiveFetchWithSubCompositions(toConceptId, connectionList, compositionList);
                            output[localKey] = result;
                        }
                    }
                    else {
                        const result = yield recursiveFetchWithSubCompositions(toConceptId, connectionList, compositionList);
                        arroutput[localKey] = result;
                        output = arroutput;
                    }
                }
            }
        }
        return output;
    });
}

;// CONCATENATED MODULE: ./src/Api/GetConceptByCharacterValue.ts
var GetConceptByCharacterValue_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetConceptByCharacterValue(characterValue) {
    return GetConceptByCharacterValue_awaiter(this, void 0, void 0, function* () {
        let result = CreateDefaultConcept_CreateDefaultConcept();
        try {
            const formdata = new FormData();
            formdata.append("character_value", characterValue);
            const response = yield fetch(BaseUrl_BaseUrl.GetConceptByCharacterValueUrl(), {
                method: 'POST',
                body: formdata
            });
            if (response.ok) {
                result = (yield response.json());
                if (result.id > 0) {
                    ConceptData_ConceptsData.AddConcept(result);
                }
            }
            else {
                ErrorPosting_HandleHttpError(response);
                console.log("Error in Getting concept by character value Error", response.status);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Error in Getting concept by character value error message: ', error);
            }
            else {
                console.log('Error in Getting concept by character value unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetConceptByCharacterValueUrl());
        }
        return result;
    });
}

;// CONCATENATED MODULE: ./src/Services/GetConceptByCharacter.ts
var GetConceptByCharacter_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetConceptByCharacter(characterValue) {
    return GetConceptByCharacter_awaiter(this, void 0, void 0, function* () {
        let concept = yield ConceptData_ConceptsData.GetConceptByCharacter(characterValue);
        let literalCharacter = `${characterValue}`;
        if ((concept == null || (concept === null || concept === void 0 ? void 0 : concept.id) == 0) && literalCharacter) {
            yield GetConceptByCharacterValue(characterValue);
            concept = yield ConceptData_ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue, 51);
            if (concept.id == 0) {
                concept = yield ConceptData_ConceptsData.GetConceptByCharacter(characterValue);
            }
        }
        return concept;
    });
}
function GetConceptByCharacterUpdated(characterValue) {
    return GetConceptByCharacter_awaiter(this, void 0, void 0, function* () {
        let concept = yield ConceptData_ConceptsData.GetConceptByCharacter(characterValue);
        let literalCharacter = `${characterValue}`;
        if ((concept == null || (concept === null || concept === void 0 ? void 0 : concept.id) == 0) && literalCharacter) {
            yield GetConceptByCharacterValue(characterValue);
            concept = yield ConceptData_ConceptsData.GetConceptByCharacter(characterValue);
        }
        return concept;
    });
}

;// CONCATENATED MODULE: ./src/Api/Local/GetLocalConceptByCharacterValue.ts
var GetLocalConceptByCharacterValue_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetLocalConceptByCharacterValue_GetLocalConceptByCharacterValue(characterValue) {
    return GetLocalConceptByCharacterValue_awaiter(this, void 0, void 0, function* () {
        let result = CreateDefaultLConcept();
        try {
            var header = GetRequestHeader('application/x-www-form-urlencoded');
            const response = yield fetch(BaseUrl.GetConceptByCharacterValueUrl(), {
                method: 'POST',
                headers: header,
                body: `character_value=${characterValue}`
            });
            if (response.ok) {
                result = (yield response.json());
                if (result.id > 0) {
                    LocalConceptsData.AddConcept(result);
                }
            }
            else {
                console.log("Error in Getting Local concept by character value Error", response.status);
                HandleHttpError(response);
            }
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Error in Getting Local concept by character value error message: ', error);
            }
            else {
                console.log('Error in Getting Local concept by character value unexpected error: ', error);
            }
            throw result;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/GetConceptByCharacterLocal.ts
var GetConceptByCharacterLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetConceptByCharacterLocal(characterValue) {
    return GetConceptByCharacterLocal_awaiter(this, void 0, void 0, function* () {
        let concept = yield LocalConceptData_LocalConceptsData.GetConceptByCharacterAndTypeLocal(characterValue, 51);
        return concept;
    });
}
/**
 *
 * @param character the character value of the concept we want to find in our local system.
 * @returns LConcept which will be the associated concept with the character Value.
 */
function GetConceptByCharacterAndCategoryLocal(character) {
    return GetConceptByCharacterLocal_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage('GetConceptByCharacterAndCategoryLocal', { character });
            console.log('data received from sw', res);
            return res.data;
        }
        let lconcept = CreateDefaultLConcept_CreateDefaultLConcept();
        if (character == "the") {
            lconcept.id = 1;
            lconcept.typeId = 5;
            lconcept.characterValue = "the";
            return lconcept;
        }
        let splittedStringArray = SplitStrings(character);
        if (splittedStringArray.length > 1) {
            let category = 1;
            let prefix = yield GetConceptByCharacterAndCategoryLocal(splittedStringArray[0]);
            if (prefix.id != 0) {
                category = prefix.id;
            }
            lconcept = yield GetConceptByCategoryAndCharacterLocalMemory(character, category);
        }
        else if (splittedStringArray[0] == character) {
            lconcept = yield GetConceptByCharacterLocal(character);
        }
        return lconcept;
    });
}
function GetConceptByCategoryAndCharacterLocalMemory(value, categoryId) {
    return GetConceptByCharacterLocal_awaiter(this, void 0, void 0, function* () {
        let concept = LocalConceptData_LocalConceptsData.GetConceptByCharacterAndCategoryLocal(value, categoryId);
        return concept;
    });
}
function GetConceptByCharacterLocalFull(characterValue) {
    return GetConceptByCharacterLocal_awaiter(this, void 0, void 0, function* () {
        try {
            let concept = yield LocalConceptsData.GetConceptByCharacter(characterValue);
            let literalCharacter = `${characterValue}`;
            if ((concept == null || (concept === null || concept === void 0 ? void 0 : concept.id) == 0) && literalCharacter) {
                yield GetLocalConceptByCharacterValue(characterValue);
                concept = yield LocalConceptsData.GetConceptByCharacter(characterValue);
            }
            return concept;
        }
        catch (error) {
            console.log("this is the error in Get Concept By Character Local full", error);
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/GetCompositionList.ts
var GetCompositionList_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








// get the list of compositions from the type 
// for eg get list of boomgpt
function GetCompositionList(compositionName_1, userId_1) {
    return GetCompositionList_awaiter(this, arguments, void 0, function* (compositionName, userId, inpage = 10, page = 1) {
        if (serviceWorker) {
            const res = yield sendMessage('GetCompositionList', { compositionName, userId, inpage, page });
            console.log('data received from sw', res);
            return res.data;
        }
        let concept = yield GetConceptByCharacter(compositionName);
        let CompositionList = [];
        if (concept) {
            yield GetAllConceptsByType(compositionName, userId);
            let conceptList = yield ConceptData_ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            let startPage = inpage * (page - 1);
            let prefetchComposition = [];
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    prefetchComposition.push(conceptList[i].id);
                }
            }
            yield GetAllConnectionsOfCompositionBulk(prefetchComposition);
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    let compositionJson = yield GetCompositionFromMemory(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}
function GetCompositionListAll(compositionName_1, userId_1) {
    return GetCompositionList_awaiter(this, arguments, void 0, function* (compositionName, userId, inpage = 10, page = 1) {
        let LocalCompositionList = GetCompositionListLocal(compositionName, userId);
        let CompositionList = GetCompositionList(compositionName, userId);
        let AllList = [];
        Promise.race([LocalCompositionList, CompositionList])
            .then((result) => {
            console.log("Promise result", result);
            AllList.push(...result);
        })
            .catch((error) => {
            console.log("error in handling", error);
        });
        CompositionList.then((result) => {
            console.log("This is the second promise result", result);
            AllList.push(...result);
        });
        return AllList;
    });
}
// export async function GetCompositionListAllWithId(compositionName: string,userId:number,  inpage:number = 10, page:number =1){
//    let LocalCompositionList =  await GetCompositionListLocalWithId(compositionName, userId);
//    console.log("tbis is the local composition list", LocalCompositionList);
//    let CompositionList =    await GetCompositionListWithId(compositionName,userId)
//    console.log("this is the online composition list", CompositionList);
//    let AllList: any[] = [];
//    // Promise.race([LocalCompositionList, CompositionList])
//    // .then((result)=> {
//    //    console.log("Promise result", result);
//    //    AllList.push(...result);
//    // })
//    // .catch((error)=>{
//    //    console.log("error in handling", error);
//    // });
//    // CompositionList.then((result)=>{
//    //    console.log("This is the second promise result", result);
//    //    AllList.push(...result);
//    // })
//    AllList.push(...LocalCompositionList);
//    AllList.push(...CompositionList);
//    return AllList;
// }
function GetCompositionListAllWithId(compositionName_1, userId_1) {
    return GetCompositionList_awaiter(this, arguments, void 0, function* (compositionName, userId, inpage = 10, page = 1) {
        let conceptLocal = yield GetConceptByCharacterLocal(compositionName);
        let conceptOnline = yield GetConceptByCharacter(compositionName);
        let CompositionList = [];
        let conceptList = [];
        let conceptListLocal = [];
        let finalLocal = [];
        let conceptListOnline = [];
        if (conceptLocal.id != 0) {
            conceptListLocal = yield LocalConceptData_LocalConceptsData.GetConceptsByTypeIdAndUser(conceptLocal.id, userId);
        }
        if (conceptOnline.id != 0) {
            yield GetAllConceptsByType(compositionName, userId);
            conceptListOnline = yield ConceptData_ConceptsData.GetConceptsByTypeIdAndUser(conceptOnline.id, userId);
            conceptList = conceptListOnline;
        }
        for (let i = 0; i < conceptListLocal.length; i++) {
            let isDuplicate = false;
            for (let j = 0; j < conceptListOnline.length; j++) {
                if (conceptListLocal[i].ghostId == conceptListOnline[j].ghostId) {
                    isDuplicate = true;
                }
            }
            if (!isDuplicate) {
                finalLocal.push(conceptListLocal[i]);
            }
        }
        console.log("This is the all list", finalLocal);
        let AllList = [];
        AllList = yield FormatTheConcepts(conceptList, finalLocal, inpage, page);
        return AllList;
    });
}
function GetCompositionListWithId(compositionName_1, userId_1) {
    return GetCompositionList_awaiter(this, arguments, void 0, function* (compositionName, userId, inpage = 10, page = 1) {
        if (serviceWorker) {
            const res = yield sendMessage('GetCompositionListWithId', { compositionName, userId, inpage, page });
            console.log('data received from sw', res);
            return res.data;
        }
        let concept = yield GetConceptByCharacter(compositionName);
        let CompositionList = [];
        if (concept) {
            yield GetAllConceptsByType(compositionName, userId);
            let conceptList = yield ConceptData_ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            let startPage = inpage * (page - 1);
            let prefetchComposition = [];
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    prefetchComposition.push(conceptList[i].id);
                }
            }
            yield GetAllConnectionsOfCompositionBulk(prefetchComposition);
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    let compositionJson = yield GetCompositionWithIdFromMemory(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}
function GetCompositionListWithIdUpdated(compositionName_1, userId_1) {
    return GetCompositionList_awaiter(this, arguments, void 0, function* (compositionName, userId, inpage = 10, page = 1) {
        let concept = yield GetConceptByCharacterUpdated(compositionName);
        let CompositionList = [];
        if (concept) {
            yield GetAllConceptsByType(compositionName, userId);
            let conceptList = yield ConceptData_ConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
            let startPage = inpage * (page - 1);
            let prefetchComposition = [];
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    prefetchComposition.push(conceptList[i].id);
                }
            }
            yield GetAllConnectionsOfCompositionBulk(prefetchComposition);
            for (let i = startPage; i < startPage + inpage; i++) {
                if (conceptList[i]) {
                    let compositionJson = yield GetCompositionWithIdFromMemory(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
        }
        return CompositionList;
    });
}
function FormatTheConcepts(conceptList_1, localConceptList_1) {
    return GetCompositionList_awaiter(this, arguments, void 0, function* (conceptList, localConceptList, inpage = 10, page = 1) {
        let CompositionList = [];
        let startPage = inpage * (page - 1);
        let prefetchComposition = [];
        let localConceptLength = localConceptList.length;
        for (let i = startPage; i < startPage + inpage - localConceptLength; i++) {
            if (conceptList[i]) {
                prefetchComposition.push(conceptList[i].id);
            }
        }
        for (let i = 0; i < localConceptList.length; i++) {
            let compositionJson = yield GetCompositionLocalWithId(localConceptList[i].id);
            CompositionList.push(compositionJson);
        }
        yield GetAllConnectionsOfCompositionBulk(prefetchComposition);
        for (let i = startPage; i < startPage + inpage - localConceptLength; i++) {
            if (conceptList[i]) {
                let compositionJson = yield GetCompositionWithIdFromMemory(conceptList[i].id);
                CompositionList.push(compositionJson);
            }
        }
        return CompositionList;
    });
}

;// CONCATENATED MODULE: ./src/Api/Translate/TranslateLocalToReal.ts
var TranslateLocalToReal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function TranslateLocalToReal(conceptId) {
    return TranslateLocalToReal_awaiter(this, void 0, void 0, function* () {
        let result = CreateDefaultConcept_CreateDefaultConcept();
        try {
            var header = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded');
            const response = yield fetch(BaseUrl_BaseUrl.GetRealConceptById(), {
                method: 'POST',
                headers: header,
                body: `id=${conceptId}`
            });
            if (response.ok) {
                result = (yield response.json());
                if (result.id > 0) {
                    ConceptData_ConceptsData.AddConcept(result);
                }
                return result;
            }
            else {
                console.log("Error in Getting Translating concept Error", response.status);
                ErrorPosting_HandleHttpError(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Error in Getting Translating concept error message: ', error);
            }
            else {
                console.log('Error in Getting Translating concept unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetRealConceptById());
        }
        return result;
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/GetCompositionLocal.ts
var GetCompositionLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetCompositionLocal(id) {
    return GetCompositionLocal_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            if (serviceWorker) {
                const res = yield sendMessage('GetCompositionLocal', { id });
                console.log('data received from sw', res);
                return res.data;
            }
            let connectionList = [];
            let returnOutput = {};
            connectionList = yield LocalConnectionData.GetConnectionsOfCompositionLocal(id);
            //connectionList = ConnectionData.GetConnectionsOfComposition(id);
            let compositionList = [];
            for (let i = 0; i < connectionList.length; i++) {
                if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                    compositionList.push(connectionList[i].ofTheConceptId);
                }
            }
            let concept = yield LocalConceptData_LocalConceptsData.GetConcept(id);
            if (concept.id == 0) {
                let realConcept = yield TranslateLocalToReal(id);
                if (realConcept.id > 0) {
                    return yield GetComposition(realConcept.id);
                }
            }
            let output = yield recursiveFetchLocal(id, connectionList, compositionList);
            let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
            returnOutput[mainString] = output;
            return returnOutput;
        }
        catch (error) {
            throw error;
        }
    });
}
function GetCompositionLocalWithId(id) {
    return GetCompositionLocal_awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        try {
            if (serviceWorker) {
                const res = yield sendMessage('GetCompositionLocalWithId', { id });
                console.log('data received from sw', res);
                return res.data;
            }
            let connectionList = [];
            let returnOutput = {};
            let FinalReturn = {};
            connectionList = yield LocalConnectionData.GetConnectionsOfCompositionLocal(id);
            let compositionList = [];
            for (let i = 0; i < connectionList.length; i++) {
                if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                    compositionList.push(connectionList[i].ofTheConceptId);
                }
            }
            let concept = yield LocalConceptData_LocalConceptsData.GetConcept(id);
            if (concept.id != 0) {
                let output = yield recursiveFetchLocal(id, connectionList, compositionList);
                let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
                returnOutput[mainString] = output;
            }
            FinalReturn['data'] = returnOutput;
            FinalReturn['id'] = id;
            return FinalReturn;
        }
        catch (error) {
            throw error;
        }
    });
}
function recursiveFetchLocal(id_1, connectionList_1, compositionList_1) {
    return GetCompositionLocal_awaiter(this, arguments, void 0, function* (id, connectionList, compositionList, visitedConcepts = []) {
        var _a, _b, _c, _d;
        let output = {};
        let arroutput = [];
        let concept = yield LocalConceptData_LocalConceptsData.GetConcept(id);
        if (concept.id != 0) {
            if (concept.type == null) {
                let toConceptTypeId = concept.typeId;
                let toConceptType = yield LocalConceptData_LocalConceptsData.GetConcept(toConceptTypeId);
                concept.type = toConceptType;
            }
        }
        let mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "top";
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            for (let i = 0; i < connectionList.length; i++) {
                if (connectionList[i].ofTheConceptId == id) {
                    let toConceptId = connectionList[i].toTheConceptId;
                    let toConcept = yield LocalConceptData_LocalConceptsData.GetConcept(toConceptId);
                    if (toConcept.id != 0) {
                        if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                            let toConceptTypeId = toConcept.typeId;
                            let toConceptType = yield LocalConceptData_LocalConceptsData.GetConcept(toConceptTypeId);
                            toConcept.type = toConceptType;
                        }
                    }
                    let regex = "the_";
                    let localmainString = (_d = (_c = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "top";
                    let localKey = localmainString.replace(regex, "");
                    if (isNaN(Number(localKey))) {
                        if (localKey) {
                            const result = yield recursiveFetchLocal(toConceptId, connectionList, compositionList);
                            output[localKey] = result;
                        }
                    }
                    else {
                        const result = yield recursiveFetchLocal(toConceptId, connectionList, compositionList);
                        arroutput[localKey] = result;
                        output = arroutput;
                    }
                }
            }
        }
        return output;
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/GetCompositionListLocal.ts
var GetCompositionListLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function returns the list of composition which have the type @param compositionName
 * @param compositionName The type of the composition to pull
 * @param userId User Id of the user trying to pull the list
 * @returns list of compositions.
 */
function GetCompositionListLocal(compositionName, userId) {
    return GetCompositionListLocal_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage('GetCompositionListLocal', { compositionName, userId });
            console.log('data received from sw', res);
            return res.data;
        }
        try {
            let concept = yield GetConceptByCharacterLocal(compositionName);
            let CompositionList = [];
            if (concept.id != 0) {
                let conceptList = yield LocalConceptData_LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
                for (let i = 0; i < conceptList.length; i++) {
                    let compositionJson = yield GetCompositionLocal(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
            return CompositionList;
        }
        catch (error) {
            throw error;
        }
    });
}
/**
 * This function returns the list of composition with data - id format which have the type @param compositionName
 * @param compositionName The type of the composition to pull
 * @param userId User Id of the user trying to pull the list
 * @returns list of compositions with data - id format.
 */
function GetCompositionListLocalWithId(compositionName, userId) {
    return GetCompositionListLocal_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage('GetCompositionListLocalWithId', { compositionName, userId });
            console.log('data received from sw', res);
            return res.data;
        }
        try {
            let concept = yield GetConceptByCharacterLocal(compositionName);
            let CompositionList = [];
            if (concept.id != 0) {
                let conceptList = yield LocalConceptData_LocalConceptsData.GetConceptsByTypeIdAndUser(concept.id, userId);
                for (let i = 0; i < conceptList.length; i++) {
                    let compositionJson = yield GetCompositionLocalWithId(conceptList[i].id);
                    CompositionList.push(compositionJson);
                }
            }
            return CompositionList;
        }
        catch (error) {
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/Create/CreateTheConceptApi.ts
var CreateTheConceptApi_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function CreateTheConceptApi(conceptData) {
    return CreateTheConceptApi_awaiter(this, void 0, void 0, function* () {
        let result = CreateDefaultConcept_CreateDefaultConcept();
        try {
            var header = GetRequestHeader_GetRequestHeader();
            const response = yield fetch(BaseUrl_BaseUrl.CreateTheConceptUrl(), {
                method: 'POST',
                headers: header,
                body: JSON.stringify(conceptData),
            });
            if (!response.ok) {
                ErrorPosting_HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            const resultString = yield response.json();
            result = resultString;
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Create the concept api error message: ', error.message);
            }
            else {
                console.log('Create the concept api unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.CreateTheConceptUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/Create/CreateTheConnectionApi.ts
var CreateTheConnectionApi_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function CreateTheConnectionApi(connectionData) {
    return CreateTheConnectionApi_awaiter(this, void 0, void 0, function* () {
        let result = new Connection_Connection(0, 0, 0, 0, 0, 0, 0);
        try {
            var header = GetRequestHeader_GetRequestHeader();
            var jsonData = JSON.stringify(connectionData);
            const response = yield fetch(BaseUrl_BaseUrl.CreateTheConnectionUrl(), {
                method: 'POST',
                headers: header,
                body: jsonData
            });
            if (response.ok) {
                const result = yield response.json();
            }
            else {
                console.log('Create the connection error message: ', response.status);
                ErrorPosting_HandleHttpError(response);
            }
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Create the connection error message: ', error.message);
            }
            else {
                console.log(' Create the connection unexpected error: ', error);
            }
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/SyncData.ts
var SyncData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class SyncData {
    static CheckContains(concept) {
        var contains = false;
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (this.conceptsSyncArray[i].id == concept.id) {
                contains = true;
            }
        }
        return contains;
    }
    static SyncDataDelete(id) {
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (id == this.conceptsSyncArray[i].id) {
                this.conceptsSyncArray.splice(i, 1);
            }
        }
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].ofTheConceptId == id || this.connectionSyncArray[i].toTheConceptId == id || this.connectionSyncArray[i].typeId == id) {
                this.connectionSyncArray.splice(i, 1);
            }
        }
    }
    static CheckContainsConnection(connection) {
        var contains = false;
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].id == connection.id) {
                contains = true;
            }
        }
        return contains;
    }
    static AddConcept(concept) {
        var contains = false;
        // ConceptsData.AddConceptTemporary(concept);
        if (!contains) {
            this.conceptsSyncArray.push(concept);
        }
    }
    static RemoveConcept(concept) {
        for (var i = 0; i < this.conceptsSyncArray.length; i++) {
            if (this.conceptsSyncArray[i].id == concept.id) {
                this.conceptsSyncArray.splice(i, 1);
            }
        }
    }
    static AddConnection(connection) {
        this.connectionSyncArray.push(connection);
    }
    static RemoveConnection(connection) {
        for (var i = 0; i < this.connectionSyncArray.length; i++) {
            if (this.connectionSyncArray[i].id == connection.id) {
                this.connectionSyncArray.splice(i, 1);
            }
        }
    }
    static SyncDataOnline() {
        return SyncData_awaiter(this, void 0, void 0, function* () {
            console.log('sw triggered');
            if (serviceWorker) {
                const res = yield sendMessage('SyncData_SyncDataOnline', {});
                return res.data;
            }
            for (let i = 0; i < this.conceptsSyncArray.length; i++) {
                ConceptData_ConceptsData.AddConcept(this.conceptsSyncArray[i]);
            }
            for (let i = 0; i < this.connectionSyncArray.length; i++) {
                ConnectionData.AddConnection(this.connectionSyncArray[i]);
            }
            if (this.conceptsSyncArray.length > 0) {
                let conceptsArray = this.conceptsSyncArray.slice();
                this.conceptsSyncArray = [];
                CreateTheConceptApi(conceptsArray);
            }
            if (this.connectionSyncArray.length > 0) {
                // for(let i =0 ; i<this.connectionSyncArray.length ; i++){
                //     console.log("create the connection in backend", this.connectionSyncArray[i].ofTheConceptId + "====" + this.connectionSyncArray[i].toTheConceptId);
                // }
                let connectionsArray = this.connectionSyncArray.slice();
                this.connectionSyncArray = [];
                yield CreateTheConnectionApi(connectionsArray);
            }
            return "done";
        });
    }
    static syncDataLocalDb() {
        return SyncData_awaiter(this, void 0, void 0, function* () {
            if (this.conceptsSyncArray.length > 0) {
                for (let i = 0; i < this.conceptsSyncArray.length; i++) {
                    storeToDatabase("localconcept", this.conceptsSyncArray[i]);
                }
                this.conceptsSyncArray = [];
            }
            if (this.connectionSyncArray.length > 0) {
                for (let i = 0; i < this.connectionSyncArray.length; i++) {
                    storeToDatabase("localconnection", this.connectionSyncArray[i]);
                }
                this.connectionSyncArray = [];
            }
            return "done";
        });
    }
}
SyncData.conceptsSyncArray = [];
SyncData.connectionSyncArray = [];

;// CONCATENATED MODULE: ./src/Services/CreateTheConnection.ts



/**
 * This function is used to create a connection that is internal(inside of a composition)
 * @param ofTheConceptId Start of the connection
 * @param userId user id fo the user creating the connection
 * @param toTheConceptId the end of the connection
 * @param typeId this is the type of the connection
 * @returns
 */
function createTheConnection(ofTheConceptId, userId, toTheConceptId, typeId) {
    var orderId = 1;
    var localUserId = userId;
    var accessId = 4;
    var connection = new Connection_Connection(0, ofTheConceptId, toTheConceptId, localUserId, typeId, orderId, accessId);
    if (ofTheConceptId == toTheConceptId) {
        connection.ofTheConceptId = 0;
        connection.toTheConceptId = 1;
        return connection;
    }
    try {
        connection.isTemp = true;
        connection.id = Math.floor(Math.random() * 100000000);
        SyncData.AddConnection(connection);
    }
    catch (error) {
        HandleInternalError(error);
    }
    return connection;
}

;// CONCATENATED MODULE: ./src/Api/Create/CreateTheTextData.ts
var CreateTheTextData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateTextData(textData) {
    return CreateTheTextData_awaiter(this, void 0, void 0, function* () {
        try {
            var header = GetRequestHeader_GetRequestHeader();
            const response = yield fetch(BaseUrl_BaseUrl.CreateTheTextDataUrl(), {
                method: 'POST',
                headers: header,
                body: JSON.stringify(textData),
            });
            if (!response.ok) {
                ErrorPosting_HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            const resultString = yield response.json();
            const result = resultString;
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Create the text error message: ', error.message);
            }
            else {
                console.log('Create the text unexpected error: ', error);
            }
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/GetConceptByCharacterAndType.ts
var GetConceptByCharacterAndType_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetConceptByCharacterAndType(characterValue, typeId) {
    return GetConceptByCharacterAndType_awaiter(this, void 0, void 0, function* () {
        try {
            if (serviceWorker) {
                const res = yield sendMessage('GetConceptByCharacterAndType', { characterValue, typeId });
                console.log('data received from sw', res);
                return res.data;
            }
            let concept = yield ConceptData_ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue, typeId);
            if (concept == null || concept.id == 0) {
                var json = {
                    'character_value': `${characterValue}`,
                    'type_id': typeId
                };
                var toSendJson = JSON.stringify(json);
                var header = GetRequestHeader_GetRequestHeader();
                const response = yield fetch(BaseUrl_BaseUrl.GetConceptByCharacterAndTypeUrl(), {
                    method: 'POST',
                    headers: header,
                    body: toSendJson,
                });
                if (response.ok) {
                    let conceptString = yield response.json();
                    concept = conceptString;
                    ConceptData_ConceptsData.AddConcept(concept);
                }
                else {
                    //  throw new Error(`Error! status: ${response.status}`);
                    ErrorPosting_HandleHttpError(response);
                    console.log("This is the concept by type and character error", response.status);
                }
            }
            return concept;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(' This is the concept by type and character error message: ', error.message);
            }
            else {
                console.log(' This is the concept by type and character unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetConceptByCharacterAndTypeUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/MakeTheNameInBackend.ts
var MakeTheNameInBackend_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function MakeTheNameInBackend(newConceptId, referent, typeId, typeUserId) {
    return MakeTheNameInBackend_awaiter(this, void 0, void 0, function* () {
        try {
            let object = {
                'newConceptId': newConceptId,
                'referent': referent,
                'typeId': typeId,
                'typeUserId': typeUserId
            };
            let myHeaders = GetRequestHeader_GetRequestHeader();
            let requestObject = JSON.stringify(object);
            const response = yield fetch(BaseUrl_BaseUrl.MakeTheNameInBackendUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: requestObject
            });
            if (!response.ok) {
                ErrorPosting_HandleHttpError(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('make the name in backend error message: ', error.message);
            }
            else {
                console.log('make the name in backend unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.MakeTheNameInBackendUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/TheTexts.ts
class TheTexts {
    constructor(userId, data, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId, entryTimestamp, isNew) {
        this.id = 0;
        this.userId = userId;
        this.data = data;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.entryTimestamp = entryTimestamp;
        this.isNew = isNew;
    }
}

;// CONCATENATED MODULE: ./src/Api/GetReservedConnectionIds.ts
var GetReservedConnectionIds_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetReservedConnectionIds() {
    return GetReservedConnectionIds_awaiter(this, void 0, void 0, function* () {
        try {
            let header = GetRequestHeader_GetRequestHeader('application/x-www-form-urlencoded');
            const response = yield fetch(BaseUrl_BaseUrl.GetReservedConnectionIdUrl(), {
                method: 'GET',
                headers: header,
            });
            if (!response.ok) {
                ErrorPosting_HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (let i = 0; i < result.length; i++) {
                ReservedConnectionIds.AddId(result[i]);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('get reserved connection ids error message: ', error.message);
            }
            else {
                console.log('get reserved connection ids  unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetReservedConnectionIdUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/GetReservedIds.ts
var GetReservedIds_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetReservedIds() {
    return GetReservedIds_awaiter(this, void 0, void 0, function* () {
        try {
            let header = GetRequestHeader_GetRequestHeader('application/x-www-form-urlencoded');
            const response = yield fetch(BaseUrl_BaseUrl.GetReservedIdUrl(), {
                method: 'GET',
                headers: header,
            });
            if (!response.ok) {
                ErrorPosting_HandleHttpError(response);
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = yield response.json();
            for (let i = 0; i < result.length; i++) {
                ReservedIds_ReservedIds.AddId(result[i]);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('get reserved ids error message: ', error.message);
            }
            else {
                console.log('get reserved ids  unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetReservedIdUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/ReservedIds.ts
var ReservedIds_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ReservedIds_ReservedIds {
    static getId() {
        return ReservedIds_awaiter(this, void 0, void 0, function* () {
            if (this.ids.length < 5) {
                var ids = yield GetReservedIds();
            }
            var id = this.ids[0];
            this.ids.shift();
            return id;
        });
    }
    static AddId(id) {
        if (!this.ids.includes(id)) {
            this.ids.push(id);
        }
    }
}
ReservedIds_ReservedIds.ids = [];
class ReservedConnectionIds {
    static getId() {
        return ReservedIds_awaiter(this, void 0, void 0, function* () {
            if (this.connectionIds.length < 5) {
                var connectionIds = yield GetReservedConnectionIds();
            }
            var id = this.connectionIds[0];
            this.connectionIds.shift();
            return id;
        });
    }
    static AddId(id) {
        if (!this.connectionIds.includes(id)) {
            this.connectionIds.push(id);
        }
    }
}
ReservedConnectionIds.connectionIds = [];

;// CONCATENATED MODULE: ./src/Services/CreateTheConcept.ts
var CreateTheConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function CreateTheConcept(referent, userId, categoryId, typeId, referentId, accessId, typeCharacter) {
    return CreateTheConcept_awaiter(this, void 0, void 0, function* () {
        let id = yield ReservedIds_ReservedIds.getId();
        let isNew = true;
        let created_on = new Date();
        let updated_on = new Date();
        // let concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
        // securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on,updated_on);
        let concept = new Concept_Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);
        concept.isTemp = false;
        SyncData.AddConcept(concept);
        return concept;
    });
}
function CreateTheConceptTemporary(referent, userId, categoryId, typeId, referentId, accessId, typeCharacter) {
    return CreateTheConcept_awaiter(this, void 0, void 0, function* () {
        let id = yield ReservedIds.getId();
        let isNew = true;
        let created_on = new Date();
        let updated_on = new Date();
        // let concept = new Concept(id,userId,typeId,typeUserId,categoryId,referentId, referent,
        //     accessId,isNew,created_on, updated_on);
        let concept = new Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);
        concept.isTemp = true;
        return concept;
    });
}
function CreateTheConceptImmediate(referent, userId, categoryId, typeId, referentId, accessId, typeCharacter) {
    return CreateTheConcept_awaiter(this, void 0, void 0, function* () {
        let id = yield ReservedIds_ReservedIds.getId();
        let isNew = false;
        let created_on = new Date();
        let updated_on = new Date();
        // let concept = new Concept(id,userId,typeId,typeUserId,categoryId,categoryUserId,referentId, referentUserId, referent, securityId,
        //     securityUserId,accessId, accessUserId,sessionInformationId, sessionInformationUserId,isNew,created_on, updated_on);
        let concept = new Concept_Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typeCharacter);
        ConceptData_ConceptsData.AddConcept(concept);
        CreateTheConceptApi([concept]);
        //SyncData.AddConcept(concept);
        return concept;
    });
}

;// CONCATENATED MODULE: ./src/Services/MakeTheInstanceConcept.ts
var MakeTheInstanceConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







/**
 * This is the basic function of the concept connection system. This function let's you create a concept within the constraints of the
 * concept connection system. This function is the building block of the concept connection system.
 * @param type this is the type of the concept. You can also think of this as the key of concept. first_name, last_name etc.
 * @param referent the actual value of the concept. The actual name of value of the concept.
 * @param composition this is a boolean that defines if the concept is a composition or not. If this is a composition then other things are also
 * connected internally with this concept. If composition is true then always a new concept is created otherwise it checks if the concept already exists
 * and creates only in the case that the concept does not already exists with its type and value as its unique identifier.
 * @param userId the userId of the creator.
 * @param passedAccessId this is the accessId of the creator. By default should be 4.
 * @param passedSessionId this is the session that is created by the system.
 * @param referentId In case we need this concept to refer to any other concept.
 * @returns a concept which is either newly created or an older concept that already exists.
 */
function MakeTheInstanceConcept(type_1, referent_1) {
    return MakeTheInstanceConcept_awaiter(this, arguments, void 0, function* (type, referent, composition = false, userId, passedAccessId = 4, passedSessionId = 999, referentId = 0) {
        if (serviceWorker) {
            const res = yield sendMessage("MakeTheInstanceConcept", {
                type,
                referent,
                composition,
                userId,
                passedAccessId,
                passedSessionId,
                referentId,
            });
            console.log("data received from sw", res);
            return res.data;
        }
        let sessionInformationId = passedSessionId;
        let categoryId = 4;
        let categoryUserId = userId;
        let referentUserId = 999;
        let securityId = 999;
        let securityUserId = userId;
        let sessionInformationUserId = userId;
        // change this
        let accessId = passedAccessId;
        let accessUserId = userId;
        let stringToCheck = "";
        let stringLength = referent.length;
        let typeConcept = CreateDefaultConcept_CreateDefaultConcept();
        let concept;
        let startsWithThe = type.startsWith("the_");
        if (startsWithThe) {
            stringToCheck = type;
        }
        else {
            stringToCheck = "the_" + type;
        }
        if (composition) {
            let typeConceptString = yield MakeTheTypeConceptApi(type, userId);
            typeConcept = typeConceptString;
            let conceptString = yield CreateTheConcept(referent, userId, categoryId, typeConcept.id, referentId, accessId, type);
            concept = conceptString;
        }
        else if (stringLength > 255) {
            let typeConceptString = yield MakeTheTypeConceptApi(stringToCheck, userId);
            typeConcept = typeConceptString;
            let conceptString = yield CreateTheConcept(referent, userId, categoryId, typeConcept.id, referentId, accessId, stringToCheck);
            concept = conceptString;
            let TheTextsData = new TheTexts(userId, referent, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId, Date.now().toString(), true);
            CreateTextData(TheTextsData);
        }
        else {
            let typeConceptString = yield MakeTheTypeConceptApi(stringToCheck, userId);
            typeConcept = typeConceptString;
            let conceptByCharTypeString = yield GetConceptByCharacterAndType(referent, typeConcept.id);
            let conceptTypeCharacter = conceptByCharTypeString;
            concept = conceptTypeCharacter;
            if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
                // let makeTheNameString = await MakeTheName(referent,userId, securityId, securityUserId, accessId, accessUserId, sessionInformationId, sessionInformationUserId,typeConcept.id, typeConcept.userId,conceptTypeCharacter );
                // let makeTheNameConcept = makeTheNameString as Concept;
                // concept = conceptTypeCharacter;
                let conceptString = yield CreateTheConceptImmediate(referent, userId, categoryId, typeConcept.id, 12, accessId, stringToCheck);
                concept = conceptString;
                MakeTheNameInBackend(concept.id, `${referent}`, typeConcept.id, userId);
            }
        }
        // if(concept){
        //     if(concept.type == null){
        //         let conceptType = ConceptsData.GetConcept(concept.typeId);
        //         if(conceptType == null && concept.typeId != null && concept.typeId != undefined){
        //             let typeConceptStringNew = await GetConcept(concept.typeId);
        //             let newTypeConcept = typeConceptStringNew as Concept;
        //             concept.type = newTypeConcept;
        //         }
        //     }
        // }
        concept.type = typeConcept;
        return concept;
    });
}

;// CONCATENATED MODULE: ./src/Services/CreateTheComposition.ts
var CreateTheComposition_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function CreateTheComposition(json_1) {
    return CreateTheComposition_awaiter(this, arguments, void 0, function* (json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null) {
        if (serviceWorker) {
            const res = yield sendMessage('CreateTheComposition', { json, ofTheConceptId, ofTheConceptUserId, mainKey, userId, accessId, sessionInformationId });
            console.log('data received from sw', res);
            return res.data;
        }
        let localUserId = userId !== null && userId !== void 0 ? userId : 999;
        let localAccessId = accessId !== null && accessId !== void 0 ? accessId : 4;
        let localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 999;
        let MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        let MainConcept = CreateDefaultConcept_CreateDefaultConcept();
        for (const key in json) {
            if ((typeof json[key] != 'string' && typeof json[key] != 'number')) {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    let localMainKey = MainKeyLocal;
                    let conceptString = yield MakeTheInstanceConcept(key, "", true, localUserId, localAccessId, localSessionId);
                    let concept = conceptString;
                    MainConcept = concept;
                    localMainKey = concept.id;
                    MainKeyLocal = concept.id;
                    yield CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
                else {
                    let ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                    let ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 999;
                    let localMainKey = MainKeyLocal;
                    let conceptString = yield MakeTheInstanceConcept(key, "", true, localUserId, localAccessId, localSessionId);
                    let concept = conceptString;
                    MainConcept = concept;
                    yield createTheConnection(ofThe, ofTheUser, concept.id, localMainKey);
                    yield CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
            }
            else {
                let ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                let ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 10267;
                let localMainKey = MainKeyLocal;
                let conceptString = yield MakeTheInstanceConcept(key, json[key].toString(), false, localUserId, localAccessId, localSessionId);
                let concept = conceptString;
                yield createTheConnection(ofThe, ofTheUser, concept.id, localMainKey);
            }
        }
        return MainConcept;
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/CreateLocalBinaryTreeFromData.ts
var CreateLocalBinaryTreeFromData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * This will create a binary tree of local concepts that is saved from the indexdb.
 */
function CreateLocalBinaryTreeFromIndexDb() {
    return CreateLocalBinaryTreeFromData_awaiter(this, void 0, void 0, function* () {
        console.log("this is trying to create local binary tree");
        try {
            let conceptList = yield getObjectsFromLocalIndexDb("localconcept");
            if (Array.isArray(conceptList)) {
                for (let i = 0; i < conceptList.length; i++) {
                    let concept = conceptList[i];
                    LocalConceptData_LocalConceptsData.AddConceptToMemory(concept);
                }
            }
            IdentifierFlags.isLocalDataLoaded = true;
            IdentifierFlags.isLocalTypeLoaded = true;
            IdentifierFlags.isLocalCharacterLoaded = true;
        }
        catch (error) {
            yield DelayFunctionExecution(2000, CreateLocalBinaryTreeFromIndexDb());
            let errorObject = {
                "message": "Cannot create local binary tree from index db",
                "data": error,
                "ok": false,
                "status": 400
            };
            throw errorObject;
        }
    });
}
/**
 * We have designed our system to use local concepts and connections with its own local ids(negative ids) that
 * is only valid for the browser that creates this. We have a translator in our node server.
 * We cannot keep on using the indexdb to get the new data so we populate the data from indexdb to our memory
 * then we use these ids from memory and update the indexdb with the latest id frequently.
 * This function does this process in initlization from indexdb to memory.
 *
 * Here we have locked this function so that other processes cannot access this process in the case that this process is ongoing
 *
 *
 */
function PopulateTheLocalConceptsToMemory() {
    return CreateLocalBinaryTreeFromData_awaiter(this, void 0, void 0, function* () {
        try {
            // put a lock on the indexdb for the domain so that no two things do this same process.
            yield navigator.locks.request("dblock", (lock) => CreateLocalBinaryTreeFromData_awaiter(this, void 0, void 0, function* () {
                // get the last local concept id(-ve) from the indexdb
                let idList = yield getObjectsFromLocalIndexDb("localid");
                // if the list is valid then.
                if (Array.isArray(idList)) {
                    // if the zeroth component that is the concept component is present
                    if (idList[0]) {
                        // if the zeroth component (concept component) has a valid value;
                        let localConceptIdValue = idList[0].value;
                        if (localConceptIdValue) {
                            // add the new concept id to the memory
                            LocalId.AddConceptId(idList[0]);
                            // update the indexdb with the new concept value that other programs can use and
                            // reserve the 10 ids for this program.
                            //   await UpdateToDatabase("localid", {"id": 0, "value": localConceptIdValue - 10});
                        }
                        else {
                            // incase there is invalid id then choose a random id .
                            localConceptIdValue = -Math.floor(Math.random() * 100000000);
                            let object = { "id": 0, "value": localConceptIdValue };
                            let newObject = { "id": 0, "value": localConceptIdValue - 10 };
                            LocalId.AddConceptId(object);
                            yield indexdblocal_UpdateToDatabase("localid", newObject);
                        }
                    }
                    if (idList[2]) {
                        // BaseUrl.BASE_RANDOMIZER = idList[2].value;
                        BaseUrl_BaseUrl.setRandomizer(idList[2].value);
                    }
                }
            }));
        }
        catch (error) {
            let errorObject = {
                "message": "Cannot populate Local Ids from the Index Db",
                "data": error,
                "ok": false,
                "status": 400
            };
            throw errorObject;
        }
    });
}
/**
* We have designed our system to use local concepts and connections with its own local ids(negative ids) that
* is only valid for the browser that creates this. We have a translator in our node server.
* We cannot keep on using the indexdb to get the new data so we populate the data from indexdb to our memory
* then we use these ids from memory and update the indexdb with the latest id frequently.
* This function does this process in initlization from indexdb to memory.
*
* This function locked so that no two parallel process can access this functionality at the same time.
* That might cause some ids to be repeated.
*
*
*/
function PopulateTheLocalConnectionToMemory() {
    return CreateLocalBinaryTreeFromData_awaiter(this, void 0, void 0, function* () {
        try {
            // put a lock on the indexdb for the domain so that no two things do this same process.
            yield navigator.locks.request("dblock", (lock) => CreateLocalBinaryTreeFromData_awaiter(this, void 0, void 0, function* () {
                let idList = yield getObjectsFromLocalIndexDb("localid");
                if (Array.isArray(idList)) {
                    if (idList[1]) {
                        let localConnectionId = idList[1].value;
                        if (localConnectionId) {
                            LocalId.AddConnectionId(idList[1]);
                            yield indexdblocal_UpdateToDatabase("localid", { "id": 1, "value": localConnectionId - 10 });
                        }
                        else {
                            // incase there is invalid id then choose a random id .
                            localConnectionId = -Math.floor(Math.random() * 100000000);
                            let object = { "id": 0, "value": localConnectionId };
                            let newObject = { "id": 0, "value": localConnectionId - 10 };
                            LocalId.AddConnectionId(object);
                            yield indexdblocal_UpdateToDatabase("localid", newObject);
                        }
                    }
                    if (idList[2]) {
                        // BaseUrl.BASE_RANDOMIZER = idList[2].value;
                        BaseUrl_BaseUrl.setRandomizer(idList[2].value);
                    }
                }
            }));
        }
        catch (error) {
            let errorObject = {
                "message": "Cannot populate Local Ids from the Index Db",
                "data": error,
                "ok": false,
                "status": 400
            };
            throw errorObject;
        }
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/Local/LocalId.ts
var LocalId_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LocalId {
    static AddConceptId(id) {
        this.localId = id.value;
        indexdblocal_UpdateToDatabase("localid", id);
    }
    /**
     *
     * This function will get the local concept id from the indexdb
     * @returns the local concept id
     */
    static getConceptId() {
        return LocalId_awaiter(this, void 0, void 0, function* () {
            try {
                if (this.localId) {
                    if (this.ReservedLocalId.length < 5) {
                        yield PopulateTheLocalConceptsToMemory().then(() => {
                            let finalLocalId = this.localId;
                            for (let j = 1; j < 10; j++) {
                                let localId = this.localId - j;
                                this.ReservedLocalId.push(localId);
                                finalLocalId = localId;
                            }
                            this.AddConceptId({ "id": 0, "value": finalLocalId });
                        }).catch((event) => {
                            console.log(" getid: cannot get the id from indexdb");
                            return -Math.floor(Math.random() * 100000000);
                        });
                        let id = this.ReservedLocalId[0];
                        this.ReservedLocalId.shift();
                        return id;
                    }
                    else {
                        let id = this.ReservedLocalId[0];
                        this.ReservedLocalId.shift();
                        return id;
                    }
                }
                else {
                    yield PopulateTheLocalConceptsToMemory().then(() => {
                        let finalLocalId = this.localId;
                        for (let j = 1; j < 10; j++) {
                            let localId = this.localId - j;
                            this.ReservedLocalId.push(localId);
                            finalLocalId = localId;
                        }
                        this.AddConceptId({ "id": 0, "value": finalLocalId });
                    });
                    return this.getConceptId();
                }
            }
            catch (error) {
                console.log(" getid: this is the eror in concept", error);
                return -Math.floor(Math.random() * 100000000);
            }
        });
    }
    /**
     *
     * @param object This is the object that needs to be updated
     */
    static AddConnectionId(object) {
        this.localConnectionId = object.value;
        //UpdateToDatabase("localid", id);
    }
    static getConnectionId() {
        return LocalId_awaiter(this, void 0, void 0, function* () {
            try {
                if (this.localConnectionId) {
                    if (this.ReservedConnectionId.length < 5) {
                        yield PopulateTheLocalConnectionToMemory().then(() => {
                            let finalLocalId = this.localConnectionId;
                            for (let j = 1; j < 10; j++) {
                                let localConId = this.localConnectionId - j;
                                this.ReservedConnectionId.push(localConId);
                                finalLocalId = localConId;
                            }
                        }).catch((event) => {
                            console.log("this is the new event", event);
                            return -Math.floor(Math.random() * 100000000);
                        });
                        let id = this.ReservedConnectionId[0];
                        this.ReservedConnectionId.shift();
                        return id;
                    }
                    else {
                        let id = this.ReservedConnectionId[0];
                        this.ReservedConnectionId.shift();
                        return id;
                    }
                }
                else {
                    yield PopulateTheLocalConnectionToMemory().then(() => {
                        let finalLocalId = this.localConnectionId;
                        for (let j = 1; j < 10; j++) {
                            let localConId = this.localConnectionId - j;
                            this.ReservedConnectionId.push(localConId);
                            finalLocalId = localConId;
                        }
                        this.AddConnectionId({ "id": 1, "value": finalLocalId });
                    });
                    return this.getConnectionId();
                }
            }
            catch (error) {
                return -Math.floor(Math.random() * 100000000);
            }
        });
    }
}
LocalId.ReservedLocalId = [];
LocalId.ReservedConnectionId = [];

;// CONCATENATED MODULE: ./src/Middleware/logger.service.ts
var logger_service_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Logger {
    // // Set default log label as INFO
    // private static logLevel:string = "INFO"
    // private static logs : any[] = [];
    /**
     * Set the log level (e.g., "DEBUG", "INFO", "WARNING", "ERROR").
     */
    static setLogLevel(level) {
        Logger.logLevel = level;
    }
    /**
     * Determines whether the current log level permits the given level to be logged.
     */
    static shouldLog(level) {
        return Logger.LOG_LEVELS.indexOf(level) >= Logger.LOG_LEVELS.indexOf(Logger.logLevel);
    }
    // private static shouldLog(level: string): boolean {
    //     const levels = ["DEBUG", "INFO", "WARNING", "ERROR"];
    //     return levels.indexOf(level) >= levels.indexOf(Logger.logLevel);
    // }
    /**
     * Logs a message with optional additional structured data.
     */
    static log(level, message, data) {
        if (!Logger.shouldLog(level))
            return;
        const logEntry = Object.assign({ timestamp: new Date().toISOString(), level,
            message }, data);
        Logger.logs.push(logEntry);
        console.log("Log Data in Logger Class : ", Logger.logs);
        const storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");
        storedLogs.push(logEntry);
        console.log("Stored Logs : ", storedLogs);
        localStorage.setItem("logs", JSON.stringify(storedLogs));
        // try {
        //     const storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");
        //     storedLogs.push(logEntry);
        //     console.log("Stored Logs : ", storedLogs);
        //     localStorage.setItem("logs", JSON.stringify(storedLogs));
        // } catch (error) {
        //     console.error("Failed to save log to localStorage:", error);
        // }
    }
    /**
     * Helper method to save logs to localStorage.
     */
    static saveToLocalStorage(logMessage) {
        try {
            const logs = JSON.parse(localStorage.getItem("logs") || "[]");
            logs.push(logMessage);
            localStorage.setItem("logs", JSON.stringify(logs));
        }
        catch (error) {
            console.error("Failed to save log to localStorage:", error);
        }
    }
    /**
     * Helper method to send logs to the server.
     */
    static sendLogsToServer() {
        return logger_service_awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Log sending to server...");
                const storedLogs = JSON.parse(localStorage.getItem("logs") || "[]");
                if (storedLogs.length === 0)
                    return;
                console.log("Stored Logs : ", storedLogs);
                const chunkSize = 50;
                for (let i = 0; i < storedLogs.length; i += chunkSize) {
                    const chunk = storedLogs.slice(i, i + chunkSize);
                    console.log("Sending logs chunk:", chunk);
                    console.log("Payload chunk:", JSON.stringify(chunk));
                    const response = yield fetch(Logger.SERVER_URL, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(chunk),
                    });
                    if (!response.ok) {
                        const responseBody = yield response.text();
                        console.log("Response Body on failed request : ", responseBody);
                        console.error("Failed to send logs:-", response.status, response.statusText, responseBody);
                        return;
                    }
                }
                localStorage.removeItem("logs");
                console.log("Logs successfully sent and cleared.");
            }
            catch (error) {
                console.error("Error while sending logs to server:", error);
            }
        });
    }
}
Logger.logLevel = "INFO";
Logger.logs = [];
Logger.SERVER_URL = "https://devai.freeschema.com/api/v1/add-logs";
Logger.LOG_LEVELS = ["DEBUG", "INFO", "WARNING", "ERROR"];
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

;// CONCATENATED MODULE: ./src/Services/Local/CreateTheConnectionLocal.ts
var CreateTheConnectionLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * This function creates a connection for the concept connection system. This connection will only be created in real sense
 * once the data is synced using LocalSyncData.SyncDataOnline()
 * Here id and ghostId are created which are negative(these are virtual ids). After they are synced then they become real ids
 * The real ids are then associated with these ghost ids in node server (backend) and also in the local memory.
 * @param ofTheConceptId Of the concept Id for the connection
 * @param toTheConceptId To the concept Id for the connection
 * @param typeId Type of the connection, should be the composition id for internal connection and type concept in case
 * of external connection.
 * @param orderId current context is that for internal connections the order id is less than 3 and for external connections greater than 999
 * @param typeString this is the typeString in the case of external connections.
 * @returns a connection that is created and stored in the local system.
 */
function CreateTheConnectionLocal(ofTheConceptId_1, toTheConceptId_1, typeId_1) {
    return CreateTheConnectionLocal_awaiter(this, arguments, void 0, function* (ofTheConceptId, toTheConceptId, typeId, orderId = 1, typeString = "", userId = 999) {
        let startTime = performance.now();
        if (serviceWorker) {
            const res = yield sendMessage('CreateTheConnectionLocal', { ofTheConceptId, toTheConceptId, typeId, orderId, typeString, userId });
            console.log('data received from sw', res);
            return res.data;
        }
        try {
            let accessId = 4;
            // let randomid = -Math.floor(Math.random() * 100000000);
            let randomid = yield LocalId.getConnectionId();
            let realOfTheConceptId = 0;
            let realToTheConceptId = 0;
            let realTypeId = 0;
            realOfTheConceptId = ofTheConceptId;
            realToTheConceptId = toTheConceptId;
            realTypeId = typeId;
            let connection = new Connection_Connection(0, 0, 0, 0, 0, 0, 0);
            if (ofTheConceptId != toTheConceptId) {
                connection = new Connection_Connection(randomid, realOfTheConceptId, realToTheConceptId, userId, typeId, orderId, accessId);
                connection.isTemp = true;
                connection.typeCharacter = typeString;
                yield LocalSyncData.AddConnection(connection);
                LocalConnectionData.AddConnection(connection);
                //storeToDatabase("localconnection", connection);
            }
            /**
            * Add to Logger
            */
            console.log("CreateTheConnectionLocal...");
            let sessionId = getCookie('SessionId');
            let dataLog = {
                responseStatus: 200,
                responseTime: `${(performance.now() - startTime).toFixed(3)}ms`,
                responseSize: `${JSON.stringify(connection).length}`,
                sessionId: sessionId,
                functionName: "CreateTheConnectionLocal",
                functionParameters: ['ofTheConceptId', 'toTheConceptId', 'typeId', 'orderId', 'typeString', 'userId']
            };
            Logger.log("INFO", "From function MakeTheInstanceConceptLocal", dataLog);
            // Send logs to the server
            // Logger.sendLogsToServer()
            /**
             * End of Logger
             */
            return connection;
        }
        catch (error) {
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/CreateTheConceptLocal.ts
var CreateTheConceptLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * This function creates the concept in the local system (Local memory and IndexDb) but not in the backend database
 * To create this concept in the backend database you need to sync the local data to the backend by LocalSyncData class.
 *
 * This function creates a id and ghost id which are equal to each other.
 * These id and ghostId are negative which means that they are virtual concepts. After these concepts have been synced with the backend
 * they are converted to real id. After returning from the backend the id changes to positive(+) and real id while the ghostId remains the same
 *
 * The system then saves this relation between -ve id and real id in the backend server and also in the local memory.
 *
 * @param referent This is the string that is the actual value of the concept.
 * @param typecharacter The string that defines the type of the concept.
 * @param userId This is the userId of the creator.
 * @param categoryId This is the category Id of the concept.
 * @param typeId This is the type Id of the concept that relates to the typecharacter passed above.
 * @param accessId This is the accessId of the concept(most probably is the accessId of the user)
 * @param isComposition This is set in the case that the composition needs to be created.
 * @param referentId if this concept refers to any other concept then this needs to be passed.
 * @returns
 */
function CreateTheConceptLocal(referent_1, typecharacter_1, userId_1, categoryId_1, typeId_1, accessId_1) {
    return CreateTheConceptLocal_awaiter(this, arguments, void 0, function* (referent, typecharacter, userId, categoryId, typeId, accessId, isComposition = false, referentId = 0) {
        let startTime = performance.now();
        try {
            if (serviceWorker) {
                const res = yield sendMessage('CreateTheConceptLocal', { referent, typecharacter, userId, categoryId, typeId, accessId, isComposition, referentId });
                console.log('data received from sw', res);
                return res.data;
            }
            //let id = -Math.floor(Math.random() * 100000000);
            let id = yield LocalId.getConceptId();
            console.log("this is the getting id type connection", id);
            let isNew = true;
            let created_on = new Date();
            let updated_on = new Date();
            if (referent == "the") {
                let concept = new Concept_Concept(1, 999, 5, 5, referentId, referent, accessId, isNew, created_on, updated_on, typecharacter);
                return concept;
            }
            let concept = new Concept_Concept(id, userId, typeId, categoryId, referentId, referent, accessId, isNew, created_on, updated_on, typecharacter);
            concept.isTemp = true;
            concept.isComposition = isComposition;
            LocalConceptData_LocalConceptsData.AddConcept(concept);
            //storeToDatabase("localconcept",concept);
            /**
             * Add to Logger
             */
            console.log("CreateTheConceptLocal...");
            let sessionId = getCookie('SessionId');
            let logData = {
                responseStatus: 200,
                responseTime: `${(performance.now() - startTime).toFixed(3)}ms`,
                responseSize: `${JSON.stringify(concept).length}`,
                sessionId: sessionId,
                functionName: "CreateTheConceptLocal",
                functionParameters: ['referent', 'typecharacter', 'composition', 'userId', 'categoryId', 'typeId', 'accessId', 'sessionInformationId', 'isComposition', 'referentId']
            };
            Logger.log("INFO", "From function CreateTheConceptLocal", logData);
            // Send logs to the server
            // Logger.sendLogsToServer()
            /**
             * End of Logger
             */
            return concept;
        }
        catch (error) {
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/MakeTheConceptLocal.ts
var MakeTheConceptLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function MakeTheConceptLocal(referent, typeCharacter, userId, categoryId, typeId) {
    return MakeTheConceptLocal_awaiter(this, void 0, void 0, function* () {
        let conceptString = yield LocalConceptData_LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent, typeId);
        let concept = conceptString;
        let accessId = 4;
        if (typeCharacter == "the") {
            categoryId = 1;
        }
        if (concept.id == 0) {
            conceptString = yield CreateTheConceptLocal(referent, typeCharacter, userId, categoryId, typeId, accessId);
            concept = conceptString;
        }
        return concept;
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/MakeTheTypeLocal.ts
var MakeTheTypeLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * There are two types of concepts. One type of concept is a type concept. These concepts have no actual value and do not mean
 * anything unless they are associated with other values. These are placeholders like first_name, last_name, age etc that are required in the system.
 * These types need to be created seperately.
 *
 *
 * @param typeString type of the concept that needs to be created.
 * @param sessionId SessionId of the user
 * @param sessionUserId Not required pass 999
 * @param userId UserId of the user creating this concept
 * @returns
 */
function MakeTheTypeConceptLocal(typeString, sessionId, sessionUserId, userId) {
    return MakeTheTypeLocal_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage("MakeTheTypeConceptLocal", {
                typeString, sessionId, sessionUserId, userId
            });
            console.log("data received from sw", res);
            return res.data;
        }
        let accessId = 4;
        let existingConcept = yield GetConceptByCharacterAndCategoryLocal(typeString);
        if (existingConcept) {
            if (existingConcept.id == 0 || existingConcept.userId == 0) {
                let splittedStringArray = SplitStrings(typeString);
                if (splittedStringArray[0] == typeString) {
                    let concept = yield MakeTheConceptLocal(typeString, "the", userId, 1, 51);
                    existingConcept = concept;
                }
                else {
                    // var categoryConcept = await MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                    // var typeConcept = await MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId );
                    // if(typeConcept){
                    let categoryConcept = yield MakeTheTypeConceptLocal(splittedStringArray[0], sessionId, sessionUserId, userId);
                    let typeConcept = yield MakeTheTypeConceptLocal(splittedStringArray[1], sessionId, sessionUserId, userId);
                    let concept = yield CreateTheConceptLocal(typeString, splittedStringArray[1], userId, categoryConcept.id, typeConcept.id, accessId);
                    existingConcept = concept;
                    //   }
                }
            }
        }
        // LocalSyncData.AddConcept(existingConcept);
        return existingConcept;
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/MakeTheInstanceConceptLocal.ts
var MakeTheInstanceConceptLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * This is the basic function of the concept connection system. This function let's you create a concept within the constraints of the
 * concept connection system. This function is the building block of the concept connection system.
 * This function automatically passes the concept to be synced to the background. Next time you sync the data this concept will also be created in the backend.
 * @param type this is the type of the concept. You can also think of this as the key of concept. first_name, last_name etc.
 * @param referent the actual value of the concept. The actual name of value of the concept.
 * @param composition this is a boolean that defines if the concept is a composition or not. If this is a composition then other things are also
 * connected internally with this concept. If composition is true then always a new concept is created otherwise it checks if the concept already exists
 * and creates only in the case that the concept does not already exists with its type and value as its unique identifier.
 * @param userId the userId of the creator.
 * @param accessId this is the accessId of the creator. By default should be 4.
 * @param sessionInformationId this is the session that is created by the system.
 * @param referentId In case we need this concept to refer to any other concept.
 * @returns a concept which is either newly created or an older concept that already exists.
 */
function MakeTheInstanceConceptLocal(type_1, referent_1) {
    return MakeTheInstanceConceptLocal_awaiter(this, arguments, void 0, function* (type, referent, composition = false, userId, accessId, sessionInformationId = 999, referentId = 0) {
        let startTime = performance.now();
        if (serviceWorker) {
            const res = yield sendMessage('MakeTheInstanceConceptLocal', { type, referent, composition, userId, accessId, sessionInformationId, referentId });
            console.log('data received from sw', res);
            return res.data;
        }
        try {
            let sessionInformationId = 999;
            let categoryId = 4;
            let sessionInformationUserId = userId;
            // change this
            let accessId = 4;
            let stringToCheck = "";
            let stringLength = referent.length;
            let typeConcept;
            let concept;
            let startsWithThe = type.startsWith("the_");
            if (startsWithThe) {
                stringToCheck = type;
            }
            else {
                stringToCheck = "the_" + type;
            }
            if (composition) {
                let typeConceptString = yield MakeTheTypeConceptLocal(type, sessionInformationId, userId, userId);
                typeConcept = typeConceptString;
                let conceptString = yield CreateTheConceptLocal(referent, type, userId, categoryId, typeConcept.id, accessId, true, referentId);
                concept = conceptString;
            }
            else if (stringLength > 255) {
                let typeConceptString = yield MakeTheTypeConceptLocal(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
                typeConcept = typeConceptString;
                let conceptString = yield CreateTheConceptLocal(referent, stringToCheck, userId, categoryId, typeConcept.id, accessId);
                concept = conceptString;
            }
            else {
                let typeConceptString = yield MakeTheTypeConceptLocal(stringToCheck, sessionInformationId, sessionInformationUserId, userId);
                typeConcept = typeConceptString;
                let conceptByCharTypeString = yield LocalConceptData_LocalConceptsData.GetConceptByCharacterAndTypeLocal(referent, typeConcept.id);
                let conceptTypeCharacter = conceptByCharTypeString;
                concept = conceptTypeCharacter;
                if (conceptTypeCharacter.id == 0 && conceptTypeCharacter.userId == 0) {
                    let conceptString = yield CreateTheConceptLocal(referent, stringToCheck, userId, categoryId, typeConcept.id, accessId);
                    concept = conceptString;
                }
            }
            concept.type = typeConcept;
            LocalSyncData.AddConcept(concept);
            /**
             * Add to Logger
             */
            console.log("MakeTheInstanceConceptLocal...");
            let sessionId = getCookie('SessionId');
            let dataLog = {
                responseStatus: 200,
                responseTime: `${(performance.now() - startTime).toFixed(3)}ms`,
                responseSize: `${JSON.stringify(concept).length}`,
                sessionId: sessionId,
                functionName: "MakeTheInstanceConceptLocal",
                functionParameters: ['type', 'referent', 'composition', 'userId', 'accessId', 'sessionInformationId', 'referentId']
            };
            Logger.log("INFO", "From function MakeTheInstanceConceptLocal", dataLog);
            // Send logs to the server
            // Logger.sendLogsToServer()
            /**
             * End of Logger
             */
            return concept;
        }
        catch (error) {
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/CreateTheCompositionLocal.ts
var CreateTheCompositionLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function converts a json data to concept connection and also preserves its relation.
 * @param json The json data that needs to be converted to the concept connection system
 * @param ofTheConceptId If in case that this composition is part of other composition then this must be the connecting concept.
 * @param ofTheConceptUserId If in case that this composition is part of other composition then this must be the user Id of the  connecting concept.
 * @param mainKey If in case that this composition is part of other composition then this must be the main composition
 * @param userId The user Id of the user creating the composition.
 * @param accessId The accessId of the user creating the composition.
 * @param sessionInformationId Session of the user.
 * @param automaticSync for future use.
 * @returns the main concept of this composition.
 */
function CreateTheCompositionLocal(json_1) {
    return CreateTheCompositionLocal_awaiter(this, arguments, void 0, function* (json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null, automaticSync = false) {
        if (serviceWorker) {
            const res = yield sendMessage('CreateTheCompositionLocal', { json, ofTheConceptId, ofTheConceptUserId, mainKey, userId, accessId, sessionInformationId });
            console.log('data received from sw', res);
            return res.data;
        }
        let localUserId = userId !== null && userId !== void 0 ? userId : 999;
        let localAccessId = accessId !== null && accessId !== void 0 ? accessId : 999;
        let localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 999;
        let MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        let MainConcept = CreateDefaultLConcept_CreateDefaultLConcept();
        for (const key in json) {
            if (typeof json[key] != 'string' && typeof json[key] != 'number') {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    let localMainKey = MainKeyLocal;
                    let conceptString = yield MakeTheInstanceConceptLocal(key, "", true, localUserId, localAccessId, localSessionId);
                    let concept = conceptString;
                    MainConcept = concept;
                    localMainKey = concept.id;
                    MainKeyLocal = concept.id;
                    yield CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
                else {
                    let ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                    let ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 999;
                    let localMainKey = MainKeyLocal;
                    let conceptString = yield MakeTheInstanceConceptLocal(key, "", true, localUserId, localAccessId, localSessionId);
                    let concept = conceptString;
                    yield CreateTheConnectionLocal(ofThe, concept.id, localMainKey);
                    yield CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId);
                }
            }
            else {
                let ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                let ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 999;
                let localMainKey = MainKeyLocal;
                let conceptString = yield MakeTheInstanceConceptLocal(key, json[key].toString(), false, localUserId, localAccessId, localSessionId);
                let concept = conceptString;
                yield CreateTheConnectionLocal(ofThe, concept.id, localMainKey);
            }
        }
        return MainConcept;
    });
}

;// CONCATENATED MODULE: ./src/Api/GetConnectionOfTheConcept.ts
var GetConnectionOfTheConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetConnectionOfTheConcept(typeId_1, ofTheConceptId_1, userId_1) {
    return GetConnectionOfTheConcept_awaiter(this, arguments, void 0, function* (typeId, ofTheConceptId, userId, inpage = 10, page = 1) {
        if (serviceWorker) {
            const res = yield sendMessage('GetConnectionOfTheConcept', { typeId, ofTheConceptId, userId, inpage, page });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        try {
            let urlencoded = new URLSearchParams();
            urlencoded.append("typeId", `${typeId}`);
            urlencoded.append("ofTheConceptId", `${ofTheConceptId}`);
            urlencoded.append("userId", `${userId}`);
            urlencoded.append("inpage", `${inpage}`);
            urlencoded.append("page", `${page}`);
            let header = GetRequestHeader_GetRequestHeader('application/x-www-form-urlencoded');
            const response = yield fetch(BaseUrl_BaseUrl.GetAllConnectionsOfConceptUrl(), {
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if (response.ok) {
                connectionList = (yield response.json());
            }
            else {
                ErrorPosting_HandleHttpError(response);
                console.log("Get connection of concept error", response.status);
            }
            return connectionList;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get connection of concept  error message: ', error.message);
            }
            else {
                console.log('Get connection of concept unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetAllConnectionsOfConceptUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/CreateTheConnectionGeneral.ts
var CreateTheConnectionGeneral_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function CreateTheConnectionGeneral(ofTheConceptId_1, ofTheConceptUserId_1, toTheConceptId_1, typeId_1) {
    return CreateTheConnectionGeneral_awaiter(this, arguments, void 0, function* (ofTheConceptId, ofTheConceptUserId, toTheConceptId, typeId, orderId = 1, accessId = 4) {
        if (ofTheConceptId > 0 && toTheConceptId > 0) {
            var userId = ofTheConceptUserId;
            var id = yield ReservedConnectionIds.getId();
            var connection = new Connection_Connection(id, ofTheConceptId, toTheConceptId, userId, typeId, orderId, accessId);
            if (ofTheConceptId == toTheConceptId) {
                connection.ofTheConceptId = 0;
                connection.toTheConceptId = 1;
                return connection;
            }
            // this will cause the connection to go and update the existing with the reserved id
            connection.toUpdate = true;
            connection.isTemp = false;
            SyncData.AddConnection(connection);
            return connection;
        }
        else {
            throw new FreeSchemaResponse("cannot create connection because id are negative ", false, 400, "");
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/DeleteTheConnection.ts
var DeleteTheConnection_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function DeleteTheConnection(id) {
    return DeleteTheConnection_awaiter(this, void 0, void 0, function* () {
        try {
            const formdata = new FormData();
            formdata.append("id", id.toString());
            let header = GetOnlyTokenHeader();
            const response = yield fetch(BaseUrl_BaseUrl.DeleteTheConnectionUrl(), {
                method: 'POST',
                headers: header,
                body: formdata,
                redirect: "follow"
            });
            if (!response.ok) {
                console.log('Delete connection error status: ', response.status);
                ErrorPosting_HandleHttpError(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Delete connection error message: ', error.message);
            }
            else {
                console.log('Delete connection unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.DeleteTheConnectionUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/GetConnection.ts
var GetConnection_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetConnection(id) {
    return GetConnection_awaiter(this, void 0, void 0, function* () {
        let result = yield ConnectionData.GetConnection(id);
        try {
            if (result.id != 0) {
                return result;
            }
            else {
                let header = GetRequestHeader_GetRequestHeader('application/x-www-form-urlencoded');
                const formdata = new FormData();
                formdata.append("id", id.toString());
                const response = yield fetch(BaseUrl_BaseUrl.GetConnectionUrl(), {
                    method: 'POST',
                    headers: header,
                    body: formdata
                });
                if (response.ok) {
                    result = (yield response.json());
                    ConnectionData.AddConnection(result);
                }
                else {
                    ErrorPosting_HandleHttpError(response);
                    console.log("Get Connection Error", response.status);
                }
                return result;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get Connection error message: ', error.message);
            }
            else {
                console.log('Get Connection unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetConnectionUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/GetConnections.ts
var GetConnections_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetConnectionById(id) {
    return GetConnections_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage('GetConnectionById', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let connection = yield ConnectionData.GetConnection(id);
        if ((connection == null || connection.id == 0) && id != null && id != undefined) {
            let connectionString = yield GetConnection(id);
            connection = connectionString;
        }
        return connection;
    });
}

;// CONCATENATED MODULE: ./src/Services/DeleteConnection.ts
var DeleteConnection_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function DeleteConnectionById(id) {
    return DeleteConnection_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage('DeleteConnectionById', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        if (id > 0) {
            let connection = yield GetConnectionById(id);
            yield DeleteTheConnection(id);
            //removeFromDatabase("connection",id);
            ConnectionBinaryTree.removeNodeFromTree(id);
        }
        else {
            LocalConnectionData.RemoveConnectionById(id);
        }
        //ConnectionTypeTree.removeTypeConcept(connection.typeId,id);
    });
}

;// CONCATENATED MODULE: ./src/Services/GetTheConcept.ts
var GetTheConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 *
 * @param id this is the id that can be used to get the concept.
 * @param userId This is the user that calls the concept
 * @returns Concept if it exists
 */
function GetTheConcept(id_1) {
    return GetTheConcept_awaiter(this, arguments, void 0, function* (id, userId = 999) {
        try {
            if (serviceWorker) {
                const res = yield sendMessage('GetTheConcept', { id, userId });
                console.log('data received from sw', res);
                return res.data;
            }
            let concept = CreateDefaultConcept_CreateDefaultConcept();
            if (id < 0) {
                let lconcept = yield GetUserGhostId(userId, id);
                concept = convertFromLConceptToConcept(lconcept);
                return concept;
            }
            concept = yield ConceptData_ConceptsData.GetConcept(id);
            if ((concept == null || concept.id == 0) && id != null && id != undefined) {
                let conceptString = yield GetConcept_GetConcept(id);
                concept = conceptString;
            }
            if (concept.id != 0) {
                if (concept.type == null) {
                    let conceptType = yield ConceptData_ConceptsData.GetConcept(concept.typeId);
                    if (conceptType == null && concept.typeId != null && concept.typeId != undefined) {
                        let typeConceptString = yield GetConcept_GetConcept(concept.typeId);
                        let typeConcept = typeConceptString;
                        concept.type = typeConcept;
                    }
                }
            }
            return concept;
        }
        catch (err) {
            console.error("this is the error in the getting concept", err);
            throw err;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/CreateConnectionBetweenTwoConcepts.ts
var CreateConnectionBetweenTwoConcepts_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









function CreateConnectionBetweenTwoConcepts(ofTheConcept_1, toTheConcept_1, linker_1) {
    return CreateConnectionBetweenTwoConcepts_awaiter(this, arguments, void 0, function* (ofTheConcept, toTheConcept, linker, both = false, count = false) {
        var _a, _b;
        if (serviceWorker) {
            const res = yield sendMessage('CreateConnectionBetweenTwoConcepts', { ofTheConcept, toTheConcept, linker, both, count });
            console.log('data received from sw', res);
            return res.data;
        }
        let userId = ofTheConcept.userId;
        let accessId = 4;
        if (both) {
            let prefix1 = ((_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;
            if (count) {
                yield CountRelationship(linkerAdd1, toTheConcept, userId);
            }
            let connectionConceptReverse = yield MakeTheInstanceConcept("connection", backwardLinker, false, 999, 999, 999);
            let newConnection = new Connection_Connection(0, toTheConcept.id, ofTheConcept.id, userId, connectionConceptReverse.id, 1000, accessId);
            SyncData.AddConnection(newConnection);
        }
        let prefix = ((_b = ofTheConcept.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        if (count) {
            yield CountRelationship(linkerAdd, ofTheConcept, userId);
        }
        let connectionConcept = yield MakeTheInstanceConcept("connection", forwardLinker, false, 999, 999, 999);
        let newConnection = new Connection_Connection(0, ofTheConcept.id, toTheConcept.id, userId, connectionConcept.id, 1000, accessId);
        SyncData.AddConnection(newConnection);
        return newConnection;
    });
}
function CountRelationship(linker_1, concept_1) {
    return CreateConnectionBetweenTwoConcepts_awaiter(this, arguments, void 0, function* (linker, concept, passedUserId = null) {
        var _a;
        let concept1 = concept;
        let userId = passedUserId !== null && passedUserId !== void 0 ? passedUserId : concept.userId;
        let accessId = 4;
        let sessionInformationId = 999;
        let forwardLinkerCount = linker + "_count";
        let forwardLinkerCountString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + forwardLinkerCount;
        let forwardLinkerCountConcept = yield MakeTheInstanceConcept("connection", forwardLinkerCountString, false, userId, accessId, sessionInformationId);
        let connectionsString = yield GetConnectionOfTheConcept(forwardLinkerCountConcept.id, concept.id, userId, 10, 1);
        let connections = connectionsString;
        let countConceptList = [];
        let countConcept = CreateDefaultConcept_CreateDefaultConcept();
        for (let i = 0; i < connections.length; i++) {
            let toConcept = yield GetTheConcept(connections[i].toTheConceptId);
            countConceptList.push(toConcept);
        }
        if (countConceptList.length < 1) {
            countConcept = yield MakeTheInstanceConcept("count", "1", false, userId, accessId, sessionInformationId);
        }
        else {
            let oldcountConcept = countConceptList[0];
            let count = 0;
            try {
                count = Number(oldcountConcept.characterValue);
            }
            catch (ex) {
                count = 0;
            }
            count = count + 1;
            countConcept = yield MakeTheInstanceConcept("count", count.toString(), false, userId, accessId, sessionInformationId);
            for (let i = 0; i < connections.length; i++) {
                DeleteConnectionById(connections[i].id);
            }
        }
        let newConnection = new Connection_Connection(0, concept1.id, countConcept.id, concept1.userId, forwardLinkerCountConcept.id, 1000, accessId);
        yield SyncData.AddConnection(newConnection);
    });
}
function CreateConnectionBetweenTwoConceptsGeneral(ofTheConcept_1, toTheConcept_1, linker_1) {
    return CreateConnectionBetweenTwoConcepts_awaiter(this, arguments, void 0, function* (ofTheConcept, toTheConcept, linker, both = false, count = false) {
        var _a, _b;
        let userId = ofTheConcept.userId;
        let accessId = 4;
        if (both) {
            let prefix1 = ((_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s";
            let linkerAdd1 = linker + "_by";
            let backwardLinker = prefix1 + "_" + linkerAdd1;
            if (count) {
                yield CountRelationship(linkerAdd1, toTheConcept, userId);
            }
            let connectionConceptReverse = yield MakeTheInstanceConcept("connection", backwardLinker, false, 999, 999, 999);
            let newConnection = new Connection_Connection(0, toTheConcept.id, ofTheConcept.id, userId, connectionConceptReverse.id, 1000, accessId);
            SyncData.AddConnection(newConnection);
        }
        let prefix = ((_b = ofTheConcept.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
        let linkerAdd = linker + "_s";
        let forwardLinker = prefix + "_" + linkerAdd;
        if (count) {
            yield CountRelationship(linkerAdd, ofTheConcept, userId);
        }
        let connectionConcept = yield MakeTheInstanceConcept("connection", forwardLinker, false, 999, 999, 999);
        let newConnection = yield CreateTheConnectionGeneral(ofTheConcept.id, ofTheConcept.userId, toTheConcept.id, connectionConcept.id, 1000, accessId);
        return newConnection;
    });
}

;// CONCATENATED MODULE: ./src/Database/NoIndexDb.ts
var NoIndexDb_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function NoIndexDb_openDatabase(databaseName) {
    return IndexDb.db;
}
function NoIndexDb_storeToDatabase(databaseName, object) {
}
function GetStatsFromDatabase() {
    var settingsData = new SettingData(true);
    return settingsData;
}
function NoIndexDb_AiUpdateFlag(object) {
}
function getFromDatabaseWithType(databaseName, type, id) {
    return NoIndexDb_awaiter(this, void 0, void 0, function* () {
    });
}
function NoIndexDb_getObjectsFromIndexDb(databaseName) {
    return NoIndexDb_awaiter(this, void 0, void 0, function* () {
    });
}
function NoIndexDb_removeFromDatabase(databaseName, id) {
}
function getAllFromLocalDb(databaseName) {
    return NoIndexDb_awaiter(this, void 0, void 0, function* () {
    });
}

;// CONCATENATED MODULE: ./src/Services/GetLink.ts
var GetLink_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function GetLink(id_1, linker_1) {
    return GetLink_awaiter(this, arguments, void 0, function* (id, linker, inpage = 10, page = 1) {
        var _a;
        if (serviceWorker) {
            console.log('data receiving');
            const res = yield sendMessage('GetLink', { id, linker, inpage, page });
            console.log('data received from sw', res);
            return res.data;
        }
        let output = [];
        let concept = yield GetTheConcept(id);
        let linkString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + linker;
        let relatedConceptString = yield GetConceptByCharacterAndType(linkString, 16);
        let relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            let connectionsString = yield GetConnectionOfTheConcept(relatedConcept.id, concept.id, concept.userId, inpage, page);
            let connections = connectionsString;
            let prefetch = [];
            for (let i = 0; i < connections.length; i++) {
                prefetch.push(connections[i].toTheConceptId);
            }
            yield GetAllConnectionsOfCompositionBulk(prefetch);
            for (let i = 0; i < connections.length; i++) {
                let toConceptId = connections[i].toTheConceptId;
                let toConcept = yield GetTheConcept(toConceptId);
                let newComposition = yield GetCompositionWithIdAndDateFromMemory(toConcept.id);
                output.push(newComposition);
            }
        }
        return output;
    });
}
function GetLinkRaw(id_1, linker_1) {
    return GetLink_awaiter(this, arguments, void 0, function* (id, linker, inpage = 10, page = 1) {
        var _a;
        let output = [];
        let concept = yield GetTheConcept(id);
        let linkString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + linker;
        let relatedConceptString = yield GetConceptByCharacterAndType(linkString, 16);
        let relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            let connectionsString = yield GetConnectionOfTheConcept(relatedConcept.id, concept.id, concept.userId, inpage, page);
            let connections = connectionsString;
            let prefetch = [];
            for (let i = 0; i < connections.length; i++) {
                prefetch.push(connections[i].toTheConceptId);
            }
            for (let i = 0; i < connections.length; i++) {
                let toConceptId = connections[i].toTheConceptId;
                let toConcept = yield GetTheConcept(toConceptId);
                output.push(toConcept);
            }
        }
        return output;
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/TheCharacter.ts
class TheCharacter {
    constructor(userId, data, securityId, securityUserId, accessId, accessUserId, sessionId, sessionUserId, entryTimestamp, isNew) {
        this.id = 0;
        this.isNew = false;
        this.userId = userId;
        this.data = `${data}`;
        this.securityId = securityId;
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.isNew = isNew;
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/CharacterRepository.ts

class CharacterRepository {
    constructor() {
        this.name = "character Repository";
    }
    static AddCharacter(character) {
        this.characterData[character.id] = character;
    }
    static GetCharacter(value) {
        var theCharacter = new TheCharacter(0, "0", 0, 0, 0, 0, 0, 0, "0", false);
        for (var i = 0; i < this.characterData.length; i++) {
            if (this.characterData[i].data == value) {
                theCharacter = this.characterData[i];
            }
        }
        return theCharacter;
    }
}
CharacterRepository.characterData = [];

;// CONCATENATED MODULE: ./src/DataStructures/Returner.ts
class Returner {
    constructor(id, userId, referentId, isNew) {
        this.id = id;
        this.userId = userId;
        this.referentId = referentId;
        this.isNew = isNew;
    }
}

;// CONCATENATED MODULE: ./src/Api/Create/CreateTheCharacter.ts
var CreateTheCharacter_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function CreateTheCharacter(characterData) {
    return CreateTheCharacter_awaiter(this, void 0, void 0, function* () {
        var characterData;
        try {
            characterData = CharacterRepository.GetCharacter(characterData.data);
            if (characterData.id == 0) {
                var header = GetRequestHeader_GetRequestHeader();
                const response = yield fetch(BaseUrl_BaseUrl.CreateTheCharacterDataUrl(), {
                    method: 'POST',
                    headers: header,
                    body: JSON.stringify(characterData),
                });
                if (!response.ok) {
                    ErrorPosting_HandleHttpError(response);
                    throw new Error(`Error! status: ${response.status}`);
                }
                const resultString = yield response.json();
                const result = resultString;
                var savingCharacter = new TheCharacter(result.userId, characterData.data, 0, 0, 4, 4, 999, 999, "", false);
                savingCharacter.id = result.id;
                CharacterRepository.AddCharacter(savingCharacter);
                return result;
            }
            else {
                var returningData = new Returner(characterData.id, characterData.userId, 0, false);
                return returningData;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('create the character error message: ', error.message);
            }
            else {
                console.log('create the character unexpected error: ', error);
            }
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/MakeTheCharacterData.ts
var MakeTheCharacterData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function MakeTheCharacterData(the_character_data, userId, securityId, accessId, sessionId) {
    return MakeTheCharacterData_awaiter(this, void 0, void 0, function* () {
        var categoryUserId = userId;
        var accessUserId = userId;
        var securityUserId = userId;
        var sessionInformationUserId = userId;
        var theCharacter = new TheCharacter(userId, the_character_data, securityId, securityUserId, accessId, accessUserId, sessionId, sessionInformationUserId, "", false);
        var output = yield CreateTheCharacter(theCharacter);
        var returner = output;
        return returner;
    });
}

;// CONCATENATED MODULE: ./src/Services/MakeTheConcept.ts
var MakeTheConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function MakeTheConcept(referent, userId, categoryId, typeId, referentId, accessId, typeCharacter) {
    return MakeTheConcept_awaiter(this, void 0, void 0, function* () {
        let conceptString = yield GetConceptByCharacterAndType(referent, typeId);
        let concept = conceptString;
        if (concept.id == 0) {
            conceptString = yield CreateTheConcept(referent, userId, categoryId, typeId, referentId, accessId, typeCharacter);
            concept = conceptString;
        }
        return concept;
    });
}

;// CONCATENATED MODULE: ./src/Services/MakeTheCharacter.ts
var MakeTheCharacter_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function MakeTheCharacter(the_character_data, userId, securityId, accessId, accessUserId, sessionId) {
    return MakeTheCharacter_awaiter(this, void 0, void 0, function* () {
        let categoryUserId = userId;
        let securityUserId = userId;
        let categoryId = 4;
        let typeId = 51;
        let typeUserId = userId;
        let sessionUserId = userId;
        let referentUserId = userId;
        let lengthOfCharacters = the_character_data.length;
        let concept;
        if (lengthOfCharacters == 1) {
            let referentId = the_character_data.charCodeAt(0);
            let typeIdForCharacter = 49;
            let characterDataString = yield MakeTheCharacterData(the_character_data, userId, securityId, accessId, sessionId);
            concept = MakeTheConcept(the_character_data, userId, categoryId, typeIdForCharacter, referentId, accessId, "the_character");
        }
        else {
            let characterDataString = yield MakeTheCharacterData(the_character_data, userId, securityId, accessId, sessionId);
            let characterData = characterDataString;
            if (characterData.isNew) {
                let conceptString = yield MakeTheConcept(the_character_data, userId, categoryId, typeId, characterData.id, accessId, "the_characters");
                concept = conceptString;
            }
            else {
                let conceptString = yield MakeTheConcept(the_character_data, userId, categoryId, typeId, characterData.id, accessId, "the_characters");
                concept = conceptString;
            }
        }
        return concept;
    });
}

;// CONCATENATED MODULE: ./src/Services/MakeTheTypeConcept.ts
var MakeTheTypeConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function MakeTheTypeConcept(typeString, sessionId, sessionUserId, userId) {
    return MakeTheTypeConcept_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage('MakeTheTypeConcept', { typeString, sessionId, sessionUserId, userId });
            console.log('data received from sw', res);
            return res.data;
        }
        let referentId = 999;
        let securityId = 999;
        let accessId = 999;
        let accessUserId = userId;
        let existingConcept = yield GetConceptByCharacter(typeString);
        if (existingConcept) {
            if (existingConcept.id == 0 || existingConcept.userId == 0) {
                let splittedStringArray = SplitStrings(typeString);
                if (splittedStringArray.length > 0) {
                    if (splittedStringArray[0] == typeString) {
                        let conceptString = yield MakeTheCharacter(typeString, userId, securityId, accessId, accessUserId, sessionId);
                        existingConcept = conceptString;
                    }
                    else {
                        let categoryId = 1;
                        let categoryConcept = yield MakeTheTypeConcept(splittedStringArray[0], sessionId, sessionUserId, userId);
                        let typeConcept = yield MakeTheTypeConcept(splittedStringArray[1], sessionId, sessionUserId, userId);
                        if (typeConcept) {
                            let concept = yield CreateTheConceptImmediate(typeString, userId, categoryConcept.id, typeConcept.id, referentId, accessId, splittedStringArray[1]);
                            existingConcept = concept;
                        }
                    }
                }
            }
        }
        return existingConcept;
    });
}

;// CONCATENATED MODULE: ./src/Api/SearchConcept/GetConceptByCharacterAndCategoryDirect.ts
var GetConceptByCharacterAndCategoryDirect_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetConceptByCharacterAndCategoryDirectApi(characterValue, category_id) {
    return GetConceptByCharacterAndCategoryDirect_awaiter(this, void 0, void 0, function* () {
        let concept = CreateDefaultConcept_CreateDefaultConcept();
        try {
            var header = GetRequestHeader_GetRequestHeader('application/x-www-form-urlencoded');
            const response = yield fetch(BaseUrl_BaseUrl.GetConceptByCharacterAndCategoryDirectUrl(), {
                method: 'POST',
                headers: header,
                body: `character_value=${characterValue}&category_id=${category_id}`,
            });
            if (response.ok) {
                let conceptString = yield response.json();
                concept = conceptString;
                ConceptData_ConceptsData.AddConcept(concept);
            }
            else {
                //  throw new Error(`Error! status: ${response.status}`);
                console.log("This is the concept by category and character error", response.status);
                ErrorPosting_HandleHttpError(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(' This is the concept by category and character error message: ', error.message);
            }
            else {
                console.log(' This is the concept by category and character unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetConceptByCharacterAndCategoryDirectUrl());
        }
        return concept;
    });
}

;// CONCATENATED MODULE: ./src/Services/ConceptFinding/GetConceptByCharacterAndCategory.ts
var GetConceptByCharacterAndCategory_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetConceptByCharacterAndCategory(character) {
    return GetConceptByCharacterAndCategory_awaiter(this, void 0, void 0, function* () {
        let concept = CreateDefaultConcept_CreateDefaultConcept();
        if (character == "the") {
            concept.id = 1;
            concept.typeId = 5;
            concept.characterValue = "the";
            return concept;
        }
        let splittedStringArray = SplitStrings(character);
        if (splittedStringArray.length > 1) {
            let category = 1;
            let prefix = yield GetConceptByCharacterAndCategory(splittedStringArray[0]);
            if (prefix.id != 0) {
                category = prefix.id;
            }
            concept = yield GetConceptByCharacterAndCategoryFromMemory(character, category);
        }
        else if (splittedStringArray[0] == character) {
            concept = yield GetConceptByCharacterAndCategory_GetConceptByCharacter(character);
        }
        return concept;
    });
}
function GetConceptByCharacterAndCategory_GetConceptByCharacter(characterValue) {
    return GetConceptByCharacterAndCategory_awaiter(this, void 0, void 0, function* () {
        let concept = yield ConceptData_ConceptsData.GetConceptByCharacterAndTypeLocal(characterValue, 51);
        if (concept.id == 0) {
            concept = yield GetConceptByCharacterValue(characterValue);
        }
        return concept;
    });
}
function GetConceptByCharacterAndCategoryFromMemory(character, category) {
    return GetConceptByCharacterAndCategory_awaiter(this, void 0, void 0, function* () {
        let concept = yield ConceptData_ConceptsData.GetConceptByCharacterAndCategoryLocal(character, category);
        if (concept.id == 0) {
            concept = yield GetConceptByCharacterAndCategoryDirectApi(character, category);
        }
        return concept;
    });
}

;// CONCATENATED MODULE: ./src/Api/MakeTheTypeConceptApi.ts
var MakeTheTypeConceptApi_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 *  This function is used to check the type concpet of a passed string
 *  if the text is "the_person" then the function finds the related concept
 * @param type This is the type of the concept that needs to be created.
 * @param userId This is the userId of the creator.
 * @returns the concept created.
 */
function MakeTheTypeConceptApi(type, userId) {
    return MakeTheTypeConceptApi_awaiter(this, void 0, void 0, function* () {
        // create  a default concept with all defaulting to zero
        let concept = CreateDefaultConcept_CreateDefaultConcept();
        try {
            // get the concept by character and category from the api
            concept = yield GetConceptByCharacterAndCategory(type);
            if (concept.id == 0 || concept.typeId == 4) {
                let header = GetRequestHeader_GetRequestHeader('application/x-www-form-urlencoded');
                const response = yield fetch(BaseUrl_BaseUrl.MakeTheTypeConceptUrl(), {
                    method: 'POST',
                    headers: header,
                    body: `type=${type}`
                });
                if (!response.ok) {
                    ErrorPosting_HandleHttpError(response);
                    throw new Error(`Error! status: ${response.status}`);
                }
                let result = yield response.json();
                concept = result;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Make The Type Concept Api error : ', error.message);
            }
            else {
                console.log('Make The Type Concept Api error : ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.MakeTheTypeConceptUrl());
        }
        return concept;
    });
}

;// CONCATENATED MODULE: ./src/Api/GetAllLinkerConnectionsFromTheConcept.ts
var GetAllLinkerConnectionsFromTheConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetAllLinkerConnectionsFromTheConcept(conceptId) {
    return GetAllLinkerConnectionsFromTheConcept_awaiter(this, void 0, void 0, function* () {
        var connections = [];
        try {
            const start = new Date().getTime();
            var header = GetRequestHeader_GetRequestHeader('application/x-www-form-urlencoded');
            const response = yield fetch(BaseUrl_BaseUrl.GetAllLinkerConnectionOfConceptUrl() + `?conceptId=${conceptId}`, {
                method: 'GET',
                headers: header,
            });
            if (response.ok) {
                const result = yield response.json();
                for (var i = 0; i < result.length; i++) {
                    var connection = result[i];
                    connections.push(connection);
                }
            }
            else {
                console.log("Get all linker connection from the concepts error", "cannot get respone");
                ErrorPosting_HandleHttpError(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get all linker connection from the concepts error: ', error.message);
            }
            else {
                console.log('Get all linker connection from the concepts error(Unexpected): ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetAllLinkerConnectionOfConceptUrl());
        }
        return connections;
    });
}

;// CONCATENATED MODULE: ./src/Api/GetAllLinkerConnectionsToTheConcept.ts
var GetAllLinkerConnectionsToTheConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetAllLinkerConnectionsToTheConcept(conceptId) {
    return GetAllLinkerConnectionsToTheConcept_awaiter(this, void 0, void 0, function* () {
        var connections = [];
        try {
            const start = new Date().getTime();
            var header = GetRequestHeader_GetRequestHeader('application/x-www-form-urlencoded');
            const response = yield fetch(BaseUrl_BaseUrl.GetAllLinkerConnectionToConceptUrl() + `?conceptId=${conceptId}`, {
                method: 'GET',
                headers: header,
            });
            if (response.ok) {
                const result = yield response.json();
                for (var i = 0; i < result.length; i++) {
                    var connection = result[i];
                    connections.push(connection);
                }
            }
            else {
                console.log("Get all linker connection To the concepts error", "cannot get respone");
                ErrorPosting_HandleHttpError(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get all linker connection To the concepts error: ', error.message);
            }
            else {
                console.log('Get all linker connection To the concepts error(Unexpected): ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetAllLinkerConnectionToConceptUrl());
        }
        return connections;
    });
}

;// CONCATENATED MODULE: ./src/Services/GetLinkerConnectionFromConcept.ts
var GetLinkerConnectionFromConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetLinkerConnectionFromConcepts(id) {
    return GetLinkerConnectionFromConcept_awaiter(this, void 0, void 0, function* () {
        let connections = yield GetAllLinkerConnectionsFromTheConcept(id);
        for (let i = 0; i < connections.length; i++) {
            let localConnection = connections[i];
            let connectionIdentifier = localConnection.typeId;
            let concept = yield GetTheConcept(connectionIdentifier);
            localConnection.type = concept;
        }
        return connections;
    });
}
function GetLinkerConnectionToConcepts(id) {
    return GetLinkerConnectionFromConcept_awaiter(this, void 0, void 0, function* () {
        let connections = yield GetAllLinkerConnectionsToTheConcept(id);
        for (let i = 0; i < connections.length; i++) {
            let localConnection = connections[i];
            let connectionIdentifier = localConnection.typeId;
            let concept = yield GetTheConcept(connectionIdentifier);
            localConnection.type = concept;
        }
        return connections;
    });
}

;// CONCATENATED MODULE: ./src/Api/DeleteTheConcept.ts
var DeleteTheConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function DeleteTheConcept(id) {
    return DeleteTheConcept_awaiter(this, void 0, void 0, function* () {
        try {
            const formdata = new FormData();
            formdata.append("id", id.toString());
            let header = GetOnlyTokenHeader();
            const response = yield fetch(BaseUrl_BaseUrl.DeleteConceptUrl(), {
                method: 'POST',
                headers: header,
                body: formdata
            });
            if (!response.ok) {
                // throw new Error(`Error! status: ${response.status}`);
                console.log("Delete concept error", response.status);
                ErrorPosting_HandleHttpError(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Delete concept error message: ', error.message);
            }
            else {
                console.log('Delete concept unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.DeleteConceptUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/DeleteConcept.ts
var DeleteConcept_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







function DeleteConceptById(id) {
    return DeleteConcept_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage('DeleteConceptById', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        if (id > 0) {
            var concept = yield GetTheConcept(id);
            var typeId = concept.typeId;
            var character = concept.characterValue;
            yield BinaryTypeTree.removeTypeConcept(typeId, id);
            yield BinaryCharacterTree.removeNodeByCharacter(character, id);
            //removeFromDatabase("concept",id);
            yield DeleteTheConcept(id);
            yield BinaryTree.removeNodeFromTree(id);
            yield ConnectionOfTheTree.removeNodeFromTree(id);
        }
        else {
            LocalConceptData_LocalConceptsData.RemoveConceptById(id);
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/Delete/DeleteConceptInBackend.ts
var DeleteConceptInBackend_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function TrashTheConcept(id, token) {
    return DeleteConceptInBackend_awaiter(this, void 0, void 0, function* () {
        try {
            const myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + token);
            const formdata = new FormData();
            formdata.append('id', id.toString());
            const response = yield fetch(BaseUrl_BaseUrl.DeleteConceptUrl(), {
                method: 'POST',
                body: formdata,
                headers: myHeaders,
            });
            if (!response.ok) {
                ErrorPosting_HandleHttpError(response);
                throw new Error(`Delete composition Error! status: ${response.status}`);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Delete composition error message: ', error.message);
            }
            else {
                console.log('Delete composition unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.DeleteConceptUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/MakeTheTimestamp.ts
var MakeTheTimestamp_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function MakeTheTimestamp(type_1, referent_1, userId_1) {
    return MakeTheTimestamp_awaiter(this, arguments, void 0, function* (type, referent, userId, accessId = 4, sessionInformationId = 999) {
        let categoryId = 4;
        let referentId = 0;
        // change this
        let stringToCheck = "";
        let startsWithThe = type.startsWith("the_");
        let typeConcept = CreateDefaultConcept_CreateDefaultConcept();
        let concept;
        if (startsWithThe) {
            stringToCheck = type;
        }
        else {
            stringToCheck = "the_" + type;
        }
        let typeConceptString = yield MakeTheTypeConceptApi(stringToCheck, userId);
        typeConcept = typeConceptString;
        let conceptString = yield MakeTheConcept(referent, userId, categoryId, typeConcept.id, referentId, accessId, stringToCheck);
        concept = conceptString;
        return concept;
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/SearchQuery.ts
class SearchQuery {
    constructor() {
        this.composition = 0;
        this.type = "";
        this.linker = "";
        this.inpage = 10;
        this.page = 1;
        this.listLinkers = [];
        this.fullLinkers = [];
        this.textSearch = "";
        this.logic = "or";
        this.reverse = false;
        this.doFilter = false;
        this.filterSearches = [];
        this.selectors = [];
        this.ofCompositions = [];
    }
}

;// CONCATENATED MODULE: ./src/Api/GetConnectionBulk.ts
var GetConnectionBulk_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






/**
 * After fetching these connections it is saved in the local static ConnectionBinaryTree so it can be reused without being fetched
 * @param connectionIds array of connection ids that need to fetched by the local system
 * @returns the list of  connections that have been fetched
 */
function GetConnectionBulk() {
    return GetConnectionBulk_awaiter(this, arguments, void 0, function* (connectionIds = []) {
        if (serviceWorker) {
            const res = yield sendMessage('GetConnectionBulk', { connectionIds });
            console.log('data received from sw', res);
            return res.data;
        }
        let connectionList = [];
        try {
            if (connectionIds.length > 0) {
                let bulkConnectionFetch = [];
                // if the connections are already present in the local memory then take it from there 
                //else put it in a list called bulkConnectionFetch which will be used to call and api.
                for (let i = 0; i < connectionIds.length; i++) {
                    let conceptUse = yield ConnectionData.GetConnection(connectionIds[i]);
                    if (conceptUse.id == 0) {
                        bulkConnectionFetch.push(connectionIds[i]);
                    }
                    else {
                        connectionList.push(conceptUse);
                    }
                }
                // let remainingIds:any = {};
                // await ConnectionData.GetConnectionBulkData(connectionIds, connectionList, remainingIds );
                //bulkConnectionFetch = connectionIds;
                // if the case that bulkConnectionFetch does not have any elements then we just return everything we have
                if (bulkConnectionFetch.length == 0) {
                    return connectionList;
                }
                else {
                    // if the connection could not be found in the local memory then fetch from the api.
                    let header = GetRequestHeader_GetRequestHeader();
                    const response = yield fetch(BaseUrl_BaseUrl.GetConnectionBulkUrl(), {
                        method: 'POST',
                        headers: header,
                        body: JSON.stringify(bulkConnectionFetch)
                    });
                    if (response.ok) {
                        const result = yield response.json();
                        if (result.length > 0) {
                            for (let i = 0; i < result.length; i++) {
                                let connection = result[i];
                                connectionList.push(connection);
                                ConnectionData.AddConnection(connection);
                            }
                        }
                    }
                    else {
                        ErrorPosting_HandleHttpError(response);
                        console.log("Get Connection Bulk error", response.status);
                    }
                }
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get Connection Bulk error message: ', error);
            }
            else {
                console.log('Get Connection Bulk unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetConnectionBulkUrl());
        }
        yield FindConceptsFromConnections(connectionList);
        return connectionList;
    });
}

;// CONCATENATED MODULE: ./src/Services/GetCompositionBulk.ts
var GetCompositionBulk_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * ## Format JUSTDATA ##
 * Function converts the conceptIds to json (compositions)
 * This function takes in the conceptIds and returns a list of compositions related to those concepts.
 * @param conceptIds  list of concept ids that are compositions.
 * @returns compositions
 */
function GetCompositionBulk() {
    return GetCompositionBulk_awaiter(this, arguments, void 0, function* (conceptIds = []) {
        yield GetAllConnectionsOfCompositionBulk(conceptIds);
        let compositions = [];
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield GetCompositionFromMemory(conceptIds[i]);
            compositions.push(comp);
        }
        return compositions;
    });
}
/**
 * ## FORMAT DATAIDDATE ##
 * Function converts the conceptIds to json (compositions)
 * @param conceptIds this is the list of concept ids that should be converted to compostions in data - id format.
 * @returns list of compositions in the data - id format.
 */
function GetCompositionBulkWithDataId() {
    return GetCompositionBulk_awaiter(this, arguments, void 0, function* (conceptIds = []) {
        yield GetAllConnectionsOfCompositionBulk(conceptIds);
        let compositions = [];
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield GetCompositionWithIdFromMemory(conceptIds[i]);
            compositions.push(comp);
        }
        return compositions;
    });
}
/**
 * ## FORMAT DATAIDDATE ##
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format.
 * @param conceptIds This is the list of concept ids that need to be converted to compositions.
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns list of compositions created from the passed conceptIds and connectionIds.
 */
function GetCompositionFromConnectionsWithDataId() {
    return GetCompositionBulk_awaiter(this, arguments, void 0, function* (conceptIds = [], connectionIds = []) {
        if (serviceWorker) {
            const res = yield sendMessage('GetCompositionFromConnectionsWithDataId', { conceptIds, connectionIds });
            console.log('data received from sw', res);
            return res.data;
        }
        let newConnections = yield GetConnectionBulk(connectionIds);
        let oldConnections = yield FindConnectionsOfCompositionsBulkInMemory(conceptIds);
        //CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
        let compositions = [];
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield GetCompositionWithIdFromMemory(conceptIds[i]);
            compositions.push(comp);
        }
        return compositions;
    });
}
/**
 * ## Format DATAIDDATE ##
 * This function converts the conceptIds and internal connectionIds to compositions in data-Id format with index(conceptId).
 * @param conceptIds This is the list of concept ids that need to be converted to compositions.
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index .
 */
function GetCompositionFromConnectionsWithDataIdIndex() {
    return GetCompositionBulk_awaiter(this, arguments, void 0, function* (conceptIds = [], connectionIds = []) {
        if (serviceWorker) {
            const res = yield sendMessage('GetCompositionFromConnectionsWithDataIdIndex', { conceptIds, connectionIds });
            console.log('data received from sw', res);
            return res.data;
        }
        let newConnections = yield GetConnectionBulk(connectionIds);
        let myNewConnections = newConnections;
        let oldConnections = yield FindConnectionsOfCompositionsBulkInMemory(conceptIds);
        //CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield GetCompositionWithIdFromMemory(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
    });
}
/**
 * ## Format is dictionary with key as concept id and value as data (json) ##
 * This function converts the conceptIds and internal connectionIds to compositions format with index(conceptId).
 * @param conceptIds This is the list of concept ids that need to be converted to compositions.
 * @param connectionIds These are the internal connectionIds that need to be passed to create the compositions.
 * @returns dictionary of compositions created from the passed conceptIds and connectionIds with conceptId as its index .
 */
function GetCompositionFromConnectionsWithIndex() {
    return GetCompositionBulk_awaiter(this, arguments, void 0, function* (conceptIds = [], connectionIds = []) {
        let newConnections = yield GetConnectionBulk(connectionIds);
        let myNewConnections = newConnections;
        let oldConnections = yield FindConnectionsOfCompositionsBulkInMemory(conceptIds);
        //CheckForConnectionDeletionWithIds(connectionIds,oldConnections);
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield GetCompositionFromMemory(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
    });
}
/**
 * Used to prefetch all the connections and their related concepts.
 * @param connectionIds these are the connection ids that are used to fetch all the connections and also their related concepts.
 * @returns all the connections that are passed as ids.
 */
function GetCompositionBulk_GetConnectionDataPrefetch(connectionIds) {
    return GetCompositionBulk_awaiter(this, void 0, void 0, function* () {
        let remainingConnections = [];
        let connectionsAll = [];
        let remainingIds = {};
        for (let i = 0; i < connectionIds.length; i++) {
            let connection = yield ConnectionData.GetConnection(connectionIds[i]);
            // console.log("this is the connection fetch", connection);
            if (connection.id == 0) {
                remainingConnections.push(connectionIds[i]);
            }
            else {
                connectionsAll.push(connection);
            }
        }
        for (let i = 0; i < connectionIds.length; i++) {
            remainingIds[connectionIds[i]] = false;
        }
        //await ConnectionData.GetConnectionBulkData(connectionIds, connectionsAll, remainingIds);
        // for(let key in remainingIds){
        //     if(remainingIds[key] == false){
        //         remainingConnections.push(Number(key));
        //     }
        // }
        // remainingConnections = connectionIds;
        let prefetchConcepts = [];
        let connectionsAllLocal = yield GetConnectionBulk(remainingConnections);
        connectionsAll = [...connectionsAll, ...connectionsAllLocal];
        for (let j = 0; j < connectionsAll.length; j++) {
            prefetchConcepts.push(connectionsAll[j].ofTheConceptId);
            prefetchConcepts.push(connectionsAll[j].toTheConceptId);
        }
        yield GetConceptBulk(prefetchConcepts);
        return connectionsAll;
    });
}
/**
 * ## Format DATAIDDATE ##
 * This function converts the conceptIds and internal connections to create compositions.
 * Format is of a dictionary with ids as the key and value is the composition data.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
function GetCompositionBulk_GetCompositionFromConnectionsWithDataIdInObject() {
    return GetCompositionBulk_awaiter(this, arguments, void 0, function* (conceptIds = [], connections = []) {
        // get all the connections that are not available in memory from the api.
        yield GetConnectionBulk(connections);
        // create a list of compositions from the fetched concepts and connections.
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield GetCompositionWithIdFromMemory(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
    });
}
/**
 * ## Format DATAIDDATE ##
 * ## duplicate ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
function GetCompositionFromConnectionsWithDataIdInObjectNew() {
    return GetCompositionBulk_awaiter(this, arguments, void 0, function* (conceptIds = [], connections = []) {
        // get all the connections that are not available in memory from the api.
        yield GetConnectionBulk(connections);
        // create a list of compositions from the fetched concepts and connections.
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield GetCompositionWithIdFromMemoryNew(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
    });
}
/**
 * ## Format justdata ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
function GetCompositionFromConnectionsInObject() {
    return GetCompositionBulk_awaiter(this, arguments, void 0, function* (conceptIds = [], connections = []) {
        // get all the connections that are not available in memory from the api.
        yield GetConnectionBulk(connections);
        // create a list of compositions from the fetched concepts and connections.
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield GetCompositionFromMemory(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
    });
}
/**
 * ## Format Normal ##
 * This function converts the conceptIds and internal connections to create compositions.
 * @param conceptIds these are the concept ids that need to be fetched to create their compositions
 * @param connections these are the connections that are used to create the structure.
 * @returns a dictionary / object that has key as their conceptId and the value as their composition object.
 */
function GetCompositionBulk_GetCompositionFromConnectionsInObjectNormal() {
    return GetCompositionBulk_awaiter(this, arguments, void 0, function* (conceptIds = [], connections = []) {
        // get all the connections that are not available in memory from the api.
        yield GetConnectionBulk(connections);
        // create a list of compositions from the fetched concepts and connections.
        let compositions = {};
        for (let i = 0; i < conceptIds.length; i++) {
            let comp = yield GetCompositionFromMemoryNormal(conceptIds[i]);
            compositions[conceptIds[i]] = comp;
        }
        return compositions;
    });
}

;// CONCATENATED MODULE: ./src/Api/RecursiveSearch.ts
var RecursiveSearch_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






function RecursiveSearchApi() {
    return RecursiveSearch_awaiter(this, arguments, void 0, function* (composition = 0, listLinkers = [], textSearch = "") {
        let concepts = [];
        try {
            let searchQuery = new SearchQuery();
            searchQuery.composition = composition;
            searchQuery.listLinkers = listLinkers;
            searchQuery.textSearch = textSearch;
            let raw = JSON.stringify(searchQuery);
            let Connections = [];
            let myHeaders = GetRequestHeader_GetRequestHeader();
            const response = yield fetch(BaseUrl_BaseUrl.RecursiveSearchUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: raw
            });
            if (response.ok) {
                const result = yield response.json();
                let conceptIds = result.compositionIds;
                let connections = result.internalConnections;
                let externalConnections = result.externalConnections;
                concepts = yield GetCompositionFromConnectionsWithDataId(conceptIds, connections);
            }
            else {
                console.log("recursive search error ", response.status);
                ErrorPosting_HandleHttpError(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('recursive search error message: ', error.message);
            }
            else {
                console.log('recursive search unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.RecursiveSearchUrl());
        }
        return concepts;
    });
}
function RecursiveSearchApiRaw() {
    return RecursiveSearch_awaiter(this, arguments, void 0, function* (composition = 0, listLinkers = [], textSearch = "") {
        if (serviceWorker) {
            const res = yield sendMessage('RecursiveSearchApiRaw', { composition, listLinkers, textSearch });
            console.log('data received from sw', res);
            return res.data;
        }
        let concepts = [];
        try {
            let searchQuery = new SearchQuery();
            searchQuery.composition = composition;
            searchQuery.listLinkers = listLinkers;
            searchQuery.textSearch = textSearch;
            let raw = JSON.stringify(searchQuery);
            let Connections = [];
            let myHeaders = GetRequestHeader_GetRequestHeader();
            const response = yield fetch(BaseUrl_BaseUrl.RecursiveSearchUrl(), {
                method: "POST",
                headers: myHeaders,
                body: raw,
            });
            if (response.ok) {
                const result = yield response.json();
                let conceptIds = result.compositionIds;
                let connections = result.internalConnections;
                let externalConnections = result.externalConnections;
                return result;
            }
            else {
                console.log("recursive search error ", response.status);
                ErrorPosting_HandleHttpError(response);
            }
            return [];
        }
        catch (error) {
            if (error instanceof Error) {
                console.log("recursive search error message: ", error.message);
            }
            else {
                console.log("recursive search unexpected error: ", error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.RecursiveSearchUrl());
        }
    });
}
function RecursiveSearchApiRawFullLinker() {
    return RecursiveSearch_awaiter(this, arguments, void 0, function* (composition = 0, fullLinkers = [], textSearch = "") {
        let concepts = [];
        try {
            let searchQuery = new SearchQuery();
            searchQuery.composition = composition;
            searchQuery.fullLinkers = fullLinkers;
            searchQuery.textSearch = textSearch;
            let raw = JSON.stringify(searchQuery);
            let Connections = [];
            let myHeaders = GetRequestHeader_GetRequestHeader();
            const response = yield fetch(BaseUrl_BaseUrl.RecursiveSearchUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: raw
            });
            if (response.ok) {
                const result = yield response.json();
                let conceptIds = result.compositionIds;
                let connections = result.internalConnections;
                let externalConnections = result.externalConnections;
                return result;
            }
            else {
                console.log("recursive search error ", response.status);
                ErrorPosting_HandleHttpError(response);
            }
            return [];
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('recursive search error message: ', error.message);
            }
            else {
                console.log('recursive search unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.RecursiveSearchUrl());
        }
    });
}
function RecursiveSearchApiNewRawFullLinker() {
    return RecursiveSearch_awaiter(this, arguments, void 0, function* (composition = 0, fullLinkers = [], textSearch = "") {
        let concepts = [];
        try {
            let searchQuery = new SearchQuery();
            searchQuery.composition = composition;
            searchQuery.fullLinkers = fullLinkers;
            searchQuery.textSearch = textSearch;
            let raw = JSON.stringify(searchQuery);
            let Connections = [];
            let myHeaders = GetRequestHeader_GetRequestHeader();
            const response = yield fetch(BaseUrl_BaseUrl.RecursiveSearchUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: raw
            });
            if (response.ok) {
                const result = yield response.json();
                let conceptIds = result.compositionIds;
                let connections = result.internalConnections;
                let externalConnections = result.externalConnections;
                return result;
            }
            else {
                console.log("recursive search error ", response.status);
                ErrorPosting_HandleHttpError(response);
            }
            return [];
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('recursive search error message: ', error.message);
            }
            else {
                console.log('recursive search unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.RecursiveSearchUrl());
        }
    });
}
function RecursiveSearchLocal(composition_1) {
    return RecursiveSearch_awaiter(this, arguments, void 0, function* (composition, listLinkers = [], textSearch = "") {
    });
}

;// CONCATENATED MODULE: ./src/Api/Login.ts
var Login_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function LoginToBackend(email, password) {
    return Login_awaiter(this, void 0, void 0, function* () {
        try {
            let object = {
                'email': email,
                'password': password
            };
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let requestObject = JSON.stringify(object);
            const response = yield fetch(BaseUrl_BaseUrl.LoginUrl(), {
                method: 'POST',
                headers: myHeaders,
                body: requestObject
            });
            if (response.ok) {
                const result = yield response.json();
                console.log(result.data);
                TokenStorage.BearerAccessToken = result.data.token;
                console.log("this is the token", TokenStorage.BearerAccessToken);
                return result;
            }
            else {
                console.log('Login tsccs error message: ', response.status);
                ErrorPosting_HandleHttpError(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Login tsccs error message: ', error.message);
            }
            else {
                console.log(' Login tsccs  unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.LoginUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/Signup.ts
var Signup_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function Signup(signupModel) {
    return Signup_awaiter(this, void 0, void 0, function* () {
        const signupResponse = yield postData(BaseUrl_BaseUrl.SignupUrl(), signupModel);
        return signupResponse;
    });
}
function postData() {
    return Signup_awaiter(this, arguments, void 0, function* (url = '', data = {}) {
        let freeschemaRes = {
            message: 'success',
            status: false,
            statusCode: 200,
            data: '',
        };
        // Default options are marked with *
        try {
            const response = yield fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            });
            const output = yield response.json();
            if (response.ok) {
                freeschemaRes = {
                    message: 'success',
                    status: true,
                    statusCode: 200,
                    data: output,
                };
            }
            else {
                ErrorPosting_HandleHttpError(response);
            }
            return freeschemaRes;
        }
        catch (error) {
            console.log('Signup Error: ', error);
            HandleInternalError(error, url);
        }
    });
}
// export async function submitSignupForm(e: any) {
//   e.preventDefault();
//   // alert("Are you sure to want to signup?");
//   const inputType = <HTMLInputElement>document.getElementById("type");
//   const typeValue = inputType?.value;
//   const inputUsername = <HTMLInputElement>document.getElementById("username");
//   const usernameValue = inputUsername?.value;
//   const inputEmail = <HTMLInputElement>document.getElementById("email");
//   const emailValue = inputEmail?.value;
//   const inputGender = <HTMLInputElement>document.getElementById("gender");
//   const genderValue = inputGender?.value;
//   const inputFirstName = <HTMLInputElement>document.getElementById("firstName");
//   const firstNameValue = inputFirstName?.value;
//   const inputLastName = <HTMLInputElement>document.getElementById("lastName");
//   const lastNameValue = inputLastName?.value;
//   const inputPassword = <HTMLInputElement>document.getElementById("password");
//   const passwordValue = inputPassword?.value;
//   const inputConfirmPassword = <HTMLInputElement>(
//     document.getElementById("confirmPassword")
//   );
//   const confirmPasswordValue = inputConfirmPassword?.value;
//   // console.log(confirmPasswordValue,"confirmPasswordValue");
//   const inputprivacyPolicy = <HTMLInputElement>(
//     document.getElementById("privacyPolicy")
//   );
//   const privacyPolicy = inputprivacyPolicy?.checked;
//   const inputPrivacyPolicyError = <HTMLInputElement>(
//     document.getElementById("privacyPolicyError")
//   );
//   if (!privacyPolicy) {
//     inputPrivacyPolicyError.style.display = "block";
//   }
//   const signupData: any = {
//     type: typeValue,
//     username: usernameValue,
//     title: genderValue,
//     email: emailValue,
//     password: passwordValue,
//     timestamp: new Date().toISOString(),
//     fname: firstNameValue,
//     lname: lastNameValue,
//   };
//   if (privacyPolicy) {
//     const signupResponse = await signupEntity(signupData);
//     if (!signupResponse?.error && signupResponse?.data) {
//       updateContent("/login");
//     }
//   }
// }
/**
 *
 * @param signupData
 *   const signupData: any = {
 *   type: typeValue,
 *   username: usernameValue,
 *   title: genderValue,
 *   email: emailValue,
 *   password: passwordValue,
 *   timestamp: new Date().toISOString(),
 *   fname: firstNameValue,
 *   lname: lastNameValue,
 * };
 * @returns
 */
function SignupEntity(signupData) {
    return Signup_awaiter(this, void 0, void 0, function* () {
        const baseURL = BaseUrl_BaseUrl.NODE_URL;
        const response = yield fetch(`${baseURL}/api/v1/entity/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signupData),
        });
        if (response.ok) {
            return response.json();
        }
        else {
            if (response.status === 404)
                throw new Error("404, Not found");
            if (response.status === 500)
                throw new Error("500, internal server error");
            throw new Error(response.status);
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/Signin.ts
var Signin_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function Signin(signinInfo) {
    return Signin_awaiter(this, void 0, void 0, function* () {
        const raw = JSON.stringify({
            email: signinInfo.email,
            password: signinInfo.password,
        });
        let freeschemaRes = {
            message: 'success',
            status: false,
            statusCode: 200,
            data: '',
        };
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        const url = BaseUrl_BaseUrl.LoginUrl();
        try {
            const response = yield fetch(url, {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
            });
            const output = yield response.json();
            if (response.ok) {
                const dataObject = output === null || output === void 0 ? void 0 : output.data;
                freeschemaRes = {
                    message: 'success',
                    status: true,
                    statusCode: 200,
                    data: dataObject,
                };
            }
            else {
                ErrorPosting_HandleHttpError(response);
            }
            return freeschemaRes;
        }
        catch (error) {
            console.log('Sign in api error', error);
            HandleInternalError(error, url);
        }
    });
}

;// CONCATENATED MODULE: ./src/Helpers/UniqueInsert.ts
function InsertUniqueNumber(Array, toInsert) {
    if (Array.indexOf(toInsert) === -1) {
        Array.push(toInsert);
    }
    return Array;
}

;// CONCATENATED MODULE: ./src/Helpers/CheckIfExists.ts


function CheckIfConceptsExistsInArray(conceptList = [], concept) {
    let foundConcept = CreateDefaultConcept();
    if (Array.isArray(conceptList)) {
        const check = conceptList.find(c => c.id === concept.id);
        if (check) {
            foundConcept = check;
        }
    }
    return foundConcept;
}
// export function CheckIfTypeConceptExistsInArray(
//   conceptList: Concept[] = [],
//   concept: Concept,
// ) {
//   let newConceptType = concept.type?.characterValue;
//   if(!newConceptType?.startsWith("the_")){
//     newConceptType = "the_" + newConceptType;
//   }
//   let startsWith = conceptList[i].type?.characterValue;
//   if(!startsWith?.startsWith("the_")){
//     startsWith = "the_" + startsWith;
//   }
//   let foundConcept = CreateDefaultConcept()
//   if (Array.isArray(conceptList)) {
//     const check = conceptList.find(c => c.typeId == concept.typeId)
//     if (check) {
//       foundConcept = check
//     }
//   }
//   return foundConcept
// }
function CheckIfTypeConceptsExistsInArray(conceptList = [], concept) {
    var _a, _b;
    let foundConcepts = [];
    let newConceptType = (_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue;
    if (!(newConceptType === null || newConceptType === void 0 ? void 0 : newConceptType.startsWith("the_"))) {
        newConceptType = "the_" + newConceptType;
    }
    if (Array.isArray(conceptList)) {
        for (let i = 0; i < conceptList.length; i++) {
            let startsWith = (_b = conceptList[i].type) === null || _b === void 0 ? void 0 : _b.characterValue;
            if (!(startsWith === null || startsWith === void 0 ? void 0 : startsWith.startsWith("the_"))) {
                startsWith = "the_" + startsWith;
            }
            if (concept.typeId == conceptList[i].typeId || newConceptType == startsWith) {
                foundConcepts.push(conceptList[i]);
            }
        }
    }
    return foundConcepts;
}
function CheckIfTypeLConceptsExistsInArray(conceptList = [], concept) {
    let foundConcepts = [];
    let newConceptType = concept.typeCharacter;
    if (!(newConceptType === null || newConceptType === void 0 ? void 0 : newConceptType.startsWith("the_"))) {
        newConceptType = "the_" + newConceptType;
    }
    if (Array.isArray(conceptList)) {
        for (let i = 0; i < conceptList.length; i++) {
            let startsWith = conceptList[i].typeCharacter;
            if (!(startsWith === null || startsWith === void 0 ? void 0 : startsWith.startsWith("the_"))) {
                startsWith = "the_" + startsWith;
            }
            if (concept.typeId == conceptList[i].typeId || newConceptType == startsWith) {
                foundConcepts.push(conceptList[i]);
            }
        }
    }
    return foundConcepts;
}
function CheckIfConnectionExistsInArray(connectionList = [], connection) {
    let foundConnection = new Connection(0, 0, 0, 0, 0, 0, 0);
    if (Array.isArray(connectionList)) {
        const check = connectionList.find(c => c.id === connection.id);
        if (check) {
            foundConnection = check;
        }
    }
    return foundConnection;
}
function CheckIfToTheConceptExistsInConnectionArray(connectionList = [], conceptId) {
    let foundConnection = new Connection(0, 0, 0, 0, 0, 0, 0);
    if (Array.isArray(connectionList)) {
        const check = connectionList.find(c => c.toTheConceptId === conceptId);
        if (check) {
            foundConnection = check;
        }
        const toCheck = connectionList.find(c => c.ofTheConceptId === conceptId);
        if (toCheck) {
            foundConnection = toCheck;
        }
    }
    return foundConnection;
}
function CheckAllConnectionsConnectedInConnectionArray(connectionList = [], conceptId) {
    let foundConnections = [];
    if (Array.isArray(connectionList)) {
        const check = connectionList.find(c => c.toTheConceptId == conceptId);
        if (check) {
            foundConnections.push(check);
        }
        const toCheck = connectionList.find(c => c.ofTheConceptId == conceptId);
        if (toCheck) {
            foundConnections.push(toCheck);
        }
    }
    return foundConnections;
}
function CheckAllConnectionsConnectedInLConnectionArray(connectionList = [], conceptId) {
    let foundConnections = [];
    if (Array.isArray(connectionList)) {
        const check = connectionList.find(c => c.toTheConceptId == conceptId);
        if (check) {
            foundConnections.push(check);
        }
        const toCheck = connectionList.find(c => c.ofTheConceptId == conceptId);
        if (toCheck) {
            foundConnections.push(toCheck);
        }
    }
    return foundConnections;
}

;// CONCATENATED MODULE: ./src/Helpers/RemoveFromArray.ts
function RemoveConceptFromList(conceptList = [], concept) {
    if (Array.isArray(conceptList)) {
        conceptList.splice(conceptList.findIndex(function (i) {
            return i.id === concept.id;
        }), 1);
    }
}
function RemoveConnectionFromList(connectionList = [], connection) {
    if (Array.isArray(connectionList)) {
        connectionList.splice(connectionList.findIndex(function (i) {
            return i.id === connection.id;
        }), 1);
    }
}
function RemoveLConnectionFromList(connectionList = [], connection) {
    if (Array.isArray(connectionList)) {
        connectionList.splice(connectionList.findIndex(function (i) {
            return i.id === connection.id;
        }), 1);
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/Composition/CompositionNode.ts

class CompositionNode {
    constructor(key, value, leftNode, rightNode) {
        this.expiryTime = new Date(Date.now() + 10 * 60 * 1000);
        this.height = 1;
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
    isValid() {
        const currentTime = new Date(Date.now());
        if (this.expiryTime < currentTime) {
            CompositionBinaryTree.removeNodeFromTree(this.key);
            return false;
        }
        return true;
    }
    saveToCache(data) {
        this.value.cached = data;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        const LeftNode = node.leftNode;
        const RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        // else if (node.key == passedNode.key && node.key != ""){
        //     node.currentNode = passedNode;
        // }
        else {
            this.isValid();
            node = passedNode;
            return node;
        }
        node.height =
            1 +
                Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        const balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    return this.rightRotate(node);
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    return this.rightRotate(node);
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    return this.leftRotate(node);
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    return this.leftRotate(node);
                }
            }
        }
        this.isValid();
        return node;
    }
    rightRotate(y) {
        if (y) {
            const x = y.leftNode;
            if (x) {
                const T2 = x.rightNode;
                y.leftNode = T2;
                x.rightNode = y;
                y.height =
                    Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                x.height =
                    Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
            // return x;
        }
        return y;
    }
    leftRotate(x) {
        if (x) {
            const y = x.rightNode;
            if (y) {
                const T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
                return y;
            }
            //return y;
        }
        return x;
    }
    getHeight(node) {
        if (node) {
            return node.height;
        }
        return 0;
    }
    getBalanceFactor(N) {
        if (N == null) {
            return 0;
        }
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
    }
    getFromNode(id, node) {
        if (node) {
            if (id == node.key && node.isValid()) {
                return node;
            }
            else if (id < node.key) {
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > node.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;
    }
    removeNode(passedNode, id) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > id) {
            passedNode.leftNode = this.removeNode(passedNode.leftNode, id);
            return passedNode;
        }
        else if (passedNode.key < id) {
            passedNode.rightNode = this.removeNode(passedNode.rightNode, id);
            return passedNode;
        }
        if (passedNode.leftNode == null) {
            const temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            const temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            const immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
            return passedNode;
        }
    }
    countNodeBelow(root) {
        if (root == null) {
            return 0;
        }
        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return (1 +
            this.countNodeBelow(root.leftNode) +
            this.countNodeBelow(root.rightNode));
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/Composition/CompositionBinaryTree.ts
var CompositionBinaryTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class CompositionBinaryTree {
    static addNodeToTree(node) {
        if (this.root == null) {
            this.root = node;
            return this.root;
        }
        else {
            this.root = this.root.addNode(node, this.root, this.root.height);
        }
    }
    static addCompositionToTree(composition) {
        const node = new CompositionNode(composition.id, composition, null, null);
        this.addNodeToTree(node);
    }
    static getNodeFromTree(id) {
        return CompositionBinaryTree_awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                const Node = this.root.getFromNode(id, this.root);
                return Node;
            }
            return null;
        });
    }
    static removeNodeFromTree(id) {
        return CompositionBinaryTree_awaiter(this, void 0, void 0, function* () {
            if (this.root) {
                this.root = this.root.removeNode(this.root, id);
            }
        });
    }
    static countNumberOfNodes() {
        if (this.root) {
            return this.root.countNodeBelow(this.root);
        }
        return 0;
    }
}
// this is a binary tree to hold compositions in it
CompositionBinaryTree.root = null;

;// CONCATENATED MODULE: ./src/Services/Composition/BuildComposition.ts
var BuildComposition_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



// this is a different type of recurisve fetch because here all the concepts and connections are passed as it is
// so there is no need to query the connections and concepts from outside
// if the concept connection is not found then it will go to the backend to fetch it
function recursiveFetchNew(id_1, connectionList_1, conceptList_1, compositionList_1) {
    return BuildComposition_awaiter(this, arguments, void 0, function* (id, connectionList, conceptList, compositionList, visitedConcepts = []) {
        var _a, _b;
        let output = {};
        const arroutput = [];
        if (id == 0) {
            return '';
        }
        // get concept from a list of concepts
        let concept = getConceptFromList(conceptList, id);
        // if we cannot find the concept from the concept list then find it from the backend
        if ((concept == null || concept.id == 0) && id != null && id != undefined) {
            // get the concepts tries to find it from the binary tree else from the backend if cannot find it then
            // it will become null
            const conceptString = yield GetTheConcept(id);
            concept = conceptString;
        }
        if (concept.id != 0) {
            // if the concept type is non existent then you have to get the type from the backend
            if (concept.type == null) {
                // get the concept type id from the concept which is stored in typeId
                const toConceptTypeId = concept.typeId;
                //
                let toConceptType = getConceptFromList(conceptList, toConceptTypeId);
                concept.type = toConceptType;
                if (toConceptType == null &&
                    toConceptTypeId != null &&
                    toConceptTypeId != undefined) {
                    const conceptString = yield GetTheConcept(toConceptTypeId);
                    toConceptType = conceptString;
                    concept.type = toConceptType;
                }
            }
        }
        //let mainString = concept?.type?.characterValue ?? ''
        if (!compositionList.includes(id)) {
            return concept === null || concept === void 0 ? void 0 : concept.characterValue;
        }
        else {
            if (visitedConcepts.includes(id)) {
                return "";
            }
            else {
                visitedConcepts.push(id);
            }
            // loop over all the connections
            for (let i = 0; i < connectionList.length; i++) {
                // if the connection has the id that has been passed in the recursion
                // oftheconceptId -----> toTheConceptId
                // this only gives the valid concept id that are inside of this id
                if (connectionList[i].ofTheConceptId == id) {
                    // then take out the toTheConceptId from the connection
                    const toConceptId = connectionList[i].toTheConceptId;
                    if (compositionList.includes(id)) {
                        // convert the toTheConceptId to a real Concept Object
                        let toConcept = getConceptFromList(conceptList, toConceptId);
                        // get the concept
                        if ((toConcept == null || toConcept.id == 0) &&
                            toConceptId != null &&
                            toConceptId != undefined) {
                            const conceptString = yield GetTheConcept(toConceptId);
                            toConcept = conceptString;
                        }
                        // if the toConcept is valid
                        if (toConcept.id != 0) {
                            if ((toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) == null) {
                                // get the type in casee type is not defined
                                const toConceptTypeId = toConcept.typeId;
                                let toConceptType = yield ConceptData_ConceptsData.GetConcept(toConceptTypeId);
                                toConcept.type = toConceptType;
                                if (toConceptType == null &&
                                    toConceptTypeId != null &&
                                    toConceptTypeId != undefined) {
                                    const conceptString = yield GetTheConcept(toConceptTypeId);
                                    toConceptType = conceptString;
                                    toConcept.type = toConceptType;
                                }
                            }
                        }
                        // the regex to filter out the the_ from the type concepts
                        const regex = 'the_';
                        // then create the key of the key value pair that is the type of the concept
                        const localmainString = (_b = (_a = toConcept === null || toConcept === void 0 ? void 0 : toConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : '';
                        // replace the the_ with an empty string
                        const localKey = localmainString.replace(regex, '');
                        // if the  type  is a number then put it inside of an object
                        if (isNaN(Number(localKey))) {
                            if (localKey) {
                                const result = yield recursiveFetchNew(toConceptId, connectionList, conceptList, compositionList, visitedConcepts);
                                output[localKey] = result;
                            }
                        }
                        else {
                            // if the type is a number then put it inside an array
                            const result = yield recursiveFetchNew(toConceptId, connectionList, conceptList, compositionList, visitedConcepts);
                            arroutput[localKey] = result;
                            output = arroutput;
                        }
                    }
                }
            }
        }
        return output;
    });
}
// gets the concept from the list of concepts using the conceptId
function getConceptFromList(conceptList, conceptId) {
    let concept = CreateDefaultConcept_CreateDefaultConcept();
    for (let i = 0; i < conceptList.length; i++) {
        if (conceptId == conceptList[i].id) {
            concept = conceptList[i];
            return concept;
        }
    }
    return concept;
}

;// CONCATENATED MODULE: ./src/Services/Mqtt/publishMessage.ts

function publishMessage(topic, message) {
    if (BaseUrl_BaseUrl.MQTT_CONNECTION) {
        BaseUrl_BaseUrl.MQTT_CONNECTION.publish(topic, message);
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/Composition/Composition.ts
var Composition_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Composition {
    constructor() {
        // we can build a composition using this class
        this.id = 0;
        this.mainConcept = CreateDefaultConcept_CreateDefaultConcept();
        this.connections = [];
        this.concepts = [];
        this.subcompositions = [];
        this.cached = {};
    }
    updateCache() {
        return Composition_awaiter(this, void 0, void 0, function* () {
            if (this.mainConcept.id == 0)
                for (let i = 0; i < this.concepts.length; i++) {
                    if (this.concepts[i].id == this.id) {
                        this.mainConcept = this.concepts[i];
                    }
                }
            let visitedConcepts = [];
            this.cached = yield recursiveFetchNew(this.id, this.connections, this.concepts, this.subcompositions, visitedConcepts);
        });
    }
    UpdateAcrossDistributedSystem() {
        var _a;
        try {
            if (this.id != 0) {
                publishMessage('compositionUpdate', (_a = this.id) === null || _a === void 0 ? void 0 : _a.toString());
            }
        }
        catch (ex) {
            console.log('Error while publishing message', ex);
        }
    }
    isUpdating() {
        this.UpdateAcrossDistributedSystem();
    }
    GetDataCache() {
        var _a, _b, _c;
        const returnOutput = {};
        const mainString = (_c = (_b = (_a = this.mainConcept) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.characterValue) !== null && _c !== void 0 ? _c : '';
        returnOutput[mainString] = this.cached;
        const FinalReturn = {};
        FinalReturn['data'] = returnOutput;
        FinalReturn['id'] = this.id;
        return FinalReturn;
    }
}

;// CONCATENATED MODULE: ./src/Services/Composition/CreateCompositionCache.ts
var CreateCompositionCache_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




// create a composition with caching mechanism
function CreateTheCompositionWithCache(json_1) {
    return CreateCompositionCache_awaiter(this, arguments, void 0, function* (json, ofTheConceptId = null, ofTheConceptUserId = null, mainKey = null, userId = null, accessId = null, sessionInformationId = null, composition = null) {
        const localUserId = userId !== null && userId !== void 0 ? userId : 999;
        const localAccessId = accessId !== null && accessId !== void 0 ? accessId : 4;
        const localSessionId = sessionInformationId !== null && sessionInformationId !== void 0 ? sessionInformationId : 999;
        let MainKeyLocal = mainKey !== null && mainKey !== void 0 ? mainKey : 0;
        let MainConcept = CreateDefaultConcept_CreateDefaultConcept();
        if (composition == null) {
            // if no composition is passed then create a new composition
            composition = new Composition();
        }
        for (const key in json) {
            if (typeof json[key] == 'object' || Array.isArray(json[key])) {
                const conceptString = yield MakeTheInstanceConcept(key, '', true, localUserId, localAccessId, localSessionId);
                const concept = conceptString;
                // if (typeof json[key] != 'string' && typeof json[key] != 'number') {
                if (ofTheConceptId == null && ofTheConceptUserId == null) {
                    // if there is no parent conceptId and conceptUserId passed then we know this is the main concept
                    // everything is related to this concept.
                    let localMainKey = MainKeyLocal;
                    MainConcept = concept;
                    localMainKey = concept.id;
                    MainKeyLocal = concept.id;
                    composition.concepts.push(concept);
                    composition.id = concept.id;
                    yield CreateTheCompositionWithCache(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId, composition);
                }
                else {
                    // this is the concept which has parent passed onto it and this is a subcomposition
                    const ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                    const ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 999;
                    const localMainKey = MainKeyLocal;
                    MainConcept = concept;
                    composition.concepts.push(concept);
                    const connectionString = yield createTheConnection(ofThe, ofTheUser, concept.id, localMainKey);
                    const connection = connectionString;
                    composition.connections.push(connection);
                    yield CreateTheCompositionWithCache(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId, composition);
                }
                if (json[key] != null && json[key] != undefined) {
                    composition.subcompositions.push(concept.id);
                }
            }
            else {
                // this is the part where the concept is now a key value pair and has the actual data
                const ofThe = ofTheConceptId !== null && ofTheConceptId !== void 0 ? ofTheConceptId : 999;
                const ofTheUser = ofTheConceptUserId !== null && ofTheConceptUserId !== void 0 ? ofTheConceptUserId : 999;
                const localMainKey = MainKeyLocal;
                const conceptString = yield MakeTheInstanceConcept(key, json[key], false, localUserId, localAccessId, localSessionId);
                const concept = conceptString;
                composition.concepts.push(concept);
                const connectionString = yield createTheConnection(ofThe, ofTheUser, concept.id, localMainKey);
                const connection = connectionString;
                composition.connections.push(connection);
            }
        }
        // return the main concept
        return MainConcept;
    });
}

;// CONCATENATED MODULE: ./src/Services/UpdateComposition.ts
var UpdateComposition_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













// function to update the cache composition
function UpdateComposition(patcherStructure) {
    return UpdateComposition_awaiter(this, void 0, void 0, function* () {
        // get all the default userId, sessionId, accessId passed by the patcherStructure
        const userId = patcherStructure.userId;
        const sessionId = patcherStructure.sessionId;
        const accessId = patcherStructure.accessId;
        let connectionList = [];
        const conceptList = [];
        let composition = CreateDefaultConcept_CreateDefaultConcept();
        let parentConcept = CreateDefaultConcept_CreateDefaultConcept();
        const toDeleteConcepts = [];
        // the main composition Id that has the data that needs to be patched
        let compositionId = patcherStructure.compositionId;
        // if you want to edit the subcompositions of the composition then you have to pass to this
        const ofTheConceptId = patcherStructure.ofTheCompositionId;
        let toDeleteConnections = [];
        if (compositionId < 0) {
            let localConcept = yield GetTheConcept(compositionId, userId);
            if (localConcept.id > 0) {
                compositionId = localConcept.id;
            }
            else {
                return null;
            }
        }
        // get all connections from the backend because it needs latest data
        const connectionListString = yield GetAllConnectionsOfComposition(compositionId);
        connectionList = connectionListString;
        const conceptIdList = [];
        const compositionCache = new Composition();
        const compositionList = [];
        compositionCache.id = compositionId;
        // put this in the upper section before updating because this will tell all other distributed
        //servers to destroy the copy of the composition that they have as new composition is coming up
        compositionCache.isUpdating();
        // get all the connections that are inside of the composition and store them in
        let allConcepts = [];
        for (let i = 0; i < connectionList.length; i++) {
            InsertUniqueNumber(compositionList, connectionList[i].ofTheConceptId);
            InsertUniqueNumber(conceptIdList, connectionList[i].ofTheConceptId);
            InsertUniqueNumber(conceptIdList, connectionList[i].toTheConceptId);
            allConcepts.push(connectionList[i].ofTheConceptId);
        }
        compositionCache.subcompositions = compositionList;
        compositionCache.connections = connectionList;
        // get all the concepts that are inside of the composition and store them in a conceptList
        for (let i = 0; i < conceptIdList.length; i++) {
            const conceptString = yield GetTheConcept(conceptIdList[i]);
            const concept = conceptString;
            if (compositionId == conceptIdList[i]) {
                composition = concept;
            }
            if (ofTheConceptId == conceptIdList[i]) {
                parentConcept = concept;
            }
            conceptList.push(concept);
        }
        // now trying to patch the new object into the composition
        const object = patcherStructure.patchObject;
        for (const key in object) {
            let insertingConcept = CreateDefaultConcept_CreateDefaultConcept();
            const value = object[key];
            let localConcept = composition;
            // if the immedidate parent exists in the composition (i.e. for multilevel composition)
            if (parentConcept.id > 0) {
                localConcept = parentConcept;
            }
            if (Array.isArray(value) || typeof value == 'object') {
                insertingConcept = yield MakeTheInstanceConcept(key, "", true, composition.userId, 4, 999);
                compositionCache.subcompositions.push(insertingConcept.id);
                // check if the concept exists in the concept list because if it exists then we have to delete old connection
                const ExistingConcepts = CheckIfTypeConceptsExistsInArray(conceptList, insertingConcept);
                // if the existing concept then start the process for deleting the concept in the list
                for (let i = 0; i < ExistingConcepts.length; i++) {
                    if (ExistingConcepts[i].id > 0) {
                        const deletingConnections = CheckAllConnectionsConnectedInConnectionArray(compositionCache.connections, ExistingConcepts[i].id);
                        toDeleteConnections = toDeleteConnections.concat(deletingConnections);
                        toDeleteConcepts.push(ExistingConcepts[i]);
                    }
                }
                yield CreateTheCompositionWithCache(object[key], insertingConcept.id, insertingConcept.userId, composition.id, composition.userId, 4, 999, compositionCache);
            }
            else {
                // make the new concept in the object
                insertingConcept = yield MakeTheInstanceConcept(key, value, false, userId, accessId, sessionId);
                // check if the concept exists in the concept list because if it exists then we have to delete old connection
                const ExistingConcepts = CheckIfTypeConceptsExistsInArray(conceptList, insertingConcept);
                // if the existing concept then start the process for deleting the concept in the list
                for (let i = 0; i < ExistingConcepts.length; i++) {
                    if (ExistingConcepts[i].id > 0) {
                        const deletingConnections = CheckAllConnectionsConnectedInConnectionArray(compositionCache.connections, ExistingConcepts[i].id);
                        toDeleteConnections = toDeleteConnections.concat(deletingConnections);
                        toDeleteConcepts.push(ExistingConcepts[i]);
                    }
                }
            }
            // create the connection between the new concept and the old composition
            const connectionString = createTheConnection(localConcept.id, localConcept.userId, insertingConcept.id, composition.id);
            const connection = connectionString;
            conceptList.push(insertingConcept);
            compositionCache.connections.push(connection);
        }
        // now you have to delete the connection in bulk
        for (let j = 0; j < toDeleteConnections.length; j++) {
            // remove from the cache list
            RemoveConnectionFromList(compositionCache.connections, toDeleteConnections[j]);
            // delete the connection in the backend
            DeleteConnectionById(toDeleteConnections[j].id);
        }
        // also delete the existing concept from the cache.
        for (let k = 0; k < toDeleteConcepts.length; k++) {
            // remove concept from the cache concept list
            RemoveConceptFromList(conceptList, toDeleteConcepts[k]);
        }
        // now create a composition cache object to cache it into node server
        compositionCache.concepts = compositionCache.concepts.concat(conceptList);
        compositionCache.mainConcept = composition;
        compositionCache.id = composition.id;
        // // create a cache
        yield compositionCache.updateCache();
        // update it the binary tree
        CompositionBinaryTree.addCompositionToTree(compositionCache);
        SyncData.SyncDataOnline();
        let x = compositionCache.GetDataCache();
        return x;
    });
}

;// CONCATENATED MODULE: ./src/Api/Search/Search.ts
var Search_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function SearchAllConcepts(type_1, search_1, composition_1, token_1) {
    return Search_awaiter(this, arguments, void 0, function* (type, search, composition, token, inpage = 10, page = 1) {
        var header = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded', token);
        var urlencoded = new URLSearchParams();
        urlencoded.append("type", type);
        urlencoded.append("search", search);
        urlencoded.append("composition", composition);
        urlencoded.append("inpage", inpage.toString());
        urlencoded.append("page", page.toString());
        const queryUrl = BaseUrl_BaseUrl.SearchCompositionsUrl() + "?" + urlencoded.toString();
        try {
            const response = yield fetch(queryUrl, {
                method: 'GET',
                headers: header
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                ErrorPosting_HandleHttpError(response);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching error", ex);
            HandleInternalError(ex, queryUrl);
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/Search/SearchWithLinker.ts
var SearchWithLinker_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function SearchWithLinker(searchQuery_1) {
    return SearchWithLinker_awaiter(this, arguments, void 0, function* (searchQuery, token = "") {
        var header = GetRequestHeaderWithAuthorization("application/json", token);
        const queryUrl = BaseUrl_BaseUrl.SearchLinkMultipleAll();
        const body = JSON.stringify(searchQuery);
        try {
            const response = yield fetch(queryUrl, {
                method: 'POST',
                headers: header,
                body: body
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                console.log("This is the searching error", response.status);
                ErrorPosting_HandleHttpError(response);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching error", ex);
            HandleInternalError(ex, queryUrl);
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/Composition/CompositionCache.ts
var CompositionCache_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









// get the composition with the passed id
// here an optional parameter is passed which will pass the internal connections if given
// else the function is designed to get the internal connections itself
function GetCompositionWithCache(id_1) {
    return CompositionCache_awaiter(this, arguments, void 0, function* (id, connectionListPassed = []) {
        var _a, _b;
        let connectionList = [];
        const conceptIdList = [];
        let returnOutput = {};
        let output = {};
        const x = yield CompositionBinaryTree.getNodeFromTree(id);
        const compositionList = [];
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            const conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        if (x == null) {
            let connectionListString = [];
            if (connectionListPassed.length > 0) {
                connectionListString = getMyConnections(id, connectionListPassed);
            }
            else {
                connectionListString = yield GetAllConnectionsOfComposition(id);
            }
            connectionList = connectionListString;
            //connectionList = ConnectionData.GetConnectionsOfComposition(id);
            for (let i = 0; i < connectionList.length; i++) {
                if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                    compositionList.push(connectionList[i].ofTheConceptId);
                    conceptIdList.push(connectionList[i].ofTheConceptId);
                }
                if (!conceptIdList.includes(connectionList[i].toTheConceptId)) {
                    conceptIdList.push(connectionList[i].toTheConceptId);
                }
            }
            SaveToCompositionCache(concept, connectionList, conceptIdList, compositionList);
            let visitedConcepts = [];
            output = yield recursiveFetch(id, connectionList, compositionList, visitedConcepts);
            const mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : '';
            returnOutput[mainString] = output;
        }
        else {
            output = x.value.GetDataCache();
            returnOutput = output;
        }
        if (concept.id == 0) {
            return '';
        }
        return returnOutput;
    });
}
// this gets the list of connections of a composition from a list of bulk connection pull
function getMyConnections(id, connectionList) {
    const connections = [];
    for (let i = 0; i < connectionList.length; i++) {
        if (connectionList[i].typeId == id) {
            connections.push(connectionList[i]);
        }
    }
    return connections;
}
// get the composition with the passed id
// here an optional parameter is passed which will pass the internal connections if given
// else the function is designed to get the internal connections itself
// this function has a  format of data -- id
function GetCompositionWithDataIdWithCache(id_1) {
    return CompositionCache_awaiter(this, arguments, void 0, function* (id, connectionListPassed = []) {
        var _a, _b;
        let FinalReturn = {};
        let connectionList = [];
        const conceptIdList = [];
        let output;
        const returnOutput = {};
        const x = yield CompositionBinaryTree.getNodeFromTree(id);
        const compositionList = [];
        let concept = yield ConceptData_ConceptsData.GetConcept(id);
        if (concept.id == 0 && id != null && id != undefined) {
            const conceptString = yield GetConcept_GetConcept(id);
            concept = conceptString;
        }
        if (x == null) {
            let connectionListString = [];
            if (connectionListPassed.length > 0) {
                connectionListString = getMyConnections(id, connectionListPassed);
            }
            else {
                connectionListString = yield GetAllConnectionsOfComposition(id);
            }
            connectionList = connectionListString;
            //connectionList = ConnectionData.GetConnectionsOfComposition(id);
            for (let i = 0; i < connectionList.length; i++) {
                if (!compositionList.includes(connectionList[i].ofTheConceptId)) {
                    compositionList.push(connectionList[i].ofTheConceptId);
                    conceptIdList.push(connectionList[i].ofTheConceptId);
                }
                if (!conceptIdList.includes(connectionList[i].toTheConceptId)) {
                    conceptIdList.push(connectionList[i].toTheConceptId);
                }
            }
            SaveToCompositionCache(concept, connectionList, conceptIdList, compositionList);
            output = yield recursiveFetch(id, connectionList, compositionList);
            const mainString = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : '';
            returnOutput[mainString] = output;
            FinalReturn["created_at"] = concept.entryTimeStamp;
            FinalReturn['data'] = returnOutput;
            FinalReturn['id'] = id;
        }
        else {
            output = x.value.GetDataCache();
            FinalReturn = output;
        }
        if (concept.id == 0) {
            return '';
        }
        return FinalReturn;
    });
}
// this function needs to be passed with bulk compositions and bulk internal connections of them
// so that i can conver them to actual list of compositions
function GetCompositionWithDataIdBulk(ids, connections) {
    return CompositionCache_awaiter(this, void 0, void 0, function* () {
        let connectionList = [];
        const compositions = [];
        const newConnections = yield GetConnectionBulk(connections);
        connectionList = newConnections;
        for (let i = 0; i < ids.length; i++) {
            const output = yield GetCompositionWithDataIdWithCache(ids[i], connectionList);
            if (output) {
                compositions.push(output);
            }
        }
        return compositions;
    });
}
function SaveToCompositionCache(concept, connections, conceptIdList, numbers) {
    return CompositionCache_awaiter(this, void 0, void 0, function* () {
        const composition = new Composition();
        const concepts = yield BulkConceptGetter(conceptIdList);
        composition.connections = connections;
        composition.concepts = concepts;
        composition.id = concept.id;
        composition.subcompositions = numbers;
        composition.mainConcept = concept;
        let visitedConcepts = [];
        const output = yield recursiveFetchNew(concept.id, connections, concepts, numbers, visitedConcepts);
        composition.cached = output;
        CompositionBinaryTree.addCompositionToTree(composition);
    });
}
function BulkConceptGetter(conceptIds) {
    return CompositionCache_awaiter(this, void 0, void 0, function* () {
        let conceptList = [];
        const bulkConceptFetch = [];
        for (let i = 0; i < (conceptIds === null || conceptIds === void 0 ? void 0 : conceptIds.length); i++) {
            const conceptUse = yield ConceptData_ConceptsData.GetConcept(conceptIds[i]);
            if (conceptUse.id == 0) {
                bulkConceptFetch.push(conceptIds[i]);
            }
            else {
                conceptList.push(conceptUse);
            }
        }
        if ((bulkConceptFetch === null || bulkConceptFetch === void 0 ? void 0 : bulkConceptFetch.length) == 0) {
            return conceptList;
        }
        else {
            conceptList = yield BulkConceptGetterApi(bulkConceptFetch);
        }
        return conceptList;
    });
}

;// CONCATENATED MODULE: ./src/Api/Session/CreateSession.ts
var CreateSession_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateSession(sessionData) {
    return CreateSession_awaiter(this, void 0, void 0, function* () {
        try {
            var header = GetRequestHeader_GetRequestHeader();
            const body = JSON.stringify(sessionData);
            const response = yield fetch(BaseUrl_BaseUrl.CreateSessionId(), {
                method: 'POST',
                headers: header,
                body: body
            });
            if (response.ok) {
                return response.json();
            }
            else {
                console.log("Creating session failed", yield response.json());
                ErrorPosting_HandleHttpError(response);
                return null;
            }
        }
        catch (ex) {
            console.log("Creating session failed", ex);
            HandleInternalError(ex, BaseUrl_BaseUrl.CreateSessionId());
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/Session/CreateSessionVisit.ts
var CreateSessionVisit_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function CreateSessionVisit(sessionId, url) {
    return CreateSessionVisit_awaiter(this, void 0, void 0, function* () {
        try {
            var header = GetRequestHeader_GetRequestHeader("application/x-www-form-urlencoded");
            const urlencoded = new URLSearchParams();
            urlencoded.append("sessionId", sessionId.toString());
            urlencoded.append("url", url);
            const response = yield fetch(BaseUrl_BaseUrl.CreateSessionVisitUrl(), {
                method: 'POST',
                headers: header,
                body: urlencoded
            });
            if (response.ok) {
                return response.json();
            }
            else {
                console.log("Creating session url failed", yield response.json());
                ErrorPosting_HandleHttpError(response);
                return null;
            }
        }
        catch (ex) {
            console.log("Creating session url failed", ex);
            HandleInternalError(ex, BaseUrl_BaseUrl.CreateSessionVisitUrl());
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/GetRelation.ts
var GetRelation_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetRelation(id_1, relation_1) {
    return GetRelation_awaiter(this, arguments, void 0, function* (id, relation, inpage = 10, page = 1) {
        let output = [];
        let concept = yield GetTheConcept(id);
        let relatedConceptString = yield GetConceptByCharacterAndCategory(relation);
        let relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            let connectionsString = yield GetConnectionOfTheConcept(relatedConcept.id, concept.id, concept.userId, inpage, page);
            let connections = connectionsString;
            let prefetch = [];
            for (let i = 0; i < connections.length; i++) {
                prefetch.push(connections[i].toTheConceptId);
            }
            yield GetAllConnectionsOfCompositionBulk(prefetch);
            for (let i = 0; i < connections.length; i++) {
                let toConceptId = connections[i].toTheConceptId;
                let toConcept = yield GetTheConcept(toConceptId);
                let newComposition = yield GetCompositionWithIdAndDateFromMemory(toConcept.id);
                output.push(newComposition);
            }
        }
        return output;
    });
}
function GetRelationRaw(id_1, relation_1) {
    return GetRelation_awaiter(this, arguments, void 0, function* (id, relation, inpage = 10, page = 1) {
        let output = [];
        let concept = yield GetTheConcept(id);
        let relatedConceptString = yield GetConceptByCharacterAndCategory(relation);
        let relatedConcept = relatedConceptString;
        if (relatedConcept.id > 0) {
            let connectionsString = yield GetConnectionOfTheConcept(relatedConcept.id, concept.id, concept.userId, inpage, page);
            let connections = connectionsString;
            let prefetch = [];
            for (let i = 0; i < connections.length; i++) {
                prefetch.push(connections[i].toTheConceptId);
            }
            for (let i = 0; i < connections.length; i++) {
                let toConceptId = connections[i].toTheConceptId;
                let toConcept = yield GetTheConcept(toConceptId);
                output.push(toConcept);
            }
        }
        return output;
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/User/UserNode.ts
class UserNode {
    constructor(key, value, leftNode, rightNode) {
        this.value = [];
        this.height = 1;
        this.key = key;
        this.value.push(value);
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }
    addNode(passedNode, node, height) {
        if (node == null) {
            node = passedNode;
            return node;
        }
        var LeftNode = node.leftNode;
        var RightNode = node.rightNode;
        if (node.key > passedNode.key) {
            node.leftNode = this.addNode(passedNode, LeftNode, height);
        }
        else if (node.key < passedNode.key) {
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        else {
            node.value.push(...passedNode.value);
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if (balancingFactor > 1) {
            if (node.leftNode) {
                if (passedNode.key < node.leftNode.key) {
                    return this.rightRotate(node);
                }
                else if (passedNode.key > node.leftNode.key) {
                    node.leftNode = this.leftRotate(node.leftNode);
                    return this.rightRotate(node);
                }
            }
        }
        if (balancingFactor < -1) {
            if (node.rightNode) {
                if (passedNode.key > node.rightNode.key) {
                    return this.leftRotate(node);
                }
                else if (passedNode.key < node.rightNode.key) {
                    node.rightNode = this.rightRotate(node.rightNode);
                    return this.leftRotate(node);
                }
            }
        }
        return node;
    }
    rightRotate(y) {
        if (y) {
            let x = y.leftNode;
            if (x) {
                let T2 = x.rightNode;
                y.leftNode = T2;
                x.rightNode = y;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
            // return x;
        }
        return y;
    }
    leftRotate(x) {
        if (x) {
            let y = x.rightNode;
            if (y) {
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
                return y;
            }
            //return y;
        }
        return x;
    }
    getHeight(node) {
        if (node) {
            return node.height;
        }
        return 0;
    }
    getBalanceFactor(N) {
        if (N == null) {
            return 0;
        }
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
    }
    getFromNode(id, node) {
        if (node) {
            if (id == node.key) {
                return node;
            }
            else if (id < node.key) {
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > node.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;
    }
    removeNode(passedNode, id) {
        if (passedNode == null) {
            return passedNode;
        }
        if (passedNode.key > id) {
            passedNode.leftNode = this.removeNode(passedNode.leftNode, id);
            return passedNode;
        }
        else if (passedNode.key < id) {
            passedNode.rightNode = this.removeNode(passedNode.rightNode, id);
            return passedNode;
        }
        if (passedNode.leftNode == null) {
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if (passedNode.rightNode == null) {
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else {
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.rightNode = this.removeNode(passedNode.rightNode, immediateSuccessor.key);
            return passedNode;
        }
    }
    countNodeBelow(root) {
        if (root == null) {
            return 0;
        }
        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return 1 + this.countNodeBelow(root.leftNode) + this.countNodeBelow(root.rightNode);
    }
    inOrderSuccessor(root) {
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/User/UserBinaryTree.ts
var UserBinaryTree_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class UserBinaryTree {
    static compositeKey(userId, sessionId) {
        let userHex = ('0000' + userId.toString(16).toUpperCase()).slice(-4);
        let sessionHex = ('0000' + sessionId.toString(16).toUpperCase()).slice(-4);
        return userHex + sessionHex;
    }
    static addNodeToTree(node) {
        if (this.root == null) {
            this.root = node;
            return this.root;
        }
        else {
            this.root = this.root.addNode(node, this.root, this.root.height);
        }
    }
    static waitForDataToLoad() {
        return UserBinaryTree_awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.checkFlag(resolve);
                setTimeout(() => {
                    reject("not");
                }, 25000);
            });
        });
    }
    static checkFlag(resolve) {
        if (IdentifierFlags.isDataLoaded) {
            return resolve("done");
        }
        else {
            setTimeout(UserBinaryTree.checkFlag, 1000, resolve);
        }
    }
    ;
    static addConceptToTree(concept, userId, sessionId = 999) {
        let key = this.compositeKey(userId, sessionId);
        var node = new UserNode(key, concept, null, null);
        this.addNodeToTree(node);
    }
    static getNodeFromTree(userId, sessionId) {
        return UserBinaryTree_awaiter(this, void 0, void 0, function* () {
            try {
                var data = yield this.waitForDataToLoad();
            }
            catch (exception) {
                return null;
            }
            let key = this.compositeKey(userId, sessionId);
            if (this.root) {
                var Node = this.root.getFromNode(key, this.root);
                return Node;
            }
            return null;
        });
    }
    static removeNodeFromTree(userId_1) {
        return UserBinaryTree_awaiter(this, arguments, void 0, function* (userId, sessionId = 999) {
            if (this.root) {
                let key = this.compositeKey(userId, sessionId);
                this.root = this.root.removeNode(this.root, key);
            }
        });
    }
    static countNumberOfNodes() {
        if (this.root) {
            return this.root.countNodeBelow(this.root);
        }
        return 0;
    }
}
UserBinaryTree.root = null;

;// CONCATENATED MODULE: ./src/Services/User/UserTranslation.ts
var UserTranslation_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetUserGhostId(userId_1, ghostId_1) {
    return UserTranslation_awaiter(this, arguments, void 0, function* (userId, ghostId, sessionId = 999) {
        let userNode = yield UserBinaryTree.getNodeFromTree(userId, sessionId);
        console.log("this is the ghost id", userId, sessionId);
        let realConcept = CreateDefaultLConcept_CreateDefaultLConcept();
        if (userNode) {
            for (let i = 0; i < userNode.value.length; i++) {
                let testConcept = userNode.value[i];
                if (testConcept.ghostId == ghostId) {
                    realConcept = testConcept;
                }
            }
        }
        return realConcept;
    });
}
function AddGhostConcept(concept_1, userId_1) {
    return UserTranslation_awaiter(this, arguments, void 0, function* (concept, userId, sessionId = 999) {
        UserBinaryTree.addConceptToTree(concept, userId, sessionId);
    });
}

;// CONCATENATED MODULE: ./src/Constants/FormatConstants.ts
const NORMAL = 1;
const DATAID = 2;
const JUSTDATA = 3;
const DATAIDDATE = 4;
const RAW = 5;
const ALLID = 6;
const LISTNORMAL = 7;

;// CONCATENATED MODULE: ./src/Services/Search/FormatData.ts
var FormatData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * ######### Format is normal ######### used for listing. This only provides type connections.
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
function FormatConceptsAndConnectionsNormalList(connections_1, compositionData_1, mainComposition_1, newCompositionData_1) {
    return FormatData_awaiter(this, arguments, void 0, function* (connections, compositionData, mainComposition, newCompositionData, reverse = []) {
        var _a, _b, _c, _d;
        let mainData = [];
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            let ofTheConcept = yield GetTheConcept(connections[i].ofTheConceptId);
            let toTheConcept = yield GetTheConcept(connections[i].toTheConceptId);
            if (reverseFlag == true) {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    if (toTheConcept.id in compositionData) {
                        let newData;
                        let key = (_b = (_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "self";
                        if (connections[i].toTheConceptId in compositionData) {
                            newData = compositionData[connections[i].toTheConceptId];
                        }
                        else {
                            newData = {};
                            newData[key] = {};
                            compositionData[connections[i].toTheConceptId] = newData;
                        }
                        let linkerConcept = yield GetTheConcept(connections[i].typeId);
                        try {
                            let reverseCharater = linkerConcept.characterValue + "_reverse";
                            let data = compositionData[connections[i].ofTheConceptId];
                            if (data) {
                                if (Array.isArray(newData[key][reverseCharater])) {
                                    newData[key][reverseCharater].push(data);
                                }
                                else {
                                    if (linkerConcept.characterValue.includes("_s_")) {
                                        newData[key][reverseCharater] = [];
                                        newData[key][reverseCharater].push(data);
                                    }
                                    else {
                                        newData[key][reverseCharater] = data;
                                    }
                                }
                            }
                        }
                        catch (ex) {
                            console.log("this is error", ex);
                        }
                    }
                }
            }
            else {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    if (ofTheConcept.id in compositionData) {
                        let newData;
                        let key = (_d = (_c = ofTheConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "self";
                        if (connections[i].ofTheConceptId in compositionData) {
                            newData = compositionData[connections[i].ofTheConceptId];
                        }
                        else {
                            newData = {};
                            newData[key] = {};
                            compositionData[connections[i].ofTheConceptId] = newData;
                        }
                        let linkerConcept = yield GetTheConcept(connections[i].typeId);
                        try {
                            let data = compositionData[connections[i].toTheConceptId];
                            if (data) {
                                if (Array.isArray(newData[key][linkerConcept.characterValue])) {
                                    newData[key][linkerConcept.characterValue].push(data);
                                }
                                else {
                                    if (linkerConcept.characterValue.includes("_s_")) {
                                        newData[key][linkerConcept.characterValue] = [];
                                        newData[key][linkerConcept.characterValue].push(data);
                                    }
                                    else {
                                        newData[key][linkerConcept.characterValue] = data;
                                    }
                                }
                            }
                        }
                        catch (ex) {
                            console.log("this is error", ex);
                        }
                    }
                }
            }
        }
        for (let i = 0; i < mainComposition.length; i++) {
            let mymainData = compositionData[mainComposition[i]];
            mymainData["id"] = mainComposition[i];
            mainData.push(mymainData);
        }
        return mainData;
    });
}
/**
 * ############ Format is data-id and is used for list. ############
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
function FormatFromConnectionsAlteredArrayExternal(connections_1, compositionData_1, newCompositionData_1, mainComposition_1) {
    return FormatData_awaiter(this, arguments, void 0, function* (connections, compositionData, newCompositionData, mainComposition, reverse = []) {
        var _a, _b, _c, _d;
        let startTime = new Date().getTime();
        let mainData = [];
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            let ofTheConcept = yield GetTheConcept(connections[i].ofTheConceptId);
            let toTheConcept = yield GetTheConcept(connections[i].toTheConceptId);
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            if (reverseFlag == true) {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    if (toTheConcept.id in compositionData) {
                        let newData;
                        let linkerConcept = yield GetTheConcept(connections[i].typeId);
                        let key = (_b = (_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "self";
                        let flag = false;
                        if (connections[i].toTheConceptId in compositionData) {
                            flag = true;
                        }
                        if (connections[i].toTheConceptId in compositionData) {
                            newData = compositionData[connections[i].toTheConceptId];
                        }
                        else {
                            newData = {};
                            newData[key] = {};
                            compositionData[connections[i].toTheConceptId] = newData;
                        }
                        try {
                            let isComp = compositionData[connections[i].ofTheConceptId];
                            if (isComp) {
                                let data = {
                                    "id": ofTheConcept.id,
                                    "data": compositionData[connections[i].ofTheConceptId]
                                };
                                let reverseCharater = linkerConcept.characterValue + "_reverse";
                                if (Array.isArray(newData[key][reverseCharater])) {
                                    newData[key][reverseCharater].push(data);
                                }
                                else {
                                    if (reverseCharater.includes("_s_")) {
                                        newData[key][reverseCharater] = [];
                                        newData[key][reverseCharater].push(data);
                                    }
                                    else {
                                        newData[key][reverseCharater] = data;
                                    }
                                }
                            }
                        }
                        catch (ex) {
                            console.log("this is error", ex);
                        }
                    }
                }
            }
            else {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    if (ofTheConcept.id in compositionData) {
                        let newData;
                        let linkerConcept = yield GetTheConcept(connections[i].typeId);
                        let key = (_d = (_c = ofTheConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "self";
                        let flag = false;
                        if (connections[i].toTheConceptId in compositionData) {
                            flag = true;
                        }
                        if (connections[i].ofTheConceptId in compositionData) {
                            newData = compositionData[connections[i].ofTheConceptId];
                        }
                        else {
                            newData = {};
                            newData[key] = {};
                            compositionData[connections[i].ofTheConceptId] = newData;
                        }
                        try {
                            let isComp = compositionData[connections[i].toTheConceptId];
                            if (isComp) {
                                let data = {
                                    "id": toTheConcept.id,
                                    "data": compositionData[connections[i].toTheConceptId]
                                };
                                if (Array.isArray(newData[key][linkerConcept.characterValue])) {
                                    newData[key][linkerConcept.characterValue].push(data);
                                }
                                else {
                                    if (linkerConcept.characterValue.includes("_s_")) {
                                        newData[key][linkerConcept.characterValue] = [];
                                        newData[key][linkerConcept.characterValue].push(data);
                                    }
                                    else {
                                        newData[key][linkerConcept.characterValue] = data;
                                    }
                                }
                            }
                        }
                        catch (ex) {
                            console.log("this is error", ex);
                        }
                    }
                }
            }
        }
        console.log("these are the main datas", compositionData);
        for (let i = 0; i < mainComposition.length; i++) {
            let mymainData = {};
            mymainData["id"] = mainComposition[i];
            mymainData["data"] = compositionData[mainComposition[i]];
            mainData.push(mymainData);
        }
        return mainData;
    });
}
/**
 *
 * ## Format Normal ##
 * This function takes in the connections and then converts the connections to the single level objects for further processing
 * This function is the builder of the arrays/ objects from the connections.
 */
function formatFunction(connections, compositionData, reverse) {
    return FormatData_awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            let ofTheConcept = yield GetTheConcept(connections[i].ofTheConceptId);
            let toTheConcept = yield GetTheConcept(connections[i].toTheConceptId);
            if (reverseFlag == true) {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    let newData;
                    let key = (_b = (_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "self";
                    if (connections[i].toTheConceptId in compositionData) {
                        newData = compositionData[connections[i].toTheConceptId];
                    }
                    else {
                        newData = {};
                        newData[key] = {};
                        compositionData[connections[i].toTheConceptId] = newData;
                    }
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    try {
                        let mytype = (_d = (_c = ofTheConcept === null || ofTheConcept === void 0 ? void 0 : ofTheConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "none";
                        let value = ofTheConcept.characterValue;
                        let data = {
                            [mytype]: value
                        };
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (linkerConcept.characterValue.includes("_s_")) {
                            if (!(ofTheConcept.id in compositionData)) {
                                compositionData[ofTheConcept.id] = {};
                            }
                            compositionData[ofTheConcept.id][mytype] = value;
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    let newData;
                    let key = (_f = (_e = ofTheConcept.type) === null || _e === void 0 ? void 0 : _e.characterValue) !== null && _f !== void 0 ? _f : "self";
                    if (connections[i].ofTheConceptId in compositionData) {
                        newData = compositionData[connections[i].ofTheConceptId];
                    }
                    else {
                        newData = {};
                        newData[key] = {};
                        compositionData[connections[i].ofTheConceptId] = newData;
                    }
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    try {
                        let mytype = (_h = (_g = toTheConcept === null || toTheConcept === void 0 ? void 0 : toTheConcept.type) === null || _g === void 0 ? void 0 : _g.characterValue) !== null && _h !== void 0 ? _h : "none";
                        let value = toTheConcept.characterValue;
                        let data = {
                            [mytype]: value
                        };
                        if (linkerConcept.characterValue.includes("_s_")) {
                            if (!(toTheConcept.id in compositionData)) {
                                compositionData[toTheConcept.id] = {};
                            }
                            compositionData[toTheConcept.id][mytype] = value;
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        return compositionData;
    });
}
/**
*
* ## Format Normal ##
* This function takes in the connections and then converts the connections to the single level objects for further processing
* This function is the builder of the arrays/ objects from the connections.
*/
function formatFunctionForData(connections, compositionData, reverse) {
    return FormatData_awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            let ofTheConcept = yield GetTheConcept(connections[i].ofTheConceptId);
            let toTheConcept = yield GetTheConcept(connections[i].toTheConceptId);
            if (reverseFlag == true) {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    let newData;
                    let key = (_b = (_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "self";
                    if (connections[i].toTheConceptId in compositionData) {
                        newData = compositionData[connections[i].toTheConceptId];
                        if (!(key in newData)) {
                            newData[key] = {};
                        }
                    }
                    else {
                        newData = {};
                        newData[key] = {};
                        compositionData[connections[i].toTheConceptId] = newData;
                    }
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    try {
                        let mytype = (_d = (_c = ofTheConcept === null || ofTheConcept === void 0 ? void 0 : ofTheConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "none";
                        let value = ofTheConcept.characterValue;
                        let data = {
                            [mytype]: value
                        };
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (linkerConcept.characterValue.includes("_s_")) {
                            // newData[key][reverseCharater] = [];
                            // newData[key][reverseCharater].push(data);
                        }
                        else {
                            if (typeof newData[key] == "string") {
                                newData[key] = {};
                            }
                            newData[key][reverseCharater] = data;
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    let newData;
                    let key = (_f = (_e = ofTheConcept.type) === null || _e === void 0 ? void 0 : _e.characterValue) !== null && _f !== void 0 ? _f : "self";
                    if (connections[i].ofTheConceptId in compositionData) {
                        newData = compositionData[connections[i].ofTheConceptId];
                        if (!(key in newData)) {
                            newData[key] = {};
                        }
                    }
                    else {
                        newData = {};
                        newData[key] = {};
                        compositionData[connections[i].ofTheConceptId] = newData;
                    }
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    try {
                        let mytype = (_h = (_g = toTheConcept === null || toTheConcept === void 0 ? void 0 : toTheConcept.type) === null || _g === void 0 ? void 0 : _g.characterValue) !== null && _h !== void 0 ? _h : "none";
                        let value = toTheConcept.characterValue;
                        let data = {
                            [mytype]: value
                        };
                        if (linkerConcept.characterValue.includes("_s_")) {
                            //   newData[key][linkerConcept.characterValue] = [];
                            // newData[key][linkerConcept.characterValue].push(data);
                        }
                        else {
                            if (typeof newData[key] == "string") {
                                newData[key] = {};
                            }
                            newData[key][linkerConcept.characterValue] = data;
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        return compositionData;
    });
}
/**
 * ## Format DATA-ID ##
 * this function takes in connections and creates a single level objects so that all the data are added to its object/ array.
 * This is then passed on further for stiching.
 * @param connections
 * @param compositionData
 * @param reverse
 * @returns
 */
function FormatFunctionData(connections_1, compositionData_1) {
    return FormatData_awaiter(this, arguments, void 0, function* (connections, compositionData, reverse = []) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            let ofTheConcept = yield GetTheConcept(connections[i].ofTheConceptId);
            let toTheConcept = yield GetTheConcept(connections[i].toTheConceptId);
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            if (reverseFlag == true) {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    let newData;
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let key = (_b = (_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "self";
                    if (connections[i].toTheConceptId in compositionData) {
                        newData = compositionData[connections[i].toTheConceptId];
                    }
                    else {
                        newData = {};
                        newData[key] = {};
                        compositionData[connections[i].toTheConceptId] = newData;
                    }
                    try {
                        let mytype = (_d = (_c = ofTheConcept === null || ofTheConcept === void 0 ? void 0 : ofTheConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "none";
                        let value = ofTheConcept.characterValue;
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (reverseCharater.includes("_s_")) {
                            if (!(ofTheConcept.id in compositionData)) {
                                compositionData[ofTheConcept.id] = {};
                            }
                            compositionData[ofTheConcept.id][mytype] = value;
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    let newData;
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let key = (_f = (_e = ofTheConcept.type) === null || _e === void 0 ? void 0 : _e.characterValue) !== null && _f !== void 0 ? _f : "self";
                    if (connections[i].ofTheConceptId in compositionData) {
                        newData = compositionData[connections[i].ofTheConceptId];
                    }
                    else {
                        newData = {};
                        newData[key] = {};
                        compositionData[connections[i].ofTheConceptId] = newData;
                    }
                    try {
                        let mytype = (_h = (_g = toTheConcept === null || toTheConcept === void 0 ? void 0 : toTheConcept.type) === null || _g === void 0 ? void 0 : _g.characterValue) !== null && _h !== void 0 ? _h : "none";
                        let value = toTheConcept.characterValue;
                        if (linkerConcept.characterValue.includes("_s_")) {
                            if (!(toTheConcept.id in compositionData)) {
                                compositionData[toTheConcept.id] = {};
                            }
                            compositionData[toTheConcept.id][mytype] = value;
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        return compositionData;
    });
}
/**
* ## Format DATA-ID ##
* this function takes in connections and creates a single level objects so that all the data are added to its object/ array.
* This is then passed on further for stiching.
* @param connections
* @param compositionData
* @param reverse
* @returns
*/
function FormatFunctionDataForData(connections_1, compositionData_1) {
    return FormatData_awaiter(this, arguments, void 0, function* (connections, compositionData, reverse = []) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            let ofTheConcept = yield GetTheConcept(connections[i].ofTheConceptId);
            let toTheConcept = yield GetTheConcept(connections[i].toTheConceptId);
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            if (reverseFlag == true) {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    let newData;
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let key = (_b = (_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "self";
                    if (connections[i].toTheConceptId in compositionData) {
                        newData = compositionData[connections[i].toTheConceptId];
                        if (!(key in newData)) {
                            newData[key] = {};
                        }
                    }
                    else {
                        newData = {};
                        newData[key] = {};
                        compositionData[connections[i].toTheConceptId] = newData;
                    }
                    try {
                        let mytype = (_d = (_c = ofTheConcept === null || ofTheConcept === void 0 ? void 0 : ofTheConcept.type) === null || _c === void 0 ? void 0 : _c.characterValue) !== null && _d !== void 0 ? _d : "none";
                        let value = ofTheConcept.characterValue;
                        let data = {
                            "id": ofTheConcept.id,
                            "data": {
                                [mytype]: value
                            }
                        };
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (reverseCharater.includes("_s_")) {
                            // do nothing
                        }
                        else {
                            if (typeof newData[key] == "string") {
                                newData[key] = {};
                            }
                            newData[key][reverseCharater] = data;
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (ofTheConcept.id != 0 && toTheConcept.id != 0) {
                    let newData;
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let key = (_f = (_e = ofTheConcept.type) === null || _e === void 0 ? void 0 : _e.characterValue) !== null && _f !== void 0 ? _f : "self";
                    if (connections[i].ofTheConceptId in compositionData) {
                        newData = compositionData[connections[i].ofTheConceptId];
                        if (!(key in newData)) {
                            newData[key] = {};
                        }
                    }
                    else {
                        newData = {};
                        newData[key] = {};
                        compositionData[connections[i].ofTheConceptId] = newData;
                    }
                    try {
                        let mytype = (_h = (_g = toTheConcept === null || toTheConcept === void 0 ? void 0 : toTheConcept.type) === null || _g === void 0 ? void 0 : _g.characterValue) !== null && _h !== void 0 ? _h : "none";
                        let value = toTheConcept.characterValue;
                        let data = {
                            "id": toTheConcept.id,
                            "data": {
                                [mytype]: value
                            }
                        };
                        if (linkerConcept.characterValue.includes("_s_")) {
                            // do nothing
                        }
                        else {
                            if (typeof newData[key] == "string") {
                                newData[key] = {};
                            }
                            newData[key][linkerConcept.characterValue] = data;
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        return compositionData;
    });
}

;// CONCATENATED MODULE: ./src/Services/Search/SearchWithTypeAndLinker.ts
var SearchWithTypeAndLinker_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function will help you search a concept by their type and also to query inside of it.
 * Put the number of compositions you want to get in the searchStructure which can be set by inpage and page
 * Then the type should be set in searchQuery for the compositionName.
 * Inside the searchQuery array this you can set the full linker / listLinker in the searchQuery.
 * This will give the id of the structures.
 */
function SearchWithTypeAndLinkerDataId(searchStructure_1, searchQuery_1) {
    return SearchWithTypeAndLinker_awaiter(this, arguments, void 0, function* (searchStructure, searchQuery, token = "") {
        let result = yield SearchWithTypeAndLinkerApi(searchStructure, searchQuery, token);
        let conceptIds = result.compositionIds;
        let connections = result.internalConnections;
        let linkers = result.linkers;
        let reverse = result.reverse;
        let mainCompositionIds = result.mainCompositionIds;
        let prefetchConnections = yield GetConnectionDataPrefetch(linkers);
        let concepts = yield GetCompositionFromConnectionsWithDataIdInObject(conceptIds, connections);
        let output = yield FormatFromConnectionsAlteredArray(prefetchConnections, concepts, conceptIds, mainCompositionIds, reverse);
        return output;
    });
}
/**
 * This function will help you search a concept by their type and also to query inside of it.
 * Put the number of compositions you want to get in the searchStructure which can be set by inpage and page
 * Then the type should be set in searchQuery for the compositionName.
 * Inside the searchQuery array this you can set the full linker / listLinker in the searchQuery.
 * This will not give the id of the structures.
 */
function SearchWithTypeAndLinker(searchStructure_1, searchQuery_1) {
    return SearchWithTypeAndLinker_awaiter(this, arguments, void 0, function* (searchStructure, searchQuery, token = "") {
        let result = yield SearchWithTypeAndLinker_SearchWithTypeAndLinkerApi(searchStructure, searchQuery, token);
        let conceptIds = result.compositionIds;
        let connections = result.internalConnections;
        let linkers = result.linkers;
        let reverse = result.reverse;
        let mainCompositionIds = result.mainCompositionIds;
        let prefetchConnections = yield GetCompositionBulk_GetConnectionDataPrefetch(linkers);
        let concepts = yield GetCompositionFromConnectionsInObject(conceptIds, connections);
        let output = yield SearchLinkMultiple_FormatConceptsAndConnections(prefetchConnections, concepts, mainCompositionIds, reverse);
        return output;
    });
}
/**
 * ## Format dataid ##
 * @param linkers
 * @param conceptIds
 * @param connections
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
function formatDataArrayDataId(linkers, conceptIds, connections, mainCompositionIds, reverse) {
    return SearchWithTypeAndLinker_awaiter(this, void 0, void 0, function* () {
        let prefetchConnections = yield GetCompositionBulk_GetConnectionDataPrefetch(linkers);
        let concepts = yield GetCompositionBulk_GetCompositionFromConnectionsWithDataIdInObject(conceptIds, connections);
        let output = yield SearchLinkMultiple_FormatFromConnectionsAlteredArray(prefetchConnections, concepts, conceptIds, mainCompositionIds, reverse);
        return output;
    });
}
/**
 * ## Format Normal ##
 * @param linkers
 * @param conceptIds
 * @param connections
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
function formatDataArrayNormal(linkers, conceptIds, connections, mainCompositionIds, reverse) {
    return SearchWithTypeAndLinker_awaiter(this, void 0, void 0, function* () {
        let prefetchConnections = yield GetCompositionBulk_GetConnectionDataPrefetch(linkers);
        let concepts = yield GetCompositionBulk_GetCompositionFromConnectionsInObjectNormal(conceptIds, connections);
        let output = yield SearchLinkMultiple_FormatConceptsAndConnections(prefetchConnections, concepts, mainCompositionIds, reverse);
        return output;
    });
}
/**
 * ## Format Normal ##
 * @param linkers
 * @param conceptIds
 * @param connections
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
function formatLinkersNormal(linkers, conceptIds, connections, mainCompositionIds, reverse) {
    return SearchWithTypeAndLinker_awaiter(this, void 0, void 0, function* () {
        let prefetchConnections = yield GetConnectionDataPrefetch(linkers);
        let concepts = yield GetCompositionFromConnectionsInObjectNormal(conceptIds, connections);
        let output = yield FormatConceptsAndConnections(prefetchConnections, concepts, mainCompositionIds, reverse);
        return output;
    });
}
/**
 * ## Format Normal ##
 * This function fetches all the connections and then converts all the connections to the single level connections
 * Then those single level objects are then stiched together to create a complex json/ array.
 * @param linkers
 * @param conceptIds
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
function formatConnections(linkers, conceptIds, mainCompositionIds, reverse) {
    return SearchWithTypeAndLinker_awaiter(this, void 0, void 0, function* () {
        let prefetchConnections = yield GetCompositionBulk_GetConnectionDataPrefetch(linkers);
        let compositionData = [];
        let newCompositionData = [];
        compositionData = yield formatFunction(prefetchConnections, compositionData, reverse);
        console.log("this is the format normal builders BEFORE", compositionData);
        compositionData = yield formatFunctionForData(prefetchConnections, compositionData, reverse);
        console.log("this is the format normal builders", compositionData);
        let output = yield FormatConceptsAndConnectionsNormalList(prefetchConnections, compositionData, mainCompositionIds, newCompositionData, reverse);
        return output;
    });
}
/**
 * ## Format DATA-ID ##
 * This function fetches all the connections and then converts all the connections to the single level connections
 * Then those single level objects are then stiched together to create a complex json/ array.
 * @param linkers
 * @param conceptIds
 * @param mainCompositionIds
 * @param reverse
 * @returns
 */
function formatConnectionsDataId(linkers, conceptIds, mainCompositionIds, reverse) {
    return SearchWithTypeAndLinker_awaiter(this, void 0, void 0, function* () {
        let prefetchConnections = yield GetCompositionBulk_GetConnectionDataPrefetch(linkers);
        let compositionData = [];
        let newCompositionData = [];
        compositionData = yield FormatFunctionData(prefetchConnections, compositionData, reverse);
        console.log("this is the format data builders BEFORE", compositionData);
        compositionData = yield FormatFunctionDataForData(prefetchConnections, compositionData, reverse);
        console.log("this is the format data builders", compositionData);
        let output = yield FormatFromConnectionsAlteredArrayExternal(prefetchConnections, compositionData, newCompositionData, mainCompositionIds, reverse);
        return output;
    });
}

;// CONCATENATED MODULE: ./src/Services/Search/SearchLinkMultiple.ts
var SearchLinkMultiple_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function SearchLinkMultipleAll(searchQuery_1) {
    return SearchLinkMultiple_awaiter(this, arguments, void 0, function* (searchQuery, token = "", caller = null, format = DATAID) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (serviceWorker) {
            const res = yield sendMessage('SearchLinkMultipleAll', { searchQuery, token, caller, format });
            console.log('data received search from sw', res);
            return res.data;
        }
        let conceptIds = [];
        let linkers = [];
        let connections = [];
        let reverse = [];
        let mainCompositionId = searchQuery[0].composition;
        let conceptsConnections = {};
        let result = {};
        try {
            if (caller === null || caller === void 0 ? void 0 : caller.isDataLoaded) {
                conceptsConnections.compositionIds = (_a = caller.conceptIds) === null || _a === void 0 ? void 0 : _a.slice();
                conceptsConnections.internalConnections = (_b = caller.internalConnections) === null || _b === void 0 ? void 0 : _b.slice();
                conceptsConnections.linkers = (_c = caller.linkers) === null || _c === void 0 ? void 0 : _c.slice();
                conceptsConnections.reverse = (_d = caller.reverse) === null || _d === void 0 ? void 0 : _d.slice();
                result = conceptsConnections;
                conceptIds = result.compositionIds;
                connections = result.internalConnections;
                linkers = result.linkers;
                reverse = result.reverse;
            }
            else {
                conceptsConnections = yield SearchLinkMultipleApi(searchQuery, token);
                if (caller) {
                    caller.conceptIds = (_e = conceptsConnections.compositionIds) === null || _e === void 0 ? void 0 : _e.slice();
                    caller.internalConnections = (_f = conceptsConnections.internalConnections) === null || _f === void 0 ? void 0 : _f.slice();
                    caller.linkers = (_g = conceptsConnections.linkers) === null || _g === void 0 ? void 0 : _g.slice();
                    caller.reverse = (_h = conceptsConnections.reverse) === null || _h === void 0 ? void 0 : _h.slice();
                    caller.isDataLoaded = true;
                }
                result = conceptsConnections;
                conceptIds = result.compositionIds;
                connections = result.internalConnections;
                linkers = result.linkers;
                reverse = result.reverse;
            }
            let out = yield DataIdBuildLayer(linkers, conceptIds, connections, reverse, mainCompositionId, searchQuery[0], format);
            return out;
        }
        catch (e) {
            console.log("this is the error in the search link multiple", e);
            throw e;
        }
    });
}
/**
 * ######### This layer builds the data. Format is dataid ##########
 * @param linkers list of ids that help us
 * @param conceptIds this is all the concept ids that need  to be composited
 * @param connections these are the internal connections of the compositions that help in creating individual compositions
 * @param reverse this is the list of connection ids that need to show reverse connections(to->from)
 * @param mainCompositionId this is the main centre point of this data.
 * @returns
 */
function DataIdBuildLayer(linkers_1, conceptIds_1, connections_1, reverse_1, mainCompositionId_1, searchQuery_1) {
    return SearchLinkMultiple_awaiter(this, arguments, void 0, function* (linkers, conceptIds, connections, reverse, mainCompositionId, searchQuery, format = DATAID) {
        let startTime = new Date().getTime();
        let prefetchConnections = yield GetCompositionBulk_GetConnectionDataPrefetch(linkers);
        let concepts;
        let out;
        if (format == JUSTDATA) {
            concepts = yield GetCompositionFromConnectionsInObject(conceptIds, connections);
            out = yield FormatFromConnections(linkers, concepts, mainCompositionId, reverse);
        }
        else if (format == NORMAL) {
            concepts = yield GetCompositionBulk_GetCompositionFromConnectionsInObjectNormal(conceptIds, connections);
            out = yield FormatFromConnections(linkers, concepts, mainCompositionId, reverse);
        }
        else if (format == 100) {
            concepts = yield GetCompositionFromConnectionsWithDataIdInObjectNew(conceptIds, connections);
            out = yield FormatFromConnectionsAltered(prefetchConnections, concepts, mainCompositionId, reverse);
        }
        else if (format == LISTNORMAL) {
            out = yield formatDataArrayNormal(linkers, conceptIds, connections, searchQuery.ofCompositions, reverse);
        }
        else {
            concepts = yield GetCompositionBulk_GetCompositionFromConnectionsWithDataIdInObject(conceptIds, connections);
            out = yield FormatFromConnectionsAltered(prefetchConnections, concepts, mainCompositionId, reverse);
        }
        return out;
    });
}
/**
 * ## Format is DATAID ##
 * This  is altered format and is different from others because it passes all the connections prebuilt/prefetched
 * This will not let the connections to be again fetched from the memory.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is the id of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
function FormatFromConnectionsAltered(connections_1, compositionData_1, mainComposition_1) {
    return SearchLinkMultiple_awaiter(this, arguments, void 0, function* (connections, compositionData, mainComposition, reverse = []) {
        let startTime = new Date().getTime();
        let mainData = {};
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            if (reverseFlag == true) {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].toTheConceptId];
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let newData = mydata === null || mydata === void 0 ? void 0 : mydata.data;
                    let key = Object.keys(newData)[0];
                    try {
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][reverseCharater])) {
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][reverseCharater] = [];
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].ofTheConceptId];
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let newData = mydata === null || mydata === void 0 ? void 0 : mydata.data;
                    let key = Object.keys(newData)[0];
                    try {
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][linkerConcept.characterValue])) {
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][linkerConcept.characterValue] = [];
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        mainData = compositionData[mainComposition];
        return mainData;
    });
}
/**
 * ######### Format is normal ######### used for listing.
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
function SearchLinkMultiple_FormatConceptsAndConnections(connections_1, compositionData_1, mainComposition_1) {
    return SearchLinkMultiple_awaiter(this, arguments, void 0, function* (connections, compositionData, mainComposition, reverse = []) {
        let mainData = [];
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            if (reverseFlag == true) {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let newData = compositionData[connections[i].toTheConceptId];
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let key = Object.keys(newData)[0];
                    try {
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][reverseCharater])) {
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][reverseCharater] = [];
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let newData = compositionData[connections[i].ofTheConceptId];
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let key = Object.keys(newData)[0];
                    try {
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][linkerConcept.characterValue])) {
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][linkerConcept.characterValue] = [];
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        for (let i = 0; i < mainComposition.length; i++) {
            let mymainData = compositionData[mainComposition[i]];
            mainData.push(mymainData);
        }
        return mainData;
    });
}
/**
 * ############ Format is data-id and is used for list. ############
 * This is helpful in building a format that has multiple mainCompositions i.e. in the context of the list
 * The list format is helpful because you do not have to go over each individual query.
 * @param connections the type connections that need (external connections) to be passed
 * @param compositionData  this is a dictionary type of format that has all the build compositions {id: { actual data}}
 * @param mainComposition this is list of  ids of the main composition that builds the tree
 * @param reverse this is the list of connections ids that needs to go to the reverse direction (to---->from)
 * @returns
 */
function SearchLinkMultiple_FormatFromConnectionsAlteredArray(connections_1, compositionData_1, conceptIds_1, mainComposition_1) {
    return SearchLinkMultiple_awaiter(this, arguments, void 0, function* (connections, compositionData, conceptIds, mainComposition, reverse = []) {
        let startTime = new Date().getTime();
        let mainData = [];
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            if (reverseFlag == true) {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].toTheConceptId];
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let newData = mydata === null || mydata === void 0 ? void 0 : mydata.data;
                    let key = Object.keys(newData)[0];
                    try {
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][reverseCharater])) {
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][reverseCharater] = [];
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].ofTheConceptId];
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let newData = mydata === null || mydata === void 0 ? void 0 : mydata.data;
                    let key = Object.keys(newData)[0];
                    try {
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][linkerConcept.characterValue])) {
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][linkerConcept.characterValue] = [];
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        for (let i = 0; i < mainComposition.length; i++) {
            let mymainData = compositionData[mainComposition[i]];
            mainData.push(mymainData);
        }
        return mainData;
    });
}
/**
 * ########## Format works with JUSTDATA / NORMAL ########### used for single origin concept
 * @param linkers this is the list of linkers that
 * @param compositionData
 * @param mainComposition
 * @param reverse list of connection ids that need to show reverse conneciton.
 * @returns
 */
function FormatFromConnections(linkers_1, compositionData_1, mainComposition_1) {
    return SearchLinkMultiple_awaiter(this, arguments, void 0, function* (linkers, compositionData, mainComposition, reverse = []) {
        let mainData = {};
        let connections = yield GetConnectionBulk(linkers);
        let myConcepts = [];
        for (let i = 0; i < connections.length; i++) {
            myConcepts.push(connections[i].toTheConceptId);
            myConcepts.push(connections[i].ofTheConceptId);
            myConcepts.push(connections[i].typeId);
        }
        yield GetConceptBulk(myConcepts);
        connections.sort(function (x, y) {
            return y.id - x.id;
        });
        for (let i = 0; i < connections.length; i++) {
            let reverseFlag = false;
            if (reverse.includes(connections[i].id)) {
                reverseFlag = true;
            }
            if (reverseFlag == true) {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].toTheConceptId];
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let newData = mydata;
                    let key = Object.keys(newData)[0];
                    try {
                        let reverseCharater = linkerConcept.characterValue + "_reverse";
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][reverseCharater])) {
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][reverseCharater] = [];
                            newData[key][reverseCharater].push(compositionData[connections[i].ofTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
            else {
                if (compositionData[connections[i].ofTheConceptId] && compositionData[connections[i].toTheConceptId]) {
                    let mydata = compositionData[connections[i].ofTheConceptId];
                    let linkerConcept = yield GetTheConcept(connections[i].typeId);
                    let newData = mydata;
                    // console.log("this is the new data", newData);
                    let key = Object.keys(newData)[0];
                    try {
                        if (typeof newData === "string") {
                            newData = {};
                        }
                        if (Array.isArray(newData[key][linkerConcept.characterValue])) {
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                        else {
                            if (typeof newData[key] === "string") {
                                newData[key] = {};
                            }
                            newData[key][linkerConcept.characterValue] = [];
                            newData[key][linkerConcept.characterValue].push(compositionData[connections[i].toTheConceptId]);
                        }
                    }
                    catch (ex) {
                        console.log("this is error", ex);
                    }
                }
            }
        }
        mainData = compositionData[mainComposition];
        return mainData;
    });
}

;// CONCATENATED MODULE: ./src/Services/Conversion/ConvertConcepts.ts



function convertFromConceptToLConcept(concept) {
    var _a, _b;
    const LConcept = CreateDefaultLConcept_CreateDefaultLConcept();
    LConcept.id = concept.id;
    LConcept.ghostId = concept.ghostId;
    LConcept.userId = concept.userId;
    LConcept.accessId = concept.accessId;
    LConcept.categoryId = concept.categoryId;
    LConcept.characterValue = concept.characterValue;
    LConcept.entryTimeStamp = concept.entryTimeStamp;
    LConcept.typeId = concept.typeId;
    LConcept.type = concept.type;
    LConcept.isTemp = false;
    LConcept.typeCharacter = (_b = (_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) !== null && _b !== void 0 ? _b : "";
    return LConcept;
}
function convertFromLConceptToConcept(lconcept) {
    const concept = CreateDefaultConcept_CreateDefaultConcept();
    concept.id = lconcept.id;
    concept.ghostId = lconcept.ghostId;
    concept.userId = lconcept.userId;
    concept.accessId = lconcept.accessId;
    concept.entryTimeStamp = lconcept.entryTimeStamp;
    concept.typeId = lconcept.typeId;
    concept.categoryId = lconcept.categoryId;
    return concept;
}
function convertFromConnectionToLConnection(connection) {
    const Lconnection = new Connection_Connection(0, 0, 0, 0, 0, 0, 0);
    Lconnection.id = connection.id;
    Lconnection.ghostId = connection.ghostId;
    Lconnection.accessId = connection.accessId;
    Lconnection.ofTheConceptId = connection.ofTheConceptId;
    Lconnection.toTheConceptId = connection.toTheConceptId;
    Lconnection.entryTimeStamp = connection.entryTimeStamp;
    Lconnection.typeId = connection.typeId;
    Lconnection.isTemp = false;
    return Lconnection;
}

;// CONCATENATED MODULE: ./src/Services/Local/GetTheConceptLocal.ts
var GetTheConceptLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This function converts any local/ virtual or real concept id to a LConcept.
 * In case that the id is virtual then it tries to find it from the local memory. This will return -ve id.
 * In case that the virtual id has already been synced to the backend then it gets this from the relational binary tree(LocalGhostIdTree). This will return +ve id.
 * In case that we pass real id then this will return real concept but formatted in LConcept form. This might have undefined ghostId.
 * @param id the id that you want to find out the concept of. This could be a negative (virtual id ) or a real concept id.
 * @returns LConcept with either (-ve or +ve id)
 */
function GetTheConceptLocal(id) {
    return GetTheConceptLocal_awaiter(this, void 0, void 0, function* () {
        try {
            if (serviceWorker) {
                const res = yield sendMessage('GetTheConceptLocal', { id });
                console.log('data received from sw', res);
                return res.data;
            }
            let lconcept = CreateDefaultLConcept_CreateDefaultLConcept();
            if (id < 0) {
                lconcept = yield LocalConceptData_LocalConceptsData.GetConcept(id);
                if (lconcept.id == 0) {
                    let localNode = yield LocalGhostIdTree.getNodeFromTree(id);
                    if (localNode === null || localNode === void 0 ? void 0 : localNode.value) {
                        let returnedConcept = localNode.value;
                        if (returnedConcept) {
                            lconcept = returnedConcept;
                        }
                    }
                }
            }
            else {
                let concept = yield GetTheConcept(id);
                lconcept = convertFromConceptToLConcept(concept);
            }
            return lconcept;
        }
        catch (error) {
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/UpdateCompositionLocal.ts
var UpdateCompositionLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









// function to update the cache composition
function UpdateCompositionLocal(patcherStructure) {
    return UpdateCompositionLocal_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage("UpdateCompositionLocal", {
                patcherStructure,
            });
            console.log("data received from sw", res);
            return res.data;
        }
        // get all the default userId, sessionId, accessId passed by the patcherStructure
        const userId = patcherStructure.userId;
        const sessionId = patcherStructure.sessionId;
        const accessId = patcherStructure.accessId;
        let connectionList = [];
        const conceptList = [];
        let composition = CreateDefaultLConcept_CreateDefaultLConcept();
        let parentConcept = CreateDefaultLConcept_CreateDefaultLConcept();
        const toDeleteConcepts = [];
        // the main composition Id that has the data that needs to be patched
        const compositionId = patcherStructure.compositionId;
        // if you want to edit the subcompositions of the composition then you have to pass to this
        const ofTheConceptId = patcherStructure.ofTheCompositionId;
        let toDeleteConnections = [];
        // get all connections from the backend because it needs latest data
        const connectionListString = yield GetAllConnectionsOfComposition(compositionId);
        let connectionListOriginal = connectionListString;
        for (let i = 0; i < connectionListOriginal.length; i++) {
            connectionList.push(convertFromConnectionToLConnection(connectionListOriginal[i]));
        }
        const conceptIdList = [];
        const compositionList = [];
        // put this in the upper section before updating because this will tell all other distributed
        //servers to destroy the copy of the composition that they have as new composition is coming up
        // get all the connections that are inside of the composition and store them in
        let allConcepts = [];
        for (let i = 0; i < connectionList.length; i++) {
            InsertUniqueNumber(compositionList, connectionList[i].ofTheConceptId);
            InsertUniqueNumber(conceptIdList, connectionList[i].ofTheConceptId);
            InsertUniqueNumber(conceptIdList, connectionList[i].toTheConceptId);
            allConcepts.push(connectionList[i].ofTheConceptId);
        }
        // get all the concepts that are inside of the composition and store them in a conceptList
        for (let i = 0; i < conceptIdList.length; i++) {
            const conceptString = yield GetTheConcept(conceptIdList[i]);
            const concept = conceptString;
            if (compositionId == conceptIdList[i]) {
                composition = convertFromConceptToLConcept(concept);
            }
            if (ofTheConceptId == conceptIdList[i]) {
                parentConcept = convertFromConceptToLConcept(concept);
            }
            conceptList.push(convertFromConceptToLConcept(concept));
        }
        // now trying to patch the new object into the composition
        const object = patcherStructure.patchObject;
        for (const key in object) {
            let insertingConcept = CreateDefaultLConcept_CreateDefaultLConcept();
            const value = object[key];
            let localConcept = composition;
            // if the immedidate parent exists in the composition (i.e. for multilevel composition)
            if (parentConcept.id > 0) {
                localConcept = parentConcept;
            }
            if (Array.isArray(value) || typeof value == "object") {
                insertingConcept = yield MakeTheInstanceConceptLocal(key, "", true, composition.userId, 4, 999);
                yield CreateTheCompositionLocal(object[key], insertingConcept.id, insertingConcept.userId, composition.id, composition.userId, 4, 999);
            }
            else {
                // make the new concept in the object
                insertingConcept = yield MakeTheInstanceConceptLocal(key, value, false, userId, accessId, sessionId);
            }
            // check if the concept exists in the concept list because if it exists then we have to delete old connection
            const ExistingConcepts = CheckIfTypeLConceptsExistsInArray(conceptList, insertingConcept);
            // if the existing concept then start the process for deleting the concept in the list
            for (let i = 0; i < ExistingConcepts.length; i++) {
                if (ExistingConcepts[i].id > 0) {
                    const deletingConnections = CheckAllConnectionsConnectedInLConnectionArray(connectionList, ExistingConcepts[i].id);
                    toDeleteConnections = toDeleteConnections.concat(deletingConnections);
                    toDeleteConcepts.push(ExistingConcepts[i]);
                }
            }
            // create the connection between the new concept and the old composition
            const connectionString = yield CreateTheConnectionLocal(localConcept.id, insertingConcept.id, composition.id, 2);
            const connection = connectionString;
            conceptList.push(insertingConcept);
        }
        // now you have to delete the connection in bulk
        for (let j = 0; j < toDeleteConnections.length; j++) {
            // remove from the cache list
            // delete the connection in the backend
            yield DeleteConnectionById(toDeleteConnections[j].id);
        }
        yield LocalSyncData.SyncDataOnline();
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/GetConnectionOfTheConceptLocal.ts
var GetConnectionOfTheConceptLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function GetConnectionOfTheConceptLocal(ofTheConcept, typeId, userId) {
    return GetConnectionOfTheConceptLocal_awaiter(this, void 0, void 0, function* () {
        try {
            let connections = yield LocalConnectionData.GetConnectionOfCompositionAndTypeLocal(typeId, ofTheConcept);
            return connections;
        }
        catch (error) {
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/GetRelationLocal.ts
var GetRelationLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function GetRelationLocal(id, relation, userId) {
    return GetRelationLocal_awaiter(this, void 0, void 0, function* () {
        try {
            if (serviceWorker) {
                const res = yield sendMessage("GetRelationLocal", {
                    id, relation, userId
                });
                console.log("data received from sw", res);
                return res.data;
            }
            let typeConcept = yield GetConceptByCharacterAndCategoryLocal(relation);
            let localConnections = [];
            if (typeConcept.id != 0) {
                localConnections = yield GetConnectionOfTheConceptLocal(id, typeConcept.id, userId);
            }
            let output = [];
            for (let i = 0; i < localConnections.length; i++) {
                let comp = yield GetCompositionLocal(localConnections[i].toTheConceptId);
                output.push(comp);
            }
            return output;
        }
        catch (error) {
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/View/ViewInternalDataApi.ts
var ViewInternalDataApi_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function ViewInternalDataApi(ids) {
    return ViewInternalDataApi_awaiter(this, void 0, void 0, function* () {
        let connectionList = [];
        try {
            var header = GetRequestHeader_GetRequestHeader();
            const response = yield fetch(BaseUrl_BaseUrl.ViewInternalDataUrl(), {
                method: 'POST',
                headers: header,
                body: JSON.stringify(ids)
            });
            if (response.ok) {
                let conceptString = yield response.json();
                let connectionDictionary = {};
                for (let i = 0; i < conceptString.length; i++) {
                    let conceptList = conceptString[i].concepts;
                    connectionList = conceptString[i].connections;
                    let id = conceptString[i].id;
                    GetConceptBulk(conceptList);
                    connectionDictionary[id] = connectionList;
                }
                return connectionDictionary;
            }
            else {
                //  throw new Error(`Error! status: ${response.status}`);
                console.log("View Internal Data error", response.status);
                ErrorPosting_HandleHttpError(response);
            }
            return connectionList;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(' This is the view internal data error message: ', error.message);
            }
            else {
                console.log(' This is the view internal data unexpected error: ', error);
            }
            throw error;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/View/ViewInternalData.ts
var ViewInternalData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function ViewInternalData(ids) {
    return ViewInternalData_awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            let connections = yield ViewInternalDataApi(ids);
            let output = [];
            for (let i = 0; i < ids.length; i++) {
                let id = ids[i];
                let localConnections = connections[id];
                if (id && localConnections) {
                    let concepts = [];
                    let formattedOutput = {};
                    for (let j = 0; j < localConnections.length; j++) {
                        if (!concepts.includes(localConnections[j].ofTheConceptId)) {
                            concepts.push(localConnections[j].ofTheConceptId);
                        }
                    }
                    let out = yield recursiveFetch(id, localConnections, concepts);
                    formattedOutput.data = out;
                    formattedOutput.id = id;
                    output.push(formattedOutput);
                }
                else {
                    let formattedOutput = {};
                    formattedOutput.id = id;
                    let concept = yield GetTheConcept(id);
                    let noconn = {};
                    if (concept.type) {
                        noconn[(_a = concept === null || concept === void 0 ? void 0 : concept.type) === null || _a === void 0 ? void 0 : _a.characterValue] = concept.characterValue;
                        formattedOutput.data = noconn;
                        output.push(formattedOutput);
                    }
                }
            }
            return output;
        }
        catch (err) {
            throw err;
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/Search/SearchInternalApi.ts
var SearchInternalApi_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function SearchInternalApi(search_1) {
    return SearchInternalApi_awaiter(this, arguments, void 0, function* (search, token = "") {
        var header = GetRequestHeaderWithAuthorization("application/json", token);
        let queryUrl = BaseUrl_BaseUrl.SearchInternalWithAuthenticatedCcsUrl();
        queryUrl = queryUrl + '?composition=' + search.composition + '&search=' + search.search + '&internalComposition=' + search.internalComposition + '&type=' + search.type + '&inpage=' + search.inpage + '&page=' + search.page;
        try {
            const response = yield fetch(queryUrl, {
                method: 'GET',
                headers: header
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                console.log("This is the searching internal error", response.status);
                ErrorPosting_HandleHttpError(response);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching internal error", ex);
            HandleInternalError(ex, queryUrl);
        }
    });
}
function SearchInternalAllApi(search) {
    return SearchInternalApi_awaiter(this, void 0, void 0, function* () {
        var header = GetRequestHeaderWithAuthorization("application/json", "");
        let queryUrl = BaseUrl_BaseUrl.SearchInternalWithCcsUrl();
        queryUrl = queryUrl + '?composition=' + search.composition + '&search=' + search.search + '&internalComposition=' + search.internalComposition + '&type=' + search.type + '&inpage=' + search.inpage + '&page=' + search.page;
        try {
            const response = yield fetch(queryUrl, {
                method: 'GET',
                headers: header
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                console.log("This is the searching internal error", response.status);
                ErrorPosting_HandleHttpError(response);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching internal error", ex);
            HandleInternalError(ex, queryUrl);
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/Search/SearchLinkInternal.ts
var SearchLinkInternal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function SearchLinkInternal(searchQuery_1) {
    return SearchLinkInternal_awaiter(this, arguments, void 0, function* (searchQuery, token = "") {
        try {
            let conceptsConnections = yield SearchInternalApi(searchQuery, token);
            let out = yield ViewInternalData(conceptsConnections);
            return out;
        }
        catch (ex) {
            throw ex;
        }
    });
}
function SearchLinkInternalAll(searchQuery_1) {
    return SearchLinkInternal_awaiter(this, arguments, void 0, function* (searchQuery, token = "") {
        try {
            let conceptsConnections = yield SearchInternalAllApi(searchQuery);
            let out = conceptsConnections;
            return out;
        }
        catch (ex) {
            throw ex;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/CreateConnectionBetweenTwoConceptsLocal.ts
var CreateConnectionBetweenTwoConceptsLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function CreateConnectionBetweenTwoConceptsLocal(ofTheConcept_1, toTheConcept_1, linker_1) {
    return CreateConnectionBetweenTwoConceptsLocal_awaiter(this, arguments, void 0, function* (ofTheConcept, toTheConcept, linker, both = false) {
        var _a, _b;
        try {
            let startTime = performance.now();
            if (serviceWorker) {
                const res = yield sendMessage('CreateConnectionBetweenTwoConceptsLocal', { ofTheConcept, toTheConcept, linker, both });
                console.log('data received from sw', res);
                return res.data;
            }
            console.log('of THe', ofTheConcept, 'to the', toTheConcept);
            var userId = ofTheConcept.userId;
            if (both) {
                let prefix1 = ((_a = toTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s";
                let linkerAdd1 = linker + "_by";
                let backwardLinker = prefix1 + "_" + linkerAdd1;
                // if(count){
                //    await CountRelationship(linkerAdd1, toTheConcept, userId);
                //   }
                var connectionConceptReverse = yield MakeTheInstanceConceptLocal("connection", backwardLinker, false, 999, 999, 999);
                let pewCon = yield CreateTheConnectionLocal(toTheConcept.id, ofTheConcept.id, connectionConceptReverse.id, 1000);
            }
            let prefix = ((_b = ofTheConcept.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
            let linkerAdd = linker + "_s";
            let forwardLinker = prefix + "_" + linkerAdd;
            // if(count){
            // // await CountRelationship(linkerAdd, ofTheConcept, userId);
            // }
            var connectionConcept = yield MakeTheInstanceConceptLocal("connection", forwardLinker, false, 999, 999, 999);
            let newConnection = yield CreateTheConnectionLocal(ofTheConcept.id, toTheConcept.id, connectionConcept.id, 1000);
            /**
             * Start Log Service
             */
            console.log("CreateConnectionBetweenTwoConceptsLocal...");
            let sessionId = getCookie('SessionId');
            let dataLog = {
                responseStatus: 200,
                responseTime: `${(performance.now() - startTime).toFixed(3)}ms`,
                responseSize: `${JSON.stringify(newConnection).length}`,
                sessionId: sessionId,
                functionName: "CreateConnectionBetweenTwoConceptsLocal",
                functionParameters: ['ofTheConceptId', 'toTheConceptId', 'linker', 'both'],
            };
            Logger.log("INFO", "From function CreateConnectionBetweenTwoConceptsLocal", dataLog);
            // Send logs to the server
            // Logger.sendLogsToServer()
            /**
             * End of Log
             */
            return newConnection;
        }
        catch (ex) {
            throw ex;
        }
    });
}

;// CONCATENATED MODULE: ./src/Services/Local/DeleteConceptLocal.ts
var DeleteConceptLocal_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function DeleteConceptLocal(id) {
    return DeleteConceptLocal_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage('DeleteConceptLocal', { id });
            console.log('data received from sw', res);
            return res.data;
        }
        let concept = yield GetTheConceptLocal(id);
        LocalConceptData_LocalConceptsData.RemoveConcept(concept);
    });
}

;// CONCATENATED MODULE: ./src/Api/GetCompositionConnectionsBetweenTwoConcepts.ts
var GetCompositionConnectionsBetweenTwoConcepts_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function GetCompositionConnectionsBetweenTwoConcepts(ofConceptId, toConcept, mainKey) {
    return GetCompositionConnectionsBetweenTwoConcepts_awaiter(this, void 0, void 0, function* () {
        var connectionList = [];
        try {
            var formdata = new FormData();
            formdata.append("ofConceptId", ofConceptId.toString());
            formdata.append("mainKey", mainKey.toString());
            formdata.append("toConceptId", toConcept.toString());
            const response = yield fetch(BaseUrl_BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl(), {
                method: 'POST',
                body: formdata,
                redirect: "follow"
            });
            if (response.ok) {
                const result = yield response.json();
                for (var i = 0; i < result.length; i++) {
                    ConnectionData.AddConnection(result[i]);
                    connectionList.push(result[i]);
                }
            }
            else {
                console.log("Get composition connection between two concepts", response.status);
                ErrorPosting_HandleHttpError(response);
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Get composition connection between two concepts error message: ', error.message);
            }
            else {
                console.log('Get composition connection between two concepts unexpected error: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetCompositionConnectionBetweenTwoConceptsUrl());
        }
        return connectionList;
    });
}

;// CONCATENATED MODULE: ./src/Services/GetConnectionBetweenTwoConceptsLinker.ts
var GetConnectionBetweenTwoConceptsLinker_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * This function will give you all the connections between two concepts by their linker or fullLinker
 * @param ofTheConcept start of the connecction
 * @param toTheConcept end of the connection
 * @param linker the primitive linkers with type connection (16) these are the old type of linkers (if you want full linker then put this as empty string)
 * @param fullLinker fullLinker is the modern linker (if you want linker then put this as empty string)
 * @param forward if you want to get the forward relation in the primitive linker put true else for backward linker false.
 * @returns list of connections
 */
function GetConnectionBetweenTwoConceptsLinker(ofTheConcept_1, toTheConcept_1, linker_1, fullLinker_1) {
    return GetConnectionBetweenTwoConceptsLinker_awaiter(this, arguments, void 0, function* (ofTheConcept, toTheConcept, linker, fullLinker, forward = true) {
        var _a, _b;
        let typeConcept = CreateDefaultConcept_CreateDefaultConcept();
        if (linker != "") {
            let typeLinker = "";
            if (forward) {
                let prefix = ((_a = ofTheConcept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s";
                let linkerAdd = linker + "_s";
                let forwardLinker = prefix + "_" + linkerAdd;
                typeLinker = forwardLinker;
            }
            else {
                let prefix1 = ((_b = toTheConcept.type) === null || _b === void 0 ? void 0 : _b.characterValue) + "_s";
                let linkerAdd1 = linker + "_by";
                let backwardLinker = prefix1 + "_" + linkerAdd1;
                typeLinker = backwardLinker;
            }
            typeConcept = yield MakeTheInstanceConcept("connection", typeLinker, false, 999);
        }
        if (fullLinker != "") {
            typeConcept = yield MakeTheTypeConceptApi(fullLinker, 999);
        }
        let connections = yield GetCompositionConnectionsBetweenTwoConcepts(ofTheConcept.id, toTheConcept.id, typeConcept.id);
        return connections;
    });
}

;// CONCATENATED MODULE: ./src/Services/Common/DelayFunction.ts
/**
 *
 * @param ms The time required to wait before executing this function
 * @param callback This is the function that needs to be executed
 * @returns returns a promise for the resolve
 */
function DelayFunctionExecution(ms, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callback);
        }, ms);
    });
}

;// CONCATENATED MODULE: ./src/Constants/AccessConstants.ts
const ADMIN = 3;
const PRIVATE = 4;
const PUBLIC = 5;

;// CONCATENATED MODULE: ./src/Api/Search/SearchWithTypeAndLinker.ts
var Search_SearchWithTypeAndLinker_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function SearchWithTypeAndLinker_SearchWithTypeAndLinkerApi(searchStructure_1, searchQuery_1) {
    return Search_SearchWithTypeAndLinker_awaiter(this, arguments, void 0, function* (searchStructure, searchQuery, token = "") {
        let queryUrl = BaseUrl_BaseUrl.SearchAllTypeWithLinker(searchStructure.auth);
        var header = GetRequestHeaderWithAuthorization("application/json", token);
        queryUrl = queryUrl + '?search=' + searchStructure.search + '&type=' + searchStructure.type + '&inpage=' + searchStructure.inpage + '&page=' + searchStructure.page;
        const body = JSON.stringify(searchQuery);
        try {
            const response = yield fetch(queryUrl, {
                method: 'POST',
                headers: header,
                body: body
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                ErrorPosting_HandleHttpError(response);
                console.log("This is the searching multiple error", response.status);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the searching SearchWithTypeAndLinker error", ex);
            HandleInternalError(ex, queryUrl);
        }
    });
}

;// CONCATENATED MODULE: ./src/WrapperFunctions/DepenedencyObserver.ts
var DepenedencyObserver_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * This is the class that helps us observe anything that the function is doing
 * This wrapper will allow all the concepts and connections to be tracked inside of the called function
 * This function helps us manage state using the concept connection system.
 */
class DependencyObserver {
    constructor() {
        this.subscribers = []; // this is the list of subscribers that are added to this observer.
        this.mainConcept = 0;
        this.compositionIds = [];
        this.conceptIds = [];
        this.internalConnections = [];
        this.reverse = [];
        this.linkers = [];
        this.dependency = [];
        this.isDataLoaded = false; // checks to see if the data has been loaded to the widget/ function
        this.isUpdating = false; // this flag helps us check if the state is being updated while the connection updates.
        this.fetched = false;
        this.format = NORMAL;
    }
    /**
     * This function will be called when there is a need to listen to a certain type of concept that will update
     *  the ui.
     * @param id this is the type id which needs to be tracked
     */
    listenToEventType(id) {
        window.addEventListener(`${id}`, (event) => {
            if (!this.isUpdating) {
                this.isUpdating = true;
                let that = this;
                setTimeout(function () {
                    return DepenedencyObserver_awaiter(this, void 0, void 0, function* () {
                        let myEvent = event;
                        if (!that.compositionIds.includes(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail)) {
                            that.compositionIds.unshift(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail);
                            that.listenToEvent(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail);
                        }
                        that.isUpdating = false;
                        yield that.bind();
                        that.notify();
                    });
                }, 200);
            }
            else {
                console.log("rejected this");
            }
        });
    }
    /**
     * This is the of the concept id that needs to be listened . If this is called. All the connections that are
     * created with of the concepts id with this passed id then the event is fired.
     *
     * @param id Of the concept id that needs to be listened.
     */
    listenToEvent(id) {
        console.log('listening to id: ', id);
        window.addEventListener(`${id}`, (event) => {
            if (!this.isUpdating) {
                this.isUpdating = true;
                let that = this;
                setTimeout(function () {
                    return DepenedencyObserver_awaiter(this, void 0, void 0, function* () {
                        let newConnection = yield ConnectionData.GetConnectionByOfTheConceptAndType(id, id);
                        for (let i = 0; i < newConnection.length; i++) {
                            yield ConnectionData.GetConnection(newConnection[i]).then((conn) => {
                                if (conn.typeId == that.mainConcept) {
                                    if (!that.internalConnections.includes(conn.id)) {
                                        that.internalConnections.push(conn.id);
                                    }
                                }
                                else {
                                    if (!that.linkers.includes(conn.id)) {
                                        that.linkers.push(conn.id);
                                    }
                                }
                                if (!that.conceptIds.includes(conn.toTheConceptId)) {
                                    that.conceptIds.push(conn.toTheConceptId);
                                }
                                if (!that.compositionIds.includes(conn.ofTheConceptId)) {
                                    that.compositionIds.push(conn.ofTheConceptId);
                                }
                            });
                        }
                        that.isUpdating = false;
                        yield that.bind();
                        that.notify();
                    });
                }, 200);
            }
            else {
                console.log("rejected this");
            }
        });
    }
    /**
 * This is the of the concept id that needs to be listened . If this is called. All the connections that are
 * created with of the concepts id with this passed id then the event is fired.
 *
 * @param id Of the concept id that needs to be listened.
 */
    listenToEventConnectionType(id, connectionType) {
        window.addEventListener(`${id}`, (event) => {
            if (!this.isUpdating) {
                this.isUpdating = true;
                let that = this;
                setTimeout(function () {
                    return DepenedencyObserver_awaiter(this, void 0, void 0, function* () {
                        let newConnection = yield ConnectionData.GetConnectionByOfTheConceptAndType(id, id);
                        for (let i = 0; i < newConnection.length; i++) {
                            if (newConnection.typeId == connectionType) {
                                yield ConnectionData.GetConnection(newConnection[i]).then((conn) => {
                                    if (conn.typeId == that.mainConcept) {
                                        if (!that.internalConnections.includes(conn.id)) {
                                            that.internalConnections.push(conn.id);
                                        }
                                    }
                                    else {
                                        if (!that.linkers.includes(conn.id)) {
                                            that.linkers.push(conn.id);
                                        }
                                    }
                                    if (!that.conceptIds.includes(conn.toTheConceptId)) {
                                        that.conceptIds.push(conn.toTheConceptId);
                                    }
                                    if (!that.compositionIds.includes(conn.ofTheConceptId)) {
                                        that.compositionIds.push(conn.ofTheConceptId);
                                    }
                                });
                            }
                        }
                        that.isUpdating = false;
                        yield that.bind();
                        that.notify();
                    });
                }, 200);
            }
            else {
                console.log("rejected this");
            }
        });
    }
    /**
     * This function will bind the actual data to the widget or the function.
     */
    bind() {
        return DepenedencyObserver_awaiter(this, void 0, void 0, function* () {
            console.log("this is the old execute data");
        });
    }
    /**
     *
     * @param callback the function that needs to be called with the data.
     * @returns returns the callback with this data as the state.
     */
    subscribe(callback) {
        return DepenedencyObserver_awaiter(this, void 0, void 0, function* () {
            this.subscribers.push(callback);
            console.log('again executing data');
            yield this.bind();
            return callback(this.data);
        });
    }
    /**
     *
     * @param callback function that you need to remove from the subscribers list.
     * @returns
     */
    unsubscribe(callback) {
        this.subscribers.filter(fn => fn != callback);
        return this.subscribers.length;
    }
    /**
     * This function will call all the subscribers that are registered in this wrapper.
     */
    notify() {
        console.log('notifiers', this.subscribers);
        this.subscribers.map(subscriber => {
            console.log('notify');
            subscriber(this.data);
        });
    }
}

;// CONCATENATED MODULE: ./src/WrapperFunctions/SearchLinkMultipleAllObservable.ts
var SearchLinkMultipleAllObservable_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class SearchLinkMultipleAllObservable extends DependencyObserver {
    constructor(searchQuery, token, format = DATAID) {
        super();
        this.searchQuery = [];
        this.format = DATAID;
        this.searchQuery = searchQuery;
        this.format = format;
    }
    bind() {
        return SearchLinkMultipleAllObservable_awaiter(this, void 0, void 0, function* () {
            this.data = yield SearchLinkMultipleAll(this.searchQuery, "", this, this.format);
            this.mainConcept = this.searchQuery[0].composition;
            this.listenToEvent(this.mainConcept);
            console.log("this is the data", this.data);
            return this.data;
        });
    }
}
/**
 *
 * @param searchQueries Queries that need to be executed.
 * @param token token of the user.
 * @returns  returns the json format of the output.
 */
function searchLinkMultipleListener(searchQueries, token, format = DATAID) {
    return new SearchLinkMultipleAllObservable(searchQueries, token !== null && token !== void 0 ? token : "", format);
}

;// CONCATENATED MODULE: ./src/WrapperFunctions/GetCompositionObservable.ts
var GetCompositionObservable_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class GetCompositionObservable extends DependencyObserver {
    constructor(id, format = JUSTDATA) {
        super();
        this.id = id;
        this.format = format;
    }
    bind() {
        return GetCompositionObservable_awaiter(this, void 0, void 0, function* () {
            if (!this.isDataLoaded) {
                let conceptConnections = yield GetCompositionById(this.id);
                this.mainConcept = this.id;
                this.compositionIds = conceptConnections.compositionList;
                let internalConnections = conceptConnections.connectionList;
                for (let i = 0; i < internalConnections.length; i++) {
                    this.internalConnections.push(internalConnections[i].id);
                }
                this.isDataLoaded = true;
                this.listenToEvent(this.mainConcept);
            }
            return yield this.build();
        });
    }
    build() {
        return GetCompositionObservable_awaiter(this, void 0, void 0, function* () {
            let latestConnectionList = [];
            let latestConnectionIds = this.internalConnections;
            for (let i = 0; i < latestConnectionIds.length; i++) {
                latestConnectionList.push(yield ConnectionData.GetConnection(latestConnectionIds[i]));
            }
            if (this.format == JUSTDATA) {
                console.log("this is the data for the build layer", latestConnectionList, this.mainConcept, this.internalConnections, this.compositionIds);
                this.data = yield RecursiveFetchBuildLayer(this.mainConcept, latestConnectionList, this.compositionIds);
            }
            else if (this.format == DATAID) {
                this.data = yield RecursiveFetchBuildLayerDataId(this.mainConcept, latestConnectionList, this.compositionIds);
            }
            else if (this.format == NORMAL) {
                this.data = yield RecursiveFetchBuildLayerNormal(this.mainConcept, latestConnectionList, this.compositionIds);
            }
            else {
                this.data = yield RecursiveFetchBuildLayer(this.mainConcept, latestConnectionList, this.compositionIds);
            }
            return this.data;
        });
    }
}
/**
 *
 * @param id Id of the composition
 * @returns composition of the id given in the json form.
 */
function GetCompositionListener(id, format = JUSTDATA) {
    return new GetCompositionObservable(id, format);
}

;// CONCATENATED MODULE: ./src/WrapperFunctions/GetCompositionListObservable.ts
var GetCompositionListObservable_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This wrapper will wrap the listing function and then allow users to return the list.
 */
class GetCompositionListObservable extends DependencyObserver {
    constructor(compositionName, userId, inpage, page, format) {
        super();
        this.data = [];
        this.startPage = 0;
        this.compositionName = compositionName;
        this.userId = userId;
        this.inpage = inpage;
        this.page = page;
        this.format = format;
    }
    bind() {
        return GetCompositionListObservable_awaiter(this, void 0, void 0, function* () {
            if (!this.isDataLoaded) {
                console.log("again data loading mechanism");
                var concept = yield GetConceptByCharacter(this.compositionName);
                if (concept) {
                    yield GetAllConceptsByType(this.compositionName, this.userId);
                    console.log("getting the user data", concept.id, this.userId);
                    let conceptList = yield ConceptData_ConceptsData.GetConceptsByTypeIdAndUser(concept.id, this.userId);
                    console.log("this is the concept list", conceptList);
                    var startPage = this.inpage * (this.page - 1);
                    for (var i = startPage; i < startPage + this.inpage; i++) {
                        if (conceptList[i]) {
                            this.compositionIds.push(conceptList[i].id);
                        }
                    }
                }
                yield GetAllConnectionsOfCompositionBulk(this.compositionIds);
                this.isDataLoaded = true;
                this.listenToEventType(concept.id);
                for (let i = 0; i < this.compositionIds.length; i++) {
                    console.log("list listen", this.compositionIds[i]);
                    this.listenToEvent(this.compositionIds[i]);
                }
            }
            return yield this.build();
        });
    }
    build() {
        return GetCompositionListObservable_awaiter(this, void 0, void 0, function* () {
            this.data = [];
            console.log("this is building the data list");
            if (this.format == JUSTDATA) {
                for (let i = this.startPage; i < this.startPage + this.inpage; i++) {
                    if (this.compositionIds[i]) {
                        let compositionJson = yield GetCompositionFromMemory(this.compositionIds[i]);
                        this.data.push(compositionJson);
                    }
                }
            }
            else if (this.format == DATAID) {
                for (let i = this.startPage; i < this.startPage + this.inpage; i++) {
                    if (this.compositionIds[i]) {
                        let compositionJson = yield GetCompositionWithIdFromMemory(this.compositionIds[i]);
                        this.data.push(compositionJson);
                    }
                }
            }
            else if (this.format == NORMAL) {
                for (let i = this.startPage; i < this.startPage + this.inpage; i++) {
                    if (this.compositionIds[i]) {
                        let compositionJson = yield GetCompositionFromMemoryNormal(this.compositionIds[i]);
                        this.data.push(compositionJson);
                    }
                }
            }
            else {
                for (let i = this.startPage; i < this.startPage + this.inpage; i++) {
                    if (this.compositionIds[i]) {
                        let compositionJson = yield GetCompositionFromMemory(this.compositionIds[i]);
                        this.data.push(compositionJson);
                    }
                }
            }
            return this.data;
        });
    }
}
/**
 * This function will give you the list of the concepts by composition name with a listener to any data change.
 */
function GetCompositionListListener(compositionName, userId, inpage, page, format = JUSTDATA) {
    return new GetCompositionListObservable(compositionName, userId, inpage, page, format);
}

;// CONCATENATED MODULE: ./src/WrapperFunctions/GetLinkObservable.ts
var GetLinkObservable_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * This is a class that will give you the observable for the links from a certain concept.
 */
class GetLinkObservable extends DependencyObserver {
    /**
     *
     * @param id this is the id whose links need to be found
     * @param linker this is the type connection that is connected to the mainConcept(id)
     * @param inpage number of outputs that has to be displayed
     * @param page the page which needs to be displayed as per the inpage parameter
     * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
     */
    constructor(id, linker, inpage, page, format) {
        super();
        this.connections = [];
        this.data = [];
        this.mainConcept = id;
        this.linker = linker;
        this.inpage = inpage;
        this.page = page;
        this.format = format;
    }
    bind() {
        return GetLinkObservable_awaiter(this, void 0, void 0, function* () {
            var _a;
            if (!this.isDataLoaded) {
                let concept = yield GetTheConcept(this.mainConcept);
                let linkString = ((_a = concept.type) === null || _a === void 0 ? void 0 : _a.characterValue) + "_s" + "_" + this.linker;
                let relatedConceptString = yield GetConceptByCharacterAndType(linkString, 16);
                let relatedConcept = relatedConceptString;
                if (relatedConcept.id > 0) {
                    let connectionsString = yield GetConnectionOfTheConcept(relatedConcept.id, concept.id, concept.userId, this.inpage, this.page);
                    this.connections = connectionsString;
                    var prefetch = [];
                    for (var i = 0; i < this.connections.length; i++) {
                        prefetch.push(this.connections[i].toTheConceptId);
                        this.linkers.push(this.connections[i].id);
                        this.listenToEvent(this.connections[i].toTheConceptId);
                    }
                    // await GetAllConnectionsOfCompositionBulk(prefetch);
                    yield GetAllConnectionsOfCompositionBulk(prefetch);
                }
                this.isDataLoaded = true;
                this.listenToEvent(this.mainConcept);
            }
            return yield this.build();
        });
    }
    build() {
        return GetLinkObservable_awaiter(this, void 0, void 0, function* () {
            this.data = [];
            this.connections = yield GetConnectionBulk(this.linkers);
            for (var i = 0; i < this.connections.length; i++) {
                let toConceptId = this.connections[i].toTheConceptId;
                let toConcept = yield GetTheConcept(toConceptId);
                console.log("this is the format", this.format);
                if (this.format == NORMAL) {
                    let newComposition = yield GetCompositionWithIdFromMemory(toConcept.id);
                    this.data.push(newComposition);
                }
                else if (this.format == JUSTDATA) {
                    let newComposition = yield GetCompositionFromMemory(toConcept.id);
                    this.data.push(newComposition);
                }
                else if (this.format == DATAIDDATE) {
                    let newComposition = yield GetCompositionWithIdAndDateFromMemory(toConcept.id);
                    this.data.push(newComposition);
                }
                else {
                    let newComposition = yield GetCompositionWithIdAndDateFromMemory(toConcept.id);
                    this.data.push(newComposition);
                }
            }
            return this.data;
        });
    }
}
// class GetLinkServiceObservable
// {
//     mainConcept: number
//     linker:string;
//     inpage: number;
//     page: number;
//     format: number = NORMAL;
//     connections: Connection[] = [];
//     data: any = [];
//     subscribers: any[] = []
//     /**
//      * 
//      * @param id this is the id whose links need to be found
//      * @param linker this is the type connection that is connected to the mainConcept(id)
//      * @param inpage number of outputs that has to be displayed
//      * @param page the page which needs to be displayed as per the inpage parameter
//      * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
//      */
//     constructor(id: number, linker:string, inpage: number, page: number, format: number){
//         this.mainConcept = id;
//         this.linker = linker;
//         this.inpage = inpage;
//         this.page = page;
//         this.format = format;
//     }
//     async subscribe(callback: Function) {
//         this.subscribers.push(callback);
//         const listenerId = Date.now() + '-' + Math.floor(Math.random() * 99999999)
//         const listener = {
//             listenerId: listenerId,
//             callback: callback,
//             createdAt: Date.now()
//         }
//         subscribedListeners.push(listener)
//         console.log('listener', serviceWorker)
//         // const res: any = await sendMessage('GetLinkListener', {id: this.mainConcept, linker: this.linker, inpage: this.inpage, page: this.page, format: this.format, listener })
//         const res: any = await sendMessage('GetLinkListener', {id: this.mainConcept, linker: this.linker, inpage: this.inpage, page: this.page, format: this.format, listener: {
//             listenerId: listenerId,
//             createdAt: Date.now()
//         } })
//         return callback(res.data);
//     }
// }
/**
 *
 * @param id this is the id whose links need to be found
 * @param linker this is the type connection that is connected to the mainConcept(id)
 * @param inpage number of outputs that has to be displayed
 * @param page the page which needs to be displayed as per the inpage parameter
 * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
 */
function GetLinkListener(id, linker, inpage, page, format = NORMAL) {
    return new GetLinkObservable(id, linker, inpage, page, format);
    // console.log("serviceworker", serviceWorker);
    // if (serviceWorker) {
    //   return new GetLinkServiceObservable(id, linker, inpage, page, format);
    // } else return new GetLinkObservable(id, linker, inpage, page, format);
}

;// CONCATENATED MODULE: ./src/WrapperFunctions/RecursiveSearchObservable.ts
var RecursiveSearchObservable_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class RecursiveSearchObservable extends DependencyObserver {
    /**
     *
     * @param id this is the id whose links need to be found
     * @param linker this is the type connection that is connected to the mainConcept(id)
     * @param inpage number of outputs that has to be displayed
     * @param page the page which needs to be displayed as per the inpage parameter
     * @param format the format in which the output should be displayed (RAW, undefined)
     */
    constructor(id, linkers, textSearch = "", format) {
        super();
        this.searchText = "";
        this.connections = [];
        this.externalConnectionIds = [];
        this.data = [];
        this.mainConcept = id;
        this.searchLinkers = linkers;
        this.textSearch = textSearch;
        if (format)
            this.format = format;
    }
    /**
     * This is the of the concept id that needs to be listened . If this is called. All the connections that are
     * created with of the concepts id with this passed id then the event is fired.
     *
     * @param id Of the concept id that needs to be listened.
     */
    listenToEvent(id) {
        console.log("listening to id: ", id);
        window.addEventListener(`${id}`, (event) => {
            console.log("this is listening after the event is fired", id, event);
            if (!this.isUpdating) {
                this.isUpdating = true;
                let that = this;
                setTimeout(function () {
                    return RecursiveSearchObservable_awaiter(this, void 0, void 0, function* () {
                        let newConnection = yield ConnectionData.GetConnectionByOfTheConceptAndType(id, id);
                        for (let i = 0; i < newConnection.length; i++) {
                            yield ConnectionData.GetConnection(newConnection[i]).then((conn) => {
                                if (conn.typeId == that.mainConcept) {
                                    if (!that.internalConnections.includes(conn.id)) {
                                        that.internalConnections.push(conn.id);
                                    }
                                }
                                else {
                                    if (!that.linkers.includes(conn.id)) {
                                        that.linkers.push(conn.id);
                                    }
                                }
                                if (!that.conceptIds.includes(conn.toTheConceptId)) {
                                    that.conceptIds.push(conn.toTheConceptId);
                                }
                                // compositions
                                if (!that.compositionIds.includes(conn.ofTheConceptId)) {
                                    that.compositionIds.push(conn.ofTheConceptId);
                                }
                                if (!that.compositionIds.includes(conn.toTheConceptId)) {
                                    that.compositionIds.push(conn.toTheConceptId);
                                }
                            });
                        }
                        that.isUpdating = false;
                        yield that.bind();
                        that.notify();
                    });
                }, 200);
            }
            else {
                console.log("rejected this");
            }
        });
    }
    bind() {
        return RecursiveSearchObservable_awaiter(this, void 0, void 0, function* () {
            if (!this.isDataLoaded) {
                this.isDataLoaded = true;
                const result = yield RecursiveSearchApiRaw(this.mainConcept, this.searchLinkers, this.textSearch);
                this.compositionIds = result.compositionIds || [];
                this.internalConnections = result.internalConnections || [];
                this.externalConnectionIds = result.externalConnections || [];
                this.linkers = this.externalConnectionIds;
                // const internalConnections = await GetConnectionBulk(
                //   this.internalConnections
                // );
                this.connections = yield GetConnectionBulk(this.externalConnectionIds);
                var prefetch = [];
                // listen external connection
                // for (var i = 0; i < this.connections.length; i++) {
                //   prefetch.push(this.connections[i].toTheConceptId);
                //    this.listenToEvent(this.connections[i].toTheConceptId);
                // }
                // listen internal connection
                // for (var i = 0; i < this.internalConnections.length; i++) {
                //   //prefetch.push(internalConnections[i].toTheConceptId);
                //    this.listenToEvent(this.internalConnections[i]);
                // }
                for (let i = 0; i < this.compositionIds.length; i++) {
                    this.listenToEvent(this.compositionIds[i]);
                }
                //await GetAllConnectionsOfCompositionBulk(prefetch);
                this.listenToEvent(this.mainConcept);
            }
            return yield this.build();
        });
    }
    build() {
        return RecursiveSearchObservable_awaiter(this, void 0, void 0, function* () {
            this.externalConnectionIds = this.linkers;
            if (this.format && this.format == RAW) {
                this.data = {
                    compositionIds: this.compositionIds,
                    internalConnections: this.internalConnections,
                    externalConnections: this.externalConnectionIds,
                };
            }
            else {
                this.data = yield GetCompositionFromConnectionsWithDataId(this.compositionIds, this.internalConnections);
            }
            return this.data;
        });
    }
}
/**
 * Method to listen the changes in recursive search data
 * @param id this is the id whose links need to be found
 * @param linker this is the type connection that is connected to the mainConcept(id)
 * @param inpage number of outputs that has to be displayed
 * @param page the page which needs to be displayed as per the inpage parameter
 * @param format the format in which the output should be displayed (RAW, undefined)
 */
function RecursiveSearchListener(id, linkers, searchText = "", format) {
    return new RecursiveSearchObservable(id, linkers, searchText, format);
}

;// CONCATENATED MODULE: ./src/WrapperFunctions/GetLinkListObservable.ts
var GetLinkListObservable_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class GetLinkListObservable extends DependencyObserver {
    constructor(searchStructure, searchQuery, token, format = DATAID) {
        super();
        this.searchQuery = [];
        this.format = DATAID;
        this.mainCompositionIds = [];
        this.searchCharacter = "";
        this.token = "";
        this.searchStructure = searchStructure;
        this.searchQuery = searchQuery;
        this.searchQuery[0].type = searchStructure.composition;
        this.searchCharacter = searchStructure.composition;
        this.format = format;
        this.token = TokenStorage.BearerAccessToken;
    }
    /**
 * This function will be called when there is a need to listen to a certain type of concept that will update
 *  the ui.
 * @param id this is the type id which needs to be tracked
 */
    listenToEventType(id) {
        window.addEventListener(`${id}`, (event) => {
            if (!this.isUpdating) {
                this.isUpdating = true;
                let that = this;
                setTimeout(function () {
                    return GetLinkListObservable_awaiter(this, void 0, void 0, function* () {
                        let myEvent = event;
                        if (!that.mainCompositionIds.includes(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail)) {
                            that.mainCompositionIds.unshift(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail);
                            that.conceptIds.push(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail);
                            that.listenToEvent(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail);
                            ConnectionData.GetConnectionsOfConcept(myEvent === null || myEvent === void 0 ? void 0 : myEvent.detail).then((connectionList) => {
                                for (let i = 0; i < connectionList.length; i++) {
                                    that.linkers.push(connectionList[i].id);
                                }
                            });
                        }
                        that.isUpdating = false;
                        yield that.bind();
                        that.notify();
                    });
                }, 200);
            }
            else {
                console.log("rejected this");
            }
        });
    }
    bind() {
        return GetLinkListObservable_awaiter(this, void 0, void 0, function* () {
            if (!this.isDataLoaded) {
                this.isDataLoaded = true;
                var concept = yield GetConceptByCharacter(this.searchCharacter);
                let result = yield SearchWithTypeAndLinker_SearchWithTypeAndLinkerApi(this.searchStructure, this.searchQuery, this.token);
                this.conceptIds = result.compositionIds;
                this.internalConnections = result.internalConnections;
                this.linkers = result.linkers;
                this.reverse = result.reverse;
                this.mainCompositionIds = result.mainCompositionIds;
                this.listenToEventType(concept.id);
                for (let i = 0; i < this.mainCompositionIds.length; i++) {
                    this.listenToEvent(this.mainCompositionIds[i]);
                }
            }
            return yield this.build();
        });
    }
    build() {
        return GetLinkListObservable_awaiter(this, void 0, void 0, function* () {
            yield GetConceptBulk(this.conceptIds);
            if (this.format == DATAID) {
                this.data = yield formatDataArrayDataId(this.linkers, this.conceptIds, this.internalConnections, this.mainCompositionIds, this.reverse);
            }
            else {
                this.data = yield formatDataArrayNormal(this.linkers, this.conceptIds, this.internalConnections, this.mainCompositionIds, this.reverse);
            }
            return this.data;
        });
    }
}
/**
 *
 * @param id this is the id whose links need to be found
 * @param linker this is the type connection that is connected to the mainConcept(id)
 * @param inpage number of outputs that has to be displayed
 * @param page the page which needs to be displayed as per the inpage parameter
 * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
 */
function GetLinkListListener(searchStructure, searchQuery, token, format = DATAID) {
    return new GetLinkListObservable(searchStructure, searchQuery, token, format);
}

;// CONCATENATED MODULE: ./src/DataStructures/Local/LConcept.ts

class LConcept {
    constructor(id, userId, typeId, categoryId, accessId, characterValue, typeCharacter, isNew = false, entryTimeStamp, updatedTimeStamp, referentId) {
        this.structureType = "lconcept";
        this.isComposition = false;
        this.isTemp = false;
        this.isSynced = false;
        // applicationId: number = BaseUrl.BASE_RANDOMIZER;
        this.applicationId = BaseUrl_BaseUrl.getRandomizer();
        this.id = id;
        this.userId = userId;
        this.typeId = typeId;
        this.ghostId = id;
        this.categoryId = categoryId;
        this.characterValue = characterValue;
        this.accessId = accessId;
        this.type = null;
        this.isNew = isNew;
        this.typeCharacter = typeCharacter;
        this.entryTimeStamp = entryTimeStamp;
        this.updatedTimeStamp = updatedTimeStamp;
        this.isSynced = false;
        this.referentId = referentId;
        // ConceptsData.AddConcept(this);
    }
    getType() {
        console.log(this.typeId);
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/Local/LConnection.ts


class LConnection {
    constructor(id, ofTheConceptId, toTheConceptId, typeId, orderId, accessId) {
        this.isTemp = false;
        // applicationId: number = BaseUrl.BASE_RANDOMIZER;
        this.applicationId = BaseUrl_BaseUrl.getRandomizer();
        this.type = CreateDefaultConcept_CreateDefaultConcept();
        this.id = id;
        this.ofTheConceptId = ofTheConceptId;
        this.toTheConceptId = toTheConceptId;
        this.typeId = typeId;
        this.ghostId = id;
        this.orderId = orderId;
        this.typeCharacter = "";
        this.accessId = accessId;
        this.typeCharacter = "";
        this.entryTimeStamp = new Date();
        this.terminationDateTime = new Date();
        this.localSyncTime = new Date();
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/PatcherStructure.ts
class PatcherStructure {
    constructor() {
        this.compositionId = 0;
        this.userId = 999;
        this.sessionId = 999;
        this.accessId = 4;
        this.ofTheCompositionId = 0;
        this.patchObject = {};
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/Session/SessionData.ts
class SessionData {
    constructor() {
        this.id = "0";
        this.remote_address = "";
        this.server_port = "";
        this.server_address = "";
        this.server_name = "";
        this.server_software = "";
        this.http_user_agent = "";
        this.self = "";
        this.port = "";
        this.userId = "";
        this.email = "";
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/FilterSearch.ts
class FilterSearch {
    constructor() {
        this.type = "";
        this.search = "";
        this.logicoperator = "=";
        this.index = 0;
        this.composition = true;
        this.name = "";
        this.operateon = "";
    }
}

;// CONCATENATED MODULE: ./src/DataStructures/Search/SearchStructure.ts
class SearchStructure {
    constructor() {
        this.type = "";
        this.search = "";
        this.composition = "";
        this.internalComposition = "";
        this.userId = 999;
        this.inpage = 10;
        this.page = 1;
        this.auth = true;
    }
}

;// CONCATENATED MODULE: ./src/Services/GetDataFromIndexDb.ts
var GetDataFromIndexDb_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function GetConnectionsFromIndexDb() {
    return GetDataFromIndexDb_awaiter(this, void 0, void 0, function* () {
        try {
            let connectionList = yield getObjectsFromIndexDb("connection");
            if (Array.isArray(connectionList)) {
                for (let i = 0; i < connectionList.length; i++) {
                    ConnectionData.AddConnectionToMemory(connectionList[i]);
                }
            }
        }
        catch (error) {
            let errorObject = {
                "message": "Cannot create Connection Binary Tree Concept",
                "ok": false,
                "status": 400,
                "data": error
            };
            throw errorObject;
        }
    });
}
function GetConnectionsFromIndexDbLocal() {
    return GetDataFromIndexDb_awaiter(this, void 0, void 0, function* () {
        try {
            let connectionList = yield getObjectsFromLocalIndexDb("localconnection");
            if (Array.isArray(connectionList)) {
                for (let i = 0; i < connectionList.length; i++) {
                    LocalConnectionData.AddConnectionToMemory(connectionList[i]);
                }
            }
        }
        catch (error) {
            let errorObject = {
                "message": "Cannot create Local Connection Binary Tree Concept",
                "ok": false,
                "status": 400,
                "data": error
            };
            throw errorObject;
        }
    });
}

;// CONCATENATED MODULE: ./src/Api/GetAiData.ts
var GetAiData_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function GetAiData() {
    return GetAiData_awaiter(this, void 0, void 0, function* () {
        try {
            const start = new Date().getTime();
            var header = GetRequestHeaderWithAuthorization('application/x-www-form-urlencoded');
            const response = yield fetch(BaseUrl_BaseUrl.GetAllAiData(), {
                method: 'GET',
                headers: header,
            });
            if (!response.ok) {
                console.log('Ai Error Message: ', "Cannot get response");
                ErrorPosting_HandleHttpError(response);
            }
            const result = yield response.json();
            for (var i = 0; i < result.length; i++) {
                ConceptData_ConceptsData.AddConcept(result[i]);
            }
            PurgatoryDatabaseUpdated();
            let elapsed = new Date().getTime() - start;
            console.log("The time taken is ", elapsed);
        }
        catch (error) {
            if (error instanceof Error) {
                console.log('Ai Error Message: ', error.message);
            }
            else {
                console.log('Ai Error Message: ', error);
            }
            HandleInternalError(error, BaseUrl_BaseUrl.GetAllAiData());
        }
    });
}

;// CONCATENATED MODULE: ./src/DataStructures/Settings.ts
class Settings {
}
Settings.isUpdated = false;
Settings.isOnlineSync = false;

;// CONCATENATED MODULE: ./src/Services/InitializeSystem.ts
var InitializeSystem_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function InitializeSystem() {
    return InitializeSystem_awaiter(this, arguments, void 0, function* (enableAi = true) {
        try {
            yield openDatabase("concepts");
            yield indexdblocal_openDatabase("concepts");
            if (enableAi) {
                var statsData = yield GetLastSettingsFromDatabase();
                var settings = statsData;
                if (settings.isOnlineSync) {
                    return true;
                }
                yield GetAiData();
            }
            return true;
        }
        catch (error) {
            let errorObject = {
                "message": "cannot initlize the AI system",
                "ok": false,
                "status": 400,
                "data": error
            };
            console.log(errorObject);
            return true;
        }
    });
}
function PurgatoryDatabaseUpdated() {
    return InitializeSystem_awaiter(this, void 0, void 0, function* () {
        Settings.isOnlineSync = true;
        var settingData = new SettingData_SettingData(Settings.isOnlineSync);
        AiUpdateFlag(settingData);
    });
}

;// CONCATENATED MODULE: ./src/Constants/general.const.ts
const channelName = 'Freeschema_mftsccs_browser_channel';
const broadcastChannel = new BroadcastChannel(channelName);

;// CONCATENATED MODULE: ./src/Validator/constant.ts
// Data Type Constants
const DATA_TYPES_RULES = {
    number: /^\d+(\.\d+)?$/, // Matches integers or decimals
    text: /^[\s\S]*$/, // Matches any text
    textOnly: /^[A-Za-z\s]+$/, // Matches only letters and spaces, no numbers or special characters
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Matches email
    document: /\.(pdf|docx?|pptx?|xlsx?)$/i, // Matches common document file extensions
    sound: /\.(mp3|wav|ogg|flac)$/i, // Matches common sound file extensions
    image: /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i, // Matches common image file extensions
    video: /\.(mp4|avi|mov|mkv|flv|webm)$/i, // Matches common video file extensions
    url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/, // Matches standard URL format
    date: /^\d{4}-\d{2}-\d{2}$/, // Matches dates in the format YYYY-MM-DD
    time: /^(?:[01]\d|2[0-3]):[0-5]\d$/, // Matches 24-hour format times, HH:MM
    password: /^.{6,}$/, // Matches passwords with at least 6 characters; you can customize as needed
    ipaddress: /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4})$/, // Matches IPv4 or IPv6 formats
    uuid: /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/, // Matches UUID format
};

;// CONCATENATED MODULE: ./src/Validator/validator.ts
var validator_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class Validator {
    /**
     * Checks if a concept with the given type and value is unique.
     * @param type concept type where to check
     * @param value value to check
     * @returns boolean indicating uniqueness
     */
    checkUniqueness(type, value) {
        return validator_awaiter(this, void 0, void 0, function* () {
            // Ensure 'the_' is at the start of the type
            if (!type.startsWith('the_')) {
                type = 'the_' + type;
            }
            const sessionId = 999;
            const sessionUserId = 999;
            const userId = 999;
            // Create the type concept based on session data
            let type_concept = yield MakeTheTypeConcept(type, sessionId, sessionUserId, userId);
            let type_concept_id = type_concept.id;
            // Check if the concept exists for the provided value and type_concept_id
            let concept = yield GetConceptByCharacterAndType(value, type_concept_id);
            if (!concept || !concept.id) {
                return true;
            }
            return false;
        });
    }
    /**
     * Validates a single form field based on its data type, constraints, and uniqueness.
     * @param fieldName - The name of the field being validated (e.g., "email", "phone").
     * @param dataType - The expected data type for the field (e.g., "text", "number").
     * @param value - The value of the field to validate.
     * @param conceptType - The concept type used for uniqueness check.
     * @param maxLength - The maximum allowed length for the field value.
     * @param minLength - The minimum allowed length for the field value.
     * @param minValue - The minimum allowed value for the field (for numeric fields).
     * @param maxValue - The maximum allowed value for the field (for numeric fields).
     * @param accept - The 'accept' attribute value for file inputs.
     * @param file - The file input (if any), used for file type validation.
     * @param required - Whether the field is required.
     * @param isUnique - Whether the field value should be unique.
     * @returns An object of error messages if validation fails
     */
    validateField(fieldName_1, fieldType_1, dataType_1, value_1, pattern_1, conceptType_1, maxLength_1, minLength_1, minValue_1, maxValue_1, accept_1, file_1, required_1) {
        return validator_awaiter(this, arguments, void 0, function* (fieldName, fieldType, dataType, value, pattern, conceptType, maxLength, minLength, minValue, maxValue, accept, file, required, isUnique = false) {
            var _a;
            const errors = {};
            // 1. Validate required field (must not be empty)
            if (required && (value === null || value === '')) {
                errors['required'] = `This is required field`;
            }
            // 2. Validate using regex pattern for the data type
            if (dataType && value) {
                let pattern = DATA_TYPES_RULES[dataType];
                if (pattern && value !== '' && !pattern.test(value)) {
                    errors['dataType'] = `Invalid value for ${dataType}`;
                }
            }
            // 3. Check if the provided pattern match with the value or not
            if (pattern && value) {
                const regex = typeof pattern === 'string' ? new RegExp(pattern) : pattern;
                if (value !== '' && !regex.test(value)) {
                    errors['pattern'] = `Pattern doesn't match with value`;
                }
            }
            // 4. Validate maxLength
            if (value && maxLength !== null && value.length > maxLength) {
                errors['maxLength'] = `Length exceeds the maximum length of ${maxLength}`;
            }
            // 5. Validate minLength
            if (value && minLength !== null && value.length < minLength) {
                errors['minLength'] = `Length must be at least ${minLength} characters long`;
            }
            // 6. Validate minValue (only for numeric fields)
            if (minValue !== null && value && !isNaN(Number(value)) && Number(value) < minValue) {
                errors['minValue'] = `Value must be greater than or equal to ${minValue}`;
            }
            // 7. Validate maxValue (only for numeric fields)
            if (maxValue !== null && value && !isNaN(Number(value)) && Number(value) > maxValue) {
                errors['maxValue'] = `Value must be less than or equal to ${maxValue}`;
            }
            // 8. File validation: Check if this is a file input
            if (file) {
                if (fieldType && accept) {
                    const acceptedTypes = accept.split(',').map(type => type.trim().toLowerCase());
                    const fileExtension = (_a = file.name.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                    if (fileExtension && !acceptedTypes.includes(fileExtension)) {
                        errors['accept'] = `File must be a valid file type: ${acceptedTypes.join(', ')}`;
                    }
                }
            }
            // 9. Check if the field needs to be unique and perform uniqueness validation
            if (conceptType && isUnique && value) {
                const isUniqueValue = yield this.checkUniqueness(conceptType, value);
                if (!isUniqueValue) {
                    errors['unique'] = `Value is not unique`;
                }
            }
            return errors;
        });
    }
    /**
     * Validates all form fields by iterating over the provided form data.
     * It checks each field's value, data type, and constraints, collecting errors where necessary.
     *
     * @param formData - An object representing the form data, where each key is a field name
     *                   and each value is an object containing the `value`, `dataType`, and constraints (e.g., `maxLength`, `minLength`).
     *
     * @returns An object containing validation errors for fields that failed validation.
     *          If no errors exist, the object will be empty.
     */
    validateForm(formData) {
        return validator_awaiter(this, void 0, void 0, function* () {
            const validationErrors = {};
            // Iterate through the fields in the form data
            for (const fieldName in formData) {
                const { value, fieldType, dataType, pattern, conceptType, maxLength = null, minLength = null, minValue = null, maxValue = null, accept = null, file = null, required, isUnique } = formData[fieldName];
                // Call the validateField function to validate each field
                const fieldErrors = yield this.validateField(fieldName, fieldType, dataType, value, pattern, conceptType, maxLength, minLength, minValue, maxValue, accept, file, required, isUnique);
                if (Object.keys(fieldErrors).length > 0)
                    validationErrors[fieldName] = fieldErrors;
            }
            return validationErrors;
        });
    }
}

;// CONCATENATED MODULE: ./src/Validator/utils.ts
/**
 * Utility function to get input field data and attributes
 * @param fieldName - The Name of the form field.
 * @returns - An object containing the field's value and constraints (type, maxLength, etc.).
 */
const createFormFieldData = (fieldName) => {
    var _a;
    const inputElements = document.getElementsByName(fieldName);
    const inputElement = inputElements[0];
    // Check if the element exists
    if (!inputElement) {
        console.warn(`Element with NAME "${fieldName}" not found.`);
        return {
            value: null,
            fieldType: null,
            dataType: null,
            pattern: null,
            conceptType: null,
            maxLength: null,
            minLength: null,
            minValue: null,
            maxValue: null,
            accept: null,
            file: null,
            required: false,
            isUnique: true
        };
    }
    // Check for the `required` and `isUnique` attribute
    const required = inputElement.hasAttribute('required') || inputElement.getAttribute('data-required') === 'true';
    const isUnique = inputElement.hasAttribute('isUnique') && inputElement.getAttribute('isUnique') === 'true';
    // Proceed to gather data if the element exists
    const data = {
        value: inputElement.value,
        fieldType: inputElement.type,
        dataType: inputElement.getAttribute('data-type'),
        pattern: inputElement.getAttribute('data-pattern'),
        conceptType: inputElement.getAttribute('concept-type'),
        maxLength: inputElement.getAttribute('data-maxlength') ? parseInt(inputElement.getAttribute('data-maxlength')) : null,
        minLength: inputElement.getAttribute('data-minlength') ? parseInt(inputElement.getAttribute('data-minlength')) : null,
        minValue: inputElement.getAttribute('data-min') ? parseInt(inputElement.getAttribute('data-min')) : null,
        maxValue: inputElement.getAttribute('data-max') ? parseInt(inputElement.getAttribute('data-max')) : null,
        accept: inputElement.getAttribute('accept') || null,
        file: inputElement.type === 'file' ? ((_a = inputElement.files) === null || _a === void 0 ? void 0 : _a[0]) || null : null,
        required: required,
        isUnique: isUnique
    };
    return data;
};

;// CONCATENATED MODULE: ./src/Widgets/BaseObserver.ts
class BaseObserver {
    constructor() {
        /**
         * This is the subscribers of the data. If any thing on this widget changes then all the functions
         * in the subscribers are called.
         */
        this.subscribers = [];
    }
    /**
    * This is called by any data change. So that any data change will notify all the callback functions to execute.
    */
    notify() {
        this.subscribers.map((subscriber) => {
            subscriber(this.data);
        });
    }
    /**
     * This function is used to register the callback into the function in case of any dataChange.
     * @param callback sets this callback to the subscribers list in the widget. So that in any change we can call this callback
     * @returns execution of the callback passed.
     */
    dataChange(callback) {
        this.subscribers.push(callback);
        return callback(this.data);
    }
}

;// CONCATENATED MODULE: ./src/Widgets/BaseWidget.ts

class BaseWidget extends BaseObserver {
    constructor() {
        super(...arguments);
        /**
         * This is a random identifier to the widget that is used to identify the widget and other elements
         * inside of it.
         */
        this.elementIdentifier = 0;
        /**
         * This flag is set to denote that that widget has been mounted
         */
        this.widgetMounted = false;
    }
    getComponent() {
        let component = document.getElementById(this.elementIdentifier.toString());
        return component;
    }
    getElementById(identifier) {
        let element = this.getComponent();
        let selectedElement = document.body;
        if (element) {
            let myelement = element.querySelector('#' + identifier);
            if (myelement) {
                selectedElement = myelement;
                return selectedElement;
            }
        }
        return null;
    }
    /**
     *
     * @returns random number that will be used to put into the main widget div so that we can uniqely identify
     * the widget and its children from others.
     */
    createWidgetWrapperIdentifier() {
        this.elementIdentifier = Math.random() * 10000;
        return this.elementIdentifier.toString();
    }
}

;// CONCATENATED MODULE: ./src/Widgets/StatefulWidget.ts
var StatefulWidget_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Implementation of a widget system. If you need to create a widget that is compatible with the concept connection
 * system them extend this class and populate the functions such as getHtml() and widgetDidMount()
 */
class StatefulWidget extends BaseWidget {
    constructor() {
        super(...arguments);
        /**
         * These are the child widgets that need to be added to  this widget
         */
        this.childWidgets = [];
        /**
         * This is the id of the parentElement of this widget.
         */
        this.parentElement = "";
        /**
         * This is the element that is a copy of the element that is mounted.
         */
        this.element = null;
    }
    setTitle(title) {
        document.title = title;
    }
    /**
     *
     * @returns the html string that needs to be mounted to the DOM.
     */
    getHtml() {
        return '';
    }
    /**
     * This will help us update the data of the child widget. This will also call another function inside of the child widget
     * called udpateWidget which the user can call after some data is udpated.
     * @param value
     * @param widget
     */
    UpdateChildData(value, widget) {
        let passedWidget = widget;
        passedWidget.data = value;
        passedWidget.render();
        passedWidget.updateWidget();
    }
    /**
     * This is called after the data has been udpated by some other component.
     */
    updateWidget() { }
    /**
     *
     * @param newState
     */
    setState(newState) {
        this.data = newState;
        this.notify();
        this.render();
    }
    /**
     * If any child widgets are registered in the widget. Then without any other changes to the contents and state
     * this loadChildWidgets will be called which will help the child widgets be rendered to their respective positions.
     */
    loadChildWidgets() {
        this.childWidgets.map((child) => {
            let widget = this.getElementById(child.parentElement);
            if (widget) {
                widget.innerHTML = "";
            }
            child.mount(widget);
        });
    }
    /**
     * This is the main function that adds the html of the component to the element.
     * The element is the mounted widget
     */
    render() {
        if (this.element) {
            this.element.innerHTML = this.getHtml();
        }
        // addEvents is called after the element has been mounted.
        this.addEvents();
        // then after the child widgets are again loaded.
        if (this.widgetMounted) {
            this.loadChildWidgets();
        }
    }
    /**
     * This is the function that needs to be called.
     */
    mountChildWidgets() {
    }
    /**
     *
     * @param parent This is the function that creates a new div and then mounts the html element to the parent.
     */
    mount(parent) {
        return StatefulWidget_awaiter(this, void 0, void 0, function* () {
            if (parent) {
                // create a div to wrap everything inside of it.
                this.element = document.createElement("div");
                // assign an identifier to the element so that it does not conflict with others.
                this.element.id = this.createWidgetWrapperIdentifier();
                // then assign the html to the element.
                this.element.innerHTML = yield this.getHtml();
                // mount the div with unique identifier to the parent element.
                parent.appendChild(this.element);
                // also save in the widget its parent identifier.
                this.parentElement = parent.id;
                // if the widget has not been mounted.
                if (this.widgetMounted == false) {
                    // then after the widget has been mounted for the first time call this function
                    // user can update this function as per their requirement 
                    //this will mostly be used to bind data / call data 
                    this.widgetDidMount();
                    // since this is the first time the widget is being created. then all the child widgets are being mounted 
                    // as well here.
                    this.mountChildWidgets();
                    // after the widget has been mounted for the first time then the widget has been updated.
                    this.widgetMounted = true;
                }
                else {
                    // if the widget has already been mounted before then only render the new widget
                    this.render();
                }
            }
        });
    }
    /**
     * This function will be called after the component mounts.
     */
    widgetDidMount() {
        this.render();
    }
    /**
     * This is called after the render function has been called. So this is used for the user functions to be added
     * for the widget and its html element. User can add any logic here.
     */
    addEvents() {
    }
}

;// CONCATENATED MODULE: ./src/Services/DeleteConnectionByType.ts
var DeleteConnectionByType_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function DeleteConnectionByType(id, linker) {
    return DeleteConnectionByType_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            const res = yield sendMessage('DeleteConnectionByType', { id, linker });
            console.log('data received from sw', res);
            return res.data;
        }
        let externalConnections = yield GetAllLinkerConnectionsFromTheConcept(id);
        for (let i = 0; i < externalConnections.length; i++) {
            ConnectionData.AddConnection(externalConnections[i]);
        }
        let connections = yield ConnectionData.GetConnectionsOfConcept(id);
        let concept = yield GetConceptByCharacter(linker);
        let toDelete = [];
        for (let i = 0; i < connections.length; i++) {
            if (connections[i].typeId == concept.id) {
                toDelete.push(connections[i]);
            }
        }
        for (let i = 0; i < toDelete.length; i++) {
            DeleteConnectionById(toDelete[i].id);
        }
    });
}

;// CONCATENATED MODULE: ./src/Anomaly/anomaly.ts
var anomaly_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Class representing the Anomaly detection logic for checking data validity based on predefined rules.
 * This class contains methods for initializing, caching, and fetching anomaly parameters from an external API,
 * as well as checking for anomalies in individual concepts and bulk data.
 */
class Anomaly {
    /**
     * Constructor that initializes anomaly parameters if the cache is not yet initialized.
     * It ensures that the anomaly parameters are loaded and cached for use.
     */
    constructor() {
        if (!Anomaly.cacheInitialized) {
            Anomaly.initializeAnomalyParameters();
        }
    }
    /**
     * Initializes the anomaly parameters by fetching them from the API.
     * This method is only run once on startup to ensure the cache is ready for use.
     * It will fetch the parameters from the API and store them in a static cache.
     *
     * @returns {Promise<void>} - A promise that resolves once the parameters have been initialized.
     */
    static initializeAnomalyParameters() {
        return anomaly_awaiter(this, void 0, void 0, function* () {
            try {
                // Fetch anomaly parameters once on startup
                const anomalyData = yield Anomaly.getAnomalyParameters();
                // console.log('Anomaly parameters initialized:', anomalyData);
                // Refresh the cache to ensure it's up-to-date
                Anomaly.refreshCache();
                Anomaly.cacheInitialized = true;
            }
            catch (error) {
                console.error('Error during anomaly parameter initialization:', error);
            }
        });
    }
    /**
     * Fetches the anomaly parameters.
     * It first checks if the parameters are cached and whether the cache is still valid (not expired).
     * If the cache is valid, it returns the cached data. If not, it fetches the data from the API.
     *
     * @returns {Promise<any>} - A promise that resolves to the anomaly parameters.
     */
    static getAnomalyParameters() {
        return anomaly_awaiter(this, void 0, void 0, function* () {
            const currentTime = Date.now();
            if (Anomaly.anomalyParamsCache && (currentTime - Anomaly.lastFetchedTime < Anomaly.cacheExpiryThreshold)) {
                console.log('Returning cached anomaly parameters');
                return Anomaly.anomalyParamsCache;
            }
            try {
                // If data is not cached or expired, fetch it from the API
                const data = yield Anomaly.fetchAnomalyParameters();
                return data;
            }
            catch (error) {
                console.error('Error fetching anomaly parameters:', error);
                throw error;
            }
        });
    }
    /**
     * Fetches anomaly parameters directly from the backend API.
     * This method is used internally by `getAnomalyParameters` to retrieve fresh data.
     *
     * @returns {Promise<any>} - A promise that resolves to the fetched anomaly parameters.
     */
    static fetchAnomalyParameters() {
        return anomaly_awaiter(this, void 0, void 0, function* () {
            // Fetching anomaly parameters from the API...'
            const url = `https://devai.freeschema.com/v1/get-frontend-anomaly-parameters`;
            try {
                const response = yield fetch(url, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch anomaly parameters");
                }
                const data = yield response.json();
                // Cache the fetched data and update the timestamp
                Anomaly.anomalyParamsCache = data.data;
                Anomaly.lastFetchedTime = Date.now();
                return data.data;
            }
            catch (error) {
                console.error("API Fetch Error:", error);
                throw error;
            }
        });
    }
    /**
     * Refreshes the anomaly parameters cache if the cache has expired.
     * If the cache expiry threshold has been surpassed, the method re-fetches the data from the API.
     *
     * @returns {Promise<void>} - A promise that resolves when the cache has been refreshed.
     */
    static refreshCache() {
        return anomaly_awaiter(this, void 0, void 0, function* () {
            try {
                const currentTime = Date.now();
                if (currentTime - Anomaly.lastFetchedTime > Anomaly.cacheExpiryThreshold) {
                    // Cache expired, re-fetch the data
                    yield Anomaly.getAnomalyParameters();
                }
            }
            catch (error) {
                console.error("Error refreshing anomaly parameters cache:", error);
            }
        });
    }
    /**
     * Detects the data type of a given value based on predefined rules.
     * It checks the value against the `DATA_TYPES_RULES` to find the matching data type.
     *
     * @param {string} value - The value to check.
     * @returns {string | null} - The detected data type, or `null` if no match is found.
     */
    detectDataType(value) {
        for (const [dataType, regex] of Object.entries(DATA_TYPES_RULES)) {
            if (regex.test(value)) {
                return dataType;
            }
        }
        return null;
    }
    /**
     * Checks whether a given concept and value pair contains an anomaly.
     * An anomaly is detected based on the concept's length and type rules.
     *
     * @param {string} typeConcept - The concept type (e.g., `the_name`).
     * @param {string} value - The value to check for anomalies.
     * @returns {Promise<{ valid: boolean, warnings: string[] }>} - A promise that resolves to an object containing:
     * - `valid`: A boolean indicating whether the value is valid according to the anomaly rules.
     * - `warnings`: An array of warning messages related to the value's anomalies.
     */
    checkConceptAnomaly(typeConcept, value) {
        return anomaly_awaiter(this, void 0, void 0, function* () {
            const warnings = [];
            try {
                if (!value) {
                    warnings.push("Null value");
                    return { valid: false, warnings };
                }
                const typeDetails = Anomaly.anomalyParamsCache;
                if (!typeConcept.startsWith('the_')) {
                    typeConcept = `the_${typeConcept}`;
                }
                const conceptDetails = typeDetails[typeConcept];
                console.log("Concept Details : ", conceptDetails);
                if (!conceptDetails) {
                    console.warn(`No concept details found for type: ${typeConcept}`);
                    warnings.push(`No concept details found for type: ${typeConcept}`);
                    return { valid: false, warnings };
                }
                const length = value.length;
                const { min_length, max_length, data_types } = conceptDetails;
                const lengthValid = length >= min_length && length <= max_length;
                const detectedType = this.detectDataType(value);
                const typeValid = data_types.includes(detectedType);
                if (!lengthValid) {
                    warnings.push(`Length of '${value}' is outside the allowed range (min: ${min_length}, max: ${max_length}). Current length: ${length}.`);
                }
                if (!typeValid) {
                    warnings.push(`Type mismatch for '${value}'. Expected types: ${data_types.join(', ')}, detected type: ${detectedType}.`);
                }
                if (lengthValid && typeValid) {
                    warnings.push(`Concept ${typeConcept} is valid. Length: ${length}, Type: ${detectedType}`);
                }
                return { valid: lengthValid && typeValid, warnings };
            }
            catch (error) {
                console.error(`Error checking anomaly for ${typeConcept} with value ${value}:`, error);
                return { valid: false, warnings };
            }
        });
    }
    /**
     * Checks anomalies for multiple concepts in bulk.
     * Iterates over a record of concept-value pairs and detects anomalies.
     *
     * @param {Record<string, string>} instanceData - An object where each key is a concept type and each value is the corresponding data value.
     * @returns {Promise<Record<string, { valid: boolean, warnings: string[] }>>} - A promise that resolves to an object where each key is a concept type
     * and the value is an object containing `valid` (boolean) and `warnings` (array of warning messages).
     */
    static checkAnomalyInBulk(formData) {
        return anomaly_awaiter(this, void 0, void 0, function* () {
            if (!Anomaly.cacheInitialized) {
                yield Anomaly.initializeAnomalyParameters();
            }
            try {
                const anomalyResults = {};
                for (const [typeConcept, instanceData] of Object.entries(formData)) {
                    const instanceValue = instanceData.value;
                    const { valid, warnings } = yield new Anomaly().checkConceptAnomaly(typeConcept, instanceValue);
                    anomalyResults[typeConcept] = { valid, warnings };
                }
                return anomalyResults;
            }
            catch (error) {
                console.error("Bulk Anomaly Check Error:", error);
                throw error;
            }
        });
    }
}
/**
 * Static cache for storing fetched anomaly parameters.
 * @type {any} - Stores the fetched anomaly parameters from the API.
 */
Anomaly.anomalyParamsCache = null;
/**
 * Flag indicating if the anomaly parameters cache has been initialized.
 * @type {boolean} - `true` if the cache is initialized, `false` otherwise.
 */
Anomaly.cacheInitialized = false;
/**
 * Timestamp indicating the last time the anomaly parameters were fetched.
 * @type {number} - Time in milliseconds.
 */
Anomaly.lastFetchedTime = 0;
/**
 * Cache expiry threshold, after which the data will be considered expired.
 * @type {number} - Cache expiry threshold in milliseconds (default is 10 minutes).
 */
Anomaly.cacheExpiryThreshold = 10 * 60 * 1000;

;// CONCATENATED MODULE: ./src/DataStructures/Search/FreeschemaQuery.ts

class FreeschemaQuery {
    constructor() {
        this.type = "";
        this.inpage = 10;
        this.page = 1;
        this.concepts = [];
        this.conceptIds = [];
        this.selectors = [];
        this.freeschemaQueries = [];
        this.filters = [];
        this.filterLogic = "";
        this.typeConnection = "";
        this.outputFormat = NORMAL;
        this.name = "";
        this.reverse = false;
    }
}

;// CONCATENATED MODULE: ./src/Api/Search/FreeschemaQueryApi.ts
var FreeschemaQueryApi_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function FreeschemaQueryApi(query_1) {
    return FreeschemaQueryApi_awaiter(this, arguments, void 0, function* (query, token = "") {
        var header = GetRequestHeaderWithAuthorization("application/json", token);
        const queryUrl = BaseUrl_BaseUrl.FreeschemaQueryUrl();
        const body = JSON.stringify(query);
        try {
            const response = yield fetch(queryUrl, {
                method: 'POST',
                headers: header,
                body: body
            });
            if (response.ok) {
                let result = yield response.json();
                return result;
            }
            else {
                ErrorPosting_HandleHttpError(response);
                console.log("This is the freeschema query error", response.status);
                return [];
            }
        }
        catch (ex) {
            console.log("This is the freeschema query error others", ex);
            HandleInternalError(ex, queryUrl);
        }
    });
}

;// CONCATENATED MODULE: ./src/WrapperFunctions/SchemaQueryObservable.ts
var SchemaQueryObservable_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class SchemaQueryObservable_SearchLinkMultipleAllObservable extends DependencyObserver {
    constructor(query, token) {
        super();
        this.mainCompositionIds = [];
        this.query = new FreeschemaQuery();
        this.query = query;
        this.format = query.outputFormat;
    }
    bind() {
        return SchemaQueryObservable_awaiter(this, void 0, void 0, function* () {
            if (!this.isDataLoaded) {
                this.isDataLoaded = true;
                this.query.outputFormat = ALLID;
                let result = yield FreeschemaQueryApi(this.query, "");
                this.conceptIds = result.conceptIds;
                this.internalConnections = result.internalConnections;
                this.linkers = result.linkers;
                this.reverse = result.reverse;
                this.mainCompositionIds = result.mainCompositionIds;
            }
            return yield this.build();
        });
    }
    build() {
        return SchemaQueryObservable_awaiter(this, void 0, void 0, function* () {
            if (this.format == DATAID) {
                this.data = yield formatConnectionsDataId(this.linkers, this.conceptIds, this.mainCompositionIds, this.reverse);
            }
            else {
                this.data = yield formatConnections(this.linkers, this.conceptIds, this.mainCompositionIds, this.reverse);
                //this.data = await formatDataArrayNormal(this.linkers, this.conceptIds, this.internalConnections,  this.mainCompositionIds, this.reverse );
            }
            return this.data;
        });
    }
}
/**
 *
 * @param id this is the id whose links need to be found
 * @param linker this is the type connection that is connected to the mainConcept(id)
 * @param inpage number of outputs that has to be displayed
 * @param page the page which needs to be displayed as per the inpage parameter
 * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
 */
function SchemaQueryListener(query, token) {
    return new SchemaQueryObservable_SearchLinkMultipleAllObservable(query, token);
}

;// CONCATENATED MODULE: ./src/app.ts
var app_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






















































































































var serviceWorker;
console.log("Start from logging...");
/**
 * This function lets you update the access token that the package uses. If this is not passed you cannot create, update, view or delete
 * Your concepts using this package.
 * @param accessToken access token got from the sign in process
 */
function updateAccessToken(accessToken = "") {
    TokenStorage.BearerAccessToken = accessToken;
    if (serviceWorker)
        sendMessage('updateAccessToken', { accessToken });
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
 * @param enableSW {activate: boolean, scope: 'string'} | undefined - This is for enabling service worker with its scope
 */
function init() {
    return app_awaiter(this, arguments, void 0, function* (url = "", aiurl = "", accessToken = "", nodeUrl = "", enableAi = true, applicationName = "", enableSW = undefined, isTest = false) {
        try {
            // await initConceptConnection(url, aiurl, accessToken, nodeUrl, enableAi, applicationName, isTest)
            listenBroadCastMessages();
            if ("serviceWorker" in navigator &&
                enableSW &&
                (enableSW === null || enableSW === void 0 ? void 0 : enableSW.activate) &&
                (enableSW === null || enableSW === void 0 ? void 0 : enableSW.scope)) {
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
                    //       // // for now asuming its other
                    //       // await initConceptConnection(
                    //       //   url,
                    //       //   aiurl,
                    //       //   accessToken,
                    //       //   nodeUrl,
                    //       //   enableAi,
                    //       //   applicationName,
                    //       //   isTest
                    //       // );
                    //     } else {
                    yield new Promise((resolve, reject) => {
                        navigator.serviceWorker
                            .register("./serviceWorker.bundle.js", {
                            // type: "module",
                            scope: enableSW.scope ? enableSW.scope : "/",
                        })
                            .then((registration) => app_awaiter(this, void 0, void 0, function* () {
                            console.log("Service Worker registered:", registration);
                            if (registration.active) {
                                console.log("active sw");
                                serviceWorker = registration.active;
                                yield sendMessage("init", {
                                    url,
                                    aiurl,
                                    accessToken,
                                    nodeUrl,
                                    enableAi,
                                    applicationName,
                                    isTest,
                                });
                                resolve();
                            }
                            else {
                                let success = false;
                                // Listen for updates to the service worker
                                console.log("updaet listen start");
                                registration.onupdatefound = () => {
                                    const newWorker = registration.installing;
                                    console.log("new worker", newWorker);
                                    if (newWorker) {
                                        newWorker.onstatechange = () => app_awaiter(this, void 0, void 0, function* () {
                                            console.log("on state change triggered");
                                            // if (newWorker.state === 'activated' && navigator.serviceWorker.controller) {
                                            if (newWorker.state === "activated") {
                                                // && navigator.serviceWorker.controller) {
                                                console.log("New Service Worker is active", registration);
                                                serviceWorker = registration.active;
                                                // Send init message now that it's active
                                                yield sendMessage("init", {
                                                    url,
                                                    aiurl,
                                                    accessToken,
                                                    nodeUrl,
                                                    enableAi,
                                                    applicationName,
                                                    isTest,
                                                });
                                                success = true;
                                                resolve();
                                            }
                                        });
                                    }
                                };
                                // Handle if on state change didn't trigger
                                setTimeout(() => {
                                    if (!success)
                                        reject("Not Completed Initialization");
                                }, 3000);
                            }
                        }))
                            .catch((error) => app_awaiter(this, void 0, void 0, function* () {
                            yield initConceptConnection(url, aiurl, accessToken, nodeUrl, enableAi, applicationName, isTest);
                            reject(error);
                            console.error("Service Worker registration failed:", error);
                        }));
                    });
                    //   }
                    // })
                    // .catch((err) => {
                    //   console.log("Unable to register", err);
                    // });
                }
                catch (error) {
                    yield initConceptConnection(url, aiurl, accessToken, nodeUrl, enableAi, applicationName, isTest);
                    console.error("Unable to start service worker", error);
                }
            }
            else {
                yield initConceptConnection(url, aiurl, accessToken, nodeUrl, enableAi, applicationName, isTest);
                console.log("Service Worker not supported in this browser.");
            }
            return true;
        }
        catch (error) {
            console.log("cannot initialize the system", error);
        }
    });
}
function sendMessage(type, payload) {
    // TODO:: add payload validator based on type of the message
    return new Promise((resolve) => {
        const responseHandler = (event) => {
            resolve(event.data);
            navigator.serviceWorker.removeEventListener("message", responseHandler);
        };
        navigator.serviceWorker.addEventListener("message", responseHandler);
        serviceWorker === null || serviceWorker === void 0 ? void 0 : serviceWorker.postMessage({ type, payload });
    });
}
function dispatchIdEvent(id, data = {}) {
    console.log('id event dispatched', id);
    if (serviceWorker) {
        // let event = new Event(`${id}`);
        let event = new CustomEvent(`${id}`, data);
        console.log("event fired from", event);
        dispatchEvent(event);
    }
    else {
        broadcastChannel.postMessage({ type: 'dispatchEvent', payload: { id } });
    }
}
let subscribedListeners = [];
// actions for message received on broadcast channel (specially from service worker)
const broadcastActions = {
    GetLinkListener: (payload) => app_awaiter(void 0, void 0, void 0, function* () {
        const listener = subscribedListeners.find(listener => listener.listenerId == payload.listenerId);
        listener === null || listener === void 0 ? void 0 : listener.callback(payload.data);
        return { success: true };
    }),
    dispatchEvent: (payload) => app_awaiter(void 0, void 0, void 0, function* () {
        if (serviceWorker) {
            let event = new Event(payload.id || '');
            console.log("broadcast dispatched evenet found", event);
            dispatchEvent(event);
        }
        // self.clients.matchAll({ includeUncontrolled: true }).then(clients => {
        //   clients.forEach(client => {
        //     client.postMessage({ id, updatedData });
        //   });
        // });
        return { success: true };
    })
};
function listenBroadCastMessages() {
    // broadcast event can be listened through both the service worker and other tabs
    broadcastChannel.addEventListener('message', (event) => app_awaiter(this, void 0, void 0, function* () {
        const { type, payload } = event.data;
        console.log('Received in Main Thread:', type, event, event.data);
        if (!type)
            return;
        let responseData = { success: false, data: undefined };
        if (broadcastActions[type]) {
            responseData = yield broadcastActions[type](payload);
        }
        else {
            console.log('else bc type');
            console.log(`Unable to handle "${type}" case in service worker`);
        }
    }));
}
// Utility function to handle service worker or fallback logic
function handleServiceWorkerRequest(serviceWorkerMethod, params, fallbackFunction) {
    return app_awaiter(this, void 0, void 0, function* () {
        if (serviceWorker) {
            console.log('Data receiving');
            const res = yield sendMessage(serviceWorkerMethod, params);
            console.log('Data received from SW', res);
            return res.data;
        }
        else {
            console.log('Used old BT');
            return yield fallbackFunction(...params);
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
function initConceptConnection() {
    return app_awaiter(this, arguments, void 0, function* (url = "", aiurl = "", accessToken = "", nodeUrl = "", enableAi = true, applicationName = "", isTest = false) {
        BaseUrl_BaseUrl.BASE_URL = url;
        BaseUrl_BaseUrl.AI_URL = aiurl;
        BaseUrl_BaseUrl.NODE_URL = nodeUrl;
        BaseUrl_BaseUrl.BASE_APPLICATION = applicationName;
        TokenStorage.BearerAccessToken = accessToken;
        let randomizer = Math.floor(Math.random() * 100000000);
        // BaseUrl.BASE_RANDOMIZER = randomizer;
        // BaseUrl.BASE_RANDOMIZER = 999;
        BaseUrl_BaseUrl.setRandomizer(999);
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
        console.log("This ist he base url", BaseUrl_BaseUrl.BASE_URL, randomizer);
        /**
         * We initialize the system so that we get all the concepts from the backend system that are most likely to be used
         * We use some sort of AI algorithm to initilize these concepts with the most used concept.
         * @param enableAi enableAi is a flag that the user can choose to set if they want to use this enable AI feature
         * If the developer does not want to use this feature then they can just set enableAi to false.
         */
        yield InitializeSystem();
        const start = new Date().getTime();
        /**
         * This  will create a binary tree in the memory from the indexdb.
         * This process will set Flags to denote that the binary tree is loaded, the character binary tree is  loaded
         * and that the type binary tree has been loaded.
         * These trees are helpful in caching concepts and connections for the data fabric.
         */
        yield CreateConceptBinaryTreeFromIndexDb()
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
        yield CreateLocalBinaryTreeFromIndexDb()
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
        yield GetConnectionsFromIndexDbLocal()
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
        yield PopulateTheLocalConnectionToMemory().catch((event) => {
            console.log("This is the error in populating binary tree");
            throw event;
        });
        ;
        /**
         * This process gets the connections from indexdb and loads it to the connections array which is inside of
         * a static class called ConnectionData.
         * This function will also set and IdentifierFlag that tells the whole program that this process has finished.
         */
        yield GetConnectionsFromIndexDb()
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
    });
}

var __webpack_exports__ADMIN = __webpack_exports__.KC;
var __webpack_exports__ALLID = __webpack_exports__.BG;
var __webpack_exports__AddGhostConcept = __webpack_exports__.TR;
var __webpack_exports__Anomaly = __webpack_exports__.IM;
var __webpack_exports__BaseUrl = __webpack_exports__.U3;
var __webpack_exports__BinaryTree = __webpack_exports__.Wg;
var __webpack_exports__Composition = __webpack_exports__.BO;
var __webpack_exports__CompositionBinaryTree = __webpack_exports__.WW;
var __webpack_exports__CompositionNode = __webpack_exports__.BS;
var __webpack_exports__Concept = __webpack_exports__.ji;
var __webpack_exports__ConceptsData = __webpack_exports__.Ij;
var __webpack_exports__Connection = __webpack_exports__.Ng;
var __webpack_exports__ConnectionData = __webpack_exports__.du;
var __webpack_exports__CreateComposition = __webpack_exports__.RC;
var __webpack_exports__CreateConnectionBetweenTwoConcepts = __webpack_exports__.Cd;
var __webpack_exports__CreateConnectionBetweenTwoConceptsGeneral = __webpack_exports__.pp;
var __webpack_exports__CreateConnectionBetweenTwoConceptsLocal = __webpack_exports__.hs;
var __webpack_exports__CreateDefaultConcept = __webpack_exports__.oI;
var __webpack_exports__CreateDefaultLConcept = __webpack_exports__.u9;
var __webpack_exports__CreateSession = __webpack_exports__.B7;
var __webpack_exports__CreateSessionVisit = __webpack_exports__.mF;
var __webpack_exports__CreateTheCompositionLocal = __webpack_exports__.RU;
var __webpack_exports__CreateTheCompositionWithCache = __webpack_exports__.Q9;
var __webpack_exports__CreateTheConnection = __webpack_exports__.sF;
var __webpack_exports__CreateTheConnectionGeneral = __webpack_exports__.wT;
var __webpack_exports__CreateTheConnectionLocal = __webpack_exports__.Fv;
var __webpack_exports__DATAID = __webpack_exports__.y0;
var __webpack_exports__DATAIDDATE = __webpack_exports__.iw;
var __webpack_exports__DelayFunctionExecution = __webpack_exports__.sG;
var __webpack_exports__DeleteConceptById = __webpack_exports__.qN;
var __webpack_exports__DeleteConceptLocal = __webpack_exports__.xY;
var __webpack_exports__DeleteConnectionById = __webpack_exports__.mZ;
var __webpack_exports__DeleteConnectionByType = __webpack_exports__.$S;
var __webpack_exports__DependencyObserver = __webpack_exports__.w_;
var __webpack_exports__FilterSearch = __webpack_exports__.Te;
var __webpack_exports__FormatFromConnections = __webpack_exports__.vw;
var __webpack_exports__FormatFromConnectionsAltered = __webpack_exports__.y8;
var __webpack_exports__FreeschemaQuery = __webpack_exports__.k9;
var __webpack_exports__FreeschemaQueryApi = __webpack_exports__.eE;
var __webpack_exports__GetAllConnectionsOfComposition = __webpack_exports__.sP;
var __webpack_exports__GetAllConnectionsOfCompositionBulk = __webpack_exports__.Y3;
var __webpack_exports__GetComposition = __webpack_exports__.Nj;
var __webpack_exports__GetCompositionBulk = __webpack_exports__.dF;
var __webpack_exports__GetCompositionBulkWithDataId = __webpack_exports__.cw;
var __webpack_exports__GetCompositionFromConnectionsWithDataId = __webpack_exports__.p8;
var __webpack_exports__GetCompositionFromConnectionsWithDataIdInObject = __webpack_exports__.rv;
var __webpack_exports__GetCompositionFromConnectionsWithDataIdIndex = __webpack_exports__.Nt;
var __webpack_exports__GetCompositionFromConnectionsWithIndex = __webpack_exports__.as;
var __webpack_exports__GetCompositionList = __webpack_exports__.pX;
var __webpack_exports__GetCompositionListAll = __webpack_exports__.Sx;
var __webpack_exports__GetCompositionListAllWithId = __webpack_exports__.XK;
var __webpack_exports__GetCompositionListListener = __webpack_exports__.vO;
var __webpack_exports__GetCompositionListLocal = __webpack_exports__.WJ;
var __webpack_exports__GetCompositionListLocalWithId = __webpack_exports__.j_;
var __webpack_exports__GetCompositionListWithId = __webpack_exports__.iD;
var __webpack_exports__GetCompositionListWithIdUpdated = __webpack_exports__.Ll;
var __webpack_exports__GetCompositionListener = __webpack_exports__.bk;
var __webpack_exports__GetCompositionLocal = __webpack_exports__.UI;
var __webpack_exports__GetCompositionLocalWithId = __webpack_exports__.XM;
var __webpack_exports__GetCompositionWithAllIds = __webpack_exports__.Mb;
var __webpack_exports__GetCompositionWithCache = __webpack_exports__.bq;
var __webpack_exports__GetCompositionWithDataIdBulk = __webpack_exports__.ke;
var __webpack_exports__GetCompositionWithDataIdWithCache = __webpack_exports__.w1;
var __webpack_exports__GetCompositionWithId = __webpack_exports__.yz;
var __webpack_exports__GetCompositionWithIdAndDateFromMemory = __webpack_exports__.Ez;
var __webpack_exports__GetConceptBulk = __webpack_exports__.rh;
var __webpack_exports__GetConceptByCharacter = __webpack_exports__.nW;
var __webpack_exports__GetConceptByCharacterAndCategoryLocal = __webpack_exports__.$I;
var __webpack_exports__GetConceptByCharacterAndType = __webpack_exports__.Aj;
var __webpack_exports__GetConnectionBetweenTwoConceptsLinker = __webpack_exports__.xn;
var __webpack_exports__GetConnectionBulk = __webpack_exports__.jM;
var __webpack_exports__GetConnectionById = __webpack_exports__.nS;
var __webpack_exports__GetConnectionDataPrefetch = __webpack_exports__.QL;
var __webpack_exports__GetConnectionOfTheConcept = __webpack_exports__.xf;
var __webpack_exports__GetLink = __webpack_exports__.L6;
var __webpack_exports__GetLinkListListener = __webpack_exports__.$Y;
var __webpack_exports__GetLinkListener = __webpack_exports__.db;
var __webpack_exports__GetLinkRaw = __webpack_exports__.Z9;
var __webpack_exports__GetLinkerConnectionFromConcepts = __webpack_exports__.Ny;
var __webpack_exports__GetLinkerConnectionToConcepts = __webpack_exports__.qY;
var __webpack_exports__GetRelation = __webpack_exports__.jQ;
var __webpack_exports__GetRelationLocal = __webpack_exports__.CH;
var __webpack_exports__GetRelationRaw = __webpack_exports__.NT;
var __webpack_exports__GetTheConcept = __webpack_exports__.SV;
var __webpack_exports__GetTheConceptLocal = __webpack_exports__.fz;
var __webpack_exports__GetUserGhostId = __webpack_exports__.M2;
var __webpack_exports__JUSTDATA = __webpack_exports__.ZJ;
var __webpack_exports__LConcept = __webpack_exports__.RA;
var __webpack_exports__LConnection = __webpack_exports__.BH;
var __webpack_exports__LISTNORMAL = __webpack_exports__.SL;
var __webpack_exports__LocalConceptsData = __webpack_exports__.vF;
var __webpack_exports__LocalSyncData = __webpack_exports__.HW;
var __webpack_exports__Logger = __webpack_exports__.Vy;
var __webpack_exports__LoginToBackend = __webpack_exports__.Ne;
var __webpack_exports__MakeTheInstanceConcept = __webpack_exports__.fg;
var __webpack_exports__MakeTheInstanceConceptLocal = __webpack_exports__.kQ;
var __webpack_exports__MakeTheTimestamp = __webpack_exports__.M4;
var __webpack_exports__MakeTheTypeConcept = __webpack_exports__.UG;
var __webpack_exports__MakeTheTypeConceptApi = __webpack_exports__.CT;
var __webpack_exports__MakeTheTypeConceptLocal = __webpack_exports__.$1;
var __webpack_exports__NORMAL = __webpack_exports__.yv;
var __webpack_exports__PRIVATE = __webpack_exports__.Uj;
var __webpack_exports__PUBLIC = __webpack_exports__.q;
var __webpack_exports__PatcherStructure = __webpack_exports__.vI;
var __webpack_exports__RAW = __webpack_exports__.XZ;
var __webpack_exports__RecursiveSearchApi = __webpack_exports__.ZE;
var __webpack_exports__RecursiveSearchApiNewRawFullLinker = __webpack_exports__.FR;
var __webpack_exports__RecursiveSearchApiRaw = __webpack_exports__.PR;
var __webpack_exports__RecursiveSearchApiRawFullLinker = __webpack_exports__.PQ;
var __webpack_exports__RecursiveSearchListener = __webpack_exports__.RN;
var __webpack_exports__SchemaQueryListener = __webpack_exports__.yx;
var __webpack_exports__SearchAllConcepts = __webpack_exports__.br;
var __webpack_exports__SearchLinkInternal = __webpack_exports__.eU;
var __webpack_exports__SearchLinkInternalAll = __webpack_exports__.df;
var __webpack_exports__SearchLinkMultipleAll = __webpack_exports__.cf;
var __webpack_exports__SearchLinkMultipleAllObservable = __webpack_exports__.Ph;
var __webpack_exports__SearchLinkMultipleApi = __webpack_exports__.jy;
var __webpack_exports__SearchQuery = __webpack_exports__.L0;
var __webpack_exports__SearchStructure = __webpack_exports__.qn;
var __webpack_exports__SearchWithLinker = __webpack_exports__.ss;
var __webpack_exports__SearchWithTypeAndLinker = __webpack_exports__.zl;
var __webpack_exports__SearchWithTypeAndLinkerApi = __webpack_exports__.fU;
var __webpack_exports__SessionData = __webpack_exports__.pf;
var __webpack_exports__Signin = __webpack_exports__.pZ;
var __webpack_exports__Signup = __webpack_exports__.l4;
var __webpack_exports__SignupEntity = __webpack_exports__.oA;
var __webpack_exports__SplitStrings = __webpack_exports__.f8;
var __webpack_exports__StatefulWidget = __webpack_exports__.HZ;
var __webpack_exports__SyncData = __webpack_exports__.Y6;
var __webpack_exports__TrashTheConcept = __webpack_exports__.CE;
var __webpack_exports__UpdateComposition = __webpack_exports__.Sf;
var __webpack_exports__UpdateCompositionLocal = __webpack_exports__.DJ;
var __webpack_exports__UserBinaryTree = __webpack_exports__.tp;
var __webpack_exports__Validator = __webpack_exports__.Dr;
var __webpack_exports__ViewInternalData = __webpack_exports__.Ry;
var __webpack_exports__ViewInternalDataApi = __webpack_exports__.x7;
var __webpack_exports__convertFromConceptToLConcept = __webpack_exports__.F4;
var __webpack_exports__convertFromLConceptToConcept = __webpack_exports__.dp;
var __webpack_exports__createFormFieldData = __webpack_exports__.HR;
var __webpack_exports__dispatchIdEvent = __webpack_exports__.Yo;
var __webpack_exports__getFromDatabaseWithType = __webpack_exports__.sc;
var __webpack_exports__getObjectsFromIndexDb = __webpack_exports__.D3;
var __webpack_exports__init = __webpack_exports__.Ts;
var __webpack_exports__recursiveFetch = __webpack_exports__.zN;
var __webpack_exports__recursiveFetchNew = __webpack_exports__.dU;
var __webpack_exports__searchLinkMultipleListener = __webpack_exports__.Xz;
var __webpack_exports__sendMessage = __webpack_exports__._z;
var __webpack_exports__serviceWorker = __webpack_exports__.wK;
var __webpack_exports__storeToDatabase = __webpack_exports__.eD;
var __webpack_exports__subscribedListeners = __webpack_exports__.KD;
var __webpack_exports__updateAccessToken = __webpack_exports__.$Q;
export { __webpack_exports__ADMIN as ADMIN, __webpack_exports__ALLID as ALLID, __webpack_exports__AddGhostConcept as AddGhostConcept, __webpack_exports__Anomaly as Anomaly, __webpack_exports__BaseUrl as BaseUrl, __webpack_exports__BinaryTree as BinaryTree, __webpack_exports__Composition as Composition, __webpack_exports__CompositionBinaryTree as CompositionBinaryTree, __webpack_exports__CompositionNode as CompositionNode, __webpack_exports__Concept as Concept, __webpack_exports__ConceptsData as ConceptsData, __webpack_exports__Connection as Connection, __webpack_exports__ConnectionData as ConnectionData, __webpack_exports__CreateComposition as CreateComposition, __webpack_exports__CreateConnectionBetweenTwoConcepts as CreateConnectionBetweenTwoConcepts, __webpack_exports__CreateConnectionBetweenTwoConceptsGeneral as CreateConnectionBetweenTwoConceptsGeneral, __webpack_exports__CreateConnectionBetweenTwoConceptsLocal as CreateConnectionBetweenTwoConceptsLocal, __webpack_exports__CreateDefaultConcept as CreateDefaultConcept, __webpack_exports__CreateDefaultLConcept as CreateDefaultLConcept, __webpack_exports__CreateSession as CreateSession, __webpack_exports__CreateSessionVisit as CreateSessionVisit, __webpack_exports__CreateTheCompositionLocal as CreateTheCompositionLocal, __webpack_exports__CreateTheCompositionWithCache as CreateTheCompositionWithCache, __webpack_exports__CreateTheConnection as CreateTheConnection, __webpack_exports__CreateTheConnectionGeneral as CreateTheConnectionGeneral, __webpack_exports__CreateTheConnectionLocal as CreateTheConnectionLocal, __webpack_exports__DATAID as DATAID, __webpack_exports__DATAIDDATE as DATAIDDATE, __webpack_exports__DelayFunctionExecution as DelayFunctionExecution, __webpack_exports__DeleteConceptById as DeleteConceptById, __webpack_exports__DeleteConceptLocal as DeleteConceptLocal, __webpack_exports__DeleteConnectionById as DeleteConnectionById, __webpack_exports__DeleteConnectionByType as DeleteConnectionByType, __webpack_exports__DependencyObserver as DependencyObserver, __webpack_exports__FilterSearch as FilterSearch, __webpack_exports__FormatFromConnections as FormatFromConnections, __webpack_exports__FormatFromConnectionsAltered as FormatFromConnectionsAltered, __webpack_exports__FreeschemaQuery as FreeschemaQuery, __webpack_exports__FreeschemaQueryApi as FreeschemaQueryApi, __webpack_exports__GetAllConnectionsOfComposition as GetAllConnectionsOfComposition, __webpack_exports__GetAllConnectionsOfCompositionBulk as GetAllConnectionsOfCompositionBulk, __webpack_exports__GetComposition as GetComposition, __webpack_exports__GetCompositionBulk as GetCompositionBulk, __webpack_exports__GetCompositionBulkWithDataId as GetCompositionBulkWithDataId, __webpack_exports__GetCompositionFromConnectionsWithDataId as GetCompositionFromConnectionsWithDataId, __webpack_exports__GetCompositionFromConnectionsWithDataIdInObject as GetCompositionFromConnectionsWithDataIdInObject, __webpack_exports__GetCompositionFromConnectionsWithDataIdIndex as GetCompositionFromConnectionsWithDataIdIndex, __webpack_exports__GetCompositionFromConnectionsWithIndex as GetCompositionFromConnectionsWithIndex, __webpack_exports__GetCompositionList as GetCompositionList, __webpack_exports__GetCompositionListAll as GetCompositionListAll, __webpack_exports__GetCompositionListAllWithId as GetCompositionListAllWithId, __webpack_exports__GetCompositionListListener as GetCompositionListListener, __webpack_exports__GetCompositionListLocal as GetCompositionListLocal, __webpack_exports__GetCompositionListLocalWithId as GetCompositionListLocalWithId, __webpack_exports__GetCompositionListWithId as GetCompositionListWithId, __webpack_exports__GetCompositionListWithIdUpdated as GetCompositionListWithIdUpdated, __webpack_exports__GetCompositionListener as GetCompositionListener, __webpack_exports__GetCompositionLocal as GetCompositionLocal, __webpack_exports__GetCompositionLocalWithId as GetCompositionLocalWithId, __webpack_exports__GetCompositionWithAllIds as GetCompositionWithAllIds, __webpack_exports__GetCompositionWithCache as GetCompositionWithCache, __webpack_exports__GetCompositionWithDataIdBulk as GetCompositionWithDataIdBulk, __webpack_exports__GetCompositionWithDataIdWithCache as GetCompositionWithDataIdWithCache, __webpack_exports__GetCompositionWithId as GetCompositionWithId, __webpack_exports__GetCompositionWithIdAndDateFromMemory as GetCompositionWithIdAndDateFromMemory, __webpack_exports__GetConceptBulk as GetConceptBulk, __webpack_exports__GetConceptByCharacter as GetConceptByCharacter, __webpack_exports__GetConceptByCharacterAndCategoryLocal as GetConceptByCharacterAndCategoryLocal, __webpack_exports__GetConceptByCharacterAndType as GetConceptByCharacterAndType, __webpack_exports__GetConnectionBetweenTwoConceptsLinker as GetConnectionBetweenTwoConceptsLinker, __webpack_exports__GetConnectionBulk as GetConnectionBulk, __webpack_exports__GetConnectionById as GetConnectionById, __webpack_exports__GetConnectionDataPrefetch as GetConnectionDataPrefetch, __webpack_exports__GetConnectionOfTheConcept as GetConnectionOfTheConcept, __webpack_exports__GetLink as GetLink, __webpack_exports__GetLinkListListener as GetLinkListListener, __webpack_exports__GetLinkListener as GetLinkListener, __webpack_exports__GetLinkRaw as GetLinkRaw, __webpack_exports__GetLinkerConnectionFromConcepts as GetLinkerConnectionFromConcepts, __webpack_exports__GetLinkerConnectionToConcepts as GetLinkerConnectionToConcepts, __webpack_exports__GetRelation as GetRelation, __webpack_exports__GetRelationLocal as GetRelationLocal, __webpack_exports__GetRelationRaw as GetRelationRaw, __webpack_exports__GetTheConcept as GetTheConcept, __webpack_exports__GetTheConceptLocal as GetTheConceptLocal, __webpack_exports__GetUserGhostId as GetUserGhostId, __webpack_exports__JUSTDATA as JUSTDATA, __webpack_exports__LConcept as LConcept, __webpack_exports__LConnection as LConnection, __webpack_exports__LISTNORMAL as LISTNORMAL, __webpack_exports__LocalConceptsData as LocalConceptsData, __webpack_exports__LocalSyncData as LocalSyncData, __webpack_exports__Logger as Logger, __webpack_exports__LoginToBackend as LoginToBackend, __webpack_exports__MakeTheInstanceConcept as MakeTheInstanceConcept, __webpack_exports__MakeTheInstanceConceptLocal as MakeTheInstanceConceptLocal, __webpack_exports__MakeTheTimestamp as MakeTheTimestamp, __webpack_exports__MakeTheTypeConcept as MakeTheTypeConcept, __webpack_exports__MakeTheTypeConceptApi as MakeTheTypeConceptApi, __webpack_exports__MakeTheTypeConceptLocal as MakeTheTypeConceptLocal, __webpack_exports__NORMAL as NORMAL, __webpack_exports__PRIVATE as PRIVATE, __webpack_exports__PUBLIC as PUBLIC, __webpack_exports__PatcherStructure as PatcherStructure, __webpack_exports__RAW as RAW, __webpack_exports__RecursiveSearchApi as RecursiveSearchApi, __webpack_exports__RecursiveSearchApiNewRawFullLinker as RecursiveSearchApiNewRawFullLinker, __webpack_exports__RecursiveSearchApiRaw as RecursiveSearchApiRaw, __webpack_exports__RecursiveSearchApiRawFullLinker as RecursiveSearchApiRawFullLinker, __webpack_exports__RecursiveSearchListener as RecursiveSearchListener, __webpack_exports__SchemaQueryListener as SchemaQueryListener, __webpack_exports__SearchAllConcepts as SearchAllConcepts, __webpack_exports__SearchLinkInternal as SearchLinkInternal, __webpack_exports__SearchLinkInternalAll as SearchLinkInternalAll, __webpack_exports__SearchLinkMultipleAll as SearchLinkMultipleAll, __webpack_exports__SearchLinkMultipleAllObservable as SearchLinkMultipleAllObservable, __webpack_exports__SearchLinkMultipleApi as SearchLinkMultipleApi, __webpack_exports__SearchQuery as SearchQuery, __webpack_exports__SearchStructure as SearchStructure, __webpack_exports__SearchWithLinker as SearchWithLinker, __webpack_exports__SearchWithTypeAndLinker as SearchWithTypeAndLinker, __webpack_exports__SearchWithTypeAndLinkerApi as SearchWithTypeAndLinkerApi, __webpack_exports__SessionData as SessionData, __webpack_exports__Signin as Signin, __webpack_exports__Signup as Signup, __webpack_exports__SignupEntity as SignupEntity, __webpack_exports__SplitStrings as SplitStrings, __webpack_exports__StatefulWidget as StatefulWidget, __webpack_exports__SyncData as SyncData, __webpack_exports__TrashTheConcept as TrashTheConcept, __webpack_exports__UpdateComposition as UpdateComposition, __webpack_exports__UpdateCompositionLocal as UpdateCompositionLocal, __webpack_exports__UserBinaryTree as UserBinaryTree, __webpack_exports__Validator as Validator, __webpack_exports__ViewInternalData as ViewInternalData, __webpack_exports__ViewInternalDataApi as ViewInternalDataApi, __webpack_exports__convertFromConceptToLConcept as convertFromConceptToLConcept, __webpack_exports__convertFromLConceptToConcept as convertFromLConceptToConcept, __webpack_exports__createFormFieldData as createFormFieldData, __webpack_exports__dispatchIdEvent as dispatchIdEvent, __webpack_exports__getFromDatabaseWithType as getFromDatabaseWithType, __webpack_exports__getObjectsFromIndexDb as getObjectsFromIndexDb, __webpack_exports__init as init, __webpack_exports__recursiveFetch as recursiveFetch, __webpack_exports__recursiveFetchNew as recursiveFetchNew, __webpack_exports__searchLinkMultipleListener as searchLinkMultipleListener, __webpack_exports__sendMessage as sendMessage, __webpack_exports__serviceWorker as serviceWorker, __webpack_exports__storeToDatabase as storeToDatabase, __webpack_exports__subscribedListeners as subscribedListeners, __webpack_exports__updateAccessToken as updateAccessToken };

//# sourceMappingURL=main.bundle.js.map