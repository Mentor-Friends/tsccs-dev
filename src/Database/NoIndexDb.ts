import { Logger } from "../app";
import { SettingData } from "../DataStructures/SettingData";
import { IndexDb } from "./indexeddb";

export function openDatabase(databaseName:string){
    Logger.logfunction("openDatabase", [databaseName, "noindexdb"]);
    return IndexDb.db;
}

export function storeToDatabase(databaseName:string, object:any){
    Logger.logfunction("storeToDatabase", [databaseName, "noindexdb"]);
}

export function GetStatsFromDatabase(){
    Logger.logfunction("GetStatsFromDatabase", [ "noindexdb"]);
    var settingsData:SettingData = new SettingData(true);
    return settingsData;
}

export function AiUpdateFlag(object:SettingData){
    Logger.logfunction("GetStatsFromDatabase", [object, "noindexdb"]);
}

export async function getFromDatabaseWithType(databaseName:string, type:string, id:number){
    Logger.logfunction("getFromDatabaseWithType", [databaseName, "noindexdb"]);
}

export async function getObjectsFromIndexDb(databaseName:string){
    Logger.logfunction("getObjectsFromIndexDb", [databaseName, "noindexdb"]);
}

export function removeFromDatabase(databaseName:string, id:number){
    Logger.logfunction("removeFromDatabase", [databaseName, "noindexdb"]);

}

export async function getAllFromLocalDb(databaseName:string){
    Logger.logfunction("getAllFromLocalDb", [databaseName, "noindexdb"]);
}