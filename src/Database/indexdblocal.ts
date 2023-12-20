import { ConceptsData } from "../DataStructures/ConceptData";
import { Concept } from "../DataStructures/Concept";

var version = 4;

export function openDatabase(databaseName:string){
    let db;
  
    const request = indexedDB.open("FreeSchemaLocal",version);
  
    request.onerror = (event) => {
        console.error("Why didn't you allow my web app to use IndexedDB?!");
    };
  
    request.onsuccess = function(event:Event) {
  
        
      var target = event.target as IDBOpenDBRequest;
      var db = target.result as IDBDatabase;
      let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
  
  };
  
  
  request.onupgradeneeded = (event) => {
      var target = event.target as IDBOpenDBRequest;
      var db = target.result as IDBDatabase;
      var conceptDb = "localconcept";
      var connectionDb = "localconnection";
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
    }
  
  }


  export function storeToDatabase(databaseName:string, object:any){

     openDatabase(databaseName);
      let db;
  
      const request = indexedDB.open("FreeSchemaLocal",version);
  
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

  export async function getAllFromLocalDb(databaseName:string){
    return new Promise(function(resolve, reject){
    openDatabase(databaseName);
    const request = indexedDB.open("FreeSchemaLocal",version);
    var concept: Concept|null;
    var ConceptList: Concept[] = [];


    request.onsuccess = function(event) {
        var target = event.target as IDBOpenDBRequest;
        var db = target.result as IDBDatabase;
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


    //   // Database opened successfully
    // };
    }

    request.onerror =function(event){
      reject(event);
    }
});


   // return ConceptList;
  }


  export function removeFromDatabase(databaseName:string, id:number){
    openDatabase(databaseName);
    const request = indexedDB.open("FreeSchemaLocal",version);

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
  

