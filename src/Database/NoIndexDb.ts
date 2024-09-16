import { SettingData } from "../DataStructures/SettingData";
import { IndexDb } from "./indexeddb";

export function openDatabase(databaseName:string){
    return IndexDb.db;
}

export function storeToDatabase(databaseName:string, object:any){
}

export function GetStatsFromDatabase(){

    var settingsData:SettingData = new SettingData(true);
    return settingsData;
}

export function AiUpdateFlag(object:SettingData){
}

export async function getFromDatabaseWithType(databaseName:string, type:string, id:number){
}

export async function getObjectsFromIndexDb(databaseName:string){
}

export function removeFromDatabase(databaseName:string, id:number){

}

export async function getAllFromLocalDb(databaseName:string){
}