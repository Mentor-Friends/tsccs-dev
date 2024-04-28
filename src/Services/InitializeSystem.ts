import { GetAiData } from "../Api/GetAiData";
import { GetAllPrefetchConnections } from "../Api/GetAllPrefetchConnections";
import { BinaryTree } from "../DataStructures/BinaryTree";
import { SettingData } from "../DataStructures/SettingData";
import { Settings } from "../DataStructures/Settings";
import { AiUpdateFlag, GetStatsFromDatabase } from "../Database/NoIndexDb";

export default async function InitializeSystem(){
    var statsData = await GetStatsFromDatabase();
    var settings = statsData as SettingData;
    await GetAiData();
    return true;

}

export async function PurgatoryDatabaseUpdated(){
    Settings.isOnlineSync = true;
    var settingData = new SettingData(Settings.isOnlineSync);
    AiUpdateFlag(settingData);
    
}