import { Concept } from "../DataStructures/Concept";

export function storeToDatabase(databaseName:string, object:any){
    let db;

    const request = indexedDB.open("FreeSchema",3);

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

    request.onupgradeneeded = (event) => {

        var target = event.target as IDBOpenDBRequest;
        var db = target.result as IDBDatabase;
    
        if (!db.objectStoreNames.contains(databaseName)) { // if there's no database name
          let  objectStore = db.createObjectStore(databaseName, {keyPath: 'id'}); // create it
          objectStore.transaction.oncomplete = (event: Event) => {
                // Store values in the newly created objectStore.
                const myObjectStore = db
                .transaction(databaseName, "readwrite")
                .objectStore(databaseName);
                myObjectStore.add(object);
          }
        }
      }
}

export function getFromDatabase(databaseName:string, id:number){
    const request = indexedDB.open("FreeSchema",3);
    var concept: Concept|null;
    request.onsuccess = function(event) {
        var target = event.target as IDBOpenDBRequest;
        var db = target.result as IDBDatabase;
      let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
      let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
      let getRequest = objectStore.get(id);
      getRequest.onsuccess = function(event:Event) {
        let target = event.target as IDBRequest;
        concept = target.result as Concept;
        return concept;
        // concept =  event.target.result;
        // Access the retrieved data
      };  
       return concept as Concept;
    //   // Database opened successfully
    // };
    }
  }


  export function getFromDatabaseWithType(databaseName:string, type:string, id:number){
    const request = indexedDB.open("FreeSchema",3);
    var concept: Concept|null;
    var ConceptList: Concept[] = [];
    request.onsuccess = function(event) {
        var target = event.target as IDBOpenDBRequest;
        var db = target.result as IDBDatabase;
      let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
      let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
      const getCursorRequest = objectStore.openCursor();
        getCursorRequest.onsuccess = e => {
        // Cursor logic here
        let target = e.target as IDBRequest;

        let cursor = target.result as IDBCursorWithValue;
        if(cursor){
            if (cursor.value[type] == id) {
                concept = cursor.value as Concept;
                ConceptList.push(concept);
            }
            cursor.continue();

        }
        }
       return ConceptList;
    //   // Database opened successfully
    // };
    }
    return ConceptList;
  }

  export function removeFromDatabase(databaseName:string, id:number){
    const request = indexedDB.open("FreeSchema",3);

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