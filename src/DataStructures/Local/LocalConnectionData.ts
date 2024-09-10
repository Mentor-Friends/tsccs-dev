import {storeToDatabase } from "../../Database/indexdblocal";
import { removeFromDatabase } from "../../Database/indexdblocal";
import { ConvertFromLConnectionToConnection } from "../../Services/Local/ConvertFromLConnectionToConnection";
import { ConnectionData } from "../ConnectionData";
import { IdentifierFlags } from "../IdentifierFlags";
import { LConnection } from "./LConnection";
export class LocalConnectionData{
    
    name: string;
    constructor(){
        this.name = "Connection Array";
    }
    static  connectionArray:LConnection[] = [];

    static connectionDictionary:LConnection[] = [];
    static  CheckContains(connection: LConnection){
        var contains = false;
        for(var i=0; i<this.connectionArray.length; i++){
         if(this.connectionArray[i].id == connection.id){
             contains = true;
         }
        }

        return contains;
    }


    static AddConnection(connection: LConnection){
       var contains = this.CheckContains(connection);
        if(contains){
            this.RemoveConnection(connection);
        }
        if(connection.id != 0){

            storeToDatabase("localconnection",connection);
        }
        this.connectionArray.push(connection);
    }

    static AddToDictionary(connection: LConnection){
        this.connectionDictionary[connection.id] = connection;
    }

    static RemoveConnection(connection: LConnection){
        console.log("this is removing", connection);
       for(var i=0; i<this.connectionArray.length; i++){
        if(this.connectionArray[i].id == connection.id){
            this.connectionArray.splice(i, 1);
        }
       }
       if(connection.id != 0){
      //  removeFromDatabase("connection",connection.id);

       }
    }

    static AddPermanentConnection(connection: LConnection){
        if(connection.id > 0){

            removeFromDatabase("localconnection", connection.ghostId);
            ConnectionData.AddConnection(ConvertFromLConnectionToConnection(connection));
        }
    }

    static GetConnection(id: number){
       var  myConcept: LConnection|null;
       myConcept = null;
        for(var i=0; i<this.connectionArray.length; i++){
            if(this.connectionArray[i].id == id){
                myConcept = this.connectionArray[i];
            }
        }
        return myConcept;
    }


    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }


    static  checkFlag(resolve:any){

        if(IdentifierFlags.isLocalConnectionLoaded){
            return resolve("done");
        }
        else{
            setTimeout(LocalConnectionData.checkFlag, 1000, resolve);
        }
      };

    static async GetConnectionsOfCompositionLocal(id: number){
        var connectionList:LConnection[] = [];

        try{
            var data = await this.waitForDataToLoad();

        for(var i=0; i<this.connectionArray.length; i++){
            if(this.connectionArray[i].typeId == id){
                connectionList.push(this.connectionArray[i]);
            }
        }
        return connectionList;
    }
    catch(exception){
        return connectionList;
    }
    }

    static async GetConnectionOfCompositionAndTypeLocal(typeId: number, ofTheConceptId: number){
        var connectionList:LConnection[] = [];

        try{
            var data = await this.waitForDataToLoad();
            console.log("this is the connections", this.connectionArray, typeId, ofTheConceptId);
        for(var i=0; i<this.connectionArray.length; i++){
            if(this.connectionArray[i].typeId == typeId && this.connectionArray[i].ofTheConceptId == ofTheConceptId){
                connectionList.push(this.connectionArray[i]);
            }
        }
        return connectionList;
    }
    catch(exception){
        return connectionList;
    }
    }

    getName(){
        return this.name;
    }
}