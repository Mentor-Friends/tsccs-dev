import { Concept, CreateDefaultConcept, CreateTheConnectionLocal, handleServiceWorkerException, InnerActions, MakeTheInstanceConceptLocal, MakeTheTypeConceptLocal, sendMessage, serviceWorker } from "../../app";

export  async function CreateData(json: any, ofConcept:Concept | null=null , typeConcept: string ="",actions: InnerActions = {concepts: [], connections: []})
{
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('CreateData', {json, ofConcept, typeConcept, actions})
            if (res?.actions?.concepts?.length) actions.concepts = JSON.parse(JSON.stringify(res.actions.concepts));
            if (res?.actions?.connections?.length) actions.connections = JSON.parse(JSON.stringify(res.actions.connections));
            return res.data
        } catch (err) {
            console.error('CreateTheComposition sw error: ', err);
            handleServiceWorkerException(err);
        }
    }

    let localUserId:number =  999;
    let localAccessId: number = 4;
    let localSessionId: number =  999;
    let orderId: number = 1000;
    
    let MainConcept = CreateDefaultConcept();
    for (const key in json) {
        let prefixedKey = addPrefix(key);
        if((typeof json[key] != 'string' && typeof json[key] != 'number') ){
            if(ofConcept == null || ofConcept.id == 0){
               // let TypeConcept = await MakeTheTypeConceptLocal(prefixedKey, localSessionId, localUserId, localUserId);
                let conceptString = await MakeTheInstanceConceptLocal(prefixedKey, "", true, localUserId, localAccessId, localSessionId, undefined, actions);
                let concept = conceptString as Concept;
                MainConcept = concept;
                if(Array.isArray(json[key])){
                    prefixedKey = addArrayPrefix(prefixedKey);
                }
                await CreateData(json[key], MainConcept,  prefixedKey, actions );
    
            }
            else{
                // remove this because we do not want this to be the type of the connection.
                if(Array.isArray(json[key])){
                    prefixedKey = removeArrayPrefix(prefixedKey);
                }
                let withoutSKey = removeArrayPrefix(key);
                let conceptString = await MakeTheInstanceConceptLocal(prefixedKey, "", true, localUserId, localAccessId, localSessionId,undefined, actions  );
                let concept = conceptString as Concept;
                MainConcept = concept;

                let typeConnectionString = createTypeString(typeConcept, withoutSKey);


                let TypeConcept = await MakeTheTypeConceptLocal(typeConnectionString, localSessionId, localUserId, localUserId, actions);
                await CreateTheConnectionLocal(ofConcept.id, concept.id, TypeConcept.id, orderId, TypeConcept.characterValue, localUserId, actions );
                if(Array.isArray(json[key])){
                    prefixedKey = addArrayPrefix(prefixedKey);
                }
                await CreateData(json[key], concept, prefixedKey, actions );
            }
        }
        else{

            let typeConnectionString = createTypeString(typeConcept, key);
            let TypeConcept = await MakeTheTypeConceptLocal(typeConnectionString, localSessionId, localUserId, localUserId, actions);

            let conceptString = await MakeTheInstanceConceptLocal(key, json[key].toString(), false, localUserId, localAccessId, localSessionId, undefined, actions);
            let concept = conceptString as Concept;
            console.log("this is the type concept in down", TypeConcept,concept);
            if(ofConcept != null){
                await CreateTheConnectionLocal(ofConcept.id, concept.id, TypeConcept.id, orderId, typeConnectionString, localUserId, actions);
            }
        }

      }
      return MainConcept;
}

export function removePrefix(key:string){
    return key.startsWith("the_") ? key.slice(4) : key;
}

export function addPrefix(key:string){
    return key.startsWith("the_") ? key : "the_" + key;
}

export function addArrayPrefix(key:string){
    return key.endsWith("_s") ? key :  key + "_s";
}

export function removeArrayPrefix(key:string){
    return key.replace(/_s$/, '');
}

const isNumeric = (string:any) => /^[+-]?\d+(\.\d+)?$/.test(string)


export function createTypeString(typeConceptString:string, key:any){
    if(isNumeric(key)){
        return typeConceptString + "_";
    }
    return typeConceptString + "_" +  removePrefix(key);
}
