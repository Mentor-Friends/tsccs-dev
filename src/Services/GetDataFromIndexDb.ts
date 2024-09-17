import { ConceptsData } from "../DataStructures/ConceptData";
import { ConnectionBinaryTree } from "../DataStructures/ConnectionBinaryTree/ConnectionBinaryTree";
import { ConnectionData } from "../DataStructures/ConnectionData";
import { LocalConceptsData } from "../DataStructures/Local/LocalConceptData";
import { LocalConnectionData } from "../DataStructures/Local/LocalConnectionData";
import { getObjectsFromLocalIndexDb } from "../Database/indexdblocal";
import { getObjectsFromIndexDb } from "../Database/indexeddb";




 export async function GetConnectionsFromIndexDb(){
    try{
        let connectionList = await getObjectsFromIndexDb("connection");
        if(Array.isArray(connectionList)){
            for(let i=0 ;i < connectionList.length ;i++){
                ConnectionData.AddConnectionToMemory(connectionList[i]);
            }
    
        }
    }
    catch(error){
        let errorObject = {
            "message": "Cannot create Connection Binary Tree Concept",
            "ok": false,
            "status": 400,
            "data": error
        }
        throw errorObject;
    }


 }

 export async function GetConnectionsFromIndexDbLocal(){
    try{
        var connectionList = await getObjectsFromLocalIndexDb("localconnection");

        if(Array.isArray(connectionList)){
            for(var i=0 ;i < connectionList.length ;i++){
                LocalConnectionData.AddConnectionToMemory(connectionList[i]);
            }
        }
    }
    catch(error){
        let errorObject = {
            "message": "Cannot create Local Connection Binary Tree Concept",
            "ok": false,
            "status": 400,
            "data": error
        }
        throw errorObject;
    }

 }



