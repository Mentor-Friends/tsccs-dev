export {init, updateAccessToken};

import CreateConceptBinaryTreeFromIndexDb from './Services/CreateBinaryTreeFromData';

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
export {NORMAL, JUSTDATA, DATAID, DATAIDDATE, RAW} from './Constants/FormatConstants';
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
export {BaseUrl} from './DataStructures/BaseUrl';
export {StatefulWidget} from './Widgets/StatefulWidget';
export {DeleteConnectionByType} from './Services/DeleteConnectionByType';

/**
 * This function lets you update the access token that the package uses. If this is not passed you cannot create, update, view or delete
 * Your concepts using this package.
 * @param accessToken access token got from the sign in process
 */
function updateAccessToken(accessToken:string = ""){
   TokenStorage.BearerAccessToken = accessToken;
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
 */
async function init(url:string = "", aiurl:string="", accessToken:string = "", nodeUrl:string ="", enableAi:boolean = true, applicationName: string="", isTest: boolean = false){
   /**
    * This process sets the initlizers in the static class BaseUrl that is used all over the system to access the urls
    * Here we set the following variables.
    * randomizer is created so that we can uniquely identify this initlization process but in the case that the BASE_RANDOMIZER has been alreay
    * set in the indexdb this is replaced by the indexdb value.
    */
   try{
   BaseUrl.BASE_URL = url;
   BaseUrl.AI_URL = aiurl;
   BaseUrl.NODE_URL = nodeUrl;
   BaseUrl.BASE_APPLICATION= applicationName;
   TokenStorage.BearerAccessToken = accessToken;
   let randomizer = Math.floor(Math.random() * 100000000);
   BaseUrl.BASE_RANDOMIZER = randomizer;
   if(isTest){
         IdentifierFlags.isDataLoaded= true;
   IdentifierFlags.isCharacterLoaded= true;
   IdentifierFlags.isTypeLoaded= true;
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
await InitializeSystem(enableAi);
const start = new Date().getTime();

/**
 * This  will create a binary tree in the memory from the indexdb.
 * This process will set Flags to denote that the binary tree is loaded, the character binary tree is  loaded
 * and that the type binary tree has been loaded.
 * These trees are helpful in caching concepts and connections for the data fabric.
 */
await   CreateConceptBinaryTreeFromIndexDb().then(()=>{
   // IdentifierFlags.isDataLoaded= true;
   // IdentifierFlags.isCharacterLoaded= true;
   // IdentifierFlags.isTypeLoaded= true;
   let elapsed = new Date().getTime() - start;
   console.log("The time taken to prepare concept  data is  ", elapsed);
}).catch((event) => {
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
await CreateLocalBinaryTreeFromIndexDb().then(()=>{
   // IdentifierFlags.isLocalDataLoaded = true;
   // IdentifierFlags.isLocalTypeLoaded = true;
   // IdentifierFlags.isLocalCharacterLoaded = true;
   let elapsed = new Date().getTime() - start;
   console.log("The time taken to prepare local concept  ", elapsed);
}).catch((event) => {
  throw event;
});



/**
 * This process gets the local connections from indexdb and loads it to the local connections array which is inside of
 * a static class called LocalConnectionData. 
 * This function will also set and IdentifierFlag that tells the whole program that this process has finished.
 */
await GetConnectionsFromIndexDbLocal().then(()=>{
   IdentifierFlags.isLocalConnectionLoaded = true;
}).catch((event) => {
   //console.log("This is the error in creating local connections binary tree");
   throw event;
});

/**
 * We have designed our system to use local concepts and connections with its own local ids(negative ids) that 
 * is only valid for the browser that creates this. We have a translator in our node server.
 * This function does this process in initlization.
 */
PopulateTheLocalConceptsToMemory().then(()=>{
}).catch((event) => {
   console.log("This is the error in populating binary tree");
  throw event;
});

// PopulateTheLocalConnectionToMemory().then(()=>{
// }).catch((event) => {
//    console.log("This is the error in populating binary tree");
//   throw event;
// });



/**
 * This process gets the connections from indexdb and loads it to the connections array which is inside of
 * a static class called ConnectionData. 
 * This function will also set and IdentifierFlag that tells the whole program that this process has finished.
 */
await GetConnectionsFromIndexDb().then(()=>{
   IdentifierFlags.isConnectionLoaded = true;
   IdentifierFlags.isConnectionTypeLoaded = true;
   let elapsed = new Date().getTime() - start;
   console.log("The time taken to prepare connections  ", elapsed);
}).catch((event) => {
   //console.log("This is the error in creating connections tree");
   throw event;
});

return true;
}
catch(error){
   console.log("cannot initialize the system", error);
}
   

}





