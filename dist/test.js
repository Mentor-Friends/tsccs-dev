var json1 = {
    "rafdsakjsfds":{
        "ram": {
            "bam": "testgsdg"
        }
    }
}

var json2 = {
    "youtbe":{
        "asdg":{
            "sadf": ["hello"]
        }
    }
}

var concept = await window.tsccs.CreateComposition(json1);
var concept2 = await window.tsccs.CreateComposition(json2);

window.tsccs.CreateConnectionBetweenTwoConcepts(concept,concept2, "wall",false);

