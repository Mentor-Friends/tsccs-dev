import { sendMessage, serviceWoker } from "../app";
import { Concept } from "../DataStructures/Concept";
import { SyncData } from "../DataStructures/SyncData";
import { CreateDefaultConcept } from "./CreateDefaultConcept";
import {createTheConnection} from "./CreateTheConnection";
import MakeTheInstanceConcept from "./MakeTheInstanceConcept";

export default async function CreateTheComposition(json: any, ofTheConceptId:number | null=null, ofTheConceptUserId:number | null=null, mainKey: number | null=null, userId: number | null=null, accessId:number | null=null, sessionInformationId:number | null=null)
{
    if (serviceWoker) {
        console.log('data receiving')
        const res: any = await sendMessage('CreateTheComposition', {json, ofTheConceptId, ofTheConceptUserId, mainKey, userId, accessId, sessionInformationId})
        console.log('data received from sw', res)
        return res.data
      } else {
        console.log('used old BT')
        return await CreateTheCompositionData(json, ofTheConceptId, ofTheConceptUserId, mainKey, userId, accessId, sessionInformationId)
      }
}

export async function CreateTheCompositionData(json: any, ofTheConceptId:number | null=null, ofTheConceptUserId:number | null=null, mainKey: number | null=null, userId: number | null=null, accessId:number | null=null, sessionInformationId:number | null=null)
{
    let localUserId:number = userId ?? 999;
    let localAccessId: number = accessId ?? 4;
    let localSessionId: number = sessionInformationId ?? 999;
    let MainKeyLocal: number = mainKey ?? 0;
    let MainConcept = CreateDefaultConcept();
    for (const key in json) {
        if((typeof json[key] != 'string' && typeof json[key] != 'number') ){
            if(ofTheConceptId == null && ofTheConceptUserId == null){

                let localMainKey = MainKeyLocal;
                let conceptString = await MakeTheInstanceConcept(key, "", true, localUserId, localAccessId, localSessionId);
                let concept = conceptString as Concept;
                MainConcept = concept;
                localMainKey = concept.id;
                MainKeyLocal = concept.id;

                await CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId );
    
            }
            else{
                let ofThe:number = ofTheConceptId ?? 999;
                let ofTheUser:number = ofTheConceptUserId ?? 999;
                let localMainKey = MainKeyLocal;
                let conceptString = await MakeTheInstanceConcept(key, "", true, localUserId, localAccessId, localSessionId  );
                let concept = conceptString as Concept;
                MainConcept = concept;
                await createTheConnection(ofThe, ofTheUser, concept.id, localMainKey);
                await CreateTheComposition(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId );
            }
        }
        else{
            let ofThe:number = ofTheConceptId ?? 999;
            let ofTheUser:number = ofTheConceptUserId ?? 10267;
            let localMainKey = MainKeyLocal;
            let conceptString = await MakeTheInstanceConcept(key, json[key].toString(), false, localUserId, localAccessId, localSessionId);
            let concept = conceptString as Concept;
            await createTheConnection(ofThe, ofTheUser, concept.id,  localMainKey);

        }

      }
      return MainConcept;
}

