
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

// StoreId();
// GetId();
//GetIdFromType();
window.syncOnlineData = syncOnlineData;