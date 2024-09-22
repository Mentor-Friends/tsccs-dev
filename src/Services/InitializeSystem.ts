import { GetAiData } from "../Api/GetAiData";
import { SettingData } from "../DataStructures/SettingData";
import { Settings } from "../DataStructures/Settings";
import { AiUpdateFlag, GetLastSettingsFromDatabase, openDatabase } from "../Database/indexeddb";
import { openDatabase as localopenDb} from '../Database/indexdblocal';

export default async function InitializeSystem(enableAi: boolean = true){
    try{
        await openDatabase("concepts");
        await localopenDb("concepts");
        if(enableAi){
            var statsData = await GetLastSettingsFromDatabase();
            var settings = statsData as SettingData;
            if(settings.isOnlineSync){
                return true;
            }
            await GetAiData();
    
        }

        return true;
    }
    catch(error){
        let errorObject = {
            "message" : "cannot initlize the AI system",
            "ok": false,
            "status": 400,
            "data": error
        }
        console.log(errorObject);
        return true;
    }

}

export async function PurgatoryDatabaseUpdated(){
    Settings.isOnlineSync = true;
    var settingData = new SettingData(Settings.isOnlineSync);
    AiUpdateFlag(settingData);
    
}