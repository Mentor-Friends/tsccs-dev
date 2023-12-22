import { ConceptsData } from "../DataStructures/ConceptData";
import { Concept } from "../DataStructures/Concept";
import { Settings } from "../DataStructures/Settings";
import { SettingData } from "../DataStructures/SettingData";

var version = 4;

export function openDatabase(databaseName:string){
  let db;

  const request = indexedDB.open("FreeSchema",version);

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
    var conceptDb = "concept";
    var connectionDb = "connection";
    var settings = "settings"
    if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
      let  objectStore = db.createObjectStore(conceptDb, {keyPath: 'id'}); // create it
      objectStore.transaction.oncomplete = (event: Event) => {
            // Store values in the newly created objectStore.
            // const myObjectStore = db
            // .transaction(databaseName, "readwrite")
            // .objectStore(databaseName);
            // myObjectStore.add(object);
      }
    }
    if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
      let  objectStore = db.createObjectStore(connectionDb, {keyPath: 'id'}); // create it
      objectStore.transaction.oncomplete = (event: Event) => {

      }
    }

    if(!db.objectStoreNames.contains(settings)){
      let  objectStore = db.createObjectStore(settings, {keyPath: 'id'}); // create it
      objectStore.transaction.oncomplete = (event: Event) => {

      }
    }
  }

}




export function storeToDatabase(databaseName:string, object:any){

  openDatabase(databaseName);
    let db;

    const request = indexedDB.open("FreeSchema",version);

    request.onerror = (event) => {
        console.error("Why didn't you allow my web app to use IndexedDB?!");
    };

    request.onsuccess = function(event:Event) {
      if(object.id != 0){
        var target = event.target as IDBOpenDBRequest;
        var db = target.result as IDBDatabase;
        let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
        let objStore = transaction.objectStore(databaseName);


        objStore.add(object);
      }
    };

    // request.onupgradeneeded = (event) => {
    //     var target = event.target as IDBOpenDBRequest;
    //     var db = target.result as IDBDatabase;
    //     var conceptDb = "concept";
    //     var connectionDb = "connection";
    //     var settings = "settings"
    //     if (!db.objectStoreNames.contains(conceptDb)) { // if there's no database name
    //       let  objectStore = db.createObjectStore(conceptDb, {keyPath: 'id'}); // create it
    //       objectStore.transaction.oncomplete = (event: Event) => {
    //             // Store values in the newly created objectStore.
    //             // const myObjectStore = db
    //             // .transaction(databaseName, "readwrite")
    //             // .objectStore(databaseName);
    //             // myObjectStore.add(object);
    //       }
    //     }
    //     if (!db.objectStoreNames.contains(connectionDb)) { // if there's no database name
    //       let  objectStore = db.createObjectStore(connectionDb, {keyPath: 'id'}); // create it
    //       objectStore.transaction.oncomplete = (event: Event) => {

    //       }
    //     }

    //     if(!db.objectStoreNames.contains(settings)){
    //       let  objectStore = db.createObjectStore(settings, {keyPath: 'id'}); // create it
    //       objectStore.transaction.oncomplete = (event: Event) => {
    
    //       }
    //     }
     // }
}


export function getFromDatabase(databaseName:string, id:number){
  openDatabase(databaseName);
    const request = indexedDB.open("FreeSchema",version);
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


  export function GetStatsFromDatabase(){
    return new Promise(function(resolve, reject){
      var databaseName:string = "settings";
      openDatabase(databaseName);
      const request = indexedDB.open("FreeSchema",version);
      request.onsuccess = function(event){
        var target = event.target as IDBOpenDBRequest;
        var db = target.result as IDBDatabase;
      let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
        let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
        var allobjects = objectStore.getAll();
        allobjects.onsuccess = ()=> {
        var settingsData:SettingData = new SettingData(false);

          var settingsArray = allobjects.result;
          for(let i=0;i<settingsArray.length;i++){
            settingsData = settingsArray[i];
            settingsData = settingsData as SettingData;
          }
          resolve(settingsData); 
        }
      }

      request.onerror =function(event){
        reject(event);
      }
    });
  }

  export function AiUpdateFlag(object:SettingData){
    var databaseName:string = "settings";
    openDatabase(databaseName);
    const request = indexedDB.open("FreeSchema",version);

    request.onsuccess = function(event){
      var target = event.target as IDBOpenDBRequest;
      var db = target.result as IDBDatabase;
      let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
      let objStore = transaction.objectStore(databaseName);
      console.log(object);
      objStore.put(object);
    }
  }



  export async function getFromDatabaseWithType(databaseName:string, type:string, id:number){
    return new Promise(function(resolve, reject){
    openDatabase(databaseName);
    const request = indexedDB.open("FreeSchema",version);
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
          resolve(ConceptList); 

    //   // Database opened successfully
    // };
    }

    request.onerror =function(event){
      reject(event);
    }
});


   // return ConceptList;
  }


  export async function getFromDatabaseWithTypeOld(databaseName:string){
    return new Promise(function(resolve, reject){
    openDatabase(databaseName);
    const request = indexedDB.open("FreeSchema",version);
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

//   export async function getFromDatabaseWithCharacterOld(databaseName:string, type:string, characterValue:string){
//     return new Promise(function(resolve, reject){
//     openDatabase(databaseName);
//     const request = indexedDB.open("FreeSchema",version);
//     var concept: Concept|null;


//     request.onsuccess = function(event) {
//         var target = event.target as IDBOpenDBRequest;
//         var db = target.result as IDBDatabase;
//       let transaction = db.transaction(databaseName, "readwrite") as IDBTransaction;
//       let objectStore =transaction.objectStore(databaseName) as IDBObjectStore;
//       var allobjects = objectStore.getAll();

//       allobjects.onsuccess = ()=> {
//         const students = allobjects.result;

//         for(var i=0; i<students.length; i++){
//           if(students[i].character_value == characterValue){
//             concept = students[i];
//           }
//         }
//         console.log("resolving");
//         resolve(concept); 
//     }


//     //   // Database opened successfully
//     // };
//     }

//     request.onerror =function(event){
//       reject(event);
//     }
// });


//    // return ConceptList;
//   }

  export function removeFromDatabase(databaseName:string, id:number){
    openDatabase(databaseName);
    const request = indexedDB.open("FreeSchema",version);

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