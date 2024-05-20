import { Concept } from "../../DataStructures/Concept";
import { SyncData } from "../../DataStructures/SyncData";
import { CreateDefaultConcept } from "../CreateDefaultConcept";
import CreateTheConnectionLocal from "./CreateTheConnectionLocal";
import {MakeTheInstanceConceptLocal} from "./MakeTheInstanceConceptLocal";

export async function CreateTheCompositionLocal(json: any, ofTheConceptId:number | null=null, ofTheConceptUserId:number | null=null, mainKey: number | null=null, userId: number | null=null, accessId:number | null=null, sessionInformationId:number | null=null)
{
    var localUserId:number = userId ?? 999;
    var localAccessId: number = accessId ?? 999;
    var localSessionId: number = sessionInformationId ?? 999;
    var MainKeyLocal: number = mainKey ?? 0;
    var MainConcept = CreateDefaultConcept();
    for (const key in json) {
        if(typeof json[key] != 'string' && typeof json[key] != 'number' ){
            if(ofTheConceptId == null && ofTheConceptUserId == null){

                var localMainKey = MainKeyLocal;
                let conceptString = await MakeTheInstanceConceptLocal(key, "", true, localUserId, localAccessId, localSessionId);
                var concept = conceptString as Concept;
                MainConcept = concept;
                localMainKey = concept.id;
                MainKeyLocal = concept.id;
                await CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId );
    
            }
            else{
                var ofThe:number = ofTheConceptId ?? 999;
                var ofTheUser:number = ofTheConceptUserId ?? 999;
                var localMainKey = MainKeyLocal;
                var conceptString = await MakeTheInstanceConceptLocal(key, "", true, localUserId, localAccessId, localSessionId  );
                var concept = conceptString as Concept;
                await CreateTheConnectionLocal(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);
                await CreateTheCompositionLocal(json[key], concept.id, concept.userId, localMainKey, userId, accessId, sessionInformationId );
            }
        }
        else{
            var ofThe:number = ofTheConceptId ?? 999;
            var ofTheUser:number = ofTheConceptUserId ?? 999;
            var localMainKey = MainKeyLocal;
            var conceptString = await MakeTheInstanceConceptLocal(key, json[key], false, localUserId, localAccessId, localSessionId);
            var concept = conceptString as Concept;
            await CreateTheConnectionLocal(ofThe, ofTheUser, concept.id, concept.userId, localMainKey, localSessionId, concept.userId);

        }

      }
      return MainConcept;
}

