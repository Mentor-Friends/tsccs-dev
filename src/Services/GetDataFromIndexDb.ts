import { ConceptsData } from "../DataStructures/ConceptData";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { LocalConceptsData } from "../DataStructures/Local/LocalConceptData";
import { LocalConnectionData } from "../DataStructures/Local/LocalConnectionData";
import { getAllFromLocalDb } from "../Database/indexdblocal";
import { getFromDatabaseWithTypeOld } from "../Database/indexeddb";

export  async function GetDataFromIndexDb(){

    var conceptList = await getFromDatabaseWithTypeOld("concept");

    GetConnectionsFromIndexDb();
    console.log(conceptList);

        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                ConceptsData.AddConcept(conceptList[i]);
            }

        }
 }

 export async function GetDataFromIndexDbLocal(){
    var conceptList = await getAllFromLocalDb("localconcept");

    GetConnectionsFromIndexDbLocal();
    if(Array.isArray(conceptList)){
        for(var i=0 ;i < conceptList.length ;i++){
            LocalConceptsData.AddConcept(conceptList[i]);
        }

    }
 }

 async function GetConnectionsFromIndexDb(){
    var connectionList = await getFromDatabaseWithTypeOld("connection");

    if(Array.isArray(connectionList)){
        for(var i=0 ;i < connectionList.length ;i++){
            ConnectionData.AddConnection(connectionList[i]);
        }

    }
 }

 async function GetConnectionsFromIndexDbLocal(){
    var connectionList = await getAllFromLocalDb("localconnection");

    if(Array.isArray(connectionList)){
        for(var i=0 ;i < connectionList.length ;i++){
            LocalConnectionData.AddConnection(connectionList[i]);
        }
    }
 }

