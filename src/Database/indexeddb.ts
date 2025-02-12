import { ConceptsData } from "../DataStructures/ConceptData";
import { Concept } from "../DataStructures/Concept";
import { Settings } from "../DataStructures/Settings";
import { SettingData } from "../DataStructures/SettingData";
import { BaseUrl } from "../DataStructures/BaseUrl";
import { Logger } from "../app";
import { UpdatePackageLogWithError } from "../Services/Common/ErrorPosting";

/**
 * version of the database. If you want to change the database then you must update this version also.
 */
var version = 9;


/**
 * This class will help us store the indexdb  reference in memory and not go back to index db.
 */
export class IndexDb{
  static db:IDBDatabase;
}

/**
 * 
 * @param databaseName not required actually. This is not used you can pass anything.
 * @returns a promise that either resolves or rejects opening the database.
 */
export function openDatabase(databaseName:string): Promise<IDBDatabase>{
  const logData : any = Logger.logfunction("openDatabase", [databaseName, "indexdb"]);
  return new Promise(function(resolve, reject){
  
  // if the indexdb is already initialized then you do not need to again initialize the db so you can get 
  // from memory.
  if(IndexDb.db){
    Logger.logUpdate(logData);
    resolve( IndexDb.db);
  }

 // the name of the database is passed here. We are statically passing the dbName with inputs from user
 // the BASE_URL is the api that the framework calls
 // the BASE_APPLICATION is a thing that differentiates an application from another so no two application create
 // and use the same index db.
  let dbName = BaseUrl.BASE_URL + "_FreeSchema"  + BaseUrl.BASE_APPLICATION;

  // open the database.
  const request = indexedDB.open(dbName,version);

  // in case that the database is not opened then log the error.
  // then we delete the database that is already present with the name
  // then again try to create the database, since this is a temporary database so it might not matter
  // but this is a point that we might need to be careful about.
  // we then reject the promise and report this problem.
  request.onerror = (event) => {
      console.error("Why didn't you allow my web app to use IndexedDB?!", event);
      indexedDB.deleteDatabase(dbName);
      openDatabase(databaseName);
      UpdatePackageLogWithError(logData, 'openDatabase', event);
      reject(event);
  };

  // in case that the database is allowed to be opened then we return the database object.
  request.onsuccess = function(event:Event) {

      
    let target = event.target as IDBOpenDBRequest;
    IndexDb.db = target.result as IDBDatabase;
    Logger.logUpdate(logData);
    resolve(IndexDb.db);

};

// in case that the version is upgraded then we delete all the old databases and then create a new database.
// version upgrade is a way which we can clean up old databases and its structures.
request.onupgradeneeded = (event) => {
    let target = event.target as IDBOpenDBRequest;
    let db = target.result as IDBDatabase;
    let conceptDb = "concept";
    let connectionDb = "connection";
    let settings = "settings"
    console.log("this is the version update for index", version);
    if (db.objectStoreNames.contains(conceptDb)){
       db.deleteObjectStore(conceptDb);

    }
    if (db.objectStoreNames.contains(connectionDb)){
      db.deleteObjectStore(connectionDb);

    }
    if (db.objectStoreNames.contains(settings)){
       db.deleteObjectStore(settings);

    }
    if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
      let  objectStore = db.createObjectStore(conceptDb, {keyPath: 'id'}); // create it
      objectStore.transaction.oncomplete = (event: Event) => {
          // you can do something here after the db has been created.
      }
    }
    if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
      let  objectStore = db.createObjectStore(connectionDb, {keyPath: 'id'}); // create it
      objectStore.transaction.oncomplete = (event: Event) => {
        // you can do something here after the db has been created.
      }
    }

    if(!db.objectStoreNames.contains(settings)){
      let  objectStore = db.createObjectStore(settings, {keyPath: 'id'}); // create it
      objectStore.transaction.oncomplete = (event: Event) => {
        // you can do something here after the db has been created.
      }
    }
    Logger.logUpdate(logData);
    resolve(db);
  }
});

}



/**
 * 
 * @param databaseName name of the database that you want to store data to.
 * @param object any object that can be stored but keep in mind it must follow the convention that we created 
 * while creating the datbase.
 * @returns a promise that if a store is successful then the obejct is returned else rejects with the event.
 */
export function storeToDatabase(databaseName:string, object:any): Promise<any>{
  const logData : any = Logger.logfunction("storeToDatabase", [databaseName, "indexdb"]);
  return new Promise(function(resolve, reject){
    console.log("this is storing to the database", object);
    openDatabase(databaseName).then((db: IDBDatabase)=>{
      if(object.id != 0){
        let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
        let objStore = transaction.objectStore(databaseName);
        const request = objStore.add(object);
        request.onsuccess = (event) =>{
          Logger.logUpdate(logData);
          resolve(object);
        }
        request.onerror = (event) => {
          let errorObject = {
            "status": 400,
            "ok": false,
            "message":"Cannot store to the database" + databaseName,
            "data": event,
            "body": object
          };
          UpdatePackageLogWithError(logData, 'storeToDatabase', errorObject);
          reject(errorObject);
        }
      }
    }).catch((event)=>{
      let errorObject = {
        "status": 400,
        "ok": false,
        "message":"Cannot store to the database because you cannot open the database",
        "data": event
      };
      UpdatePackageLogWithError(logData, 'storeToDatabase', errorObject);
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
 export function UpdateToDatabase(databaseName:string, object:any){
  const logData : any = Logger.logfunction("UpdateToDatabase", [databaseName, "indexdb"]);
  return new Promise(function(resolve, reject){
    // console.log("this is wriring to the database", object);
  openDatabase(databaseName).then((db)=>{
    let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
    let objStore = transaction.objectStore(databaseName);
     const request = objStore.put(object);
     request.onsuccess = (event) =>{
      Logger.logUpdate(logData)
      resolve(object);
     }
     request.onerror = (event) => {
      let errorObject = {
        "status": 400,
        "ok": false,
        "message":"Cannot Update to the database" + databaseName,
        "data": event,
        "body": object
      };
      UpdatePackageLogWithError(logData, 'UpdateToDatabase', errorObject);
      reject(errorObject);
     }
  }).catch((event)=>{
    let errorObject = {
      "status": 400,
      "ok": false,
      "message":"Cannot update to database because you cannot open the database",
      "data": event
    };
    UpdatePackageLogWithError(logData, 'UpdateToDatabase', errorObject);
    reject(errorObject);
  });
  });
}




/**
 * 
 * @returns This returns the last object from the database.
 */
  export function GetLastSettingsFromDatabase(){
    const logData : any = Logger.logfunction("GetLastSettingsFromDatabase", ["indexdb"]);
    return new Promise(function(resolve, reject){
      let databaseName:string = "settings";
      openDatabase(databaseName).then((db: IDBDatabase)=>{
        let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
          let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
          let allobjects = objectStore.getAll();
          allobjects.onsuccess = ()=> {
          let settingsData:SettingData = new SettingData(false);
  
          let settingsArray = allobjects.result;
            for(let i=0;i<settingsArray.length;i++){
              settingsData = settingsArray[i];
              settingsData = settingsData as SettingData;
            }
            Logger.logUpdate(logData);
            resolve(settingsData); 
          }
          allobjects.onerror = (event) =>{
            UpdatePackageLogWithError(logData, 'GetLastSettingsFromDatabase', event);
            reject(event);
          }
        }).catch((event)=>{
          let errorObject = {
            "status": 400,
            "ok": false,
            "message":"Cannot get last object from database because you cannot open the database",
            "data": event
          };
            UpdatePackageLogWithError(logData, 'GetLastSettingsFromDatabase', errorObject);
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
  export function AiUpdateFlag(object:SettingData){
    const logData : any = Logger.logfunction("AiUpdateFlag", ["indexdb"]);
    return new Promise(function(resolve, reject){
      let databaseName:string = "settings";
      openDatabase(databaseName).then((db)=>{
        let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
        let objStore = transaction.objectStore(databaseName);
        const request = objStore.put(object);
        request.onsuccess = (event) => {
          Logger.logUpdate(logData);
          resolve(object);
        }
        request.onerror = (event) => {
          let errorObject = {
            "status": 400,
            "ok": false,
            "message":"Cannot update AI flag",
            "data": event,
            "body": object
          };
          UpdatePackageLogWithError(logData, 'AiUpdateFlag', errorObject);
          reject(errorObject);
        }
        })
        .catch((event)=>{
          let errorObject = {
            "status": 400,
            "ok": false,
            "message":"Cannot update AI flag because you cannot open the database",
            "data": event
          };
          UpdatePackageLogWithError(logData, 'AiUpdateFlag', errorObject);
          reject(errorObject);
      });
    });
  }



  /**
   *  this function will return all the objects that are in the database 
   * @param databaseName name of the database
   * @returns all the objects that are in the database
   */
  export async function getObjectsFromIndexDb(databaseName:string){
    const logData : any = Logger.logfunction("getObjectsFromIndexDb", [databaseName, "indexdb"]);
    return new Promise(function(resolve, reject){
      openDatabase(databaseName).then((db: IDBDatabase)=>{


        let ConceptList: Concept[] = [];
      
        let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
        let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
        let allobjects = objectStore.getAll();

        allobjects.onsuccess = ()=> {
          const students = allobjects.result;

          for(let i=0; i<students.length; i++){
              ConceptList.push(students[i]);
          }
          Logger.logUpdate(logData);
          resolve(ConceptList); 

        }

      }).catch((event)=>{
        let errorObject = {
          "status": 400,
          "ok": false,
          "message":"Cannot get objects from the database because you cannot open the database",
          "data": event
        };
        UpdatePackageLogWithError(logData, 'getObjectsFromIndexDb', errorObject);
        reject(errorObject);
    });

  });

  }


  /**
   * 
   * @param databaseName name of the database
   * @param id the id that we need to remove from the database (this is the index)
   * @returns an id if the deletion is successful and error with even in case it cannot.
   */
  export function removeFromDatabase(databaseName:string, id:number){
    const logData : any = Logger.logfunction("removeFromDatabase", [databaseName, "indexdb"]);
    return new Promise(function(resolve, reject){
      openDatabase(databaseName).then((db) => {
        let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
        let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
        const request = objectStore.delete(Number(id));
        request.onsuccess = function(event:Event) {
            Logger.logUpdate(logData);
            resolve(id);
          };
        request.onerror = (event) => {
          let errorObject = {
            "status": 400,
            "ok": false,
            "message":"Cannot remove from the database" + databaseName,
            "data": event
          };
          UpdatePackageLogWithError(logData, 'removeFromDatabase', errorObject);
          reject(errorObject);
        }

        }).catch((event)=>{
          let errorObject = {
            "status": 400,
            "ok": false,
            "message":"Cannot remove from the database because you cannot open the database",
            "data": event,
            "body": id

          };
          UpdatePackageLogWithError(logData, 'removeFromDatabase', errorObject);
          reject(errorObject);
      });
    });
  }