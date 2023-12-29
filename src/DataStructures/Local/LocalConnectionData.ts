import {storeToDatabase } from "../../Database/indexdblocal";
import { IdentifierFlags } from "../IdentifierFlags";
import { Connection } from "./../Connection";
export class LocalConnectionData{
    
    name: string;
    constructor(){
        this.name = "Connection Array";
    }
    static  connectionArray:Connection[] = [];

    static connectionDictionary:Connection[] = [];
    static  CheckContains(connection: Connection){
        var contains = false;
        for(var i=0; i<this.connectionArray.length; i++){
         if(this.connectionArray[i].id == connection.id){
             contains = true;
         }
        }

        return contains;
    }


    static AddConnection(connection: Connection){
       var contains = this.CheckContains(connection);
        if(contains){
            this.RemoveConnection(connection);
        }
        if(connection.id != 0 || connection.isTemp){

            storeToDatabase("localconnection",connection);
        }
        this.connectionArray.push(connection);
    }

    static AddToDictionary(connection: Connection){
        this.connectionDictionary[connection.id] = connection;
    }

    static RemoveConnection(connection: Connection){
       for(var i=0; i<this.connectionArray.length; i++){
        if(this.connectionArray[i].id == connection.id){
            this.connectionArray.splice(i, 1);
        }
       }
       if(connection.id != 0){
      //  removeFromDatabase("connection",connection.id);

       }
    }

    static GetConnection(id: number){
       var  myConcept: Connection|null;
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
        var connectionList:Connection[] = [];

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

    getName(){
        return this.name;
    }
}