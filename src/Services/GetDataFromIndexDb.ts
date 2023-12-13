import { ConceptsData } from "../DataStructures/ConceptData";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { getFromDatabaseWithTypeOld } from "../Database/indexeddb";

export  async function GetDataFromIndexDb(){


    GetConnectionsFromIndexDb();
 }

 async function GetConnectionsFromIndexDb(){
    var connectionList = await getFromDatabaseWithTypeOld("connection");

    if(Array.isArray(connectionList)){
        for(var i=0 ;i < connectionList.length ;i++){
            ConnectionData.AddConnection(connectionList[i]);
        }

    }
 }