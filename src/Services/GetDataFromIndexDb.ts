import { ConceptsData } from "../DataStructures/ConceptData";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { getFromDatabaseWithTypeOld } from "../Database/indexeddb";

export  async function GetDataFromIndexDb(){
    console.log("mai mai");

    var conceptList = await getFromDatabaseWithTypeOld("concept");

    GetConnectionsFromIndexDb();

    console.log(conceptList);

        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                ConceptsData.AddConcept(conceptList[i]);
            }

            console.log(ConceptsData.conceptsArray);
        }
 }

 async function GetConnectionsFromIndexDb(){
    var connectionList = await getFromDatabaseWithTypeOld("connection");
    console.log(connectionList);

    if(Array.isArray(connectionList)){
        for(var i=0 ;i < connectionList.length ;i++){
            ConnectionData.AddConnection(connectionList[i]);
        }

    }
 }