import { CreateTheCharacter } from "../Api/Create/CreateTheCharacter";
import { GetCharacterByCharacter } from "../Api/GetCharacterDataByCharacter";
import { Returner } from "../DataStructures/Returner";
import { TheCharacter } from "../DataStructures/TheCharacter";

export default async function MakeTheCharacterData(the_character_data: string, userId: number, securityId: number , accessId: number,
    sessionId:number){
        var categoryUserId : number = userId;
        var accessUserId: number = userId;
        var securityUserId: number = userId;
        var sessionInformationUserId: number = userId;

        var theCharacter = new TheCharacter(userId, the_character_data, securityId, securityUserId, accessId, accessUserId,
            sessionId, sessionInformationUserId,"",false);
        var output =  await   CreateTheCharacter(theCharacter);
        var returner = output as Returner;

        return returner;

}