export {init, updateAccessToken};

import CreateBinaryTreeFromData from './Services/CreateBinaryTreeFromData';

import { IdentifierFlags } from './DataStructures/IdentifierFlags';

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
export { storeToDatabase,getFromDatabaseWithType,getFromDatabaseWithTypeOld } from './Database/NoIndexDb';
export { createTheConnection as CreateTheConnection} from './Services/CreateTheConnection';
export { default as GetConceptByCharacter } from './Services/GetConceptByCharacter';
export { GetLink,GetLinkRaw } from './Services/GetLink';
export {CreateDefaultConcept} from './Services/CreateDefaultConcept';
export {MakeTheTypeConcept} from './Services/MakeTheTypeConcept';
export {MakeTheTypeConceptApi} from './Api/MakeTheTypeConceptApi';
export { GetLinkerConnectionFromConcepts, GetLinkerConnectionToConcepts} from './Services/GetLinkerConnectionFromConcept';
export { DeleteConceptById } from './Services/DeleteConcept';
export { DeleteConnectionById } from './Services/DeleteConnection';
export { TrashTheConcept } from './Api/Delete/DeleteConceptInBackend'
export { GetConnectionById } from './Services/GetConnections';
export {MakeTheTimestamp} from './Services/MakeTheTimestamp';
export {RecursiveSearchApi} from './Api/RecursiveSearch';
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
export { CreateTheConnectionGeneral,CreateConnection} from './Services/CreateTheConnectionGeneral';
export {CreateTheConnectionLocal} from './Services/Local/CreateTheConnectionLocal';
export {GetUserGhostId,AddGhostConcept, GetUserGhostConnectionId,AddGhostConnection} from './Services/User/UserTranslation';
export {SearchLinkMultipleAll,FormatFromConnections} from './Services/Search/SearchLinkMultiple';
export {UpdateCompositionLocal} from './Services/Local/UpdateCompositionLocal';
export {GetCompositionFromConnectionsWithDataIdInObject} from './Services/GetCompositionBulk';
export {ViewInternalData} from './Services/View/ViewInternalData';
export {convertFromLConceptToConcept} from './Services/Conversion/ConvertConcepts';
export {SearchLinkInternal} from './Services/Search/SearchLinkInternal';
export { HandleHttpError } from './Services/Common/ErrorPosting'; 
export {GetConceptByCharacterAndType} from './Api/GetConceptByCharacterAndType';
export {GetConceptByCharacterAndCategoryDirectApi} from './Api/SearchConcept/GetConceptByCharacterAndCategoryDirect';
export {SearchLinkMultipleApi} from './Api/Search/SearchLinkMultipleApi';
export {GetCompositionWithIdFromMemoryFromConnections, GetCompositionWithIdFromMemory} from './Services/GetComposition';
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
export {UserBinaryTree} from './DataStructures/User/UserBinaryTree';
export {FilterSearch} from './DataStructures/FilterSearch';
export {SearchStructure} from './DataStructures/Search/SearchStructure';
export {FreeSchemaResponse} from './DataStructures/Responses/ErrorResponse';
import {GetDataFromIndexDb,GetDataFromIndexDbLocal} from './Services/GetDataFromIndexDb';
import CreateLocalBinaryTreeFromData from './Services/Local/CreateLocalBinaryTreeFromData';
import InitializeSystem from './Services/InitializeSystem';
import { BaseUrl } from './DataStructures/BaseUrl';
import { TokenStorage } from './DataStructures/Security/TokenStorage';
export {BaseUrl} from './DataStructures/BaseUrl';
export {SchemaQueryListener} from './WrapperFunctions/SchemaQueryObservable';
export {FreeschemaQuery} from './DataStructures/Search/FreeschemaQuery';
export {GiveConnection,GetAllTheConnectionsByTypeAndOfTheConcept} from'./Services/Delete/GetAllConnectionByType';
export {DATAID, NORMAL, JUSTDATA,ALLID,DATAIDDATE,RAW,LISTNORMAL} from './Constants/FormatConstants';
export {Transaction} from './DataStructures/Transaction/Transaction';
function updateAccessToken(accessToken:string = ""){
   TokenStorage.BearerAccessToken = accessToken;
}

function init(url:string = "", aiurl:string="", accessToken:string = ""){
   BaseUrl.BASE_URL = url;
   BaseUrl.AI_URL = aiurl;
   console.log("This ist he base url", BaseUrl.BASE_URL);
   TokenStorage.BearerAccessToken = accessToken;
   InitializeSystem().then(()=>{
      const start = new Date().getTime();
      CreateBinaryTreeFromData().then(()=>{
         IdentifierFlags.isDataLoaded= true;
         IdentifierFlags.isCharacterLoaded= true;
         IdentifierFlags.isTypeLoaded= true;
         let elapsed = new Date().getTime() - start;
         console.log("The time taken to prepare concept  data is  ", elapsed);
      });

      

      CreateLocalBinaryTreeFromData().then(()=>{
         IdentifierFlags.isLocalDataLoaded = true;
         IdentifierFlags.isLocalTypeLoaded = true;
         IdentifierFlags.isLocalCharacterLoaded = true;
         let elapsed = new Date().getTime() - start;
         console.log("The time taken to prepare local concept  ", elapsed);
      });
      

      
      GetDataFromIndexDbLocal().then(()=>{
         IdentifierFlags.isLocalConnectionLoaded = true;
      });
      GetDataFromIndexDb().then(()=>{
         IdentifierFlags.isConnectionLoaded = true;
         IdentifierFlags.isConnectionTypeLoaded = true;
         let elapsed = new Date().getTime() - start;
         console.log("The time taken to prepare connections  ", elapsed);
      });


   });
}





