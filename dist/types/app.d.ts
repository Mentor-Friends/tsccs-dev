export { init };
export { SplitStrings } from './Services/SplitStrings';
export { GetCompositionList, GetCompositionListWithId } from './Services/GetCompositionList';
export { GetCompositionListLocal, GetCompositionListLocalWithId } from './Services/Local/GetCompositionListLocal';
export { GetAllConnectionsOfComposition } from './Api/GetAllConnectionsOfComposition';
export { GetComposition, GetCompositionWithId } from './Services/GetComposition';
export { GetCompositionLocal, GetCompositionLocalWithId } from './Services/Local/GetCompositionLocal';
export { default as CreateComposition } from './Services/CreateTheComposition';
export { CreateTheCompositionLocal } from './Services/Local/CreateTheCompositionLocal';
export { CreateConnectionBetweenTwoConcepts } from './Services/CreateConnectionBetweenTwoConcepts';
export { default as GetTheConcept } from './Services/GetTheConcept';
export { default as MakeTheInstanceConcept } from './Services/MakeTheInstanceConcept';
export { MakeTheInstanceConceptLocal } from './Services/Local/MakeTheInstanceConceptLocal';
export { storeToDatabase, getFromDatabaseWithType, getFromDatabaseWithTypeOld } from './Database/indexeddb';
export { default as CreateTheConnection } from './Services/CreateTheConnection';
export { default as GetConceptByCharacter } from './Services/GetConceptByCharacter';
export { GetLink } from './Services/GetLink';
export { GetLinkerConnectionFromConcepts } from './Services/GetLinkerConnectionFromConcept';
export { DeleteConceptById } from './Services/DeleteConcept';
export { DeleteConnectionById } from './Services/DeleteConnection';
export { GetConnectionById } from './Services/GetConnections';
export { MakeTheTimestamp } from './Services/MakeTheTimestamp';
export { RecursiveSearchApi } from './Api/RecursiveSearch';
export { LoginToBackend } from './Api/Login';
export {} from './Api/GetConceptByCharacterAndType';
export { SyncData } from './DataStructures/SyncData';
export { Concept } from './DataStructures/Concept';
export { ConceptsData } from './DataStructures/ConceptData';
export { ConnectionData } from './DataStructures/ConnectionData';
export { BaseUrl } from './DataStructures/BaseUrl';
declare function init(url?: string, aiurl?: string): void;
