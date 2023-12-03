async function CreateData(){
    var json1 = {
        "rafdsakjsfds":{
            "ram": {
                "bam": "testgsdg"
            }
        }
    }
    
    var json2 = {
        "youtbe":{
            "abasdasvv":{
                "sadf": ["hello"]
            }
        }
    }
    
    var concept = await window.tsccs.CreateComposition(json1);
    var concept2 = await window.tsccs.CreateComposition(json2);
    
    await window.tsccs.CreateConnectionBetweenTwoConcepts(concept,concept2, "wall",false);
    
}


//console.log(await window.tsccs.GetTheConcept(20));
await CreateData();
console.log(window.tsccs.SyncData.connectionSyncArray);
window.tsccs.SyncData.SyncDataOnline();
