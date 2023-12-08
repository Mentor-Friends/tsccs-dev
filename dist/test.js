
function SignIn(){
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
    let form = document.createElement('form');
    form.setAttribute('method','GET');
    form.setAttribute('action', oauth2Endpoint);

    let params = {
        "client_id": "963039502925-j3k4u6n3l6ngsdl3rmc5q0g523jdlmap.apps.googleusercontent.com",
        "redirect_uri":"http://127.0.0.1:5500/profile.html",
        "response_type":"token",
        "scope": "https://www.googleapis.com/auth/userinfo.email",
        "include_granted_scopes": 'true',
        'state': 'pass-through-value'
    }

    for(var p in params){
        let input = document.createElement('input');
        input.setAttribute('type','hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.append(input);
    }
    document.body.appendChild(form);
    form.submit();
}



function StoreId(){
    var concept = {'id':20,'a': 'b'};
    window.tsccs.storeToDatabase("concepts",concept);
}

function GetId(){
    window.tsccs.getFromDatabase("concepts",20);
}

function GetIdFromType(){
    window.tsccs.getFromDatabaseWithType("concepts","categoryId",4);
}

function syncOnlineData(){
    console.log(window.tsccs.SyncData.conceptsSyncArray);
    console.log(window.tsccs.SyncData.connectionSyncArray);
    window.tsccs.SyncData.SyncDataOnline();
}


var json ={
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        }
    }
};

var perform1 = performance.now();
window.tsccs.CreateComposition(json).then(concept=>{
    console.log("this is the final");
    console.log(concept);
    syncOnlineData();
    var perform2 = performance.now();
    console.log("the time for the data to be written is "+ perform2-perform1);
});
// console.log("this is the main");
// window.tsccs.ConceptsData.GetConceptByCharacterAndTypeLocal("New York Bulls",100113841).then(conceptList=>{
//     console.log("this is the concept listsssdf");
//     console.log(conceptList);
// });

// StoreId();
// GetId();
//GetIdFromType();
window.syncOnlineData = syncOnlineData;