import { ConceptsData } from "../DataStructures/ConceptData";
import { Concept } from "../DataStructures/Concept";
import { BaseUrl } from "../app";
import { IndexDb } from "./indexeddb";

var version = 9;
export class LocalIndexDb{
  static db:IDBDatabase;
}


export function openDatabase(databaseName:string){
  return new Promise(function(resolve, reject){
  if(LocalIndexDb.db){
    resolve( LocalIndexDb.db);
  }
var localDbName = BaseUrl.BASE_URL + "_FreeSchemaLocal" + BaseUrl.BASE_APPLICATION;
    const request = indexedDB.open(localDbName,version);
    request.onerror = (event) => {
        console.error("Why didn't you allow my web app to use IndexedDB?!",event);
        indexedDB.deleteDatabase(localDbName);
        openDatabase(databaseName);

    };
  
    request.onsuccess = function(event:Event) {
  
        
      var target = event.target as IDBOpenDBRequest;
       LocalIndexDb.db = target.result as IDBDatabase;
      resolve(LocalIndexDb.db);
  
  };
  
  
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
            console.log("this is the event", event);
            storeToDatabase(idDb,{"id":0, "value": -100});
            storeToDatabase(idDb,{"id":1, "value": -200});
            storeToDatabase(idDb,{"id":3, "value": BaseUrl.BASE_RANDOMIZER});
        }
      }
    }
  });
  
  }

  export async function getFromDatabaseWithTypeOld(databaseName:string){
    return new Promise(function(resolve, reject){
    openDatabase(databaseName).then(()=>{


      var concept: Concept|null;
      var ConceptList: Concept[] = [];
    
        var db = LocalIndexDb.db;
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
    });

  });
}


  export function storeToDatabase(databaseName:string, object:any){

     openDatabase(databaseName);
      let db;
      var localDbName = BaseUrl.BASE_URL + "_FreeSchemaLocal" + BaseUrl.BASE_APPLICATION;
  
      const request = indexedDB.open(localDbName,version);
  
      request.onerror = (event) => {
          console.error("Why didn't you allow my web app to use IndexedDB?!");
      };
  
      request.onsuccess = function(event:Event) {
          var target = event.target as IDBOpenDBRequest;
          var db = target.result as IDBDatabase;
          let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
          let objStore = transaction.objectStore(databaseName);
          objStore.add(object);
      };
  }

  export function UpdateToDatabase(databaseName:string, object:any){

    openDatabase(databaseName);
     let db;
var localDbName = BaseUrl.BASE_URL + "_FreeSchemaLocal" + BaseUrl.BASE_APPLICATION;
 
     const request = indexedDB.open(localDbName,version);
 
     request.onerror = (event) => {
         console.error("Why didn't you allow my web app to use IndexedDB?!");
     };
 
     request.onsuccess = function(event:Event) {
         var target = event.target as IDBOpenDBRequest;
         var db = target.result as IDBDatabase;
         let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
         let objStore = transaction.objectStore(databaseName);
         objStore.put(object);
     };
 }

  export async function getAllFromLocalDb(databaseName:string){
    return new Promise(function(resolve, reject){



      var ConceptList:any[] = [];

    openDatabase(databaseName).then(db=>{
        let transaction = LocalIndexDb.db.transaction(databaseName, "readwrite") as IDBTransaction;
        let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
        var allobjects = objectStore.getAll();
        allobjects.onsuccess = ()=> {
          const readObjects = allobjects.result;

          for(var i=0; i<readObjects.length; i++){
              ConceptList.push(readObjects[i]);
          }
          resolve(ConceptList); 
      }
    });



    //   // Database opened successfully
    // };
    


});


   // return ConceptList;
  }


  export function removeFromDatabase(databaseName:string, id:number){
    openDatabase(databaseName);
var localDbName = BaseUrl.BASE_URL + "_FreeSchemaLocal" + BaseUrl.BASE_APPLICATION;

    const request = indexedDB.open(localDbName,version);

    request.onsuccess = function(event) {
        var target = event.target as IDBOpenDBRequest;
        var db = target.result as IDBDatabase;
      let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
      let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
      let getRequest = objectStore.delete(id);
      getRequest.onsuccess = function(event:Event) {
        let target = event.target as IDBRequest;
        // concept =  event.target.result;
        // Access the retrieved data
      };
  }
}
  

