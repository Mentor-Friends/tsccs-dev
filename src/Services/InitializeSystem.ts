import { GetAiData } from "../Api/GetAiData";
import { SettingData } from "../DataStructures/SettingData";
import { Settings } from "../DataStructures/Settings";
import { AiUpdateFlag, GetStatsFromDatabase } from "../Database/indexeddb";

export default async function InitializeSystem(){
    var statsData = await GetStatsFromDatabase();
    var settings = statsData as SettingData;
    if(!settings.isOnlineSync){
        console.log("getting the ai data");
        await GetAiData();
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