import { Logger } from "../app";
import { SettingData } from "../DataStructures/SettingData";
import { IndexDb } from "./indexeddb";

export function openDatabase(databaseName:string){
    const logData : any = Logger.logfunction("openDatabase", [databaseName, "noindexdb"]);
    Logger.logUpdate(logData);
    return IndexDb.db;
}

export function storeToDatabase(databaseName:string, object:any){
    const logData : any = Logger.logfunction("storeToDatabase", [databaseName, "noindexdb"]);
    Logger.logUpdate(logData);
}

export function GetStatsFromDatabase(){
    const logData : any = Logger.logfunction("GetStatsFromDatabase", [ "noindexdb"]);
    var settingsData:SettingData = new SettingData(true);
    Logger.logUpdate(logData);
    return settingsData;
}

export function AiUpdateFlag(object:SettingData){
    const logData : any = Logger.logfunction("GetStatsFromDatabase", [object, "noindexdb"]);
    Logger.logUpdate(logData);
}

export async function getFromDatabaseWithType(databaseName:string, type:string, id:number){
    const logData : any = Logger.logfunction("getFromDatabaseWithType", [databaseName, "noindexdb"]);
    Logger.logUpdate(logData)
}

export async function getObjectsFromIndexDb(databaseName:string){
    const logData : any = Logger.logfunction("getObjectsFromIndexDb", [databaseName, "noindexdb"]);
    Logger.logUpdate(logData)
}

export function removeFromDatabase(databaseName:string, id:number){
    const logData : any = Logger.logfunction("removeFromDatabase", [databaseName, "noindexdb"]);
    Logger.logUpdate(logData)
}

export async function getAllFromLocalDb(databaseName:string){
    const logData : any = Logger.logfunction("getAllFromLocalDb", [databaseName, "noindexdb"]);
    Logger.logUpdate(logData)
}