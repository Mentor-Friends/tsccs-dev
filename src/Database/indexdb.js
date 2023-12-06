
 function storeToDatabase(databaseName, object){
 let db;

  const request = indexedDB.open("FreeSchema",3);
  
  request.onerror = (event) => {
    console.log(db);
    console.error("Why didn't you allow my web app to use IndexedDB?!");
  };

  request.onsuccess = function(event) {
    console.log("Successfully opened database");  
    let db = event.target.result;
    let transaction = db.transaction(databaseName, "readwrite");
    let objStore = transaction.objectStore(databaseName);
    objStore.add(object);
    // Database opened successfully
  };
  request.onupgradeneeded = (event) => {

    db = request.result;


    if (!db.objectStoreNames.contains(databaseName)) { // if there's no database name
      let  objectStore = db.createObjectStore(databaseName, {keyPath: 'id'}); // create it
      objectStore.transaction.oncomplete = (event) => {
            // Store values in the newly created objectStore.
            const myObjectStore = db
            .transaction(databaseName, "readwrite")
            .objectStore(databaseName);
            objects.forEach((object) => {
              myObjectStore.add(object);
            });
      }
    }
  }
}

function getFromDatabase(databaseName, id){
  const request = indexedDB.open("FreeSchema",3);
  var concept = null;
  request.onsuccess = function(event) {
    let db = event.target.result;
    let transaction = db.transaction(databaseName, "readwrite");
    let objectStore =transaction.objectStore(databaseName);
    let getRequest = objectStore.get(id);
    getRequest.onsuccess = function(event) {
      concept =  event.target.result;
      // Access the retrieved data
    };
    return concept;
    // Database opened successfully
  };


}






module.exports = {

  storeToDb: storeToDatabase,
  getFromDb: getFromDatabase

};

