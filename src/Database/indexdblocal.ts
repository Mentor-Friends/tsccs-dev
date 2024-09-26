import { Concept } from "../DataStructures/Concept";
import { BaseUrl } from "../app";

/**
 * version of the database. If you want to change the database then you must update this version also.
 */
var version = 9;


/**
 * This class will help us store the indexdb  reference in memory and not go back to index db.
 */
export class LocalIndexDb{
  static db:IDBDatabase;
}

/**
 * 
 * @param databaseName not required actually. This is not used you can pass anything.
 * @returns a promise that either resolves or rejects opening the database.
 */
export function openDatabase(databaseName:string): Promise<IDBDatabase>{ 
  return new Promise(function(resolve, reject){
  // if the indexdb is already initialized then you do not need to again initialize the db so you can get 
  // from memory.
  if(LocalIndexDb.db){
    resolve( LocalIndexDb.db);
  }

   // the name of the database is passed here. We are statically passing the dbName with inputs from user
 // the BASE_URL is the api that the framework calls
 // the BASE_APPLICATION is a thing that differentiates an application from another so no two application create
 // and use the same index db.  
    let localDbName = BaseUrl.BASE_URL + "_FreeSchemaLocal" + BaseUrl.BASE_APPLICATION;
    const request = indexedDB.open(localDbName,version);

  // in case that the database is not opened then log the error.
  // then we delete the database that is already present with the name
  // then again try to create the database, since this is a temporary database so it might not matter
  // but this is a point that we might need to be careful about.
  // we then reject the promise and report this problem.
    request.onerror = (event) => {
        console.error("Why didn't you allow my web app to use IndexedDB?!",event);
        indexedDB.deleteDatabase(localDbName);
        openDatabase(databaseName);
        reject(event);

    };
  
    // in case that the database is allowed to be opened then we return the database object.
    request.onsuccess = function(event:Event) {
  
        
      var target = event.target as IDBOpenDBRequest;
       LocalIndexDb.db = target.result as IDBDatabase;
      resolve(LocalIndexDb.db);
  
  };
  
  // in case that the version is upgraded then we delete all the old databases and then create a new database.
  // version upgrade is a way which we can clean up old databases and its structures.
  request.onupgradeneeded = (event) => {

      var target = event.target as IDBOpenDBRequest;
      var db = target.result as IDBDatabase;
      var conceptDb = "localconcept";
      var connectionDb = "localconnection";
      var idDb = "localid";
      console.log("this is the version upgrade", version)
      if (db.objectStoreNames.contains(conceptDb)){
        db.deleteObjectStore(conceptDb);

      }
      if (db.objectStoreNames.contains(connectionDb)){
        db.deleteObjectStore(connectionDb);

      }
      if (db.objectStoreNames.contains(idDb)){
         db.deleteObjectStore(idDb);

      }
      if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
        let  objectStore = db.createObjectStore(conceptDb, {keyPath: 'id'}); // create it
        objectStore.transaction.oncomplete = (event: Event) => {
        }
      }
      if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
        let  objectStore = db.createObjectStore(connectionDb, {keyPath: 'id'}); // create it
        objectStore.transaction.oncomplete = (event: Event) => {
        }
      }
      if (!db.objectStoreNames.contains(idDb)) { // if there's no database name
        let  objectStore = db.createObjectStore(idDb, {keyPath: 'id'}); // create it
        objectStore.transaction.oncomplete = (event: Event) => {
            // this is the event in which we initialize the local database
            // we assume the start of the localconcept by -100, localconnection by -200 and a random value 
            // which will enable us to identify this local database from others.
            storeToDatabase(idDb,{"id":0, "value": -100});
            storeToDatabase(idDb,{"id":1, "value": -200});
            storeToDatabase(idDb,{"id":3, "value": BaseUrl.BASE_RANDOMIZER});
        }
      }

      resolve(db);
    }
  });
  
  }

  export async function LockTheDatabase(databaseName:string){
    console.log("lock : locked db");
      await UpdateToDatabase(databaseName, {"id": 4, "value": true});
  }

  export async function UnlockDatabase(databaseName:string){
    await UpdateToDatabase(databaseName, {"id": 4, "value": false});
    console.log("lock :locked opened");
  }

  export async function GetLockStatus(databaseName:string){
    try{
      let list = await getObjectsFromLocalIndexDb(databaseName);
      console.log("lock :for lock locked", list);
      if(Array.isArray(list)){
       console.log("lock : This is the list vallue", list[4].value);
       return list[4].value;
      }
      console.log("lock : This is not a list", Array.isArray(list) );
      return false;
    }
    catch(error){
      console.log("lock : this is the error", error);
    }

  }


    /**
   *  this function will return all the objects that are in the database 
   * @param databaseName name of the database
   * @returns all the objects that are in the database
   */
  export async function getObjectsFromLocalIndexDb(databaseName:string){
    return new Promise(function(resolve, reject){
    openDatabase(databaseName).then((db)=>{


      var concept: Concept|null;
      var ConceptList: Concept[] = [];
    
      let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
      let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
      var allobjects = objectStore.getAll();

      allobjects.onsuccess = ()=> {
        const students = allobjects.result;

        for(var i=0; i<students.length; i++){
            ConceptList.push(students[i]);
        }
        resolve(ConceptList); 

      }
    }).catch((event)=>{
      let errorObject = {
        "status": 400,
        "ok": false,
        "message":"Cannot get objects from database because you cannot open the Local database",
        "data": event
      };
      reject(errorObject);
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
  export function storeToDatabase(databaseName:string, object:any){
    return new Promise(function(resolve, reject){
     openDatabase(databaseName).then((db)=> {
      let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
      let objStore = transaction.objectStore(databaseName);
      const request = objStore.add(object);
      request.onsuccess = (event) => {
        resolve(object);

      }
      request.onerror = (event) => {
        let errorObject = {
          "status": 400,
          "ok": false,
          "message":"Cannot store to the Local database " + databaseName,
          "data": event,
          "body": object
        };
        reject(errorObject);
      }
     }).catch((event)=>{
      let errorObject = {
        "status": 400,
        "ok": false,
        "message":"Cannot store to database because you cannot open the Local database",
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
  export function UpdateToDatabase(databaseName:string, object:any){
    return new Promise(function(resolve, reject){
      console.log("this is wriring to the database local", object);
    openDatabase(databaseName).then((db)=>{
      let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
      let objStore = transaction.objectStore(databaseName);
       const request = objStore.put(object);
       request.onsuccess = (event) =>{
        resolve(object);
       }
       request.onerror = (event) => {
        let errorObject = {
          "status": 400,
          "ok": false,
          "message":"Cannot Update to the Local database" + databaseName,
          "data": event,
          "body": object
        };
        reject(errorObject);
       }
    }).catch((event)=>{
      let errorObject = {
        "status": 400,
        "ok": false,
        "message":"Cannot update to database because you cannot open the Local database",
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
  export function removeFromDatabase(databaseName:string, id:number){
    return new Promise(function(resolve, reject){
    openDatabase(databaseName).then((db)=>{
      let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
      let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
      let getRequest = objectStore.delete(id);
      getRequest.onsuccess = function(event:Event) {
        resolve(id);
      };
      getRequest.onerror = function (event:Event){
        let errorObject = {
          "status": 400,
          "ok": false,
          "message":"Cannot Update to the Local database" + databaseName,
          "data": event,
          "body": id
        };
        reject(errorObject);
      }
    }).catch((event)=>{
      let errorObject = {
        "status": 400,
        "ok": false,
        "message":"Cannot remove object from database because you cannot open the Local database",
        "data": event
      };
      reject(errorObject);
    });
  });
}
  

