import { GetAiData } from "../Api/GetAiData";
import { GetAllPrefetchConnections } from "../Api/GetAllPrefetchConnections";
import { BinaryTree } from "../DataStructures/BinaryTree";
import { SettingData } from "../DataStructures/SettingData";
import { Settings } from "../DataStructures/Settings";
import { AiUpdateFlag, GetStatsFromDatabase } from "../Database/indexeddb";

export default async function InitializeSystem(){
    var statsData = await GetStatsFromDatabase();
    var settings = statsData as SettingData;
    console.log(settings);
    if(!settings.isOnlineSync){
        console.log("prefetching");
       // await GetAllPrefetchConnections(10267,2000);
        await GetAiData();
        console.log("this is the binary data", BinaryTree.root);
    }
    else{
        return true;
    }

}

export async function PurgatoryDatabaseUpdated(){
    Settings.isOnlineSync = true;
    var settingData = new SettingData(Settings.isOnlineSync);
    AiUpdateFlag(settingData);
    
}