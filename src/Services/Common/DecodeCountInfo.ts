import { GetConcept } from "../../Api/GetConcept";
import { Concept, Connection } from "../../app";
import { CountInfo } from "../../DataStructures/Count/CountInfo";

export function DecodeCountInfo(countStrings: string[] = []){
    let countInfos: CountInfo[] = [];
    if(countStrings.length > 0){
        for(let i=0; i<countStrings.length; i++){
            let countInfo = separateString(countStrings[i]);
            countInfos.push(countInfo);
        }
    }
    return countInfos;
}

export async function GetConnectionTypeForCount(countInfos: CountInfo[]){
    let CountDictionary:any = {};
    for(let i =0; i<countInfos.length; i++){
        let concept: Concept = await GetConcept(countInfos[i].connectionTypeId);
        countInfos[i].connectionType = concept.characterValue;
        CountDictionary[countInfos[i].conceptId] = countInfos[i];
    }
    return CountDictionary;
}


function separateString(input:string) {
    // Split the string by the underscore
    const parts = input.split('_');
    
    // Check if the input has exactly three parts
    if (parts.length === 3) {
        let countInfo = new CountInfo();
        countInfo.conceptId = Number(parts[0]);
        countInfo.connectionTypeId = Number(parts[1]);
        countInfo.count = Number(parts[2]);
        return countInfo;
    } else {
        throw new Error('Input string must contain exactly three parts separated by underscores.');
    }
}