import { Concept, CreateDefaultConcept, CreateTheConnectionLocal, handleServiceWorkerException, MakeTheInstanceConceptLocal, MakeTheTypeConceptLocal, sendMessage, serviceWorker } from "../../app";

export  async function CreateData(json: any, ofConcept:Concept | null=null , typeConcept: string ="")
{
    if (serviceWorker) {
        try {
            const res: any = await sendMessage('CreateData', {json, ofConcept, typeConcept})
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
                let conceptString = await MakeTheInstanceConceptLocal(prefixedKey, "", true, localUserId, localAccessId, localSessionId);
                let concept = conceptString as Concept;
                MainConcept = concept;
                if(Array.isArray(json[key])){
                    prefixedKey = addArrayPrefix(prefixedKey);
                }
                await CreateData(json[key], MainConcept,  prefixedKey );
    
            }
            else{
                // remove this because we do not want this to be the type of the connection.
                if(Array.isArray(json[key])){
                    prefixedKey = removeArrayPrefix(prefixedKey);
                    console.log("this is the prefix", prefixedKey);
                }
                let withoutSKey = removeArrayPrefix(key);
                let conceptString = await MakeTheInstanceConceptLocal(prefixedKey, "", true, localUserId, localAccessId, localSessionId  );
                let concept = conceptString as Concept;
                MainConcept = concept;

                let typeConnectionString = createTypeString(typeConcept, withoutSKey);


                let TypeConcept = await MakeTheTypeConceptLocal(typeConnectionString, localSessionId, localUserId, localUserId);
                console.log("this is the type ", TypeConcept);
                await CreateTheConnectionLocal(ofConcept.id, concept.id, TypeConcept.id, orderId, TypeConcept.characterValue, localUserId );
                if(Array.isArray(json[key])){
                    prefixedKey = addArrayPrefix(prefixedKey);
                    console.log("this is the prefix after", prefixedKey);
                }
                await CreateData(json[key], concept, prefixedKey );
            }
        }
        else{
            let typeConnectionString = createTypeString(typeConcept, key);
            let TypeConcept = await MakeTheTypeConceptLocal(typeConnectionString, localSessionId, localUserId, localUserId);

            let conceptString = await MakeTheInstanceConceptLocal(key, json[key].toString(), false, localUserId, localAccessId, localSessionId);
            let concept = conceptString as Concept;
            if(ofConcept != null){
                await CreateTheConnectionLocal(ofConcept.id, concept.id, TypeConcept.id, orderId, typeConnectionString, localUserId);
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



export function createTypeString(typeConceptString:string, key:string){
    return typeConceptString + "_" +  removePrefix(key);
}
